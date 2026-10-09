import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";



export const metadata: Metadata = {
  title: "Privacy Policy | WaltX",
  description: "Privacy Policy for WaltX.",
  alternates: {
    canonical: "https://waltx.ae/privacy",
  },
  openGraph: {
    title: "Privacy Policy | WaltX",
    description: "Privacy Policy for WaltX.",
    url: "https://waltx.ae/privacy",
  },
  twitter: {
    title: "Privacy Policy | WaltX",
    description: "Privacy Policy for WaltX.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2] pt-40 pb-24 min-h-[90vh]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tighter text-[#181818] mb-8 leading-[1.05]">
              Privacy Policy
            </h1>
            <div className="text-[clamp(17px,1.2vw,21px)] text-[#666664] font-medium leading-[1.6] space-y-6">
              <p className="text-sm font-bold tracking-wider uppercase text-[#181818]">Last updated: October 2026</p>
              
              <p>
                At WaltX Limited, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <div className="pt-8 pb-4 space-y-4">
                <p className="text-sm font-bold tracking-wider uppercase text-[#181818]">
                  Company Information
                </p>
                <p>
                  WaltX Limited<br />
                  Licence No. MC 14979<br />
                  FD – First Floor, Incubator Building<br />
                  Masdar City, Abu Dhabi<br />
                  United Arab Emirates
                </p>
                <p>
                  <a href="mailto:operations@waltx.ae" className="text-[#181818] hover:opacity-70 transition-opacity">operations@waltx.ae</a>
                </p>
              </div>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                1. Information We Collect
              </h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, email address, and demographic information that you voluntarily give to us when you choose to participate in various activities related to the Site.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                2. Use of Your Information
              </h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to respond to customer service requests, compile anonymous statistical data, and deliver targeted advertising.
              </p>

              <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] pt-6 pb-2">
                3. Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us via our Contact page.
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
