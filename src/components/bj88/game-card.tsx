"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BJ88Game } from "@/lib/bj88-catalog";

export function GameCard({ game }: { game: BJ88Game }) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group relative block overflow-hidden rounded-lg game-card-hover"
      style={{ aspectRatio: "1 / 1.2" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})` }}
      />
      <div className="absolute inset-0 opacity-25 mix-blend-overlay" style={{
        backgroundImage: "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.9), transparent 42%)",
      }} />

      {/* Badges */}
      <div className="absolute left-1.5 top-1.5 flex flex-col gap-1">
        {game.isHot && (
          <span className="rounded px-1.5 py-0.5 text-[9px] font-bold text-white" style={{ backgroundColor: "#e53e3e" }}>
            🔥 HOT
          </span>
        )}
        {game.isNew && (
          <span className="rounded px-1.5 py-0.5 text-[9px] font-bold text-white" style={{ backgroundColor: "#22c55e" }}>
            NEW
          </span>
        )}
      </div>

      {/* Players badge */}
      {game.players && (
        <div className="absolute right-1.5 top-1.5 rounded bg-black/50 px-1.5 py-0.5 text-[9px] text-white">
          👥 {game.players > 1000 ? `${(game.players / 1000).toFixed(1)}K` : game.players}
        </div>
      )}

      {/* Emoji center */}
      <div className="flex h-full items-center justify-center">
        <span className="text-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-125">
          {game.emoji}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
        <span className="rounded-full bg-[#f0b429] px-4 py-1.5 text-xs font-bold text-black">
          ▶ Play
        </span>
      </div>

      {/* Title bar at bottom */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <p className="truncate text-[10px] font-bold text-white">{game.title}</p>
        <p className="truncate text-[8px] text-white/60">{game.provider}</p>
      </div>
    </Link>
  );
}

export function GameGrid({ games, columns = 5 }: { games: BJ88Game[]; columns?: number }) {
  const colsClass = {
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-4 sm:grid-cols-6",
    7: "grid-cols-4 sm:grid-cols-5 lg:grid-cols-7",
    8: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8",
    10: "grid-cols-5 sm:grid-cols-8 lg:grid-cols-10",
  }[columns] || "grid-cols-5";

  return (
    <div className={cn("grid gap-2", colsClass)}>
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
