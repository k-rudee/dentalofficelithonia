"use client";

import { useRef, useState } from "react";
import { contactTimes, mailtoHref, preferredDays, site, telHref } from "@/lib/site";

type Errors = Partial<Record<string, string>>;

export function AppointmentForm() {
  const started = useRef(Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const time = String(form.get("bestTime") || "").trim();
    const patient = String(form.get("patientType") || "").trim();
    const message = String(form.get("message") || "").trim();
    const consent = form.get("consent");
    if (!name) next.name = "Enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email.";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a phone number we can reach.";
    if (!time) next.bestTime = "Choose a time window.";
    if (!patient) next.patientType = "Tell us if you are new or existing.";
    if (!message) next.message = "Tell us how we can help.";
    if (!consent) next.consent = "Consent is required to send the form.";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      formEl.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          bestTime: form.get("bestTime"),
          patientType: form.get("patientType"),
          preferredDay: form.get("preferredDay"),
          insurance: form.get("insurance"),
          message: form.get("message"),
          consent: Boolean(form.get("consent")),
          honeypot: form.get("company"),
          startedAt: started.current,
        }),
      });
      if (res.ok) {
        window.location.href = "/thank-you";
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setStatus("error");
      setServerError(
        data.error ||
          `The form could not be sent. Call ${site.phoneDisplay} or email ${site.email}.`,
      );
    } catch {
      setStatus("error");
      setServerError(
        `The form could not be sent. Call ${site.phoneDisplay} or email ${site.email}.`,
      );
    }
  }

  const field =
    "mt-1 w-full rounded-none border border-navy/20 bg-cream px-3 py-2.5 text-ink";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" id="request">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Full name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
        {errors.name ? <p id="err-name" className="mt-1 text-sm text-danger">{errors.name}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
          {errors.email ? <p id="err-email" className="mt-1 text-sm text-danger">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} />
          {errors.phone ? <p id="err-phone" className="mt-1 text-sm text-danger">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bestTime" className="text-sm font-medium text-navy">
            Best time to contact
          </label>
          <select id="bestTime" name="bestTime" defaultValue="" className={field} aria-invalid={!!errors.bestTime} aria-describedby={errors.bestTime ? "err-time" : undefined}>
            <option value="" disabled>
              Choose a window
            </option>
            {contactTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.bestTime ? <p id="err-time" className="mt-1 text-sm text-danger">{errors.bestTime}</p> : null}
        </div>
        <div>
          <label htmlFor="patientType" className="text-sm font-medium text-navy">
            New or existing patient
          </label>
          <select id="patientType" name="patientType" defaultValue="" className={field} aria-invalid={!!errors.patientType} aria-describedby={errors.patientType ? "err-patient" : undefined}>
            <option value="" disabled>
              Choose one
            </option>
            <option value="New patient">New patient</option>
            <option value="Existing patient">Existing patient</option>
          </select>
          {errors.patientType ? <p id="err-patient" className="mt-1 text-sm text-danger">{errors.patientType}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDay" className="text-sm font-medium text-navy">
            Preferred day <span className="font-normal text-ink/60">(optional)</span>
          </label>
          <select id="preferredDay" name="preferredDay" defaultValue="" className={field}>
            <option value="">No preference</option>
            {preferredDays.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="insurance" className="text-sm font-medium text-navy">
            Insurance <span className="font-normal text-ink/60">(optional)</span>
          </label>
          <input id="insurance" name="insurance" type="text" className={field} />
          <p className="mt-1 text-xs text-ink/60">
            We’ll check your PPO. We don’t accept Medicaid or file dual plans.
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : undefined} />
        {errors.message ? <p id="err-message" className="mt-1 text-sm text-danger">{errors.message}</p> : null}
      </div>

      <fieldset>
        <legend className="sr-only">Consent</legend>
        <label className="flex items-start gap-3 text-sm text-ink/85">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            className="mt-1"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "err-consent" : undefined}
          />
          <span>
            I agree that The Dental Office of Lithonia may email or text me about
            my appointment request and office information, which may use automated
            technology, at the number I provided. Message and data rates may apply.
            This is required to send the form.
          </span>
        </label>
        {errors.consent ? <p id="err-consent" className="mt-1 text-sm text-danger">{errors.consent}</p> : null}
      </fieldset>

      {serverError ? (
        <p className="border border-danger/30 bg-cream px-3 py-2 text-sm text-danger" role="alert">
          {serverError}{" "}
          <a className="underline" href={telHref()}>
            {site.phoneDisplay}
          </a>{" "}
          ·{" "}
          <a className="underline" href={mailtoHref()}>
            {site.email}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-navy px-5 py-3 font-medium text-cream hover:bg-navy-deep disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request appointment"}
      </button>
      <p className="text-sm text-ink/70">
        We’ll confirm quickly during {site.hoursShort}.
      </p>
    </form>
  );
}
