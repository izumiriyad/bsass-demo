import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Responsible Gaming",
  description:
    "Tools and resources to help you play responsibly, including deposit limits, session reminders, and self-exclusion.",
};

const TOOLS = [
  { icon: "💸", title: "Deposit limits", text: "Set daily, weekly, or monthly caps on how much you can deposit." },
  { icon: "⏰", title: "Reality checks", text: "Periodic reminders showing how long you've been playing and your net spend." },
  { icon: "🚪", title: "Self-exclusion", text: "Take a break for a set period — from 24 hours to permanently." },
  { icon: "🕐", title: "Time-outs", text: "Pause your account temporarily to cool off when you need to." },
];

const TIPS = [
  "Only play with money you can afford to lose.",
  "Set a budget and stick to it.",
  "Take regular breaks.",
  "Never chase your losses.",
  "Treat gaming as entertainment, not a way to make money.",
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <PageHero
        eyebrow="Play safe"
        title={
          <span className="flex items-center gap-3">
            <ShieldAlert className="size-9 text-amber-400" /> Responsible Gaming
          </span>
        }
        description="Gaming should always be fun. We provide tools and resources to help you stay in control."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <Card key={t.title} className="bg-card/50">
              <CardContent className="p-5">
                <div className="text-3xl">{t.icon}</div>
                <h3 className="mt-2 font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card/50 p-6">
            <h2 className="text-xl font-bold">Tips for staying in control</h2>
            <ul className="mt-4 space-y-2">
              {TIPS.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-emerald-400">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/dashboard/profile">Manage your limits</Link>
            </Button>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
            <h2 className="text-xl font-bold">Need help?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If gambling is affecting your life or someone you know, free and
              confidential help is available. You are not alone.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  BeGambleAware.org →
                </a>
              </li>
              <li>
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GamCare →
                </a>
              </li>
              <li>
                <a
                  href="https://www.gamblersanonymous.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Gamblers Anonymous →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border/60 bg-card/40 p-5 text-sm text-muted-foreground">
          Playverse is a fictional, demonstration platform for educational
          purposes and uses play credits only. No real-money gambling takes
          place. Must be 18+.
        </div>
      </section>
    </>
  );
}
