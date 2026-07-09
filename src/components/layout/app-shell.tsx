"use client";

import * as React from "react";
import { Sidebar } from "./sidebar";
import { BJ88Header } from "./bj88-header";
import { useSidebar } from "./sidebar-provider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { collapsed, toggle } = useSidebar();

  return (
    <>
      {collapsed ? (
        <div
          className="fixed left-0 top-0 z-40 h-screen w-[50px] flex flex-col items-center py-3"
          style={{ backgroundColor: "#0a0a14", borderRight: "1px solid #1a1a2e" }}
        >
          <button onClick={toggle} className="text-[#f0b429] hover:text-white mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex flex-1 flex-col items-center gap-3 pt-2">
            <span className="text-base">⭐</span>
            <span className="text-base">⚽</span>
            <span className="text-base">🏏</span>
            <span className="text-base">🎰</span>
            <span className="text-base">🃏</span>
          </div>
        </div>
      ) : (
        <Sidebar collapsed={false} onToggle={toggle} />
      )}

      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? "50px" : "165px" }}
      >
        <BJ88Header sidebarCollapsed={collapsed} onToggleSidebar={toggle} />
        <main className="pt-[52px] min-h-screen">{children}</main>
      </div>
    </>
  );
}
