"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { AuthShell } from "@/components/auth/auth-shell";

export function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!username.trim() || !password) {
      toast.error("Please enter your username and password.");
      return;
    }
    setLoading(true);
    try {
      const user = await signIn(username.trim(), password);
      if (user) {
        toast.success(`Welcome back, ${user.username}!`);
        router.push("/dashboard");
      } else {
        toast.error("Invalid username or password. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your BJ88 account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[#f5a623] hover:underline"
          >
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-username"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Username
          </label>
          <input
            id="login-username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="login-password"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-lg px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </AuthShell>
  );
}
