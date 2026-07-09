"use client";

import * as React from "react";
import { JACKPOT_BASE } from "@/lib/catalog";

/** An ever-incrementing live jackpot counter (purely cosmetic). */
export function JackpotTicker({ className }: { className?: string }) {
  const [value, setValue] = React.useState(JACKPOT_BASE);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 139) + 11);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} aria-live="polite">
      {value.toLocaleString("en-US")}
    </span>
  );
}
