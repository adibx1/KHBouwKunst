import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Bouwbedrijf en aannemer voor heel Nederland`,
    template: `%s | ${site.name}`,
  },
  description:
    "KH Bouw Kunst is uw aannemer voor nieuwbouw, verbouwing, renovatie en aanbouw in heel Nederland. Vakwerk, heldere afspraken en een vaste aanspreekpartner van begin tot eind.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    url: site.url,
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={archivo.variable}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
