"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/providers/auth-provider";
import { PAYMENT_OPTIONS } from "@/lib/nav";
import { cn, formatPHP } from "@/lib/utils";

const PRESETS = [100, 500, 1000, 5000, 10000];

export function WalletForm({ initialBalance }: { initialBalance: number }) {
  const { user, refresh } = useAuth();
  const [action, setAction] = React.useState<"deposit" | "withdraw">("deposit");
  const [amount, setAmount] = React.useState("");
  const [method, setMethod] = React.useState("gcash");
  const [loading, setLoading] = React.useState(false);

  const balance = user?.balance ?? initialBalance;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, amount: amt, method }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Transaction failed.");
        return;
      }
      toast.success(
        action === "deposit"
          ? `Deposited ${formatPHP(amt)} successfully!`
          : `Withdrew ${formatPHP(amt)} successfully!`,
      );
      setAmount("");
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Action toggle */}
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
        {(["deposit", "withdraw"] as const).map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAction(a)}
            className={cn(
              "rounded-md py-2 text-sm font-semibold capitalize transition-colors",
              action === a
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {a}
          </button>
        ))}
      </div>

      {/* Payment method */}
      <div className="space-y-2">
        <Label>{action === "deposit" ? "Payment method" : "Withdraw to"}</Label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PAYMENT_OPTIONS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setMethod(p.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg border p-3 text-left text-sm transition-colors",
                method === p.id
                  ? "border-primary bg-primary/10"
                  : "border-border/60 hover:border-primary/40",
              )}
            >
              <span className="text-xl">{p.emoji}</span>
              <div className="min-w-0">
                <div className="truncate font-medium">{p.name}</div>
                <div className="text-[11px] text-muted-foreground">
                  {p.fee} · {p.time}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Amount */}
      <div className="space-y-2">
        <Label htmlFor="amount">
          Amount {action === "withdraw" && `(max ${formatPHP(balance)})`}
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            ₱
          </span>
          <Input
            id="amount"
            type="number"
            min={1}
            step="any"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="pl-7 text-lg"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              className="rounded-full border border-border/60 px-3 py-1 text-xs hover:border-primary/50 hover:text-foreground"
            >
              +{formatPHP(p)}
            </button>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading && <Loader2 className="size-4 animate-spin" />}
        {action === "deposit" ? "Deposit now" : "Withdraw now"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Demo wallet — no real money is processed or stored.
      </p>
    </form>
  );
}
