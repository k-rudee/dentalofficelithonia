import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { deliverAppointment } from "@/lib/appointment";
import { assistantSystemPrompt } from "@/lib/assistant";
import { getOllamaApiKey, getOllamaBaseUrl, getOllamaModel } from "@/lib/ollama";
import { contactTimes, preferredDays, site } from "@/lib/site";

export const maxDuration = 60;

export async function POST(req: Request) {
  const apiKey = getOllamaApiKey();
  if (!apiKey) {
    return Response.json(
      {
        error: `The assistant is unavailable. Please call ${site.phoneDisplay} or email ${site.email}.`,
      },
      { status: 503 },
    );
  }

  let messages: UIMessage[];
  try {
    const body = (await req.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages)) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    messages = body.messages;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const ollama = createOpenAICompatible({
    name: "ollama",
    apiKey,
    baseURL: getOllamaBaseUrl(),
  });

  const modelId = getOllamaModel();

  const result = streamText({
    model: ollama.chatModel(modelId),
    system: assistantSystemPrompt(),
    messages: await convertToModelMessages(messages),
    temperature: 0.3,
    stopWhen: stepCountIs(5),
    tools: {
      submit_appointment: tool({
        description:
          "Send an appointment REQUEST to the office. Not a confirmed booking. Call only after name, email, phone, bestTime, patientType, message, and consent are collected.",
        inputSchema: z.object({
          name: z.string(),
          email: z.string(),
          phone: z.string(),
          bestTime: z.enum(contactTimes),
          patientType: z.enum(["New patient", "Existing patient"]),
          preferredDay: z.enum(preferredDays).optional(),
          insurance: z.string().optional(),
          message: z.string(),
          consent: z.literal(true),
        }),
        execute: async (input) => {
          const delivered = await deliverAppointment({
            ...input,
            consent: true,
          });
          if (!delivered.ok) {
            return { ok: false as const, error: delivered.error };
          }
          return {
            ok: true as const,
            note: `Request sent. The office will confirm during ${site.hoursShort}.`,
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
