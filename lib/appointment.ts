import { contactTimes, preferredDays, site } from "./site";

export type AppointmentPayload = {
  name?: string;
  email?: string;
  phone?: string;
  bestTime?: string;
  patientType?: string;
  preferredDay?: string;
  insurance?: string;
  message?: string;
  consent?: boolean;
  honeypot?: string;
  startedAt?: number;
};

export type AppointmentResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

const required = [
  "name",
  "email",
  "phone",
  "bestTime",
  "patientType",
  "message",
] as const;

export function validateAppointment(
  body: AppointmentPayload,
  opts: { checkHoneypot?: boolean } = {},
): string | null {
  if (opts.checkHoneypot && body.honeypot) return "Rejected.";
  if (
    opts.checkHoneypot &&
    typeof body.startedAt === "number" &&
    Date.now() - body.startedAt < 2000
  ) {
    return "Please try again.";
  }
  for (const key of required) {
    if (!String(body[key] || "").trim()) {
      return "Please complete the required fields: name, email, phone, best time, new or existing patient, and a short message.";
    }
  }
  const email = String(body.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter a valid email.";
  }
  if (String(body.phone).replace(/\D/g, "").length < 10) {
    return "Enter a phone number we can reach.";
  }
  if (!contactTimes.includes(body.bestTime as (typeof contactTimes)[number])) {
    return `Best time must be one of: ${contactTimes.join("; ")}.`;
  }
  if (body.patientType !== "New patient" && body.patientType !== "Existing patient") {
    return "Tell us if you are a new or existing patient.";
  }
  if (
    body.preferredDay &&
    !preferredDays.includes(body.preferredDay as (typeof preferredDays)[number])
  ) {
    return "Preferred day must be Monday, Tuesday, Wednesday, or Thursday.";
  }
  if (!body.consent) {
    return "Consent is required to send the request.";
  }
  return null;
}

export async function deliverAppointment(
  body: AppointmentPayload,
  opts: { checkHoneypot?: boolean } = {},
): Promise<AppointmentResult> {
  const invalid = validateAppointment(body, opts);
  if (invalid) {
    return { ok: false, error: invalid, status: invalid === "Rejected." ? 400 : 400 };
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    return {
      ok: false,
      error: `The online form is not connected yet. Please call ${site.phoneDisplay} or email ${site.email}.`,
      status: 503,
    };
  }

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      phone: body.phone,
      bestTime: body.bestTime,
      patientType: body.patientType,
      preferredDay: body.preferredDay || "",
      insurance: body.insurance || "",
      message: body.message,
      consent: "yes",
      _subject: "Appointment request — The Dental Office of Lithonia",
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      error: `The form could not be delivered. Please call ${site.phoneDisplay}.`,
      status: 502,
    };
  }

  return { ok: true };
}
