"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JackpotTicker } from "./jackpot-ticker";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  gradient: [string, string];
  emoji: string;
  jackpot?: boolean;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "Welcome offer",
    title: "100% Bonus up to ₱20,000",
    desc: "Double your first deposit and explore 2,500+ games with twice the bankroll.",
    cta: "Claim bonus",
    href: "/promotions/welcome-bonus-100",
    gradient: ["#7c3aed", "#db2777"],
    emoji: "🎁",
  },
  {
    eyebrow: "Live casino",
    title: "Real Dealers, Real Thrills",
    desc: "HD live tables for roulette, baccarat, blackjack and more — 24/7.",
    cta: "Enter live casino",
    href: "/live-casino",
    gradient: ["#0ea5e9", "#7c3aed"],
    emoji: "🃏",
  },
  {
    eyebrow: "Mega jackpot",
    title: "Win the Progressive Jackpot",
    desc: "One lucky spin could change everything. The pot keeps climbing.",
    cta: "View jackpot games",
    href: "/games?category=slots",
    gradient: ["#f59e0b", "#ef4444"],
    emoji: "💎",
    jackpot: true,
  },
  {
    eyebrow: "VIP club",
    title: "Unlock Exclusive Rewards",
    desc: "Climb five VIP tiers for cashback, personal managers and faster payouts.",
    cta: "Explore VIP",
    href: "/vip",
    gradient: ["#14b8a6", "#0ea5e9"],
    emoji: "👑",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % SLIDES.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((p) => (p + dir + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-border/60"
      aria-roledescription="carousel"
      aria-label="Featured promotions"
    >
      <div className="relative h-[360px] sm:h-[420px]">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(115deg, ${slide.gradient[0]}, ${slide.gradient[1]})`,
              }}
            />
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.35),transparent_50%)]" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 p-7 sm:p-12 md:max-w-[62%]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Sparkles className="size-4" />
                {slide.eyebrow}
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl">
                {slide.title}
                {slide.jackpot && (
                  <span className="mt-2 block font-mono text-2xl text-amber-200 sm:text-3xl">
                    ₱<JackpotTicker />
                  </span>
                )}
              </h2>
              <p className="max-w-lg text-sm text-white/85 sm:text-base">
                {slide.desc}
              </p>
              <div>
                <Button asChild size="lg" className="mt-2 bg-white text-violet-700 hover:bg-white/90">
                  <Link href={slide.href}>
                    {slide.cta}
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10rem] opacity-30 drop-shadow-2xl sm:block">
              {slide.emoji}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-6 bg-white" : "w-2 bg-white/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
