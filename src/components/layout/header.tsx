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

  const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Bet History", href: "/dashboard?tab=bets" },
    { label: "Transactions", href: "/dashboard?tab=transactions" },
    { label: "Deposit", action: () => { openModal("deposit"); setMenuOpen(false); } },
    { label: "Withdraw", action: () => { openModal("withdraw"); setMenuOpen(false); } },
    { label: "Profile", href: "/dashboard?tab=profile" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-[72px] items-center bg-[#121315] px-4">
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0] lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <button
        onClick={toggle}
        aria-label="Toggle sidebar"
        className="hidden h-9 w-9 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0] lg:flex"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 3L5 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Link href="/" className="ml-2 flex items-center gap-1">
        <span className="text-xl font-bold text-[#008d5b]">BSL</span>
        <span className="text-xl font-bold text-[#ffdf19]">Gaming</span>
      </Link>

      <div className="ml-auto flex items-center gap-3">
        {!user ? (
          <>
            <button
              onClick={() => openModal("login")}
              className="rounded-lg border border-[#ffdf19] px-4 py-2 text-sm font-semibold text-[#ffdf19] transition hover:bg-[#ffdf19]/10"
            >
              Login
            </button>
            <button
              onClick={() => openModal("register")}
              className="btn-primary px-4 py-2 text-sm"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-3 py-2">
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

            <button aria-label="Notifications" className="relative flex h-9 w-9 items-center justify-center rounded-md text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0]">
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
            </button>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#008d5b] text-sm font-bold text-white"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-11 z-50 w-52 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] py-1 shadow-2xl">
                    <div className="border-b border-[#2a2c30] px-4 py-2.5">
                      <p className="text-sm font-semibold text-[#f0f0f0]">{user.username}</p>
                      <p className="truncate text-xs text-[#6b7280]">{user.email}</p>
                    </div>
                    {menuItems.map((item) =>
                      item.href ? (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className="block w-full px-4 py-2 text-left text-sm text-[#9ca3af] transition hover:bg-[#242628] hover:text-[#f0f0f0]"
                        >
                          {item.label}
                        </button>
                      )
                    )}
                    <div className="border-t border-[#2a2c30]">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-[#ef4444] transition hover:bg-[#242628]"
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
