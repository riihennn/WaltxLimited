import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-background relative z-10 border-t border-border/40">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
              Have a website to build or improve?
            </h2>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-8">
            <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 leading-[1.6] font-medium">
              We offer website design, development and reviews of existing websites. Tell us what you need, and we'll discuss the scope with you.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors"
            >
              View our services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
