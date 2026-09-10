"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type NavLink = { href: string; label: string };
export type LanguageOption = { code: string; label: string };

function swapLocale(pathname: string, code: string, defaultCode: string) {
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.length > 0 && segments[0].length === 2 ? segments.slice(1) : segments;
  const prefix = code === defaultCode ? "" : `/${code}`;
  return `${prefix}/${rest.join("/")}`.replace(/\/+$/, "") || "/";
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <Link href={homeHref} className="header__logo" aria-label={homeLabel}>
          <Image src="/logo.png" alt="KH Bouw Kunst" width={340} height={340} priority />
        </Link>

        <nav className="header__nav" aria-label="Hoofdnavigatie">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header__link"
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {languages.length > 1 ? (
          <nav className="header__langs" aria-label={languageLabel}>
            {languages.map((language) => (
              <Link
                key={language.code}
                href={swapLocale(pathname, language.code, defaultLocale)}
                hrefLang={language.code}
                className="header__lang"
                aria-current={language.code === locale ? "true" : undefined}
              >
                {language.code.toUpperCase()}
              </Link>
            ))}
          </nav>
        ) : null}

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
          <span className="visually-hidden">Menu</span>
          <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="header__menu" id="hoofdmenu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          {languages.length > 1
            ? languages.map((language) => (
                <Link
                  key={language.code}
                  href={swapLocale(pathname, language.code, defaultLocale)}
                  hrefLang={language.code}
                  onClick={closeMenu}
                >
                  {language.label}
                </Link>
              ))
            : null}
        </div>
      ) : null}
    </header>
  );
}
