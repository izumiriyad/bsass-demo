"use client";

import { Bell, Menu } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { cn, formatBDT } from "@/lib/utils";

export function BJ88Header({
  sidebarCollapsed,
  onToggleSidebar,
}: {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}) {
  const { user } = useAuth();
  const leftOffset = sidebarCollapsed ? "50px" : "165px";

  return (
    <header
      className={cn(
        "fixed top-0 z-40 flex h-[52px] items-center gap-2 border-b border-[#2a2a3e] px-3 transition-[left] duration-200",
        "right-0"
      )}
      style={{
        left: leftOffset,
        background: "#0d0d18",
      }}
    >
      {/* Left: menu toggle */}
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        className="flex h-8 w-8 items-center justify-center rounded-md text-[#c8c8d6] transition-colors hover:bg-[#2a2a3e] hover:text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Center: logo + BD badge */}
      <div className="flex flex-1 items-center justify-center gap-2">
        <a href="/" className="select-none">
          <span className="text-xl font-black italic text-[#f5a623]">bj</span>
          <span className="text-xl font-black italic text-white">88</span>
        </a>
        <span className="flex items-center gap-1 rounded-full border border-[#2a2a3e] bg-[#1e1e2d] px-1.5 py-0.5 text-[10px] font-semibold text-[#c8c8d6]">
          🇧🇩 BD
        </span>
      </div>

      {/* Right: auth state */}
      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="flex items-center rounded-full border border-[#2a2a3e] bg-[#1e1e2d] px-2.5 py-1 text-xs font-semibold text-[#f5a623]">
              {formatBDT(user.balance)}
            </span>
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-8 w-8 items-center justify-center rounded-full text-[#c8c8d6] transition-colors hover:bg-[#2a2a3e] hover:text-white"
            >
              <Bell className="h-4.5 w-4.5" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
            </button>
            <a
              href="/dashboard"
              className="max-w-[120px] truncate rounded-full bg-[#1e1e2d] px-2.5 py-1 text-xs font-semibold text-white hover:bg-[#2a2a3e]"
            >
              {user.username}
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="rounded-full border border-[#f5a623] px-3.5 py-1 text-xs font-bold text-[#f5a623] transition-colors hover:bg-[#f5a623]/10"
            >
              Login
            </a>
            <a
              href="/register"
              className="rounded-full px-3.5 py-1 text-xs font-bold text-black transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f5a623, #e8920f)",
              }}
            >
              Sign up
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
