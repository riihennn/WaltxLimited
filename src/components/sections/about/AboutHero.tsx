"use client";

import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-secondary uppercase">
            ABOUT WALTX
          </div>
          
          <h1 className="text-[clamp(48px,6vw,88px)] font-bold tracking-tighter leading-[1.05] text-primary">
            We build what’s next.
          </h1>
          
          <p className="text-[clamp(17px,1.2vw,21px)] text-secondary font-medium leading-[1.6] max-w-2xl mt-4">
            WaltX is a technology company building digital products, platforms, and experiences for the way people live, discover, and connect.
          </p>

          <div className="mt-8 text-xs font-bold tracking-widest text-secondary/50 uppercase">
            Technology &middot; Products &middot; Experiences
          </div>
        </div>
      </Container>
    </section>
  );
}
