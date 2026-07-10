"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Wallet,
  History,
  Star,
  Bell,
  Shield,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { cn, formatBDT } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { id: "profile", label: "Profile", href: "/dashboard/profile", icon: User },
  { id: "wallet", label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { id: "history", label: "History", href: "/dashboard/history", icon: History },
  { id: "favorites", label: "Favorites", href: "/dashboard/favorites", icon: Star },
  { id: "notifications", label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { id: "security", label: "Security", href: "/dashboard/security", icon: Shield },
];

export function DashboardShell({
  children,
  active,
}: {
  children: ReactNode;
  active: string;
}) {
  const router = useRouter();
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex min-h-[60dvh] items-center justify-center">
        <p className="text-sm text-[#8a8aa0]">Redirecting to login…</p>
      </div>
    );
  }

  async function handleSignOut() {
    await signOut();
    router.push("/login");
  }

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-52px)] max-w-6xl gap-5 px-3 py-4">
      <aside className="sticky top-[60px] hidden h-[calc(100dvh-72px)] w-56 shrink-0 flex-col rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-3 md:flex">
        <div className="mb-3 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] p-3">
          <p className="text-[10px] uppercase tracking-wide text-[#8a8aa0]">
            Welcome back
          </p>
          <p className="truncate text-sm font-bold text-white">{user.username}</p>
          <p
            className="mt-1.5 rounded-md px-2 py-1 text-xs font-bold text-black"
            style={{ background: "#f5a623" }}
          >
            {formatBDT(user.balance)}
          </p>
        </div>

        <nav className="no-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-black"
                    : "text-[#c8c8d6] hover:bg-[#2a2a3e] hover:text-white"
                )}
                style={isActive ? { background: "#f5a623" } : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={handleSignOut}
          className="mt-2 flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#c8c8d6] transition-colors hover:bg-[#2a2a3e] hover:text-white"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          <span>Sign Out</span>
        </button>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-center justify-between gap-3 md:hidden">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-[#8a8aa0]">
              Welcome back
            </p>
            <p className="text-sm font-bold text-white">{user.username}</p>
          </div>
          <p
            className="rounded-md px-2.5 py-1 text-xs font-bold text-black"
            style={{ background: "#f5a623" }}
          >
            {formatBDT(user.balance)}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
