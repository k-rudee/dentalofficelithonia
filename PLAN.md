# PLAN — The Dental Office of Lithonia rebuild

**Date:** 2026-09-16  
**Depends on:** `RESEARCH.md`  
**Goal:** A premium, mobile-first marketing site that increases new-patient bookings via trust, local SEO, and frictionless Call / Request Appointment CTAs — without inventing clinical claims.

This is the build-ready spec. Implementation is sequenced in `TASKS.md`. Do not start coding until TASK 0 (these docs) is done and a later session picks up TASK 1.

---

## 1. Goal and success

Increase new-patient bookings for this independent Lithonia practice faster and cheaper than ads alone.

**A launch is successful when:**

- A Lithonia/Stonecrest searcher can **call in one tap** or **request an appointment in under a minute** from any page.
- Insurance, ages 6+, nitrous, hours, and exclusions are answerable without calling.
- Google can read consistent NAP + hours + 4.8/119 rating via on-page copy and JSON-LD.
- Design feels like a calm independent practice, not a Divi dental template or a DSO chain.
- Every fact traces to `RESEARCH.md` or is marked **PLACEHOLDER**.

---

## 2. Positioning (on-site messaging)

**Promise:** Gentle, personal family dentistry in Lithonia with Dr. Michael Chen — unhurried, clear about insurance, and kind to people who are afraid of the dentist.

**Do say:** independent; Dr. Chen by name; fear-free / gentle; thorough hygienists; short waits; clean; new patients 6+; nitrous; PPO list; Mon–Thu 8–4.

**Do not say:** evenings, Saturdays, “one-stop specialty center,” awards, years in practice, prices, financing, competitor names, “5-star” as the official rating (cite **4.8 from 119 Google reviews**), “best dentist” as a practice claim (reviews may say it; we quote, we don’t claim).

**Hours framing:** “Open Monday–Thursday, 8:00 AM–4:00 PM. Request an appointment — we’ll confirm quickly.” Never “same-week guaranteed” unless the client confirms (**PLACEHOLDER**).

Competitor names stay in this plan only. They do not appear on the site.

---

## 3. Tech choice

| Option | Verdict |
|---|---|
| **Next.js App Router + TypeScript + Tailwind CSS, Vercel** | **Chosen.** Metadata API, `next/image`, redirects from WP slugs, Route Handler for the form, MDX blog later, Lighthouse-friendly. |
| Astro | Simpler static HTML; weaker form + metadata story for ~20 routes. Not chosen. |
| WordPress / Divi | **Rejected.** Current stack produced an empty services page, template art, and missing hours/schema. |

**v1 has no CMS.** Copy lives in typed modules:

- `lib/site.ts` — NAP, hours, insurance, CTAs, Place ID, rating  
- `lib/testimonials.ts` — 13 reviews  
- `lib/services.ts` — service pages  
- `lib/faq.ts` — FAQ items  
- `lib/assets.ts` — image paths + alt text  

**Forms:** `app/api/appointment/route.ts` → **Formspree** (`FORMSPREE_FORM_ID`). If the env var is missing, show a visible “form is not connected — call or email” state and a `mailto:` fallback. **Do not fake success.** Resend is optional later, not v1.

**Env vars (`.env.example`):**

```
FORMSPREE_FORM_ID=
NEXT_PUBLIC_SITE_URL=https://dentalofficelithonia.com
NEXT_PUBLIC_PHONE=7704822964
NEXT_PUBLIC_EMAIL=dentalofficelithonia@gmail.com
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJZxuqP4Ot9YgRYQqgsglJjb4
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1595799820343!2d-84.1103184!3d33.7048194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ad833faa1b67%3A0xbe8d4909b2a00a61!2sThe%20Dental%20Office%20of%20Lithonia!5e0!3m2!1sen!2sus!4v1782419047587!5m2!1sen!2sus
```

**WP → new slug redirects** (`next.config.ts`):

| From | To |
|---|---|
| `/about-us` | `/about` |
| `/our-services` | `/services` |
| `/contact-us` | `/contact` |
| `/testimonials` | `/reviews` |

Keep `dentalofficelithonia.com` as canonical.

---

## 4. Information architecture

```
/                                      Home (conversion landing)
/about                                 Meet Dr. Chen
/services                              Services index
/services/general-dentistry            Checkups & cleanings
/services/cosmetic-dentistry
/services/teeth-whitening
/services/fillings
/services/crowns-bridges-partials
/services/dental-implants
/services/extractions
/services/comfort-dentistry            Nitrous / anxiety
/new-patients
/insurance
/reviews
/contact                               #request = form anchor
/faq
/privacy
/terms
/thank-you                             noindex, follow
/blog                                  optional
/blog/[slug]                           3 starter posts
```

**Header (desktop):** Logo · About · Services (dropdown of 8) · New Patients · Insurance · Reviews · FAQ · Contact · **Call (770) 482-2964** · **Request appointment**

**Header (mobile):** Logo · tel icon · hamburger. Sticky bar below: **Call | Request appointment**. Hide sticky bar when a form input is focused (keyboard).

**Footer (every page):** Practice name, address (`https://maps.google.com/?q=...` or Place ID maps URL), `tel:`, `mailto:`, hours Mon–Thu 8–4 / Fri–Sun closed, insurance snapshot + “See if we accept your plan,” Medicaid / dual-insurance exclusions, Facebook, “Read / write Google reviews,” Privacy, Terms.

---

## 5. Design system — warm clinical luxury

Ground the look in **this** building: Georgia pines, brick, navy sign, waiting-room wood, white coat. Avoid the three generic AI looks (cream + terracotta serif; near-black + neon; broadsheet hairlines).

### 5.1 Color

| Token | Hex | Role |
|---|---|---|
| Porcelain | `#F6F3EC` | Page ground |
| White | `#FFFDF8` | Cards, header |
| Mist | `#E4EDE7` | Alternating bands |
| Sage | `#5A7A66` | Links, chips, secondary buttons |
| Pine | `#14352C` | Primary text, header, primary buttons |
| Ink | `#1B211E` | Body |
| Brass | `#9A7B45` | Nameplate edge, focus ring, hairlines (**one risk**) |
| Danger | `#8B3A3A` | Errors only |

Contrast: pine-on-porcelain and ink-on-porcelain must meet WCAG 2.2 AA (4.5:1 body, 3:1 large). Recheck sage-on-porcelain for small text; if it fails, darken sage for text and keep the lighter sage for large chips only.

### 5.2 Type

- Display (H1–H2 only): **IBM Plex Serif** — clinical, not spa.  
- Body / UI: **IBM Plex Sans**.  
- Hours and phone: Plex Sans tabular nums.

Scale (mobile → desktop): H1 ~2.25 / 3.5rem; H2 ~1.75 / 2.25rem; body 1.0625rem, line-height 1.65; caption 0.875rem.

### 5.3 Signature device

A **door-nameplate rail**: a left-edge or stacked plaque (practice name, Dr. Michael Chen, DMD, Mon–Thu 8:00 AM–4:00 PM, click-to-call, 4.8★ from 119 Google reviews) with a thin brass edge. Hero photography is **real** (prefer `unnamed-3.webp` chairside consult, or the team/building). No stock smiles. No Divi cartoons. No 01 / 02 / 03 markers.

### 5.4 Motion and a11y

- 150–200ms opacity/transform; `prefers-reduced-motion: reduce` disables motion.  
- Skip link, visible `:focus-visible` brass ring, labeled inputs, `button` vs `a` semantics, keyboard-open mobile menu, form errors tied with `aria-describedby`.  
- Target Lighthouse **performance ≥ 90 mobile**: `next/image` AVIF/WebP, hero `priority`, lazy below fold, subset fonts, almost no client JS (menu, accordion, form).

---

## 6. Conversion system

| Priority | Action | Implementation |
|---|---|---|
| 1 | Call | `tel:+17704822964` in header, hero, footer, sticky bar, contact, thank-you |
| 2 | Request appointment | `/contact#request` (and the same form embedded on New Patients) |
| 3 | Directions | Google Maps embed + “Get directions” link using Place ID |
| 4 | Forms PDF | `/forms/new-patient-paperwork.pdf` |

**CTA copy:** “Call (770) 482-2964” and “Request an appointment — we’ll confirm quickly.”  
Not: “Book now,” “Schedule online instantly,” “Same-week availability.”

**Home trust bar (directly under H1/subhead):**

- 4.8 Google rating · 119 reviews (link `/reviews`)  
- New patients ages 6+  
- Nitrous for anxiety  
- PPO insurance accepted  

**Appointment form fields:**

| Field | Required | Notes |
|---|---|---|
| Full name | yes | |
| Email | yes | type=email |
| Phone | yes | type=tel |
| Best time to contact | yes | 9:00–11:30 AM · 11:30 AM–1:30 PM · 1:30–4:00 PM (matches live form; implies 4:00 close) |
| New or existing patient | yes | **new vs live form** — reduces front-desk back-and-forth |
| Preferred day | no | Mon / Tue / Wed / Thu only |
| Insurance (optional) | no | Helper: “We’ll check your PPO. We don’t accept Medicaid or file dual plans.” |
| Message | yes | |
| SMS/email consent | yes | Keep legal meaning of current Gravity Forms copy (readable rewrite below) |
| Honeypot | hidden | empty field, reject if filled |
| `website` timestamp | hidden | reject suspiciously fast submits |

**Consent copy (readable, same authorization):**

> I agree that The Dental Office of Lithonia may email or text me about my appointment request and office information, which may use automated technology, at the number I provided. Message and data rates may apply. This is required to send the form.

Success → `/thank-you` (noindex). Errors: field-level, fail loud. Missing Formspree env: do not POST into the void.

---

## 7. Home page (wireframe-level)

```
[skip link]
[header: logo | nav | Call | Request]
------------------------------------------------------------
NAMEPLATE                         HERO (real photo)
The Dental Office of Lithonia     unnamed-3.webp (chairside)
Dr. Michael Chen, DMD             or IMG_9765.jpg (team)
Mon–Thu 8:00 AM–4:00 PM
(770) 482-2964  [tel]

H1 Gentle Family Dentistry
in Lithonia, GA

Sub Fear-free, personalized care
with Dr. Michael Chen — unhurried
visits in a friendly family office.

[Call (770) 482-2964]  [Request appointment]

Trust chips: 4.8 (119) · Ages 6+ · Nitrous · PPO
------------------------------------------------------------
Our services  (8 cards → service URLs; Fillings not Filings)
------------------------------------------------------------
Why patients choose us
  Comfort / fear relief     — Michal Carlock snippet
  Short waits               — Joann McKnight snippet
  Thorough hygienists       — Patty Lee snippet
  Clean, personal care      — Debra Morring snippet
  → All reviews
------------------------------------------------------------
Meet Dr. Michael Chen, DMD   [IMG_9773]  → /about
------------------------------------------------------------
Insurance we accept (8 PPOs) + Medicaid / dual exclusions
  → See if we accept your plan
------------------------------------------------------------
New patients 6+ · nitrous · download forms  → /new-patients
------------------------------------------------------------
Google 4.8 / 119  + 3–4 review cards  → /reviews
------------------------------------------------------------
Map + NAP + hours + Get directions
------------------------------------------------------------
FAQ teaser (3) → /faq
------------------------------------------------------------
Final band: Call or request — we’ll confirm quickly
[footer]
[sticky Call | Request]
```

**H1:** Gentle Family Dentistry in Lithonia, GA  
Do not use “Welcome to…” as H1.

---

## 8. Page-by-page acceptance criteria

### 8.1 Home `/`

- [ ] H1 contains “Lithonia, GA” and “dentistry” (or “family dentistry”).  
- [ ] Call and Request Appointment visible without scrolling on a 390×844 viewport.  
- [ ] Trust bar: 4.8, 119, ages 6+, nitrous, PPO.  
- [ ] All service cards link to real service URLs.  
- [ ] “Filings” does not appear.  
- [ ] Why-us quotes use real names from RESEARCH.  
- [ ] Doctor block links to `/about`.  
- [ ] Insurance list + both exclusions + link to `/insurance`.  
- [ ] Map + identical NAP + Mon–Thu 8–4.  
- [ ] Sticky Call | Request on mobile.  
- [ ] No evening/Saturday claims.

### 8.2 About `/about`

- [ ] Bio preserved; grammar polished; MCG → Augusta University correction.  
- [ ] Portrait `IMG_9773.jpg` with descriptive alt.  
- [ ] Team photo(s) without invented staff names.  
- [ ] Ages 6+, nitrous, services list matching RESEARCH.  
- [ ] Link to `/reviews` without calling the rating “5.0.”  
- [ ] `/about-us` redirects here.

### 8.3 Services index `/services`

- [ ] Eight cards (general, cosmetic, whitening, fillings, crowns/bridges/partials, implants, extractions, comfort/nitrous).  
- [ ] Each card: one-sentence plain language + link.  
- [ ] Insurance note + CTA.  
- [ ] `/our-services` redirects here.  
- [ ] Replaces the empty WP page.

### 8.4 Individual service pages

Shared template. Each page:

- [ ] H1 includes the service + Lithonia (or “in Lithonia, GA” in H1 or first paragraph).  
- [ ] What it is, who it’s for, what a visit is like — no outcome guarantees.  
- [ ] Nitrous mention where relevant (especially extractions, fillings, implants, comfort page).  
- [ ] Dual CTAs.  
- [ ] Internal links to insurance + new patients.

**Copy boundaries:**

| Page | May say | Must not say |
|---|---|---|
| General dentistry | Checkups, cleanings (FAQ-supported) | Pediatric specialty |
| Cosmetic | Cosmetic dentistry as listed | Veneers, Invisalign, bonding unless PLACEHOLDER confirmed |
| Whitening | Teeth whitening as listed | Brand systems, “up to N shades” |
| Fillings | Fillings | Material types unless client confirms |
| Crowns / bridges / partials | Crowns, bridges, partials; same-day crowns **as on About** | CEREC or other brands |
| Implants | Implants; continuing education in implants (About) | Success rates, All-on-4, “implant specialist” |
| Extractions | Extractions; wisdom-teeth comfort from **reviews**, not as a specialty title | Sedation beyond nitrous |
| Comfort | Laughing gas / nitrous for anxiety | IV sedation, oral sedation, “sleep dentistry” |

### 8.5 New patients `/new-patients`

- [ ] Ages 6+ in the first screen.  
- [ ] Checklist: photo ID, insurance card, completed PDF, medication list, questions for Dr. Chen.  
- [ ] Nitrous option.  
- [ ] Hours + “we’ll confirm quickly.”  
- [ ] PDF download (v1). **Upload is PLACEHOLDER — not in v1.**  
- [ ] Embedded appointment form or prominent link to `#request`.

### 8.6 Insurance `/insurance`

- [ ] All eight PPOs.  
- [ ] “We do not accept Medicaid.”  
- [ ] “We do not file dual insurance plans.”  
- [ ] “Not sure? Request an appointment and we’ll help you check.”  
- [ ] No prices, no “we accept all PPO,” no extra carriers.

### 8.7 Reviews `/reviews`

- [ ] 4.8 / 119 cited as on live widgets; dated to the 2026-09-16 crawl with a note to recrawl at launch.  
- [ ] All 13 named reviews from RESEARCH.  
- [ ] “Write a Google review” → `https://search.google.com/local/writereview?placeid=ChIJZxuqP4Ot9YgRYQqgsglJjb4`  
- [ ] `/testimonials` redirects here.

### 8.8 Contact `/contact`

- [ ] Map iframe using the env embed src.  
- [ ] `tel:` and `mailto:` and address linked to maps.  
- [ ] Hours Mon–Thu 8–4, Fri–Sun closed.  
- [ ] Parking: **PLACEHOLDER** line — “Parking notes: call us and we’ll help you find the office.” (Do not invent lot details.)  
- [ ] Form at `#request`.  
- [ ] PDF link.  
- [ ] `/contact-us` redirects here.

### 8.9 FAQ `/faq`

Must include (at minimum):

1. What services do you offer?  
2. Which insurance do you accept? (+ exclusions)  
3. How do I become a patient?  
4. Do you see children? (6+)  
5. What are your hours? (honest Mon–Thu 8–4)  
6. Do you offer anything for dental anxiety? (nitrous)  
7. Where are you located / how do I get there?  
8. What should I bring to my first visit?  
9. Do you do extractions / wisdom teeth? (yes extractions; comfort from reviews, not a specialist claim)  
10. Do you offer evening or Saturday hours? (**No. Mon–Thu 8–4. Request an appointment — we’ll confirm quickly.**)

FAQPage JSON-LD on this route.

### 8.10 Privacy + Terms

Sensible drafts, Georgia, Gmail + Formspree as processors, SMS consent explained, no sale of data, appointment requests are not medical advice. Footer links. Not legal advice — labeled as site policy drafts for the practice to review.

### 8.11 Thank you `/thank-you`

- [ ] “Thank you for contacting The Dental Office of Lithonia. We’ll get back to you as soon as we can.”  
- [ ] Call CTA.  
- [ ] `robots: noindex`.

---

## 9. SEO and schema checklist

**Titles / descriptions** — unique per page; Lithonia in every title; Stonecrest / Conyers / DeKalb only where natural (home, contact, about, blog).

Suggested title pattern: `{Intent} | The Dental Office of Lithonia`

Examples:

- Gentle Family Dentist in Lithonia, GA | The Dental Office of Lithonia  
- Meet Dr. Michael Chen, DMD | Lithonia Dentist  
- Dental Implants in Lithonia, GA | The Dental Office of Lithonia  
- PPO Dental Insurance in Lithonia | The Dental Office of Lithonia  

**JSON-LD (`Dentist` + `LocalBusiness` on layout or home; `WebPage` + `BreadcrumbList` per page; `FAQPage` on FAQ; `Person` for Dr. Chen on About):**

- `name`: The Dental Office of Lithonia  
- `image`: logo + team/building  
- `telephone`: +1-770-482-2964  
- `email`: dentalofficelithonia@gmail.com  
- `address`: 7660 Covington Highway #1, Lithonia, GA 30058, US  
- `geo`: 33.7048194, -84.1103184  
- `url`: https://dentalofficelithonia.com  
- `openingHoursSpecification`: Mo–Th 08:00–16:00  
- `aggregateRating`: ratingValue 4.8, reviewCount 119, bestRating 5  
- `sameAs`: Facebook, Yelp, Google Maps place URL  
- `founder` / dentist: Dr. Michael Chen, DMD  

NAP strings must be **character-identical** in header, footer, contact, and schema.

Also: `app/sitemap.ts`, `app/robots.ts`, canonicals, OG image (building or team — not Divi art), thank-you noindex.

**Optional blog (TASK 13, last):**

1. Family dentist in Lithonia, GA: what to expect at your first visit  
2. Dental anxiety in Lithonia: how nitrous (laughing gas) can help  
3. PPO dental insurance in Lithonia & Stonecrest: plans we accept (and what we don’t)  

Each: Lithonia intent, internal links to `/new-patients`, `/insurance`, `/services/comfort-dentistry`, `/contact`. No invented clinical studies.

---

## 10. Component list

| Component | Responsibility |
|---|---|
| `SkipLink` | Keyboard skip to `#main` |
| `SiteHeader` | Logo, nav, Call, Request; mobile menu |
| `SiteFooter` | NAP, hours, insurance snapshot, legal, social |
| `StickyCallBar` | Mobile Call \| Request |
| `Nameplate` | Signature plaque (name, doctor, hours, tel, rating) |
| `Button` / `CallLink` | Primary/secondary; tel vs internal |
| `TrustBar` | Rating, 6+, nitrous, PPO |
| `ServiceCard` | Icon/image, title, one line, link |
| `ReviewCard` | Quote, name, Google attribution |
| `DoctorSpotlight` | Portrait, short bio, link |
| `InsuranceList` | 8 PPOs + exclusions |
| `HoursList` | Mon–Thu 8–4, Fri–Sun closed |
| `NapBlock` | Address, phone, email, maps link |
| `MapEmbed` | iframe from env |
| `AppointmentForm` | Fields, validation, POST `/api/appointment` |
| `FaqAccordion` | Button-based disclosure |
| `PageHero` | Interior pages: H1, lede, CTAs, photo |
| `JsonLd` | JSON-LD script |

Keep components dumb; facts come from `lib/site.ts`.

---

## 11. PLACEHOLDER claims (client must confirm)

Do **not** publish as fact until confirmed:

| Item | Default in v1 |
|---|---|
| Close time 4:00 vs 4:30 | Use **4:00 PM** (client brief + form last slot). Flag directory mismatch. |
| Same-week availability | Do not claim. Use “we’ll confirm quickly.” |
| Parking details | Generic “call us, we’ll help you find the office.” |
| Named staff roster | Testimonials may mention Helen, Maggie, Aysha, Carol. No staff grid. |
| CareCredit / financing | Omit. |
| Veneers, Invisalign, root canals, dentures as services | Omit. |
| CEREC / scanner brand names | Omit. Same-day crowns only as About already states. |
| Second location | Omit. Lithonia only. |
| Awards / years in practice | Omit. |
| New-patient form **upload** | Download + bring only. |
| Blog author byline | “The Dental Office of Lithonia” unless Dr. Chen confirms. |

---

## 12. Copy rules

- Preserve facts from RESEARCH. Polish grammar only on testimonials.  
- Active voice, sentence case on buttons (“Request appointment,” not “SUBMIT NOW”).  
- Independent, calm, specific.  
- Never name competitors on the site.  
- Never invent evenings/Saturdays.  
- “Filings” is always “Fillings.”  
- Official rating is **4.8 from 119 Google reviews** (2026-09-16 live widgets), recrawled at launch.

---

## 13. Out of scope for v1

Online scheduling product (Open Dental / NexHealth / etc.), patient portal, HIPAA form upload, live chat, multilingual, e-commerce, WordPress migration of posts (there are none).
