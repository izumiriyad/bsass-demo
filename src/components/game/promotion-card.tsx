import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Promotion } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PromotionCard({
  promo,
  className,
}: {
  promo: Promotion;
  className?: string;
}) {
  return (
    <Link
      href={`/promotions/${promo.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:shadow-2xl",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(120deg, ${promo.gradient[0]}, ${promo.gradient[1]})`,
      }}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_80%_10%,white,transparent_45%)]" />
      <div className="relative flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <Badge className="bg-black/30 text-white">{promo.badge}</Badge>
          <span className="text-4xl drop-shadow-lg">{promo.emoji}</span>
        </div>
        <h3 className="text-xl font-bold text-white drop-shadow">
          {promo.title}
        </h3>
        <p className="mt-1 text-sm text-white/85">{promo.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-white">
            {promo.reward}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-white transition-transform group-hover:translate-x-1">
            Claim <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
