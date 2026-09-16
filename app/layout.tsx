import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { AssistantWidget } from "@/components/AssistantWidget";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { StickyCallBar } from "@/components/StickyCallBar";
import { dentistSchema } from "@/lib/schema";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `Gentle Family Dentist in Lithonia, GA | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Gentle family dentistry in Lithonia, GA with Dr. Michael Chen, DMD. New patients ages 6+. Nitrous for anxiety. PPO insurance accepted. Call (770) 482-2964.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/images/team-sign.jpg", width: 1290, height: 1247, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/favicon-source.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink antialiased">
        <JsonLd data={dentistSchema()} />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCallBar />
        <AssistantWidget />
      </body>
    </html>
  );
}
