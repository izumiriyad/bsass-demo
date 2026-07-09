"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/types";
import { formatPHP } from "@/lib/utils";

const BET = 50;
const SYMBOLS = ["💎", "⭐", "7️⃣", "🔔", "🍒"];

export function GameLauncher({ game }: { game: Game }) {
  const [open, setOpen] = React.useState(false);
  const [credits, setCredits] = React.useState(1000);
  const [spinning, setSpinning] = React.useState(false);
  const [reel, setReel] = React.useState<string[]>([
    game.emoji,
    "⭐",
    game.emoji,
  ]);

  async function spin() {
    if (credits < BET) {
      toast.error("Not enough demo credits. Reload the page to reset.");
      return;
    }
    setSpinning(true);
    setCredits((c) => c - BET);
    await new Promise((r) => setTimeout(r, 650));
    const next = [0, 1, 2].map(
      () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    );
    setReel(next);
    const win = next.every((s) => s === next[0]);
    if (win) {
      const prize = BET * (5 + Math.floor(Math.random() * 20));
      setCredits((c) => c + prize);
      toast.success(`Big win! +${formatPHP(prize)} (demo)`);
    }
    setSpinning(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="gradient" className="w-full">
          ▶ Play now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogTitle className="text-center">{game.title}</DialogTitle>
        <DialogDescription className="text-center">
          Demo mode — no real money is involved.
        </DialogDescription>
        <div className="flex justify-center gap-3 text-5xl">
          {reel.map((s, i) => (
            <span
              key={i}
              className={spinning ? "animate-pulse" : ""}
              aria-hidden
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border/70 bg-card/60 px-4 py-2 text-sm">
          <span className="text-muted-foreground">Demo credits</span>
          <span className="font-semibold text-gold-gradient">
            {formatPHP(credits)}
          </span>
        </div>
        <Button
          onClick={spin}
          disabled={spinning}
          variant="gradient"
          className="w-full"
        >
          {spinning ? "Spinning…" : `Spin (${formatPHP(BET)})`}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
