import type { MetadataRoute } from "next";
import { SITE, ALL_GAMES, PROMOTIONS } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/games`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/popular`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/sports`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/cricket`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/cockfighting`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/slots`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/casino`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/table`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/fishing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/lottery`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/arcade`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/crash`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/promotions`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/vip`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/responsible-gaming`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE.url}/login`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/register`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const gamePages: MetadataRoute.Sitemap = ALL_GAMES.map((game) => ({
    url: `${SITE.url}/games/${game.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const promoPages: MetadataRoute.Sitemap = PROMOTIONS.map((promo) => ({
    url: `${SITE.url}/promotions/${promo.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...gamePages, ...promoPages];
}
