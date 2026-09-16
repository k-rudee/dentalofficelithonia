export const site = {
  name: "The Dental Office of Lithonia",
  doctor: "Dr. Michael Chen, DMD",
  doctorShort: "Dr. Michael Chen",
  doctorRole: "Dentist",
  addressLine: "7660 Covington Highway #1",
  cityStateZip: "Lithonia, GA 30058",
  address: "7660 Covington Highway #1, Lithonia, GA 30058",
  phoneDisplay: "(770) 482-2964",
  phoneTel: "+17704822964",
  email: "dentalofficelithonia@gmail.com",
  url: "https://dentalofficelithonia.com",
  geo: { lat: 33.7048194, lng: -84.1103184 },
  placeId: "ChIJZxuqP4Ot9YgRYQqgsglJjb4",
  ratingValue: "4.8",
  reviewCount: 119,
  ratingAsOf: "2026-09-16",
  newPatientAge: 6,
  hoursShort: "Monday–Thursday, 8:00 AM–4:00 PM",
  hoursNote: "Friday–Sunday closed",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  hoursRows: [
    { days: "Monday", hours: "8:00 AM – 4:00 PM" },
    { days: "Tuesday", hours: "8:00 AM – 4:00 PM" },
    { days: "Wednesday", hours: "8:00 AM – 4:00 PM" },
    { days: "Thursday", hours: "8:00 AM – 4:00 PM" },
    { days: "Friday", hours: "Closed" },
    { days: "Saturday", hours: "Closed" },
    { days: "Sunday", hours: "Closed" },
  ],
  insurance: [
    "Aetna",
    "Aetna Medicare",
    "Ameritas",
    "Cigna",
    "Cigna Medicare",
    "Delta Dental Premier",
    "Guardian",
    "United Concordia (UCCI)",
  ] as const,
  insuranceIntro:
    "We accept and honor the following PPO (Preferred Provider Organization) dental insurances:",
  exclusions: [
    "We do not accept Medicaid insurance plans.",
    "We do not file dual insurance plans.",
  ] as const,
  facebook: "https://www.facebook.com/TheDentalOfficeOfLithonia",
  yelp: "https://www.yelp.com/biz/the-dental-office-of-lithonia-lithonia",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/The+Dental+Office+of+Lithonia/@33.7048194,-84.1103184,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5ad833faa1b67:0xbe8d4909b2a00a61!8m2!3d33.7048194!4d-84.1103184",
  writeReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJZxuqP4Ot9YgRYQqgsglJjb4",
  pdfPath:
    "https://cdn.jsdelivr.net/gh/k-rudee/dentalofficelithonia@main/public/forms/new-patient-paperwork.pdf",
  parkingNote:
    "Parking notes: call us and we’ll help you find the office.",
  newPatientChecklist: [
    "Photo ID",
    "Dental insurance card",
    "Completed new-patient paperwork",
    "List of medications",
    "Questions for Dr. Chen",
  ] as const,
  sameAs: [
    "https://www.facebook.com/TheDentalOfficeOfLithonia",
    "https://www.yelp.com/biz/the-dental-office-of-lithonia-lithonia",
    "https://www.google.com/maps/place/The+Dental+Office+of+Lithonia/@33.7048194,-84.1103184,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5ad833faa1b67:0xbe8d4909b2a00a61!8m2!3d33.7048194!4d-84.1103184",
  ],
} as const;

export const contactTimes = [
  "9:00 AM – 11:30 AM",
  "11:30 AM – 1:30 PM",
  "1:30 PM – 4:00 PM",
] as const;

export const preferredDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
] as const;

export function telHref() {
  const fromEnv = process.env.NEXT_PUBLIC_PHONE;
  if (fromEnv) return `tel:+1${fromEnv.replace(/\D/g, "")}`;
  return `tel:${site.phoneTel}`;
}

export function mailtoHref() {
  const fromEnv = process.env.NEXT_PUBLIC_EMAIL;
  return `mailto:${fromEnv || site.email}`;
}

export function mapsEmbedSrc() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1595799820343!2d-84.1103184!3d33.7048194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ad833faa1b67%3A0xbe8d4909b2a00a61!2sThe%20Dental%20Office%20of%20Lithonia!5e0!3m2!1sen!2sus!4v1782419047587!5m2!1sen!2sus"
  );
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || site.url;
}
