"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GAME_CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function TopNavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[72px] z-30 border-b border-[#2a2c30] bg-[#1b1c1e]">
      <div className="no-scrollbar flex items-center gap-1 overflow-x-auto px-2 py-1.5">
        {GAME_CATEGORIES.map((cat) => {
          const href = `/${cat.id}`;
          const active = pathname === href || (pathname !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={cat.id}
              href={href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide transition",
                active
                  ? "bg-[#ffdf19]/15 text-[#ffdf19]"
                  : "text-[#9ca3af] hover:bg-[#242628] hover:text-[#f0f0f0]"
              )}
            >
              <span className="text-base" style={{ color: cat.color }}>{cat.emoji}</span>
              {cat.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
