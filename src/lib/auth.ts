import { cookies } from "next/headers";

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  balance: number;
}

const SESSION_COOKIE = "bj88-session";

// Simple in-memory user store for demo purposes
const DEMO_USERS = new Map<string, { id: string; username: string; email: string; password: string; balance: number }>();

export async function getSessionUser(): Promise<AuthUser | null> {
  const store = await cookies();
  const session = store.get(SESSION_COOKIE)?.value;
  if (!session) return null;

  const user = DEMO_USERS.get(session);
  if (!user) return null;

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    balance: user.balance,
  };
}

export async function createSession(username: string, password: string): Promise<AuthUser | null> {
  // Find or create demo user
  let user = Array.from(DEMO_USERS.values()).find((u) => u.username === username);

  if (!user) {
    // Create new user for demo
    user = {
      id: crypto.randomUUID(),
      username,
      email: `${username}@bj88.com.bd`,
      password,
      balance: 500, // Welcome bonus ৳500
    };
    DEMO_USERS.set(user.id, user);
  } else if (user.password !== password) {
    return null;
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, user.id, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    balance: user.balance,
  };
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
