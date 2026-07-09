import { GameGrid } from "@/components/bj88/game-card";
import { GameSection } from "@/components/bj88/game-section";
import { WinnersTicker } from "@/components/bj88/tickers";
import {
  SLOTS_GAMES,
  CASINO_GAMES,
  POPULAR_GAMES,
  type BJ88Game,
} from "@/lib/bj88-catalog";

const FISHING_GAMES: BJ88Game[] = [
  { id: "f1", title: "Ocean King", provider: "JILI", category: "fishing", gradient: ["#065f46", "#0d9488"], emoji: "🦈", isHot: true, players: 3100 },
  { id: "f2", title: "Fish Hunter", provider: "JILI", category: "fishing", gradient: ["#0c4a6e", "#0369a1"], emoji: "🐙", players: 2200 },
  { id: "f3", title: "Golden Toad", provider: "Fa Chai", category: "fishing", gradient: ["#713f12", "#b45309"], emoji: "🐸", players: 1800 },
  { id: "f4", title: "Deep Sea Bounty", provider: "JILI", category: "fishing", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🐠", isNew: true, players: 2500 },
  { id: "f5", title: "Dragon Fishing", provider: "JILI", category: "fishing", gradient: ["#7c0000", "#991b1b"], emoji: "🐉", isHot: true, players: 3400 },
  { id: "f6", title: "Cai Shen Fishing", provider: "Fa Chai", category: "fishing", gradient: ["#713f12", "#d97706"], emoji: "🎣", players: 1900 },
  { id: "f7", title: "Star Fish", provider: "JDB", category: "fishing", gradient: ["#2e1065", "#5b21b6"], emoji: "⭐", players: 1200 },
  { id: "f8", title: "Fishing Master", provider: "Spade Gaming", category: "fishing", gradient: ["#064e3b", "#10b981"], emoji: "🐟", players: 2700 },
];

const ARCADE_GAMES: BJ88Game[] = [
  { id: "a1", title: "Plinko", provider: "Spribe", category: "arcade", gradient: ["#4c1d95", "#8b5cf6"], emoji: "🟣", isHot: true, players: 5400 },
  { id: "a2", title: "Mines", provider: "Spribe", category: "arcade", gradient: ["#7c0000", "#991b1b"], emoji: "💣", players: 4200 },
  { id: "a3", title: "Dice", provider: "Spribe", category: "arcade", gradient: ["#0c4a6e", "#0369a1"], emoji: "🎲", players: 3800 },
  { id: "a4", title: "Tower", provider: "Spribe", category: "arcade", gradient: ["#065f46", "#10b981"], emoji: "🗼", players: 2100 },
  { id: "a5", title: "Crash", provider: "Spribe", category: "arcade", gradient: ["#7c2d12", "#ea580c"], emoji: "🚀", isHot: true, players: 6100 },
  { id: "a6", title: "Mini Roulette", provider: "Spribe", category: "arcade", gradient: ["#1c1917", "#57534e"], emoji: "🎯", players: 1700 },
  { id: "a7", title: "Goal", provider: "Spribe", category: "arcade", gradient: ["#166534", "#15803d"], emoji: "⚽", players: 2300 },
  { id: "a8", title: "HiLo", provider: "Spribe", category: "arcade", gradient: ["#831843", "#be185d"], emoji: "🎴", players: 1500 },
];

const LOTTERY_GAMES: BJ88Game[] = [
  { id: "l1", title: "Keno", provider: "JILI", category: "lottery", gradient: ["#713f12", "#d97706"], emoji: "🔢", players: 2100 },
  { id: "l2", title: "Bingo", provider: "JILI", category: "lottery", gradient: ["#0c4a6e", "#0369a1"], emoji: "🎟️", players: 1800 },
  { id: "l3", title: "Lucky 5", provider: "JILI", category: "lottery", gradient: ["#7c0000", "#991b1b"], emoji: "🍀", players: 1400 },
  { id: "l4", title: "Power Ball", provider: "JILI", category: "lottery", gradient: ["#1e1b4b", "#4c1d95"], emoji: "🔮", players: 1100 },
];

const CRASH_GAMES: BJ88Game[] = [
  { id: "cr1", title: "Aviator", provider: "Spribe", category: "crash", gradient: ["#7c2d12", "#ea580c"], emoji: "✈️", isHot: true, players: 9200 },
  { id: "cr2", title: "JetX", provider: "SmartSoft", category: "crash", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🚀", isHot: true, players: 6800 },
  { id: "cr3", title: "High Flyer", provider: "Pragmatic", category: "crash", gradient: ["#0c4a6e", "#0369a1"], emoji: "🛩️", isFeatured: true, players: 5500 },
  { id: "cr4", title: "Space XY", provider: "BGaming", category: "crash", gradient: ["#2e1065", "#5b21b6"], emoji: "🌌", players: 3200 },
  { id: "cr5", title: "Lucky Jet", provider: "1Win", category: "crash", gradient: ["#713f12", "#b45309"], emoji: "🚀", players: 4100, isNew: true },
  { id: "cr6", title: "Rocketman", provider: "Elbet", category: "crash", gradient: ["#7c0000", "#991b1b"], emoji: "👨‍🚀", players: 2800 },
];

const TABLE_GAMES: BJ88Game[] = [
  { id: "t1", title: "Texas Hold'em", provider: "Evolution", category: "table", gradient: ["#0c4a6e", "#0369a1"], emoji: "♠️", players: 3400 },
  { id: "t2", title: "Blackjack VIP", provider: "Evolution", category: "table", gradient: ["#1c1917", "#292524"], emoji: "🂡", players: 5200, isHot: true },
  { id: "t3", title: "Baccarat Squeeze", provider: "Evolution", category: "table", gradient: ["#7c0000", "#991b1b"], emoji: "🃏", players: 4100 },
  { id: "t4", title: "Sic Bo", provider: "Evolution", category: "table", gradient: ["#713f12", "#b45309"], emoji: "🎲", players: 2300 },
  { id: "t5", title: "Casino Hold'em", provider: "Evolution", category: "table", gradient: ["#065f46", "#10b981"], emoji: "♥️", players: 1900 },
  { id: "t6", title: "Dragon Tiger", provider: "Evolution", category: "table", gradient: ["#7c2d12", "#9a3412"], emoji: "🐉", players: 2700, isNew: true },
];

const SPORTS_GAMES_LIST: BJ88Game[] = [
  { id: "sp1", title: "Football", provider: "Sportsbook", category: "sports", gradient: ["#065f46", "#10b981"], emoji: "⚽", isHot: true, players: 8100 },
  { id: "sp2", title: "Cricket", provider: "Sportsbook", category: "sports", gradient: ["#0c4a6e", "#1d4ed8"], emoji: "🏏", isHot: true, players: 7500 },
  { id: "sp3", title: "Basketball", provider: "Sportsbook", category: "sports", gradient: ["#7c2d12", "#ea580c"], emoji: "🏀", players: 3200 },
  { id: "sp4", title: "Tennis", provider: "Sportsbook", category: "sports", gradient: ["#166534", "#22c55e"], emoji: "🎾", players: 2400 },
  { id: "sp5", title: "Kabaddi", provider: "Sportsbook", category: "sports", gradient: ["#7c0000", "#991b1b"], emoji: "🤼", players: 1800 },
  { id: "sp6", title: "Esports", provider: "Sportsbook", category: "sports", gradient: ["#2e1065", "#5b21b6"], emoji: "🎮", players: 4100, isNew: true },
  { id: "sp7", title: "Horse Racing", provider: "Sportsbook", category: "sports", gradient: ["#713f12", "#b45309"], emoji: "🏇", players: 1500 },
  { id: "sp8", title: "Boxing", provider: "Sportsbook", category: "sports", gradient: ["#1c1917", "#57534e"], emoji: "🥊", players: 1200 },
];

const CRICKET_GAMES_LIST: BJ88Game[] = [
  { id: "cr1", title: "BPL T20", provider: "Cricket", category: "cricket", gradient: ["#065f46", "#10b981"], emoji: "🏏", isHot: true, players: 5500 },
  { id: "cr2", title: "IPL", provider: "Cricket", category: "cricket", gradient: ["#7c0000", "#991b1b"], emoji: "🏏", isHot: true, players: 8200 },
  { id: "cr3", title: "ICC World Cup", provider: "Cricket", category: "cricket", gradient: ["#0c4a6e", "#1d4ed8"], emoji: "🏆", players: 6700 },
  { id: "cr4", title: "Bangladesh vs India", provider: "Cricket", category: "cricket", gradient: ["#166534", "#15803d"], emoji: "🇧🇩", players: 4200, isNew: true },
  { id: "cr5", title: "T20 World Cup", provider: "Cricket", category: "cricket", gradient: ["#713f12", "#d97706"], emoji: "🏆", players: 5800 },
  { id: "cr6", title: "Asia Cup", provider: "Cricket", category: "cricket", gradient: ["#2e1065", "#5b21b6"], emoji: "🏆", players: 3900 },
];

export function CategoryPage({
  title,
  emoji,
  games,
  description,
}: {
  title: string;
  emoji: string;
  games: BJ88Game[];
  description?: string;
}) {
  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>
      <div className="mb-6">
        <h1 className="flex items-center gap-2 text-xl font-black uppercase text-white">
          <span className="text-2xl">{emoji}</span>
          {title}
        </h1>
        {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}
      </div>
      <GameSection title={title} icon={emoji} games={games} columns={8} />
    </div>
  );
}

export function SlotsPage() {
  return (
    <CategoryPage
      title="Slots"
      emoji="🎰"
      games={SLOTS_GAMES}
      description="Play the best slots from Pragmatic Play, JILI, PG Soft, Habanero and more."
    />
  );
}

export function CasinoPage() {
  return (
    <CategoryPage
      title="Live Casino"
      emoji="🃏"
      games={CASINO_GAMES}
      description="Real dealers, real action — live roulette, baccarat, blackjack and more 24/7."
    />
  );
}

export function PopularPage() {
  return (
    <CategoryPage
      title="Popular"
      emoji="⭐"
      games={POPULAR_GAMES}
      description="The most-played games on BJ88 Bangladesh right now."
    />
  );
}

export function FishingPage() {
  return (
    <CategoryPage
      title="Fishing"
      emoji="🎣"
      games={FISHING_GAMES}
      description="Blast sea creatures and win big with multiplayer fishing games."
    />
  );
}

export function ArcadePage() {
  return (
    <CategoryPage
      title="Arcade"
      emoji="🕹️"
      games={ARCADE_GAMES}
      description="Instant-win arcade games — Plinko, Mines, Dice and more."
    />
  );
}

export function LotteryPage() {
  return (
    <CategoryPage
      title="Lottery"
      emoji="🎟️"
      games={LOTTERY_GAMES}
      description="Keno, Bingo and lottery games with massive prize pools."
    />
  );
}

export function CrashPage() {
  return (
    <CategoryPage
      title="Crash"
      emoji="🚀"
      games={CRASH_GAMES}
      description="Cash out before it crashes! Provably-fair multiplier games."
    />
  );
}

export function TablePage() {
  return (
    <CategoryPage
      title="Table Games"
      emoji="🎲"
      games={TABLE_GAMES}
      description="Poker, Blackjack, Baccarat and more classic table games."
    />
  );
}

export function SportsPage() {
  return (
    <CategoryPage
      title="Sports"
      emoji="⚽"
      games={SPORTS_GAMES_LIST}
      description="Bet on football, cricket, basketball, tennis, kabaddi and more with the best odds in Bangladesh."
    />
  );
}

export function CricketPage() {
  return (
    <CategoryPage
      title="Cricket"
      emoji="🏏"
      games={CRICKET_GAMES_LIST}
      description="Bet on BPL, IPL, ICC tournaments and Bangladesh national team matches."
    />
  );
}
