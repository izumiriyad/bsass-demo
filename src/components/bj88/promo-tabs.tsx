"use client";

import { useState } from "react";
import Link from "next/link";
import { PROMOTIONS } from "@/lib/catalog";

const CATEGORIES = ["All", "Welcome", "Slots", "Casino", "Sports", "Cricket", "Referral", "VIP", "Daily", "Weekly"] as const;
type Category = typeof CATEGORIES[number];

const PROMO_CATEGORIES: Record<string, Category> = {
  "welcome": "Welcome",
  "sports-cashback": "Sports",
  "slots-bonus": "Slots",
  "cricket-promo": "Cricket",
  "referral": "Referral",
  "vip": "VIP",
  "daily-sports-rebate": "Daily",
  "slots-cashback": "Slots",
  "cricket-first-bet": "Cricket",
  "birthday-bonus": "VIP",
  "unlimited-deposit": "Daily",
  "weekly-reload": "Weekly",
  "loss-refund": "Weekly",
  "vip-exclusive": "VIP",
};

export function PromoTabs() {
  const [category, setCategory] = useState<Category>("All");

  const filtered = category === "All"
    ? PROMOTIONS
    : PROMOTIONS.filter((p) => PROMO_CATEGORIES[p.id] === category);

  return (
    <>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
              category === cat
                ? "border-[#ffdf19] bg-[#ffdf19]/15 text-[#ffdf19]"
                : "border-[#2a2c30] bg-[#1b1c1e] text-[#9ca3af] hover:border-[#383b3f] hover:text-[#f0f0f0]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((promo) => {
            const [c1, c2] = promo.gradient;
            return (
              <Link
                key={promo.id}
                href={`/promotions/${promo.id}`}
                className="relative overflow-hidden rounded-xl p-4 transition hover:opacity-95"
                style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 55%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block rounded bg-black/25 px-2 py-0.5 text-[10px] font-bold text-white">
                      {promo.badge}
                    </span>
                    <h3 className="text-base font-bold text-white">{promo.title}</h3>
                    <p className="text-xs text-white/80">{promo.subtitle}</p>
                  </div>
                  <span className="text-3xl" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}>
                    {promo.emoji}
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-8 text-center">
            <p className="text-sm text-[#9ca3af]">No promotions in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}
