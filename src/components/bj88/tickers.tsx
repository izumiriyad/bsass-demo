"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const WINNERS = [
  { user: "R***1", amount: "45,200", game: "Crazy Time" },
  { user: "S***3", amount: "128,500", game: "Gates of Olympus" },
  { user: "M***7", amount: "67,300", game: "Aviator" },
  { user: "K***2", amount: "89,100", game: "Mega Wheel" },
  { user: "T***9", amount: "234,000", game: "Sweet Bonanza" },
  { user: "A***4", amount: "52,800", game: "Super Ace" },
  { user: "N***6", amount: "156,700", game: "Lightning Roulette" },
  { user: "B***8", amount: "78,400", game: "Fortune Gems" },
  { user: "H***5", amount: "312,000", game: "Aztec Gems" },
  { user: "F***0", amount: "94,600", game: "Wild West Gold" },
];

export function WinnersTicker() {
  const items = [...WINNERS, ...WINNERS];
  return (
    <div className="relative flex items-center overflow-hidden rounded-lg border border-[#1e1e2d] bg-[#1a1a26] py-2">
      <span className="flex shrink-0 items-center gap-1.5 border-r border-[#2a2a3e] px-3 text-[11px] font-bold text-[#22c55e]">
        <span className="size-1.5 rounded-full bg-[#22c55e] animate-live" />
        LIVE WINS
      </span>
      <div className="flex w-max shrink-0 animate-marquee items-center gap-5 pl-5">
        {items.map((w, i) => (
          <div key={i} className="flex shrink-0 items-center gap-1.5 text-[11px]">
            <span className="font-semibold text-[#22c55e]">{w.user}</span>
            <span className="text-[#666680]">won</span>
            <span className="font-bold text-[#f5a623]">৳{w.amount}</span>
            <span className="text-[#666680]">on {w.game}</span>
            <span className="text-[#333344]">•</span>
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
      setValue((v) => v + Math.floor(Math.random() * 137) + 13);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={cn(className)} aria-live="polite">
      ৳{value.toLocaleString("en-US")}
    </span>
  );
}
