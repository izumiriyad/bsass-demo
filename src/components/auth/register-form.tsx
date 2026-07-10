"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { AuthShell } from "@/components/auth/auth-shell";

export function RegisterForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!agree) {
      toast.error("Please accept the terms and conditions to continue.");
      return;
    }

    setLoading(true);
    try {
      const user = await signIn(username.trim(), password);
      if (user) {
        toast.success("Account created! Enjoy your ৳500 welcome credit.");
        router.push("/dashboard");
      } else {
        toast.error("Could not create your account. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join BJ88 Bangladesh. Get ৳500 free + a 100% bonus."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-[#f5a623] hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="reg-username"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Username
          </label>
          <input
            id="reg-username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="reg-email"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Email
          </label>
          <input
            id="reg-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="reg-password"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Password
          </label>
          <input
            id="reg-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="reg-confirm"
            className="text-xs font-semibold text-[#c8c8d6]"
          >
            Confirm Password
          </label>
          <input
            id="reg-confirm"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
          />
        </div>

        <label className="flex items-start gap-2.5 text-xs text-[#c8c8d6]">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#f5a623]"
          />
          <span>
            I am 18+ and agree to the{" "}
            <Link href="/terms" className="font-semibold text-[#f5a623] hover:underline">
              Terms
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="font-semibold text-[#f5a623] hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-lg px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
        >
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>
    </AuthShell>
  );
}
