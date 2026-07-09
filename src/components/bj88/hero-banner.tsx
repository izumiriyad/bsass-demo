"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  gradient: [string, string];
  emoji: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "Welcome Bonus",
    title: "100% Bonus up to ৳10,000",
    gradient: ["#7c3aed", "#db2777"],
    emoji: "🎁",
    href: "/promotions/welcome",
  },
  {
    eyebrow: "Cricket Special",
    title: "BPL T20 — Best Odds in Bangladesh",
    gradient: ["#0c4a6e", "#0369a1"],
    emoji: "🏏",
    href: "/cricket/bpl",
  },
  {
    eyebrow: "Live Casino",
    title: "Real Dealers, Real Thrills — 24/7",
    gradient: ["#7c0000", "#991b1b"],
    emoji: "🃏",
    href: "/casino",
  },
  {
    eyebrow: "Mega Jackpot",
    title: "Win the Progressive Jackpot",
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
      <div className="relative h-[200px] sm:h-[280px] md:h-[340px]">
        {SLIDES.map((slide, i) => (
          <Link
            key={i}
            href={slide.href}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `linear-gradient(115deg, ${slide.gradient[0]}, ${slide.gradient[1]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-2 p-6 md:p-10 md:max-w-[65%]">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                {slide.eyebrow}
              </span>
              <h2 className="text-xl font-extrabold text-white drop-shadow sm:text-3xl md:text-4xl">
                {slide.title}
              </h2>
              <span className="mt-2 inline-block w-fit rounded-md bg-white/90 px-4 py-1.5 text-sm font-bold text-black hover:bg-white">
                Play Now →
              </span>
            </div>
            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[8rem] opacity-30 drop-shadow-2xl sm:block">
              {slide.emoji}
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70"
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-[#f0b429]" : "w-1.5 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
