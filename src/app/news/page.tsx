import type { Metadata } from "next";
import Link from "next/link";
import { NEWS_ARTICLES, SITE } from "@/lib/catalog";

export const metadata: Metadata = { title: "News & Updates" };

const CATEGORIES = [
  "All",
  "Sponsorship",
  "Games",
  "Tournament",
  "Payment",
  "Promotion",
  "Referral",
];

const CATEGORY_COLORS: Record<string, string> = {
  Sponsorship: "bg-[#0c4a6e] text-[#3b82f6]",
  Games: "bg-[#2e1065] text-[#a855f7]",
  Tournament: "bg-[#7c0000] text-[#f87171]",
  Payment: "bg-[#7c2d12] text-[#fb923c]",
  Promotion: "bg-[#065f46] text-[#22c55e]",
  Referral: "bg-[#4c1d95] text-[#c084fc]",
};

export default function NewsPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-xl">📰</span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
          News &amp; Updates
        </h1>
      </div>
      <p className="max-w-2xl text-sm text-[#9ca3af]">
        Stay up to date with the latest news, sponsorships, game releases,
        tournaments, and promotions from {SITE.name}.
      </p>

      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            className="shrink-0 rounded-full border border-[#2a2c30] bg-[#1b1c1e] px-4 py-1.5 text-xs font-semibold text-[#9ca3af] transition hover:border-[#008d5b]/50 hover:text-[#22c55e]"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {NEWS_ARTICLES.map((a) => {
          const catColor =
            CATEGORY_COLORS[a.category] ?? "bg-[#242628] text-[#9ca3af]";
          return (
            <Link
              key={a.id}
              href={`/news/${a.id}`}
              className="group flex flex-col gap-3 rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5 transition hover:-translate-y-0.5 hover:border-[#383b3f] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-5xl">{a.emoji}</span>
                <span
                  className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${catColor}`}
                >
                  {a.category}
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-bold leading-snug text-[#f0f0f0] group-hover:text-[#ffdf19]">
                  {a.title}
                </h2>
                <p className="text-xs leading-relaxed text-[#9ca3af]">
                  {a.excerpt}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-[#2a2c30] pt-3">
                <span className="text-[10px] text-[#6b7280]">
                  {new Date(a.date).toLocaleDateString("en-BD", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-xs font-semibold text-[#22c55e] transition group-hover:text-[#00a86d]">
                  Read More →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
