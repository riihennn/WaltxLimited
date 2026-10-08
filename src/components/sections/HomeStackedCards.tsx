"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    category: "Events & Nightlife",
    tags: ["Product Design", "Development"],
    name: "Rave Dubai",
    description: "Discover the latest electronic music events, parties, and nightlife experiences across Dubai.",
    bg: "#D6E0E5",
    image: "/ravedubai-ad.png",
    link: "https://ravedubai.com",
    linkText: "View Case Study"
  },
  {
    id: "02",
    category: "Dining & Hospitality",
    tags: ["UI/UX Design", "Development"],
    name: "Dubai Brunches",
    description: "Discover Dubai's best brunch experiences, from vibrant social venues to premium dining destinations.",
    bg: "#EAE0D3",
    image: "/dubaibruch-ad.png",
    link: "https://dubaibrunches.com",
    linkText: "View Case Study"
  },
  {
    id: "03",
    category: "Travel & Lifestyle",
    tags: ["Product Design", "Mobile App", "Development"],
    name: "Habibi Guide",
    description: "A digital guide to discovering Dubai's restaurants, beach clubs, nightlife, neighbourhoods, and experiences.",
    bg: "#D5E4DB",
    image: "/habibiguide-ad.png",
    link: "https://habibiguide.com",
    linkText: "View Case Study"
  },
  {
    id: "04",
    category: "Yacht Charter",
    tags: ["Design", "Development"],
    name: "Yacht Guide UAE",
    description: "Explore yacht charter experiences across the UAE and discover boats, specifications, and charter options.",
    bg: "#D8E8F5",
    image: "/yatchguide-ad.png",
    link: "https://yachtguideuae.com",
    linkText: "View Case Study"
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
    <section ref={containerRef} className="py-24 bg-[#F6F5F2] relative z-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
        {/* Section Intro */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase text-[#181818]/50">
                  / SELECTED WORK /
                </span>
              </div>
              <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                Projects that move ideas forward.
                <sup className="text-xl md:text-3xl ml-2 font-normal text-[#181818]/30">
                  03
                </sup>
              </h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 leading-[1.6] font-medium max-w-[750px]">
                We build digital products and experiences that solve real problems,
                create meaningful interactions, and help businesses move forward.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="relative pb-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="stacked-card sticky w-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-8"
                style={{
                  top: `calc(15vh + ${index * 20}px)`, // Stagger the top positions slightly for a stacked look
                  zIndex: 10 + index,
                  backgroundColor: project.bg,
                }}
              >
                <div className={`flex flex-col md:flex-row h-full ${isEven ? "" : "md:flex-row-reverse"}`}>

                  {/* Image Half */}
                  <div className="w-full md:w-1/2 h-[45vh] md:h-[65vh] p-4 md:p-8 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Content Half */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">

                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#181818]/50 mb-4 block">
                      {project.category}
                    </span>

                    <h3 className="text-[clamp(28px,2.5vw,40px)] font-bold tracking-tight text-[#181818] mb-6 leading-[1.1]">
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
                        className="inline-flex items-center gap-3 bg-[#181818] text-white px-8 py-4 rounded-full w-max hover:bg-black transition-colors font-medium group"
                      >
                        {project.linkText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
