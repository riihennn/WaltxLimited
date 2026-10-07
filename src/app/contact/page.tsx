import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactLocation } from "@/components/sections/contact/ContactLocation";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata = {
  title: "Contact | WaltX",
  description: "Let's build something meaningful. Start a conversation with WaltX.",
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
