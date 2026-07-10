import { cookies } from "next/headers";

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  balance: number;
}

const SESSION_COOKIE = "bsl-session";

const DEMO_USERS = new Map<string, { id: string; username: string; email: string; password: string; balance: number }>();

export async function getSessionUser(): Promise<AuthUser | null> {
  const store = await cookies();
  const session = store.get(SESSION_COOKIE)?.value;
  if (!session) return null;
  const user = DEMO_USERS.get(session);
  if (!user) return null;
  return { id: user.id, username: user.username, email: user.email, balance: user.balance };
}

export async function createSession(username: string, password: string): Promise<AuthUser | null> {
  let user = Array.from(DEMO_USERS.values()).find((u) => u.username === username);
  if (!user) {
    user = { id: crypto.randomUUID(), username, email: `${username}@bslgaming.com.bd`, password, balance: 500 };
    DEMO_USERS.set(user.id, user);
  } else if (user.password !== password) {
    return null;
  }
  const store = await cookies();
  store.set(SESSION_COOKIE, user.id, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 604800 });
  return { id: user.id, username: user.username, email: user.email, balance: user.balance };
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function updateBalance(userId: string, amount: number): Promise<number> {
  const user = DEMO_USERS.get(userId);
  if (!user) throw new Error("User not found");
  user.balance += amount;
  return user.balance;
}

export function getDemoUserById(userId: string) {
  return DEMO_USERS.get(userId);
}
