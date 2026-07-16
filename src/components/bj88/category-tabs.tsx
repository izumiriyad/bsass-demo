"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { GAME_CATEGORIES } from "@/lib/catalog";

interface CategoryTabsProps {
  active?: string;
}

const CATEGORY_COUNTS: Record<string, number> = {
  popular: 24,
  sports: 8,
  cricket: 6,
  cockfighting: 6,
  slots: 20,
  casino: 16,
  table: 6,
  fishing: 8,
  lottery: 4,
  arcade: 8,
  crash: 7,
};

export function CategoryTabs({ active }: CategoryTabsProps) {
  return (
    <div className="scroll-x no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {GAME_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        const count = CATEGORY_COUNTS[cat.id];
        return (
          <Link
            key={cat.id}
            href={`/${cat.id}`}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition",
              isActive
                ? "animate-tab border-transparent bg-primary-gradient text-white"
                : "border-[#2a2c30] bg-[#1b1c1e] text-[#9ca3af] hover:border-[#383b3f] hover:text-[#f0f0f0]"
            )}
          >
            <span className="text-sm">{cat.emoji}</span>
            <span>{cat.label}</span>
            {typeof count === "number" && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[9px] font-bold leading-none",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#2a2c30] text-[#9ca3af]"
                )}
              >
                {count}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
