"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function TwoFactorToggle() {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/toggle-2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enable: !enabled }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update");
      setEnabled(data.enabled);
      toast.success(data.enabled ? "2FA enabled successfully" : "2FA disabled");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update 2FA");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-[#9ca3af]">
          Add an extra layer of security to your account. When enabled, you&apos;ll need a verification code
          from your phone in addition to your password.
        </p>
        <p className="mt-2 text-xs font-semibold text-[#f0f0f0]">
          Status: <span className={enabled ? "text-[#22c55e]" : "text-[#9ca3af]"}>{enabled ? "Enabled" : "Disabled"}</span>
        </p>
      </div>
      <button
        type="button"
        onClick={toggle}
        disabled={loading}
        aria-label="Toggle 2FA"
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition",
          enabled ? "bg-[#008d5b]" : "bg-[#2a2c30]",
          loading && "opacity-50"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all",
            enabled ? "left-[22px]" : "left-0.5"
          )}
        />
      </button>
    </div>
  );
}
