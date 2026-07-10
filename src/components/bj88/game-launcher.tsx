"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

const SYMBOLS = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐", "💎", "7️⃣"];
const PAYOUTS: Record<string, number> = {
  "🍒": 100,
  "🍋": 150,
  "🍊": 200,
  "🍇": 300,
  "🔔": 500,
  "⭐": 750,
  "💎": 1000,
  "7️⃣": 2500,
};
const BET = 50;
const START_CREDITS = 1000;

function randSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

export function GameLauncher({
  gameId,
  title,
  emoji,
}: {
  gameId: string;
  title: string;
  emoji: string;
}) {
  const [reels, setReels] = useState<[string, string, string]>(["🍒", "🍋", "🍊"]);
  const [credits, setCredits] = useState(START_CREDITS);
  const [spinning, setSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);

  function spin() {
    if (spinning) return;
    if (credits < BET) {
      toast.error("Not enough credits!", { description: "You need at least ৳50 to spin." });
      return;
    }
    setSpinning(true);
    setCredits((c) => c - BET);
    setLastWin(0);

    let ticks = 0;
    const interval = setInterval(() => {
      setReels([randSymbol(), randSymbol(), randSymbol()]);
      ticks++;
      if (ticks > 10) {
        clearInterval(interval);
        const finalReels: [string, string, string] = [
          randSymbol(),
          randSymbol(),
          randSymbol(),
        ];
        setReels(finalReels);
        setSpinning(false);

        if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
          const prize = PAYOUTS[finalReels[0]] ?? 100;
          setCredits((c) => c + prize);
          setLastWin(prize);
          toast.success(`🎉 Jackpot! +৳${prize}`, {
            description: `Three ${finalReels[0]} — big win!`,
          });
        } else if (
          finalReels[0] === finalReels[1] ||
          finalReels[1] === finalReels[2] ||
          finalReels[0] === finalReels[2]
        ) {
          const small = 20;
          setCredits((c) => c + small);
          setLastWin(small);
          toast(`Small win +৳${small}`, { description: "Two matching symbols." });
        } else {
          toast("No win — try again!", { description: "Better luck next spin." });
        }
      }
    }, 80);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-full rounded-full bg-gradient-to-r from-[#f5a623] to-[#e8920f] px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          ▶ Play Demo
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogTitle className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </DialogTitle>

        <p className="text-xs text-[#8a8aa0]">Demo Mode — No real money involved.</p>

        <div className="flex justify-center gap-2 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] p-4">
          {reels.map((s, i) => (
            <div
              key={i}
              className="flex h-20 w-16 items-center justify-center rounded-md border border-[#2a2a3e] bg-[#1e1e2d] text-4xl"
              style={{ filter: spinning ? "blur(1px)" : "none" }}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-[#8a8aa0]">Credits</span>
          <span className="font-bold tabular-nums text-[#f5a623]">৳{credits}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#8a8aa0]">Last Win</span>
          <span className="font-bold tabular-nums text-green-400">
            {lastWin > 0 ? `৳${lastWin}` : "—"}
          </span>
        </div>

        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="w-full rounded-lg bg-gradient-to-r from-[#f5a623] to-[#e8920f] py-2.5 text-sm font-bold text-black transition-opacity disabled:opacity-50"
        >
          {spinning ? "Spinning…" : `Spin (৳${BET})`}
        </button>

        <button
          type="button"
          onClick={() => {
            setCredits(START_CREDITS);
            setLastWin(0);
            setReels(["🍒", "🍋", "🍊"]);
          }}
          className="w-full rounded-lg border border-[#2a2a3e] py-2 text-xs font-semibold text-[#c8c8d6] transition-colors hover:text-white"
        >
          Reset Credits
        </button>
      </DialogContent>
    </Dialog>
  );
}
