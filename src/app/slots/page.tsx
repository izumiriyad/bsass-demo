import type { Metadata } from "next";
import { GameCard } from "@/components/game/game-card";
import { PageHero } from "@/components/site/page-hero";
import { JackpotTicker } from "@/components/game/jackpot-ticker";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getGamesByCategory, GAMES } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Slots",
  description:
    "Spin hundreds of video slots and chase progressive jackpots worth millions. Free spins, bonus buys, and megaways await.",
};

export default function SlotsPage() {
  const slots = getGamesByCategory("slots");
  const jackpots = GAMES.filter((g) => g.jackpot);

  return (
    <>
      <PageHero
        eyebrow="Spin to win"
        title="Slots"
        description="Hundreds of video slots with free spins, cascading wins, megaways, and life-changing progressive jackpots."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-600/20 to-orange-700/10 p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-300">
            Progressive jackpot
          </div>
          <div className="mt-1 font-mono text-4xl font-extrabold text-gold-gradient sm:text-5xl">
            ₱<JackpotTicker />
          </div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {jackpots.length} jackpot slots feed one shared prize pool that
            grows with every spin.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">
          💰 Jackpot slots
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {jackpots.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">All slots</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/games?category=slots">View all</Link>
          </Button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {slots.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </>
  );
}
