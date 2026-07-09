import Link from "next/link";
import type { ReactNode } from "react";
import { Check } from "lucide-react";

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
      <div
        className="relative hidden flex-col justify-between overflow-hidden rounded-xl p-10 lg:flex"
        style={{ background: "linear-gradient(135deg, #713f12, #d97706)" }}
      >
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-3xl font-black text-black">bj</span>
          <span className="text-3xl font-black text-white">88</span>
        </Link>
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Bangladesh&apos;s #1 Gaming Platform
          </h2>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-lg text-white">
                <span className="flex size-6 items-center justify-center rounded-full bg-black/30">
                  <Check className="size-4 text-white" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/70">
          🔒 Bank-grade encryption · Provably fair games · BDT currency
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="flex items-center gap-0.5">
              <span className="text-3xl font-black text-[#f0b429]">bj</span>
              <span className="text-3xl font-black text-white">88</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          <div className="mt-6">{children}</div>
          <div className="mt-6 text-center text-sm text-gray-400">{footer}</div>
        </div>
      </div>
    </div>
  );
}
