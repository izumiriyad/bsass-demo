import { AMBASSADORS } from "@/lib/catalog";

export function AmbassadorShowcase() {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-base sm:text-lg">⭐</span>
        <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
          Meet Our Ambassadors
        </span>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {AMBASSADORS.map((a) => (
          <div
            key={a.name}
            className="flex w-[160px] shrink-0 flex-col items-center gap-2 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 text-center transition hover:border-[#383b3f] sm:w-[180px]"
          >
            <div className="rounded-full bg-gradient-to-br from-[#008d5b] to-[#ffdf19] p-[3px]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#242628] text-4xl">
                {a.emoji}
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-[#f0f0f0]">{a.name}</p>
              <p className="text-xs text-[#9ca3af]">{a.role}</p>
              <p className="text-xs text-[#6b7280]">{a.sport}</p>
            </div>
            <span className="rounded-full border border-[#008d5b]/40 bg-[#008d5b]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#22c55e]">
              {a.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
