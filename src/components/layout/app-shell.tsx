"use client";

import { type ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { TopNavBar } from "@/components/bj88/top-nav-bar";
import { FloatingChat } from "@/components/bj88/floating-chat";
import { useSidebar } from "./sidebar-provider";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[#121315]">
      <Sidebar />
      <Header />
      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:pl-[63px]" : "lg:pl-[260px]"
        )}
      >
        <TopNavBar />
        <main className="min-h-screen pt-[72px]">{children}</main>
      </div>
      <FloatingChat />
    </div>
  );
}
