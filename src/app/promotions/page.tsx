import type { Metadata } from "next";
import Link from "next/link";
import { PROMOTIONS } from "@/lib/catalog";
import { WinnersTicker } from "@/components/bj88/tickers";

export const metadata: Metadata = {
  title: "Promotions — BJ88 Bangladesh",
  description:
    "Exclusive bonuses and promotions on BJ88 Bangladesh. Welcome bonus up to ৳10,000, sports cashback, slots free spins, cricket specials, referral rewards and VIP perks.",
};

export default function PromotionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-3">
      <WinnersTicker />

      <div className="mt-4 flex items-center gap-3">
        <span
          className="h-5 w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom, #f5a623, #e8920f)" }}
        />
        <h1 className="text-2xl font-black text-white">Promotions</h1>
      </div>
      <p className="mt-1 text-sm text-[#8a8aa0]">
        Exclusive bonuses and rewards for BJ88 Bangladesh players.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PROMOTIONS.map((p) => {
          const [c1, c2] = p.gradient;
          return (
            <Link
              key={p.id}
              href={`/promotions/${p.id}`}
              className="group relative block overflow-hidden rounded-xl p-5 transition-transform duration-200 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, ${c1}, ${c2})`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 60%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
                    {p.emoji}
                  </span>
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-bold text-white">
                    {p.badge}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white">{p.title}</h2>
                <p className="text-sm text-white/80">{p.subtitle}</p>
                <span className="mt-1 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white transition-colors group-hover:bg-white/25">
                  View Details →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
