"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { id: "01", title: "THE BEGINNING", text: "WaltX started with a simple idea: build digital products that solve real-world problems." },
  { id: "02", title: "BUILDING", text: "We began developing products across experiences, hospitality, lifestyle, and digital platforms." },
  { id: "03", title: "EXPANDING", text: "Our product ecosystem continues to grow across new markets and opportunities." },
  { id: "04", title: "WHAT'S NEXT", text: "We continue building, experimenting, and creating products for a more connected digital world." },
];

export function StoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + scrollRef.current?.offsetWidth
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      // On mobile, just simple vertical reveals
      panels.forEach((panel) => {
        gsap.fromTo(panel, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
            }
          }
        );
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#F6F5F2] py-24 md:py-0 overflow-hidden relative">
      <div className="md:h-screen flex flex-col justify-center">
        <Container className="mb-12 md:mb-20">
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-6">
            THE WALTX STORY
          </div>
          <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
            From ideas to digital products.
          </h2>
        </Container>

        <div ref={scrollRef} className="flex flex-col md:flex-row md:flex-nowrap md:w-[400vw] h-full">
          {milestones.map((milestone, i) => (
            <div key={milestone.id} className="story-panel w-full md:w-[100vw] flex-shrink-0 flex items-center px-6 md:px-0 mb-16 md:mb-0">
              <Container className="w-full">
                <div className="max-w-[750px]">
                  <div className="text-[#181818]/20 font-mono text-[clamp(48px,5vw,72px)] font-bold tracking-tighter leading-none mb-6">
                    {milestone.id}
                  </div>
                  <h3 className="text-[clamp(20px,1.5vw,24px)] font-bold tracking-tight text-[#181818] mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 font-medium leading-[1.6]">
                    {milestone.text}
                  </p>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
