import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Careers at WaltX | Build What's Next",
  description: "Explore opportunities at WaltX and build digital products, platforms, and experiences for what’s next.",
  alternates: { canonical: "https://waltx.ae/careers" },
};


export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2] pt-40 pb-24 min-h-[90vh] flex flex-col justify-center">
        <Container>
          <div className="max-w-4xl mb-20">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8 block">
              / CAREERS /
            </span>
            <h1 className="text-[clamp(48px,6vw,88px)] font-bold tracking-tighter text-[#181818] mb-8 leading-[0.95]">
              Join the team.
            </h1>
            <p className="text-[clamp(24px,2.2vw,36px)] text-[#666664] font-medium leading-[1.3] max-w-[750px]">
              We are a full-cycle product design studio. We are always looking for talented individuals to join our mission of building digital products that matter.
            </p>
          </div>
          <div className="max-w-4xl border-t border-[#181818]/10 pt-10">
            <h2 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] mb-4">
              Open Positions
            </h2>
            <p className="text-[clamp(17px,1.2vw,21px)] text-[#666664] font-medium mb-8">
              We currently don&apos;t have any open positions, but we are always eager to meet talented people.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors"
            >
              Send us an email <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
