import type { Metadata } from "next";
import Link from "next/link";
import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameSection } from "@/components/bj88/game-section";
import { LiveCricketWidget } from "@/components/bj88/live-cricket";
import { BettingExchangeWidget } from "@/components/bj88/betting-exchange-widget";
import { Footer } from "@/components/bj88/footer";
import { CRICKET_GAMES_LIST } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Cricket Betting",
  description:
    "Live cricket betting on BPL T20, IPL, PSL, BBL, Asia Cup, ICC World Cup and more. Best cricket odds, betting exchange, and live streaming with BSL Gaming Bangladesh.",
};

const CRICKET_LEAGUES = [
  { id: "bpl-t20", name: "BPL T20", emoji: "🏏", country: "Bangladesh", matches: "120+" },
  { id: "ipl", name: "IPL", emoji: "🏆", country: "India", matches: "74" },
  { id: "psl", name: "PSL", emoji: "🏆", country: "Pakistan", matches: "34" },
  { id: "bbl", name: "BBL", emoji: "🏆", country: "Australia", matches: "61" },
  { id: "asia-cup", name: "Asia Cup", emoji: "🏆", country: "Asia", matches: "13" },
  { id: "icc-world-cup", name: "ICC World Cup", emoji: "🌍", country: "World", matches: "48" },
];

const CRICKET_MARKETS = [
  { id: "match-winner", name: "Match Winner", emoji: "🏆", desc: "Bet on which team will win the match outright." },
  { id: "toss-winner", name: "Toss Winner", emoji: "🪙", desc: "Predict which team wins the coin toss before play." },
  { id: "top-batsman", name: "Top Batsman", emoji: "🏏", desc: "Wager on the player who scores the most runs." },
  { id: "top-bowler", name: "Top Bowler", emoji: "🎯", desc: "Back the bowler who takes the most wickets." },
  { id: "total-runs", name: "Total Runs", emoji: "📊", desc: "Over/under on the total runs scored in an innings." },
  { id: "total-sixes", name: "Total Sixes", emoji: "6️⃣", desc: "Bet over/under on the number of sixes hit." },
  { id: "total-fours", name: "Total Fours", emoji: "4️⃣", desc: "Over/under on the total boundary fours scored." },
  { id: "most-sixes", name: "Most Sixes", emoji: "💥", desc: "Which team or player hits the most sixes." },
  { id: "first-wicket", name: "1st Wicket Method", emoji: "🥊", desc: "Predict how the first wicket will fall." },
  { id: "century", name: "Century Scored", emoji: "💯", desc: "Will any batter score 100+ runs in the match?" },
];

const BET_STEPS = [
  { step: 1, title: "Pick a Match", emoji: "🏏", desc: "Choose from live and upcoming BPL, IPL, PSL and international cricket matches." },
  { step: 2, title: "Select Your Market", emoji: "🎯", desc: "Back or lay on match winner, toss, top batsman, total runs, sixes and dozens more." },
  { step: 3, title: "Place Bet & Win", emoji: "💰", desc: "Confirm your stake, track live scores, and cash out anytime as the action unfolds." },
];

export default function CricketPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />
      <CategoryTabs active="cricket" />

      <header className="space-y-2 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-xl sm:text-2xl">🏏</span>
          <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
            Cricket Betting
          </h1>
        </div>
        <p className="max-w-2xl text-sm text-[#9ca3af]">
          Live cricket betting on BPL T20, IPL, PSL, BBL, Asia Cup, ICC World Cup and more.
          Stream live scores, back &amp; lay on the betting exchange, and enjoy the best cricket
          odds in Bangladesh — all in BDT with instant bKash and Nagad payouts.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <LiveCricketWidget />
        <BettingExchangeWidget />
      </section>

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">🌍</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Cricket Leagues &amp; Tournaments
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CRICKET_LEAGUES.map((league) => (
            <Link
              key={league.id}
              href={`/cricket/${league.id}`}
              className="card-glow hover-lift flex flex-col items-center gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 text-center"
            >
              <span className="text-3xl">{league.emoji}</span>
              <p className="text-sm font-bold text-[#f0f0f0]">{league.name}</p>
              <p className="text-[10px] text-[#9ca3af]">{league.country}</p>
              <span className="rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                {league.matches} matches
              </span>
              <span className="btn-primary mt-1 w-full rounded-md px-3 py-1.5 text-center text-xs font-semibold">
                View Odds
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GameSection
        title="Cricket Games"
        emoji="🏏"
        games={CRICKET_GAMES_LIST}
        href="/cricket"
        columns={10}
      />

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">🎯</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Cricket Betting Markets
          </h2>
        </div>
        <p className="text-xs text-[#9ca3af]">
          Over 100+ markets per match across all major cricket leagues and internationals.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CRICKET_MARKETS.map((market) => (
            <div
              key={market.id}
              className="card-glow hover-lift flex flex-col gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4"
            >
              <span className="text-2xl">{market.emoji}</span>
              <h3 className="text-sm font-bold text-[#f0f0f0]">{market.name}</h3>
              <p className="text-xs leading-relaxed text-[#9ca3af]">{market.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">📖</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            How to Bet on Cricket
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {BET_STEPS.map((s) => (
            <div
              key={s.step}
              className="relative overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5"
            >
              <div
                className="pointer-events-none absolute -right-4 -top-4 text-7xl font-extrabold opacity-5"
              >
                {s.step}
              </div>
              <div className="relative space-y-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient text-lg">
                  {s.emoji}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#22c55e]">
                  Step {s.step}
                </p>
                <h3 className="text-sm font-bold text-[#f0f0f0]">{s.title}</h3>
                <p className="text-xs leading-relaxed text-[#9ca3af]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
