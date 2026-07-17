import Link from "next/link";
import { WinnersTicker, JackpotTicker } from "@/components/bj88/tickers";
import { HeroBanner } from "@/components/bj88/hero-banner";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { GameSection } from "@/components/bj88/game-section";
import { GameCard, FeatureCard, GameGrid } from "@/components/bj88/game-card";
import { TournamentSection } from "@/components/bj88/tournament-cards";
import { EventLeaderboard } from "@/components/bj88/event-leaderboard";
import { RAFLeaderboard } from "@/components/bj88/raf-leaderboard";
import { AmbassadorShowcase } from "@/components/bj88/ambassador-showcase";
import { SponsorStrip } from "@/components/bj88/sponsor-strip";
import { LiveCricketWidget } from "@/components/bj88/live-cricket";
import { SportsbookOdds } from "@/components/bj88/sportsbook-odds";
import { AppDownloadBanner } from "@/components/bj88/app-download-banner";
import { TrustBadges } from "@/components/bj88/trust-badges";
import { NewsSection } from "@/components/bj88/news-section";
import { PromoCalendar } from "@/components/bj88/promo-calendar";
import { BettingExchangeWidget } from "@/components/bj88/betting-exchange-widget";
import { JackpotBanner } from "@/components/bj88/jackpot-banner";
import { ExclusiveGames } from "@/components/bj88/exclusive-games";
import { Footer } from "@/components/bj88/footer";
import { WhyChoose } from "@/components/bj88/why-choose";
import { ProviderShowcase } from "@/components/bj88/provider-showcase";
import { StatsCounter } from "@/components/bj88/stats-counter";
import { AppQRSection } from "@/components/bj88/app-qr-section";
import {
  EXTRA_PROVIDERS,
  PROVIDERS,
  PROMOTIONS,
  LOCAL_GAMES,
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  CRASH_GAMES,
  COCKFIGHTING_GAMES,
  FEATURED_GAMES,
  SPORTS_EVENTS,
  SITE,
} from "@/lib/catalog";

const POPULAR_WITH_LOCAL = [...POPULAR_GAMES, ...LOCAL_GAMES];
const HOMEPAGE_PROMOS = PROMOTIONS.slice(0, 6);

export default function HomePage() {
  return (
    <div className="space-y-5 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />

      <HeroBanner />

      <CategoryTabs />

      <JackpotBanner />

      <ExclusiveGames />

      <GameSection
        title="Popular"
        emoji="⭐"
        games={POPULAR_WITH_LOCAL}
        href="/popular"
        columns={10}
      />

      <LiveCricketWidget />

      <BettingExchangeWidget />

      <SportsbookOdds />

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🔥</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Featured Games
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {FEATURED_GAMES.map((game) => (
            <FeatureCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <TournamentSection />

      <GameSection
        title="Slots"
        emoji="🎰"
        games={SLOTS_GAMES}
        href="/slots"
        columns={10}
      />

      <GameSection
        title="Casino"
        emoji="🃏"
        games={CASINO_GAMES}
        href="/casino"
        columns={10}
      />

      <WhyChoose />

      <StatsCounter />

      <PromoCalendar />

      <RAFLeaderboard />

      <EventLeaderboard title="Tournament Leaderboard" limit={5} />

      <GameSection
        title="Crash"
        emoji="🚀"
        games={CRASH_GAMES}
        href="/crash"
        columns={10}
      />

      <GameSection
        title="Cockfighting"
        emoji="🐓"
        games={COCKFIGHTING_GAMES}
        href="/cockfighting"
        columns={10}
      />

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🎁</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Promotions
          </h2>
          <Link
            href="/promotions"
            className="ml-auto text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
          >
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {HOMEPAGE_PROMOS.map((promo) => {
            const [c1, c2] = promo.gradient;
            return (
              <Link
                key={promo.id}
                href={`/promotions/${promo.id}`}
                className="relative overflow-hidden rounded-xl p-4 transition hover:opacity-95"
                style={{
                  background: `linear-gradient(135deg, ${c1}, ${c2})`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 55%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block rounded bg-black/25 px-2 py-0.5 text-[10px] font-bold text-white">
                      {promo.badge}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-white/80">{promo.subtitle}</p>
                  </div>
                  <span
                    className="text-3xl"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
                  >
                    {promo.emoji}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <AmbassadorShowcase />

      <SponsorStrip />

      <AppQRSection />

      <AppDownloadBanner />

      <NewsSection limit={4} />

      <JackpotTicker />

      <ProviderShowcase />

      <TrustBadges />

      <section className="rounded-lg border border-[#2a2c30] bg-[#1b1c1e] p-4 text-center">
        <p className="text-xs text-[#9ca3af]">
          <span className="font-bold text-[#ffdf19]">{SITE.shortName}</span> is
          committed to responsible gaming. Play responsibly. 18+ only. If you
          need help, contact{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-[#22c55e] underline hover:text-[#00a86d]"
          >
            {SITE.supportEmail}
          </a>
          .
        </p>
      </section>

      <Footer />
    </div>
  );
}
