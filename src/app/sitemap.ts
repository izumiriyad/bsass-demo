import type { MetadataRoute } from "next";
import { GAMES, PROMOTIONS, SITE } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/games",
    "/live-casino",
    "/sport",
    "/slots",
    "/promotions",
    "/vip",
    "/about",
    "/support",
    "/faq",
    "/responsible-gaming",
    "/terms",
    "/privacy",
    "/login",
    "/register",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((g) => ({
    url: `${base}/games/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const promoRoutes: MetadataRoute.Sitemap = PROMOTIONS.map((p) => ({
    url: `${base}/promotions/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...gameRoutes, ...promoRoutes];
}
