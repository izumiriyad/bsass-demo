import type { Metadata } from "next";
import Link from "next/link";
import { WinnersTicker } from "@/components/bj88/tickers";
import { PromoCalendar } from "@/components/bj88/promo-calendar";
import { Footer } from "@/components/bj88/footer";
import { PROMOTIONS, PAYMENT_OPTIONS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Promotions & Bonuses",
  description:
    "Exclusive bonuses and rewards for BSL Gaming members. Welcome bonus, daily sports rebate, slots cashback, cricket first bet, VIP rewards and more. Claim your bonus in BDT today.",
};

interface PromoCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  emoji: string;
  gradient: [string, string];
  terms: string;
}

const EXTRA_PROMOS: PromoCard[] = [
  { id: "daily-sports-rebate", title: "Daily Sports Rebate", subtitle: "1.21% Daily Rebate on All Sports Bets", badge: "Daily", emoji: "⚽", gradient: ["#065f46", "#0d9488"], terms: "Min turnover ৳1,000. Rebate credited daily." },
  { id: "slots-cashback", title: "Slots Cashback", subtitle: "Up to 5% Cashback on Slots Losses", badge: "Slots", emoji: "🎰", gradient: ["#1e1b4b", "#4c1d95"], terms: "Cashback up to ৳50,000 per week." },
  { id: "cricket-first-bet", title: "Cricket First Bet", subtitle: "50% Bonus on Your First Cricket Bet", badge: "Cricket", emoji: "🏏", gradient: ["#0c4a6e", "#0369a1"], terms: "Min bet ৳500. Bonus capped at ৳5,000." },
  { id: "birthday-bonus", title: "Birthday Bonus", subtitle: "Special Bonus on Your Birthday", badge: "VIP", emoji: "🎂", gradient: ["#831843", "#be185d"], terms: "Available for verified members only." },
  { id: "unlimited-deposit", title: "Unlimited Deposit Bonus", subtitle: "4.50% Bonus on Every Deposit", badge: "Unlimited", emoji: "💰", gradient: ["#713f12", "#d97706"], terms: "No max limit. Bonus released per deposit." },
  { id: "weekly-reload", title: "Weekly Reload", subtitle: "Reload Bonus Every Monday", badge: "Weekly", emoji: "🔄", gradient: ["#166534", "#15803d"], terms: "Min deposit ৳500. 30x rollover." },
  { id: "loss-refund", title: "Loss Refund", subtitle: "100% Refund on Net Weekly Losses", badge: "Safety Net", emoji: "🛡️", gradient: ["#1c1917", "#57534e"], terms: "Up to ৳10,000 refund. VIP tiers vary." },
  { id: "vip-exclusive", title: "VIP Exclusive", subtitle: "Custom Bonuses for VIP Members", badge: "VIP Only", emoji: "👑", gradient: ["#4c1d95", "#8b5cf6"], terms: "Contact your VIP manager to claim." },
];

const ALL_PROMOS: PromoCard[] = [
  ...PROMOTIONS.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    badge: p.badge,
    emoji: p.emoji,
    gradient: p.gradient,
    terms: "Terms & conditions apply. Min deposit ৳500.",
  })),
  ...EXTRA_PROMOS,
];

const BONUS_STEPS = [
  { step: 1, title: "Deposit", emoji: "💳", desc: "Fund your account instantly via bKash, Nagad, Rocket, USDT or bank transfer." },
  { step: 2, title: "Claim Bonus", emoji: "🎁", desc: "Select your preferred promotion and opt in. The bonus is credited automatically." },
  { step: 3, title: "Play & Withdraw", emoji: "💸", desc: "Meet the rollover requirements and withdraw your winnings instantly in BDT." },
];

export default function PromotionsPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <WinnersTicker />

      <header className="space-y-2 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-xl sm:text-2xl">🎁</span>
          <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
            Promotions &amp; Bonuses
          </h1>
        </div>
        <p className="max-w-2xl text-sm text-[#9ca3af]">
          Exclusive bonuses and rewards for BSL Gaming members. From a 100% welcome bonus to
          daily sports rebates, slots cashback, cricket specials and VIP rewards — claim your
          bonus today and boost your winnings in BDT.
        </p>
      </header>

      <PromoCalendar />

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">🔥</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            All Promotions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_PROMOS.map((promo) => {
            const [c1, c2] = promo.gradient;
            return (
              <Link
                key={promo.id}
                href={`/promotions/${promo.id}`}
                className="card-glow hover-lift relative overflow-hidden rounded-xl p-5"
                style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 55%)",
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="inline-block rounded bg-black/25 px-2 py-0.5 text-[10px] font-bold text-white">
                      {promo.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white">{promo.title}</h3>
                    <p className="text-sm text-white/80">{promo.subtitle}</p>
                  </div>
                  <span
                    className="text-4xl"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
                  >
                    {promo.emoji}
                  </span>
                </div>
                <div className="relative mt-4 flex items-center justify-between">
                  <span className="btn-gold rounded-md px-4 py-1.5 text-xs font-bold">
                    Claim Now
                  </span>
                  <span className="text-[10px] text-white/60">{promo.terms}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">💳</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Payment Methods
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PAYMENT_OPTIONS.map((p) => (
            <div
              key={p.id}
              className="card-glow hover-lift flex flex-col items-center gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 text-center"
            >
              <span className="text-3xl">{p.emoji}</span>
              <p className="text-sm font-bold text-[#f0f0f0]">{p.name}</p>
              <div className="flex w-full flex-col gap-1">
                <span className="rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]">
                  Fee: {p.fee}
                </span>
                <span className="rounded bg-[#242628] px-2 py-0.5 text-[10px] font-semibold text-[#9ca3af]">
                  {p.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">📖</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            How Bonuses Work
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {BONUS_STEPS.map((s) => (
            <div
              key={s.step}
              className="relative overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5"
            >
              <div className="pointer-events-none absolute -right-4 -top-4 text-7xl font-extrabold opacity-5">
                {s.step}
              </div>
              <div className="relative space-y-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient text-lg">
                  {s.emoji}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#22c55e]">
                  Step {s.step}
                </p>
                <h3 className="text-sm font-bold text-[#f0f0f0]">{s.title}</h3>
                <p className="text-xs leading-relaxed text-[#9ca3af]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-[#ffdf19]/20 bg-[#1b1c1e] px-4 py-3 text-center">
        <p className="text-xs font-semibold text-[#ffdf19]">
          ⚠️ Terms &amp; Conditions Apply
        </p>
        <p className="mt-1 text-[11px] text-[#9ca3af]">
          All bonuses are subject to minimum deposit, rollover requirements and maximum payout
          limits. Please read the full terms for each promotion. 18+ Only. Please gamble
          responsibly.
        </p>
      </div>

      <Footer />
    </div>
  );
}
