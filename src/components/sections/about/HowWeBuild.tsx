"use client";

import { Container } from "@/components/ui/Container";

const processes = [
  {
    id: "01",
    title: "Discover",
    desc: "Understand the problem, people, and goals."
  },
  {
    id: "02",
    title: "Design",
    desc: "Turn ideas into clear and intuitive experiences."
  },
  {
    id: "03",
    title: "Build",
    desc: "Create reliable, scalable digital products."
  },
  {
    id: "04",
    title: "Evolve",
    desc: "Learn, improve, and build for what comes next."
  }
];

export function HowWeBuild() {
  return (
    <section className="py-24 md:py-32 bg-[#F6F5F2]">
      <Container>
        <div className="flex flex-col gap-6 mb-16 md:mb-24 max-w-3xl">
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase">
            02 / HOW WE BUILD /
          </div>
          <h2 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
            From idea to experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {processes.map((step) => (
            <div key={step.id} className="flex flex-col gap-4 group">
              <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/40 uppercase group-hover:text-[#181818] transition-colors duration-300">
                {step.id} &mdash; {step.title}
              </div>
              <p className="text-[clamp(20px,1.8vw,28px)] font-medium tracking-tight text-[#181818]/90 leading-[1.4]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
