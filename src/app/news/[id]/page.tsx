import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES } from "@/lib/catalog";

const CATEGORY_COLORS: Record<string, string> = {
  Sponsorship: "bg-[#0c4a6e] text-[#3b82f6]",
  Games: "bg-[#2e1065] text-[#a855f7]",
  Tournament: "bg-[#7c0000] text-[#f87171]",
  Payment: "bg-[#7c2d12] text-[#fb923c]",
  Promotion: "bg-[#065f46] text-[#22c55e]",
  Referral: "bg-[#4c1d95] text-[#c084fc]",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = NEWS_ARTICLES.find((a) => a.id === id);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = NEWS_ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const catColor =
    CATEGORY_COLORS[article!.category] ?? "bg-[#242628] text-[#9ca3af]";

  const related = NEWS_ARTICLES.filter(
    (a) => a.id !== article!.id && a.category === article!.category
  );
  const fallback = NEWS_ARTICLES.filter((a) => a.id !== article!.id).slice(0, 3);
  const relatedArticles = related.length > 0 ? related.slice(0, 3) : fallback;

  const paragraphs = [
    article!.excerpt,
    `${article!.category} updates from BSL Gaming are designed to keep our community informed and engaged. This announcement is part of our ongoing commitment to bringing the best gaming experience to players across Bangladesh.`,
    `Stay connected with BSL Gaming for more ${article!.category.toLowerCase()}-related news, exclusive promotions, and exciting events. Follow us on Telegram, WhatsApp, and Facebook for real-time updates.`,
  ];

  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <section className="relative overflow-hidden rounded-2xl border border-[#2a2c30] bg-gradient-to-br from-[#1b1c1e] via-[#242628] to-[#1b1c1e] p-6 sm:p-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 0%, rgba(0,141,91,0.08), transparent 60%)",
          }}
        />
        <div className="relative space-y-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block rounded px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${catColor}`}
            >
              {article!.category}
            </span>
            <span className="text-xs text-[#6b7280]">
              {new Date(article!.date).toLocaleDateString("en-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-6xl sm:text-7xl">{article!.emoji}</span>
            <h1 className="text-xl font-extrabold leading-tight text-[#f0f0f0] sm:text-3xl">
              {article!.title}
            </h1>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-2xl space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-[#c0c0c0] sm:text-base"
          >
            {p}
          </p>
        ))}
      </article>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">📰</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Related Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {relatedArticles.map((a) => {
            const relColor =
              CATEGORY_COLORS[a.category] ?? "bg-[#242628] text-[#9ca3af]";
            return (
              <Link
                key={a.id}
                href={`/news/${a.id}`}
                className="group rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:border-[#383b3f]"
              >
                <div className="flex items-start gap-2">
                  <span className="text-2xl">{a.emoji}</span>
                  <div className="min-w-0 space-y-1.5">
                    <span
                      className={`inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${relColor}`}
                    >
                      {a.category}
                    </span>
                    <h3 className="line-clamp-2 text-xs font-bold leading-snug text-[#f0f0f0] group-hover:text-[#ffdf19]">
                      {a.title}
                    </h3>
                    <p className="text-[10px] text-[#6b7280]">
                      {new Date(a.date).toLocaleDateString("en-BD", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/news"
          className="text-xs font-semibold text-[#22c55e] transition hover:text-[#00a86d]"
        >
          ← Back to All News
        </Link>
      </div>
    </div>
  );
}
