import { TRUST_BADGES } from "@/lib/catalog";

export function TrustBadges() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Licensed &amp; Secure
        </span>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {TRUST_BADGES.map((b) => (
          <div
            key={b.label}
            className="flex min-w-[140px] flex-1 items-center gap-2.5 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-3 py-2.5 transition hover:border-[#383b3f] sm:flex-none"
          >
            <span className="text-2xl">{b.emoji}</span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-[#f0f0f0]">
                {b.label}
              </p>
              <p className="truncate text-[10px] text-[#9ca3af]">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
