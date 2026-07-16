import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/catalog";

interface NewsSectionProps {
  limit?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  Sponsorship: "bg-[#0c4a6e] text-[#3b82f6]",
  Games: "bg-[#2e1065] text-[#a855f7]",
  Tournament: "bg-[#7c0000] text-[#f87171]",
  Payment: "bg-[#7c2d12] text-[#fb923c]",
  Promotion: "bg-[#065f46] text-[#22c55e]",
  Referral: "bg-[#4c1d95] text-[#c084fc]",
};

export function NewsSection({ limit = 4 }: NewsSectionProps) {
  const articles = NEWS_ARTICLES.slice(0, limit);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-base sm:text-lg">📰</span>
          <span className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            News &amp; Updates
          </span>
        </div>
        <Link
          href="/news"
          className="shrink-0 text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          See All →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {articles.map((a) => {
          const catColor =
            CATEGORY_COLORS[a.category] ?? "bg-[#242628] text-[#9ca3af]";
          return (
            <Link
              key={a.id}
              href={`/news/${a.id}`}
              className="group flex gap-3 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:-translate-y-0.5 hover:border-[#383b3f] hover:shadow-lg"
            >
              <span className="shrink-0 text-4xl">{a.emoji}</span>
              <div className="min-w-0 flex-1 space-y-1.5">
                <span
                  className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${catColor}`}
                >
                  {a.category}
                </span>
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#f0f0f0] group-hover:text-[#ffdf19]">
                  {a.title}
                </h3>
                <p className="line-clamp-2 text-xs text-[#9ca3af]">
                  {a.excerpt}
                </p>
                <p className="text-[10px] text-[#6b7280]">
                  {new Date(a.date).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
