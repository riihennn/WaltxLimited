import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { HowWeBuild } from "@/components/sections/about/HowWeBuild";
import { VisionCta } from "@/components/sections/about/VisionCta";



export const metadata: Metadata = {
  title: "About WaltX | Building What's Next",
  description: "Learn about WaltX, a technology company building digital products, platforms, and experiences.",
  alternates: {
    canonical: "https://waltx.ae/about",
  },
  openGraph: {
    title: "About WaltX | Building What's Next",
    description: "Learn about WaltX, a technology company building digital products, platforms, and experiences.",
    url: "https://waltx.ae/about",
  },
  twitter: {
    title: "About WaltX | Building What's Next",
    description: "Learn about WaltX, a technology company building digital products, platforms, and experiences.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-white">
        <main className="flex-grow">
          <AboutHero />
          <WhoWeAre />
          <HowWeBuild />
          <VisionCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
