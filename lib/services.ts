export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  cardLine: string;
  h1: string;
  lede: string;
  body: string[];
  who: string;
  visit: string;
  nitrous?: boolean;
  icon: "checkup" | "cosmetic" | "whitening" | "filling" | "crown" | "implant" | "extraction" | "comfort";
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry & Checkups",
    shortTitle: "General checkups",
    cardLine: "Exams and cleanings in an unhurried Lithonia office.",
    h1: "General Dentistry & Checkups in Lithonia, GA",
    lede: "Routine visits with Dr. Michael Chen — exams, cleanings, and a plan you can understand.",
    body: [
      "The Dental Office of Lithonia provides general dentistry, including checkups and cleanings. Dr. Chen and the team take time to explain what they see and what they recommend.",
      "New patients ages 6 and older are welcome. If you feel anxious about the dentist, ask us about laughing gas (nitrous) when you request an appointment.",
    ],
    who: "Families and adults in Lithonia, Stonecrest, Conyers, and nearby DeKalb County who want a regular dental home.",
    visit: "We’ll review your health history, look at your teeth and gums, and talk through next steps before anything is scheduled.",
    nitrous: true,
    icon: "checkup",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortTitle: "Cosmetic dentistry",
    cardLine: "Thoughtful cosmetic care, explained in plain language.",
    h1: "Cosmetic Dentistry in Lithonia, GA",
    lede: "Cosmetic dentistry in a calm, independent practice — not a high-volume makeover mill.",
    body: [
      "We offer cosmetic dentistry as part of personalized care with Dr. Chen. We’ll talk through what bothers you about your smile and what is realistic for your teeth.",
      "Cosmetic work is never one-size-fits-all. Your visit starts with a conversation and an exam, not a sales script.",
    ],
    who: "Patients who want their smile to look more even or brighter, without rushing into treatment.",
    visit: "Bring photos or notes about what you’d like to change. We’ll look at your teeth and discuss options that fit your mouth and your insurance.",
    icon: "cosmetic",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortTitle: "Teeth whitening",
    cardLine: "Professional whitening, planned around your enamel and comfort.",
    h1: "Teeth Whitening in Lithonia, GA",
    lede: "Ask us whether professional whitening is a good fit — we’ll be direct about it.",
    body: [
      "Teeth whitening is one of the cosmetic services listed at The Dental Office of Lithonia. Whether it makes sense depends on your enamel, restorations, and how sensitive your teeth are.",
      "We do not promise a set number of shades. Dr. Chen will tell you if whitening is appropriate and what to expect.",
    ],
    who: "Adults who want a brighter smile and prefer a dentist-supervised approach.",
    visit: "After an exam, we’ll discuss whether whitening is suitable and how to keep teeth comfortable during treatment.",
    icon: "whitening",
  },
  {
    slug: "fillings",
    title: "Dental Fillings",
    shortTitle: "Fillings",
    cardLine: "Fillings placed with attention to comfort and clear explanations.",
    h1: "Dental Fillings in Lithonia, GA",
    lede: "Cavities happen. We repair them carefully and talk you through the visit.",
    body: [
      "Dental fillings are a core part of care at this office. If a checkup finds decay, Dr. Chen will show you what he sees and explain why a filling is recommended.",
      "If you have dental anxiety, we offer laughing gas (nitrous). Tell us when you request your appointment so the team can plan for it.",
    ],
    who: "Patients who need a cavity repaired, including people who have put off treatment because they were nervous.",
    visit: "We’ll numb the area, place the filling, and check your bite. Ask questions at any point — the team is used to going slowly.",
    nitrous: true,
    icon: "filling",
  },
  {
    slug: "crowns-bridges-partials",
    title: "Crowns, Bridges & Partials",
    shortTitle: "Crowns, bridges & partials",
    cardLine: "Crowns, bridges, and partials — including same-day crowns when appropriate.",
    h1: "Crowns, Bridges & Partials in Lithonia, GA",
    lede: "Restore a damaged or missing tooth with a plan you understand before work begins.",
    body: [
      "We provide crowns, bridges, and partials. Dr. Chen stays current on techniques such as digital impressions and same-day crowns.",
      "Not every tooth needs a crown, and not every crown can be same-day. We’ll explain the difference for your situation.",
    ],
    who: "Patients with a cracked, heavily filled, or missing tooth who want a durable restoration.",
    visit: "After an exam and images, we’ll discuss whether a crown, bridge, or partial is the right next step and how insurance may apply.",
    nitrous: true,
    icon: "crown",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Dental implants",
    cardLine: "Implant care with Dr. Chen, planned around your health and comfort.",
    h1: "Dental Implants in Lithonia, GA",
    lede: "Replace a missing tooth with an implant when it’s the right fit — explained without pressure.",
    body: [
      "Dental implants are among the services offered at The Dental Office of Lithonia. Dr. Chen continues his education in dental implants as part of staying current with modern techniques.",
      "An implant is not automatic for every missing tooth. We’ll look at your bone, gums, and overall health and tell you honestly whether an implant is appropriate.",
    ],
    who: "Adults missing one or more teeth who want a fixed replacement and a clear explanation of the process.",
    visit: "The first visit is a conversation and an exam. If an implant is recommended, we’ll outline the steps and what to expect at each one.",
    nitrous: true,
    icon: "implant",
  },
  {
    slug: "extractions",
    title: "Extractions",
    shortTitle: "Extractions",
    cardLine: "Gentle extractions, including for patients who have been dreading the visit.",
    h1: "Tooth Extractions in Lithonia, GA",
    lede: "When a tooth cannot be saved, Dr. Chen’s team focuses on comfort and a clear plan.",
    body: [
      "Extractions are a listed service at this practice. Patients often mention that Dr. Chen is careful with pain and that even difficult visits can feel manageable.",
      "Michal Carlock wrote: “I felt nothing getting my wisdom teeth out. I’ve been healed of my fear of the dentist.” That is one patient’s experience — not a guarantee — and it is why we take extra time with anxious patients.",
      "Laughing gas (nitrous) is available if you have anxiety. Mention it when you request an appointment.",
    ],
    who: "Patients who need a tooth removed, including people who have delayed care because they were afraid.",
    visit: "We’ll review why the extraction is recommended, numb the area, and go at a pace you can handle. You’ll leave with after-care instructions.",
    nitrous: true,
    icon: "extraction",
  },
  {
    slug: "comfort-dentistry",
    title: "Comfort Dentistry (Nitrous)",
    shortTitle: "Anxiety & comfort",
    cardLine: "Laughing gas (nitrous) if you have anxiety.",
    h1: "Comfort Dentistry & Nitrous in Lithonia, GA",
    lede: "If you dread the dentist, say so. We offer laughing gas (nitrous) and a slower, kinder visit.",
    body: [
      "The Dental Office of Lithonia offers laughing gas (nitrous) if you have anxiety. It is the comfort option listed on our current practice information — we do not offer IV or oral sedation.",
      "Many reviews mention feeling safe, getting a blanket, or finally getting through a visit they had put off. That atmosphere is as much a part of care here as the clinical work.",
      "Tell the front desk when you request an appointment so we can plan time and nitrous if you want it.",
    ],
    who: "Anyone ages 6 and older who feels nervous, has had a hard dental visit in the past, or simply wants a calmer appointment.",
    visit: "We’ll review your health history, explain nitrous in plain language, and check that you’re comfortable before treatment starts.",
    nitrous: true,
    icon: "comfort",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
