import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeWrapper } from "@/components/layout/HomeWrapper";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HomeStackedCards } from "@/components/sections/HomeStackedCards";
import { ConceptToImpact } from "@/components/sections/ConceptToImpact";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";

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
      <HomeWrapper>
        <main className="flex-grow">
          <Hero />
          <HomeStackedCards />
          <ConceptToImpact />
          <Services />
          <Team />
          <FinalCta />
        </main>
      </HomeWrapper>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
