"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GAME_CATEGORIES } from "@/lib/bj88-catalog";

export function CategoryTabs({ active }: { active?: string }) {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
      {GAME_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <Link
            key={cat.id}
            href={`/${cat.id}`}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all",
              isActive
                ? "text-black"
                : "border border-[#2a2a3e] bg-[#1e1e2d] text-[#b0b0c8] hover:border-[#f5a623]/40 hover:text-white"
            )}
            style={
              isActive
                ? { background: `linear-gradient(135deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }
                : undefined
            }
          >
            <span className="text-sm">{cat.emoji}</span>
            <span className="tracking-wide">{cat.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
