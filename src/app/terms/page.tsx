import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Terms & Conditions | WaltX",
  description: "Terms and Conditions for WaltX.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2] pt-40 pb-24 min-h-[90vh]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tighter text-[#181818] mb-8 leading-[1.05]">
              Terms & Conditions
            </h1>
            <div className="text-[clamp(17px,1.2vw,21px)] text-[#666664] font-medium leading-[1.6] space-y-6">
              <p className="text-sm font-bold tracking-wider uppercase text-[#181818]">Last updated: October 2026</p>
              
              <p>
                Welcome to WaltX. These terms and conditions outline the rules and regulations for the use of WaltX Limited&apos;s Website and Services.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use WaltX if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise stated, WaltX Limited and/or its licensors own the intellectual property rights for all material on WaltX. All intellectual property rights are reserved. You may access this from WaltX for your own personal use subjected to restrictions set in these terms and conditions.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                3. User Content
              </h2>
              <p>
                In these Website Standard Terms and Conditions, &quot;User Content&quot; shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant WaltX Limited a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
