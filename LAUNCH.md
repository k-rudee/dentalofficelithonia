# Launch checklist

## Before DNS cutover

- [ ] Confirm hours in writing (4:00 vs 4:30 PM). Update `lib/site.ts` if needed.
- [ ] Recrawl Google rating/count; update `ratingValue` / `reviewCount` in `lib/site.ts`.
- [ ] Create Formspree form → `dentalofficelithonia@gmail.com`. Set `FORMSPREE_FORM_ID` on Vercel.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production origin.
- [ ] Send a test appointment request; confirm email arrives; confirm missing-env state still fails loud in staging without the ID.
- [ ] `npm run build` succeeds.
- [ ] Click every header/footer link on mobile and desktop.
- [ ] Confirm `tel:+17704822964` and `mailto:dentalofficelithonia@gmail.com`.
- [ ] Confirm `/about-us`, `/our-services`, `/contact-us`, `/testimonials` redirect.
- [ ] Confirm `/thank-you` is noindex.
- [ ] Confirm `/sitemap.xml` omits `/thank-you`.
- [ ] Practice reviews Privacy and Terms drafts.

## DNS / hosting

- [ ] Project on Vercel, production branch `main`.
- [ ] Add domain `dentalofficelithonia.com` and `www`.
- [ ] Point DNS (A/ALIAS/CNAME) as Vercel instructs.
- [ ] Force HTTPS.
- [ ] Decide whether `www` canonicalizes to apex (match `NEXT_PUBLIC_SITE_URL`).

## After go-live

- [ ] Google Search Console: add property, verify, submit `https://dentalofficelithonia.com/sitemap.xml`.
- [ ] Google Business Profile: website URL, NAP, hours identical to the site.
- [ ] Yelp / Facebook hours and website URL.
- [ ] Old WordPress: keep 301s at the host if any traffic still hits WP paths not listed in `next.config.ts`.
- [ ] Request Google re-index of Home, Contact, New Patients, Insurance.
- [ ] Optional: Bing Webmaster Tools.

## NAP (must match everywhere)

```
The Dental Office of Lithonia
7660 Covington Highway #1, Lithonia, GA 30058
(770) 482-2964
dentalofficelithonia@gmail.com
```
