import type { Metadata } from "next";
import { CRICKET_LIVE_MATCHES } from "@/lib/catalog";
import { BettingExchangeWidget } from "@/components/bj88/betting-exchange-widget";

export const metadata: Metadata = { title: "Betting Exchange" };

const BENEFITS = [
  { emoji: "📈", title: "Better Odds", desc: "Exchange odds are typically 20% better than traditional sportsbook odds." },
  { emoji: "🎛️", title: "More Control", desc: "Set your own odds and choose whether to back or lay any outcome." },
  { emoji: "🔄", title: "Trade Positions", desc: "Back and lay the same selection to lock in profit regardless of the result." },
  { emoji: "💰", title: "Cash Out Anytime", desc: "Close your position and secure your winnings before the match ends." },
];

const BET_TYPES = [
  { name: "Match Winner", desc: "Bet on which team will win the match. Available as both back and lay." },
  { name: "Total Runs", desc: "Bet on whether the total runs scored will be over or under a specified number." },
  { name: "Next Wicket", desc: "Bet on which team will take the next wicket or how many runs before the next wicket falls." },
  { name: "Fancy Bet", desc: "Bet on specific events within a match — boundaries in an over, runs in a session, and more." },
  { name: "Premium Cricket", desc: "Exclusive high-limit cricket markets with enhanced odds for premium members." },
];

export default function BettingExchangePage() {
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
            Betting Exchange
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Cricket Betting Exchange
          </h1>
          <p className="text-lg font-semibold text-white/90 sm:text-xl">
            Back &amp; Lay — Bet directly against other players
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">📖</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            What is Back &amp; Lay?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#1e3a5f] bg-gradient-to-br from-[#1e3a5f] to-[#0c4a6e] p-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  Back
                </span>
                <span className="text-3xl">🔵</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Bet FOR an Outcome
              </h3>
              <p className="text-xs leading-relaxed text-white/80">
                When you back a selection, you are betting that it will win.
                For example, backing Team A means you win if Team A wins the
                match. You get odds set by other players.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#831843] bg-gradient-to-br from-[#831843] to-[#4a0019] p-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  Lay
                </span>
                <span className="text-3xl">🔴</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Bet AGAINST an Outcome
              </h3>
              <p className="text-xs leading-relaxed text-white/80">
                When you lay a selection, you are betting that it will NOT win.
                For example, laying Team A means you win if Team A loses or the
                match is drawn. You act as the bookmaker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🏏</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Live Matches
          </h2>
        </div>
        <div className="space-y-3">
          {CRICKET_LIVE_MATCHES.map((m) => {
            const isLive = m.status === "live";
            return (
              <div
                key={m.id}
                className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-2.5">
                  <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    {m.league}
                  </p>
                  {isLive ? (
                    <span className="flex shrink-0 items-center gap-1 rounded bg-[#ef4444]/15 px-2 py-0.5 text-[10px] font-bold text-[#ef4444]">
                      <span className="h-1.5 w-1.5 animate-live rounded-full bg-[#ef4444]" />
                      LIVE
                    </span>
                  ) : (
                    <span className="shrink-0 rounded bg-[#ffdf19]/10 px-2 py-0.5 text-[10px] font-bold text-[#ffdf19]">
                      UPCOMING · {m.startTime}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 divide-x divide-[#2a2c30]">
                  <div className="p-4">
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {m.team1}
                    </p>
                    {isLive && (
                      <p className="font-mono text-xs font-semibold text-[#22c55e]">
                        {m.score1}{" "}
                        <span className="text-[#9ca3af]">({m.overs1} ov)</span>
                      </p>
                    )}
                    <div className="mt-2 flex gap-1.5">
                      <div className="flex min-w-[64px] flex-col items-center rounded-md bg-[#1e3a5f] px-2.5 py-1">
                        <span className="text-[9px] font-bold uppercase text-white/70">
                          Back
                        </span>
                        <span className="font-mono text-sm font-bold text-white">
                          {m.odds.back1}
                        </span>
                      </div>
                      <div className="flex min-w-[64px] flex-col items-center rounded-md bg-[#831843] px-2.5 py-1">
                        <span className="text-[9px] font-bold uppercase text-white/70">
                          Lay
                        </span>
                        <span className="font-mono text-sm font-bold text-white">
                          {m.odds.lay1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-right">
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {m.team2}
                    </p>
                    {isLive && (
                      <p className="font-mono text-xs font-semibold text-[#22c55e]">
                        {m.score2}{" "}
                        <span className="text-[#9ca3af]">({m.overs2} ov)</span>
                      </p>
                    )}
                    <div className="mt-2 flex justify-end gap-1.5">
                      <div className="flex min-w-[64px] flex-col items-center rounded-md bg-[#1e3a5f] px-2.5 py-1">
                        <span className="text-[9px] font-bold uppercase text-white/70">
                          Back
                        </span>
                        <span className="font-mono text-sm font-bold text-white">
                          {m.odds.back2}
                        </span>
                      </div>
                      <div className="flex min-w-[64px] flex-col items-center rounded-md bg-[#831843] px-2.5 py-1">
                        <span className="text-[9px] font-bold uppercase text-white/70">
                          Lay
                        </span>
                        <span className="font-mono text-sm font-bold text-white">
                          {m.odds.lay2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <BettingExchangeWidget />

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">💡</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Why Betting Exchange?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:border-[#383b3f]"
            >
              <span className="text-3xl">{b.emoji}</span>
              <h3 className="mt-2 text-sm font-bold text-[#f0f0f0]">
                {b.title}
              </h3>
              <p className="mt-1 text-xs text-[#9ca3af]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">📋</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Bet Types
          </h2>
        </div>
        <div className="space-y-2">
          {BET_TYPES.map((bt) => (
            <div
              key={bt.name}
              className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold text-[#f0f0f0]">{bt.name}</h3>
                <span className="shrink-0 rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                  AVAILABLE
                </span>
              </div>
              <p className="mt-1.5 text-xs text-[#9ca3af]">{bt.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
