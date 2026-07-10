"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { AuthUser } from "@/lib/auth";

interface AuthContextValue {
  user: AuthUser | null;
  signIn: (username: string, password: string) => Promise<AuthUser | null>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: AuthUser | null;
  children: ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(initialUser);

  // Keep client state in sync if the server-provided initialUser changes
  // (e.g. after a full navigation or re-render with new props).
  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  const signIn = useCallback(
    async (username: string, password: string): Promise<AuthUser | null> => {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { user: AuthUser | null };
      if (data.user) {
        setUser(data.user);
        return data.user;
      }
      return null;
    },
    []
  );

  const signOut = useCallback(async (): Promise<void> => {
    await fetch("/api/auth", { method: "DELETE" });
    setUser(null);
  }, []);

  const refreshUser = useCallback(async (): Promise<void> => {
    try {
      const res = await fetch("/api/auth", { method: "GET" });
      if (!res.ok) {
        setUser(null);
        return;
      }
      const data = (await res.json()) as { user: AuthUser | null };
      setUser(data.user);
    } catch {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
