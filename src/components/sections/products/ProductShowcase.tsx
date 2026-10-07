"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "01",
    category: "EVENTS & NIGHTLIFE",
    name: "Rave Dubai",
    headline: "Discover what's happening after dark.",
    description: "Rave Dubai is a digital platform for discovering electronic music events, parties, and nightlife experiences across Dubai.",
    info: ["Events", "Nightlife", "Dubai"],
    cta: "Visit Rave Dubai ↗",
    image: "/images/products/rave-dubai.jpg",
    bg: "#F2F4F6",
  },
  {
    id: "02",
    category: "DINING & HOSPITALITY",
    name: "Dubai Brunches",
    headline: "Find your next brunch.",
    description: "Dubai Brunches helps people discover exceptional brunch experiences across Dubai, from vibrant social venues to premium dining destinations.",
    info: ["Dining", "Hospitality", "Dubai"],
    cta: "Visit Dubai Brunches ↗",
    image: "/images/products/dubai-brunches.jpg",
    bg: "#F8F6F0",
  },
  {
    id: "03",
    category: "TRAVEL & LIFESTYLE",
    name: "Habibi Guide",
    headline: "Discover Dubai differently.",
    description: "Habibi Guide is a digital guide for discovering restaurants, beach clubs, nightlife, neighbourhoods, and experiences across Dubai.",
    info: ["Travel", "Lifestyle", "Dubai"],
    cta: "Visit Habibi Guide ↗",
    image: "/images/products/habibi-guide.jpg",
    bg: "#F5F3ED",
  },
  {
    id: "04",
    category: "YACHT & EXPERIENCES",
    name: "Yacht Guide UAE",
    headline: "Explore the UAE from the water.",
    description: "Yacht Guide UAE helps people discover yacht charter experiences across the UAE, from luxury yachts to unforgettable coastal experiences.",
    info: ["Yacht Charter", "Experiences", "UAE"],
    cta: "Visit Yacht Guide UAE ↗",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop", // Placeholder for premium yacht
    bg: "#F0F5F9",
  }
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".ps-card");
    const images = gsap.utils.toArray<HTMLElement>(".ps-image");

    if (cards.length === 0) return;

    // Set initial positions
    gsap.set(cards, { y: "100%", opacity: 0 });
    gsap.set(cards[0], { y: "0%", opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: pinRef.current,
        scrub: true,
      }
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        // As we scroll to the next card
        tl.to(cards[i - 1], {
          scale: 0.95,
          opacity: 0.5,
          duration: 1,
          ease: "none",
        }, i);

        tl.to(card, {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "none",
        }, i);

        // Subtle parallax on the incoming image
        tl.fromTo(images[i], { scale: 1.2 }, { scale: 1, duration: 1, ease: "none" }, i);
      } else {
         // first image parallax slightly on start
         tl.fromTo(images[0], { scale: 1 }, { scale: 1.05, duration: 1, ease: "none" }, 0);
      }
    });
  }, { scope: containerRef });

  return (
    <section id="showcase" ref={containerRef} className="relative bg-white">
      <div ref={pinRef} className="h-screen w-full relative overflow-hidden bg-white">
        {products.map((product, i) => (
          <div key={product.id} className="ps-card absolute inset-0 p-4 md:p-8 flex items-center justify-center will-change-transform">
            <div 
              className="w-full h-full max-w-[1500px] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative border border-black/5"
              style={{ backgroundColor: product.bg }}
            >
              {/* Left Content (40%) */}
              <div className="w-full md:w-[45%] h-full p-8 md:p-16 lg:p-20 flex flex-col justify-between z-10 bg-inherit">
                <div>
                  <div className="flex items-center gap-4 mb-8 text-[#181818]/40 font-bold tracking-[0.15em] text-sm uppercase">
                    <span>{product.id}</span>
                    <span>—</span>
                    <span>{product.category}</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#181818] tracking-tighter leading-[0.9] mb-8">
                    {product.name}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-medium text-[#181818]/90 leading-tight mb-6">
                    {product.headline}
                  </h4>
                  <p className="text-lg text-[#181818]/60 font-medium leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flex flex-wrap gap-3 mb-10">
                    {product.info.map((info) => (
                      <span key={info} className="px-4 py-2 rounded-full border border-black/10 text-sm font-semibold text-[#181818]/70 bg-black/5">
                        {info}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-3 text-[#181818] font-bold tracking-widest text-sm uppercase hover:opacity-70 transition-opacity">
                    {product.cta}
                  </a>
                </div>
              </div>

              {/* Right Visual (60%) */}
              <div className="w-full md:w-[55%] h-full relative overflow-hidden hidden md:block">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="ps-image w-full h-full object-cover object-center will-change-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
