import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.notFound;

  return (
    <section className="wrap pad-xl not-found">
      <p className="kicker">{t.kicker}</p>
      <h1 className="title-page">{t.title}</h1>
      <p className="lede">{t.lede}</p>
      <div className="chip-row">
        <Link href={path(locale, "home")} className="chip">
          {t.home}
        </Link>
        <Link href={path(locale, "services")} className="chip">
          {dict.nav.services}
        </Link>
        <Link href={path(locale, "contact")} className="chip">
          {dict.nav.contact}
        </Link>
      </div>
    </section>
  );
}
