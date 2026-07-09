import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { db } from "@/db";
import { users, sessions, transactions, favorites } from "@/db/schema";
import { eq, and, gt, desc } from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";
import type { SafeUser, Transaction } from "@/lib/types";

export const SESSION_COOKIE = "pv_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

/* -------------------------------------------------------------------------- */
/*  Password helpers (Node scrypt — no external dependencies)                */
/* -------------------------------------------------------------------------- */

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, key] = stored.split(":");
  if (!salt || !key) return false;
  const hashBuf = Buffer.from(scryptSync(password, salt, 64));
  const keyBuf = Buffer.from(key, "hex");
  if (hashBuf.length !== keyBuf.length) return false;
  return timingSafeEqual(hashBuf, keyBuf);
}

/* -------------------------------------------------------------------------- */
/*  Mappers                                                                   */
/* -------------------------------------------------------------------------- */

type UserRow = InferSelectModel<typeof users>;

function toSafeUser(u: UserRow): SafeUser {
  return {
    id: u.id,
    username: u.username,
    email: u.email,
    balance: Number(u.balance),
    vipLevel: u.vipLevel,
    vipPoints: u.vipPoints,
    createdAt: u.createdAt.toISOString(),
  };
}

/* -------------------------------------------------------------------------- */
/*  Registration & login                                                      */
/* -------------------------------------------------------------------------- */

export class AuthError extends Error {}

export async function createUser(input: {
  username: string;
  email: string;
  password: string;
}): Promise<SafeUser> {
  const email = input.email.trim().toLowerCase();
  const username = input.username.trim();

  const [emailTaken] = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (emailTaken) throw new AuthError("An account with that email already exists.");

  const [nameTaken] = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.username, username))
    .limit(1);
  if (nameTaken) throw new AuthError("That username is already taken.");

  const [user] = await db
    .insert(users)
    .values({
      username,
      email,
      passwordHash: hashPassword(input.password),
      balance: "500.00", // welcome credit
    })
    .returning();

  await db.insert(transactions).values({
    userId: user.id,
    type: "bonus",
    amount: "500.00",
    status: "completed",
    method: "welcome",
    reference: "WELCOME-BONUS",
  });

  return createSession(user.id);
}

export async function authenticate(
  email: string,
  password: string,
): Promise<SafeUser | null> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email.trim().toLowerCase()))
    .limit(1);
  if (!user) return null;
  if (!verifyPassword(password, user.passwordHash)) return null;
  return createSession(user.id);
}

/* -------------------------------------------------------------------------- */
/*  Sessions                                                                  */
/* -------------------------------------------------------------------------- */

export async function createSession(userId: string): Promise<SafeUser> {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await db.insert(sessions).values({ userId, token, expiresAt });

  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });

  return toSafeUser(user!);
}

export async function getSessionUser(): Promise<SafeUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const [session] = await db
    .select()
    .from(sessions)
    .where(and(eq(sessions.token, token), gt(sessions.expiresAt, new Date())))
    .limit(1);
  if (!session) return null;

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);
  if (!user) return null;

  return toSafeUser(user);
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    await db.delete(sessions).where(eq(sessions.token, token));
  }
  cookieStore.delete(SESSION_COOKIE);
}

/** Throws a redirect to /login when used inside a server component. */
export async function requireUser(): Promise<SafeUser> {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}

/* -------------------------------------------------------------------------- */
/*  Wallet & activity                                                         */
/* -------------------------------------------------------------------------- */

export async function getUserById(userId: string): Promise<SafeUser | null> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return user ? toSafeUser(user) : null;
}

export async function adjustBalance(
  userId: string,
  amount: number,
  type: Transaction["type"],
  method: string,
): Promise<SafeUser> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!user) throw new AuthError("Account not found.");

  const current = Number(user.balance);
  const credit = type === "deposit" || type === "win" || type === "bonus";
  const next = credit ? current + amount : current - amount;
  if (next < 0) throw new AuthError("Insufficient balance.");

  await db
    .update(users)
    .set({ balance: next.toFixed(2) })
    .where(eq(users.id, userId));

  await db.insert(transactions).values({
    userId,
    type,
    amount: amount.toFixed(2),
    status: "completed",
    method,
    reference: `${type.toUpperCase()}-${randomBytes(3).toString("hex").toUpperCase()}`,
  });

  return { ...toSafeUser(user), balance: next };
}

export async function getTransactions(userId: string): Promise<Transaction[]> {
  const rows = await db
    .select()
    .from(transactions)
    .where(eq(transactions.userId, userId))
    .orderBy(desc(transactions.createdAt))
    .limit(100);
  return rows.map((r) => ({
    id: r.id,
    userId: r.userId,
    type: r.type,
    amount: Number(r.amount),
    status: r.status,
    method: r.method,
    reference: r.reference,
    createdAt: r.createdAt.toISOString(),
  }));
}

/* -------------------------------------------------------------------------- */
/*  Favorites                                                                 */
/* -------------------------------------------------------------------------- */

export async function getFavoriteIds(userId: string): Promise<string[]> {
  const rows = await db
    .select({ gameId: favorites.gameId })
    .from(favorites)
    .where(eq(favorites.userId, userId));
  return rows.map((r) => r.gameId);
}

export async function toggleFavorite(
  userId: string,
  gameId: string,
): Promise<boolean> {
  const [existing] = await db
    .select({ id: favorites.id })
    .from(favorites)
    .where(and(eq(favorites.userId, userId), eq(favorites.gameId, gameId)))
    .limit(1);
  if (existing) {
    await db.delete(favorites).where(eq(favorites.id, existing.id));
    return false;
  }
  await db.insert(favorites).values({ userId, gameId });
  return true;
}
