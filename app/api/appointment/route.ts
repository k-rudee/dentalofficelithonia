import { NextResponse } from "next/server";
import { deliverAppointment, type AppointmentPayload } from "@/lib/appointment";

export async function POST(request: Request) {
  let body: AppointmentPayload;
  try {
    body = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = await deliverAppointment(body, { checkHoneypot: true });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ ok: true });
}
