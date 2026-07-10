"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BJ88Game } from "@/lib/catalog";

const colsMap: Record<number, string> = {
  5: "grid-cols-5",
  7: "grid-cols-4 sm:grid-cols-5 lg:grid-cols-7",
  8: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8",
  10: "grid-cols-5 sm:grid-cols-7 lg:grid-cols-10",
};

export function GameCard({ game }: { game: BJ88Game }) {
  const [c1, c2] = game.gradient;
  return (
    <Link
      href={`/games/${game.id}`}
      className="game-card group block"
      style={{
        background: `linear-gradient(150deg, ${c1}, ${c2})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.22), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 90%, rgba(0,0,0,0.45), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
        }}
      />

      <span className="absolute right-1.5 top-1.5 rounded px-1 py-0.5 text-[8px] font-black italic leading-none text-black" style={{ background: "#f5a623" }}>
        bj
      </span>

      {(game.isHot || game.isNew) && (
        <span
          className="absolute left-1.5 top-1.5 rounded px-1 py-0.5 text-[8px] font-black leading-none text-white"
          style={{ background: game.isHot ? "#ef4444" : "#22c55e" }}
        >
          {game.isHot ? "HOT" : "NEW"}
        </span>
      )}

      {game.players ? (
        <span className="absolute bottom-[34px] left-1.5 flex items-center gap-0.5 rounded bg-black/45 px-1 py-0.5 text-[8px] font-semibold leading-none text-white">
          <span className="inline-block h-1 w-1 rounded-full bg-green-400" />
          {game.players >= 1000
            ? `${(game.players / 1000).toFixed(1)}K`
            : game.players}
        </span>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-3xl leading-none drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110 sm:text-4xl"
        >
          {game.emoji}
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col gap-0 px-1.5 pb-1 pt-6"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
      >
        <span className="truncate text-[11px] font-bold leading-tight text-white">
          {game.title}
        </span>
        <span className="truncate text-[9px] leading-tight text-white/70">
          {game.provider}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-bold text-black"
          style={{ background: "#f5a623" }}
        >
          ▶ Play Now
        </span>
      </div>
    </Link>
  );
}

export function FeatureCard({
  game,
  badge,
}: {
  game: BJ88Game;
  badge?: string;
}) {
  const [c1, c2] = game.gradient;
  return (
    <Link
      href={`/games/${game.id}`}
      className="feature-card group block"
      style={{
        background: `linear-gradient(150deg, ${c1}, ${c2})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(255,255,255,0.22), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 90%, rgba(0,0,0,0.45), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
        }}
      />

      <span className="absolute right-2 top-2 rounded px-1 py-0.5 text-[9px] font-black italic leading-none text-black" style={{ background: "#f5a623" }}>
        bj
      </span>

      {badge && (
        <span
          className="absolute left-2 top-2 rounded px-1.5 py-0.5 text-[9px] font-black leading-none text-white"
          style={{ background: "#f5a623" }}
        >
          {badge}
        </span>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
          {game.emoji}
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 px-3 pb-2 pt-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
      >
        <span className="truncate text-sm font-bold leading-tight text-white">
          {game.title}
        </span>
        <span className="truncate text-[11px] leading-tight text-white/70">
          {game.provider}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span
          className="rounded-full px-4 py-1.5 text-xs font-bold text-black"
          style={{ background: "#f5a623" }}
        >
          ▶ Play Now
        </span>
      </div>
    </Link>
  );
}

export function GameGrid({
  games,
  columns = 8,
}: {
  games: BJ88Game[];
  columns?: 5 | 7 | 8 | 10;
}) {
  return (
    <div className={cn("grid gap-1.5 sm:gap-2", colsMap[columns])}>
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
