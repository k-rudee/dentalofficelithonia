# RESEARCH — The Dental Office of Lithonia

**Audit date:** 2026-09-16  
**Live source of truth:** https://dentalofficelithonia.com/  
**Scope of this file:** inventory of current pages, copy, images/assets, PDFs, tech clues, typos/gaps, and a fact-verification ledger. No site code.

**Method:** Yoast `sitemap_index.xml` + `page-sitemap.xml`; WordPress REST (`/wp-json/wp/v2/pages`, `/media`, `/posts`); homepage, about, contact, testimonials, thank-you HTML; visual inspection of practice photos. Google Maps HTML could not be independently scraped (tool returned a shell page). Google rating/count is cited from the **live Trustindex and Embedder-for-Google-Reviews widgets** on the current site.

---

## 1. Tech clues

| Clue | Evidence |
|---|---|
| WordPress | `/wp-content/`, `/wp-json/`, `robots.txt` Yoast block |
| Theme: **Divi** (Elegant Themes) | `et_pb_section`, `et_pb_row`, `et_pb_button`, `et-pb-icon` |
| Yoast SEO v28.5 | `<!-- This site is optimized with the Yoast SEO plugin v28.5 -->`; sitemap XSL at `/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl` |
| Gravity Forms | `#gform_1` on Contact; orbital theme; honeypot `input_9` |
| Trustindex Google widget v14.1.1 | Homepage testimonials slider; CSS at `/wp-content/uploads/trustindex-google-widget.css` |
| Embedder for Google Reviews | Testimonials page grid; plugin path `/wp-content/plugins/embedder-for-google-reviews/` |
| No blog | `GET /wp-json/wp/v2/posts?per_page=20` → `[]` |
| Sitemap | Only `page-sitemap.xml` (no post/media sitemaps). Lastmods 2026-06-24 → 2026-07-23 |
| Schema today | Yoast `WebSite` + `Organization` only. Logo ImageObject. `sameAs`: Facebook, Yelp, Google Maps. **No `Dentist`, no `openingHours`, no `aggregateRating`, no `address`.** |

**Do not keep WordPress for the rebuild.** The current site is a Divi “dentist office” layout pack with **generic illustrations hosted on `layouts3.divi.support`** (not practice assets).

**Canonical domain in crawl:** `dentalofficelithonia.com`  
**Alternate domains seen only on third-party directories (do not treat as canonical):** `dentaloflithonia.com`, `dentalofficeoflithonia.com`.

---

## 2. Current pages (complete sitemap)

Source: https://dentalofficelithonia.com/page-sitemap.xml

| URL | WP title | Lastmod (sitemap) | Content status |
|---|---|---|---|
| https://dentalofficelithonia.com/ | Home | 2026-07-23 | Full Divi page |
| https://dentalofficelithonia.com/our-services/ | Our Services | 2026-06-24 | **EMPTY** (`content.rendered` is `""`) |
| https://dentalofficelithonia.com/contact-us/ | Contact Us | 2026-07-01 | Map, NAP, PDF, Gravity Form |
| https://dentalofficelithonia.com/testimonials/ | Testimonials | 2026-07-02 | Google review embed + CTAs |
| https://dentalofficelithonia.com/about-us/ | About Us | 2026-07-23 | Dr. Chen bio, team copy, photos |
| https://dentalofficelithonia.com/thank-you/ | Thank You | 2026-07-23 | One H2 with typos; **indexable** |

**Checked and missing:**

| URL | Status |
|---|---|
| https://dentalofficelithonia.com/privacy-policy/ | **404** |
| Terms of use / terms-and-conditions | **Missing** |
| Blog / news | **None** |
| Individual service URLs | **None** |
| Hours published anywhere on-page | **Missing** |

Implied primary nav: Home · Our Services · About Us · Testimonials · Contact Us.

---

## 3. Fact verification ledger

Use this table as the source of truth for the rebuild. Do not invent anything in the **Failed** or **PLACEHOLDER** rows.

| Fact | Status | Source / notes |
|---|---|---|
| Practice name: The Dental Office of Lithonia | **Verified** | `<title>`, logo image, Yoast Organization `name` |
| Dentist: Dr. Michael Chen, DMD | **Verified** | About H2, logo bar, homepage “Meet Dr. Michael Chen, DMD” |
| Address: 7660 Covington Highway #1, Lithonia, GA 30058 | **Verified** | Contact page body |
| Phone: (770) 482-2964 | **Verified** | Contact page (plain text, **not** `tel:` in the body we crawled) |
| Email: dentalofficelithonia@gmail.com | **Verified** | Contact `mailto:` |
| New patients ages 6 and older | **Verified** | About; Home FAQ “How do I become a patient?” and “Do you offer pediatric dentistry?” |
| Laughing gas (nitrous) for anxiety | **Verified** | About; Home FAQ |
| PPO: Aetna | **Verified** | Home + FAQ |
| PPO: Aetna Medicare | **Verified** | Home + FAQ |
| PPO: Ameritas | **Verified** | Home + FAQ |
| PPO: Cigna | **Verified** | Home + FAQ |
| PPO: Cigna Medicare | **Verified** | Home + FAQ |
| PPO: Delta Dental Premier | **Verified** | Home + FAQ |
| PPO: Guardian | **Verified** | Home + FAQ |
| PPO: United Concordia (UCCI) | **Verified** | Home + FAQ |
| Do **not** accept Medicaid | **Verified** | Home + FAQ (`*We do not accept Medicaid insurance plans`) |
| Do **not** file dual insurance plans | **Verified** | Home + FAQ |
| Cosmetic Dentistry (as a labeled service) | **Verified as label only** | Home grid; no body copy |
| General Checkups | **Verified as label** | Home grid; FAQ mentions “general dentistry, cleanings” |
| Dental fillings | **Verified** (Home typo “Filings”) | Home grid; About “Dental Fillings…” |
| Dental implants | **Verified** | Home “Filings & Implants”; About; building sign “IMPLANT CENTER” |
| Teeth whitening | **Verified as label only** | Home grid |
| Crowns, bridges & partials | **Verified** | Home grid; About |
| Extractions | **Verified** | Home grid; About; FAQ; reviews mention wisdom-tooth extraction |
| Digital impression, dental implants, same-day crowns | **Verified as About-page claims** | Do not expand to brand names (CEREC, etc.) |
| Facebook | **Verified** | https://www.facebook.com/TheDentalOfficeOfLithonia |
| Yelp (schema `sameAs`) | **Verified in schema** | https://www.yelp.com/biz/the-dental-office-of-lithonia-lithonia |
| Google Place ID | **Verified** | `ChIJZxuqP4Ot9YgRYQqgsglJjb4` |
| Coordinates | **Verified** | `33.7048194, -84.1103184` |
| Google rating **4.8 / 5 from 119 reviews** | **Verified on live site widgets** | Trustindex: “Google rating score: **4.8** of 5, based on **119 reviews**.” Embedder header: “Excellent · 4.8 · 119 reviews.” Independent Google Maps HTML scrape **failed**. Re-check GBP at launch. Do **not** cite “5 star” as the official rating (About page currently does). |
| Hours Mon–Thu 8:00 AM–4:00 PM; Fri–Sun CLOSED | **Not published on the live site.** | Gravity Form last slot is `1:30 PM – 4:00 PM` (supports a 4:00 close). Yelp, Chamber of Commerce, and dental.page list **8:00 AM–4:30 PM** Mon–Thu. **PLACEHOLDER — confirm 4:00 vs 4:30 with the client.** Until confirmed, use **8:00 AM–4:00 PM** per the client brief. |
| Parking | **Failed verification** | Not mentioned on site |
| Pricing | **Failed verification** | Not on site. Do not invent. |
| Financing / CareCredit | **Failed on site** | CareCredit doctor-locator page exists off-site. **PLACEHOLDER — do not claim.** |
| Awards / years in practice / specialties | **Failed** | Not on practice site. US News “Patients Top Choice” is an aggregator — do not claim. |
| Staff roster (names/roles) | **Failed as official copy** | About “Meet Our Team” has **no names**. Reviews name Helen, Maggie (hygienists), Aysha, Carol (front desk). Use in testimonials only unless client confirms a roster. |
| Second location (Duluth) | **Do not publish** | Off-site review + 2021 Facebook “two locations.” Live site is Lithonia-only. **PLACEHOLDER confirm single location.** |
| Veneers / Invisalign / root canals / dentures as standalone services | **Failed** | Not listed on current site |
| Evening or Saturday hours | **Failed — do not claim** | Site and directories agree Fri–Sun closed. Competitors often have evenings/Saturdays; this practice does not. |

---

## 4. Copy inventory (preserve substance)

### 4.1 Home — https://dentalofficelithonia.com/

**H1:** Welcome to The Dental Office Of Lithonia  
*(Weak local SEO. Rebuild H1 must target Lithonia, GA.)*

**Subhead (H5):** Gentle and Professional Dental Team. We pride ourselves in providing customized personal dental care in a friendly family environment. Modern technology in dentistry and a transparent and organized team.

**CTAs:**  
- Schedule Appointment → `/contact-us/`  
- Become a Patient → `/contact-us/`  
Hero does **not** include click-to-call.

**Services grid** (icons only; **not linked**; **no descriptions**):

1. Cosmetic Dentistry  
2. General Checkups  
3. Dental **Filings** & Implants *(typo)*  
4. Teeth Whitening  
5. Crowns, Bridges & Partials  
6. Extractions  

**About block:**

> Dr. Chen and his staff are committed to the well-being of your dental health! At The Dental Office of Lithonia, you will be served by a team of highly skilled, expertly trained, and very experienced clinicians.

> The Dental Office of Lithonia is a highly regarded dental practice located in Lithonia, GA. Patients appreciate the warm and welcoming atmosphere created by the staff, especially Dr. Michael Chen, who is known for his kind and thorough approach to dental care. The office emphasizes patient comfort and satisfaction, making it a popular choice for individuals seeking compassionate dental services.

**Insurance heading + list:** “Dental Insurance Plans” / “We accept and honor the following PPO (Preferred Provider Organization) dental insurances:” + eight plans + two exclusions.

**“Certified Experts”** (Divi leftover heading) +  
> Doctor's expertise: Dr. Chen is praised for his extensive knowledge and experience, particularly regarding pain management during procedures, which contributes to a comfortable patient experience.

**Meet Dr. Michael Chen, DMD** — portrait links to `/about-us/`; role line “Dentist.” No bio on Home.

**Testimonials:** Trustindex slider (10 Google reviews listed in §5). Footer of widget: “Google rating score: 4.8 of 5, based on 119 reviews.”

**“We’re Accepting New Patients!” accordion:**

| Q | A (substance) |
|---|---|
| What services does The Dental Office of Lithonia offer? | General dentistry, cleanings, extractions, and cosmetic procedures. |
| Does the venue accept insurance plans? | Full PPO list + Medicaid / dual-insurance exclusions. (“the venue” is template phrasing — rewrite.) |
| How do I become a patient? | Contact and schedule an **apointment** *(typo)*. New-patient PDF link. Ages 6+. Nitrous. |
| Do you offer pediatric dentistry? | New patients ages 6 and older welcome. Nitrous. PDF link. *(This is an age policy, not a pediatric-specialty claim.)* |

### 4.2 About — https://dentalofficelithonia.com/about-us/

**H1:** About Us  
**H2:** Dr. Michael Chen, DMD  

**Bio (keep; polish grammar only):**

> Dr. Michael Chen is a native of Milledgeville, Georgia. He graduated valedictorian- from Baldwin High School in 1997 and afterwards attended The University of Georgia for his undergraduate degree in Biology. He obtained his Doctorate Degree of Dental Medicine at The Medical College of Georgia now known as Augusta State University. Dr. Chen continues his education to ensure that he is up to date on the latest dental techniques and technology such as digital impression, dental implants, and even same day crowns. He and is wife Veronica have 3 kids and they enjoy hiking at state parks and they are very active with the community swim team.

**Factual correction (not invention):** The Medical College of Georgia is now **Augusta University**, not “Augusta State University.” Rebuild should say “Augusta University (formerly the Medical College of Georgia).”

**H2:** Meet Our Team — no named individuals.

**Services Provided:** Dental Fillings, Extractions, Crowns, Implants, Bridges and Partials.  
New Patients ages 6 and older Welcome!  
We offer laughing gas (nitrous) if you have anxiety.  
Link: “Check out our 5 star google reviews to read out patients’ great feedback!” *(typos “out”; official widget is 4.8 not 5.0)*

### 4.3 Contact — https://dentalofficelithonia.com/contact-us/

**H1:** Contact Us  

Google Maps iframe:

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1595799820343!2d-84.1103184!3d33.7048194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ad833faa1b67%3A0xbe8d4909b2a00a61!2sThe%20Dental%20Office%20of%20Lithonia!5e0!3m2!1sen!2sus!4v1782419047587!5m2!1sen!2sus
```

Three columns: Call the Office `(770) 482-2964` · Office Location `7660 Covington Highway #1, Lithonia, GA 30058` · Email Us `dentalofficelithonia@gmail.com`

**Hours: not listed.**

**First-Time Patient?**  
Call (770) 482-2964. Copy: complete new-patient forms and bring them.  
PDF: https://dentalofficelithonia.com/wp-content/uploads/2026/07/New-Patient-Paperwork.pdf

**Book Appointment — Gravity Form #1 fields:**

| Field | Required | Notes |
|---|---|---|
| Name | yes | placeholder `Name *` |
| Email | yes | |
| Phone | yes | |
| Best Time to Contact | yes | `9:00 AM - 11:30 AM` · `11:30 AM - 1:30 PM` · `1:30 PM - 4:00 PM` |
| Message | yes | placeholder `Type Message` |
| Consent checkbox | yes | SMS/email authorization (full text in PLAN) |
| Honeypot “Phone” (`input_9`) | hidden | “This field is for validation purposes and should be left unchanged.” |

### 4.4 Testimonials — https://dentalofficelithonia.com/testimonials/

**H1:** Testimonials  
**H5:** General, Cosmetic, and Restorative Dentistry  
Buttons: Book Appointment *(href empty)* · Submit A Review (Google Maps reviews)  
Widget: “Excellent · 4.8 · 119 reviews” · Write a review → `https://search.google.com/local/writereview?placeid=ChIJZxuqP4Ot9YgRYQqgsglJjb4`

Reviews on this page include the 10 homepage reviews **plus** Lawanda Curtiss, Jacole St.Rozier, Danielle Ruff (and additional Google cards in the embed; crawl truncated after Danielle/Jacole). Rebuild **must keep the 10 named in the client brief** and **should keep the three extra named reviews already published on this page**.

### 4.5 Thank you — https://dentalofficelithonia.com/thank-you/

> Than you for contact Dental Office of Lithonia. We'll get back to you as soon as we can.

Index, follow (should be noindex on rebuild).

---

## 5. Testimonials (names + substance)

Grammar polish only in the rebuild. Do not rewrite voice.

### Required (client brief + live Home widget)

**Michal Carlock**  
> I will never go anywhere else! This is the best dentist on earth! I avoided the dentist like a plague n it was always full of dread until now. Like I felt nothing getting my wisdom teeth out. I’ve been healed of my fear of the dentist !!

**Joann McKnight**  
> I just love the staff and the dentist. They are so friendly. They get you in and out with no long wait

**Dwight Chandler**  
> Service was very professional and knowledgeable and courteous!

**Jerry Wilkerson**  
> 100% satisfied staffs great Dr Chen is the best.

**Patty Lee**  
> The hygienists are very good and thorough. Maggie and Helen

**Crystal Cross**  
> Great staff

**Diane Wright**  
> Always a friendly and professional experience.

**Theo Igbalajobi**  
> The service was professional and the staff were very helpful.

**Debra Morring**  
> I have been coming to Dr Chen for the past couple of years!! I can honestly say that this practice is always 100% clean the staff is welcoming and the hygienist is informative and easy to talk too! Since being there my oral health has improved I can appreciate a welcoming Dentist and his staff!

**Ron Williams**  
> Dr. Chen and his staff are always very kind and professional. Also, Helen does a great job on my cleanings. Once again, thanks

### Also on live `/testimonials/` (include)

**Lawanda Curtiss**  
> I love this place. I have had so many negative experiences with dental offices throughout the years. It seemed like every time I went to the dentist, there was something else wrong with my teeth. Ever since I’ve been going to Dr. Chen, the condition of my teeth have been getting better! Most recently, I switched my son to Dr. Chen because his dentist (Children’s Dentistry of Stonecrest) were horrible with communication and every time we went they were finding major problems with his teeth. Dr. Chen sat with him for a good 30 minutes educating him on how to improve the condition of his teeth and let him know what the root cause of all of his dental problems was. My son felt relieved and encouraged knowing that he was in good hands with Dr. Chen. I am going to switch my daughter to his office next. He is amazing, his staff is amazing and I highly recommend his office!

**Jacole St.Rozier**  
> They are amazing, everyone is so nice and welcoming, they make you feel very comfortable even in a nervous situation. Helen is so great and amazing she made sure I was comfortable throughout my procedure. I would recommend this dentist for your oral health.

**Danielle Ruff**  
> I found this dental office while shopping around, I needed to switch from my old dentist ASAP as they were very unprofessional, dismissive, money hungry, and not personable. I saw all the great reviews for this office and thought I would give it a try and I’m so glad that I did, it’s like a breath of fresh air coming from my previous dentist, Dr. Michael Chen was very kind, thorough, and matter of fact when discussing my dental care during the initial visit. I also saw Helen the Hygienist and she was beyond sweet and accommodating, going as far as giving me a blanket to use while getting my teeth cleaned because I was cold. She made my visit relaxing and I don’t usually say that about the dentist because I’m usually on edge, I felt safe and cared for. I would also like to shout out the front desk staff Aysha and Carol, whether via phone or in person they have always been pleasant, professional, patient, and understanding, it’s much appreciated. I look forward to my follow up visits.

**Review themes (positioning, not new clinical claims):** fear/anxiety relief including wisdom teeth; short waits; cleanliness; thorough hygienists (Maggie, Helen); personal education; kind front desk (Aysha, Carol).

---

## 6. Reusable asset inventory

Base: `https://dentalofficelithonia.com/wp-content/uploads/`

### 6.1 Practice-owned — **download and reuse**

| Full URL | File | Visual (inspected) | Rebuild use |
|---|---|---|---|
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/487239535_1296809138785623_1366229850040879874_n-scaled.jpg | 2560×821 JPEG, ~339 KB | Wordmark “The Dental Office of Lithonia” / “Dr. Michael Chen” navy on light | Header logo; trace to SVG if possible |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/cropped-IMG_9765.jpg | 512×512 JPEG | Crop of team photo (site icon) | Favicon source |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/IMG_9773.jpg | 1290×1808 JPEG, ~356 KB | Dr. Chen portrait, white coat, blue patterned tie, gray backdrop | About + doctor spotlight |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/IMG_9765.jpg | 1290×1247 JPEG, ~459 KB | Team of 7 in front of blue sign “GENERAL FAMILY DENTISTRY & IMPLANT CENTER LITHONIA, GA” | Home/about social proof |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/IMG_9766.jpg | 1290×1271 JPEG, ~537 KB | Team of 7 on porch railing | About / new patients |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed.webp | 704×263 WebP | Brick building exterior, oval blue sign, lawn, pines | Contact / directions |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-5.webp | 640×372 WebP | Wider street view of the office row, Covington Hwy | Location context |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-1.webp | 765×1020 WebP | Operatory: beige chair, overhead light, TV, wood floor | Services / comfort |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-4.webp | 765×1020 WebP | Operatory: dark chair, delivery unit, window blinds | Services |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-2.webp | 765×1020 WebP | Hallway, wood floors, printer, framed art | Atmosphere |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-1-1.webp | 765×1020 WebP | Waiting room: two black leather chairs, landscape painting, wood cabinet | Comfort / new patients |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/unnamed-3.webp | 765×1020 WebP | Dr. Chen in navy scrubs showing a tooth model to a patient in the chair | Hero candidate (education / gentle care) |
| https://dentalofficelithonia.com/wp-content/uploads/2026/07/New-Patient-Paperwork.pdf | PDF, ~489 KB | New patient forms | New Patients + Contact download |

All current media `alt_text` is empty. Rebuild must add real alts.

**Photo quality:** phone photos, mixed lighting. Prefer these real images over stock. Crop and color-grade; do **not** replace Dr. Chen or the team with models. Building sign says “Implant Center” — keep as photography, do **not** retitle the website.

### 6.2 In media library but unused / low value

| Full URL | Notes |
|---|---|
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/Untitled-1.jpg | 1920×300 decorative banner; not referenced in page JSON |
| https://dentalofficelithonia.com/wp-content/uploads/2026/06/Untitled-2.jpg | 1920×300 decorative banner; not referenced in page JSON |

Inspect before reuse; likely skip.

### 6.3 Do **not** reuse (Divi layout-pack stock)

These are third-party theme illustrations, not practice photography:

- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/09/dentist-office-illustration-04@2x.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/09/dentist-office-illustration-09@2x-1.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/09/dentist-office-illustration-16@2x.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/09/dentist-office-illustration-15@2x.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/09/dentist-office-illustration-02@2x.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-1.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-2.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-3.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-4.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-5.png
- https://layouts3.divi.support/dentist-office/wp-content/uploads/sites/5/2023/10/dentist-icon-6.png

---

## 7. Typos and quality gaps

| Location | Issue |
|---|---|
| Home services | **Filings** → Fillings |
| About bio | “valedictorian- from”; “He and **is** wife”; “Augusta State University” |
| About reviews link | “read **out** patients’”; claims “5 star” vs widget 4.8 |
| Home FAQ | “apointment”; “Does the **venue** accept” |
| Thank you | “Than you for contact Dental Office of Lithonia.” |
| Home | “Certified Experts” leftover heading |
| `/our-services/` | Empty page |
| Home services | Tiles are not links and have no copy |
| Entire site | Hours not published |
| Contact phone | Not `tel:` |
| Home hero | No Call CTA |
| Mobile | No sticky Call / Book bar |
| Schema | No Dentist / address / hours / rating |
| Legal | No privacy or terms |
| Thank you | Indexable |
| Images | Empty alt attributes |
| Testimonials “Book Appointment” | `href=""` |
| Consent | SMS marketing language — keep legally, make readable |

---

## 8. Competitive positioning (strategy only)

**Do not scrape or republish competitor copy or images.** Names are for positioning, not on-page attack ads.

Nearby practices (DentFirst Stonecrest, Progressive Dental Group, Dental Dreams, Panola Family Dental) typically win on **evening/Saturday hours** and **multi-specialty “one-stop”** branding. DentFirst directory listings (not their website copy) show weekday evenings and Saturday mornings.

**Differentiate this practice honestly:**

1. Independent, personal care with **Dr. Michael Chen** (named doctor, not a chain lobby).  
2. Fear-free / gentle dentistry — strongest review theme (dread, wisdom teeth, “healed of my fear”).  
3. Cleanliness, short waits, thorough hygienists.  
4. Transparent PPO list (reduces “do you take my plan?” friction) plus visible Medicaid / dual-insurance exclusions.  
5. Clear new-patient path, ages 6+.  

**Do not claim evening or Saturday hours.** Frame Mon–Thu 8–4 as unhurried: “Request an appointment — we’ll confirm quickly.”

---

## 9. Conversion gaps on the current site

- Above-the-fold CTA is “Schedule Appointment,” not Call.  
- Phone is buried on Contact and not consistently click-to-call.  
- Insurance list exists but is not a dedicated, scannable page.  
- New-patient PDF exists but there is no New Patients page / checklist.  
- Services cannot be landed on from Google (one empty index page).  
- Hours missing → patients bounce to GBP, which may say 4:30.  
- Trust (4.8 / 119) is in a third-party widget, not in a first-party trust bar or schema.  
- Generic Divi cartoons undermine “premium independent practice.”

---

## 10. What failed verification (do not invent)

- Office hours on the practice website  
- Parking  
- Prices  
- Financing  
- Named staff bios  
- Awards / years in practice  
- Extra services (veneers, Invisalign, etc.)  
- Equipment brand names  
- Same-week availability  
- Second location  
- Independent live Google Maps rating HTML (widgets on-site still say 4.8 / 119)

Every reusable asset URL is listed in §6. Every fact is **Verified**, **Failed**, or **PLACEHOLDER** in §3.
