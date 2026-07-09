"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  History,
  Heart,
  LayoutDashboard,
  LogOut,
  User as UserIcon,
  Wallet,
  Bell,
  Shield,
} from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, formatPHP } from "@/lib/utils";
import type { SafeUser } from "@/lib/types";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { href: "/dashboard/history", label: "History", icon: History },
  { href: "/dashboard/favorites", label: "Favorites", icon: Heart },
  { href: "/dashboard/profile", label: "Profile", icon: UserIcon },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/security", label: "Security", icon: Shield },
];

export function DashboardShell({
  user,
  children,
}: {
  user: SafeUser;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const { user: ctxUser, signOut } = useAuth();
  const current = ctxUser ?? user;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-xl border border-border/60 bg-card/50 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="border border-border">
                <AvatarFallback>
                  {current.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <div className="truncate font-semibold">{current.username}</div>
                <div className="text-xs text-muted-foreground">
                  Tier {current.vipLevel}
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-muted/50 p-3">
              <div className="text-xs text-muted-foreground">Balance</div>
              <div className="text-lg font-bold text-gold-gradient">
                {formatPHP(current.balance)}
              </div>
            </div>
          </div>

          <nav className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => signOut()}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <LogOut className="size-4" />
              Sign out
            </button>
          </nav>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
