"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chrome as Home, Search, Wallet, User, Menu } from "lucide-react";
import { useSidebar } from "./sidebar-provider";
import { useModal } from "@/components/providers/modal-provider";
import { useAuth } from "@/components/providers/auth-provider";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { setMobileOpen } = useSidebar();
  const { openModal } = useModal();
  const { user } = useAuth();

  const items = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Menu",
      icon: Menu,
      onClick: () => setMobileOpen(true),
      active: false,
    },
    {
      label: "Wallet",
      icon: Wallet,
      href: user ? "/dashboard/wallet" : undefined,
      onClick: user ? undefined : () => openModal("login"),
      active: pathname === "/dashboard/wallet",
    },
    {
      label: user ? "Account" : "Login",
      icon: User,
      href: user ? "/dashboard" : undefined,
      onClick: user ? undefined : () => openModal("login"),
      active: pathname === "/dashboard" || pathname === "/dashboard/profile",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#2a2c30] bg-[#1b1c1e]/95 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-around px-1 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon
                className={cn(
                  "h-5 w-5 transition-transform",
                  item.active ? "text-[#ffdf19]" : "text-[#9ca3af]"
                )}
              />
              <span
                className={cn(
                  "mt-0.5 text-[10px] font-medium",
                  item.active ? "text-[#ffdf19]" : "text-[#9ca3af]"
                )}
              >
                {item.label}
              </span>
            </>
          );

          if (item.onClick) {
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex flex-1 flex-col items-center justify-center py-1"
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href!}
              className="flex flex-1 flex-col items-center justify-center py-1"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
