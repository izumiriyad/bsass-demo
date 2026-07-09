"use client";

import { getRecentWinners } from "@/lib/catalog";
import { formatPHP } from "@/lib/utils";

/** Marquee of recent big winners, duplicated for a seamless loop. */
export function WinnerTicker() {
  const winners = getRecentWinners();
  const items = [...winners, ...winners];

  return (
    <div className="relative flex overflow-hidden">
      <div className="flex w-max shrink-0 animate-marquee items-center gap-8 pr-8 marquee-pause">
        {items.map((w, i) => (
          <div
            key={`${w.username}-${i}`}
            className="flex shrink-0 items-center gap-2 text-sm"
          >
            <span className="text-emerald-400 font-semibold">{w.username}</span>
            <span className="text-muted-foreground">won</span>
            <span className="font-semibold text-gold-gradient">
              {formatPHP(w.amount)}
            </span>
            <span className="text-muted-foreground">on {w.game}</span>
            <span className="text-border">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
