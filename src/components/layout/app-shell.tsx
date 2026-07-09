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
        <CollapsedRail onToggle={toggle} />
      ) : (
        <Sidebar onToggle={toggle} />
      )}

      <div
        className="transition-[margin] duration-300 ease-out"
        style={{ marginLeft: collapsed ? "50px" : "165px" }}
      >
        <BJ88Header sidebarCollapsed={collapsed} onToggleSidebar={toggle} />
        <main className="pt-[52px] min-h-screen">{children}</main>
      </div>
    </>
  );
}

function CollapsedRail({ onToggle }: { onToggle: () => void }) {
  return (
    <aside
      className="fixed left-0 top-0 z-40 flex h-screen w-[50px] flex-col items-center gap-3 py-3"
      style={{ background: "#1e1e2d", borderRight: "1px solid #2a2a3e" }}
    >
      <button
        onClick={onToggle}
        className="flex size-8 items-center justify-center rounded text-[#f5a623] hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex flex-col items-center gap-3 pt-2 text-base">
        <span>⭐</span><span>⚽</span><span>🏏</span><span>🎰</span><span>🃏</span><span>🎣</span>
      </div>
    </aside>
  );
}
