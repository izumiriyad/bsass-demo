"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string; icon?: string }[];
  badge?: string;
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    id: "popular",
    label: "POPULAR",
    href: "/popular",
    icon: <span className="text-lg">⭐</span>,
    children: [
      { label: "All Popular", href: "/popular" },
      { label: "Featured Games", href: "/popular/featured" },
      { label: "New Releases", href: "/popular/new" },
    ],
  },
  {
    id: "sports",
    label: "SPORTS",
    href: "/sports",
    icon: <span className="text-lg">⚽</span>,
    children: [
      { label: "Football", href: "/sports/football" },
      { label: "Cricket", href: "/sports/cricket" },
      { label: "Basketball", href: "/sports/basketball" },
      { label: "Tennis", href: "/sports/tennis" },
      { label: "Kabaddi", href: "/sports/kabaddi" },
    ],
  },
  {
    id: "cricket",
    label: "CRICKET",
    href: "/cricket",
    icon: <span className="text-lg">🏏</span>,
    children: [
      { label: "BPL", href: "/cricket/bpl" },
      { label: "IPL", href: "/cricket/ipl" },
      { label: "ICC Tournaments", href: "/cricket/icc" },
      { label: "Bangladesh National", href: "/cricket/national" },
    ],
  },
  {
    id: "slots",
    label: "SLOTS",
    href: "/slots",
    icon: <span className="text-lg">🎰</span>,
    children: [
      { label: "Pragmatic Play", href: "/slots/pragmatic" },
      { label: "JILI", href: "/slots/jili" },
      { label: "Habanero", href: "/slots/habanero" },
      { label: "PG Soft", href: "/slots/pg-soft" },
      { label: "Netent", href: "/slots/netent" },
    ],
  },
  {
    id: "casino",
    label: "CASINO",
    href: "/casino",
    icon: <span className="text-lg">🃏</span>,
    children: [
      { label: "Evolution Gaming", href: "/casino/evolution" },
      { label: "Ezugi", href: "/casino/ezugi" },
      { label: "AE Sexy", href: "/casino/sexy" },
      { label: "Baccarat", href: "/casino/baccarat" },
      { label: "Roulette", href: "/casino/roulette" },
      { label: "Blackjack", href: "/casino/blackjack" },
      { label: "Teen Patti", href: "/casino/teen-patti" },
      { label: "Andar Bahar", href: "/casino/andar-bahar" },
    ],
  },
  {
    id: "table",
    label: "TABLE",
    href: "/table",
    icon: <span className="text-lg">🎲</span>,
    children: [
      { label: "Poker", href: "/table/poker" },
      { label: "Blackjack", href: "/table/blackjack" },
      { label: "Baccarat", href: "/table/baccarat" },
    ],
  },
  {
    id: "fishing",
    label: "FISHING",
    href: "/fishing",
    icon: <span className="text-lg">🎣</span>,
    children: [
      { label: "All Fishing", href: "/fishing" },
      { label: "JILI Fishing", href: "/fishing/jili" },
      { label: "Fa Chai Fishing", href: "/fishing/fa-chai" },
    ],
  },
  {
    id: "lottery",
    label: "LOTTERY",
    href: "/lottery",
    icon: <span className="text-lg">🎟️</span>,
    children: [
      { label: "Keno", href: "/lottery/keno" },
      { label: "Lotto", href: "/lottery/lotto" },
      { label: "Scratch Cards", href: "/lottery/scratch" },
    ],
  },
  {
    id: "arcade",
    label: "ARCADE",
    href: "/arcade",
    icon: <span className="text-lg">🕹️</span>,
    children: [
      { label: "All Arcade", href: "/arcade" },
      { label: "JILI Arcade", href: "/arcade/jili" },
    ],
  },
  {
    id: "crash",
    label: "CRASH",
    href: "/crash",
    icon: <span className="text-lg">🚀</span>,
    children: [
      { label: "Aviator", href: "/crash/aviator" },
      { label: "JetX", href: "/crash/jetx" },
      { label: "High Flyer", href: "/crash/high-flyer" },
    ],
  },
];

const BOTTOM_NAV = [
  { id: "promotions", label: "Promotions", href: "/promotions", icon: "🎁" },
  { id: "vip", label: "VIP CLUB", href: "/vip", icon: "👑" },
  { id: "leaderboard", label: "Leaderboard", href: "/leaderboard", icon: "🏆" },
  { id: "download", label: "Download", href: "/download", icon: "📥" },
  { id: "affiliate", label: "Affiliate", href: "/affiliate", icon: "🤝" },
  { id: "ambassador", label: "Ambassador", href: "/ambassador", icon: "⭐" },
  { id: "referral", label: "Referral Program", href: "/referral", icon: "👥" },
  { id: "help", label: "Help Page", href: "/help", icon: "❓" },
];

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({ slots: true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen flex flex-col transition-all duration-300",
        collapsed ? "w-0 overflow-hidden" : "w-[165px]"
      )}
      style={{ backgroundColor: "#0a0a14", borderRight: "1px solid #1a1a2e" }}
    >
      {/* Logo area */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-[#1a1a2e]">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-black text-[#f0b429]">bj</span>
          <span className="text-2xl font-black text-white">88</span>
        </Link>
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle sidebar"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Active category highlight */}
      <div className="px-2 py-1.5 border-b border-[#1a1a2e]">
        <div
          className="flex items-center gap-2 rounded px-2 py-1.5 text-xs font-bold"
          style={{ backgroundColor: "#f0b429", color: "#000" }}
        >
          <span>🎰</span>
          <span>SLOTS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto no-scrollbar py-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          const open = openItems[item.id];

          return (
            <div key={item.id}>
              <button
                onClick={() => item.children ? toggleItem(item.id) : undefined}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-[#1a1a2e]",
                  active ? "text-[#f0b429]" : "text-gray-300"
                )}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.children && (
                  open
                    ? <ChevronDown className="size-3.5 text-gray-500" />
                    : <ChevronRight className="size-3.5 text-gray-500" />
                )}
              </button>
              {item.children && open && (
                <div className="bg-[#060610] border-y border-[#1a1a2e]">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "flex items-center gap-2 pl-9 pr-3 py-2 text-[11px] transition-colors hover:text-[#f0b429] hover:bg-[#1a1a2e]",
                        pathname === child.href ? "text-[#f0b429]" : "text-gray-400"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="my-2 border-t border-[#1a1a2e]" />

        {BOTTOM_NAV.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-[#1a1a2e]",
              isActive(item.href) ? "text-[#f0b429]" : "text-gray-300"
            )}
          >
            <span className="shrink-0 text-base">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function CollapsedSidebar({ onToggle }: { onToggle: () => void }) {
  return (
    <aside
      className="fixed left-0 top-0 z-40 h-screen w-[50px] flex flex-col items-center py-3 gap-2"
      style={{ backgroundColor: "#0a0a14", borderRight: "1px solid #1a1a2e" }}
    >
      <button onClick={onToggle} className="text-[#f0b429] hover:text-white">
        <ChevronRight className="size-5" />
      </button>
    </aside>
  );
}
