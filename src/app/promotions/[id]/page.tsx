import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROMOTIONS } from "@/lib/catalog";

interface PromotionDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PromotionDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const promo = PROMOTIONS.find((p) => p.id === id);
  if (!promo) return { title: "Promotion Not Found" };
  return {
    title: `${promo.title} — BJ88 Bangladesh`,
    description: promo.subtitle,
  };
}

export default async function PromotionDetailPage({
  params,
}: PromotionDetailPageProps) {
  const { id } = await params;
  const promo = PROMOTIONS.find((p) => p.id === id);
  if (!promo) notFound();

  const [c1, c2] = promo.gradient;

  return (
    <div className="mx-auto max-w-4xl px-3 py-3">
      <Link
        href="/promotions"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8a8aa0] transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Promotions
      </Link>

      <section
        className="relative mt-3 overflow-hidden rounded-2xl p-8"
        style={{
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 15%, rgba(255,255,255,0.22), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 90%, rgba(0,0,0,0.4), transparent 55%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <span className="text-6xl drop-shadow-[0_5px_12px_rgba(0,0,0,0.5)]">
            {promo.emoji}
          </span>
          <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {promo.badge}
          </span>
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            {promo.title}
          </h1>
          <p className="max-w-xl text-base text-white/85">{promo.subtitle}</p>
        </div>
      </section>

      <section className="mt-5 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-white">
          About this promotion
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#c8c8d6]">
          {promo.title} — {promo.subtitle}. This offer is available to all eligible
          BJ88 Bangladesh members. Claim your reward and start playing today with BDT.
          Terms and conditions apply. Wagering requirements may vary per promotion.
          Contact our 24/7 support team if you have any questions about this offer.
        </p>
      </section>

      <div className="mt-5 flex flex-col items-center gap-3">
        <Link
          href="/register"
          className="rounded-full bg-gradient-to-r from-[#f5a623] to-[#e8920f] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          Claim This Bonus →
        </Link>
        <p className="text-[11px] text-[#8a8aa0]">
          New members only. 18+. Please play responsibly.
        </p>
      </div>
    </div>
  );
}
