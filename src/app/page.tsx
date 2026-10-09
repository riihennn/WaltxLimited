import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WaltxBestTransition } from "@/components/sections/WaltxBestTransition";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeStackedCards } from "@/components/sections/HomeStackedCards";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "WaltX | Digital Products, Platforms & Experiences",
  description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
  alternates: {
    canonical: "https://waltx.ae/",
  },
  openGraph: {
    title: "WaltX | Digital Products, Platforms & Experiences",
    description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
    url: "https://waltx.ae/",
  },
  twitter: {
    title: "WaltX | Digital Products, Platforms & Experiences",
    description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <Hero />
          <SectionReveal>
            <Intro />
          </SectionReveal>
          <SectionReveal>
            <WaltxBestTransition />
          </SectionReveal>
          <SectionReveal>
            <Services />
          </SectionReveal>
          <SectionReveal>
            <HowItWorks />
          </SectionReveal>
          <HomeStackedCards />
          <Team />
          <FinalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
