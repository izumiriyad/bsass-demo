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
} from "@/lib/catalog";
import { WinnersTicker } from "./tickers";
import { CategoryTabs } from "./category-tabs";
import { GameSection } from "./game-section";

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
  description: string;
  active: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-3 py-3">
      <WinnersTicker />
      <CategoryTabs active={active} />
      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl">{emoji}</span>
        <div>
          <h1 className="text-2xl font-black text-white">{title}</h1>
          <p className="text-sm text-[#8a8aa0]">{description}</p>
        </div>
      </div>
      <GameSection
        title={title}
        icon={emoji}
        games={games}
        href={`/${active}`}
        columns={7}
      />
    </div>
  );
}

export function PopularPage() {
  return (
    <CategoryPage
      title="Popular Games"
      emoji="⭐"
      games={POPULAR_GAMES}
      description="The hottest games on BJ88 right now."
      active="popular"
    />
  );
}

export function SlotsPage() {
  return (
    <CategoryPage
      title="Slots"
      emoji="🎰"
      games={SLOTS_GAMES}
      description="Spin and win on the best slot games."
      active="slots"
    />
  );
}

export function CasinoPage() {
  return (
    <CategoryPage
      title="Live Casino"
      emoji="🃏"
      games={CASINO_GAMES}
      description="Real dealers, real thrill — live casino action."
      active="casino"
    />
  );
}

export function FishingPage() {
  return (
    <CategoryPage
      title="Fishing Games"
      emoji="🎣"
      games={FISHING_GAMES}
      description="Aim, shoot, and catch the biggest rewards."
      active="fishing"
    />
  );
}

export function ArcadePage() {
  return (
    <CategoryPage
      title="Arcade Games"
      emoji="🕹️"
      games={ARCADE_GAMES}
      description="Quick-play arcade games with instant wins."
      active="arcade"
    />
  );
}

export function LotteryPage() {
  return (
    <CategoryPage
      title="Lottery"
      emoji="🎟️"
      games={LOTTERY_GAMES}
      description="Keno, Bingo, and more — test your luck."
      active="lottery"
    />
  );
}

export function CrashPage() {
  return (
    <CategoryPage
      title="Crash Games"
      emoji="🚀"
      games={CRASH_GAMES}
      description="Cash out before it crashes!"
      active="crash"
    />
  );
}

export function TablePage() {
  return (
    <CategoryPage
      title="Table Games"
      emoji="🎲"
      games={TABLE_GAMES}
      description="Poker, Blackjack, Baccarat and more."
      active="table"
    />
  );
}

export function SportsPage() {
  return (
    <CategoryPage
      title="Sports"
      emoji="⚽"
      games={SPORTS_GAMES_LIST}
      description="Bet on football, cricket, kabaddi and more."
      active="sports"
    />
  );
}

export function CricketPage() {
  return (
    <CategoryPage
      title="Cricket"
      emoji="🏏"
      games={CRICKET_GAMES_LIST}
      description="BPL, IPL, ICC World Cup — all the cricket action."
      active="cricket"
    />
  );
}
