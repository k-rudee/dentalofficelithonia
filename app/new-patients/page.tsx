import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients Ages 6+ in Lithonia, GA",
  description:
    "New patients ages 6 and older are welcome at The Dental Office of Lithonia. Download forms, see what to bring, and request an appointment.",
  alternates: { canonical: "/new-patients" },
};

export default function NewPatientsPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([{ name: "New patients", path: "/new-patients" }])}
      />
      <PageHero
        eyebrow={`Ages ${site.newPatientAge}+ welcome`}
        title="New patients at The Dental Office of Lithonia"
        lede="Download the forms, bring your insurance card, and request a visit. If you have anxiety, ask about laughing gas (nitrous)."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/new-patients", label: "New patients" }]} />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">What to bring</h2>
          <ul className="mt-4 space-y-2">
            {site.newPatientChecklist.map((item) => (
              <li key={item} className="border-l-2 border-champagne bg-cream px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={site.pdfPath}>Download new patient form</Button>
          </div>
          <p className="mt-4 text-sm text-ink/70">
            Please complete the PDF and bring it with you. Online upload is not
            available yet.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl">What to expect</h2>
          <p className="mt-4 text-ink/85">
            We’re a family dental office for patients ages 6 and older. First
            visits are a conversation with Dr. Chen and the team — not a rush
            through a treatment list.
          </p>
          <p className="mt-3 text-ink/85">
            Open {site.hoursShort}. {site.hoursNote}. Request an appointment —
            we’ll confirm quickly.
          </p>
          <p className="mt-3 text-ink/85">
            Nervous? We offer laughing gas (nitrous). Mention it when you
            request the visit.
          </p>
        </div>
      </section>

      <section className="bg-mist/40">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="font-serif text-3xl">Request your first visit</h2>
          <div className="mt-8 bg-cream p-6">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
