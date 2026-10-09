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
  title: "WaltX | Digital Products, Platforms & Experiences",
  description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WaltX | Digital Products, Platforms & Experiences",
    description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
    url: "https://waltx.ae",
    siteName: "WaltX",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaltX | Digital Products, Platforms & Experiences",
    description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
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
    name: "WaltX",
    url: "https://waltx.ae"
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
