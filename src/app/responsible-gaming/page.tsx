import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `Responsible Gaming — ${SITE.name} Bangladesh`,
  description: `${SITE.name} is committed to responsible gaming. Learn about self-exclusion, deposit limits and where to get help in Bangladesh.`,
};

const TIPS = [
  { emoji: "⏱️", title: "Set Time Limits", body: "Decide how long you'll play before you start, and stick to it. Take regular breaks." },
  { emoji: "💰", title: "Set a Budget", body: "Only gamble with money you can afford to lose. Never chase losses or borrow to play." },
  { emoji: "🚫", title: "Don't Chase Losses", body: "Losing is part of the game. Trying to win back losses usually leads to bigger losses." },
  { emoji: "📵", title: "Avoid Emotional Play", body: "Don't gamble when you're upset, stressed or under the influence of alcohol." },
];

const TOOLS = [
  { emoji: "📉", title: "Deposit Limits", body: "Set daily, weekly or monthly caps on how much you can deposit." },
  { emoji: "⏸️", title: "Self-Exclusion", body: "Temporarily or permanently block access to your account." },
  { emoji: "🕐", title: "Reality Checks", body: "Get reminders of how long you've been playing and how much you've spent." },
  { emoji: "📊", title: "Transaction History", body: "Review all your deposits, withdrawals and bets anytime in your dashboard." },
];

const HELPLINES = [
  { name: "BJ88 Self-Exclusion", detail: SITE.supportEmail, note: "Email us to self-exclude" },
  { name: "Bangladesh Helpline", detail: "999 (National)", note: "National emergency helpline" },
  { name: "GamCare", detail: "www.gamcare.org.uk", note: "International support & advice" },
];

export default function ResponsibleGamingPage() {
  return (
    <div className="mx-auto max-w-4xl px-3 py-4">
      <section
        className="relative overflow-hidden rounded-2xl border border-[#f5a623]/30 p-6 text-center"
        style={{ background: "linear-gradient(135deg, #064e3b, #065f46)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.25), transparent 70%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">🛡️</span>
          <h1 className="text-2xl font-black text-white sm:text-3xl">
            Responsible Gaming
          </h1>
          <p className="max-w-xl text-sm text-white/80">
            {SITE.name} is committed to providing a safe and enjoyable
            environment. Gambling should be fun entertainment — never a way to
            make money or escape problems.
          </p>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-white">Play Smart</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4"
            >
              <span className="text-2xl">{tip.emoji}</span>
              <h3 className="mt-2 text-sm font-bold text-white">{tip.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#c8c8d6]">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-white">Tools We Offer</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4 text-center"
            >
              <span className="text-2xl">{tool.emoji}</span>
              <h3 className="mt-2 text-sm font-bold text-white">{tool.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#c8c8d6]">
                {tool.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-white">Get Help</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {HELPLINES.map((line) => (
            <div
              key={line.name}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4"
            >
              <h3 className="text-sm font-bold text-white">{line.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#f5a623]">
                {line.detail}
              </p>
              <p className="text-xs text-[#8a8aa0]">{line.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5 text-center">
        <p className="text-sm text-[#c8c8d6]">
          If you feel you may have a gambling problem, please contact our
          support team to self-exclude or set limits — we&apos;re here to help,
          judgement-free.
        </p>
        <Link
          href="/support"
          className="mt-3 inline-block rounded-full px-5 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
        >
          Contact Support
        </Link>
      </section>
    </div>
  );
}
