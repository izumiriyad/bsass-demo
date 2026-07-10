import type { Metadata } from "next";
import { WinnersTicker } from "@/components/bj88/tickers";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "VIP Club — BJ88 Bangladesh",
  description:
    "Join the BJ88 Bangladesh VIP Club. Five tiers — Bronze, Silver, Gold, Platinum and Diamond — with exclusive cashback, perks and rewards.",
};

interface VIPTier {
  name: string;
  emoji: string;
  threshold: string;
  cashback: string;
  gradient: [string, string];
  perks: string[];
}

const VIP_TIERS: VIPTier[] = [
  {
    name: "Bronze",
    emoji: "🥉",
    threshold: "৳0",
    cashback: "1%",
    gradient: ["#713f12", "#92400e"],
    perks: [
      "Welcome to the VIP program",
      "1% weekly cashback",
      "Birthday bonus ৳500",
      "Standard support response",
    ],
  },
  {
    name: "Silver",
    emoji: "🥈",
    threshold: "৳50,000",
    cashback: "3%",
    gradient: ["#475569", "#334155"],
    perks: [
      "3% weekly cashback",
      "Birthday bonus ৳1,000",
      "Priority support",
      "Exclusive weekly reload bonus",
    ],
  },
  {
    name: "Gold",
    emoji: "🥇",
    threshold: "৳200,000",
    cashback: "5%",
    gradient: ["#b45309", "#d97706"],
    perks: [
      "5% weekly cashback",
      "Birthday bonus ৳2,500",
      "Dedicated account manager",
      "Monthly VIP tournament access",
      "Higher deposit limits",
    ],
  },
  {
    name: "Platinum",
    emoji: "💠",
    threshold: "৳1,000,000",
    cashback: "8%",
    gradient: ["#4338ca", "#6366f1"],
    perks: [
      "8% weekly cashback",
      "Birthday bonus ৳5,000",
      "Personal VIP host",
      "Exclusive high-roller tables",
      "Custom withdrawal limits",
      "Invitation to VIP-only events",
    ],
  },
  {
    name: "Diamond",
    emoji: "💎",
    threshold: "৳5,000,000",
    cashback: "12%",
    gradient: ["#1e1b4b", "#5b21b6"],
    perks: [
      "12% weekly cashback",
      "Birthday bonus ৳10,000",
      "24/7 personal VIP concierge",
      "Tailored promotions & bonuses",
      "No maximum withdrawal limit",
      "Luxury gifts & travel rewards",
      "Invitation to exclusive BJ88 gala",
    ],
  },
];

export default function VIPPage() {
  return (
    <div className="mx-auto max-w-6xl px-3 py-3">
      <WinnersTicker />

      <section className="mt-4 overflow-hidden rounded-2xl border border-[#f5a623]/30 p-6 text-center" style={{ background: "linear-gradient(135deg, #1e1b4b, #4c1d95)" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(245,166,35,0.25), transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">👑</span>
          <h1 className="text-3xl font-black text-white sm:text-4xl">VIP Club</h1>
          <p className="max-w-xl text-sm text-white/80">
            Climb the ranks and unlock exclusive rewards. The more you play, the
            higher you go — earn cashback, bonuses and luxury perks at {SITE.name} Bangladesh.
          </p>
        </div>
      </section>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {VIP_TIERS.map((tier) => {
          const [c1, c2] = tier.gradient;
          return (
            <div
              key={tier.name}
              className="relative overflow-hidden rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${c1}22, ${c2}11)`,
                }}
              />
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                    }}
                  >
                    {tier.emoji}
                  </span>
                  <div>
                    <h2 className="text-lg font-black text-white">{tier.name}</h2>
                    <p className="text-[11px] text-[#8a8aa0]">
                      Threshold: {tier.threshold}
                    </p>
                  </div>
                  <span
                    className="ml-auto rounded-full px-2.5 py-1 text-xs font-bold text-black"
                    style={{ background: "#f5a623" }}
                  >
                    {tier.cashback} Cashback
                  </span>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {tier.perks.map((perk, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#c8c8d6]"
                    >
                      <span className="mt-0.5 shrink-0 text-[#f5a623]">✦</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-6 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4 text-center">
        <p className="text-xs text-[#8a8aa0]">
          VIP status is reviewed monthly based on your total betting volume in BDT.
          All cashback is credited every Monday. {SITE.name} reserves the right to
          modify the VIP program at any time. 18+ — please play responsibly.
        </p>
      </section>
    </div>
  );
}
