"use client";

import Link from "next/link";
import { Star, Users } from "lucide-react";
import type { Game } from "@/lib/types";
import { GameArt } from "./game-art";
import { FavoriteButton } from "./favorite-button";
import { Badge } from "@/components/ui/badge";
import { formatCompact } from "@/lib/utils";

export function GameCard({
  game,
  favorited,
}: {
  game: Game;
  favorited?: boolean;
}) {
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
        <Link
          href={`/games/${game.slug}`}
          className="relative block aspect-[3/4]"
          aria-label={`Play ${game.title}`}
        >
          <GameArt game={game} className="h-full w-full" emojiClassName="text-5xl" />
          <div className="pointer-events-none absolute left-2 top-2 flex flex-col gap-1">
            {game.isHot && <Badge variant="hot">🔥 HOT</Badge>}
            {game.isNew && <Badge variant="new">NEW</Badge>}
            {game.jackpot && <Badge variant="gold">JACKPOT</Badge>}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              ▶ Play now
            </span>
          </div>
        </Link>
        <div className="absolute right-2 top-2 z-10">
          <FavoriteButton gameId={game.id} initial={favorited} />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between gap-2">
            <Link
              href={`/games/${game.slug}`}
              className="truncate text-sm font-semibold hover:text-primary"
            >
              {game.title}
            </Link>
            <span className="flex shrink-0 items-center gap-0.5 text-xs text-amber-400">
              <Star className="size-3 fill-amber-400" />
              {game.rating}
            </span>
          </div>
          <div className="mt-0.5 flex items-center justify-between text-xs text-muted-foreground">
            <span className="truncate">{game.provider}</span>
            <span className="flex shrink-0 items-center gap-1">
              <Users className="size-3" />
              {formatCompact(game.players)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
