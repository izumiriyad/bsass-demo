"use client";

import { useEffect, useRef, useState } from "react";
import { POPULAR_GAMES } from "@/lib/catalog";

interface Win {
  user: string;
  amount: number;
  game: string;
}

const USERS = [
  "Rahim***", "Karim***", "Tanvir***", "Sadia***", "Nusrat***",
  "Imran***", "Fariha***", "Sabbir***", "Mehedi***", "Rifat***",
  "Arif***", "Sumaiya***", "Hasan***", "Naimur***", "Tania***",
];

function buildWins(): Win[] {
  return Array.from({ length: 16 }, (_, i) => {
    const g = POPULAR_GAMES[i % POPULAR_GAMES.length];
    return {
      user: USERS[i % USERS.length],
      amount: Math.floor(Math.random() * 48000) + 2000,
      game: g.title,
    };
  });
}

export function WinnersTicker() {
  const winsRef = useRef<Win[]>(buildWins());
  const wins = winsRef.current;
  const doubled = [...wins, ...wins];

  return (
    <div className="flex items-center gap-2 overflow-hidden border-b border-[#2a2a3e] bg-[#1e1e2d] px-2 py-1.5">
      <span className="flex shrink-0 items-center gap-1.5 rounded bg-green-600/15 px-2 py-1 text-[10px] font-bold text-green-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        LIVE WINS
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
          {doubled.map((w, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[11px]">
              <span className="font-semibold text-[#c8c8d6]">{w.user}</span>
              <span className="font-bold text-[#f5a623]">৳{w.amount.toLocaleString("en-BD")}</span>
              <span className="text-[#8a8aa0]">on {w.game}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function JackpotTicker() {
  const [value, setValue] = useState(18_400_000 + Math.floor(Math.random() * 200_000));

  useEffect(() => {
    const t = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 700) + 100);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const formatted = value.toLocaleString("en-BD");

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5a623]">
        💰 Mega Jackpot
      </span>
      <span className="text-2xl font-black tabular-nums text-white sm:text-3xl">
        ৳{formatted}
      </span>
    </div>
  );
}
