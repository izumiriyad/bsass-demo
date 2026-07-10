"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  emoji: string;
  c1: string;
  c2: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "WELCOME BONUS",
    title: "100% Bonus up to ৳10,000",
    cta: "Claim Now",
    href: "/promotions",
    emoji: "🎁",
    c1: "#008d5b",
    c2: "#006640",
  },
  {
    eyebrow: "CRICKET",
    title: "Bet on BPL T20 Live",
    cta: "Bet Now",
    href: "/cricket",
    emoji: "🏏",
    c1: "#0c4a6e",
    c2: "#1d4ed8",
  },
  {
    eyebrow: "SLOTS",
    title: "Free Spins Every Day",
    cta: "Play Slots",
    href: "/slots",
    emoji: "🎰",
    c1: "#2e1065",
    c2: "#5b21b6",
  },
  {
    eyebrow: "COCKFIGHTING",
    title: "Live SV388 Derby",
    cta: "Watch Live",
    href: "/cockfighting",
    emoji: "🐓",
    c1: "#7c0000",
    c2: "#991b1b",
  },
];

export function HeroBanner() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[300px] lg:h-[360px]">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          style={{
            background: `linear-gradient(135deg, ${slide.c1}, ${slide.c2})`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 75% 50%, rgba(255,255,255,0.15), transparent 60%)",
            }}
          />
          <div className="relative flex h-full items-center justify-between px-6 sm:px-10 lg:px-16">
            <div className="max-w-[60%] space-y-2 sm:space-y-3">
              <p className="text-xs font-bold tracking-widest text-[#ffdf19] sm:text-sm">
                {slide.eyebrow}
              </p>
              <h2 className="text-xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                {slide.title}
              </h2>
              <Link
                href={slide.href}
                className="btn-primary inline-block rounded-lg px-4 py-2 text-xs font-semibold sm:px-6 sm:py-2.5 sm:text-sm"
              >
                {slide.cta}
              </Link>
            </div>
            <div className="flex shrink-0 items-center justify-center">
              <span
                className="text-6xl sm:text-8xl lg:text-9xl"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))" }}
              >
                {slide.emoji}
              </span>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 sm:h-10 sm:w-10"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 3L5 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 sm:h-10 sm:w-10"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-5 bg-[#ffdf19]" : "w-1.5 bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
