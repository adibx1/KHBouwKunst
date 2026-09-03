export const site = {
  name: "KH Bouw Kunst",
  tagline: "Aannemersbedrijf voor heel Nederland",
  description:
    "Aannemersbedrijf voor nieuwbouw, verbouwing, renovatie en onderhoud. Actief in heel Nederland.",
  url: "https://kh-bouwkunst.nl",
  phone: "+31 6 84557452",
  phoneHref: "tel:+31684557452",
  email: "info@khbouwkunst.nl",
  city: "Eindhoven",
  hours: "Ma t/m vr, 07:30 tot 17:30",
  kvk: "42070796",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
  { href: "/contact", label: "Contact" },
  { href: "/over-ons", label: "Over ons" },
] as const;
