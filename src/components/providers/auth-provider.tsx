"use client";

import * as React from "react";
import type { SafeUser } from "@/lib/types";

interface AuthResult {
  ok: boolean;
  error?: string;
}

interface SignUpInput {
  username: string;
  email: string;
  password: string;
}

interface AuthContextValue {
  user: SafeUser | null;
  loading: boolean;
  refresh: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (input: SignUpInput) => Promise<AuthResult>;
  signOut: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: SafeUser | null;
}) {
  const [user, setUser] = React.useState<SafeUser | null>(initialUser);
  const [loading, setLoading] = React.useState(false);

  const refresh = React.useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (res.ok) setUser(await res.json());
      else setUser(null);
    } catch {
      setUser(null);
    }
  }, []);

  const signIn = React.useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) return { ok: false, error: data.error };
        setUser(data.user);
        return { ok: true };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const signUp = React.useCallback(
    async (input: SignUpInput): Promise<AuthResult> => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(input),
        });
        const data = await res.json();
        if (!res.ok) return { ok: false, error: data.error };
        setUser(data.user);
        return { ok: true };
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const signOut = React.useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  }, []);

  const value = React.useMemo(
    () => ({ user, loading, refresh, signIn, signUp, signOut }),
    [user, loading, refresh, signIn, signUp, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
