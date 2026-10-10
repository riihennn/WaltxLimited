"use client";

import { Container } from "@/components/ui/Container";

export function WhoWeAre() {
  return (
    <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-8 relative z-20 shadow-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase">
              01 • WHO WE ARE
            </div>
            <h2 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
              More than technology.
            </h2>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8 lg:pt-14">
            <h3 className="text-[clamp(24px,2.2vw,36px)] text-[#181818] font-medium leading-[1.3] max-w-3xl">
              WaltX Limited is a technology company building digital products, platforms, and experiences.
            </h3>
            <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 font-medium leading-[1.6] max-w-2xl">
              By combining strategy, design, engineering, and product thinking, we build products that are simple to use, purposeful, and ready to evolve.
            </p>
            <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 font-medium leading-[1.6] max-w-2xl">
              We believe technology should solve real problems — not create unnecessary complexity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
