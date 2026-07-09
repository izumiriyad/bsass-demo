"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BJ88Game } from "@/lib/bj88-catalog";

/**
 * Procedural "artwork" background per game.
 * Uses layered radial/linear gradients + CSS pseudo-elements to create
 * depth that resembles real game thumbnails without external images.
 */
function GameArt({ game }: { game: BJ88Game }) {
  const [c1, c2] = game.gradient;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(150deg, ${c1} 0%, ${c2} 100%)` }}
      />
      {/* Glow highlight top-left */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 25% 12%, rgba(255,255,255,0.35), transparent 60%)`,
        }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 90% at 70% 80%, rgba(0,0,0,0.7), transparent 65%)`,
        }}
      />
      {/* Diagonal sheen */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)`,
        }}
      />
      {/* Large emoji as "artwork" focal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-[2.2rem] leading-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110 sm:text-[2.5rem]"
          style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
        >
          {game.emoji}
        </span>
      </div>
      {/* Decorative ring */}
      <div
        className="absolute left-1/2 top-[42%] size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{ border: "2px solid rgba(255,255,255,0.4)" }}
      />
    </div>
  );
}

export function GameCard({ game }: { game: BJ88Game }) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group game-card block"
    >
      <GameArt game={game} />

      {/* bj badge top-right */}
      <span
        className="absolute right-1 top-1 z-10 rounded px-1 py-0.5 text-[8px] font-black italic"
        style={{ background: "rgba(245,166,35,0.95)", color: "#000" }}
      >
        bj
      </span>

      {/* Hot/New badge top-left */}
      <div className="absolute left-1 top-1 z-10 flex flex-col gap-0.5">
        {game.isHot && (
          <span className="rounded px-1 py-0.5 text-[8px] font-bold text-white" style={{ background: "#e53e3e" }}>
            🔥
          </span>
        )}
        {game.isNew && (
          <span className="rounded px-1 py-0.5 text-[8px] font-bold text-white" style={{ background: "#22c55e" }}>
            NEW
          </span>
        )}
      </div>

      {/* Players badge */}
      {game.players != null && (
        <div className="absolute right-1 bottom-9 z-10 rounded bg-black/60 px-1 py-0.5 text-[8px] text-white">
          👥 {game.players > 999 ? `${(game.players / 1000).toFixed(1)}K` : game.players}
        </div>
      )}

      {/* Hover play overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
        <span className="rounded-full bg-[#f5a623] px-4 py-1.5 text-xs font-bold text-black shadow-lg">
          ▶ Play Now
        </span>
      </div>

      {/* Bottom gradient + title */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 p-1.5 pt-6"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92), transparent)" }}
      >
        <p className="truncate text-[11px] font-bold text-white leading-tight">{game.title}</p>
        <p className="truncate text-[9px] text-white/55 leading-tight">{game.provider}</p>
      </div>
    </Link>
  );
}

/* Landscape feature card */
export function FeatureCard({
  game,
  badge,
}: {
  game: BJ88Game;
  badge?: string;
}) {
  return (
    <Link href={`/games/${game.id}`} className="group feature-card block">
      <GameArt game={game} />

      {/* bj badge */}
      <span
        className="absolute right-2 top-2 z-10 rounded px-1.5 py-0.5 text-[9px] font-black italic"
        style={{ background: "rgba(245,166,35,0.95)", color: "#000" }}
      >
        bj
      </span>

      {badge && (
        <span className="absolute left-2 top-2 z-10 rounded bg-black/60 px-2 py-0.5 text-[9px] font-bold text-[#f5a623]">
          {badge}
        </span>
      )}

      {/* Bottom gradient + title */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 p-3 pt-10"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}
      >
        <p className="text-sm font-bold text-white">{game.title}</p>
        <p className="text-[11px] text-white/60">{game.provider}</p>
      </div>
    </Link>
  );
}

export function GameGrid({ games, columns = 7 }: { games: BJ88Game[]; columns?: number }) {
  const colsClass = {
    5: "grid-cols-5",
    6: "grid-cols-4 sm:grid-cols-6",
    7: "grid-cols-4 sm:grid-cols-5 lg:grid-cols-7",
    8: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8",
    10: "grid-cols-5 sm:grid-cols-7 lg:grid-cols-10",
  }[columns] || "grid-cols-7";

  return (
    <div className={cn("grid gap-1.5 sm:gap-2", colsClass)}>
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
