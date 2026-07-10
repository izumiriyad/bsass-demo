"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GAME_CATEGORIES } from "@/lib/catalog";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";

const BOTTOM_ITEMS = [
  { id: "promotions", label: "PROMOTIONS", emoji: "🎁", href: "/promotions" },
  { id: "vip", label: "VIP", emoji: "👑", href: "/vip" },
];

const SUBMENU_MAP: Record<string, { label: string; href: string }[]> = {
  sports: [
    { label: "Live Betting", href: "/sports?filter=live" },
    { label: "Football", href: "/sports?filter=football" },
    { label: "Cricket", href: "/sports?filter=cricket" },
    { label: "Kabaddi", href: "/sports?filter=kabaddi" },
    { label: "Esports", href: "/sports?filter=esports" },
  ],
  cricket: [
    { label: "BPL T20", href: "/cricket?filter=bpl" },
    { label: "IPL", href: "/cricket?filter=ipl" },
    { label: "ICC World Cup", href: "/cricket?filter=worldcup" },
    { label: "Asia Cup", href: "/cricket?filter=asiacup" },
  ],
  slots: [
    { label: "JILI", href: "/slots?provider=jili" },
    { label: "Pragmatic Play", href: "/slots?provider=pragmatic" },
    { label: "PG Soft", href: "/slots?provider=pgsoft" },
    { label: "JDB", href: "/slots?provider=jdb" },
  ],
  casino: [
    { label: "Live Casino", href: "/casino?filter=live" },
    { label: "Baccarat", href: "/casino?filter=baccarat" },
    { label: "Roulette", href: "/casino?filter=roulette" },
    { label: "Blackjack", href: "/casino?filter=blackjack" },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const { collapsed, toggle, mobileOpen, setMobileOpen } = useSidebar();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    if (collapsed) return;
    setExpanded(expanded === id ? null : id);
  };

  const isActive = (href: string) => {
    const base = href.split("?")[0];
    return pathname === base || pathname.startsWith(base + "/");
  };

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#1b1c1e]">
      <div className="flex h-[72px] items-center gap-2 border-b border-[#2a2c30] px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#008d5b]">BSL</span>
          {!collapsed && <span className="text-xl font-bold text-[#ffdf19]">Gaming</span>}
        </Link>
        <button
          onClick={toggle}
          aria-label="Toggle sidebar"
          className="ml-auto hidden h-7 w-7 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0] lg:flex"
        >
          {collapsed ? "›" : "‹"}
        </button>
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close sidebar"
          className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0] lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="no-scrollbar flex-1 overflow-y-auto py-2">
        {GAME_CATEGORIES.map((cat) => {
          const href = `/${cat.id}`;
          const active = isActive(href);
          const hasSubmenu = !!SUBMENU_MAP[cat.id];
          const isExpanded = expanded === cat.id;
          const showLiveDot = cat.id === "sports";

          return (
            <div key={cat.id}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition cursor-pointer",
                  collapsed && "justify-center px-0",
                  active
                    ? "bg-[#ffdf19]/[0.08] text-[#ffdf19]"
                    : "text-[#9ca3af] hover:bg-[#242628] hover:text-[#f0f0f0]"
                )}
                onClick={() => {
                  if (hasSubmenu && !collapsed) {
                    handleExpand(cat.id);
                  }
                }}
              >
                <Link href={href} className="flex items-center gap-3" onClick={(e) => {
                  if (hasSubmenu && !collapsed) e.preventDefault();
                }}>
                  <span className="text-lg" style={{ color: cat.color }}>{cat.emoji}</span>
                  {!collapsed && <span className="flex-1">{cat.label}</span>}
                  {!collapsed && showLiveDot && <span className="live-dot live-dot-pulse" />}
                </Link>
                {!collapsed && hasSubmenu && (
                  <span
                    className={cn("text-xs text-[#6b7280] transition-transform", isExpanded && "rotate-180")}
                  >
                    ▾
                  </span>
                )}
              </div>
              {!collapsed && hasSubmenu && isExpanded && (
                <div className="ml-11 border-l border-[#2a2c30] py-1">
                  {SUBMENU_MAP[cat.id].map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-1.5 text-xs text-[#6b7280] transition hover:text-[#f0f0f0]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-[#2a2c30] py-2">
        {BOTTOM_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition",
                collapsed && "justify-center px-0",
                active
                  ? "bg-[#ffdf19]/[0.08] text-[#ffdf19]"
                  : "text-[#9ca3af] hover:bg-[#242628] hover:text-[#f0f0f0]"
              )}
            >
              <span className="text-lg">{item.emoji}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full border-r border-[#2a2c30] transition-all duration-300",
          collapsed ? "w-[63px]" : "w-[260px]"
        )}
        style={{ display: mobileOpen ? "block" : undefined }}
      >
        <div className="hidden h-full lg:block">{sidebarContent}</div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[260px] animate-slide-in-left">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
