# TASKS — The Dental Office of Lithonia rebuild

**Depends on:** `RESEARCH.md`, `PLAN.md`  
**Rule:** Each task is one coding session. Do not start a task until its dependencies are done. Verify the task’s “Done when” before moving on.  
**This docs run ends after TASK 0.** Do not scaffold the app until a later session starts TASK 1.

---

## TASK 0 — Write the planning docs

**Depends on:** nothing  
**Do:** Confirm `RESEARCH.md`, `PLAN.md`, and `TASKS.md` exist at the repo root and match the live crawl. No application code.  
**Done when:**

- [ ] `RESEARCH.md` lists every reusable asset URL and every fact as Verified / Failed / PLACEHOLDER  
- [ ] `PLAN.md` has IA, design tokens, conversion system, schema checklist, form fields, env vars, page acceptance  
- [ ] `TASKS.md` is numbered and dependency-ordered  
- [ ] `ls` of the repo shows markdown only (plus git files if any) — no `app/`, no `package.json` yet  

---

## TASK 1 — Scaffold Next.js

**Depends on:** TASK 0  
**Do:** `create-next-app` in this repo (or into a subfolder only if the root must stay docs-only — prefer **root app** with docs kept at `/RESEARCH.md` `/PLAN.md` `/TASKS.md`). App Router, TypeScript, Tailwind CSS, ESLint, `app/` directory, no src dir unless the generator requires it. Add `.env.example` with the keys in PLAN §3. Add a one-line README: practice name, `npm run dev`, `npm run build`, pointer to PLAN.md.  
**Done when:**

- [ ] `npm run dev` serves a page at `/`  
- [ ] `npm run build` exits 0  
- [ ] `.env.example` lists `FORMSPREE_FORM_ID`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_GOOGLE_PLACE_ID`, `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC`  
- [ ] TypeScript strict  

---

## TASK 2 — Download and inventory practice assets

**Depends on:** TASK 1  
**Do:** Download every URL in RESEARCH §6.1 into `public/images/` (rename to stable slugs: `logo.jpg`, `dr-chen.jpg`, `team-sign.jpg`, `team-porch.jpg`, `building.jpg`, `street.jpg`, `operatory-1.webp`, `operatory-2.webp`, `hallway.webp`, `waiting-room.webp`, `chairside.webp`) and the PDF to `public/forms/new-patient-paperwork.pdf`. Skip Divi `layouts3.divi.support` files. Write `lib/assets.ts` with path + alt for each. Do not commit unused `Untitled-1/2` unless they prove useful after visual check.  
**Done when:**

- [ ] All §6.1 files exist on disk  
- [ ] `lib/assets.ts` has alts (no empty strings)  
- [ ] Repo has **zero** references to `layouts3.divi.support`  
- [ ] PDF opens at `/forms/new-patient-paperwork.pdf`  

---

## TASK 3 — Single source of truth

**Depends on:** TASK 1 (can parallel TASK 2)  
**Do:** Create `lib/site.ts`, `lib/testimonials.ts`, `lib/services.ts`, `lib/faq.ts` from RESEARCH + PLAN. Hours: Mon–Thu 8:00 AM–4:00 PM, Fri–Sun closed. Rating 4.8 / 119. Insurance list + exclusions. Place ID. Phone `+17704822964` / display `(770) 482-2964`. Eight services with slugs from PLAN §4. Thirteen testimonials with names + substance.  
**Done when:**

- [ ] `grep` for `770` / `482-2964` outside `lib/site.ts` (and env) finds nothing once chrome is built — for this task, at least all facts compile from the modules  
- [ ] Typecheck passes  
- [ ] “Filings” does not appear in `lib/`  
- [ ] Testimonials include the 10 required names plus Lawanda Curtiss, Jacole St.Rozier, Danielle Ruff  

---

## TASK 4 — Design tokens + site chrome

**Depends on:** TASK 1, TASK 2 (logo), TASK 3  
**Do:** Tailwind theme tokens from PLAN §5 (porcelain, pine, sage, brass, mist, ink). Load IBM Plex Serif + IBM Plex Sans. Build `SkipLink`, `SiteHeader`, `SiteFooter`, `StickyCallBar`, `Nameplate`, `Button`, `CallLink`, `HoursList`, `NapBlock`. Header: Call + Request appointment. Footer: NAP, hours, insurance snapshot, exclusions, privacy/terms placeholders (`/privacy`, `/terms` can 404 until TASK 11). Mobile sticky bar: Call | Request. Focus-visible brass ring.  
**Done when:**

- [ ] Keyboard: Tab reaches Call, Request, and every nav item; mobile menu opens/closes with keyboard and Escape  
- [ ] 390-wide viewport shows sticky Call | Request  
- [ ] Click-to-call uses `tel:+17704822964`  
- [ ] `prefers-reduced-motion` CSS present  
- [ ] Skip link works  

---

## TASK 5 — Appointment form + thank-you

**Depends on:** TASK 3, TASK 4  
**Do:** `AppointmentForm` with PLAN §6 fields + honeypot. Client validation (required, email, phone). POST `/api/appointment` → Formspree. If `FORMSPREE_FORM_ID` missing: HTTP 503 JSON error and UI that says call/email — **no fake success**. `/thank-you` with corrected copy, Call CTA, `robots: noindex`.  
**Done when:**

- [ ] Empty submit shows labeled errors; focus moves to first error  
- [ ] Honeypot field is not visible  
- [ ] With env unset, submit does not show “thanks”  
- [ ] `/thank-you` meta robots noindex  
- [ ] Consent checkbox required  

---

## TASK 6 — Home page

**Depends on:** TASK 2–5  
**Do:** Implement PLAN §7 wireframe. H1 “Gentle Family Dentistry in Lithonia, GA.” Subhead: fear-free + Dr. Michael Chen. Trust bar. Services grid (8 linked cards). Why-us with Carlock, McKnight, Lee, Morring snippets. Doctor spotlight (`dr-chen.jpg`). Insurance strip + exclusions. New-patients teaser + PDF. Review band 4.8/119. Map + NAP + hours. FAQ teaser. Final CTA. Hero uses `chairside.webp` or `team-sign.jpg` (real photos).  
**Done when:**

- [ ] 390-wide: H1, Call, and Request are above the fold (screenshot or Playwright)  
- [ ] “Filings” absent; “Fillings” present  
- [ ] Each service card hits a `/services/...` href (pages may be stubs until TASK 8)  
- [ ] No evening/Saturday copy  
- [ ] Sticky bar present  

---

## TASK 7 — About

**Depends on:** TASK 4, TASK 6  
**Do:** `/about` with polished bio, Augusta University correction, portrait, team photos, services list, ages 6+, nitrous, link to reviews (4.8 not 5.0). No invented staff names. Redirect `/about-us` → `/about`.  
**Done when:**

- [ ] Bio facts match RESEARCH (Milledgeville, Baldwin 1997, UGA Biology, MCG/Augusta University, Veronica, 3 kids, hiking, swim team, digital impression / implants / same-day crowns)  
- [ ] “Augusta State University” does not appear  
- [ ] “is wife” does not appear  
- [ ] `/about-us` 308/301 to `/about`  

---

## TASK 8 — Services index + eight service pages

**Depends on:** TASK 3, TASK 4, TASK 6  
**Do:** `/services` index + the eight routes in PLAN §4. Shared `PageHero` + copy within PLAN §8.4 boundaries. Comfort page is nitrous/anxiety. Redirect `/our-services` → `/services`.  
**Done when:**

- [ ] All eight URLs 200  
- [ ] Index cards all link  
- [ ] No veneers / Invisalign / IV sedation / CEREC  
- [ ] Extractions page may quote Michal Carlock; does not claim OMS specialty  
- [ ] `/our-services` redirects  

---

## TASK 9 — New Patients + Insurance

**Depends on:** TASK 5, TASK 8  
**Do:** `/new-patients` checklist, ages 6+, nitrous, hours, PDF, form or link to `#request`. `/insurance` eight PPOs + Medicaid no + dual no + “we’ll help you check.”  
**Done when:**

- [ ] PDF download works  
- [ ] No upload UI  
- [ ] Both exclusions visible without accordion-only hiding on mobile  
- [ ] No extra carriers, no prices  

---

## TASK 10 — Reviews + FAQ

**Depends on:** TASK 3, TASK 4  
**Do:** `/reviews` with 4.8/119, 13 cards, Google write-review link (Place ID). Redirect `/testimonials` → `/reviews`. `/faq` with PLAN §8.9 questions (include “Do you offer evening or Saturday hours? No.”). Accordion is buttons, not CSS-only hover.  
**Done when:**

- [ ] All 13 names present  
- [ ] Write-review URL contains `ChIJZxuqP4Ot9YgRYQqgsglJjb4`  
- [ ] FAQ states Mon–Thu 8–4 and explicitly no weekend hours  
- [ ] `/testimonials` redirects  

---

## TASK 11 — Contact + Privacy + Terms

**Depends on:** TASK 5, TASK 4  
**Do:** `/contact` map (env embed), NAP, hours, parking PLACEHOLDER sentence, PDF, form `#request`. Redirect `/contact-us`. `/privacy` and `/terms` drafts per PLAN §8.10. Footer links go live.  
**Done when:**

- [ ] Address, phone, email all clickable  
- [ ] Map iframe loads  
- [ ] `/privacy` and `/terms` 200  
- [ ] `/contact-us` redirects  
- [ ] Parking sentence does not invent a lot or garage  

---

## TASK 12 — SEO plumbing

**Depends on:** TASKS 6–11 (all public pages exist)  
**Do:** Unique `metadata` per route. `JsonLd` Dentist/LocalBusiness with address, geo, Mo–Th 08:00–16:00, aggregateRating 4.8/119, sameAs. FAQPage on `/faq`. Breadcrumbs. `sitemap.ts`, `robots.ts`. OG image from building or team. Canonicals. WP redirects complete. Thank-you noindex.  
**Done when:**

- [ ] View-source on `/` includes `"@type"` Dentist or LocalBusiness, `openingHoursSpecification`, `4.8`, `119`  
- [ ] `/sitemap.xml` lists all indexable routes and **omits** `/thank-you`  
- [ ] Four WP redirects work  
- [ ] NAP in schema matches footer character-for-character  

---

## TASK 13 — Optional blog scaffold (do last)

**Depends on:** TASK 12  
**Do:** `/blog` index + three MDX (or TSX) posts with the PLAN §9 titles. Outlines: first visit / nitrous / PPO list. Internal links. No invented studies.  
**Done when:**

- [ ] Three posts 200  
- [ ] Listed in sitemap  
- [ ] Each links to `/contact` or `/new-patients`  

Skip this task if the client wants pages-only v1.

---

## TASK 14 — Accessibility + performance pass

**Depends on:** TASK 12 (and 13 if done)  
**Do:** Contrast audit (sage-on-porcelain), all images alt, lazy below fold, font subset, axe on Home + Contact, Lighthouse mobile on Home. Fix until performance ≥ 90 or document the blocker. Keyboard through header, form, accordion, sticky bar.  
**Done when:**

- [ ] Lighthouse mobile performance score recorded (screenshot or JSON)  
- [ ] axe: no critical/serious on Home and Contact  
- [ ] Every `<img>` / `next/image` has non-empty alt  
- [ ] Form is completable without a mouse  

---

## TASK 15 — Launch checklist (client + GBP)

**Depends on:** TASK 14  
**Do:** Not code-heavy. Confirm PLACEHOLDERs with the client. Recrawl Google rating count. Align GBP / Yelp / Chamber hours (4:00 vs 4:30). Set production `FORMSPREE_FORM_ID`. Submit sitemap. Test a real form submission.  
**Done when:**

- [ ] Hours confirmed in writing  
- [ ] Live Formspree delivers to `dentalofficelithonia@gmail.com`  
- [ ] Rating citation matches current GBP  
- [ ] PLACEHOLDER list in PLAN §11 checked one-by-one  

---

## Dependency graph (quick)

```
0 docs
└─ 1 scaffold
   ├─ 2 assets
   ├─ 3 content modules
   └─ 4 chrome  (needs 2 logo + 3 facts)
        └─ 5 form
             ├─ 6 home
             │    ├─ 7 about
             │    └─ 8 services
             ├─ 9 new patients + insurance
             ├─ 10 reviews + faq
             └─ 11 contact + legal
                  └─ 12 SEO
                       ├─ 13 blog (optional)
                       └─ 14 a11y/perf
                            └─ 15 launch
```

Tasks 7, 8, 9, 10, 11 can run in parallel after 5–6 if split across sessions; do not merge unreviewed stubs.

---

## Out of scope (do not pull into a task)

Online scheduling vendor, HIPAA upload portal, live chat, extra services, staff bios, financing badges, WordPress, competitor content, evening/Saturday hours.
