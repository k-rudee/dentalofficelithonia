import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Website terms for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={[{ href: "/terms", label: "Terms" }]} />
        <h1 className="mt-6 font-serif text-4xl">Terms of use</h1>
        <p className="mt-4 text-sm text-ink/60">
          Draft for the practice to review. This is not legal advice. Last
          updated {site.ratingAsOf}.
        </p>
        <div className="mt-8 space-y-4 text-ink/85">
          <p>
            This website is provided by {site.name} for general information
            about our Lithonia, Georgia dental office. It does not create a
            dentist–patient relationship by itself.
          </p>
          <h2 className="font-serif text-2xl pt-4">No medical advice</h2>
          <p>
            Content on this site, including blog posts, service pages, and the
            office assistant, is informational. It is not a diagnosis or a
            treatment plan. Only an in-person exam with Dr. Chen can determine
            what is appropriate for you.
          </p>
          <h2 className="font-serif text-2xl pt-4">Appointments</h2>
          <p>
            The request form is a request, not confirmed online scheduling. We
            will confirm a time during published hours: {site.hoursShort}.{" "}
            {site.hoursNote}.
          </p>
          <h2 className="font-serif text-2xl pt-4">Accuracy</h2>
          <p>
            We try to keep hours, insurance, and contact details current. If
            something conflicts with what the office tells you by phone, the
            office controls.
          </p>
          <h2 className="font-serif text-2xl pt-4">Georgia</h2>
          <p>
            These terms are governed by the laws of the State of Georgia,
            without regard to conflict-of-law rules.
          </p>
          <p>
            Questions: {site.email} or {site.phoneDisplay}.
          </p>
        </div>
      </article>
    </main>
  );
}
