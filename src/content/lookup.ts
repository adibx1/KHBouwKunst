import "server-only";

import { locales, type Locale } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/dictionary";
import { projectIds, serviceIds, type ProjectId, type ServiceId } from "./structure";

async function findIn<Id extends string>(
  slug: string,
  ids: readonly Id[],
  pick: (dict: Awaited<ReturnType<typeof dictionaryFor>>) => Record<Id, string>,
): Promise<Id | undefined> {
  for (const locale of locales) {
    const table = pick(await dictionaryFor(locale));
    const hit = ids.find((id) => table[id] === slug);
    if (hit) return hit;
  }
  return undefined;
}

export const serviceIdForSlug = (slug: string) =>
  findIn<ServiceId>(slug, serviceIds, (dict) => dict.slugs.services);

export const projectIdForSlug = (slug: string) =>
  findIn<ProjectId>(slug, projectIds, (dict) => dict.slugs.projects);

export const slugsAcrossLocales = async (
  kind: "services" | "projects",
  id: string,
): Promise<Partial<Record<Locale, string>>> => {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const table = (await dictionaryFor(locale)).slugs[kind] as Record<string, string>;
      return [locale, table[id]] as const;
    }),
  );
  return Object.fromEntries(entries);
};
