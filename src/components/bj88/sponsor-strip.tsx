import { SPONSORS } from "@/lib/catalog";

export function SponsorStrip() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-base sm:text-lg">🤝</span>
        <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Official Sponsors
        </span>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {SPONSORS.map((s) => (
          <div
            key={s.name}
            className="flex w-[170px] shrink-0 flex-col gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:border-[#383b3f] sm:w-[190px]"
          >
            <span className="w-fit rounded bg-[#008d5b]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#22c55e]">
              {s.league}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{s.emoji}</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#f0f0f0]">
                  {s.name}
                </p>
                <p className="text-xs font-semibold text-[#ffdf19]">{s.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
