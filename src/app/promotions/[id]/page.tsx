import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROMOTIONS } from "@/lib/bj88-catalog";
import { WinnersTicker } from "@/components/bj88/tickers";

export default async function PromotionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const promo = PROMOTIONS.find((p) => p.id === id);
  if (!promo) notFound();

  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>
      <Link href="/promotions" className="mb-4 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#f0b429]">
        <ArrowLeft className="size-3" /> All Promotions
      </Link>

      <div
        className="relative overflow-hidden rounded-xl p-8"
        style={{ backgroundImage: `linear-gradient(120deg, ${promo.gradient[0]}, ${promo.gradient[1]})` }}
      >
        <div className="absolute right-4 top-4 text-7xl opacity-30">{promo.emoji}</div>
        <div className="relative">
          <span className="rounded bg-black/30 px-2 py-1 text-xs font-bold text-white">{promo.badge}</span>
          <h1 className="mt-3 text-3xl font-black text-white">{promo.title}</h1>
          <p className="mt-2 text-white/80">{promo.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[#1a1a2e] bg-[#1a1a2e] p-6">
        <h2 className="font-bold text-white">About this offer</h2>
        <p className="mt-2 text-sm text-gray-400">
          {promo.subtitle}. Available exclusively for BJ88 Bangladesh members. Sign up or log in to claim.
        </p>
        <Link
          href="/register"
          className="mt-4 inline-block rounded-lg bg-[#f0b429] px-6 py-2.5 text-sm font-bold text-black hover:brightness-110"
        >
          Claim Now →
        </Link>
      </div>
    </div>
  );
}
