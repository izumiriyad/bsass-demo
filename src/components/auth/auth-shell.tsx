import type { ReactNode } from "react";
import { Check } from "lucide-react";

const BENEFITS = [
  "2,500+ games from top providers",
  "Instant payouts via bKash, Nagad & Rocket",
  "Daily bonuses and exclusive promotions",
  "24/7 dedicated Bangladesh support",
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
  footer?: ReactNode;
}) {
  return (
    <div className="flex min-h-[100dvh]" style={{ background: "#0d0d18" }}>
      <div
        className="relative hidden w-1/2 flex-col justify-between overflow-hidden p-10 lg:flex"
        style={{ background: "linear-gradient(160deg, #713f12, #d97706)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 90%, rgba(0,0,0,0.4), transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <a href="/" className="select-none">
            <span className="text-3xl font-black italic text-white">bj</span>
            <span className="text-3xl font-black italic text-black/80">88</span>
          </a>
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <h1 className="max-w-md text-4xl font-black leading-tight text-white">
            Bangladesh&apos;s #1 Gaming Platform
          </h1>
          <ul className="flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm font-medium text-white/90"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-xs text-white/70">
          <span className="rounded bg-white/15 px-2 py-1 font-semibold">
            🔒 256-bit SSL Encrypted
          </span>
          <span className="rounded bg-white/15 px-2 py-1 font-semibold">
            18+ Licensed
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-5 py-10 lg:w-1/2">
        <div className="w-full max-w-sm">
          <a
            href="/"
            className="mb-8 flex justify-center lg:hidden"
            aria-label="BJ88 home"
          >
            <span className="text-3xl font-black italic text-[#f5a623]">bj</span>
            <span className="text-3xl font-black italic text-white">88</span>
          </a>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-white">{title}</h2>
            <p className="mt-1.5 text-sm text-[#8a8aa0]">{subtitle}</p>
          </div>

          {children}

          {footer && (
            <div className="mt-6 text-center text-sm text-[#8a8aa0]">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
