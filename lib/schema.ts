import { site, siteUrl } from "./site";

export function dentistSchema() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${url}/#dentist`,
    name: site.name,
    image: [
      `${url}/images/logo.jpg`,
      `${url}/images/team-sign.jpg`,
      `${url}/images/building.webp`,
    ],
    url,
    telephone: "+1-770-482-2964",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: "Lithonia",
      addressRegion: "GA",
      postalCode: "30058",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.openingHoursSpecification.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: site.sameAs,
    founder: {
      "@type": "Person",
      name: site.doctorShort,
      jobTitle: "Dentist",
      honorificSuffix: "DMD",
    },
    priceRange: "$$",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function personSchema() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.doctorShort,
    honorificSuffix: "DMD",
    jobTitle: "Dentist",
    worksFor: { "@id": `${url}/#dentist` },
    url: `${url}/about`,
    image: `${url}/images/dr-chen.jpg`,
  };
}
