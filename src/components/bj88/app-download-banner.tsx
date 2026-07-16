"use client";

import Link from "next/link";

const FEATURES = [
  "Biometric Login",
  "One-Tap Betting",
  "Instant Deposits",
  "Live Streaming",
];

const QR_PATTERN: number[] = [
  1, 1, 1, 0, 1, 0, 1, 1,
  1, 0, 1, 1, 1, 1, 0, 1,
  0, 1, 0, 1, 0, 1, 1, 0,
  1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 1, 1, 0, 1, 0, 0,
  1, 1, 0, 1, 1, 0, 1, 1,
  0, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 0, 1, 1, 0,
];

export function AppDownloadBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#008d5b]/30 bg-gradient-to-br from-[#008d5b] via-[#006640] to-[#0d1f17] p-6 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,223,25,0.12), transparent 50%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="max-w-md space-y-3">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">
            Download the BSL Gaming App
          </h3>
          <p className="text-sm text-white/80">
            Get the ultimate gaming experience on your phone
          </p>
          <ul className="grid grid-cols-2 gap-1.5 pt-1">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-center gap-1.5 text-xs font-medium text-white/90"
              >
                <span className="text-[#ffdf19]">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            <Link
              href="/download/android"
              className="btn-primary rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
            >
              📱 Download for Android
            </Link>
            <Link
              href="/download/ios"
              className="rounded-lg border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              🍎 Download for iOS
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="rounded-xl border-2 border-white/20 bg-white p-2 shadow-lg">
            <div
              className="grid grid-cols-8 gap-0"
              style={{ width: "128px", height: "128px" }}
            >
              {QR_PATTERN.map((cell, i) => (
                <div
                  key={i}
                  className={cell === 1 ? "bg-[#121315]" : "bg-white"}
                />
              ))}
            </div>
          </div>
          <p className="text-xs font-semibold text-white/90">Scan to install</p>
        </div>
      </div>
    </div>
  );
}
