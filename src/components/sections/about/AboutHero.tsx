"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".ah-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".ah-headline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(".ah-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".ah-sub", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".ah-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center bg-[#F6F5F2] pt-32 pb-24 overflow-hidden">
      <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none mix-blend-multiply" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <div className="ah-eyebrow text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8">
            / ABOUT WALTX /
          </div>
          <h1 className="ah-headline text-[clamp(48px,6vw,88px)] font-bold tracking-tighter text-[#181818] leading-[0.95] mb-10">
            We build what&apos;s next.
          </h1>
          <p className="ah-text text-[clamp(24px,2.2vw,36px)] text-[#181818]/60 font-medium leading-[1.3] max-w-[750px] mb-8">
            WaltX is a technology company focused on building digital products, platforms, and experiences that connect people with the world around them.
          </p>
          <p className="ah-sub text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/40 uppercase mb-12">
            Technology · Products · Experiences
          </p>
          <div className="ah-cta">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181818] text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors">
              Let&apos;s talk ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
