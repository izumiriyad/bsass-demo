"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, X, Check, CheckCheck, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/lib/utils";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "promo" | "game";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  href?: string;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "promo",
    title: "New bonus available!",
    message: "Claim your 50% weekend reload bonus before it expires.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    read: false,
    href: "/promotions/weekend-reload-50",
  },
  {
    id: "2",
    type: "success",
    title: "Withdrawal processed",
    message: "Your withdrawal of ₱5,000 has been sent to GCash.",
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    read: false,
    href: "/dashboard/history",
  },
  {
    id: "3",
    type: "game",
    title: "New game launched",
    message: "Try the new Cyber Heist slot — 97% RTP and explosive features!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: true,
    href: "/games/cyber-heist-8",
  },
  {
    id: "4",
    type: "info",
    title: "VIP tier upgrade",
    message: "Congratulations! You've reached Gold VIP status.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    read: true,
    href: "/vip",
  },
  {
    id: "5",
    type: "promo",
    title: "Tournament starting soon",
    message: "The Monthly Slots Race begins in 2 hours. Are you ready?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    read: false,
    href: "/promotions/monthly-slots-race",
  },
];

const TYPE_CONFIG: Record<
  Notification["type"],
  { icon: typeof Bell; color: string }
> = {
  info: { icon: Bell, color: "text-sky-400" },
  success: { icon: Check, color: "text-emerald-400" },
  warning: { icon: Bell, color: "text-amber-400" },
  promo: { icon: Bell, color: "text-fuchsia-400" },
  game: { icon: Bell, color: "text-cyan-400" },
};

export function NotificationCenter() {
  const [notifications, setNotifications] = React.useState(MOCK_NOTIFICATIONS);
  const [open, setOpen] = React.useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
          <Bell className="size-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-destructive text-[11px] font-bold text-white">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-border/60">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <Bell className="size-5" />
              Notifications
              {unreadCount > 0 && (
                <Badge variant="hot" className="ml-1">{unreadCount} new</Badge>
              )}
            </SheetTitle>
            <div className="flex items-center gap-1">
              {notifications.length > 0 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    disabled={unreadCount === 0}
                  >
                    <CheckCheck className="size-4" />
                    Mark all read
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAll}
                  >
                    <Trash2 className="size-4" />
                    Clear
                  </Button>
                </>
              )}
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                <Bell className="size-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                All caught up! No new notifications.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border/60">
              {notifications.map((n) => {
                const config = TYPE_CONFIG[n.type];
                return (
                  <div
                    key={n.id}
                    className={cn(
                      "group relative flex gap-3 p-4 transition-colors",
                      !n.read && "bg-primary/5"
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full",
                        !n.read ? "bg-primary/20" : "bg-muted"
                      )}
                    >
                      <config.icon className={cn("size-4", config.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium text-sm">{n.title}</p>
                        <button
                          onClick={() => removeNotification(n.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                          aria-label="Dismiss notification"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                        {n.message}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground/70">
                        {timeAgo(n.timestamp)}
                      </p>
                      {n.href && (
                        <Link
                          href={n.href}
                          onClick={() => {
                            markAsRead(n.id);
                            setOpen(false);
                          }}
                          className="mt-2 inline-block text-xs font-medium text-primary hover:underline"
                        >
                          View details
                        </Link>
                      )}
                    </div>
                    {!n.read && (
                      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 size-2 rounded-full bg-primary" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-border/60 p-4">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/dashboard/notifications">
              <Settings className="size-4" />
              Notification settings
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
