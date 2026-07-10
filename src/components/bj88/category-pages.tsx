import { WinnersTicker } from "./tickers";
import { CategoryTabs } from "./category-tabs";
import { GameSection } from "./game-section";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  LOTTERY_GAMES,
  CRASH_GAMES,
  TABLE_GAMES,
  COCKFIGHTING_GAMES,
  CRICKET_GAMES_LIST,
  SPORTS_GAMES_LIST,
  type BSLGame,
} from "@/lib/catalog";

interface CategoryPageProps {
  title: string;
  emoji: string;
  games: BSLGame[];
  description?: string;
  active: string;
}

export function CategoryPage({
  title,
  emoji,
  games,
  description,
  active,
}: CategoryPageProps) {
  return (
    <div className="space-y-5 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />
      <CategoryTabs active={active} />
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-xl">{emoji}</span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
          {title}
        </h1>
      </div>
      {description && (
        <p className="max-w-2xl text-sm text-[#9ca3af]">{description}</p>
      )}
      <GameSection
        title={title}
        emoji={emoji}
        games={games}
        href={`/${active}`}
        columns={10}
      />
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
      description="The most-played games on BSL Gaming right now. Trending slots, live casino, and crash games loved by players across Bangladesh."
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
      description="Bet on football, cricket, basketball, tennis, kabaddi, esports and more with the best odds in Bangladesh."
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
      description="Live cricket betting on BPL T20, IPL, ICC World Cup, Asia Cup and more. Best cricket odds in Bangladesh."
    />
  );
}

export function CockfightingPage() {
  return (
    <CategoryPage
      title="Cockfighting"
      emoji="🐓"
      games={COCKFIGHTING_GAMES}
      active="cockfighting"
      description="Live SV388 cockfighting derbies and arenas. Watch and bet on live cockfights 24/7."
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
      description="Premium slots from Pragmatic Play, JILI, PG Soft and more. Spin to win big jackpots."
    />
  );
}

export function CasinoPage() {
  return (
    <CategoryPage
      title="Casino"
      emoji="🃏"
      games={CASINO_GAMES}
      active="casino"
      description="Live casino with real dealers. Baccarat, roulette, blackjack, game shows and more from Evolution and AE Sexy."
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
      description="Arcade fishing games from JILI, Fa Chai, JDB and Spade Gaming. Aim, shoot, and reel in big wins."
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
      description="Instant-win arcade games from Spribe: Plinko, Mines, Dice, Tower, Crash and more."
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
      description="Keno, Bingo, Lucky 5 and Power Ball. Try your luck with daily lottery draws."
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
      description="Aviator, JetX, High Flyer, Spaceman and more crash games. Cash out before it crashes!"
    />
  );
}

export function TablePage() {
  return (
    <CategoryPage
      title="Table"
      emoji="🎲"
      games={TABLE_GAMES}
      active="table"
      description="Classic table games: Texas Hold'em, Blackjack, Baccarat, Sic Bo, Dragon Tiger and more."
    />
  );
}
