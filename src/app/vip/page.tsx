import type { Metadata } from "next";
import { Crown, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBanner } from "@/components/site/cta-banner";
import { FaqList } from "@/components/site/faq-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VIP Club",
  description:
    "Climb five VIP tiers to unlock cashback, a personal account manager, faster withdrawals, and exclusive bonuses.",
};

const TIERS = [
  {
    name: "Bronze",
    emoji: "🥉",
    threshold: "0 pts",
    cashback: "5%",
    perks: ["Weekly bonus", "Email support", "Birthday bonus"],
  },
  {
    name: "Silver",
    emoji: "🥈",
    threshold: "10,000 pts",
    cashback: "8%",
    perks: ["Priority support", "Reload bonus", "Free spins"],
  },
  {
    name: "Gold",
    emoji: "🥇",
    threshold: "50,000 pts",
    cashback: "12%",
    perks: ["Faster withdrawals", "Personal manager", "Monthly cashback"],
  },
  {
    name: "Platinum",
    emoji: "💠",
    threshold: "200,000 pts",
    cashback: "15%",
    perks: ["Higher limits", "Exclusive events", "Custom bonuses"],
  },
  {
    name: "Diamond",
    emoji: "💎",
    threshold: "1,000,000 pts",
    cashback: "20%",
    perks: ["VIP host 24/7", "Luxury gifts", "Top-tier rewards"],
  },
];

const FAQ = [
  {
    q: "How do I earn VIP points?",
    a: "You earn one VIP point for every ₱100 wagered on any game. Points never expire while your account is active.",
  },
  {
    q: "When do I move up a tier?",
    a: "Your tier is reviewed in real time. The moment you cross a threshold, your new benefits activate automatically.",
  },
  {
    q: "Is the VIP program free?",
    a: "Yes. Every player is automatically enrolled in the Bronze tier from the moment they create an account.",
  },
];

export default function VipPage() {
  return (
    <>
      <PageHero
        eyebrow="Loyalty rewards"
        title={
          <span className="flex items-center gap-3">
            <Crown className="size-9 text-amber-400" /> VIP Club
          </span>
        }
        description="The more you play, the more you're rewarded. Climb five tiers and unlock increasingly generous benefits."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-2xl border p-6 ${
                i >= 3
                  ? "border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-transparent"
                  : "border-border/60 bg-card/50"
              }`}
            >
              <div className="text-4xl">{t.emoji}</div>
              <h3 className="mt-2 text-lg font-bold">{t.name}</h3>
              <div className="text-xs text-muted-foreground">{t.threshold}</div>
              <div className="mt-3 text-2xl font-extrabold text-gold-gradient">
                {t.cashback}
                <span className="text-xs font-normal text-muted-foreground">
                  {" "}
                  cashback
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-amber-400" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { n: "1", t: "Play & earn", d: "Every wager earns VIP points automatically — no opt-in needed." },
            { n: "2", t: "Climb tiers", d: "Cross thresholds to unlock higher cashback and exclusive perks." },
            { n: "3", t: "Enjoy rewards", d: "Cashback, faster withdrawals, and a personal manager at the top." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-border/60 bg-card/50 p-6">
              <div className="size-9 rounded-full bg-primary/20 font-bold text-primary">
                {s.n}
              </div>
              <h4 className="mt-3 font-semibold">{s.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">VIP questions</h2>
          <div className="mt-4">
            <FaqList items={FAQ} />
          </div>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" variant="gold">
            <Link href="/register">Join the VIP Club</Link>
          </Button>
        </div>
      </section>

      <div className="pb-4">
        <CtaBanner />
      </div>
    </>
  );
}
