import { HeroBanner } from "@/components/bj88/hero-banner";
import { GameSection } from "@/components/bj88/game-section";
import { WinnersTicker, JackpotTicker } from "@/components/bj88/tickers";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FEATURED_GAMES,
  PROMOTIONS,
  SPORTS_EVENTS,
} from "@/lib/bj88-catalog";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="px-4 py-4 lg:px-6">
      {/* Winners ticker */}
      <div className="mb-4">
        <WinnersTicker />
      </div>

      {/* Hero + Jackpot row */}
      <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_300px]">
        <HeroBanner />
        <div className="flex flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-xl p-5"
            style={{ background: "linear-gradient(135deg, #713f12, #d97706)" }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-amber-200">
              Mega Jackpot
            </div>
            <div className="mt-1 font-mono text-2xl font-black text-white">
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
          <div
            className="flex flex-1 flex-col justify-center rounded-xl border border-[#1a1a2e] bg-[#1a1a2e] p-5"
          >
            <div className="text-sm font-bold text-white">Quick Access</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Deposit", emoji: "💰", href: "/dashboard/wallet" },
                { label: "Withdraw", emoji: "🏧", href: "/dashboard/wallet" },
                { label: "History", emoji: "📊", href: "/dashboard/history" },
              ].map((q) => (
                <Link
                  key={q.label}
                  href={q.href}
                  className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2a45] bg-[#0a0a14] p-3 text-xs hover:border-[#f0b429]/50"
                >
                  <span className="text-xl">{q.emoji}</span>
                  {q.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured providers row */}
      <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-8">
        {[
          { name: "PRAGMATIC PLAY", emoji: "🎯" },
          { name: "JILI", emoji: "🎰" },
          { name: "EVOLUTION", emoji: "🃏" },
          { name: "AE SEXY", emoji: "💃" },
          { name: "HABANERO", emoji: "🌶️" },
          { name: "PG SOFT", emoji: "🎮" },
          { name: "SPADE GAMING", emoji: "♠️" },
          { name: "JDB", emoji: "🎲" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center gap-1 rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-3 text-center hover:border-[#f0b429]/40 transition-colors"
          >
            <span className="text-2xl">{p.emoji}</span>
            <span className="text-[10px] font-semibold text-gray-300">{p.name}</span>
          </div>
        ))}
      </div>

      {/* Game sections */}
      <GameSection
        title="Popular Games"
        icon="⭐"
        games={POPULAR_GAMES}
        href="/popular"
        columns={10}
      />

      <GameSection
        title="Slots"
        icon="🎰"
        games={SLOTS_GAMES}
        href="/slots"
        columns={8}
      />

      <GameSection
        title="Live Casino"
        icon="🃏"
        games={CASINO_GAMES}
        href="/casino"
        columns={8}
      />

      {/* Promotions row */}
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">🎁 Promotions</h2>
          <Link href="/promotions" className="text-xs text-[#f0b429] hover:underline">
            See All →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOTIONS.map((p) => (
            <Link
              key={p.id}
              href={`/promotions/${p.id}`}
              className="group relative block overflow-hidden rounded-xl p-5 transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: `linear-gradient(120deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
            >
              <div className="absolute right-3 top-3 text-4xl opacity-30">{p.emoji}</div>
              <div className="relative">
                <span className="rounded bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white">
                  {p.badge}
                </span>
                <h3 className="mt-2 text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-xs text-white/80">{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sportsbook preview */}
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">⚽ Sports — Live & Upcoming</h2>
          <Link href="/sports" className="text-xs text-[#f0b429] hover:underline">
            See All →
          </Link>
        </div>
        <div className="space-y-2">
          {SPORTS_EVENTS.map((e) => (
            <div key={e.id} className="rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-3">
              <div className="mb-2 flex items-center justify-between text-[10px] text-gray-400">
                <span className="font-semibold text-white">{e.league}</span>
                {e.status === "live" ? (
                  <span className="flex items-center gap-1 rounded bg-red-500/20 px-1.5 py-0.5 font-bold text-red-400 animate-live">
                    ● LIVE {e.minute}
                  </span>
                ) : (
                  <span>Upcoming</span>
                )}
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>{e.team1}</span>
                  <span className="text-xs text-gray-500">vs</span>
                  <span>{e.team2}</span>
                </div>
                <div className="flex gap-1.5">
                  {e.odds.map((odd, i) => (
                    <button
                      key={i}
                      className="rounded border border-[#2a2a45] bg-[#0a0a14] px-3 py-1.5 text-xs font-bold hover:border-[#f0b429] hover:text-[#f0b429] transition-colors"
                    >
                      {odd === 0 ? "—" : odd.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer disclaimer */}
      <div className="mt-8 rounded-lg border border-[#1a1a2e] bg-[#0a0a14] p-4 text-center text-xs text-gray-500">
        BJ88 Bangladesh is committed to responsible gaming. 18+ only. Play responsibly.
        Gambling can be addictive. If you need help, contact support@bj88.com.bd
      </div>
    </div>
  );
}
