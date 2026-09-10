import type { Metadata } from "next";
import { site } from "@/content";
import { defaultLocale, localeMeta, locales, publishedLocales, type Locale } from "@/i18n/config";
import { dictionaryFor, type Dictionary } from "@/i18n/dictionary";
import { path, type RouteKey } from "@/i18n/routes";

const origin = site.url;

const url = (locale: Locale, key: RouteKey, slug?: string) => {
  const p = path(locale, key, slug);
  return p === "/" ? origin : `${origin}${p}`;
};

type PageSeo = {
  locale: Locale;
  key: RouteKey;
  title: string;
  description: string;
  slugs?: Partial<Record<Locale, string>>;
  image?: string;
};

export function pageMetadata({ locale, key, title, description, slugs, image }: PageSeo): Metadata {
  const canonical = url(locale, key, slugs?.[locale]);
  const ready = localeMeta[locale].ready;

  const languages: Record<string, string> = {};
  for (const other of publishedLocales) {
    languages[localeMeta[other].hreflang] = url(other, key, slugs?.[other]);
  }
  languages["x-default"] = url(defaultLocale, key, slugs?.[defaultLocale]);

  const share = image
    ? { url: `${origin}/images/${image}.jpg`, alt: title }
    : { url: `${origin}/og-default.jpg`, width: 1200, height: 630, alt: site.name };

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: publishedLocales
        .filter((l) => l !== locale)
        .map((l) => localeMeta[l].ogLocale),
      url: canonical,
      title,
      description,
      images: [share],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [share.url],
    },
    robots: ready
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: true },
  };
}

export async function metadataFor(locale: Locale, key: keyof Dictionary["meta"], image?: string) {
  const dict = await dictionaryFor(locale);
  const meta = dict.meta[key];

  const title = key === "home" ? `${meta.title} | ${site.name}` : meta.title;

  return pageMetadata({ locale, key, title, description: meta.description, image });
}

export function localBusinessSchema(locale: Locale, tagline: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${origin}/#organisation`,
    name: site.name,
    description,
    slogan: tagline,
    url: origin,
    telephone: site.phone,
    email: site.email,
    image: `${origin}/logo.png`,
    logo: `${origin}/logo.png`,
    identifier: { "@type": "PropertyValue", name: "KVK", value: site.kvk },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "NL",
    },
    areaServed: { "@type": "Country", name: "Nederland" },
    availableLanguage: locales.filter((l) => localeMeta[l].ready).map((l) => localeMeta[l].htmlLang),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
    ],
    inLanguage: localeMeta[locale].htmlLang,
  };
}

export { origin as siteOrigin };
