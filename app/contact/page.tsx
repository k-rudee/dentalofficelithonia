import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HoursList } from "@/components/HoursList";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { NapBlock } from "@/components/NapBlock";
import { PageHero } from "@/components/PageHero";
import { images } from "@/lib/assets";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions in Lithonia, GA",
  description: `Visit ${site.name} at ${site.address}. Call ${site.phoneDisplay} or request an appointment. Open Monday–Thursday, 8:00 AM–4:00 PM.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Lithonia, GA"
        title="Contact & directions"
        lede={`Call, email, or request an appointment. We’ll confirm quickly during ${site.hoursShort}.`}
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/contact", label: "Contact" }]} />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Office</h2>
          <div className="mt-4 text-navy [&_a]:text-navy">
            <NapBlock />
          </div>
          <div className="mt-6 max-w-sm">
            <HoursList />
          </div>
          <p className="mt-4 text-sm text-ink/70">{site.parkingNote}</p>
          <p className="mt-4 text-ink/85">
            First visit?{" "}
            <a href={site.pdfPath} className="link-navy font-medium">
              Download our new patient form
            </a>{" "}
            and bring it with you.
          </p>
          <div className="relative mt-8 aspect-[21/9] overflow-hidden">
            <Image
              src={images.building.src}
              alt={images.building.alt}
              fill
              className="photo-grade object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <MapEmbed className="min-h-80" />
      </section>

      <section className="bg-mist/40">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="font-serif text-3xl">Request an appointment</h2>
          <p className="mt-2 text-ink/80">
            We’ll confirm quickly. This form is a request — not instant online
            scheduling.
          </p>
          <div className="mt-8 bg-cream p-6">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
