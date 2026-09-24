import type { MetadataRoute } from "next";
import { site, hero, about, journeyData, journeyPage } from "@/lib/content";

// Real pages only — #fragments are ignored by crawlers. Each lists its key images
// for Google Images; lastModified tracks each build/deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (src: string) => `${site.url}${encodeURI(src)}`;
  const milestoneImages = journeyData
    .flatMap((y) => y.milestones)
    .flatMap((m) => (m.type === "image" && m.imageUrl ? [m.imageUrl] : []));

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [abs(hero.portrait)],
    },
    {
      url: `${site.url}${journeyPage.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [about.portrait, ...milestoneImages].map(abs),
    },
  ];
}
