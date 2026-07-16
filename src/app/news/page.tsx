import type { Metadata } from "next";
import { SITE } from "@/lib/catalog";
import { NewsList } from "./news-list";

export const metadata: Metadata = { title: "News & Updates" };

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
      <NewsList />
    </div>
  );
}
