import type { Metadata } from "next";
import { GameCard } from "@/components/game/game-card";
import { PageHero } from "@/components/site/page-hero";
import { getGamesByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Live Casino",
  description:
    "Play live dealer roulette, baccarat, blackjack, and game shows streamed in HD with professional dealers, 24/7.",
};

const FEATURES = [
  { icon: "🎥", title: "HD streaming", text: "Crystal-clear multi-camera feeds." },
  { icon: "🧑‍⚖️", title: "Pro dealers", text: "Friendly, professional live dealers." },
  { icon: "💬", title: "Live chat", text: "Talk to dealers and other players." },
  { icon: "⚡", title: "Instant payouts", text: "Winnings credited in real time." },
];

export default function LiveCasinoPage() {
  const games = getGamesByCategory("live-casino");
  return (
    <>
      <PageHero
        eyebrow="Real dealers"
        title="Live Casino"
        description="Step into a real casino floor from anywhere. HD live tables, professional dealers, and authentic action around the clock."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border/60 bg-card/50 p-5"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </>
  );
}
