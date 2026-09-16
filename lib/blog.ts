export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "first-visit-lithonia-family-dentist",
    title: "Family dentist in Lithonia, GA: what to expect at your first visit",
    description:
      "How a first visit works at The Dental Office of Lithonia with Dr. Michael Chen — forms, ages 6+, insurance, and how to request an appointment.",
    date: "2026-09-16",
    body: [
      {
        paragraphs: [
          "Looking for a family dentist in Lithonia, GA, Stonecrest, or nearby DeKalb County? A first visit should feel clear, not rushed. Here is what we ask new patients to do at The Dental Office of Lithonia.",
        ],
      },
      {
        heading: "Before you arrive",
        paragraphs: [
          "Call (770) 482-2964 or request an appointment online. We’ll confirm quickly during Monday–Thursday hours (8:00 AM–4:00 PM).",
          "Download the new-patient paperwork, fill it out, and bring it with a photo ID and your insurance card. New patients ages 6 and older are welcome.",
        ],
      },
      {
        heading: "During the visit",
        paragraphs: [
          "You’ll meet the team and Dr. Michael Chen. The goal of a first visit is to understand your mouth and your questions — not to hurry you into a long treatment list.",
          "If you have dental anxiety, ask about laughing gas (nitrous) when you book. Several patients have written that the office felt calmer than they expected.",
        ],
      },
      {
        heading: "Insurance",
        paragraphs: [
          "We accept listed PPO plans (Aetna, Aetna Medicare, Ameritas, Cigna, Cigna Medicare, Delta Dental Premier, Guardian, and United Concordia). We do not accept Medicaid and we do not file dual insurance plans. If you’re unsure, bring your card and we’ll help you check.",
        ],
      },
    ],
  },
  {
    slug: "dental-anxiety-nitrous-lithonia",
    title: "Dental anxiety in Lithonia: how nitrous (laughing gas) can help",
    description:
      "The Dental Office of Lithonia offers laughing gas (nitrous) for patients who feel anxious. What that means — and what we do not offer.",
    date: "2026-09-16",
    body: [
      {
        paragraphs: [
          "A lot of people in Lithonia and Stonecrest put off the dentist because they are afraid. That is common, and it is something this office plans for.",
        ],
      },
      {
        heading: "Laughing gas (nitrous)",
        paragraphs: [
          "We offer laughing gas (nitrous) if you have anxiety. It is the comfort option on our practice information. We do not offer IV sedation, oral sedation, or “sleep dentistry.”",
          "Mention nitrous when you request an appointment so the team can set aside time.",
        ],
      },
      {
        heading: "What patients say",
        paragraphs: [
          "Reviews often mention feeling safe, getting through a visit they had dreaded, or a hygienist (Helen or Maggie) taking extra care. Those are real comments from Google reviews — not promises about your visit. If you are nervous, tell us. The staff is used to going slowly.",
        ],
      },
    ],
  },
  {
    slug: "ppo-dental-insurance-lithonia-stonecrest",
    title:
      "PPO dental insurance in Lithonia & Stonecrest: plans we accept (and what we don’t)",
    description:
      "PPO plans accepted at The Dental Office of Lithonia, plus two important exclusions: no Medicaid and no dual-insurance filing.",
    date: "2026-09-16",
    body: [
      {
        paragraphs: [
          "“Do you take my insurance?” is the first question most new patients ask. Here is the list we publish, so you can check before you call.",
        ],
      },
      {
        heading: "PPO plans we accept",
        paragraphs: [
          "Aetna; Aetna Medicare; Ameritas; Cigna; Cigna Medicare; Delta Dental Premier; Guardian; and United Concordia (UCCI).",
          "This is a PPO list. We do not claim to accept every PPO in Georgia — only the plans named here. If your card looks different, request an appointment and we’ll help you check.",
        ],
      },
      {
        heading: "What we do not do",
        paragraphs: [
          "We do not accept Medicaid insurance plans. We do not file dual insurance plans.",
          "Those two lines save a wasted trip. If you have questions about a specific card, call (770) 482-2964 during Monday–Thursday hours.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
