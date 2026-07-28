import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/data";

const siteUrl = "https://studio-lueur.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/portfolio",
    "/gallery",
    "/services",
    "/tarifs",
    "/a-propos",
    "/contact",
    "/faq",
    "/confidentialite",
    "/conditions",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes = portfolioProjects.map((p) => ({
    url: `${siteUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
