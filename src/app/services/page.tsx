import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesIntro } from "@/components/sections/services/ServicesIntro";
import { ServiceShowcase } from "@/components/sections/services/ServiceShowcase";
import { ProcessSection } from "@/components/sections/services/ProcessSection";
import { WhyWaltX } from "@/components/sections/services/WhyWaltX";
import { GlobalCta } from "@/components/sections/GlobalCta";



export const metadata: Metadata = {
  title: "WaltX Services | Product Engineering & Digital Experiences",
  description: "Explore WaltX services across product engineering, digital experiences, platforms, and technology.",
  alternates: {
    canonical: "https://waltx.ae/services",
  },
  openGraph: {
    title: "WaltX Services | Product Engineering & Digital Experiences",
    description: "Explore WaltX services across product engineering, digital experiences, platforms, and technology.",
    url: "https://waltx.ae/services",
  },
  twitter: {
    title: "WaltX Services | Product Engineering & Digital Experiences",
    description: "Explore WaltX services across product engineering, digital experiences, platforms, and technology.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <ServicesHero />
          <ServicesIntro />
          <ServiceShowcase />
          <ProcessSection />
          <WhyWaltX />
          <GlobalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
