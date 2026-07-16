"use client";

import { useEffect, useState } from "react";

export function JackpotBanner() {
  const [value, setValue] = useState(18_524_700);

  useEffect(() => {
    const t = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 420) + 80);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="animate-live relative overflow-hidden rounded-2xl border border-[#ffdf19]/30 bg-gradient-to-br from-[#2e1065] via-[#1e1b4b] to-[#0c4a6e] p-6 text-center sm:p-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,223,25,0.1), transparent 60%)",
        }}
      />
      <div className="relative space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">✨</span>
          <h3 className="text-lg font-extrabold tracking-widest text-[#ffdf19] sm:text-2xl">
            MEGA JACKPOT
          </h3>
          <span className="text-2xl">✨</span>
        </div>
        <p className="text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          <span className="text-[#ffdf19]">৳</span>
          {new Intl.NumberFormat("en-BD").format(value)}
        </p>
        <p className="text-sm font-semibold text-white/80 sm:text-base">
          Play Slots to Win
        </p>
      </div>
    </div>
  );
}
