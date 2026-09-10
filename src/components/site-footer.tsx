import Link from "next/link";
import { servicesIn, site } from "@/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { path, routeKeys } from "@/i18n/routes";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const services = servicesIn(dict, locale);

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__mark" role="img" aria-label={site.name} />
          <p className="footer__blurb">{dict.site.description}</p>
        </div>

        <div>
          <p className="footer__head">{dict.footer.pages}</p>
          <div className="footer__list">
            {routeKeys.map((key) => (
              <Link key={key} href={path(locale, key)}>
                {dict.nav[key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer__head">{dict.footer.services}</p>
          <div className="footer__list">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer__head">{dict.footer.contact}</p>
          <div className="footer__list footer__contact">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.city}</p>
            <p>KVK {site.kvk}</p>
          </div>
        </div>
      </div>

      <div className="footer__legal">
        <div>
          <p>
            © {new Date().getFullYear()} {site.name}, KVK {site.kvk}
          </p>
          <p>{dict.footer.guarantee}</p>
        </div>
      </div>
    </footer>
  );
}
