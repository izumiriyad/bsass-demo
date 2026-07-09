import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Gift, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CopyCode } from "@/components/site/copy-code";
import { PromotionCard } from "@/components/game/promotion-card";
import { Button } from "@/components/ui/button";
import { PROMOTIONS } from "@/lib/catalog";

type Params = { id: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const promo = PROMOTIONS.find((p) => p.slug === id);
  if (!promo) return { title: "Promotion not found" };
  return { title: promo.title, description: promo.summary };
}

export default async function PromotionDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const promo = PROMOTIONS.find((p) => p.slug === id);
  if (!promo) notFound();

  const related = PROMOTIONS.filter((p) => p.id !== promo.id).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={promo.badge} title={promo.title} description={promo.summary}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl">{promo.emoji}</span>
          <span className="text-lg font-bold text-gold-gradient">
            {promo.reward}
          </span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 py-10 lg:px-8">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
          <Link href="/promotions">
            <ArrowLeft className="size-4" /> All promotions
          </Link>
        </Button>

        <div
          className="relative overflow-hidden rounded-2xl p-8"
          style={{
            backgroundImage: `linear-gradient(120deg, ${promo.gradient[0]}, ${promo.gradient[1]})`,
          }}
        >
          <div className="absolute right-4 top-4 text-7xl opacity-30">
            {promo.emoji}
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
              <Sparkles className="size-4" /> {promo.badge}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-white">
              {promo.reward}
            </h2>
            {promo.code && (
              <div className="mt-4">
                <CopyCode code={promo.code} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <h3 className="text-xl font-bold">About this offer</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {promo.description}
            </p>

            <h3 className="mt-8 text-xl font-bold">Terms &amp; conditions</h3>
            <ul className="mt-3 space-y-2">
              {promo.terms.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border/60 bg-card/50 p-5">
              <Gift className="size-6 text-amber-300" />
              <h4 className="mt-2 font-semibold">Claim this bonus</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in or register, then enter the code when depositing.
              </p>
              <Button asChild variant="gradient" className="mt-4 w-full">
                <Link href="/register">Claim now</Link>
              </Button>
            </div>
          </aside>
        </div>

        <section className="mt-14">
          <h3 className="text-xl font-bold">More promotions</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PromotionCard key={p.id} promo={p} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
