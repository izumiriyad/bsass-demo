"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { useModal } from "@/components/providers/modal-provider";
import { useSidebar } from "./sidebar-provider";
import { formatBDT, cn } from "@/lib/utils";

export function Header() {
  const { user, signOut, refreshUser } = useAuth();
  const { toggle, setMobileOpen } = useSidebar();
  const { openModal } = useModal();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [language, setLanguage] = useState<"EN" | "বাংলা">("EN");

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUser();
    setRefreshing(false);
  };

  const handleLogout = async () => {
    await signOut();
    setMenuOpen(false);
    toast.success("Logged out successfully");
    router.push("/");
  };

  const popularGames = [
    { label: "Cricket Star", href: "/games/cricket-star" },
    { label: "Aviator", href: "/games/aviator" },
    { label: "Andar Bahar", href: "/games/andar-bahar" },
    { label: "Teen Patti", href: "/games/teen-patti" },
    { label: "Lightning Roulette", href: "/games/lightning-roulette" },
  ];

  const quickLinks = [
    { label: "Promotions", href: "/promotions" },
    { label: "Live Casino", href: "/casino" },
    { label: "Sports Betting", href: "/sports" },
    { label: "Cricket", href: "/cricket" },
  ];

  const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Bet History", href: "/dashboard/history" },
    { label: "Transactions", href: "/dashboard/history" },
    { label: "Deposit", action: () => { openModal("deposit"); setMenuOpen(false); } },
    { label: "Withdraw", action: () => { openModal("withdraw"); setMenuOpen(false); } },
    { label: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <header className="glass fixed left-0 right-0 top-0 z-30 flex h-[72px] items-center border-b border-white/[0.06] px-3 sm:px-4">
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0] lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <button
        onClick={toggle}
        aria-label="Toggle sidebar"
        className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0] lg:flex"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 3L5 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Link href="/" className="ml-2 flex shrink-0 items-center gap-1.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#008d5b] to-[#006640] text-sm font-extrabold text-white">BSL</span>
        <div className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-tight text-[#f0f0f0]">BSL <span className="text-[#ffdf19]">Gaming</span></span>
          <span className="hidden text-[9px] font-medium text-[#6b7280] sm:block">BD's Premier Betting Platform</span>
        </div>
      </Link>
      <span className="ml-2 hidden items-center gap-1 rounded-full border border-[#ffdf19]/20 bg-[#ffdf19]/5 px-2 py-0.5 text-[9px] font-bold text-[#ffdf19] lg:flex">
        🏏 BPL 2025 Sponsor
      </span>

      <div className="relative ml-4 hidden max-w-md flex-1 items-center lg:flex">
        <svg
          className="pointer-events-none absolute left-3 text-[#6b7280]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 150)}
          placeholder="Search games, sports, promotions..."
          className="w-full rounded-lg border border-white/[0.06] bg-[#1b1c1e]/80 py-2 pl-9 pr-3 text-sm text-[#f0f0f0] placeholder:text-[#6b7280] transition focus:border-[#008d5b]/50 focus:outline-none"
        />
        {searchFocus && (
          <div className="absolute left-0 right-0 top-12 z-50 rounded-lg border border-white/[0.08] bg-[#1b1c1e] py-2 shadow-2xl">
            <div className="px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b7280]">Popular Games</p>
            </div>
            {popularGames.map((game) => (
              <Link
                key={game.label}
                href={game.href}
                onMouseDown={(e) => e.preventDefault()}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0]"
              >
                <span className="text-[#ffdf19]">▸</span>
                {game.label}
              </Link>
            ))}
            <div className="my-1 border-t border-white/[0.06]" />
            <div className="px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b7280]">Quick Links</p>
            </div>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseDown={(e) => e.preventDefault()}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0]"
              >
                <span className="text-[#008d5b]">▸</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setLanguage((l) => (l === "EN" ? "বাংলা" : "EN"))}
          aria-label="Toggle language"
          className="hidden h-9 shrink-0 items-center gap-1.5 rounded-md px-2 text-sm text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0] sm:flex"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>{language}</span>
        </button>

        {!user ? (
          <>
            <button
              onClick={() => openModal("login")}
              className="rounded-lg border border-[#ffdf19] px-2.5 py-1.5 text-xs font-semibold text-[#ffdf19] transition hover:bg-[#ffdf19]/10 sm:px-4 sm:text-sm"
            >
              <span className="hidden xs:inline">Login</span>
              <svg className="xs:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => openModal("register")}
              className="btn-primary px-2.5 py-1.5 text-xs sm:px-4 sm:text-sm"
            >
              <span className="hidden xs:inline">Sign Up</span>
              <svg className="xs:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-[#1b1c1e]/80 px-2.5 py-2 sm:gap-2 sm:px-3">
              <span className="text-sm font-bold text-[#ffdf19]">{formatBDT(user.balance)}</span>
              <button
                onClick={handleRefresh}
                aria-label="Refresh balance"
                className="text-[#9ca3af] transition hover:text-[#f0f0f0]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={cn(refreshing && "animate-spin")}
                >
                  <path
                    d="M12 7a5 5 0 1 1-1.46-3.54M12 1.5V4h-2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <button
              onClick={() => openModal("deposit")}
              className="flex shrink-0 items-center gap-1 rounded-lg bg-[#008d5b] px-2.5 py-2 text-sm font-semibold text-white transition hover:bg-[#00a86b] sm:px-3"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">Deposit</span>
            </button>

            <Link
              href="/dashboard/notifications"
              aria-label="Notifications"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2a4 4 0 0 0-4 4v3l-1.5 2.5h11L13 9V6a4 4 0 0 0-4-4zM7 14a2 2 0 0 0 4 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#ef4444]" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#008d5b] text-sm font-bold text-white"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-11 z-50 w-52 rounded-lg border border-white/[0.08] bg-[#1b1c1e] py-1 shadow-2xl">
                    <div className="border-b border-white/[0.06] px-4 py-2.5">
                      <p className="text-sm font-semibold text-[#f0f0f0]">{user.username}</p>
                      <p className="truncate text-xs text-[#6b7280]">{user.email}</p>
                    </div>
                    {menuItems.map((item) =>
                      item.href ? (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className="block w-full px-4 py-2 text-left text-sm text-[#9ca3af] transition hover:bg-white/5 hover:text-[#f0f0f0]"
                        >
                          {item.label}
                        </button>
                      )
                    )}
                    <div className="border-t border-white/[0.06]">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-[#ef4444] transition hover:bg-white/5"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
