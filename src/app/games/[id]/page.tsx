import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  POPULAR_GAMES,
  SLOTS_GAMES,
  CASINO_GAMES,
  type BJ88Game,
} from "@/lib/bj88-catalog";
import { BJ88GameLauncher } from "@/components/bj88/game-launcher";
import { WinnersTicker } from "@/components/bj88/tickers";
import { getSessionUser } from "@/lib/auth";

const ALL_GAMES: BJ88Game[] = [...POPULAR_GAMES, ...SLOTS_GAMES, ...CASINO_GAMES];

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = ALL_GAMES.find((g) => g.id === id);
  if (!game) notFound();

  const user = await getSessionUser();
  const related = ALL_GAMES.filter((g) => g.category === game.category && g.id !== game.id).slice(0, 6);

  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>

      <Link href="/" className="mb-4 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#f0b429]">
        <ArrowLeft className="size-3" /> Back
      </Link>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Game art */}
        <div>
          <div
            className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl"
            style={{ backgroundImage: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})` }}
          >
            <span className="text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">{game.emoji}</span>
            {game.isHot && (
              <span className="absolute left-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">🔥 HOT</span>
            )}
            {game.isNew && (
              <span className="absolute left-2 top-2 rounded bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white">NEW</span>
            )}
          </div>
          <div className="mt-4">
            {user ? (
              <BJ88GameLauncher gameId={game.id} title={game.title} emoji={game.emoji} />
            ) : (
              <Link
                href="/login"
                className="block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-bold text-black hover:brightness-110"
              >
                ▶ Sign in to play
              </Link>
            )}
          </div>
        </div>

        {/* Game info */}
        <div>
          <h1 className="text-2xl font-black text-white">{game.title}</h1>
          <p className="mt-1 text-sm text-gray-400">by {game.provider}</p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-3 text-center">
              <div className="text-xs text-gray-400">Players</div>
              <div className="font-bold text-[#f0b429]">{game.players ?? "—"}</div>
            </div>
            <div className="rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-3 text-center">
              <div className="text-xs text-gray-400">Category</div>
              <div className="font-bold capitalize">{game.category}</div>
            </div>
            <div className="rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-3 text-center">
              <div className="text-xs text-gray-400">Provider</div>
              <div className="font-bold">{game.provider}</div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-[#1a1a2e] bg-[#1a1a2e] p-5 text-sm">
            <h3 className="font-bold text-white">About this game</h3>
            <p className="mt-2 text-gray-400">
              {game.title} by {game.provider} is one of the most popular {game.category} games on BJ88 Bangladesh.
              Enjoy exciting gameplay, big wins and a seamless experience.
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 font-bold text-white">Related Games</h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {related.map((g) => (
                  <Link
                    key={g.id}
                    href={`/games/${g.id}`}
                    className="group relative aspect-square overflow-hidden rounded-lg game-card-hover"
                    style={{ backgroundImage: `linear-gradient(135deg, ${g.gradient[0]}, ${g.gradient[1]})` }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-2xl transition-transform group-hover:scale-125">{g.emoji}</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1">
                      <p className="truncate text-[8px] text-white">{g.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
