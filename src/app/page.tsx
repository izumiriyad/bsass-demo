import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Trophy,
} from "lucide-react";
import { HeroCarousel } from "@/components/game/hero-carousel";
import { CategoryTiles } from "@/components/game/category-tiles";
import { GameCard } from "@/components/game/game-card";
import { PromotionCard } from "@/components/game/promotion-card";
import { SectionHeading } from "@/components/game/section-heading";
import { JackpotTicker } from "@/components/game/jackpot-ticker";
import { WinnerTicker } from "@/components/game/winner-ticker";
import { FaqList } from "@/components/site/faq-list";
import { CtaBanner } from "@/components/site/cta-banner";
import { Button } from "@/components/ui/button";
import {
  FAQS,
  FEATURES,
  GAMES,
  PROVIDERS,
  PROMOTIONS,
  SITE,
  STATS,
  STEPS,
  TESTIMONIALS,
} from "@/lib/catalog";
import { formatPHP } from "@/lib/utils";

export default function HomePage() {
  const hotGames = GAMES.filter((g) => g.isHot).slice(0, 10);
  const newGames = GAMES.filter((g) => g.isNew).slice(0, 10);
  const featured = GAMES.filter((g) => g.isFeatured).slice(0, 10);
  const jackpotGames = GAMES.filter((g) => g.jackpot).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/games?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="space-y-16 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          <HeroCarousel />
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-orange-600/10 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                Mega Jackpot
              </div>
              <div className="mt-1 font-mono text-3xl font-extrabold text-gold-gradient">
                ₱<JackpotTicker />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Climbing every second. Could be yours.
              </p>
              <Button asChild size="sm" variant="gold" className="mt-4 w-full">
                <Link href="/games?category=slots">Play jackpot slots</Link>
              </Button>
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="text-sm font-semibold">Recent big wins</div>
              <div className="mt-3 space-y-2 text-sm">
                {[
                  ["M***3", 124500, "Galactic Gold"],
                  ["J***7", 87200, "Royal Baccarat"],
                  ["A***1", 54300, "Rocket Crash"],
                ].map(([name, amount, game], i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-emerald-400">
                        {name}
                      </span>{" "}
                      · {game}
                    </span>
                    <span className="font-semibold text-amber-300">
                      {formatPHP(Number(amount))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winner ticker */}
      <div className="border-y border-border/60 bg-muted/40 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 lg:px-8">
          <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Trophy className="size-4" /> Live wins
          </span>
          <WinnerTicker />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="Browse by category"
          description="From spinning reels to live dealers and live sports — find your next favorite game."
        />
        <div className="mt-6">
          <CategoryTiles />
        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Trending now"
          title="🔥 Hot games"
          action={
            <Button asChild variant="ghost" size="sm">
              <Link href="/games">
                View all <ArrowRight className="size-4" />
              </Link>
            </Button>
          }
        />
        <GameGrid games={hotGames} />
      </section>

      {/* Jackpot band */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/30 p-8 sm:p-10">
          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10rem] opacity-20 sm:block">
            💎
          </div>
          <div className="relative max-w-xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Progressive jackpot
            </div>
            <div className="mt-2 font-mono text-4xl font-extrabold text-gold-gradient sm:text-6xl">
              ₱<JackpotTicker />
            </div>
            <p className="mt-3 text-muted-foreground">
              {jackpotGames.length} jackpot slots are connected to one
              ever-growing prize pool. One spin could trigger a life-changing
              payout.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {jackpotGames.map((g) => (
                <Link
                  key={g.id}
                  href={`/games/${g.slug}`}
                  className="rounded-lg border border-border/60 bg-card/60 p-3 text-center text-sm transition-colors hover:border-amber-400/50"
                >
                  <div className="text-2xl">{g.emoji}</div>
                  <div className="mt-1 truncate text-xs font-medium">
                    {g.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New releases */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Fresh drops"
          title="✨ New releases"
          action={
            <Button asChild variant="ghost" size="sm">
              <Link href="/games">
                View all <ArrowRight className="size-4" />
              </Link>
            </Button>
          }
        />
        <GameGrid games={newGames} />
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Hand-picked" title="⭐ Featured games" />
        <GameGrid games={featured} />
      </section>

      {/* Promotions */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Rewards"
          title="Promotions & bonuses"
          description="Generous offers for new and returning players."
          action={
            <Button asChild variant="outline" size="sm">
              <Link href="/promotions">
                All promotions <ArrowRight className="size-4" />
              </Link>
            </Button>
          }
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOTIONS.slice(0, 3).map((p) => (
            <PromotionCard key={p.id} promo={p} />
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Partners" title="Top game providers" />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {PROVIDERS.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center gap-1 rounded-xl border border-border/60 bg-card/50 p-4 text-center"
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-sm font-semibold">{p.name}</span>
              <span className="text-xs text-muted-foreground">
                {p.games} games
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Why Playverse"
          title="Built for players"
          description="Everything you need for a smooth, secure, and exciting experience."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Get started"
          title="Start playing in 3 steps"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6"
            >
              <div className="text-5xl font-black text-primary/20">
                {s.step}
              </div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Players" title="What our community says" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border/60 bg-card/50 p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < t.rating
                        ? "size-4 fill-amber-400 text-amber-400"
                        : "size-4 text-muted-foreground"
                    }
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                “{t.quote}”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Help center"
          title="Frequently asked questions"
          action={
            <Button asChild variant="outline" size="sm">
              <Link href="/faq">All FAQs</Link>
            </Button>
          }
        />
        <div className="mt-6 max-w-3xl">
          <FaqList items={FAQS.slice(0, 4)} />
        </div>
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" /> 256-bit SSL
            encryption
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" /> Provably fair
            RNG
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" /> Responsible
            gaming certified
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" /> 24/7 human
            support
          </span>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function GameGrid({ games }: { games: typeof GAMES }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
