import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "@/components/sections/services/ServicesContent";

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
          <ServicesContent />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
