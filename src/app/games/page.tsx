import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameGrid } from "@/components/bj88/game-card";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  CRASH_GAMES,
  TABLE_GAMES,
} from "@/lib/bj88-catalog";

export const metadata = { title: "All Games" };

const ALL = [
  ...POPULAR_GAMES,
  ...SLOTS_GAMES,
  ...CASINO_GAMES,
  ...FISHING_GAMES,
  ...ARCADE_GAMES,
  ...CRASH_GAMES,
  ...TABLE_GAMES,
];

export default function AllGamesPage() {
  return (
    <div className="px-3 py-3 lg:px-4">
      <div className="mb-3">
        <WinnersTicker />
      </div>
      <CategoryTabs />
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-6 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
          />
          <span className="text-xl">🎮</span>
          <h1 className="text-lg font-black uppercase tracking-wide text-white">All Games</h1>
        </div>
      </div>
      <GameGrid games={ALL} columns={10} />
    </div>
  );
}
