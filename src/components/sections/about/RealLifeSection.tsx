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
            <div className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-8">
              / BUILT FOR REAL LIFE /
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.95] mb-10">
              Technology becomes meaningful when people use it.
            </h2>
            <p className="text-2xl md:text-4xl text-white/70 font-medium leading-[1.3] max-w-3xl">
              Our products are built around the moments, places, and experiences that shape everyday life.
            </p>
          </div>
        </Container>

      </div>
    </section>
  );
}
