import type { MetadataRoute } from "next";
import { site } from "@/content";
import { projectIds, serviceIds } from "@/content/structure";
import { localeMeta, publishedLocales, type Locale } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/dictionary";
import { path, type RouteKey } from "@/i18n/routes";

const url = (locale: Locale, key: RouteKey, slug?: string) => {
  const p = path(locale, key, slug);
  return p === "/" ? site.url : `${site.url}${p}`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const dicts = Object.fromEntries(
    await Promise.all(
      publishedLocales.map(async (locale) => [locale, await dictionaryFor(locale)] as const),
    ),
  ) as Record<Locale, Awaited<ReturnType<typeof dictionaryFor>>>;

  const alternates = (key: RouteKey, slugFor?: (locale: Locale) => string) => ({
    languages: Object.fromEntries(
      publishedLocales.map((locale) => [
        localeMeta[locale].hreflang,
        url(locale, key, slugFor?.(locale)),
      ]),
    ),
  });

  const entries: MetadataRoute.Sitemap = [];

  const pages: Array<{ key: RouteKey; priority: number }> = [
    { key: "home", priority: 1 },
    { key: "services", priority: 0.9 },
    { key: "projects", priority: 0.8 },
    { key: "contact", priority: 0.8 },
    { key: "process", priority: 0.7 },
    { key: "about", priority: 0.7 },
    { key: "faq", priority: 0.7 },
  ];

  for (const locale of publishedLocales) {
    for (const { key, priority } of pages) {
      entries.push({
        url: url(locale, key),
        lastModified: now,
        changeFrequency: "monthly",
        priority,
        alternates: alternates(key),
      });
    }

    for (const id of serviceIds) {
      entries.push({
        url: url(locale, "services", dicts[locale].slugs.services[id]),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: alternates("services", (l) => dicts[l].slugs.services[id]),
      });
    }

    for (const id of projectIds) {
      entries.push({
        url: url(locale, "projects", dicts[locale].slugs.projects[id]),
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: alternates("projects", (l) => dicts[l].slugs.projects[id]),
      });
    }
  }

  return entries;
}
