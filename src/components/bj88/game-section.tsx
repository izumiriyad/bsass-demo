"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GameGrid } from "./game-card";
import type { BJ88Game } from "@/lib/bj88-catalog";

export function SectionHeading({
  title,
  icon,
  href,
}: {
  title: string;
  icon?: string;
  href?: string;
}) {
  return (
    <div className="mb-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Gold left bar */}
        <span
          className="inline-block h-5 w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
        />
        {icon && <span className="text-base">{icon}</span>}
        <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="text-xs font-medium text-[#f5a623] hover:underline">
          See All →
        </Link>
      )}
    </div>
  );
}

export function GameSection({
  title,
  icon,
  games,
  href,
  columns = 10,
  defaultOpen = true,
}: {
  title: string;
  icon?: string;
  games: BJ88Game[];
  href?: string;
  columns?: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <section className="mb-5">
      <div className="mb-2.5 flex items-center justify-between">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2"
        >
          <span
            className="inline-block h-5 w-[3px] rounded-full"
            style={{ background: "linear-gradient(to bottom,#f5a623,#e8920f)" }}
          />
          {icon && <span className="text-base">{icon}</span>}
          <h2 className="text-[15px] font-bold uppercase tracking-wide text-white">{title}</h2>
          <ChevronDown
            className={cn("size-4 text-[#555577] transition-transform", open && "rotate-180")}
          />
        </button>
        {href && (
          <Link href={href} className="text-xs font-medium text-[#f5a623] hover:underline">
            See All →
          </Link>
        )}
      </div>
      {open && <GameGrid games={games} columns={columns} />}
    </section>
  );
}
