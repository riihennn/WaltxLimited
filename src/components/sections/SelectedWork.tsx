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
    subtitle: "Events & Nightlife",
    description: "Discover the latest electronic music events, parties, and nightlife experiences across Dubai.",
    bg: "#D6E0E5",
    image: "/ravedubai-ad.png",
    link: "https://ravedubai.com",
    linkText: "Visit Rave Dubai"
  },
  {
    id: "02",
    category: "Dining & Hospitality",
    tags: ["UI/UX Design", "Development"],
    name: "Dubai Brunches",
    subtitle: "Dining & Hospitality",
    description: "Discover Dubai's best brunch experiences, from vibrant social venues to premium dining destinations.",
    bg: "#EAE0D3",
    image: "/dubaibruch-ad.png",
    link: "https://dubaibrunches.com",
    linkText: "Visit Dubai Brunches"
  },
  {
    id: "03",
    category: "Travel & Lifestyle",
    tags: ["Product Design", "Mobile App", "Development"],
    name: "Habibi Guide",
    subtitle: "Travel & Lifestyle",
    description: "A digital guide to discovering Dubai's restaurants, beach clubs, nightlife, neighbourhoods, and experiences.",
    bg: "#D5E4DB",
    image: "/habibiguide-ad.png",
    link: "https://habibiguide.com",
    linkText: "Visit Habibi Guide"
  },
  {
    id: "04",
    category: "Yacht Charter",
    tags: ["Design", "Development"],
    name: "Yacht Guide UAE",
    subtitle: "Yacht Charter",
    description: "Explore yacht charter experiences across the UAE and discover boats, specifications, and charter options.",
    bg: "#D8E8F5",
    image: "/yatchguide-ad.png",
    link: "https://yachtguideuae.com",
    linkText: "Visit Yacht Guide"
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sheets = gsap.utils.toArray<HTMLElement>(".sw-sheet");

      // ── matchMedia contexts ──────────────────────────────────────────────
      const mm = gsap.matchMedia();

      // ── DESKTOP: full stacked-sheets effect ─────────────────────────────
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        sheets.forEach((sheet, i) => {
          const overlay = sheet.querySelector<HTMLElement>(".sw-overlay");
          const content = sheet.querySelectorAll<HTMLElement>(".sw-content-item");
          const screenshot = sheet.querySelector<HTMLElement>(".sw-screenshot");

          // ── 1. Scale + darken the PREVIOUS sheet as THIS sheet arrives ──
          if (i > 0) {
            const prevSheet = sheets[i - 1];
            const prevOverlay = prevSheet.querySelector<HTMLElement>(".sw-overlay");

            gsap.to(prevSheet, {
              scale: 0.95,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: sheet,
                start: "top bottom",
                end: "top 96px",
                scrub: true,
              },
            });

            if (prevOverlay) {
              gsap.to(prevOverlay, {
                opacity: 0.15,
                ease: "none",
                scrollTrigger: {
                  trigger: sheet,
                  start: "top bottom",
                  end: "top 96px",
                  scrub: true,
                },
              });
            }
          }

          // ── 2. Content stagger-in once sheet has settled ─────────────────
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sheet,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          });

          // Reset initial state
          gsap.set(content, { opacity: 0, y: 40 });
          if (screenshot) gsap.set(screenshot, { opacity: 0, y: 40 });

          tl.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          });

          if (screenshot) {
            tl.to(
              screenshot,
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
              "-=0.3"
            );
          }
        });

        // ── Refresh after all images load ──
        window.addEventListener("load", () => ScrollTrigger.refresh());
      });

      // ── MOBILE: sticky stacking, but no scale/darken ────────────────────
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          sheets.forEach((sheet) => {
            const content = sheet.querySelectorAll<HTMLElement>(".sw-content-item");
            const screenshot = sheet.querySelector<HTMLElement>(".sw-screenshot");

            gsap.set(content, { opacity: 0, y: 30 });
            if (screenshot) gsap.set(screenshot, { opacity: 0, y: 30 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sheet,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            });

            tl.to(content, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            });

            if (screenshot) {
              tl.to(
                screenshot,
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                "-=0.2"
              );
            }
          });

          window.addEventListener("load", () => ScrollTrigger.refresh());
        }
      );

      // ── REDUCED MOTION: simple fades, no scrub ──────────────────────────
      mm.add("(prefers-reduced-motion: reduce)", () => {
        sheets.forEach((sheet) => {
          const allItems = sheet.querySelectorAll<HTMLElement>(
            ".sw-content-item, .sw-screenshot"
          );

          gsap.set(allItems, { opacity: 0 });

          gsap.to(allItems, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sheet,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#F7F6F3] relative">
      {/* ── Section intro ─────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 pt-24 pb-16 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#181818]/50">
                / SELECTED WORK /
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-[#181818] leading-[1.05]">
              Projects that move ideas forward.
              <sup className="text-xl md:text-3xl ml-2 font-normal text-[#181818]/30">
                03
              </sup>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-lg md:text-xl text-[#181818]/60 leading-relaxed font-medium">
              We build digital products and experiences that solve real problems,
              create meaningful interactions, and help businesses move forward.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stacked sheets ────────────────────────────────────────────── */}
      <div className="relative">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="sw-sheet sticky top-24 h-[calc(100vh-6rem)] flex flex-col overflow-hidden"
            style={{
              backgroundColor: project.bg,
              borderRadius: "32px 32px 0 0",
              marginTop: i === 0 ? 0 : "-32px",
              zIndex: 10 + i,
              willChange: "transform",
            }}
          >
            {/* Darkening overlay (starts transparent) */}
            <div
              className="sw-overlay absolute inset-0 bg-black pointer-events-none"
              style={{ opacity: 0, zIndex: 2, borderRadius: "inherit" }}
            />

            {/* Sheet content */}
            <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-12 max-w-[1920px] mx-auto w-full">

              {/* ── TOP ROW: 4-column grid ─────────────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_2fr_1fr] gap-8 md:gap-12 items-start">

                {/* 1. Tags / Services */}
                <div className="flex flex-col gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="sw-content-item text-[13px] font-medium text-[#181818]/50 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 2. Project Name + Type */}
                <div className="flex flex-col gap-3">
                  <h3 className="sw-content-item text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#181818] uppercase">
                    {project.name}
                  </h3>
                  <p className="sw-content-item text-sm md:text-[15px] text-[#181818]/40 font-medium">
                    ({project.subtitle})
                  </p>
                </div>

                {/* 3. Description */}
                <div className="flex flex-col gap-6 md:pr-10">
                  <p className="sw-content-item text-[15px] md:text-base text-[#181818]/60 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* 4. CTA Button */}
                <div className="flex items-start justify-end">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="sw-content-item rounded-full bg-[#222] text-white px-6 py-3 flex items-center gap-3 hover:bg-black transition-colors font-medium text-[13px] group whitespace-nowrap">
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    {project.linkText}
                  </a>
                </div>
              </div>

              {/* ── BOTTOM ROW: Logo tile + Screenshot ─────────────────── */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-16 items-end pt-16 md:pt-24 pb-4">

                {/* Logo tile */}
                <div
                  className="sw-content-item rounded-2xl md:rounded-[2rem] flex items-center justify-center aspect-[4/3] w-full max-w-[280px]"
                  style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                >
                  <span className="text-4xl md:text-5xl font-bold tracking-tighter text-[#181818] select-none opacity-90">
                    {project.name.split(" ")[0].toLowerCase()}
                  </span>
                </div>

                {/* Screenshot */}
                <div
                  className="sw-screenshot rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 w-full aspect-[16/10]"
                  style={{ willChange: "transform" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-[1.03]"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
