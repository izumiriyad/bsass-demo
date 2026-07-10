"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { GAME_CATEGORIES } from "@/lib/catalog";

interface CategoryTabsProps {
  active?: string;
}

export function CategoryTabs({ active }: CategoryTabsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {GAME_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <Link
            key={cat.id}
            href={`/${cat.id}`}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition",
              isActive
                ? "border-transparent bg-primary-gradient text-white"
                : "border-[#2a2c30] bg-[#1b1c1e] text-[#9ca3af] hover:border-[#383b3f] hover:text-[#f0f0f0]"
            )}
          >
            <span className="text-sm">{cat.emoji}</span>
            <span>{cat.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
