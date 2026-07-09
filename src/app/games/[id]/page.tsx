import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Users, TrendingUp, Tag } from "lucide-react";
import { GameArt } from "@/components/game/game-art";
import { GameCard } from "@/components/game/game-card";
import { GameLauncher } from "@/components/game/game-launcher";
import { FavoriteButton } from "@/components/game/favorite-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CATEGORIES,
  GAMES,
  getGameBySlug,
  getGamesByCategory,
} from "@/lib/catalog";
import { formatPHP, formatCompact } from "@/lib/utils";
import { getSessionUser } from "@/lib/auth";

type Params = { id: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const game = getGameBySlug(id);
  if (!game) return { title: "Game not found" };
  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: `${game.title} by ${game.provider}`,
      description: game.description,
    },
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const game = getGameBySlug(id);
  if (!game) notFound();

  const user = await getSessionUser();
  const category = CATEGORIES.find((c) => c.id === game.category);
  const related = getGamesByCategory(game.category)
    .filter((g) => g.id !== game.id)
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    gamePlatform: "Web",
    applicationCategory: "Game",
    genre: category?.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating,
      ratingCount: game.players,
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Button asChild variant="ghost" size="sm" className="mb-4 -ml-2">
        <Link href="/games">
          <ArrowLeft className="size-4" /> Back to games
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <GameArt
              game={game}
              className="aspect-[3/4] w-full"
              emojiClassName="text-8xl"
            />
            <div className="absolute left-3 top-3 flex gap-2">
              {game.isHot && <Badge variant="hot">🔥 Hot</Badge>}
              {game.isNew && <Badge variant="new">New</Badge>}
              {game.jackpot && <Badge variant="gold">Jackpot</Badge>}
            </div>
            <div className="absolute right-3 top-3">
              <FavoriteButton gameId={game.id} />
            </div>
          </div>

          <div className="mt-4">
            {user ? (
              <GameLauncher game={game} />
            ) : (
              <Button asChild size="lg" variant="gradient" className="w-full">
                <Link href={`/login?redirect=/games/${game.slug}`}>
                  ▶ Sign in to play
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href={`/games?category=${game.category}`} className="hover:text-foreground">
              {category?.emoji} {category?.name}
            </Link>
            <span>·</span>
            <span>by {game.provider}</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {game.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{game.rating}</span> rating
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-4 text-muted-foreground" />
              {formatCompact(game.players)} playing
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="size-4 text-emerald-400" />
              {game.rtp}% RTP
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {game.tags.map((t) => (
              <Badge key={t} variant="muted">
                <Tag className="size-3" /> {t}
              </Badge>
            ))}
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            {game.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Min bet" value={formatPHP(game.minBet)} />
            <Stat label="Max bet" value={formatPHP(game.maxBet)} />
            <Stat label="RTP" value={`${game.rtp}%`} />
          </div>

          {game.jackpot && (
            <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Current jackpot
              </div>
              <div className="font-mono text-2xl font-extrabold text-gold-gradient">
                {formatPHP(game.jackpot)}
              </div>
            </div>
          )}

          <div className="mt-6 rounded-xl border border-border/60 bg-card/40 p-5 text-sm">
            <h3 className="font-semibold">How to play</h3>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-muted-foreground">
              <li>Sign in or create a free account.</li>
              <li>Set your bet amount within the min/max range.</li>
              <li>Press spin / deal and enjoy the round.</li>
              <li>Winnings are credited to your wallet instantly.</li>
            </ol>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            More {category?.name}
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {related.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card/50 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-semibold">{value}</div>
    </div>
  );
}
