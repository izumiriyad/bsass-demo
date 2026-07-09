import Link from "next/link";
import { Heart } from "lucide-react";
import { getFavoriteIds, requireUser } from "@/lib/auth";
import { GameCard } from "@/components/game/game-card";
import { Button } from "@/components/ui/button";
import { GAMES } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function FavoritesPage() {
  const user = await requireUser();
  const ids = await getFavoriteIds(user.id);
  const games = GAMES.filter((g) => ids.includes(g.id));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Your favorites</h1>
        <p className="text-sm text-muted-foreground">
          Games you&apos;ve saved for quick access.
        </p>
      </div>

      {games.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border/70 py-16 text-center">
          <Heart className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No favorites yet. Tap the heart on any game to save it here.
          </p>
          <Button asChild variant="gradient">
            <Link href="/games">Browse games</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((g) => (
            <GameCard key={g.id} game={g} favorited />
          ))}
        </div>
      )}
    </div>
  );
}
