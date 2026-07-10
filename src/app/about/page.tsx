import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `About Us — ${SITE.name} Bangladesh`,
  description: `Learn about ${SITE.name}, Bangladesh's premier online gaming platform. 2,500+ games, instant BDT payouts, and 24/7 local support.`,
};

const STATS = [
  { emoji: "🎮", value: "2,500+", label: "Games Available" },
  { emoji: "👥", value: "1.2M+", label: "Happy Players" },
  { emoji: "⚡", value: "Instant", label: "BDT Payouts" },
  { emoji: "🕐", value: "24/7", label: "Bangladesh Support" },
];

const FEATURES = [
  { emoji: "🎰", title: "Premium Game Library", body: "Slots, live casino, sports betting, fishing, crash games and more from world-class providers like Pragmatic Play, Evolution, JILI and PG Soft." },
  { emoji: "💳", title: "Local Payment Methods", body: "Deposit and withdraw instantly in BDT using bKash, Nagad, Rocket, bank transfer or crypto — no hidden fees, ever." },
  { emoji: "🎁", title: "Generous Bonuses", body: "Start with a ৳500 welcome credit and a 100% first-deposit bonus up to ৳10,000, plus daily reloads and cashback." },
  { emoji: "🛡️", title: "Secure & Fair", body: "256-bit SSL encryption, provably fair games and a fully licensed platform built for Bangladeshi players." },
  { emoji: "🏏", title: "Cricket First", body: "Bet live on BPL, IPL, ICC events and more with competitive odds and in-play markets tailored for Bangladesh." },
  { emoji: "👑", title: "VIP Rewards", body: "Climb five VIP tiers — Bronze to Diamond — for escalating cashback, birthday bonuses and a dedicated host." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-3 py-4">
      <section
        className="relative overflow-hidden rounded-2xl border border-[#f5a623]/30 p-8 text-center"
        style={{ background: "linear-gradient(135deg, #1e1b4b, #4c1d95)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(245,166,35,0.25), transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <span className="text-4xl">🇧🇩</span>
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            About {SITE.name} Bangladesh
          </h1>
          <p className="max-w-2xl text-sm text-white/80">
            {SITE.name} is Bangladesh&apos;s premier online gaming platform,
            built by Bangladeshis, for Bangladeshis. From cricket betting to
            live casino and the latest slots, we bring the world&apos;s best
            games to your fingertips — with instant BDT payouts and 24/7 local
            support.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-6">
        <h2 className="mb-3 text-xl font-black text-white">Our Story</h2>
        <p className="text-sm leading-relaxed text-[#c8c8d6]">
          {SITE.name} was founded with a single mission: to give Bangladeshi
          players a safe, fair and thrilling place to play online. We saw local
          players struggling with international platforms that didn&apos;t
          support BDT, charged hidden fees and offered no local support — so we
          built the opposite. Every payment runs through bKash, Nagad and
          Rocket. Every agent speaks your language. Every game is provably fair
          and licensed. Today, over a million players trust {SITE.name} as
          their home for online gaming in Bangladesh.
        </p>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5 text-center"
          >
            <span className="text-3xl">{stat.emoji}</span>
            <p className="mt-2 text-2xl font-black text-[#f5a623]">{stat.value}</p>
            <p className="text-xs text-[#8a8aa0]">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-xl font-black text-white">Why {SITE.name}?</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5"
            >
              <span className="text-3xl">{feat.emoji}</span>
              <h3 className="mt-2.5 text-sm font-bold text-white">{feat.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#c8c8d6]">
                {feat.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-[#f5a623]/30 p-6 text-center"
        style={{ background: "linear-gradient(135deg, #713f12, #d97706)" }}
      >
        <h2 className="text-xl font-black text-white">Ready to play?</h2>
        <p className="max-w-md text-sm text-white/80">
          Join {SITE.name} today and claim your ৳500 welcome credit plus a 100%
          bonus on your first deposit.
        </p>
        <div className="flex gap-3">
          <Link
            href="/register"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Sign Up Now
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </section>
    </div>
  );
}
