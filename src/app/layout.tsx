import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waltx.ae"),
  title: "WaltX Limited | Digital Products & Technology",
  description: "WaltX Limited is a technology company building and operating digital products and platforms that connect people, businesses, and opportunities.",
  openGraph: {
    title: "WaltX Limited | Digital Products & Technology",
    description: "WaltX Limited is a technology company building and operating digital products and platforms that connect people, businesses, and opportunities.",
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
    title: "WaltX Limited | Digital Products & Technology",
    description: "WaltX Limited is a technology company building and operating digital products and platforms that connect people, businesses, and opportunities.",
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
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}
