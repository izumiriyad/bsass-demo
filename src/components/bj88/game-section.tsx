"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BJ88Game } from "@/lib/catalog";
import { GameGrid } from "./game-card";

export function GameSection({
  title,
  icon,
  games,
  href,
  columns = 8,
  defaultOpen = true,
}: {
  title: string;
  icon: string;
  games: BJ88Game[];
  href: string;
  columns?: 5 | 7 | 8 | 10;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="mt-4">
      <div className="flex items-center gap-2.5 py-2">
        <span
          className="h-5 w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
        />
        <span className="text-base">{icon}</span>
        <h2 className="flex-1 text-sm font-bold uppercase tracking-wide text-white">
          {title}
        </h2>
        <button
          type="button"
          aria-label={open ? "Collapse" : "Expand"}
          onClick={() => setOpen((o) => !o)}
          className="rounded p-1 text-[#8a8aa0] transition-colors hover:text-white"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              open ? "rotate-180" : ""
            )}
          />
        </button>
        <Link
          href={href}
          className="text-xs font-semibold text-[#f5a623] transition-opacity hover:opacity-80"
        >
          See All →
        </Link>
      </div>

      {open && (
        <div className="animate-fade-in py-1">
          <GameGrid games={games} columns={columns} />
        </div>
      )}
    </section>
  );
}
