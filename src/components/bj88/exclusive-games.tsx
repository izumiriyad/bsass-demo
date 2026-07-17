import Link from "next/link";
import { EXCLUSIVE_GAMES } from "@/lib/catalog";

export function ExclusiveGames() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-lg">🎮</span>
        <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Exclusive Games
        </h2>
        <Link
          href="/popular"
          className="ml-auto text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          See All →
        </Link>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {EXCLUSIVE_GAMES.map((game) => {
          const [c1, c2] = game.gradient;
          return (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group relative h-[110px] w-[160px] shrink-0 overflow-hidden rounded-xl transition hover:scale-[1.02] sm:h-[120px] sm:w-[200px]"
              style={{ background: `linear-gradient(150deg, ${c1}, ${c2})` }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 75% 50%, rgba(255,255,255,0.18), transparent 60%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                }}
              />
              {game.isHot && (
                <span className="absolute left-2 top-2 rounded bg-[#ef4444] px-1.5 py-0.5 text-[9px] font-bold leading-none text-white">
                  HOT
                </span>
              )}
              <span className="absolute right-2 top-2 rounded bg-[#ffdf19] px-1.5 py-0.5 text-[9px] font-bold leading-none text-[#121315]">
                EXCLUSIVE
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
                >
                  {game.emoji}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 px-3 pb-2">
                <p className="truncate text-sm font-bold text-white">{game.title}</p>
                <p className="truncate text-[10px] text-white/60">{game.provider}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
