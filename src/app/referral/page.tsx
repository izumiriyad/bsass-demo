import type { Metadata } from "next";
import Link from "next/link";
import { RAF_LEADERBOARD } from "@/lib/catalog";
import { RAFLeaderboard } from "@/components/bj88/raf-leaderboard";

export const metadata: Metadata = { title: "Refer & Earn" };

const STEPS = [
  {
    emoji: "🔗",
    title: "Share Your Link",
    desc: "Copy your unique referral link and share it with friends, family, and on social media.",
  },
  {
    emoji: "👋",
    title: "Friend Joins & Plays",
    desc: "Your friend registers through your link and starts playing real money games.",
  },
  {
    emoji: "💸",
    title: "You Earn ৳500 + Climb Ranks",
    desc: "Get ৳500 instantly for each active referral and climb the monthly leaderboard.",
  },
];

const PRIZES = [
  { rank: 1, amount: "৳50,000" },
  { rank: 2, amount: "৳30,000" },
  { rank: 3, amount: "৳20,000" },
  { rank: 4, amount: "৳15,000" },
  { rank: 5, amount: "৳10,000" },
  { rank: 6, amount: "৳8,000" },
  { rank: 7, amount: "৳6,000" },
  { rank: 8, amount: "৳5,000" },
  { rank: 9, amount: "৳4,000" },
  { rank: 10, amount: "৳3,000" },
];

export default function ReferralPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <section className="relative overflow-hidden rounded-2xl border border-[#008d5b]/30 bg-gradient-to-br from-[#008d5b] via-[#006640] to-[#0d1f17] p-8 text-center sm:p-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,223,25,0.12), transparent 60%)",
          }}
        />
        <div className="relative space-y-3">
          <span className="inline-block rounded-full bg-[#ffdf19]/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#ffdf19]">
            Refer &amp; Earn Program
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Refer &amp; Earn{" "}
            <span className="text-[#ffdf19]">৳3,00,000</span> Monthly
          </h1>
          <p className="text-lg font-semibold text-white/90 sm:text-xl">
            Invite friends, climb the leaderboard, share the prize pool
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">⚙️</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5 text-center"
            >
              <span className="absolute right-3 top-2 text-5xl font-extrabold text-[#2a2c30]">
                {i + 1}
              </span>
              <div className="relative space-y-2">
                <span className="text-4xl">{step.emoji}</span>
                <h3 className="text-sm font-bold text-[#f0f0f0]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9ca3af]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🤝</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Referral Leaderboard
          </h2>
        </div>
        <RAFLeaderboard />
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🎁</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Reward Breakdown
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#008d5b]/30 bg-gradient-to-br from-[#008d5b]/10 to-[#1b1c1e] p-5">
            <div className="space-y-2">
              <span className="text-4xl">💵</span>
              <h3 className="text-lg font-bold text-[#f0f0f0]">
                ৳500 Per Referral
              </h3>
              <p className="text-xs text-[#9ca3af]">
                Earn ৳500 instantly for every friend who registers through your
                link and starts playing. No limit on the number of referrals.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#ffdf19]/30 bg-gradient-to-br from-[#ffdf19]/5 to-[#1b1c1e] p-5">
            <div className="space-y-2">
              <span className="text-4xl">🏆</span>
              <h3 className="text-lg font-bold text-[#f0f0f0]">
                Monthly Leaderboard Prizes
              </h3>
              <p className="text-xs text-[#9ca3af]">
                Top 10 referrers each month share a ৳3,00,000 prize pool. The
                more you refer, the higher you climb.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#2a2c30] bg-[#242628] text-[10px] uppercase tracking-wider text-[#6b7280]">
                <th className="px-4 py-3 font-semibold">Rank</th>
                <th className="px-4 py-3 font-semibold">Prize</th>
                <th className="px-4 py-3 font-semibold">Rank</th>
                <th className="px-4 py-3 font-semibold">Prize</th>
              </tr>
            </thead>
            <tbody>
              {PRIZES.slice(0, 5).map((p) => {
                const p2 = PRIZES[p.rank + 4];
                return (
                  <tr
                    key={p.rank}
                    className="border-b border-[#2a2c30]/60 bg-[#1b1c1e]"
                  >
                    <td className="px-4 py-3">
                      <span
                        className={`font-bold ${
                          p.rank <= 3
                            ? "text-[#ffdf19]"
                            : "text-[#9ca3af]"
                        }`}
                      >
                        #{p.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#ffdf19]">
                      {p.amount}
                    </td>
                    {p2 ? (
                      <>
                        <td className="px-4 py-3">
                          <span className="font-bold text-[#9ca3af]">
                            #{p2.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-[#ffdf19]">
                          {p2.amount}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-3" />
                        <td className="px-4 py-3" />
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-[#008d5b]/30 bg-gradient-to-br from-[#008d5b] via-[#006640] to-[#0d1f17] p-8 text-center">
        <div className="relative space-y-4">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Get Your Referral Link
          </h2>
          <p className="mx-auto max-w-md text-sm text-white/80">
            Start referring friends today and earn ৳500 per referral plus a
            share of the ৳3,00,000 monthly prize pool.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#008d5b] transition hover:bg-white/90"
            >
              Sign Up to Get Your Link
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
