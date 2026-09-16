import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { HoursList } from "@/components/HoursList";
import { InsuranceList } from "@/components/InsuranceList";
import { MapEmbed } from "@/components/MapEmbed";
import { NapBlock } from "@/components/NapBlock";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBar } from "@/components/TrustBar";
import { images } from "@/lib/assets";
import { services } from "@/lib/services";
import { site, telHref } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: {
    absolute: `Gentle Family Dentist in Lithonia, GA | ${site.name}`,
  },
  description:
    "Gentle family dentistry in Lithonia, GA with Dr. Michael Chen, DMD. New patients ages 6+. Nitrous for anxiety. PPO insurance accepted. Call (770) 482-2964.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <section className="border-b border-champagne/30">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center px-4 py-10 lg:col-span-6 lg:py-16 lg:pr-12">
            <p className="kicker stagger-1">Independent family dentistry</p>
            <h1 className="mt-4 font-serif text-[2.45rem] leading-[1.08] text-navy md:text-[3.5rem]">
              Gentle Family Dentistry in Lithonia, GA
            </h1>
            <p className="stagger-2 mt-5 max-w-xl text-lg text-ink/85">
              Fear-free, personalized care with {site.doctor} — unhurried visits
              in a friendly family office.
            </p>
            <div className="stagger-3 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={telHref()}>Call {site.phoneDisplay}</Button>
              <Button href="/contact#request" variant="secondary">
                Request appointment
              </Button>
            </div>
            <div className="stagger-4 mt-7">
              <TrustBar />
            </div>
          </div>
          <div className="relative min-h-[20rem] lg:col-span-6 lg:min-h-[36rem]">
            <Image
              src={images.chairside.src}
              alt={images.chairside.alt}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Care we provide</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Our services</h2>
            </div>
            <Link href="/services" className="link-navy text-sm font-medium">
              All services
            </Link>
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] max-h-[540px] overflow-hidden">
            <Image
              src={images.drChen.src}
              alt={images.drChen.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal>
          <p className="kicker">Your dentist</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Meet {site.doctor}</h2>
          <p className="mt-4 text-ink/85">
            Dr. Chen and his staff are committed to the well-being of your
            dental health. Patients describe a warm, welcoming atmosphere and a
            kind, thorough approach — including care for people who have been
            afraid of the dentist.
          </p>
          <p className="mt-3 text-ink/85">
            He continues his education on techniques such as digital
            impressions, dental implants, and same-day crowns.
          </p>
          <Button href="/about" variant="secondary" className="mt-6">
            About Dr. Chen
          </Button>
        </Reveal>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl">Insurance we accept</h2>
            <p className="mt-2 text-ink/80">
              A clear PPO list so you don’t have to guess. See if we accept your
              plan before you call.
            </p>
            <div className="mt-6">
              <InsuranceList />
            </div>
            <Link href="/insurance" className="link-navy mt-4 inline-block text-sm font-medium">
              See if we accept your plan
            </Link>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-3xl">New patients ages 6+</h2>
            <p className="mt-4 text-ink/85">
              We’re accepting new patients ages 6 and older. Download the
              paperwork, bring your insurance card, and request a time that
              works Monday–Thursday.
            </p>
            <p className="mt-3 text-ink/85">
              If you have anxiety, we offer laughing gas (nitrous). Mention it
              when you request your visit.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/new-patients">New patient guide</Button>
              <Button href={site.pdfPath} variant="secondary">
                Download forms
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl">
              Google {site.ratingValue} from {site.reviewCount} reviews
            </h2>
            <Link href="/reviews" className="link-navy text-sm font-medium">
              All reviews
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} snippet />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-mist/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl">Find us in Lithonia</h2>
            <div className="mt-6 text-navy [&_a]:text-navy">
              <NapBlock />
            </div>
            <div className="mt-6 max-w-sm">
              <HoursList compact />
            </div>
            <Button href={site.mapsPlaceUrl} variant="secondary" className="mt-6">
              Get directions
            </Button>
          </Reveal>
          <MapEmbed className="min-h-80" />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
