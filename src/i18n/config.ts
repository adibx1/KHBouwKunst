export const locales = ["nl", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

type LocaleMeta = {
  label: string;
  htmlLang: string;
  ogLocale: string;
  hreflang: string;
  ready: boolean;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  nl: { label: "Nederlands", htmlLang: "nl", ogLocale: "nl_NL", hreflang: "nl-NL", ready: true },
  en: { label: "English", htmlLang: "en", ogLocale: "en_GB", hreflang: "en", ready: true },
  de: { label: "Deutsch", htmlLang: "de", ogLocale: "de_DE", hreflang: "de", ready: true },
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const publishedLocales = locales.filter((locale) => localeMeta[locale].ready);
