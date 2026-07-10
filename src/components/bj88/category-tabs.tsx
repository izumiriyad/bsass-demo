"use client";

import Link from "next/link";
import { GAME_CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function CategoryTabs({ active }: { active?: string }) {
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-2">
      {GAME_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <Link
            key={cat.id}
            href={`/${cat.id}`}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
              isActive
                ? "text-black"
                : "border border-[#2a2a3e] bg-[#1e1e2d] text-[#c8c8d6] hover:text-white"
            )}
            style={
              isActive
                ? { background: `linear-gradient(135deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }
                : undefined
            }
          >
            <span className="text-sm">{cat.emoji}</span>
            <span>{cat.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
