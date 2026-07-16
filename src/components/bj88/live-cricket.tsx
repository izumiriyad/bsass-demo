"use client";

import Link from "next/link";
import { useState } from "react";
import { CRICKET_LIVE_MATCHES } from "@/lib/catalog";

export function LiveCricketWidget() {
  const [selected, setSelected] = useState<string>(CRICKET_LIVE_MATCHES[0].id);
  const matches = CRICKET_LIVE_MATCHES.slice(0, 4);

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
      <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🏏</span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">
            Live Cricket
          </h3>
          <span className="flex items-center gap-1 rounded bg-[#ef4444]/15 px-2 py-0.5 text-[10px] font-bold text-[#ef4444]">
            <span className="h-1.5 w-1.5 animate-live rounded-full bg-[#ef4444]" />
            LIVE
          </span>
        </div>
        <Link
          href="/cricket"
          className="text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          View All Cricket →
        </Link>
      </div>

      <div className="divide-y divide-[#2a2c30]/60">
        {matches.map((m) => {
          const isLive = m.status === "live";
          const isSelected = selected === m.id;
          return (
            <div
              key={m.id}
              className={`px-4 py-3 transition ${
                isSelected ? "bg-[#242628]/60" : "hover:bg-[#242628]/40"
              }`}
            >
              <button
                type="button"
                onClick={() => setSelected(m.id)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    {m.league}
                  </p>
                  {isLive ? (
                    <span className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-[#ef4444]">
                      <span className="h-1.5 w-1.5 animate-live rounded-full bg-[#ef4444]" />
                      LIVE
                    </span>
                  ) : (
                    <span className="shrink-0 text-[10px] font-bold text-[#ffdf19]">
                      UPCOMING
                    </span>
                  )}
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {m.team1}
                    </p>
                    {isLive ? (
                      <p className="font-mono text-xs font-semibold text-[#22c55e]">
                        {m.score1}{" "}
                        <span className="text-[#9ca3af]">({m.overs1} ov)</span>
                      </p>
                    ) : (
                      <p className="text-xs text-[#6b7280]">—</p>
                    )}
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="truncate text-sm font-bold text-[#f0f0f0]">
                      {m.team2}
                    </p>
                    {isLive ? (
                      <p className="font-mono text-xs font-semibold text-[#22c55e]">
                        {m.score2}{" "}
                        <span className="text-[#9ca3af]">({m.overs2} ov)</span>
                      </p>
                    ) : (
                      <p className="text-xs text-[#6b7280]">—</p>
                    )}
                  </div>
                </div>

                {!isLive && (
                  <p className="mt-1.5 text-[11px] text-[#9ca3af]">
                    🕒 {m.startTime}
                  </p>
                )}
              </button>

              {isLive && (
                <div className="mt-3 flex items-center justify-between gap-2">
                  <Link
                    href={`/cricket/${m.id}`}
                    className="flex items-center gap-1.5 rounded-lg border border-[#008d5b]/50 px-3 py-1.5 text-xs font-semibold text-[#22c55e] transition hover:bg-[#008d5b]/10"
                  >
                    📺 Watch Live
                  </Link>
                  <div className="flex gap-1.5">
                    <OddsBtn label="Back" value={m.odds.back1} side="back" />
                    <OddsBtn label="Lay" value={m.odds.lay1} side="lay" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OddsBtn({
  label,
  value,
  side,
}: {
  label: string;
  value: number;
  side: "back" | "lay";
}) {
  const isBack = side === "back";
  return (
    <button
      type="button"
      className={`flex min-w-[64px] flex-col items-center rounded-md px-2.5 py-1 text-center transition ${
        isBack
          ? "bg-[#1e3a5f] hover:bg-[#234878]"
          : "bg-[#831843] hover:bg-[#a01f54]"
      }`}
    >
      <span className="text-[9px] font-bold uppercase text-white/70">
        {label}
      </span>
      <span className="font-mono text-sm font-bold text-white">{value}</span>
    </button>
  );
}
