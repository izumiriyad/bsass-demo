"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  cta: string;
  gradient: [string, string];
  emoji: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "Welcome Bonus",
    title: "100% Bonus up to ৳10,000",
    cta: "Claim Now",
    gradient: ["#6d28d9", "#be185d"],
    emoji: "🎁",
    href: "/promotions/welcome",
  },
  {
    eyebrow: "BPL T20 Cricket",
    title: "Best Odds on Every Match",
    cta: "Bet Now",
    gradient: ["#0c4a6e", "#0369a1"],
    emoji: "🏏",
    href: "/cricket/bpl",
  },
  {
    eyebrow: "Live Casino",
    title: "Real Dealers · 24/7 Action",
    cta: "Play Live",
    gradient: ["#7c0000", "#991b1b"],
    emoji: "🃏",
    href: "/casino",
  },
  {
    eyebrow: "Mega Jackpot Slots",
    title: "Win the Progressive Jackpot",
    cta: "Spin Now",
    gradient: ["#713f12", "#d97706"],
    emoji: "💎",
    href: "/slots",
  },
];

export function HeroBanner() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) => setIndex((p) => (p + dir + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-[220px] sm:h-[300px] lg:h-[360px]">
        {SLIDES.map((slide, i) => (
          <Link
            key={i}
            href={slide.href}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `linear-gradient(110deg, ${slide.gradient[0]} 0%, ${slide.gradient[1]} 100%)` }}
            />
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `radial-gradient(ellipse 50% 60% at 80% 50%, rgba(255,255,255,0.2), transparent)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-center gap-2 p-6 md:p-10 lg:max-w-[60%]">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                {slide.eyebrow}
              </span>
              <h2 className="text-xl font-black text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
                {slide.title}
              </h2>
              <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-white px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105">
                {slide.cta} →
              </span>
            </div>

            {/* Large decorative emoji */}
            <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10rem] opacity-20 drop-shadow-2xl md:block lg:text-[14rem]">
              {slide.emoji}
            </div>
          </Link>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-[#f5a623]" : "w-1.5 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
