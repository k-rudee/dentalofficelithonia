import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const pages = [
    "",
    "/about",
    "/services",
    "/new-patients",
    "/insurance",
    "/reviews",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/blog",
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);
  return [...pages, ...serviceRoutes, ...blogRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-09-16"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
