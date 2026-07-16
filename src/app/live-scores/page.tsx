import type { Metadata } from "next";
import { CRICKET_LIVE_MATCHES, SPORTS_EVENTS } from "@/lib/catalog";

export const metadata: Metadata = { title: "Live Scores" };

export default function LiveScoresPage() {
  const liveCricket = CRICKET_LIVE_MATCHES.filter((m) => m.status === "live");
  const upcomingCricket = CRICKET_LIVE_MATCHES.filter(
    (m) => m.status !== "live"
  );

  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <section className="flex items-center justify-between gap-3 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded bg-[#ef4444]/15 px-3 py-1 text-xs font-bold text-[#ef4444]">
            <span className="h-2 w-2 animate-live rounded-full bg-[#ef4444]" />
            LIVE
          </span>
          <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
            Live Scores
          </h1>
        </div>
        <span className="text-xs text-[#6b7280]">
          Auto-refresh every 30s
        </span>
      </section>

      <p className="rounded-lg border border-[#008d5b]/20 bg-[#008d5b]/5 px-4 py-3 text-center text-xs text-[#22c55e]">
        ⚡ Scores update in real-time — no need to refresh the page
      </p>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🏏</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Live Cricket Matches
          </h2>
        </div>
        <div className="space-y-3">
          {liveCricket.map((m) => (
            <div
              key={m.id}
              className="overflow-hidden rounded-xl border border-[#ef4444]/30 bg-[#1b1c1e]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-2.5">
                <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                  {m.league}
                </p>
                <span className="flex shrink-0 items-center gap-1 rounded bg-[#ef4444]/15 px-2 py-0.5 text-[10px] font-bold text-[#ef4444]">
                  <span className="h-1.5 w-1.5 animate-live rounded-full bg-[#ef4444]" />
                  LIVE · {m.inning}
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#2a2c30]">
                <div className="p-4">
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {m.team1}
                  </p>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#22c55e]">
                    {m.score1}
                  </p>
                  <p className="text-xs text-[#9ca3af]">({m.overs1} overs)</p>
                </div>
                <div className="p-4 text-right">
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {m.team2}
                  </p>
                  <p className="mt-1 font-mono text-lg font-extrabold text-[#22c55e]">
                    {m.score2}
                  </p>
                  <p className="text-xs text-[#9ca3af]">({m.overs2} overs)</p>
                </div>
              </div>
            </div>
          ))}
          {upcomingCricket.map((m) => (
            <div
              key={m.id}
              className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-2.5">
                <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                  {m.league}
                </p>
                <span className="shrink-0 rounded bg-[#ffdf19]/10 px-2 py-0.5 text-[10px] font-bold text-[#ffdf19]">
                  UPCOMING · {m.startTime}
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#2a2c30]">
                <div className="p-4">
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {m.team1}
                  </p>
                  <p className="mt-1 text-xs text-[#6b7280]">Yet to bat</p>
                </div>
                <div className="p-4 text-right">
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {m.team2}
                  </p>
                  <p className="mt-1 text-xs text-[#6b7280]">Yet to bat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">⚽</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            All Sports Events
          </h2>
        </div>
        <div className="space-y-2">
          {SPORTS_EVENTS.map((e) => {
            const isLive = e.status === "live";
            return (
              <div
                key={e.id}
                className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#242628] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#9ca3af]">
                      {e.sport}
                    </span>
                    <p className="truncate text-[11px] font-semibold text-[#6b7280]">
                      {e.league}
                    </p>
                  </div>
                  {isLive ? (
                    <span className="flex shrink-0 items-center gap-1 rounded bg-[#ef4444]/15 px-2 py-0.5 text-[10px] font-bold text-[#ef4444]">
                      <span className="h-1.5 w-1.5 animate-live rounded-full bg-[#ef4444]" />
                      LIVE {e.minute}
                    </span>
                  ) : (
                    <span className="shrink-0 rounded bg-[#ffdf19]/10 px-2 py-0.5 text-[10px] font-bold text-[#ffdf19]">
                      UPCOMING
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {e.team1}
                    </p>
                    <p className="truncate text-[11px] text-[#9ca3af]">vs</p>
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {e.team2}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1.5">
                    {e.odds.map((odd, i) => (
                      <div
                        key={i}
                        className="flex min-w-[56px] flex-col items-center rounded-md border border-[#2a2c30] bg-[#242628] px-2.5 py-1.5"
                      >
                        <span className="text-[9px] uppercase text-[#6b7280]">
                          {i === 0 ? "1" : i === 1 ? "X" : "2"}
                        </span>
                        <span className="font-mono text-sm font-bold text-[#f0f0f0]">
                          {odd.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
