import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactLocation } from "@/components/sections/contact/ContactLocation";
import { ContactForm } from "@/components/sections/contact/ContactForm";



export const metadata: Metadata = {
  title: "Contact WaltX | Let's Build What's Next",
  description: "Contact WaltX to discuss digital products, technology, product engineering, and potential collaborations.",
  alternates: {
    canonical: "https://waltx.ae/contact",
  },
  openGraph: {
    title: "Contact WaltX | Let's Build What's Next",
    description: "Contact WaltX to discuss digital products, technology, product engineering, and potential collaborations.",
    url: "https://waltx.ae/contact",
  },
  twitter: {
    title: "Contact WaltX | Let's Build What's Next",
    description: "Contact WaltX to discuss digital products, technology, product engineering, and potential collaborations.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <ContactHero />
          
          <SectionReveal>
            <ContactLocation />
          </SectionReveal>

          <SectionReveal>
            <ContactForm />
          </SectionReveal>
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
