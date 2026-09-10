# KH Bouw Kunst

Website for KH Bouw Kunst, an aannemersbedrijf working across the Netherlands.
Built with Next.js 16 (App Router), TypeScript and plain CSS.

## Running it

```bash
npm run dev     # development server on http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

Do not run `build`/`start` while `dev` is running — both write to `.next`.

## Where things live

```
src/
  i18n/         languages, URL words, and every sentence  ← change text here
  content/      what exists: services, projects, photos, company facts
  app/[lang]/   one folder per page, in every language
  components/   reusable UI
  lib/          contact form, mail, SEO
  proxy.ts      turns a public URL into the page that renders it
public/images/  photography
```

The site speaks three languages. Dutch is finished and lives at the root of the
domain; English and German are scaffolded and switched off. See
[Translations](#translations).

### `src/i18n/` — the words

Everything the site says lives in one file per language.

| File | Holds |
| --- | --- |
| `config.ts` | Which languages exist, and whether each is finished |
| `routes.ts` | The words each language puts in its URLs |
| `dictionaries/nl.ts` | Every Dutch sentence, heading, label and mail |
| `dictionaries/en.ts`, `de.ts` | The same shape, awaiting translation |

`nl.ts` is the original. `Dictionary` is derived from it, so adding a key there
immediately marks the other languages incomplete and the build fails until they
catch up. A translation can never be half finished without anyone noticing.

### `src/content/` — what exists

Facts and structure, never sentences.

| File | Holds |
| --- | --- |
| `site.ts` | Phone, email, KVK, city, the live domain |
| `structure.ts` | Which services and projects exist, their photos and icons |
| `catalog.ts` | Joins a structure with one language's words |

To change a phone number, edit `site.ts`. To add a project, add its shape to
`structure.ts` and its words to every dictionary — the type checker names the
files you still owe. Its page, card and sitemap entry all follow automatically.

### `src/app/[lang]/` — the pages

Folder names are page *keys*, not URLs. The URL words are a translation, so the
folder is `services/` while a visitor sees `/diensten`, `/en/services` or
`/de/leistungen`. `src/proxy.ts` maps one to the other, and `routes.ts` holds
the table.

| Key | Dutch | English | German |
| --- | --- | --- | --- |
| `home` | `/` | `/en` | `/de` |
| `services` | `/diensten` | `/en/services` | `/de/leistungen` |
| `projects` | `/projecten` | `/en/projects` | `/de/projekte` |
| `process` | `/werkwijze` | `/en/how-we-work` | `/de/arbeitsweise` |
| `faq` | `/veelgestelde-vragen` | `/en/faq` | `/de/haeufige-fragen` |
| `contact` | `/contact` | `/en/contact` | `/de/kontakt` |
| `about` | `/over-ons` | `/en/about-us` | `/de/ueber-uns` |

Never write a URL by hand. `path(locale, key, slug)` from `@/i18n/routes` builds
every link, so adding a language cannot leave a stale Dutch path behind.

Every page is a server component and prerenders to static HTML, in all three
languages. The three client components are the mobile menu, the FAQ accordion
and the project filter.

### `src/app/globals.css` — the styling

One stylesheet, no framework. It is ordered:

1. **Design tokens** — colours, rules, spacing, all as CSS custom properties.
   `--accent` is the yellow, `--ink` the near-black, `--rule` the border used
   throughout. Change a token to restyle the whole site.
2. **Base elements** — resets and typography.
3. **Components** — `.btn`, `.card`, `.hero`, `.footer` and so on.
4. **Page blocks** — one class per section, e.g. `.home-intro`, `.service-gallery`.

Pages carry no inline styles; every measurement is in this file.

### Images

`public/images/` holds the photography, referenced by basename:

- `kh-hero`, `kh-about-hero`, `kh-about-story`, `kh-contact-map` — fixed page images
- `img_1xx` / `img_2xx` / `img_3xx` — service cards, service heroes, service galleries
- `img_4xx` / `img_5xx` — project photos, after and before

These are placeholders from the design canvas and should be replaced with real
project photography. **Some carry a third party watermark and a Creative Commons
byline**, so they cannot stay on a page that calls them our own work. Image
names are set per service and project in `content/structure.ts`.

`public/og-default.jpg` is the branded 1200x630 card shown when a page without
its own photograph is shared.

## Translations

Dutch is live. English and German exist as complete scaffolds whose values are
still Dutch, so the pages render and can be checked, but they are:

- kept out of `sitemap.xml`
- kept out of the `hreflang` tags
- kept out of the language switcher
- served with `noindex`

so a search engine never sees half a translation.

To finish a language:

1. Translate the values in `src/i18n/dictionaries/<code>.ts`. Never touch the
   keys. Anything in curly braces, like `{naam}`, is filled in when the page
   renders or the mail sends; keep the marker, move it where the sentence needs.
2. Translate the URL words for that language in `src/i18n/routes.ts`, and the
   per service and per project slugs under `slugs` in the dictionary.
3. Set `ready: true` for that language in `src/i18n/config.ts`.

The switcher, the sitemap, the hreflang tags and the language's own indexability
all turn on from that one flag.

To add a fourth language, add it to `locales` and `localeMeta` in `config.ts`,
add its column to `routeSegments` in `routes.ts`, and copy a dictionary. The
type checker lists everything still missing.

## Search engines

- `src/lib/seo.ts` builds every page's title, description, canonical URL,
  `hreflang` alternates, Open Graph and Twitter card, and decides whether the
  page may be indexed.
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`. The
  sitemap lists every page in every finished language, each carrying the
  addresses of its translations.
- The site describes itself to search engines as a `GeneralContractor` in the
  layout, and the FAQ page marks up its questions as an `FAQPage`.

## Contact form

`src/lib/actions.ts` validates the submission, then `src/lib/mail.ts` sends two
mails over SMTP: the request to the company with `Reply-To` set to the visitor,
and a confirmation to the visitor. Both are branded, both read in the language
the visitor was using, and both promise contact within 24 hours.

Credentials come from the environment. Copy `.env.example` to `.env.local` for
local development; production reads them from the Vercel project, where the
password is stored as a Secret.

## Design source

The site was built from a Claude Design canvas. That export was removed from the
working tree once the images and copy were extracted; recover it with:

```bash
git checkout 29fefa5 -- "Building and architecture website"
```
