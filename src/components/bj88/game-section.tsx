"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GameGrid } from "./game-card";
import type { BJ88Game } from "@/lib/bj88-catalog";

export function GameSection({
  title,
  icon,
  games,
  href,
  columns = 10,
  defaultOpen = true,
}: {
  title: string;
  icon: React.ReactNode;
  games: BJ88Game[];
  href?: string;
  columns?: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <section className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2"
        >
          <span className="text-lg">{icon}</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            {title}
          </h2>
          <ChevronRight
            className={cn("size-4 text-gray-500 transition-transform", open && "rotate-90")}
          />
        </button>
        {href && (
          <Link
            href={href}
            className="text-xs text-[#f0b429] hover:underline"
          >
            See All →
          </Link>
        )}
      </div>
      {open && <GameGrid games={games} columns={columns} />}
    </section>
  );
}
