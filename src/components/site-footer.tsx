import Link from "next/link";
import { navItems, services, site } from "@/content";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__mark" role="img" aria-label={site.name} />
          <p className="footer__blurb">{site.description}</p>
        </div>

        <div>
          <p className="footer__head">Pagina&apos;s</p>
          <div className="footer__list">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer__head">Diensten</p>
          <div className="footer__list">
            {services.map((service) => (
              <Link key={service.slug} href={`/diensten/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer__head">Contact</p>
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
          <p>Alle werkzaamheden onder garantie</p>
        </div>
      </div>
    </footer>
  );
}
