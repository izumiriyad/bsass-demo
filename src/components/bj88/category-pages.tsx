import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameSection } from "@/components/bj88/game-section";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  LOTTERY_GAMES,
  CRASH_GAMES,
  TABLE_GAMES,
  SPORTS_GAMES_LIST,
  CRICKET_GAMES_LIST,
  type BJ88Game,
} from "@/lib/bj88-catalog";

export function CategoryPage({
  title,
  emoji,
  games,
  description,
  active,
}: {
  title: string;
  emoji: string;
  games: BJ88Game[];
  description?: string;
  active?: string;
}) {
  return (
    <div className="px-3 py-3 lg:px-4">
      <div className="mb-3">
        <WinnersTicker />
      </div>
      <CategoryTabs active={active} />
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-6 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
          />
          <span className="text-xl">{emoji}</span>
          <h1 className="text-lg font-black uppercase tracking-wide text-white">{title}</h1>
        </div>
        {description && <p className="mt-1.5 pl-5 text-sm text-[#888899]">{description}</p>}
      </div>
      <GameSection title={title} icon={emoji} games={games} columns={10} />
    </div>
  );
}

export function PopularPage() {
  return (
    <CategoryPage
      title="Popular"
      emoji="⭐"
      games={POPULAR_GAMES}
      active="popular"
      description="The most-played games on BJ88 Bangladesh right now."
    />
  );
}

export function SlotsPage() {
  return (
    <CategoryPage
      title="Slots"
      emoji="🎰"
      games={SLOTS_GAMES}
      active="slots"
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
      active="casino"
      description="Real dealers, real action — live roulette, baccarat, blackjack and more 24/7."
    />
  );
}

export function FishingPage() {
  return (
    <CategoryPage
      title="Fishing"
      emoji="🎣"
      games={FISHING_GAMES}
      active="fishing"
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
      active="arcade"
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
      active="lottery"
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
      active="crash"
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
      active="table"
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
      active="sports"
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
      active="cricket"
      description="Bet on BPL, IPL, ICC tournaments and Bangladesh national team matches."
    />
  );
}
