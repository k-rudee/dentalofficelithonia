import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { InsuranceList } from "@/components/InsuranceList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PPO Dental Insurance in Lithonia",
  description: `PPO plans accepted at ${site.name}: ${site.insurance.join(", ")}. We do not accept Medicaid or file dual insurance plans.`,
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([{ name: "Insurance", path: "/insurance" }])}
      />
      <PageHero
        eyebrow="PPO only"
        title="Insurance & payments"
        lede="A published list so you can check before you call. Not sure? Request an appointment and we’ll help you check."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/insurance", label: "Insurance" }]} />
      </div>
      <section className="mx-auto max-w-3xl px-4 pb-14">
        <InsuranceList />
        <div className="mt-8 border border-navy/10 bg-cream p-5">
          <h2 className="font-serif text-xl">What we do not do</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/85">
            {site.exclusions.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-ink/85">
          We do not publish fees on this site. Bring your card to your visit or
          mention your plan when you request an appointment.
        </p>
      </section>
      <CtaBand text="Not sure if we take your plan? Call or request an appointment and we’ll help you check." />
    </main>
  );
}
