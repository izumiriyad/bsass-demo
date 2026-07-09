import type { Metadata } from "next";
import { PromotionCard } from "@/components/game/promotion-card";
import { PageHero } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";
import { PROMOTIONS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Promotions",
  description:
    "Claim welcome bonuses, daily cashback, free spins, reload offers, referral rewards, and monthly tournament prizes.",
};

const BONUS_FAQS = [
  {
    q: "How do I claim a promotion?",
    a: "Open the promotion, copy its bonus code, and enter it when making a qualifying deposit in your wallet. Some bonuses are credited automatically.",
  },
  {
    q: "What are wagering requirements?",
    a: "A wagering requirement is the number of times you must play through a bonus before withdrawing it. For example, a 25x requirement on a ₱1,000 bonus means ₱25,000 in bets.",
  },
  {
    q: "Can I have multiple bonuses active?",
    a: "Generally one bonus is active at a time. You can claim a new one once the current bonus is completed or forfeited.",
  },
];

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rewards"
        title="Promotions & Bonuses"
        description="Generous, transparent offers for new and returning players. No hidden terms — everything is spelled out clearly."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOTIONS.map((p) => (
            <PromotionCard key={p.id} promo={p} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">
            Bonus questions
          </h2>
          <div className="mt-4">
            <FaqList items={BONUS_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
