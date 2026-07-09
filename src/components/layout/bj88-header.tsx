"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, ChevronLeft, Menu, Search, User, Wallet } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/bj88-catalog";

export function BJ88Header({
  sidebarCollapsed,
  onToggleSidebar,
}: {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}) {
  const { user, signOut } = useAuth();

  return (
    <header
      className="fixed top-0 right-0 z-30 flex items-center h-[52px] px-4 gap-4"
      style={{
        left: sidebarCollapsed ? "50px" : "165px",
        backgroundColor: "#111120",
        borderBottom: "1px solid #1a1a2e",
        transition: "left 0.3s",
      }}
    >
      {/* Toggle button */}
      <button
        onClick={onToggleSidebar}
        className="text-gray-400 hover:text-white transition-colors shrink-0"
        aria-label="Toggle sidebar"
      >
        {sidebarCollapsed ? (
          <Menu className="size-5" />
        ) : (
          <ChevronLeft className="size-5" />
        )}
      </button>

      {/* Center Logo */}
      <div className="flex-1 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-3xl font-black" style={{ color: "#f0b429", letterSpacing: "-1px" }}>bj</span>
          <span className="text-3xl font-black text-white" style={{ letterSpacing: "-1px" }}>88</span>
        </Link>
        {/* Bangladesh flag pill */}
        <div className="ml-3 flex items-center gap-1 rounded-full border border-[#2a2a45] px-2 py-0.5">
          <span className="text-sm">🇧🇩</span>
          <span className="text-xs text-gray-400">BD</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 shrink-0">
        {user ? (
          <>
            {/* Balance */}
            <Link
              href="/dashboard/wallet"
              className="hidden sm:flex items-center gap-1.5 rounded border border-[#2a2a45] bg-[#1a1a2e] px-3 py-1.5 text-sm hover:border-[#f0b429]/50 transition-colors"
            >
              <Wallet className="size-3.5 text-[#f0b429]" />
              <span className="font-semibold" style={{ color: "#f0b429" }}>
                ৳{(user.balance * 110).toFixed(0)}
              </span>
            </Link>
            {/* Notification */}
            <button className="relative p-2 text-gray-400 hover:text-white">
              <Bell className="size-5" />
              <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
            </button>
            {/* Avatar dropdown */}
            <button
              onClick={() => signOut()}
              className="flex items-center gap-1.5 rounded border border-[#2a2a45] bg-[#1a1a2e] px-2 py-1.5 text-sm hover:border-[#f0b429]/50 transition-colors"
            >
              <User className="size-4 text-gray-400" />
              <span className="text-gray-200">{user.username}</span>
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded px-4 py-1.5 text-sm font-semibold border border-[#f0b429] text-[#f0b429] hover:bg-[#f0b429] hover:text-black transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded px-4 py-1.5 text-sm font-semibold text-black transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #f0b429, #d4950a)" }}
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
