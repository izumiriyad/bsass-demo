"use client";

import * as React from "react";
import { Eye, EyeOff, Loader as Loader2, Check, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PasswordStrength {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

function checkPasswordStrength(password: string): PasswordStrength {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}

function getPasswordScore(strength: PasswordStrength): number {
  return Object.values(strength).filter(Boolean).length;
}

const STRENGTH_CONFIG: Record<"very-weak" | "weak" | "medium" | "strong" | "very-strong", { label: string; color: string }> = {
  "very-weak": { label: "Very weak", color: "bg-destructive" },
  "weak": { label: "Weak", color: "bg-orange-500" },
  "medium": { label: "Medium", color: "bg-amber-500" },
  "strong": { label: "Strong", color: "bg-emerald-500" },
  "very-strong": { label: "Very strong", color: "bg-emerald-400" },
};

export function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showCurrent, setShowCurrent] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const strength = React.useMemo(() => checkPasswordStrength(newPassword), [newPassword]);
  const score = getPasswordScore(strength);
  const strengthLevel =
    score === 0 ? "very-weak" :
    score === 1 ? "weak" :
    score === 2 ? "medium" :
    score === 3 ? "strong" :
    "very-strong";

  const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;
  const canSubmit = passwordsMatch && score >= 3 && currentPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    toast.success("Password changed successfully!");

    // Reset form
    setTimeout(() => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/20">
          <Check className="size-6 text-emerald-500" />
        </div>
        <p className="font-semibold">Password updated!</p>
        <p className="text-sm text-muted-foreground">
          Your new password has been saved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Current password */}
      <div className="space-y-2">
        <Label htmlFor="current-password">Current password</Label>
        <div className="relative">
          <Input
            id="current-password"
            type={showCurrent ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label={showCurrent ? "Hide password" : "Show password"}
          >
            {showCurrent ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>

      {/* New password */}
      <div className="space-y-2">
        <Label htmlFor="new-password">New password</Label>
        <div className="relative">
          <Input
            id="new-password"
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label={showNew ? "Hide password" : "Show password"}
          >
            {showNew ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>

        {/* Password strength indicator */}
        {newPassword.length > 0 && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    i <= score ? STRENGTH_CONFIG[strengthLevel].color : "bg-muted"
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Password strength: <span className={cn("font-medium", STRENGTH_CONFIG[strengthLevel].color.replace("bg-", "text-"))}>
                {STRENGTH_CONFIG[strengthLevel].label}
              </span>
            </p>
            <ul className="space-y-1 text-xs">
              <li className="flex items-center gap-2">
                {strength.length ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <X className="size-3.5 text-muted-foreground" />
                )}
                At least 8 characters
              </li>
              <li className="flex items-center gap-2">
                {strength.uppercase && strength.lowercase ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <X className="size-3.5 text-muted-foreground" />
                )}
                Upper and lowercase letters
              </li>
              <li className="flex items-center gap-2">
                {strength.number ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <X className="size-3.5 text-muted-foreground" />
                )}
                At least one number
              </li>
              <li className="flex items-center gap-2">
                {strength.special ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <X className="size-3.5 text-muted-foreground" />
                )}
                At least one special character
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm password */}
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm new password</Label>
        <div className="relative">
          <Input
            id="confirm-password"
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {confirmPassword.length > 0 && (
          <p className={cn(
            "text-xs flex items-center gap-1",
            passwordsMatch ? "text-emerald-500" : "text-destructive"
          )}>
            {passwordsMatch ? (
              <>
                <Check className="size-3.5" /> Passwords match
              </>
            ) : (
              <>
                <X className="size-3.5" /> Passwords do not match
              </>
            )}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={!canSubmit || loading}
      >
        {loading && <Loader2 className="size-4 animate-spin" />}
        Update password
      </Button>
    </form>
  );
}
