import type { Metadata } from "next";
import { GamesBrowser } from "@/components/game/games-browser";
import { PageHero } from "@/components/site/page-hero";
import { CATEGORIES, GAMES } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "All Games",
  description:
    "Browse and search the full Playverse library of slots, live casino, fishing, crash, arcade, and poker games.",
};

export const dynamic = "force-dynamic";

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const sp = await searchParams;
  const requested = typeof sp.category === "string" ? sp.category : "all";
  const initialCategory = CATEGORIES.some((c) => c.id === requested)
    ? requested
    : "all";

  return (
    <>
      <PageHero
        eyebrow="Library"
        title="All Games"
        description="Filter by category, search by name or provider, and sort to find exactly what you're in the mood for."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <GamesBrowser games={GAMES} initialCategory={initialCategory} />
      </section>
    </>
  );
}
