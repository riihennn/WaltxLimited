"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".hero-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".hero-headline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(".hero-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".hero-btns", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center bg-[#F6F5F2] pt-32 pb-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none mix-blend-multiply" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <div className="hero-eyebrow text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8">
            SERVICES
          </div>
          <h1 className="hero-headline text-[clamp(48px,6vw,88px)] font-bold tracking-tighter text-[#181818] leading-[0.95] mb-10">
            We build technology that moves ideas forward.
          </h1>
          <p className="hero-text text-[clamp(24px,2.2vw,36px)] text-[#181818]/60 font-medium leading-[1.3] max-w-[750px] mb-12">
            We design, develop, and scale digital products, platforms, and experiences that solve real problems and create lasting value.
          </p>
          <div className="hero-btns flex flex-wrap items-center gap-6">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors">
              Start a Project ↗
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/50 text-[#181818] px-8 py-4 text-sm font-medium hover:bg-white hover:border-black/20 transition-all backdrop-blur-sm">
              Talk to WaltX ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
