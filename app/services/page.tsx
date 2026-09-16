import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services in Lithonia, GA",
  description:
    "General dentistry, fillings, extractions, crowns, implants, whitening, and comfort dentistry (nitrous) at The Dental Office of Lithonia.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Lithonia, GA"
        title="Dental services"
        lede="Independent care with Dr. Michael Chen — from checkups and fillings to implants, extractions, and nitrous for anxiety."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/services", label: "Services" }]} />
      </div>
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/70">
          We accept listed PPO plans. {site.exclusions[0]} {site.exclusions[1]}{" "}
          <a href="/insurance" className="link-navy">
            See insurance
          </a>
          .
        </p>
      </section>
      <CtaBand />
    </main>
  );
}
