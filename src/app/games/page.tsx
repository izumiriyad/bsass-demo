import { WinnersTicker } from "@/components/bj88/tickers";
import { GameGrid } from "@/components/bj88/game-card";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  type BJ88Game,
} from "@/lib/bj88-catalog";

export const metadata = { title: "All Games" };

const FISHING_GAMES: BJ88Game[] = [
  { id: "f1", title: "Ocean King", provider: "JILI", category: "fishing", gradient: ["#065f46", "#0d9488"], emoji: "🦈", isHot: true, players: 3100 },
  { id: "f2", title: "Fish Hunter", provider: "JILI", category: "fishing", gradient: ["#0c4a6e", "#0369a1"], emoji: "🐙", players: 2200 },
  { id: "f3", title: "Golden Toad", provider: "Fa Chai", category: "fishing", gradient: ["#713f12", "#b45309"], emoji: "🐸", players: 1800 },
  { id: "f4", title: "Dragon Fishing", provider: "JILI", category: "fishing", gradient: ["#7c0000", "#991b1b"], emoji: "🐉", isHot: true, players: 3400 },
];

const ALL = [...POPULAR_GAMES, ...SLOTS_GAMES, ...CASINO_GAMES, ...FISHING_GAMES];

export default function AllGamesPage() {
  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>
      <h1 className="mb-6 text-xl font-black uppercase text-white">🎮 All Games</h1>
      <GameGrid games={ALL} columns={8} />
    </div>
  );
}
