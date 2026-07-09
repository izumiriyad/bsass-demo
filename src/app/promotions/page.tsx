import { PROMOTIONS } from "@/lib/bj88-catalog";
import { WinnersTicker } from "@/components/bj88/tickers";
import Link from "next/link";

export const metadata = { title: "Promotions" };

export default function PromotionsPage() {
  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>
      <h1 className="mb-6 text-xl font-black uppercase text-white">🎁 Promotions</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROMOTIONS.map((p) => (
          <Link
            key={p.id}
            href={`/promotions/${p.id}`}
            className="group relative block overflow-hidden rounded-xl p-6 transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: `linear-gradient(120deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
          >
            <div className="absolute right-4 top-4 text-5xl opacity-30">{p.emoji}</div>
            <div className="relative">
              <span className="rounded bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white">
                {p.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/80">{p.subtitle}</p>
              <span className="mt-3 inline-block text-xs font-bold text-white underline">
                Claim Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
