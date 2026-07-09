import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  FISHING_GAMES,
  ARCADE_GAMES,
  CRASH_GAMES,
  type BJ88Game,
} from "@/lib/bj88-catalog";
import { BJ88GameLauncher } from "@/components/bj88/game-launcher";
import { WinnersTicker } from "@/components/bj88/tickers";
import { CategoryTabs } from "@/components/bj88/category-tabs";
import { getSessionUser } from "@/lib/auth";

const ALL_GAMES: BJ88Game[] = [
  ...POPULAR_GAMES,
  ...SLOTS_GAMES,
  ...CASINO_GAMES,
  ...FISHING_GAMES,
  ...ARCADE_GAMES,
  ...CRASH_GAMES,
];

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = ALL_GAMES.find((g) => g.id === id);
  if (!game) notFound();

  const user = await getSessionUser();
  const related = ALL_GAMES.filter(
    (g) => g.category === game.category && g.id !== game.id
  ).slice(0, 10);

  const [c1, c2] = game.gradient;

  return (
    <div className="px-3 py-3 lg:px-4">
      <div className="mb-3">
        <WinnersTicker />
      </div>

      <Link
        href="/"
        className="mb-3 inline-flex items-center gap-1 text-xs text-[#888899] hover:text-[#f5a623]"
      >
        <ArrowLeft className="size-3" /> Back to Home
      </Link>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        {/* Game art */}
        <div>
          <div
            className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl"
            style={{ backgroundImage: `linear-gradient(150deg, ${c1}, ${c2})` }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `radial-gradient(ellipse 70% 50% at 25% 12%, rgba(255,255,255,0.35), transparent 60%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 90% at 70% 80%, rgba(0,0,0,0.7), transparent 65%)`,
              }}
            />
            <span
              className="text-7xl drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)]"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
            >
              {game.emoji}
            </span>
            <span
              className="absolute right-2 top-2 rounded px-1.5 py-0.5 text-[10px] font-black italic"
              style={{ background: "rgba(245,166,35,0.95)", color: "#000" }}
            >
              bj
            </span>
            {game.isHot && (
              <span className="absolute left-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                🔥 HOT
              </span>
            )}
            {game.isNew && (
              <span className="absolute left-2 top-2 rounded bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                NEW
              </span>
            )}
          </div>
          <div className="mt-3">
            {user ? (
              <BJ88GameLauncher gameId={game.id} title={game.title} emoji={game.emoji} />
            ) : (
              <Link
                href="/login"
                className="block w-full rounded-lg bg-[#f5a623] px-6 py-3 text-center text-sm font-bold text-black hover:brightness-105"
              >
                ▶ Sign in to play
              </Link>
            )}
          </div>
        </div>

        {/* Game info */}
        <div>
          <h1 className="text-2xl font-black text-white">{game.title}</h1>
          <p className="mt-1 text-sm text-[#888899]">by {game.provider}</p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-3 text-center">
              <div className="text-xs text-[#888899]">Players</div>
              <div className="font-bold text-[#f5a623]">{game.players ?? "—"}</div>
            </div>
            <div className="rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-3 text-center">
              <div className="text-xs text-[#888899]">Category</div>
              <div className="font-bold capitalize">{game.category}</div>
            </div>
            <div className="rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-3 text-center">
              <div className="text-xs text-[#888899]">Provider</div>
              <div className="font-bold">{game.provider}</div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-[#1e1e2d] bg-[#1e1e2d] p-5 text-sm">
            <h3 className="font-bold text-white">About this game</h3>
            <p className="mt-2 text-[#888899]">
              {game.title} by {game.provider} is one of the most popular {game.category} games on
              BJ88 Bangladesh. Enjoy exciting gameplay, big wins and a seamless experience.
            </p>
          </div>
        </div>
      </div>

      {/* Related games */}
      {related.length > 0 && (
        <section className="mt-6">
          <div className="mb-2.5 flex items-center gap-2">
            <span
              className="inline-block h-5 w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
            />
            <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">
              Related Games
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-10">
            {related.map((g) => (
              <Link
                key={g.id}
                href={`/games/${g.id}`}
                className="group game-card block"
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: `linear-gradient(150deg, ${g.gradient[0]}, ${g.gradient[1]})` }}
                />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: `radial-gradient(ellipse 70% 50% at 25% 12%, rgba(255,255,255,0.35), transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
                    {g.emoji}
                  </span>
                </div>
                <span
                  className="absolute right-1 top-1 z-10 rounded px-1 py-0.5 text-[8px] font-black italic"
                  style={{ background: "rgba(245,166,35,0.95)", color: "#000" }}
                >
                  bj
                </span>
                <div
                  className="absolute inset-x-0 bottom-0 z-10 p-1.5 pt-5"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}
                >
                  <p className="truncate text-[10px] font-bold text-white">{g.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
