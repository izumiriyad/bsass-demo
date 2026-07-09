import Link from "next/link";
import { HeroBanner } from "@/components/bj88/hero-banner";
import { GameSection } from "@/components/bj88/game-section";
import { FeatureCard } from "@/components/bj88/game-card";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { WinnersTicker, JackpotTicker } from "@/components/bj88/tickers";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  CRASH_GAMES,
  FEATURED_GAMES,
  TOURNAMENTS,
  PROMOTIONS,
  SPORTS_EVENTS,
  PROVIDERS,
} from "@/lib/bj88-catalog";

export default function HomePage() {
  return (
    <div className="px-3 py-3 lg:px-4">
      {/* Winners ticker */}
      <div className="mb-3">
        <WinnersTicker />
      </div>

      {/* Hero banner full width */}
      <div className="mb-3">
        <HeroBanner />
      </div>

      {/* Category tabs */}
      <CategoryTabs active="popular" />

      {/* Popular games */}
      <GameSection
        title="Popular"
        icon="⭐"
        games={POPULAR_GAMES}
        href="/popular"
        columns={10}
      />

      {/* Featured Games — landscape cards */}
      <section className="mb-5">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
            />
            <span className="text-base">🎮</span>
            <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">Featured Games</h2>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_GAMES.map((g) => (
            <FeatureCard key={g.id} game={g} badge="FEATURED" />
          ))}
        </div>
      </section>

      {/* Slots */}
      <GameSection
        title="Slots"
        icon="🎰"
        games={SLOTS_GAMES}
        href="/slots"
        columns={10}
      />

      {/* Live Casino */}
      <GameSection
        title="Live Casino"
        icon="🃏"
        games={CASINO_GAMES}
        href="/casino"
        columns={10}
      />

      {/* Tournaments — landscape cards */}
      <section className="mb-5">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
            />
            <span className="text-base">🏆</span>
            <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">Tournaments</h2>
          </div>
          <Link href="/tournaments" className="text-xs font-medium text-[#f5a623] hover:underline">
            See All →
          </Link>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOURNAMENTS.map((g) => (
            <FeatureCard key={g.id} game={g} badge={g.provider.toUpperCase()} />
          ))}
        </div>
      </section>

      {/* Fishing */}
      <GameSection
        title="Fishing"
        icon="🎣"
        games={FISHING_GAMES}
        href="/fishing"
        columns={10}
      />

      {/* Arcade */}
      <GameSection
        title="Arcade"
        icon="🕹️"
        games={ARCADE_GAMES}
        href="/arcade"
        columns={10}
      />

      {/* Crash */}
      <GameSection
        title="Crash"
        icon="🚀"
        games={CRASH_GAMES}
        href="/crash"
        columns={10}
      />

      {/* Promotions */}
      <section className="mb-5">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
            />
            <span className="text-base">🎁</span>
            <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">Promotions</h2>
          </div>
          <Link href="/promotions" className="text-xs font-medium text-[#f5a623] hover:underline">
            See All →
          </Link>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOTIONS.map((p) => (
            <Link
              key={p.id}
              href={`/promotions/${p.id}`}
              className="group relative block overflow-hidden rounded-lg p-5 transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: `linear-gradient(120deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
            >
              <div className="absolute right-3 top-3 text-4xl opacity-25">{p.emoji}</div>
              <div className="relative">
                <span className="rounded bg-black/30 px-2 py-0.5 text-[9px] font-bold text-white">
                  {p.badge}
                </span>
                <h3 className="mt-2 text-sm font-bold text-white">{p.title}</h3>
                <p className="mt-0.5 text-xs text-white/75">{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sportsbook preview */}
      <section className="mb-5">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
            />
            <span className="text-base">⚽</span>
            <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">Sports — Live & Upcoming</h2>
          </div>
          <Link href="/sports" className="text-xs font-medium text-[#f5a623] hover:underline">
            See All →
          </Link>
        </div>
        <div className="space-y-2">
          {SPORTS_EVENTS.map((e) => (
            <div
              key={e.id}
              className="rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-3"
            >
              <div className="mb-2 flex items-center justify-between text-[10px] text-[#888899]">
                <span className="font-semibold text-white">{e.league}</span>
                {e.status === "live" ? (
                  <span className="flex items-center gap-1 rounded bg-red-500/15 px-1.5 py-0.5 font-bold text-red-400 animate-live">
                    ● LIVE {e.minute}
                  </span>
                ) : (
                  <span className="rounded bg-[#2a2a3e] px-1.5 py-0.5">Upcoming</span>
                )}
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>{e.team1}</span>
                  <span className="text-xs text-[#555577]">vs</span>
                  <span>{e.team2}</span>
                </div>
                <div className="flex gap-1.5">
                  {e.odds.map((odd, i) => (
                    <button
                      key={i}
                      className="rounded border border-[#2a2a3e] bg-[#0d0d18] px-3 py-1.5 text-xs font-bold hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
                    >
                      {odd.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jackpot banner */}
      <section className="mb-5">
        <div
          className="relative overflow-hidden rounded-xl p-6"
          style={{ background: "linear-gradient(135deg, #713f12, #d97706)" }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
            Mega Jackpot
          </div>
          <div className="mt-1 font-mono text-3xl font-black text-white">
            <JackpotTicker />
          </div>
          <p className="mt-1 text-xs text-amber-100/70">
            Growing every second — could be yours!
          </p>
          <Link
            href="/slots"
            className="mt-3 inline-block rounded-md bg-white px-4 py-1.5 text-xs font-bold text-black hover:bg-amber-50"
          >
            Play Jackpot Slots →
          </Link>
        </div>
      </section>

      {/* Providers */}
      <section className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <span
            className="inline-block h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
          />
          <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">Game Providers</h2>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {PROVIDERS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-1 rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-3 text-center hover:border-[#f5a623]/40 transition-colors"
            >
              <span className="text-xl">{p.emoji}</span>
              <span className="text-[9px] font-semibold text-[#b0b0c8]">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Responsible gaming */}
      <div className="mt-6 rounded-lg border border-[#1e1e2d] bg-[#1a1a26] p-4 text-center text-[11px] text-[#666680]">
        BJ88 Bangladesh is committed to responsible gaming. 18+ only. Play responsibly.
        Gambling can be addictive. If you need help, contact support@bj88.com.bd
      </div>
    </div>
  );
}
