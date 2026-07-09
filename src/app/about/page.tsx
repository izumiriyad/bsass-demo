import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { CtaBanner } from "@/components/site/cta-banner";
import { STATS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Playverse — our mission to deliver a fair, fast, and fun online gaming entertainment experience.",
};

const VALUES = [
  { icon: "🤝", title: "Player-first", text: "Every decision starts with what's best for our players." },
  { icon: "⚖️", title: "Fair play", text: "Audited RNGs and transparent, clearly-stated terms." },
  { icon: "🔒", title: "Security", text: "Bank-grade encryption protects your data and funds." },
  { icon: "⚡", title: "Speed", text: "Fast deposits, fast withdrawals, fast support." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Playverse"
        description="We built Playverse to be the fairest, fastest, and most fun online gaming entertainment platform — period."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/60 bg-card/50 p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Our mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              We believe online gaming should be exciting, transparent, and
              responsible. That&apos;s why we obsess over fast payouts,
              provably-fair games, and clear terms — so you can focus on having
              fun.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              From a massive library of slots and live tables to competitive
              sports odds and instant arcade games, there&apos;s something here
              for everyone. And our support team is available around the clock to
              help whenever you need it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border/60 bg-card/50 p-5"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-2 font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-4">
        <CtaBanner />
      </div>
    </>
  );
}
