"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    category: "Travel & Lifestyle",
    tags: ["Product Design", "Development"],
    name: "Habibi Guide",
    description: "Find places to visit, neighbourhoods to explore and things to do in Dubai.",
    bg: "#D5E4DB",
    image: "/habibiguide-ad.png",
    link: "https://habibiguide.com",
    linkText: "Visit Habibi Guide"
  },
  {
    id: "02",
    category: "Dining & Hospitality",
    tags: ["UI/UX Design", "Development"],
    name: "Dubai Brunches",
    description: "Explore Dubai brunch venues and compare dining options before booking.",
    bg: "#EAE0D3",
    image: "/dubaibruch-ad.png",
    link: "https://dubaibrunches.com",
    linkText: "Visit Dubai Brunches"
  },
  {
    id: "03",
    category: "Events & Nightlife",
    tags: ["Product Design", "Development"],
    name: "Rave Dubai",
    description: "Find electronic music events in Dubai and follow links to ticket sources.",
    bg: "#D6E0E5",
    image: "/ravedubai-ad.png",
    link: "https://www.ravedubai.com/",
    linkText: "Visit Rave Dubai"
  },
  {
    id: "04",
    category: "Yacht Charter",
    tags: ["Design", "Development"],
    name: "Yacht Guide UAE",
    description: "Explore yacht charter options in the UAE and send an enquiry.",
    bg: "#D8E8F5",
    image: "/yatchguide-ad.png",
    link: "https://yachtguideuae.com",
    linkText: "Visit Yacht Guide UAE"
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function HomeStackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // no animation
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="pt-24 pb-0 bg-[#F6F5F2] relative z-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
        {/* Section Intro */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase text-[#181818]/50">
                  OUR PRODUCTS
                </span>
              </div>
              <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                Four websites. Built and operated by WaltX.
                <sup className="text-xl md:text-3xl ml-2 font-normal text-[#181818]/30">
                  04
                </sup>
              </h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 leading-[1.6] font-medium max-w-[750px]">
                These are our own products. We design, develop and maintain them.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="relative pb-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                style={{
                  top: `calc(5vh + ${index * 12}px)`, // Stagger the top positions slightly for a stacked look on mobile
                  zIndex: 10 + index,
                  backgroundColor: project.bg,
                }}
                className="stacked-card sticky w-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-8 md:top-[calc(15vh+var(--desktop-offset,0px))]"
                ref={(el) => {
                  if (el) el.style.setProperty('--desktop-offset', `${index * 20}px`);
                }}
              >
                <div className={`flex flex-col md:flex-row h-full ${isEven ? "" : "md:flex-row-reverse"}`}>

                  {/* Image Half */}
                  <div className="w-full md:w-1/2 h-[28vh] md:h-[65vh] p-3 md:p-8 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Content Half */}
                  <div className="w-full md:w-1/2 px-5 pt-5 pb-[calc(env(safe-area-inset-bottom)+88px)] md:p-16 lg:p-20 flex flex-col justify-center">

                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#181818]/50 mb-4 block">
                      {project.category}
                    </span>

                    <h3 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-[#181818] uppercase mb-6 leading-[1.05]">
                      {project.name}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-sm text-[#181818]/70 border border-[#E2E1DF] px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 leading-[1.6] mb-12 max-w-[750px]">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#181818] text-white px-8 py-4 rounded-full w-max hover:bg-black transition-colors font-semibold text-[13px] tracking-wide uppercase group whitespace-nowrap"
                      >
                        {project.linkText}
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
