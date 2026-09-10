import { defaultLocale, isLocale, locales, type Locale } from "./config";

export const routeKeys = [
  "home",
  "about",
  "services",
  "projects",
  "process",
  "faq",
  "contact",
] as const;

export type RouteKey = (typeof routeKeys)[number];

export const navOrder: readonly RouteKey[] = [
  "home",
  "services",
  "projects",
  "process",
  "faq",
  "contact",
  "about",
];

const routeFolder: Record<RouteKey, string> = {
  home: "",
  about: "about",
  services: "services",
  projects: "projects",
  process: "process",
  faq: "faq",
  contact: "contact",
};

export const routeSegments: Record<Locale, Record<RouteKey, string>> = {
  nl: {
    home: "",
    about: "over-ons",
    services: "diensten",
    projects: "projecten",
    process: "werkwijze",
    faq: "veelgestelde-vragen",
    contact: "contact",
  },
  en: {
    home: "",
    about: "about-us",
    services: "services",
    projects: "projects",
    process: "how-we-work",
    faq: "faq",
    contact: "contact",
  },
  de: {
    home: "",
    about: "ueber-uns",
    services: "leistungen",
    projects: "projekte",
    process: "arbeitsweise",
    faq: "haeufige-fragen",
    contact: "kontakt",
  },
};

export function path(locale: Locale, key: RouteKey, slug?: string): string {
  const segment = routeSegments[locale][key];
  const parts = [
    locale === defaultLocale ? "" : locale,
    segment,
    slug ?? "",
  ].filter((part) => part !== "");
  return `/${parts.join("/")}`;
}

export const absolute = (origin: string, locale: Locale, key: RouteKey, slug?: string) =>
  `${origin}${path(locale, key, slug)}`.replace(/\/$/, "") || origin;

export type Resolved =
  | { kind: "page"; locale: Locale; key: RouteKey; slug?: string; redundantPrefix: boolean }
  | { kind: "unknown"; locale: Locale; rest: string };

function splitLocale(segments: string[]) {
  if (segments.length > 0 && isLocale(segments[0])) {
    const locale = segments[0];
    return { locale, rest: segments.slice(1), prefixed: true };
  }
  return { locale: defaultLocale, rest: segments, prefixed: false };
}

export function resolve(pathname: string): Resolved {
  const { locale, rest: segments, prefixed } = splitLocale(pathname.split("/").filter(Boolean));

  const redundantPrefix = prefixed && locale === defaultLocale;

  const unknown = (): Resolved => ({ kind: "unknown", locale, rest: segments.join("/") });

  if (segments.length === 0) return { kind: "page", locale, key: "home", redundantPrefix };

  const [first, second, ...extra] = segments;
  if (extra.length > 0) return unknown();

  const entries = Object.entries(routeSegments[locale]) as Array<[RouteKey, string]>;
  const match = entries.find(([, segment]) => segment !== "" && segment === first);
  if (!match) return unknown();

  const [key] = match;

  if (second && key !== "services" && key !== "projects") return unknown();

  return { kind: "page", locale, key, slug: second, redundantPrefix };
}

export const internalPath = (locale: Locale, key: RouteKey, slug?: string) =>
  "/" + [locale, routeFolder[key], slug].filter(Boolean).join("/");

export const everyLocale = (key: RouteKey, slugFor?: (locale: Locale) => string | undefined) =>
  locales.map((locale) => ({ locale, href: path(locale, key, slugFor?.(locale)) }));

export function findRouteInAnyLocale(segment: string): { locale: Locale; key: RouteKey } | null {
  for (const locale of locales) {
    const entries = Object.entries(routeSegments[locale]) as Array<[RouteKey, string]>;
    const match = entries.find(([, value]) => value !== "" && value === segment);
    if (match) return { locale, key: match[0] };
  }
  return null;
}
