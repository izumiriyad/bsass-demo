"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function WinnersTicker() {
  const winners = [
    { user: "R***1", amount: "৳45,200", game: "Crazy Time" },
    { user: "S***3", amount: "৳128,500", game: "Gates of Olympus" },
    { user: "M***7", amount: "৳67,300", game: "Aviator" },
    { user: "K***2", amount: "৳89,100", game: "Mega Wheel" },
    { user: "T***9", amount: "৳234,000", game: "Sweet Bonanza" },
    { user: "A***4", amount: "৳52,800", game: "Super Ace" },
    { user: "N***6", amount: "৳156,700", game: "Lightning Roulette" },
    { user: "B***8", amount: "৳78,400", game: "Fortune Gems" },
  ];
  const items = [...winners, ...winners];

  return (
    <div className="relative flex overflow-hidden rounded-lg border border-[#1a1a2e] bg-[#0a0a14] py-2">
      <span className="flex shrink-0 items-center gap-1.5 px-3 text-xs font-bold text-[#22c55e]">
        🏆 LIVE WINS
      </span>
      <div className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6">
        {items.map((w, i) => (
          <div key={i} className="flex shrink-0 items-center gap-1.5 text-xs">
            <span className="font-semibold text-[#22c55e]">{w.user}</span>
            <span className="text-gray-500">won</span>
            <span className="font-semibold text-[#f0b429]">{w.amount}</span>
            <span className="text-gray-500">on {w.game}</span>
            <span className="text-gray-700">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JackpotTicker({ className }: { className?: string }) {
  const [value, setValue] = React.useState(18_452_119);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 139) + 11);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={cn(className)} aria-live="polite">
      ৳{value.toLocaleString("en-US")}
    </span>
  );
}
