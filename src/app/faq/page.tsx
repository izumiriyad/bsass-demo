import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/catalog";
import { FAQAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: `FAQ — ${SITE.name} Bangladesh`,
  description: `Frequently asked questions about ${SITE.name} Bangladesh — deposits, withdrawals, bonuses, account security and more.`,
};

const FAQS = [
  {
    q: "How do I deposit money into my BJ88 account?",
    a: "Log in, go to Dashboard → Wallet, choose a payment method (bKash, Nagad, Rocket, bank transfer or crypto), enter the amount and confirm. Deposits are instant and the minimum is ৳100. There are no deposit fees.",
  },
  {
    q: "How long do withdrawals take?",
    a: "bKash, Nagad, Rocket and crypto withdrawals are processed instantly. Bank transfers take 1–3 hours. The minimum withdrawal is ৳200 and you can only withdraw up to your available balance.",
  },
  {
    q: "What bonuses are available for new players?",
    a: "Every new player receives a ৳500 welcome credit on sign-up, plus a 100% first-deposit bonus up to ৳10,000. We also offer daily reload bonuses, sports cashback and free spins on selected slots.",
  },
  {
    q: "Is my account and money safe on BJ88?",
    a: "Yes. We use 256-bit SSL encryption for all transactions, provably fair algorithms for our games, and your funds are held in segregated accounts. You can also enable two-factor authentication from your Security settings.",
  },
  {
    q: "Can I play with BDT (Bangladeshi Taka)?",
    a: "Absolutely. BJ88 is built for Bangladesh — your account, deposits, withdrawals and all bets are in BDT. No currency conversion fees, no surprises.",
  },
  {
    q: "What games can I play on BJ88?",
    a: "Over 2,500 games across slots, live casino, sports betting, cricket, fishing, table games, lottery, arcade and crash games — from top providers like Pragmatic Play, Evolution, JILI, PG Soft and Spribe.",
  },
  {
    q: "How do I join the VIP Club?",
    a: "You're automatically enrolled in the VIP program from your first bet. Climb five tiers — Bronze, Silver, Gold, Platinum and Diamond — based on your monthly betting volume to unlock higher cashback, birthday bonuses and a dedicated VIP host.",
  },
  {
    q: "Is BJ88 legal in Bangladesh?",
    a: "BJ88 operates under an international gaming license. Players must be 18 or older. We encourage all players to review local regulations and to play responsibly.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-3 py-4">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Frequently Asked Questions</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Everything you need to know about playing on {SITE.name} Bangladesh.
        </p>
      </div>

      <FAQAccordion items={FAQS} />

      <div className="mt-6 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5 text-center">
        <p className="text-sm text-[#c8c8d6]">Still have questions?</p>
        <Link
          href="/support"
          className="mt-2 inline-block rounded-full px-5 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
