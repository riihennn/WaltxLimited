import type { Metadata } from "next";
import { TextMotion } from "@/components/motion/TextMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waltx.ae"),
  title: "WaltX Limited | UAE Websites & Local Discovery",
  description: "WaltX Limited is a UAE digital business building websites around local discovery, experiences and design products.",
  openGraph: {
    title: "WaltX Limited | UAE Websites & Local Discovery",
    description: "WaltX Limited is a UAE digital business building websites around local discovery, experiences and design products.",
    url: "https://waltx.ae",
    siteName: "WaltX Limited",
    type: "website",
    locale: "en_AE",
  },
  alternates: {
    canonical: "https://waltx.ae",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaltX Limited | UAE Websites & Local Discovery",
    description: "WaltX Limited is a UAE digital business building websites around local discovery, experiences and design products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WaltX Limited",
    legalName: "WaltX Limited",
    url: "https://waltx.ae",
    email: "operations@waltx.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "FD – First Floor, Incubator Building",
      addressLocality: "Masdar City",
      addressRegion: "Abu Dhabi",
      addressCountry: "United Arab Emirates"
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Licence Number",
      value: "MC 14979"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WaltX Limited",
    alternateName: "WaltX",
    url: "https://waltx.ae/"
  };

  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-primary">
        <TextMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}
