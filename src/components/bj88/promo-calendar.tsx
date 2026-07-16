import Link from "next/link";
import { PROMO_CALENDAR } from "@/lib/catalog";

export function PromoCalendar() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-base sm:text-lg">📅</span>
        <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Promotion Calendar
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PROMO_CALENDAR.map((p) => {
          const isActive = p.status === "active";
          return (
            <div
              key={p.title}
              className="flex flex-col gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:border-[#383b3f]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded bg-[#242628] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#9ca3af]">
                  {p.category}
                </span>
                <span className="text-3xl">{p.emoji}</span>
              </div>
              <h3 className="text-sm font-bold leading-tight text-[#f0f0f0]">
                {p.title}
              </h3>
              <p className="text-xl font-extrabold text-[#ffdf19] sm:text-2xl">
                {p.prize}
              </p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#9ca3af]">
                  🗓 {p.dateRange}
                </span>
                <span
                  className={
                    isActive
                      ? "rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold text-[#22c55e]"
                      : "rounded border border-[#ffdf19]/50 px-2 py-0.5 text-[10px] font-bold text-[#ffdf19]"
                  }
                >
                  {isActive ? "ACTIVE" : "UPCOMING"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          href="/promotions"
          className="text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          View All Promotions →
        </Link>
      </div>
    </section>
  );
}
