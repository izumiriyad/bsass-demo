"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="animate-scale-in mb-2 w-56 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-3 shadow-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#f0f0f0]">Need Help?</p>
          <Link
            href="/support"
            className="flex items-center gap-2 rounded-lg bg-[#008d5b]/15 px-3 py-2 text-sm font-semibold text-[#22c55e] transition hover:bg-[#008d5b]/25"
          >
            💬 Live Chat
          </Link>
          <Link
            href="https://wa.me/8801700000000"
            className="mt-1 flex items-center gap-2 rounded-lg bg-[#22c55e]/15 px-3 py-2 text-sm font-semibold text-[#22c55e] transition hover:bg-[#22c55e]/25"
          >
            📱 WhatsApp
          </Link>
          <Link
            href="https://t.me/BSLGamingOfficial"
            className="mt-1 flex items-center gap-2 rounded-lg bg-[#0c4a6e]/30 px-3 py-2 text-sm font-semibold text-[#3b82f6] transition hover:bg-[#0c4a6e]/50"
          >
            📨 Telegram
          </Link>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition animate-pulse-glow",
          open ? "bg-[#ef4444] text-white" : "bg-[#008d5b] text-white"
        )}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 3v-3H5a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="9" r="0.8" fill="currentColor" />
            <circle cx="11" cy="9" r="0.8" fill="currentColor" />
            <circle cx="14" cy="9" r="0.8" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
