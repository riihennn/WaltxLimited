import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/sections/about/AboutContent";
import { GlobalCta } from "@/components/sections/GlobalCta";

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
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <AboutContent />
          <GlobalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
