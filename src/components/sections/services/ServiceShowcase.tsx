"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Digital Product Development",
    headline: "From first idea to a product ready for the real world.",
    description: "We design and develop digital products around real users, business goals, and long-term growth.",
    capabilities: [
      "Product Strategy",
      "Product Design",
      "Web Applications",
      "Mobile Experiences",
      "MVP Development",
      "Product Modernization"
    ],
    bg: "#F6F5F2"
  },
  {
    id: "02",
    title: "Web & Application Development",
    headline: "Fast, scalable, and built for the web.",
    description: "We create modern web applications and platforms with a strong focus on performance, usability, and maintainability.",
    capabilities: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Applications",
      "REST APIs",
      "Authentication & Authorization",
      "Database Architecture",
      "Performance Optimization"
    ],
    bg: "#EFEFEF"
  },
  {
    id: "03",
    title: "UI/UX & Digital Experience",
    headline: "Technology should feel as good as it works.",
    description: "We create intuitive digital experiences that connect design, usability, and technology.",
    capabilities: [
      "UX Strategy",
      "UI Design",
      "Design Systems",
      "Interaction Design",
      "Responsive Experiences",
      "Prototyping",
      "Motion & Micro-interactions"
    ],
    bg: "#EAE8E3"
  },
  {
    id: "04",
    title: "Cloud & Infrastructure",
    headline: "Technology built to scale with you.",
    description: "We build reliable infrastructure and deployment systems that keep digital products fast, secure, and available.",
    capabilities: [
      "Cloud Architecture",
      "Deployment",
      "CI/CD",
      "Performance Optimization",
      "Infrastructure Optimization",
      "Monitoring",
      "Scalability"
    ],
    bg: "#E2E4E6"
  },
  {
    id: "05",
    title: "AI & Automation",
    headline: "Smarter technology. Better workflows.",
    description: "We explore AI and automation to simplify processes, improve experiences, and create new possibilities.",
    capabilities: [
      "AI-Powered Features",
      "Intelligent Automation",
      "AI Integrations",
      "Workflow Automation",
      "Data-Driven Solutions",
      "AI-Ready Applications"
    ],
    bg: "#F6F5F2"
  },
  {
    id: "06",
    title: "Digital Platforms",
    headline: "Connected platforms for real-world experiences.",
    description: "We build platforms that bring users, businesses, services, and content together in one connected digital ecosystem.",
    capabilities: [
      "Marketplace Platforms",
      "Booking Platforms",
      "Content Platforms",
      "E-commerce",
      "Business Platforms",
      "Location-Based Experiences"
    ],
    bg: "#ffffff"
  }
];

export function ServiceShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sheets = gsap.utils.toArray<HTMLElement>(".ss-sheet");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      sheets.forEach((sheet, i) => {
        const content = sheet.querySelectorAll<HTMLElement>(".ss-content");

        // Scale down previous sheet
        if (i > 0) {
          const prevSheet = sheets[i - 1];
          const prevOverlay = prevSheet.querySelector<HTMLElement>(".ss-overlay");

          gsap.to(prevSheet, {
            scale: 0.9,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: sheet,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });

          if (prevOverlay) {
            gsap.to(prevOverlay, {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sheet,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            });
          }
        }

        // Fade in content
        gsap.set(content, { opacity: 0, y: 40 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sheet,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // simpler animations for mobile
      sheets.forEach((sheet) => {
        const content = sheet.querySelectorAll<HTMLElement>(".ss-content");
        gsap.set(content, { opacity: 0, y: 30 });
        
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sheet,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-white pb-32">
      <Container>
        <div className="pt-24 pb-12">
          <div className="text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-6">
            / OUR CAPABILITIES /
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#181818]">
            What we build.
          </h2>
        </div>
      </Container>

      <div className="relative mt-10">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="ss-sheet sticky top-0 h-[100vh] flex flex-col justify-center overflow-hidden"
            style={{
              backgroundColor: service.bg,
              zIndex: 10 + i,
              willChange: "transform",
            }}
          >
            {/* Overlay for darkening effect when next card slides up */}
            <div className="ss-overlay absolute inset-0 bg-black/40 opacity-0 pointer-events-none z-10" />

            <Container className="relative z-20 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                {/* Left side: Titles */}
                <div className="lg:col-span-5">
                  <div className="ss-content flex items-center gap-4 mb-8">
                    <span className="text-sm font-semibold tracking-widest text-[#181818]/40 uppercase">
                      {service.id} —
                    </span>
                    <span className="text-sm font-bold tracking-widest text-[#181818] uppercase">
                      {service.title}
                    </span>
                  </div>
                  <h3 className="ss-content text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#181818] leading-[1.1] mb-8">
                    {service.headline}
                  </h3>
                  <p className="ss-content text-xl md:text-2xl text-[#181818]/60 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right side: Capabilities */}
                <div className="lg:col-span-6 lg:col-start-7 bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-black/5 ss-content">
                  <h4 className="text-sm font-bold tracking-widest text-[#181818]/50 uppercase mb-8">
                    Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#181818]/30 mt-2.5 flex-shrink-0" />
                        <span className="text-lg text-[#181818]/80 font-medium leading-tight">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-black/10">
                    <a href="/contact" className="inline-flex items-center gap-3 text-sm font-bold tracking-wide text-[#181818] uppercase hover:opacity-70 transition-opacity group">
                      Discuss a project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}
