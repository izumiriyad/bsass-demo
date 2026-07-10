"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, PanelLeftClose } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  emoji: string;
  href: string;
  circle: [string, string];
  sub?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    emoji: "🏠",
    href: "/",
    circle: ["#f5a623", "#e8920f"],
    sub: [
      { label: "All Games", href: "/games" },
      { label: "Promotions", href: "/promotions" },
    ],
  },
  {
    id: "popular",
    label: "POPULAR",
    emoji: "⭐",
    href: "/popular",
    circle: ["#f5a623", "#e8920f"],
    sub: [
      { label: "Hot Games", href: "/popular?filter=hot" },
      { label: "New Games", href: "/popular?filter=new" },
    ],
  },
  {
    id: "sports",
    label: "SPORTS",
    emoji: "⚽",
    href: "/sports",
    circle: ["#22c55e", "#15803d"],
    sub: [
      { label: "Football", href: "/sports?tab=football" },
      { label: "Kabaddi", href: "/sports?tab=kabaddi" },
      { label: "Esports", href: "/sports?tab=esports" },
    ],
  },
  {
    id: "cricket",
    label: "CRICKET",
    emoji: "🏏",
    href: "/cricket",
    circle: ["#3b82f6", "#1d4ed8"],
    sub: [
      { label: "BPL T20", href: "/cricket?league=bpl" },
      { label: "IPL", href: "/cricket?league=ipl" },
      { label: "ICC World Cup", href: "/cricket?league=icc" },
    ],
  },
  {
    id: "slots",
    label: "SLOTS",
    emoji: "🎰",
    href: "/slots",
    circle: ["#a855f7", "#7c3aed"],
    sub: [
      { label: "Pragmatic Play", href: "/slots?provider=pragmatic" },
      { label: "JILI", href: "/slots?provider=jili" },
      { label: "PG Soft", href: "/slots?provider=pgsoft" },
    ],
  },
  {
    id: "casino",
    label: "CASINO",
    emoji: "🃏",
    href: "/casino",
    circle: ["#ef4444", "#b91c1c"],
    sub: [
      { label: "Evolution", href: "/casino?provider=evolution" },
      { label: "AE Sexy", href: "/casino?provider=sexy" },
      { label: "Ezugi", href: "/casino?provider=ezugi" },
    ],
  },
  {
    id: "table",
    label: "TABLE",
    emoji: "🎲",
    href: "/table",
    circle: ["#06b6d4", "#0891b2"],
    sub: [
      { label: "Poker", href: "/table?type=poker" },
      { label: "Blackjack", href: "/table?type=blackjack" },
      { label: "Baccarat", href: "/table?type=baccarat" },
      { label: "Sic Bo", href: "/table?type=sicbo" },
    ],
  },
  {
    id: "fishing",
    label: "FISHING",
    emoji: "🎣",
    href: "/fishing",
    circle: ["#14b8a6", "#0d9488"],
    sub: [
      { label: "JILI", href: "/fishing?provider=jili" },
      { label: "Fa Chai", href: "/fishing?provider=fachai" },
      { label: "JDB", href: "/fishing?provider=jdb" },
    ],
  },
  {
    id: "lottery",
    label: "LOTTERY",
    emoji: "🎟️",
    href: "/lottery",
    circle: ["#f97316", "#ea580c"],
    sub: [
      { label: "Keno", href: "/lottery?type=keno" },
      { label: "Bingo", href: "/lottery?type=bingo" },
      { label: "Power Ball", href: "/lottery?type=power" },
    ],
  },
  {
    id: "arcade",
    label: "ARCADE",
    emoji: "🕹️",
    href: "/arcade",
    circle: ["#8b5cf6", "#6d28d9"],
    sub: [
      { label: "Spribe", href: "/arcade?provider=spribe" },
      { label: "Plinko", href: "/arcade?game=plinko" },
      { label: "Mines", href: "/arcade?game=mines" },
    ],
  },
  {
    id: "crash",
    label: "CRASH",
    emoji: "🚀",
    href: "/crash",
    circle: ["#ec4899", "#be185d"],
    sub: [
      { label: "Aviator", href: "/crash?game=aviator" },
      { label: "JetX", href: "/crash?game=jetx" },
      { label: "High Flyer", href: "/crash?game=high-flyer" },
    ],
  },
];

const BOTTOM_ITEMS: NavItem[] = [
  {
    id: "promotions",
    label: "Promotions",
    emoji: "🎁",
    href: "/promotions",
    circle: ["#f5a623", "#e8920f"],
  },
  {
    id: "vip",
    label: "VIP CLUB",
    emoji: "👑",
    href: "/vip",
    circle: ["#f5a623", "#d97706"],
  },
  {
    id: "leaderboard",
    label: "Leaderboard",
    emoji: "🏆",
    href: "/dashboard/leaderboard",
    circle: ["#f97316", "#ea580c"],
  },
  {
    id: "download",
    label: "Download",
    emoji: "📥",
    href: "/dashboard/download",
    circle: ["#3b82f6", "#1d4ed8"],
  },
  {
    id: "affiliate",
    label: "Affiliate",
    emoji: "🤝",
    href: "/dashboard/affiliate",
    circle: ["#22c55e", "#15803d"],
  },
  {
    id: "ambassador",
    label: "Ambassador",
    emoji: "⭐",
    href: "/dashboard/ambassador",
    circle: ["#f5a623", "#e8920f"],
  },
  {
    id: "referral",
    label: "Referral Program",
    emoji: "👥",
    href: "/dashboard/referral",
    circle: ["#8b5cf6", "#6d28d9"],
  },
  {
    id: "help",
    label: "Help Page",
    emoji: "❓",
    href: "/support",
    circle: ["#06b6d4", "#0891b2"],
  },
];

function isPathActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // Strip query string for active matching on category roots.
  const clean = href.split("?")[0];
  return pathname === clean || pathname.startsWith(clean + "/");
}

function CircleIcon({ emoji, gradient }: { emoji: string; gradient: [string, string] }) {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {emoji}
    </span>
  );
}

function NavRow({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const active = isPathActive(pathname, item.href);
  const [expanded, setExpanded] = useState(active);
  const hasSub = Boolean(item.sub?.length);

  return (
    <div>
      <div
        className={cn(
          "group flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors",
          active ? "text-[#f5a623]" : "text-[#c8c8d6] hover:text-white"
        )}
      >
        <CircleIcon emoji={item.emoji} gradient={item.circle} />
        <a href={item.href} className="flex-1 truncate leading-tight">
          {item.label}
        </a>
        {hasSub && (
          <button
            type="button"
            aria-label={expanded ? "Collapse" : "Expand"}
            onClick={() => setExpanded((e) => !e)}
            className="shrink-0 rounded p-0.5 text-[#8a8aa0] hover:text-white"
          >
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                expanded && "rotate-180"
              )}
            />
          </button>
        )}
      </div>

      {hasSub && expanded && (
        <div className="ml-8 mt-0.5 flex flex-col gap-0.5 border-l border-[#2a2a3e] pl-2.5 animate-fade-in">
          {item.sub!.map((sub) => {
            const subActive =
              pathname === sub.href.split("?")[0] && sub.href.includes("?");
            return (
              <a
                key={sub.href}
                href={sub.href}
                className={cn(
                  "truncate rounded px-2 py-1 text-[11.5px] leading-tight transition-colors",
                  subActive
                    ? "text-[#f5a623]"
                    : "text-[#8a8aa0] hover:text-white"
                )}
              >
                {sub.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Sidebar({ onToggle }: { onToggle: () => void }) {
  const pathname = usePathname() ?? "/";

  return (
    <aside
      className="fixed left-0 top-0 z-30 flex h-[100dvh] w-[165px] flex-col border-r border-[#2a2a3e]"
      style={{ background: "#1e1e2d" }}
    >
      {/* Top: SLOTS active pill + collapse button */}
      <div className="flex items-center gap-1 border-b border-[#2a2a3e] px-2 py-2.5">
        <span
          className="flex flex-1 items-center justify-center rounded-full px-3 py-1.5 text-xs font-bold tracking-wide text-black"
          style={{
            background: "linear-gradient(135deg, #f5a623, #e8920f)",
          }}
        >
          🎰 SLOTS
        </span>
        <button
          type="button"
          onClick={onToggle}
          aria-label="Collapse sidebar"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#8a8aa0] transition-colors hover:bg-[#2a2a3e] hover:text-white"
        >
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>

      {/* Primary nav */}
      <nav className="no-scrollbar flex-1 overflow-y-auto px-1.5 py-2">
        {NAV_ITEMS.map((item) => (
          <NavRow key={item.id} item={item} pathname={pathname} />
        ))}

        {/* Divider */}
        <div className="my-2 h-px bg-[#2a2a3e]" />

        {/* Bottom section */}
        {BOTTOM_ITEMS.map((item) => (
          <NavRow key={item.id} item={item} pathname={pathname} />
        ))}
      </nav>
    </aside>
  );
}
