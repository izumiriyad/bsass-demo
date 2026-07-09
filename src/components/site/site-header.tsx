"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  History,
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  ShieldCheck,
  User as UserIcon,
  Wallet,
  Search,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./logo";
import { MAIN_NAV } from "@/lib/nav";
import { useAuth } from "@/components/providers/auth-provider";
import { cn, formatPHP } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NotificationCenter } from "@/components/ui/notification-center";
import { SearchAutocomplete } from "@/components/ui/search-autocomplete";
import { GAMES } from "@/lib/catalog";

const searchGames = async (query: string) => {
  const q = query.toLowerCase();
  return GAMES.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.provider.toLowerCase().includes(q) ||
      g.tags.some((t) => t.toLowerCase().includes(q))
  )
    .slice(0, 6)
    .map((g) => ({
      id: g.id,
      title: g.title,
      subtitle: `${g.provider} • ${g.rtp}% RTP`,
      icon: g.emoji,
      href: `/games/${g.slug}`,
    }));
};

export function SiteHeader() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const initials = user
    ? user.username.slice(0, 2).toUpperCase()
    : "";

  const handleSearchSelect = (result: { href?: string }) => {
    if (result.href) {
      window.location.href = result.href;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      {/* Utility strip */}
      <div className="hidden border-b border-border/40 bg-background/40 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-xs text-muted-foreground lg:px-8">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            Licensed &amp; secure • Provably fair games
          </span>
          <span>18+ • Please play responsibly</span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Search bar - desktop */}
        <div className="hidden lg:block flex-1 max-w-md mx-4">
          <SearchAutocomplete
            placeholder="Search games, providers..."
            onSearch={searchGames}
            onSelect={handleSearchSelect}
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Search button - mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>

          <ThemeToggle />

          {user && <NotificationCenter />}

          {user ? (
            <>
              <Link
                href="/dashboard/wallet"
                className="hidden items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-1.5 text-sm transition-colors hover:border-primary/50 sm:flex"
              >
                <Wallet className="size-4 text-emerald-400" />
                <span className="font-semibold text-gold-gradient">
                  {formatPHP(user.balance)}
                </span>
              </Link>
              <Button
                asChild
                variant="gradient"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href="/dashboard/wallet">Deposit</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 rounded-full border border-transparent p-0.5 transition-colors hover:border-border"
                    aria-label="Account menu"
                  >
                    <Avatar className="size-9 border border-border">
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{user.username}</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard /> Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/wallet">
                      <Wallet /> Wallet &amp; Deposit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/history">
                      <History /> History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/favorites">
                      <Heart /> Favorites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile">
                      <UserIcon /> Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild variant="gradient" size="sm">
                <Link href="/register">Sign up</Link>
              </Button>
            </>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border/60 py-4">
                  <Logo />
                </div>

                {/* Mobile search */}
                <div className="p-4 border-b border-border/60">
                  <SearchAutocomplete
                    placeholder="Search games..."
                    onSearch={searchGames}
                    onSelect={handleSearchSelect}
                    autoFocus
                  />
                </div>

                <nav className="flex flex-col gap-1 py-4">
                  {MAIN_NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent",
                        pathname === item.href ||
                        (item.href !== "/" &&
                          pathname.startsWith(item.href))
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile theme toggle */}
                <div className="flex items-center justify-between px-3 py-2 border-t border-border/60">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex gap-1">
                    <ThemeToggle />
                  </div>
                </div>

                <div className="mt-auto space-y-2 border-t border-border/60 pt-4">
                  {user ? (
                    <>
                      <Button asChild variant="gradient" className="w-full">
                        <Link href="/dashboard/wallet">Deposit</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="gradient" className="w-full">
                        <Link href="/register">Sign up</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/login">Log in</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="fixed inset-x-0 top-0 z-[60] bg-background p-4 lg:hidden animate-slide-down">
          <div className="flex items-center gap-2">
            <SearchAutocomplete
              placeholder="Search games..."
              onSearch={searchGames}
              onSelect={handleSearchSelect}
              autoFocus
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(false)}
            >
              <X className="size-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
