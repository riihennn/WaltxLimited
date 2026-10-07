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
    name: "Rave Dubai",
    overview: [
      "A digital platform built around Dubai's nightlife and electronic music ecosystem.",
      "Rave Dubai brings nightlife discovery into one digital experience, helping users explore events, parties, venues, and experiences happening across the city.",
      "The product is designed around fast discovery and visually engaging content, making it easier for users to find what's happening and decide where to go next."
    ],
    keyFocus: [
      "Event discovery",
      "Nightlife experiences",
      "Venue discovery",
      "Content-led browsing",
      "Mobile-first experience"
    ],
    experience: "A visually driven interface designed to make discovering events feel quick, engaging, and intuitive.",
    bg: "#D6E0E5",
    image: "/ravedubai-ad.png",
    link: "https://ravedubai.com",
    linkText: "Visit Rave Dubai"
  },
  {
    id: "02",
    category: "Dining & Hospitality",
    name: "Dubai Brunches",
    overview: [
      "A digital destination built around Dubai's brunch culture.",
      "Dubai Brunches brings brunch venues and dining experiences together in one place, giving users a simple way to explore different options across the city.",
      "The experience is built around visual discovery, allowing users to browse venues and experiences without unnecessary complexity."
    ],
    keyFocus: [
      "Brunch discovery",
      "Dining experiences",
      "Venue exploration",
      "Visual content",
      "Mobile-first browsing"
    ],
    experience: "A clean discovery experience designed around the way people search for their next dining experience.",
    bg: "#EAE0D3",
    image: "/dubaibruch-ad.png",
    link: "https://dubaibrunches.com",
    linkText: "Visit Dubai Brunches"
  },
  {
    id: "03",
    category: "Travel & Lifestyle",
    name: "Habibi Guide",
    overview: [
      "A digital guide designed around discovering Dubai.",
      "Habibi Guide brings together places, dining, nightlife, beach clubs, neighbourhoods, and experiences into a single destination for exploring the city.",
      "The product focuses on discovery rather than simply presenting information, giving users an easy way to move from finding a place to exploring an experience."
    ],
    keyFocus: [
      "Local discovery",
      "Places & experiences",
      "Dining & nightlife",
      "Lifestyle content",
      "Exploration"
    ],
    experience: "A content-rich digital experience designed to make exploring Dubai feel more personal and engaging.",
    bg: "#D5E4DB",
    image: "/habibiguide-ad.png",
    link: "https://habibiguide.com",
    linkText: "Visit Habibi Guide"
  },
  {
    id: "04",
    category: "Yachts & Experiences",
    name: "Yacht Guide UAE",
    overview: [
      "A digital destination for discovering experiences on the water.",
      "Yacht Guide UAE brings yacht experiences and marine activities across the UAE into one digital platform.",
      "The product is designed to make discovering yacht experiences simple, visual, and accessible while presenting the UAE's marine lifestyle in a premium digital experience."
    ],
    keyFocus: [
      "Yacht discovery",
      "Marine experiences",
      "UAE destinations",
      "Experience browsing",
      "Enquiries"
    ],
    experience: "A premium, visual-first experience built around discovering and exploring life on the water.",
    bg: "#D8E8F5",
    image: "/yatchguide-ad.png",
    link: "https://yachtguideuae.com",
    linkText: "Visit Yacht Guide UAE"
  }
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
          // Reset initial state
          gsap.set(content, { opacity: 0, y: 40 });
          if (screenshot) gsap.set(screenshot, { opacity: 0, y: 40 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: i === 0 ? sectionRef.current : sheet,
              start: i === 0 ? "top 60%" : "top 60%",
              toggleActions: "play none none reverse",
            },
          });

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
          // On mobile, we also rely purely on the native scroll, 
          // keeping content visible immediately without fade-ins.
          sheets.forEach((sheet, i) => {
            const content = sheet.querySelectorAll<HTMLElement>(".sw-content-item");
            const screenshot = sheet.querySelector<HTMLElement>(".sw-screenshot");

            gsap.set(content, { opacity: 0, y: 30 });
            if (screenshot) gsap.set(screenshot, { opacity: 0, y: 30 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: i === 0 ? sectionRef.current : sheet,
                start: i === 0 ? "top 60%" : "top 60%",
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

      // ── REDUCED MOTION: simple scrolling, no animations ──────────────────────────
      mm.add("(prefers-reduced-motion: reduce)", () => {
        // No GSAP animations needed for reduced motion, native sticky scrolling handles it
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
            className="sticky top-0 h-[100dvh] w-full p-2 sm:p-3 lg:p-4 pointer-events-auto"
            style={{ zIndex: 10 + i }}
          >
            <div
              className="sw-sheet w-full h-full flex flex-col overflow-hidden relative shadow-2xl rounded-[2rem] lg:rounded-[3rem]"
              style={{
                backgroundColor: project.bg,
                willChange: "transform",
              }}
            >
              {/* Darkening overlay (starts transparent) */}
              <div
                className="sw-overlay absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: 0, zIndex: 2, borderRadius: "inherit" }}
              />

              {/* Sheet content */}
              <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-20 pt-[90px] lg:pt-[110px] pb-[80px] lg:pb-[100px] max-w-[1920px] mx-auto w-full justify-between">

              {/* ── HEADER ROW ─────────────────────────────── */}
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-4 lg:mb-0">
                
                {/* LEFT: Intro (60%) */}
                <div className="w-full md:w-[60%] flex flex-col gap-4 lg:gap-5">
                  <p className="sw-content-item text-[11px] md:text-xs font-bold tracking-widest uppercase text-[#181818]/50">
                    {project.id} — {project.category}
                  </p>
                  <h3 className="sw-content-item text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#181818] uppercase leading-[0.95]">
                    {project.name}
                  </h3>
                  <p className="sw-content-item text-base md:text-lg text-[#181818]/90 font-medium leading-snug mt-1 max-w-2xl">
                    {project.overview[0]}
                  </p>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="sw-content-item mt-4 lg:mt-5 rounded-full bg-[#181818] text-white px-6 py-2.5 md:py-3 flex items-center justify-center gap-3 w-max hover:bg-black transition-colors font-medium text-[12px] group whitespace-nowrap">
                    {project.linkText}
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* RIGHT: Image (40%) */}
                <div className="w-full md:w-[40%] flex-shrink-0 flex justify-end">
                  <div
                    className="sw-screenshot rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm aspect-[4/3] relative w-full max-w-[400px]"
                    style={{ willChange: "transform" }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-[1.03]"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

              </div>

              {/* ── BOTTOM ROW: Columns ─────────────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pt-6 lg:pt-10 border-t border-[#181818]/10 mt-auto">
                
                {/* 1. Overview */}
                <div className="flex flex-col gap-3">
                  <h4 className="sw-content-item text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#181818]/40">Product Overview</h4>
                  <div className="sw-content-item text-[13px] lg:text-[14px] text-[#181818]/80 leading-relaxed space-y-3 md:space-y-4 font-medium pr-4">
                    {project.overview.slice(1).map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 2. Key Focus */}
                <div className="flex flex-col gap-3">
                  <h4 className="sw-content-item text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#181818]/40">Key Focus</h4>
                  <ul className="sw-content-item text-[13px] lg:text-[14px] text-[#181818]/80 leading-relaxed space-y-2 font-medium">
                    {project.keyFocus.map((focus) => (
                      <li key={focus} className="flex items-start gap-3">
                        <span className="mt-[8px] w-[4px] h-[4px] rounded-full bg-[#181818]/30 shrink-0"></span>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Experience */}
                <div className="flex flex-col gap-3">
                  <h4 className="sw-content-item text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#181818]/40">Product Experience</h4>
                  <p className="sw-content-item text-[13px] lg:text-[14px] text-[#181818]/80 leading-relaxed font-medium">
                    {project.experience}
                  </p>
                </div>

              </div>
              
              </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
