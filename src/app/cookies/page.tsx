import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Cookie Policy | WaltX",
  alternates: { canonical: "https://waltx.ae/cookies" },
};


export default function CookiePage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2] pt-40 pb-24 min-h-[90vh]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tighter text-[#181818] mb-8 leading-[1.05]">
              Cookie Policy
            </h1>
            <div className="text-[clamp(17px,1.2vw,21px)] text-[#666664] font-medium leading-[1.6] space-y-6">
              <p className="text-sm font-bold tracking-wider uppercase text-[#181818]">Last updated: October 2026</p>
              
              <p>
                This Cookie Policy explains how WaltX Limited uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                1. What are cookies?
              </h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                2. Why do we use cookies?
              </h2>
              <p>
                We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our properties.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                3. How can you control cookies?
              </h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser controls. Since the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&apos;s help menu for more information.
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
