import type { Metadata } from "next";
import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameGrid } from "@/components/bj88/game-card";
import { ALL_GAMES } from "@/lib/catalog";

export const metadata: Metadata = { title: "All Games" };

export default function GamesPage() {
  return (
    <div className="space-y-5 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />
      <CategoryTabs />
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-xl">🎮</span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
          All Games
        </h1>
        <span className="ml-1 rounded-full bg-[#2a2c30] px-2 py-0.5 text-xs font-semibold text-[#9ca3af]">
          {ALL_GAMES.length}
        </span>
      </div>
      <GameGrid games={ALL_GAMES} columns={10} />
    </div>
  );
}
