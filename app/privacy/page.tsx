import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy draft for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={[{ href: "/privacy", label: "Privacy" }]} />
        <h1 className="mt-6 font-serif text-4xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-ink/60">
          Draft for the practice to review. This is not legal advice. Last
          updated {site.ratingAsOf}.
        </p>
        <div className="mt-8 space-y-4 text-ink/85">
          <p>
            {site.name} (“we”) operates {site.url} and the office at{" "}
            {site.address}. This page describes how we handle information you
            send through the website.
          </p>
          <h2 className="font-serif text-2xl pt-4">What we collect</h2>
          <p>
            If you request an appointment — on the contact form or through the
            office assistant — we collect the name, email, phone number,
            preferred time, patient type, optional insurance note, and message
            you submit, plus the consent checkbox. Chat messages you send to
            the assistant are used to generate a reply. We also receive
            standard server logs (IP address, browser) from our hosting
            provider.
          </p>
          <h2 className="font-serif text-2xl pt-4">How we use it</h2>
          <p>
            We use appointment-form information to respond to your request and
            to email or text you about that request and office information, as
            authorized by the consent you give. We do not sell your information.
          </p>
          <h2 className="font-serif text-2xl pt-4">Processors</h2>
          <p>
            Forms may be delivered through Formspree. Email may be handled by
            Google (Gmail at {site.email}). The site is hosted on Vercel. The
            office assistant is powered by Ollama Cloud: your chat text is sent
            to that service to generate a reply. We do not use website chats as
            a medical-records portal, and this site does not store a transcript
            after the session. Those companies process data according to their
            own policies.
          </p>
          <h2 className="font-serif text-2xl pt-4">SMS and email</h2>
          <p>
            Submitting the form with consent authorizes {site.name} to send
            texts and/or emails, which may use automated technology, to the
            number you provide. Message and data rates may apply. You may opt
            out of texts by replying STOP.
          </p>
          <h2 className="font-serif text-2xl pt-4">Contact</h2>
          <p>
            Privacy questions: {site.email} or {site.phoneDisplay}.
          </p>
        </div>
      </article>
    </main>
  );
}
