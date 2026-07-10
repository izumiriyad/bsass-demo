"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  emoji: string;
  gradient: [string, string];
}

const SLIDES: Slide[] = [
  {
    eyebrow: "WELCOME BONUS",
    title: "100% up to ৳10,000",
    cta: "Claim Now",
    href: "/promotions",
    emoji: "🎁",
    gradient: ["#6d28d9", "#be185d"],
  },
  {
    eyebrow: "SLOTS TOURNAMENT",
    title: "Win ৳1,000,000",
    cta: "Join Tournament",
    href: "/popular",
    emoji: "🎰",
    gradient: ["#2e1065", "#5b21b6"],
  },
  {
    eyebrow: "CRICKET LIVE",
    title: "Bet on BPL T20",
    cta: "Bet Now",
    href: "/cricket",
    emoji: "🏏",
    gradient: ["#065f46", "#0d9488"],
  },
  {
    eyebrow: "JACKPOT",
    title: "Mega Win Awaits",
    cta: "Play Now",
    href: "/slots",
    emoji: "💰",
    gradient: ["#7c2d12", "#d97706"],
  },
];

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl h-[220px] sm:h-[300px] lg:h-[360px]">
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            className={cn(
              "absolute inset-0 flex items-center transition-opacity duration-500",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            style={{
              background: `linear-gradient(120deg, ${s.gradient[0]}, ${s.gradient[1]})`,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 60%)",
              }}
            />
            <div className="relative z-10 flex w-full items-center justify-between px-5 sm:px-8 lg:px-12">
              <div className="max-w-[60%]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 sm:text-xs">
                  {s.eyebrow}
                </span>
                <h2 className="mt-1 text-xl font-black leading-tight text-white drop-shadow-md sm:text-3xl lg:text-4xl">
                  {s.title}
                </h2>
                <span
                  className="mt-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold text-black sm:text-sm"
                  style={{ background: "#f5a623" }}
                >
                  {s.cta} →
                </span>
              </div>
              <span className="text-5xl drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)] sm:text-7xl lg:text-8xl">
                {s.emoji}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-5 bg-[#f5a623]" : "w-1.5 bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
