"use client";

import { useState } from "react";
import { PROVIDERS, EXTRA_PROVIDERS } from "@/lib/catalog";

const ALL_PROVIDERS = [...PROVIDERS, ...EXTRA_PROVIDERS];

const FILTERS = ["All", "Slots", "Sportsbook", "Casino"] as const;
type Filter = typeof FILTERS[number];

const PROVIDER_CATEGORIES: Record<string, Filter> = {
  "PRAGMATIC PLAY": "Slots",
  "JILI": "Slots",
  "PG SOFT": "Slots",
  "SPADE GAMING": "Slots",
  "JDB": "Slots",
  "MICROGAMING": "Slots",
  "PLAY'N GO": "Slots",
  "RED TIGER": "Slots",
  "NETENT": "Slots",
  "CQ9": "Slots",
  "RICH88": "Slots",
  "FASTSPIN": "Slots",
  "KING MAKER": "Slots",
  "EVOLUTION": "Casino",
  "AE SEXY": "Casino",
  "PLAYTECH": "Casino",
  "BIG GAMING": "Casino",
  "SV388": "Casino",
  "SPRIBE": "Slots",
  "SABA SPORTS": "Sportsbook",
  "SBOBET": "Sportsbook",
};

export function ProviderShowcase() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All"
    ? ALL_PROVIDERS
    : ALL_PROVIDERS.filter((p) => PROVIDER_CATEGORIES[p.name] === filter);

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-lg">🏢</span>
        <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Gaming Providers Partnership
        </h2>
      </div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
              filter === f
                ? "border-[#ffdf19] bg-[#ffdf19]/15 text-[#ffdf19]"
                : "border-[#2a2c30] bg-[#1b1c1e] text-[#9ca3af] hover:border-[#383b3f] hover:text-[#f0f0f0]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {filtered.map((provider) => (
          <div
            key={provider.name}
            className="card-glow hover-lift flex items-center gap-2 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] p-3"
          >
            <span className="text-2xl">{provider.emoji}</span>
            <span className="truncate text-xs font-bold text-[#f0f0f0]">{provider.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
