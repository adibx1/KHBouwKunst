"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <Link href="/" className="header__logo" aria-label="KH Bouw Kunst, naar de homepage">
          <Image src="/logo.png" alt="KH Bouw Kunst" width={340} height={340} priority />
        </Link>

        <nav className="header__nav" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
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

        <Link href="/contact" className="header__cta">
          Offerte aanvragen
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobiel-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className="header__menu" id="mobiel-menu">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--accent" onClick={closeMenu}>
            Offerte aanvragen
          </Link>
        </div>
      ) : null}
    </header>
  );
}
