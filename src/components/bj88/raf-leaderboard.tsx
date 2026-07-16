import Link from "next/link";
import { RAF_LEADERBOARD } from "@/lib/catalog";

const RANK_META: Record<number, { emoji: string; text: string }> = {
  1: { emoji: "🥇", text: "text-[#ffdf19]" },
  2: { emoji: "🥈", text: "text-[#c0c0c0]" },
  3: { emoji: "🥉", text: "text-[#cd7f32]" },
};

export function RAFLeaderboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
      <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🤝</span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">
            RAF Leaderboard —{" "}
            <span className="text-[#ffdf19]">৳3,00,000 Monthly Pool</span>
          </h3>
        </div>
      </div>

      <table className="w-full text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-[#2a2c30] text-[10px] uppercase tracking-wider text-[#6b7280]">
            <th className="px-4 py-2 font-semibold">Rank</th>
            <th className="px-4 py-2 font-semibold">Username</th>
            <th className="px-4 py-2 text-right font-semibold">Referrals</th>
            <th className="px-4 py-2 text-right font-semibold">Earned</th>
          </tr>
        </thead>
        <tbody>
          {RAF_LEADERBOARD.map((row) => {
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
                  {row.referrals}
                </td>
                <td className="px-4 py-2.5 text-right font-bold text-[#ffdf19]">
                  {row.earned}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="border-t border-[#2a2c30] px-4 py-3">
        <p className="mb-3 text-center text-xs sm:text-sm">
          <span className="font-semibold text-[#22c55e]">Refer friends</span>
          <span className="mx-1.5 text-[#6b7280]">→</span>
          <span className="font-semibold text-[#f0f0f0]">Climb the ranks</span>
          <span className="mx-1.5 text-[#6b7280]">→</span>
          <span className="text-gold-gradient font-bold">
            Share ৳3,00,000 every month!
          </span>
        </p>
        <Link
          href="/referral"
          className="btn-primary block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white"
        >
          Join Referral Program →
        </Link>
      </div>
    </div>
  );
}
