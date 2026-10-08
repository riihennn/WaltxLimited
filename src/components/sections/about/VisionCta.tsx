"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function VisionCta() {
  return (
    <section className="py-32 md:py-48 bg-[#181818] text-white">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-12">
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-white/50 uppercase">
            03 / VISION /
          </div>
          
          <h2 className="text-[clamp(48px,5vw,80px)] font-bold tracking-tighter leading-[1.05]">
            Built for what’s next.
          </h2>
          
          <div className="flex flex-col gap-8 items-center mt-4">
            <p className="text-[clamp(20px,1.8vw,28px)] font-medium tracking-tight leading-[1.4] text-white/80 max-w-2xl">
              We stay curious, build with purpose, and keep improving.
            </p>
            
            <p className="text-[clamp(17px,1.2vw,21px)] font-medium text-white/60">
              Have an idea worth building?
            </p>

            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-white text-[#181818] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 px-8 py-6 text-base font-semibold group flex items-center gap-2 rounded-full">
                  Let's talk 
                  <span className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
