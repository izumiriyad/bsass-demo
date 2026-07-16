import Link from "next/link";
import { EVENT_LEADERBOARD } from "@/lib/catalog";

interface EventLeaderboardProps {
  title?: string;
  limit?: number;
}

const RANK_META: Record<number, { emoji: string; tint: string; text: string }> = {
  1: { emoji: "🥇", tint: "bg-[#ffdf19]/10", text: "text-[#ffdf19]" },
  2: { emoji: "🥈", tint: "bg-[#c0c0c0]/10", text: "text-[#c0c0c0]" },
  3: { emoji: "🥉", tint: "bg-[#cd7f32]/10", text: "text-[#cd7f32]" },
};

export function EventLeaderboard({
  title = "Live Leaderboard",
  limit = 10,
}: EventLeaderboardProps) {
  const rows = EVENT_LEADERBOARD.slice(0, limit);

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
      <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🏅</span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#ffdf19]">
            {title}
          </h3>
        </div>
        <span className="rounded bg-[#ffdf19]/10 px-2 py-0.5 text-[10px] font-bold text-[#ffdf19]">
          EVENT BATTLE
        </span>
      </div>

      <table className="w-full text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-[#2a2c30] text-[10px] uppercase tracking-wider text-[#6b7280]">
            <th className="px-4 py-2 font-semibold">Rank</th>
            <th className="px-4 py-2 font-semibold">Username</th>
            <th className="px-4 py-2 text-right font-semibold">Points</th>
            <th className="px-4 py-2 text-right font-semibold">Prize</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const meta = RANK_META[row.rank];
            return (
              <tr
                key={row.rank}
                className={`border-b border-[#2a2c30]/60 ${
                  row.rank % 2 === 0 ? "bg-[#1b1c1e]" : "bg-[#242628]/50"
                }`}
              >
                <td className="px-4 py-2.5">
                  {meta ? (
                    <span className="flex items-center gap-1">
                      <span className="text-base">{meta.emoji}</span>
                      <span className={`font-bold ${meta.text}`}>{row.rank}</span>
                    </span>
                  ) : (
                    <span className="font-semibold text-[#9ca3af]">{row.rank}</span>
                  )}
                </td>
                <td className="px-4 py-2.5">
                  <span
                    className={`font-semibold ${
                      meta ? meta.text : "text-[#f0f0f0]"
                    }`}
                  >
                    {row.username}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-semibold text-[#f0f0f0]">
                  {new Intl.NumberFormat("en-BD").format(row.points)}
                </td>
                <td className="px-4 py-2.5 text-right font-bold text-[#ffdf19]">
                  {row.prize}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="border-t border-[#2a2c30] px-4 py-3 text-center">
        <Link
          href="/tournaments"
          className="text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          View Full Leaderboard →
        </Link>
      </div>
    </div>
  );
}
