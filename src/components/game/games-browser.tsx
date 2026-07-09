"use client";

import * as React from "react";
import { Search, SearchX } from "lucide-react";
import type { Game } from "@/lib/types";
import { GameCard } from "./game-card";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/utils";

type SortKey = "popular" | "rating" | "rtp" | "az";

const TABS = [
  { id: "all", name: "All", emoji: "🎮" },
  ...CATEGORIES.map((c) => ({ id: c.id, name: c.name, emoji: c.emoji })),
];

export function GamesBrowser({
  games,
  initialCategory = "all",
}: {
  games: Game[];
  initialCategory?: string;
}) {
  const [category, setCategory] = React.useState(initialCategory);
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("popular");

  const filtered = React.useMemo(() => {
    let list = category === "all" ? games : games.filter((g) => g.category === category);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.provider.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    const sorted = [...list];
    switch (sort) {
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "rtp":
        sorted.sort((a, b) => b.rtp - a.rtp);
        break;
      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sorted.sort((a, b) => b.players - a.players);
    }
    return sorted;
  }, [games, category, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, providers, tags…"
            className="pl-9"
            aria-label="Search games"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort games"
          className="h-10 rounded-md border border-input bg-input/40 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="popular">Most popular</option>
          <option value="rating">Top rated</option>
          <option value="rtp">Highest RTP</option>
          <option value="az">A–Z</option>
        </select>
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setCategory(t.id)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              category === t.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            <span>{t.emoji}</span>
            {t.name}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "game" : "games"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-dashed border-border/70 py-16 text-center">
          <SearchX className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No games match your search. Try a different keyword or category.
          </p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      )}
    </div>
  );
}
