"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const SYMBOLS = ["💎", "⭐", "7️⃣", "🔔", "🍒", "🍀"];

export function BJ88GameLauncher({
  gameId,
  title,
  emoji,
}: {
  gameId: string;
  title: string;
  emoji: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [credits, setCredits] = React.useState(1000);
  const [spinning, setSpinning] = React.useState(false);
  const [reel, setReel] = React.useState<string[]>([emoji, "⭐", emoji]);
  const BET = 50;

  async function spin() {
    if (credits < BET) {
      toast.error("Not enough demo credits.");
      return;
    }
    setSpinning(true);
    setCredits((c) => c - BET);
    await new Promise((r) => setTimeout(r, 600));
    const next = [0, 1, 2].map(() => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
    setReel(next);
    if (next.every((s) => s === next[0])) {
      const prize = BET * (5 + Math.floor(Math.random() * 20));
      setCredits((c) => c + prize);
      toast.success(`Big win! +৳${prize} (demo)`);
    }
    setSpinning(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-bold text-black hover:brightness-110 transition-all">
          ▶ Play Now
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md border-[#2a2a45] bg-[#1a1a2e]">
        <DialogTitle className="text-center text-white">{title}</DialogTitle>
        <div className="flex justify-center gap-3 text-5xl">
          {reel.map((s, i) => (
            <span key={i} className={cn(spinning && "animate-pulse")}>{s}</span>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg border border-[#2a2a45] bg-[#0a0a14] px-4 py-2 text-sm">
          <span className="text-gray-400">Demo credits</span>
          <span className="font-semibold text-[#f0b429]">৳{credits}</span>
        </div>
        <button
          onClick={spin}
          disabled={spinning}
          className="w-full rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-bold text-black hover:brightness-110 disabled:opacity-50"
        >
          {spinning ? "Spinning…" : `Spin (৳${BET})`}
        </button>
        <p className="text-center text-xs text-gray-500">Demo mode — no real money involved.</p>
      </DialogContent>
    </Dialog>
  );
}
