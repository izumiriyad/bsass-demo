import Link from "next/link";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Logo } from "@/components/site/logo";

const BENEFITS = [
  "2,500+ slots, live & arcade games",
  "Instant payouts — average 3 minutes",
  "Generous bonuses & daily cashback",
  "24/7 human customer support",
];

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-stretch gap-4 p-4 lg:grid-cols-2 lg:p-8">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-violet-700/40 via-fuchsia-700/25 to-cyan-700/25 p-10 lg:flex">
        <Logo />
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">
            Where every game comes alive
          </h2>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-lg">
                <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="size-4 text-emerald-400" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/70">
          🔒 Bank-grade encryption · Provably fair games
        </p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}
