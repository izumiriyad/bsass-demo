"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---- icon helpers ---- */
function Icon({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <span
      className="flex size-[22px] shrink-0 items-center justify-center rounded-full text-xs"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/", icon: <Icon bg="#2a2a4a">🏠</Icon> },
  {
    id: "popular",
    label: "POPULAR",
    href: "/popular",
    icon: <Icon bg="#3a2a0a">⭐</Icon>,
    children: [{ label: "All Popular", href: "/popular" }, { label: "New Games", href: "/popular/new" }],
  },
  {
    id: "sports",
    label: "SPORTS",
    href: "/sports",
    icon: <Icon bg="#0a2a1a">⚽</Icon>,
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
    icon: <Icon bg="#0a1a3a">🏏</Icon>,
    children: [
      { label: "BPL T20", href: "/cricket/bpl" },
      { label: "IPL", href: "/cricket/ipl" },
      { label: "ICC Tournaments", href: "/cricket/icc" },
    ],
  },
  {
    id: "slots",
    label: "SLOTS",
    href: "/slots",
    icon: <Icon bg="#2a1a3a">🎰</Icon>,
    children: [
      { label: "Pragmatic Play", href: "/slots/pragmatic" },
      { label: "JILI", href: "/slots/jili" },
      { label: "PG Soft", href: "/slots/pg-soft" },
      { label: "Habanero", href: "/slots/habanero" },
    ],
  },
  {
    id: "casino",
    label: "CASINO",
    href: "/casino",
    icon: <Icon bg="#2a0a0a">🃏</Icon>,
    children: [
      { label: "Evolution", href: "/casino/evolution" },
      { label: "AE Sexy", href: "/casino/sexy" },
      { label: "Baccarat", href: "/casino/baccarat" },
      { label: "Roulette", href: "/casino/roulette" },
      { label: "Teen Patti", href: "/casino/teen-patti" },
      { label: "Andar Bahar", href: "/casino/andar-bahar" },
    ],
  },
  {
    id: "table",
    label: "TABLE",
    href: "/table",
    icon: <Icon bg="#0a1a2a">🎲</Icon>,
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
    icon: <Icon bg="#0a2a2a">🎣</Icon>,
    children: [
      { label: "All Fishing", href: "/fishing" },
      { label: "JILI Fishing", href: "/fishing/jili" },
    ],
  },
  {
    id: "lottery",
    label: "LOTTERY",
    href: "/lottery",
    icon: <Icon bg="#2a1a0a">🎟️</Icon>,
    children: [
      { label: "Keno", href: "/lottery/keno" },
      { label: "Lotto", href: "/lottery/lotto" },
    ],
  },
  {
    id: "arcade",
    label: "ARCADE",
    href: "/arcade",
    icon: <Icon bg="#1a0a2a">🕹️</Icon>,
    children: [
      { label: "All Arcade", href: "/arcade" },
      { label: "Plinko", href: "/arcade/plinko" },
      { label: "Mines", href: "/arcade/mines" },
    ],
  },
  {
    id: "crash",
    label: "CRASH",
    href: "/crash",
    icon: <Icon bg="#2a0a1a">🚀</Icon>,
    children: [
      { label: "Aviator", href: "/crash/aviator" },
      { label: "JetX", href: "/crash/jetx" },
      { label: "High Flyer", href: "/crash/high-flyer" },
    ],
  },
];

const EXTRA_NAV = [
  { id: "promotions", label: "Promotions", href: "/promotions", emoji: "🎁" },
  { id: "vip", label: "VIP CLUB", href: "/vip", emoji: "👑" },
  { id: "leaderboard", label: "Leaderboard", href: "/leaderboard", emoji: "🏆" },
  { id: "download", label: "Download", href: "/download", emoji: "📥" },
  { id: "affiliate", label: "Affiliate", href: "/affiliate", emoji: "🤝" },
  { id: "ambassador", label: "Ambassador", href: "/ambassador", emoji: "⭐" },
  { id: "referral", label: "Referral Program", href: "/referral", emoji: "👥" },
  { id: "help", label: "Help Page", href: "/support", emoji: "❓" },
];

export function Sidebar({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <aside
      className="fixed left-0 top-0 z-40 flex h-screen w-[165px] flex-col"
      style={{ backgroundColor: "#1e1e2d", borderRight: "1px solid #2a2a3e" }}
    >
      {/* Active category pill */}
      <div className="flex items-center gap-2 px-3 py-3">
        <div
          className="flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-xs font-bold"
          style={{ background: "linear-gradient(90deg,#f5a623,#e8920f)", color: "#000" }}
        >
          <span>🎰</span>
          <span>SLOTS</span>
        </div>
        <button
          onClick={onToggle}
          className="ml-1 flex size-7 items-center justify-center rounded text-white/50 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll area */}
      <nav className="flex-1 overflow-y-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          const expanded = open[item.id];
          return (
            <div key={item.id}>
              <button
                onClick={() => (item.children ? toggle(item.id) : undefined)}
                className={cn(
                  "group flex w-full items-center gap-2.5 px-3 py-[9px] text-[12px] font-semibold transition-colors",
                  active ? "text-[#f5a623]" : "text-[#b0b0c8] hover:text-white"
                )}
              >
                {item.icon}
                <span className="flex-1 text-left tracking-wide">{item.label}</span>
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "size-3.5 shrink-0 text-[#555577] transition-transform",
                      expanded && "rotate-180"
                    )}
                  />
                )}
              </button>
              {item.children && expanded && (
                <div style={{ background: "#15151f" }}>
                  {item.children.map((ch) => (
                    <Link
                      key={ch.href}
                      href={ch.href}
                      className={cn(
                        "flex items-center pl-10 pr-3 py-2 text-[11px] transition-colors",
                        pathname === ch.href
                          ? "text-[#f5a623]"
                          : "text-[#7777a0] hover:text-[#f5a623]"
                      )}
                    >
                      {ch.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="my-1.5 mx-3 border-t border-[#2a2a3e]" />

        {EXTRA_NAV.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "flex items-center gap-2.5 px-3 py-[9px] text-[12px] font-semibold transition-colors",
              isActive(item.href) ? "text-[#f5a623]" : "text-[#b0b0c8] hover:text-white"
            )}
          >
            <span className="flex size-[22px] items-center justify-center text-sm">{item.emoji}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
