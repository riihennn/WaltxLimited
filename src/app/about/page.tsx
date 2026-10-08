import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { PhilosophySection } from "@/components/sections/about/PhilosophySection";
import { StoryTimeline } from "@/components/sections/about/StoryTimeline";
import { ApproachSection } from "@/components/sections/about/ApproachSection";
import { RealLifeSection } from "@/components/sections/about/RealLifeSection";
import { VisionSection } from "@/components/sections/about/VisionSection";
import { MindsetSection } from "@/components/sections/about/MindsetSection";
import { GlobalCta } from "@/components/sections/GlobalCta";

export const metadata = {
  title: "About | WaltX",
  description: "WaltX is a technology company focused on building digital products, platforms, and experiences that connect people with the world around them.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-white">
        <main className="flex-grow">
          <AboutHero />
          <WhoWeAre />
          <PhilosophySection />
          <StoryTimeline />
          <ApproachSection />
          <RealLifeSection />
          <VisionSection />
          <MindsetSection />
          <GlobalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
