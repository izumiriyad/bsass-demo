import type { Metadata } from "next";
import Link from "next/link";
import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameSection } from "@/components/bj88/game-section";
import { SportsbookOdds } from "@/components/bj88/sportsbook-odds";
import { Footer } from "@/components/bj88/footer";
import { SPORTS_GAMES_LIST } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sports Betting",
  description:
    "Bet on football, cricket, basketball, tennis, kabaddi, esports, horse racing and more. Best odds from 5 providers, live in-play betting and fast payouts with BSL Gaming Bangladesh.",
};

const SPORTS_CATEGORIES = [
  { id: "cricket", name: "Cricket", emoji: "🏏", count: "500+ events" },
  { id: "football", name: "Football", emoji: "⚽", count: "800+ events" },
  { id: "basketball", name: "Basketball", emoji: "🏀", count: "300+ events" },
  { id: "tennis", name: "Tennis", emoji: "🎾", count: "200+ events" },
  { id: "kabaddi", name: "Kabaddi", emoji: "🤼", count: "50+ events" },
  { id: "horse-racing", name: "Horse Racing", emoji: "🏇", count: "100+ events" },
  { id: "esports", name: "eSports", emoji: "🎮", count: "400+ events" },
  { id: "golf", name: "Golf", emoji: "⛳", count: "30+ events" },
];

const BENEFITS = [
  { id: "best-odds", title: "Best Odds", emoji: "⚡", desc: "Aggregate odds from 5 top sportsbook providers for maximum value." },
  { id: "live-betting", title: "Live Betting", emoji: "🔴", desc: "Bet in real-time with constantly updating live odds as play happens." },
  { id: "cash-out", title: "Cash Out", emoji: "💸", desc: "Lock in profit or cut losses early with full and partial cash out." },
  { id: "in-play", title: "In-Play Markets", emoji: "🎮", desc: "100+ in-play markets per match across every major sport." },
  { id: "multiple-markets", title: "Multiple Markets", emoji: "📊", desc: "Match winner, handicaps, totals, props and dozens more per event." },
  { id: "fast-payouts", title: "Fast Payouts", emoji: "🚀", desc: "Instant withdrawals via bKash, Nagad and Rocket — 24/7 in BDT." },
];

export default function SportsPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />
      <CategoryTabs active="sports" />

      <header className="space-y-2 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-xl sm:text-2xl">⚽</span>
          <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
            Sports Betting
          </h1>
        </div>
        <p className="max-w-2xl text-sm text-[#9ca3af]">
          Bet on football, cricket, basketball, tennis, kabaddi, esports, horse racing and more
          with the best odds in Bangladesh. Powered by 5 leading sportsbook providers with live
          in-play betting, cash out, and instant BDT payouts via bKash and Nagad.
        </p>
      </header>

      <SportsbookOdds />

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">🏟️</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Sports Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {SPORTS_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/sports/${cat.id}`}
              className="card-glow hover-lift flex flex-col items-center gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 text-center"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <p className="text-sm font-bold text-[#f0f0f0]">{cat.name}</p>
              <span className="rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                {cat.count}
              </span>
              <span className="btn-primary mt-1 w-full rounded-md px-3 py-1.5 text-center text-xs font-semibold">
                Bet Now
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GameSection
        title="Sports Games"
        emoji="⚽"
        games={SPORTS_GAMES_LIST}
        href="/sports"
        columns={10}
      />

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">⭐</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Why Bet with BSL?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="card-glow hover-lift flex gap-3 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#242628] text-xl">
                {b.emoji}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#f0f0f0]">{b.title}</h3>
                <p className="text-xs leading-relaxed text-[#9ca3af]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
