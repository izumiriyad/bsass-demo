"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader as Loader2, Check, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/providers/auth-provider";
import { AuthShell } from "./auth-shell";
import { SocialLoginGroup } from "@/components/ui/social-login";
import { cn } from "@/lib/utils";

function checkPasswordStrength(password: string) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}

export function RegisterForm() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const strength = React.useMemo(() => checkPasswordStrength(password), [password]);
  const score = Object.values(strength).filter(Boolean).length;
  const passwordsMatch = password === confirm && password.length > 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!agree) {
      toast.error("Please accept the terms to continue.");
      return;
    }
    setLoading(true);
    const res = await signUp({ username, email, password });
    setLoading(false);
    if (res.ok) {
      toast.success("Account created! Enjoy your ₱500 welcome credit.");
      router.push("/dashboard");
      router.refresh();
    } else {
      toast.error(res.error || "Unable to create account.");
    }
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join 180,000+ players. Get ₱500 free + a 100% bonus."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            required
            minLength={3}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="luckyplayer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {password.length > 0 && (
            <div className="space-y-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors",
                      i <= score
                        ? score <= 2
                          ? "bg-orange-500"
                          : score <= 3
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                        : "bg-muted"
                    )}
                  />
                ))}
              </div>
              <ul className="grid grid-cols-2 gap-1 text-xs">
                <li className={cn("flex items-center gap-1", strength.length ? "text-emerald-500" : "text-muted-foreground")}>
                  {strength.length ? <Check className="size-3" /> : <X className="size-3" />}
                  8+ characters
                </li>
                <li className={cn("flex items-center gap-1", strength.uppercase ? "text-emerald-500" : "text-muted-foreground")}>
                  {strength.uppercase ? <Check className="size-3" /> : <X className="size-3" />}
                  Uppercase
                </li>
                <li className={cn("flex items-center gap-1", strength.lowercase ? "text-emerald-500" : "text-muted-foreground")}>
                  {strength.lowercase ? <Check className="size-3" /> : <X className="size-3" />}
                  Lowercase
                </li>
                <li className={cn("flex items-center gap-1", strength.number ? "text-emerald-500" : "text-muted-foreground")}>
                  {strength.number ? <Check className="size-3" /> : <X className="size-3" />}
                  Number
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm password</Label>
          <div className="relative">
            <Input
              id="confirm"
              type={show ? "text" : "password"}
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter your password"
            />
            {confirm.length > 0 && (
              <span className={cn("absolute right-3 top-1/2 -translate-y-1/2", passwordsMatch ? "text-emerald-500" : "text-destructive")}>
                {passwordsMatch ? <Check className="size-4" /> : <X className="size-4" />}
              </span>
            )}
          </div>
          {confirm.length > 0 && (
            <p className={cn("text-xs", passwordsMatch ? "text-emerald-500" : "text-destructive")}>
              {passwordsMatch ? "Passwords match" : "Passwords do not match"}
            </p>
          )}
        </div>
        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 size-4 accent-violet-600"
          />
          <span>
            I am at least 18 years old and agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
          {loading && <Loader2 className="size-4 animate-spin" />}
          Create account
        </Button>

        <SocialLoginGroup />
      </form>
    </AuthShell>
  );
}
