import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { images } from "@/lib/assets";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet Dr. Michael Chen, DMD | Lithonia Dentist",
  description:
    "Dr. Michael Chen, DMD, provides gentle, personal dental care in Lithonia, GA. New patients ages 6+. Nitrous for anxiety.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <JsonLd data={personSchema()} />
      <PageHero
        eyebrow={site.name}
        title="Meet Dr. Michael Chen, DMD"
        lede="Gentle, professional care in a friendly family environment — with a dentist who explains the plan in plain language."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/about", label: "About" }]} />
      </div>

      <article className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-14 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.drChen.src}
              alt={images.drChen.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-2xl">About Dr. Chen</h2>
          <p className="mt-4 text-ink/85">
            Dr. Michael Chen is a native of Milledgeville, Georgia. He graduated
            valedictorian from Baldwin High School in 1997 and afterwards attended
            the University of Georgia for his undergraduate degree in Biology. He
            obtained his Doctor of Dental Medicine degree at the Medical College
            of Georgia, now Augusta University (formerly the Medical College of
            Georgia).
          </p>
          <p className="mt-4 text-ink/85">
            Dr. Chen continues his education to stay up to date on techniques such
            as digital impressions, dental implants, and same-day crowns. He and
            his wife Veronica have three kids. They enjoy hiking at state parks
            and are active with the community swim team.
          </p>
          <p className="mt-4 text-ink/85">
            Dr. Chen and his staff are committed to the well-being of your dental
            health. At The Dental Office of Lithonia you will be served by a team
            of skilled clinicians. Patients appreciate the warm, welcoming
            atmosphere and Dr. Chen’s kind, thorough approach — including care for
            people who have been anxious about the dentist.
          </p>
        </div>
      </article>

      <section className="bg-mist/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Meet our team</h2>
            <p className="mt-4 text-ink/85">
              You’ll be cared for by Dr. Chen and a small, organized team. We
              don’t publish a staff roster on this site. Patients often mention
              hygienists and front-desk team members by name in Google reviews.
            </p>
            <ul className="mt-6 space-y-2 text-ink/85">
              <li>Dental fillings, extractions, crowns, implants, bridges, and partials</li>
              <li>New patients ages 6 and older welcome</li>
              <li>Laughing gas (nitrous) if you have anxiety</li>
            </ul>
            <p className="mt-4">
              <Link href="/reviews" className="link-navy font-medium">
                Read our {site.ratingValue} Google rating from {site.reviewCount} reviews
              </Link>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={telHref()}>Call {site.phoneDisplay}</Button>
              <Button href="/contact#request" variant="secondary">
                Request appointment
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.teamSign.src}
              alt={images.teamSign.alt}
              fill
              className="photo-grade object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
