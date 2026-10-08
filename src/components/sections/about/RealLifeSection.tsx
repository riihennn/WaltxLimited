"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/products/rave-dubai.jpg",
  "/images/products/dubai-brunches.jpg",
  "/images/products/habibi-guide.jpg",
];

export function RealLifeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".rl-image");

    if (slides.length === 0) return;

    gsap.set(slides[0], { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
    
    for (let i = 1; i < slides.length; i++) {
      gsap.set(slides[i], { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${slides.length * 100}%`,
        pin: pinRef.current,
        scrub: true,
      }
    });

    slides.forEach((slide, i) => {
      if (i > 0) {
        tl.to(slide, {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1,
          ease: "none",
        }, i);
        // Slightly scale up previous
        tl.to(slides[i - 1], {
          scale: 1.1,
          duration: 1,
          ease: "none",
        }, i);
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-[#111]">
      <div ref={pinRef} className="h-screen w-full relative overflow-hidden flex flex-col justify-center">
        
        {images.map((src, i) => (
          <img 
            key={i} 
            src={src} 
            className="rl-image absolute inset-0 w-full h-full object-cover object-center brightness-[0.4]"
            alt={`WaltX Real Life ${i}`}
          />
        ))}

        <Container className="relative z-10">
          <div className="max-w-4xl text-white">
            <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-white/50 uppercase mb-8">
              / BUILT FOR REAL LIFE /
            </div>
            <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight leading-[1.05] mb-8 text-white">
              Technology becomes meaningful when people use it.
            </h2>
            <p className="text-[clamp(17px,1.2vw,21px)] text-white/80 font-medium leading-[1.6] max-w-[750px]">
              Our products are built around the moments, places, and experiences that shape everyday life.
            </p>
          </div>
        </Container>

      </div>
    </section>
  );
}
