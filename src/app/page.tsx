import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WaltxBestTransition } from "@/components/sections/WaltxBestTransition";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Intro />
        <WaltxBestTransition />
        <Services />
        <HowItWorks />
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
