import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trust-estates.vercel.app";
  const now = new Date();
  const pages = ["", "/properties", "/lands", "/buildings", "/investments", "/sell", "/invest", "/about", "/diaspora", "/process", "/faq", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...properties.map((p) => ({ url: `${base}/properties/${p.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
