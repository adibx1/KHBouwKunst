import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";
import { nl } from "./dictionaries/nl";

export type Dictionary = typeof nl;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  nl: async () => nl,
  en: () => import("./dictionaries/en").then((m) => m.en),
  de: () => import("./dictionaries/de").then((m) => m.de),
};

export const dictionaryFor = (locale: Locale): Promise<Dictionary> => dictionaries[locale]();

export async function getDictionary(): Promise<Dictionary> {
  return dictionaryFor(await getLocale());
}

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !isLocale(value)) notFound();
  return value;
}

export { defaultLocale };
