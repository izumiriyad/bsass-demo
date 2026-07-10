import type { Metadata } from "next";
import { ALL_GAMES } from "@/lib/catalog";
import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameGrid } from "@/components/bj88/game-card";

export const metadata: Metadata = {
  title: "All Games",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-3">
      <WinnersTicker />
      <CategoryTabs />
      <div className="mt-4 flex items-center gap-3">
        <span className="h-5 w-[3px] rounded-full" style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }} />
        <h1 className="text-2xl font-black text-white">All Games</h1>
      </div>
      <div className="mt-3">
        <GameGrid games={ALL_GAMES} columns={10} />
      </div>
    </div>
  );
}
