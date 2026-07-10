import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  CRASH_GAMES,
  FEATURED_GAMES,
  TOURNAMENTS,
  SPORTS_EVENTS,
  PROMOTIONS,
  PROVIDERS,
  SITE,
} from "@/lib/catalog";
import { WinnersTicker, JackpotTicker } from "@/components/bj88/tickers";
import { HeroBanner } from "@/components/bj88/hero-banner";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameSection } from "@/components/bj88/game-section";
import { FeatureCard } from "@/components/bj88/game-card";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-3">
      <WinnersTicker />
      <div className="mt-3">
        <HeroBanner />
      </div>
      <CategoryTabs />

      <GameSection
        title="Popular"
        icon="⭐"
        games={POPULAR_GAMES}
        href="/popular"
        columns={10}
      />

      <section className="mt-5">
        <div className="flex items-center gap-2.5 py-2">
          <span
            className="h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
          />
          <span className="text-base">✨</span>
          <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
            Featured Games
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_GAMES.map((g) => (
            <FeatureCard key={g.id} game={g} badge="FEATURED" />
          ))}
        </div>
      </section>

      <GameSection
        title="Slots"
        icon="🎰"
        games={SLOTS_GAMES}
        href="/slots"
        columns={10}
      />

      <GameSection
        title="Live Casino"
        icon="🃏"
        games={CASINO_GAMES}
        href="/casino"
        columns={8}
      />

      <section className="mt-5">
        <div className="flex items-center gap-2.5 py-2">
          <span
            className="h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
          />
          <span className="text-base">🏆</span>
          <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
            Tournaments
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {TOURNAMENTS.map((g) => (
            <FeatureCard key={g.id} game={g} badge={g.provider} />
          ))}
        </div>
      </section>

      <GameSection
        title="Fishing"
        icon="🎣"
        games={FISHING_GAMES}
        href="/fishing"
        columns={8}
      />

      <GameSection
        title="Arcade"
        icon="🕹️"
        games={ARCADE_GAMES}
        href="/arcade"
        columns={8}
      />

      <GameSection
        title="Crash"
        icon="🚀"
        games={CRASH_GAMES}
        href="/crash"
        columns={7}
      />

      <section className="mt-5">
        <div className="flex items-center gap-2.5 py-2">
          <span
            className="h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
          />
          <span className="text-base">🎁</span>
          <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
            Promotions
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PROMOTIONS.map((p) => (
            <div
              key={p.id}
              className="relative overflow-hidden rounded-xl p-4"
              style={{
                background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <span className="text-3xl">{p.emoji}</span>
                <span className="mt-2 block rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-bold text-white w-fit">
                  {p.badge}
                </span>
                <h3 className="mt-1.5 text-sm font-bold text-white">{p.title}</h3>
                <p className="text-[11px] text-white/80">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2.5 py-2">
          <span
            className="h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
          />
          <span className="text-base">🏟️</span>
          <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
            Sportsbook
          </h2>
          <a
            href="/sports"
            className="text-xs font-semibold text-[#f5a623] transition-opacity hover:opacity-80"
          >
            See All →
          </a>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {SPORTS_EVENTS.map((e) => (
            <div
              key={e.id}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-[#8a8aa0]">
                  {e.league}
                </span>
                {e.status === "live" ? (
                  <span className="flex items-center gap-1 rounded bg-red-600/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    LIVE {e.minute}
                  </span>
                ) : (
                  <span className="rounded bg-[#2a2a3e] px-1.5 py-0.5 text-[9px] font-bold text-[#8a8aa0]">
                    UPCOMING
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between text-sm font-bold text-white">
                <span className="truncate">{e.team1}</span>
                <span className="text-[#8a8aa0]">vs</span>
                <span className="truncate">{e.team2}</span>
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                {e.odds.map((o, i) => (
                  <button
                    key={i}
                    type="button"
                    className="rounded-md border border-[#2a2a3e] bg-[#0d0d18] py-1.5 text-xs font-bold text-white transition-colors hover:border-[#f5a623] hover:text-[#f5a623]"
                  >
                    {o.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className="relative overflow-hidden rounded-xl border border-[#f5a623]/30 p-5 text-center" style={{ background: "linear-gradient(135deg, #1e1b4b, #4c1d95)" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(245,166,35,0.25), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <JackpotTicker />
            <p className="text-xs text-white/70">
              Play any slot game for a chance to win the progressive jackpot!
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-2.5 py-2">
          <span
            className="h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
          />
          <span className="text-base">🤝</span>
          <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
            Top Providers
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {PROVIDERS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-2 transition-colors hover:border-[#f5a623]/50"
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-center text-[8px] font-semibold leading-tight text-[#c8c8d6]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 border-t border-[#2a2a3e] pt-4">
        <div className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-4 text-center">
          <p className="text-xs text-[#8a8aa0]">
            🛡️ {SITE.name} promotes responsible gaming. Only persons aged 18+ may
            play. Gambling can be addictive — please play responsibly. If you need
            help, contact support at {SITE.supportEmail}.
          </p>
        </div>
      </section>
    </div>
  );
}
