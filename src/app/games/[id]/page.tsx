import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ALL_GAMES, SITE, type BJ88Game } from "@/lib/catalog";
import { getSessionUser } from "@/lib/auth";
import { GameLauncher as BJ88GameLauncher } from "@/components/bj88/game-launcher";
import { WinnersTicker } from "@/components/bj88/tickers";
import { GameGrid } from "@/components/bj88/game-card";

interface GameDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: GameDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const game = ALL_GAMES.find((g) => g.id === id);
  if (!game) return { title: "Game Not Found" };
  return {
    title: `${game.title} — ${SITE.name} Bangladesh`,
    description: `Play ${game.title} by ${game.provider} on ${SITE.name} Bangladesh.`,
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params;
  const game = ALL_GAMES.find((g) => g.id === id);
  if (!game) notFound();

  const user = await getSessionUser();
  const [c1, c2] = game.gradient;

  const related = ALL_GAMES.filter(
    (g: BJ88Game) => g.category === game.category && g.id !== game.id
  ).slice(0, 10);

  const providerCount = ALL_GAMES.filter((g) => g.provider === game.provider).length;
  const categoryCount = ALL_GAMES.filter((g) => g.category === game.category).length;

  return (
    <div className="mx-auto max-w-5xl px-3 py-3">
      <WinnersTicker />

      <Link
        href="/games"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8a8aa0] transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to All Games
      </Link>

      <section className="mt-3 grid gap-4 lg:grid-cols-[300px_1fr]">
        <div
          className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl"
          style={{ background: `linear-gradient(150deg, ${c1}, ${c2})` }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.22), transparent 55%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 90%, rgba(0,0,0,0.45), transparent 60%)",
            }}
          />
          <span className="relative text-7xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            {game.emoji}
          </span>
          {game.isHot && (
            <span
              className="absolute left-2 top-2 rounded px-1.5 py-0.5 text-[10px] font-black leading-none text-white"
              style={{ background: "#ef4444" }}
            >
              HOT
            </span>
          )}
          {game.isNew && (
            <span
              className="absolute left-2 top-2 rounded px-1.5 py-0.5 text-[10px] font-black leading-none text-white"
              style={{ background: "#22c55e" }}
            >
              NEW
            </span>
          )}
          <span
            className="absolute right-2 top-2 rounded px-1 py-0.5 text-[9px] font-black italic leading-none text-black"
            style={{ background: "#f5a623" }}
          >
            bj
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-3xl font-black text-white">{game.title}</h1>
            <p className="mt-1 text-sm text-[#8a8aa0]">by {game.provider}</p>
          </div>

          {user ? (
            <BJ88GameLauncher gameId={game.id} title={game.title} emoji={game.emoji} />
          ) : (
            <Link
              href="/login"
              className="w-full rounded-full bg-gradient-to-r from-[#f5a623] to-[#e8920f] px-6 py-2.5 text-center text-sm font-bold text-black transition-opacity hover:opacity-90"
            >
              ▶ Login to Play
            </Link>
          )}

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8a8aa0]">
                Players
              </p>
              <p className="mt-1 text-lg font-bold text-[#f5a623]">
                {game.players ? (game.players >= 1000 ? `${(game.players / 1000).toFixed(1)}K` : game.players) : "—"}
              </p>
            </div>
            <div className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8a8aa0]">
                Category
              </p>
              <p className="mt-1 text-sm font-bold capitalize text-white">
                {game.category}
              </p>
            </div>
            <div className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8a8aa0]">
                Provider Games
              </p>
              <p className="mt-1 text-lg font-bold text-white">{providerCount}</p>
            </div>
          </div>

          <div className="rounded-lg border border-[#2a2a3e] bg-[#1e1e2d] p-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              About {game.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#c8c8d6]">
              {game.title} is a {game.category} game from {game.provider}, available
              now on {SITE.name} Bangladesh. {game.subcategory ? `Tagged under ${game.subcategory}, ` : ""}
              this title is part of a library of {categoryCount} games in the {game.category}{" "}
              category. Play in BDT with instant deposits via bKash, Nagad, and Rocket.
              Enjoy 24/7 support and responsible gaming tools.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-6">
          <div className="flex items-center gap-2.5 py-2">
            <span
              className="h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
            />
            <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
              Related Games
            </h2>
          </div>
          <GameGrid games={related} columns={10} />
        </section>
      )}
    </div>
  );
}
