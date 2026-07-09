"use client";

import * as React from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { SafeUser } from "@/lib/types";

export function ProfileForm({ user }: { user: SafeUser }) {
  const [loading, setLoading] = React.useState(false);
  const [limits, setLimits] = React.useState({
    depositLimit: true,
    sessionReminder: false,
    realityCheck: true,
    marketing: true,
  });

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Preferences saved.");
  }

  return (
    <form onSubmit={onSave} className="space-y-6">
      <div className="rounded-xl border border-border/60 bg-card/50 p-5">
        <h2 className="font-semibold">Account details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={user.username} readOnly disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={user.email} readOnly disabled />
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Contact support to change your username or email.
        </p>
      </div>

      <div className="rounded-xl border border-border/60 bg-card/50 p-5">
        <h2 className="font-semibold">Responsible gaming</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Manage tools that help you stay in control of your play.
        </p>
        <div className="mt-4 space-y-4">
          <ToggleRow
            label="Daily deposit limit"
            desc="Cap your daily deposits at ₱5,000."
            checked={limits.depositLimit}
            onChange={(v) => setLimits((s) => ({ ...s, depositLimit: v }))}
          />
          <ToggleRow
            label="Session reminders"
            desc="Get notified every hour while playing."
            checked={limits.sessionReminder}
            onChange={(v) => setLimits((s) => ({ ...s, sessionReminder: v }))}
          />
          <ToggleRow
            label="Reality check"
            desc="Show a summary of your playtime periodically."
            checked={limits.realityCheck}
            onChange={(v) => setLimits((s) => ({ ...s, realityCheck: v }))}
          />
          <ToggleRow
            label="Promotional emails"
            desc="Receive bonuses and updates by email."
            checked={limits.marketing}
            onChange={(v) => setLimits((s) => ({ ...s, marketing: v }))}
          />
        </div>
      </div>

      <Button type="submit" variant="gradient" disabled={loading}>
        {loading && <Loader2 className="size-4 animate-spin" />}
        Save preferences
      </Button>
    </form>
  );
}

function ToggleRow({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} aria-label={label} />
    </div>
  );
}
