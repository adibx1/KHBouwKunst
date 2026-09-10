"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";

export type NavLink = { routeKey: string; href: string; label: string };
export type LanguageOption = { code: string; label: string };

function hrefIn(code: string, defaultCode: string, segments: string[]) {
  const prefix = code === defaultCode ? "" : `/${code}`;
  const rest = segments.join("/");
  return `${prefix}${rest ? `/${rest}` : ""}` || "/";
}

function LanguageSwitch({
  languages,
  locale,
  defaultLocale,
  label,
  segments,
  className,
  onNavigate,
}: {
  languages: LanguageOption[];
  locale: string;
  defaultLocale: string;
  label: string;
  segments: string[];
  className: string;
  onNavigate?: () => void;
}) {
  if (languages.length < 2) return null;

  return (
    <nav className={className} aria-label={label}>
      {languages.map((language) => {
        const current = language.code === locale;
        return (
          <Link
            key={language.code}
            href={hrefIn(language.code, defaultLocale, segments)}
            hrefLang={language.code}
            lang={language.code}
            title={language.label}
            aria-current={current ? "true" : undefined}
            onClick={onNavigate}
          >
            {language.code.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader({
  nav,
  cta,
  ctaHref,
  languages,
  languageLabel,
  locale,
  defaultLocale,
  homeHref,
  homeLabel,
  menuLabel,
}: {
  nav: NavLink[];
  cta: string;
  ctaHref: string;
  languages: LanguageOption[];
  languageLabel: string;
  locale: string;
  defaultLocale: string;
  homeHref: string;
  homeLabel: string;
  menuLabel: string;
}) {
  const segments = useSelectedLayoutSegments();
  const currentKey = segments[0] ?? "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <Link href={homeHref} className="header__logo" aria-label={homeLabel}>
          <Image src="/logo.png" alt="KH Bouw Kunst" width={340} height={340} priority />
        </Link>

        <nav className="header__nav" aria-label={menuLabel}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header__link"
              aria-current={item.routeKey === currentKey ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitch
          languages={languages}
          locale={locale}
          defaultLocale={defaultLocale}
          label={languageLabel}
          segments={segments}
          className="langs langs--bar"
        />

        <Link href={ctaHref} className="header__cta">
          {cta}
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-expanded={menuOpen}
          aria-controls="hoofdmenu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuLabel}</span>
          <span className="header__burger__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="header__menu" id="hoofdmenu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <Link href={ctaHref} className="btn btn--accent" onClick={closeMenu}>
            {cta}
          </Link>

          <LanguageSwitch
            languages={languages}
            locale={locale}
            defaultLocale={defaultLocale}
            label={languageLabel}
            segments={segments}
            className="langs langs--menu"
            onNavigate={closeMenu}
          />
        </div>
      ) : null}
    </header>
  );
}
