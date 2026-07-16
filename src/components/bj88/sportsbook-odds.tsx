import Link from "next/link";
import { SPORTSBOOK_PROVIDERS, SPORTS_EVENTS } from "@/lib/catalog";

export function SportsbookOdds() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">⚡</span>
          <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Multi-Provider Sportsbook
          </span>
        </div>
        <p className="pl-6 text-xs text-[#9ca3af]">
          Best odds from 5 platforms
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {SPORTSBOOK_PROVIDERS.map((p) => (
          <div
            key={p.id}
            className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-3 py-2.5 text-center transition hover:border-[#008d5b]/50"
          >
            <span className="text-2xl">{p.emoji}</span>
            <p className="text-xs font-bold text-[#f0f0f0]">{p.name}</p>
            <p className="text-[10px] text-[#22c55e]">{p.events}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {SPORTS_EVENTS.map((e) => {
          const isLive = e.status === "live";
          const [o1, ox, o2] = e.odds;
          return (
            <div
              key={e.id}
              className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-3 transition hover:border-[#383b3f] sm:p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                  {e.league}
                </p>
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

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {e.team1}
                  </p>
                  <p className="truncate text-[11px] text-[#9ca3af]">vs</p>
                  <p className="truncate text-sm font-bold text-[#f0f0f0]">
                    {e.team2}
                  </p>
                </div>
                <div className="flex gap-2">
                  <OddsBtn label="1" value={o1} />
                  <OddsBtn label="X" value={ox} />
                  <OddsBtn label="2" value={o2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function OddsBtn({ label, value }: { label: string; value: number }) {
  return (
    <Link
      href="/sports"
      className="flex min-w-[64px] flex-col items-center rounded-lg border border-[#2a2c30] bg-[#242628] px-3 py-1.5 text-center transition hover:border-[#008d5b]"
    >
      <span className="text-[9px] font-bold uppercase text-[#9ca3af]">
        {label}
      </span>
      <span className="font-mono text-sm font-bold text-[#f0f0f0]">
        {value.toFixed(2)}
      </span>
    </Link>
  );
}
