"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { site, telHref } from "@/lib/site";

const chips = [
  "Request an appointment",
  "I’m a new patient",
  "Insurance",
  "Hours",
];

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/assistant" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="pointer-events-none fixed inset-x-3 z-50 bottom-[5.75rem] md:inset-x-auto md:right-6 md:bottom-6">
      {open ? (
        <div
          role="dialog"
          aria-labelledby="assistant-title"
          className="pointer-events-auto mb-3 ml-auto flex h-[min(32rem,68vh)] w-full flex-col border-2 border-navy bg-ivory shadow-[0_16px_40px_rgba(1,42,74,0.22)] md:w-[24rem]"
        >
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-cream">
            <div>
              <p id="assistant-title" className="font-serif text-lg font-semibold text-cream">
                Chat with us
              </p>
              <p className="text-xs text-champagne-soft">
                Appointments, hours, and new-patient questions
              </p>
            </div>
            <button
              type="button"
              className="border border-cream/40 px-2 py-1 text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            <div className="bg-cream px-3 py-2 text-ink/90 ring-1 ring-navy/10">
              Hello — I can help you request a visit, check hours or insurance,
              or get onboarded as a new patient (ages {site.newPatientAge}+).
              For anything urgent, call{" "}
              <a href={telHref()} className="font-medium underline">
                {site.phoneDisplay}
              </a>
              .
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-8 bg-navy px-3 py-2 text-cream"
                    : "mr-8 bg-cream px-3 py-2 text-ink/90 ring-1 ring-navy/10"
                }
              >
                {message.parts.map((part, i) => {
                  if (part.type === "text") {
                    return (
                      <p key={`${message.id}-${i}`} className="whitespace-pre-wrap">
                        {part.text}
                      </p>
                    );
                  }
                  if (part.type === "tool-submit_appointment") {
                    const state = "state" in part ? String(part.state) : "";
                    if (state === "output-available" && "output" in part) {
                      const output = part.output as { ok?: boolean; error?: string; note?: string };
                      return (
                        <p key={`${message.id}-${i}`} className="text-xs text-ink/70">
                          {output.ok
                            ? output.note
                            : output.error || "The office could not receive that request."}
                        </p>
                      );
                    }
                    return (
                      <p key={`${message.id}-${i}`} className="text-xs text-ink/60">
                        Sending your request…
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
            {busy ? <p className="text-xs text-ink/60">Thinking…</p> : null}
            {error ? (
              <p className="border border-danger/30 bg-cream px-3 py-2 text-danger" role="alert">
                {error.message ||
                  `The assistant is unavailable. Call ${site.phoneDisplay}.`}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-navy/10 px-3 py-2">
            {chips.map((chip) => (
              <button
                key={chip}
                type="button"
                className="border border-navy/15 bg-cream px-2 py-1 text-xs font-medium text-navy hover:border-champagne"
                onClick={() => send(chip)}
                disabled={busy}
              >
                {chip}
              </button>
            ))}
          </div>

          <form
            className="border-t border-navy/10 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="assistant-input" className="sr-only">
              Message the office assistant
            </label>
            <div className="flex gap-2">
              <input
                id="assistant-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-w-0 flex-1 border border-navy/20 bg-cream px-3 py-2 text-sm text-ink"
                placeholder="Ask about a visit…"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="bg-navy px-3 py-2 text-sm font-semibold text-cream disabled:opacity-60"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[0.7rem] leading-snug text-ink/60">
              Not medical advice. Requests are reviewed by the office. Call{" "}
              {site.phoneDisplay} for urgent needs.
            </p>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="chat-fab pointer-events-auto relative flex w-full items-center justify-center gap-2.5 bg-navy px-4 py-3.5 text-cream md:w-auto"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with us about appointments"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
          <path
            fill="currentColor"
            d="M4.5 5.25h15a1.25 1.25 0 0 1 1.25 1.25v8.5A1.25 1.25 0 0 1 19.5 16.25H9.2L4.5 20.1V5.25Z"
          />
        </svg>
        <span className="text-[0.95rem] font-bold tracking-wide">
          {open ? "Close chat" : "Chat with us"}
        </span>
      </button>
    </div>
  );
}
