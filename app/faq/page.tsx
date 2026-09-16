import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Lithonia Dentist",
  description:
    "Hours, insurance, new patients ages 6+, nitrous for anxiety, and how to request an appointment at The Dental Office of Lithonia.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd data={breadcrumbSchema([{ name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        lede="Hours, insurance, ages 6+, nitrous, and how to become a patient — answered without guesswork."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/faq", label: "FAQ" }]} />
      </div>
      <section className="mx-auto max-w-3xl px-4 pb-14">
        <FaqAccordion items={faqs} />
      </section>
      <CtaBand />
    </main>
  );
}
