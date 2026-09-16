import { site } from "./site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What services does The Dental Office of Lithonia offer?",
    answer:
      "We provide general dentistry and checkups, cleanings, fillings, extractions, crowns, bridges, partials, dental implants, cosmetic dentistry, and teeth whitening. Laughing gas (nitrous) is available if you have anxiety.",
  },
  {
    question: "Which insurance plans do you accept?",
    answer: `${site.insuranceIntro} ${site.insurance.join("; ")}. ${site.exclusions[0]} ${site.exclusions[1]} If you’re not sure, request an appointment and we’ll help you check.`,
  },
  {
    question: "How do I become a patient?",
    answer:
      "Call (770) 482-2964 or request an appointment on this site — we’ll confirm quickly. Download the new-patient paperwork, complete it, and bring it with you along with a photo ID and your insurance card.",
  },
  {
    question: "Do you see children?",
    answer:
      "New patients ages 6 and older are welcome. We are a family dental office, not a pediatric specialty clinic.",
  },
  {
    question: "What are your hours?",
    answer: `We are open ${site.hoursShort}. ${site.hoursNote}. Request an appointment and we’ll confirm a time that works.`,
  },
  {
    question: "Do you offer anything for dental anxiety?",
    answer:
      "Yes. We offer laughing gas (nitrous) if you have anxiety. Tell us when you request your visit so the team can plan for it. Many patients mention feeling comfortable even when they were nervous.",
  },
  {
    question: "Where are you located, and how do I get there?",
    answer: `We are at ${site.address}. Use the map on our Contact page for directions. ${site.parkingNote}`,
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Bring a photo ID, your dental insurance card, the completed new-patient forms, a list of medications, and any questions for Dr. Chen.",
  },
  {
    question: "Do you do extractions and wisdom teeth?",
    answer:
      "Yes, extractions are a service we provide. Some patients have shared that wisdom-tooth visits were more comfortable than they expected. That is their experience, not a guarantee. Ask us about nitrous if you are anxious.",
  },
  {
    question: "Do you offer evening or Saturday hours?",
    answer:
      "No. We are open Monday through Thursday, 8:00 AM–4:00 PM, and closed Friday through Sunday. Request an appointment — we’ll confirm quickly during those hours.",
  },
];

export const homeFaqs = [faqs[0], faqs[1], faqs[5]] as const;
