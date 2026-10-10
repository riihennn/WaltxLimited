"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ProductsHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".ph-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".ph-headline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(".ph-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".ph-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center bg-[#F6F5F2] pt-32 pb-24 overflow-hidden">
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none mix-blend-multiply" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <div className="ph-eyebrow text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8">
            OUR PRODUCTS
          </div>
          <h1 className="ph-headline text-[clamp(40px,5vw,72px)] font-bold tracking-tighter text-[#181818] leading-[1.05] mb-8">
            Digital products built for real-world experiences.
          </h1>
          <p className="ph-text text-[clamp(18px,1.5vw,26px)] text-[#181818]/70 font-medium leading-[1.5] max-w-2xl mb-12">
            WaltX creates and operates digital products that connect people with experiences, places, services, and businesses.
          </p>
          <div className="ph-cta">
            <a href="#showcase" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181818] text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors">
              Explore our products ↘
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
