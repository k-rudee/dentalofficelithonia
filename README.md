# The Dental Office of Lithonia

Marketing site for **The Dental Office of Lithonia** — Dr. Michael Chen, DMD, at 7660 Covington Highway #1, Lithonia, GA 30058.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Deploy on Vercel.

Facts live in `lib/site.ts`. Do not invent hours, services, or insurance. See `RESEARCH.md`, `PLAN.md`, and `PLACEHOLDERS.md`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `FORMSPREE_FORM_ID` | Formspree form token. **If empty, the appointment form does not fake success** — it tells the visitor to call or email. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://dentalofficelithonia.com` |
| `NEXT_PUBLIC_PHONE` | Digits only, `7704822964` |
| `NEXT_PUBLIC_EMAIL` | `dentalofficelithonia@gmail.com` |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | `ChIJZxuqP4Ot9YgRYQqgsglJjb4` |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC` | Google Maps embed URL |

Create a Formspree form that delivers to `dentalofficelithonia@gmail.com`, then set `FORMSPREE_FORM_ID`.

## How to update content

| Change | File |
|---|---|
| Hours, phone, email, address, rating | `lib/site.ts` |
| Insurance list / exclusions | `lib/site.ts` (`insurance`, `exclusions`) |
| Testimonials | `lib/testimonials.ts` |
| Service copy | `lib/services.ts` |
| FAQ | `lib/faq.ts` |
| Blog posts | `lib/blog.ts` |
| Photos / alts | `public/images/` + `lib/assets.ts` |
| New-patient PDF | `public/forms/new-patient-paperwork.pdf` |

Keep NAP (name, address, phone) **identical** in `lib/site.ts` — header, footer, contact, and JSON-LD all read from there.

**Hours (current default):** Monday–Thursday 8:00 AM–4:00 PM; Friday–Sunday closed. Directories sometimes list 4:30 PM — confirm with the office before changing. See `PLACEHOLDERS.md`.

## Redirects

WordPress slugs redirect permanently:

- `/about-us` → `/about`
- `/our-services` → `/services`
- `/contact-us` → `/contact`
- `/testimonials` → `/reviews`

Configured in `next.config.ts`.

## Launch checklist

See **`LAUNCH.md`** for DNS, GBP, Search Console, Formspree, and NAP alignment.

## Docs

- `RESEARCH.md` — live-site inventory
- `PLAN.md` — IA, design, SEO
- `TASKS.md` — implementation sequence
- `ASSETS.md` — photo map
- `PLACEHOLDERS.md` — claims that need client confirmation
