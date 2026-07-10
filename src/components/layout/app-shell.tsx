"use client";

import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { useSidebar } from "./sidebar-provider";
import { Sidebar } from "./sidebar";
import { BJ88Header } from "./bj88-header";

const COLLAPSED_EMOJIS = ["🏠", "⭐", "⚽", "🏏", "🎰", "🃏", "🎲", "🎣", "🎟️", "🕹️", "🚀"];

function CollapsedRail({ onToggle }: { onToggle: () => void }) {
  return (
    <aside
      className="fixed left-0 top-0 z-30 flex h-[100dvh] w-[50px] flex-col items-center border-r border-[#2a2a3e] py-2"
      style={{ background: "#1e1e2d" }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label="Expand sidebar"
        className="mb-2 flex h-7 w-8 items-center justify-center rounded-md text-[#8a8aa0] transition-colors hover:bg-[#2a2a3e] hover:text-white"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <nav className="no-scrollbar flex flex-1 flex-col items-center gap-2 overflow-y-auto">
        {COLLAPSED_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            className="text-base leading-none opacity-80 transition-opacity hover:opacity-100"
          >
            {emoji}
          </span>
        ))}
      </nav>
    </aside>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { collapsed, toggle } = useSidebar();

  return (
    <div className="min-h-[100dvh]" style={{ background: "#0d0d18" }}>
      {collapsed ? (
        <CollapsedRail onToggle={toggle} />
      ) : (
        <Sidebar onToggle={toggle} />
      )}

      <BJ88Header
        sidebarCollapsed={collapsed}
        onToggleSidebar={toggle}
      />

      <main
        className="transition-[padding-left] duration-200"
        style={{
          paddingLeft: collapsed ? "50px" : "165px",
          paddingTop: "52px",
        }}
      >
        {children}
      </main>
    </div>
  );
}
