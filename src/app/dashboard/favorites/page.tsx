import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
import { getSessionUser } from "@/lib/auth";
import { ALL_GAMES } from "@/lib/catalog";
import { GameGrid } from "@/components/bj88/game-card";
import { headers } from "next/headers";

export const metadata: Metadata = { title: "Favorites" };

export default async function FavoritesPage() {
  const user = await getSessionUser();
  if (!user) return null;

  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${protocol}://${host}`;

  let favoriteIds: string[] = [];
  try {
    const res = await fetch(`${baseUrl}/api/favorites`, {
      headers: { Cookie: h.get("cookie") ?? "" },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      favoriteIds = data.favorites ?? [];
    }
  } catch {
    // Fallback to empty
  }

  const favorites = ALL_GAMES.filter((g) => favoriteIds.includes(g.id));

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#f0f0f0] sm:text-2xl">Favorites</h1>
        <p className="text-sm text-[#9ca3af]">Your favorite games, all in one place</p>
      </div>

      {favorites.length > 0 ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-[#ef4444]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">
              {favorites.length} Favorite Games
            </span>
          </div>
          <GameGrid games={favorites} columns={7} />
        </div>
      ) : (
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-8 text-center">
          <Heart className="mx-auto h-10 w-10 text-[#6b7280]" />
          <p className="mt-3 text-sm text-[#9ca3af]">No favorites yet.</p>
          <p className="mt-1 text-xs text-[#6b7280]">Tap the heart icon on any game to add it here.</p>
          <Link href="/games" className="btn-primary mt-4 inline-block px-6 py-2.5 text-sm font-semibold">
            Browse Games
          </Link>
        </div>
      )}
    </div>
  );
}
