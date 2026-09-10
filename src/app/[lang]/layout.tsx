import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content";
import { defaultLocale, isLocale, localeMeta, locales } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/dictionary";
import { navOrder, path } from "@/i18n/routes";
import { localBusinessSchema } from "@/lib/seo";
import "../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  if (!locale || !isLocale(locale)) return {};
  const dict = await dictionaryFor(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} | ${dict.meta.home.title}`,
      template: `%s | ${site.name}`,
    },
    description: dict.site.description,
    icons: { icon: "/logo.png" },
    alternates: { canonical: site.url },
  };
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale = await lang();
  if (!locale || !isLocale(locale)) notFound();

  const dict = await dictionaryFor(locale);
  const schema = localBusinessSchema(locale, dict.site.tagline, dict.site.description);

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      data-scroll-behavior="smooth"
      className={archivo.variable}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="site-shell">
          <SiteHeader
            locale={locale}
            defaultLocale={defaultLocale}
            nav={navOrder.map((key) => ({
              routeKey: key,
              href: path(locale, key),
              label: dict.nav[key],
            }))}
            cta={dict.common.quoteCta}
            ctaHref={path(locale, "contact")}
            languages={locales.map((code) => ({ code, label: localeMeta[code].label }))}
            languageLabel={dict.common.languageLabel}
            homeHref={path(locale, "home")}
            homeLabel={`${site.name}, ${dict.nav.home}`}
            menuLabel={dict.common.menuLabel}
          />
          <main className="site-main">{children}</main>
          <SiteFooter locale={locale} dict={dict} />
        </div>
      </body>
    </html>
  );
}
