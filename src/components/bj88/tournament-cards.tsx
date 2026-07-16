import Link from "next/link";
import { TOURNAMENTS } from "@/lib/catalog";

export function TournamentSection() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">🏆</span>
          <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Tournaments &amp; Events
          </span>
        </div>
        <Link
          href="/tournaments"
          className="shrink-0 text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          See All →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TOURNAMENTS.map((t) => {
          const [c1, c2] = t.gradient;
          const isActive = t.status === "active";
          return (
            <div
              key={t.id}
              className="relative overflow-hidden rounded-xl border border-[#2a2c30] p-4"
              style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 90% 20%, rgba(255,255,255,0.15), transparent 55%)",
                }}
              />
              <span
                className={cnBadge(isActive)}
              >
                {isActive ? "ACTIVE" : "UPCOMING"}
              </span>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-6xl opacity-80 sm:text-7xl">
                {t.emoji}
              </span>

              <div className="relative flex h-full flex-col justify-between gap-3">
                <div className="space-y-1 pr-16">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                    {t.category}
                  </p>
                  <h3 className="text-base font-extrabold leading-tight text-white sm:text-lg">
                    {t.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-extrabold text-[#ffdf19] sm:text-2xl">
                    {t.prizePool}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/85">
                    <span className="flex items-center gap-1">
                      <span>👥</span>
                      <span className="font-semibold">
                        {new Intl.NumberFormat("en-BD").format(t.participants)}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      <span>Ends {t.endDate}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn-primary w-full rounded-lg px-4 py-2 text-xs font-semibold text-white sm:text-sm"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function cnBadge(isActive: boolean) {
  const base =
    "absolute left-3 top-3 rounded px-2 py-0.5 text-[10px] font-bold leading-none";
  return isActive
    ? `${base} bg-[#22c55e] text-white`
    : `${base} border border-[#ffdf19]/50 bg-black/30 text-[#ffdf19]`;
}
