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
  {
    eyebrow: "BETTING EXCHANGE",
    title: "Back & Lay on Cricket",
    cta: "Bet Now",
    href: "/betting-exchange",
    emoji: "🔄",
    c1: "#1e3a5f",
    c2: "#1d4ed8",
  },
  {
    eyebrow: "REFER & EARN",
    title: "Share ৳3,00,000 Monthly Pool",
    cta: "Join Now",
    href: "/referral",
    emoji: "🤝",
    c1: "#78350f",
    c2: "#b45309",
  },
  {
    eyebrow: "TOURNAMENTS",
    title: "Win from ৳10M Prize Pools",
    cta: "Compete",
    href: "/tournaments",
    emoji: "🏆",
    c1: "#065f46",
    c2: "#0d9488",
  },
];

const SLIDE_DURATION = 5000;

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const go = useCallback(
    (next: number) => {
      setIndex((next + SLIDES.length) % SLIDES.length);
      setProgressKey((k) => k + 1);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[300px] lg:h-[360px]">
      {SLIDES.map((slide, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
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
            <div
              className={cn(
                "pointer-events-none absolute inset-0 transition-transform duration-[5000ms] ease-out",
                isActive ? "scale-110" : "scale-100"
              )}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 70%)",
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
                  className="btn-premium inline-block rounded-lg px-4 py-2 text-xs font-semibold sm:px-6 sm:py-2.5 sm:text-sm"
                >
                  {slide.cta}
                </Link>
              </div>
              <div className="flex shrink-0 items-center justify-center overflow-hidden">
                <span
                  className={cn(
                    "text-6xl transition-transform duration-[5000ms] ease-out sm:text-8xl lg:text-9xl",
                    isActive ? "scale-110" : "scale-100"
                  )}
                  style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))" }}
                >
                  {slide.emoji}
                </span>
              </div>
            </div>
          </div>
        );
      })}

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

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5">
        <span className="text-[10px] font-semibold tabular-nums text-white/70">
          {index + 1} / {SLIDES.length}
        </span>
        <div className="flex items-center gap-1.5">
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

      <div className="absolute bottom-0 left-0 z-10 h-0.5 w-full bg-white/10">
        <div
          key={progressKey}
          className="h-full bg-gradient-to-r from-[#008d5b] to-[#22c55e]"
          style={{
            animation: `hero-progress ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
}
