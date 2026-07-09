"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, Menu, User, Wallet } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";

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
      className="fixed top-0 right-0 z-30 flex items-center h-[52px] px-4 gap-3"
      style={{
        left: sidebarCollapsed ? "50px" : "165px",
        background: "#0d0d18",
        borderBottom: "1px solid #1e1e2d",
        transition: "left 0.25s ease",
      }}
    >
      {/* Collapse toggle */}
      <button
        onClick={onToggleSidebar}
        className="flex size-8 items-center justify-center rounded text-[#888899] hover:text-white transition-colors"
      >
        <Menu className="size-5" />
      </button>

      {/* Center logo */}
      <div className="flex flex-1 items-center justify-center gap-3">
        <Link href="/" className="flex items-center">
          <span
            className="text-[28px] font-black leading-none tracking-tighter"
            style={{ color: "#f5a623", fontStyle: "italic" }}
          >
            bj
          </span>
          <span
            className="text-[28px] font-black leading-none tracking-tighter"
            style={{ color: "#fff", fontStyle: "italic" }}
          >
            88
          </span>
        </Link>
        {/* Bangladesh flag + text */}
        <div className="flex items-center gap-1 rounded-full border border-[#2a2a3e] px-2.5 py-1 text-xs text-[#888899]">
          <span>🇧🇩</span>
          <span className="font-medium">BD</span>
        </div>
      </div>

      {/* Auth area */}
      <div className="flex items-center gap-2 shrink-0">
        {user ? (
          <>
            <Link
              href="/dashboard/wallet"
              className="hidden sm:flex items-center gap-1.5 rounded border border-[#2a2a3e] bg-[#1e1e2d] px-3 py-1.5 text-sm hover:border-[#f5a623]/40 transition-colors"
            >
              <Wallet className="size-3.5 text-[#f5a623]" />
              <span className="font-bold text-[#f5a623]">৳{Math.round(user.balance * 110).toLocaleString()}</span>
            </Link>
            <button className="relative p-1.5 text-[#888899] hover:text-white">
              <Bell className="size-5" />
              <span className="absolute right-1 top-1 size-1.5 rounded-full bg-red-500" />
            </button>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-1.5 rounded border border-[#2a2a3e] bg-[#1e1e2d] px-2.5 py-1.5 text-sm font-medium text-white hover:border-[#f5a623]/40 transition-colors"
            >
              <User className="size-4 text-[#888899]" />
              {user.username}
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded px-5 py-2 text-sm font-bold border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-black transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded px-5 py-2 text-sm font-bold text-black transition-all hover:brightness-105"
              style={{ background: "linear-gradient(135deg,#f5a623,#e8920f)" }}
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
