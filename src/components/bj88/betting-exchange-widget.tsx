"use client";

import Link from "next/link";
import { useState } from "react";
import { CRICKET_LIVE_MATCHES } from "@/lib/catalog";

export function BettingExchangeWidget() {
  const [showTip, setShowTip] = useState(false);
  const liveMatches = CRICKET_LIVE_MATCHES.filter(
    (m) => m.status === "live"
  ).slice(0, 2);

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
      <div className="flex items-center justify-between gap-2 border-b border-[#2a2c30] bg-[#242628] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🔄</span>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">
              Betting Exchange
            </h3>
            <p className="text-[10px] text-[#9ca3af]">Back &amp; Lay</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowTip((s) => !s)}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2a2c30] text-xs font-bold text-[#9ca3af] transition hover:border-[#ffdf19]/50 hover:text-[#ffdf19]"
          aria-label="Info"
        >
          ?
        </button>
      </div>

      {showTip && (
        <div className="border-b border-[#2a2c30] bg-[#242628]/60 px-4 py-2.5">
          <p className="text-xs text-[#9ca3af]">
            <span className="font-semibold text-[#3b82f6]">Back</span> = bet FOR
            outcome,{" "}
            <span className="font-semibold text-[#ec4899]">Lay</span> = bet
            AGAINST outcome
          </p>
        </div>
      )}

      <div className="divide-y divide-[#2a2c30]/60">
        {liveMatches.map((m) => (
          <div key={m.id} className="px-4 py-3">
            <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
              {m.league}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <ExchangeTeam
                name={m.team1}
                score={m.score1}
                overs={m.overs1}
                back={m.odds.back1}
                lay={m.odds.lay1}
              />
              <ExchangeTeam
                name={m.team2}
                score={m.score2}
                overs={m.overs2}
                back={m.odds.back2}
                lay={m.odds.lay2}
                align="right"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#2a2c30] px-4 py-3 text-center">
        <Link
          href="/betting-exchange"
          className="text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          Explore Exchange →
        </Link>
      </div>
    </div>
  );
}

function ExchangeTeam({
  name,
  score,
  overs,
  back,
  lay,
  align = "left",
}: {
  name: string;
  score: string;
  overs: string;
  back: number;
  lay: number;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p className="truncate text-sm font-bold text-[#f0f0f0]">{name}</p>
      <p className="font-mono text-xs font-semibold text-[#22c55e]">
        {score} <span className="text-[#9ca3af]">({overs} ov)</span>
      </p>
      <div
        className={`mt-2 flex gap-1.5 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <button
          type="button"
          className="flex min-w-[64px] flex-col items-center rounded-md px-2.5 py-1 transition hover:bg-[#234878]"
          style={{ backgroundColor: "#1e3a5f" }}
        >
          <span className="text-[9px] font-bold uppercase text-white/70">
            Back
          </span>
          <span className="font-mono text-sm font-bold text-white">{back}</span>
        </button>
        <button
          type="button"
          className="flex min-w-[64px] flex-col items-center rounded-md px-2.5 py-1 transition hover:bg-[#a01f54]"
          style={{ backgroundColor: "#831843" }}
        >
          <span className="text-[9px] font-bold uppercase text-white/70">
            Lay
          </span>
          <span className="font-mono text-sm font-bold text-white">{lay}</span>
        </button>
      </div>
    </div>
  );
}
