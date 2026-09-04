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
  content/      all site copy and data  ← change text here
  app/          one folder per URL
  components/   reusable UI
  lib/          contact form server action
public/images/  photography
```

### `src/content/` — the text

Everything the site says is plain data here. No markup, no components.

| File | Holds |
| --- | --- |
| `site.ts` | Company name, phone, email, KVK, navigation |
| `services.ts` | The six services and their detail pages |
| `projects.ts` | The project portfolio |
| `company.ts` | Figures, selling points, reviews, process steps, FAQ |

Pages import from `@/content`, which re-exports all four.

To change a phone number, edit `site.ts`. To add a project, add an entry to
`projects.ts` — its page, its card and its sitemap entry all follow.

### `src/app/` — the pages

Folder names are the URLs:

| Route | Folder |
| --- | --- |
| `/` | `page.tsx` |
| `/over-ons` | `over-ons/` |
| `/diensten`, `/diensten/[slug]` | `diensten/` |
| `/projecten`, `/projecten/[slug]` | `projecten/` |
| `/werkwijze` | `werkwijze/` |
| `/veelgestelde-vragen` | `veelgestelde-vragen/` |
| `/contact` | `contact/` |

`sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt` from the
content files, so new services and projects appear automatically.

Every page is a server component and prerenders to static HTML. The three
client components are the mobile menu, the FAQ accordion and the project filter.

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
project photography. Service image names are set per service in
`content/services.ts`; project images in `content/projects.ts`.

## Contact form

`src/lib/actions.ts` holds the server action. It validates the submission and
logs it — **it does not yet send anything**. Wire a mail provider or CRM at the
marked `TODO` to start delivering aanvragen.

## Design source

The site was built from a Claude Design canvas. That export was removed from the
working tree once the images and copy were extracted; recover it with:

```bash
git checkout 29fefa5 -- "Building and architecture website"
```
