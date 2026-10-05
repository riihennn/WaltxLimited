"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "DIGITAL PLATFORM",
    name: "Rave Dubai",
    subtitle: "Events & Entertainment Platform",
    description: "A modern digital platform connecting people with events, nightlife, and experiences across Dubai.",
    bgColor: "bg-[#E3E8EC]", // Soft blue-gray
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
  },
  {
    category: "E-COMMERCE",
    name: "Dubai Brunches",
    subtitle: "Dining & Experience Platform",
    description: "A digital platform built to discover and explore brunch experiences across Dubai.",
    bgColor: "bg-[#F3EFEA]", // Soft warm tone
    image: "https://images.unsplash.com/photo-1490818387583-1b5f2a15f011?q=80&w=2000&auto=format&fit=crop"
  },
  {
    category: "SERVICE MARKETPLACE",
    name: "Fework",
    subtitle: "Hyperlocal Service Platform",
    description: "A marketplace connecting customers with trusted local professionals through a seamless digital experience.",
    bgColor: "bg-[#EAF0EC]", // Soft sage green
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    category: "HOSPITALITY",
    name: "The Lost Cabins",
    subtitle: "Resort Booking Experience",
    description: "A refined digital booking experience designed for a modern hospitality brand.",
    bgColor: "bg-[#F2EBEB]", // Soft blush
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
  }
];

export function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-[#F7F6F3] h-[400vh] relative z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:py-12 px-6 sm:px-12 max-w-[1600px] mx-auto overflow-hidden">
        
        {/* SECTION INTRO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 shrink-0">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#181818]/60">
                / SELECTED WORK /
              </span>
              <div className="h-[1px] w-12 bg-[#181818]/20"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#181818] leading-[1.1]">
              Projects that move ideas forward.<sup className="text-xl md:text-2xl ml-2 font-normal opacity-40">03</sup>
            </h2>
          </div>
          
          <div className="md:w-1/3 pb-2">
            <p className="text-lg text-[#666664] leading-relaxed">
              A selection of digital products and platforms we've designed and built across different industries, combining thoughtful design, modern technology, and real-world impact.
            </p>
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex-1 relative w-full perspective-[1000px] mt-4">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              index={i} 
              project={project} 
              progress={scrollYProgress} 
              total={projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ index, project, progress, total }: { index: number, project: any, progress: MotionValue<number>, total: number }) {
  const step = 1 / (total - 1);
  const breakpoints = Array.from({ length: total }).map((_, i) => i * step);
  
  // Slide up from 120% to 0%
  const yValues = breakpoints.map((bp, i) => {
    if (i < index) return "120%";
    return "0%";
  });
  
  // Scale shrinks by 0.04 for each subsequent card that overlaps it
  const scaleValues = breakpoints.map((bp, i) => {
    if (i < index) return 0.96;
    if (i === index) return 1;
    return 1 - ((i - index) * 0.04); 
  });
  
  // Opacity fades slightly as it gets pushed deeper into the stack
  const opacityValues = breakpoints.map((bp, i) => {
    if (i < index) return 0;
    if (i === index) return 1;
    return 1 - ((i - index) * 0.15);
  });
  
  const y = useTransform(progress, breakpoints, yValues);
  const scale = useTransform(progress, breakpoints, scaleValues);
  const opacity = useTransform(progress, breakpoints, opacityValues);

  return (
    <motion.div
      style={{ y, scale, opacity, transformOrigin: "top center" }}
      className={`absolute inset-0 w-full h-full rounded-[2rem] border border-[#E2E1DF] flex flex-col md:flex-row overflow-hidden shadow-sm ${project.bgColor}`}
    >
      {/* Content Area */}
      <div className="w-full md:w-[45%] p-8 lg:p-14 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase text-[#181818]/60 mb-6">
            {project.category}
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-[#181818] mb-4">
            {project.name}
          </h3>
          <h4 className="text-xl md:text-2xl text-[#181818]/80 font-medium mb-6">
            {project.subtitle}
          </h4>
          <p className="text-[#666664] leading-relaxed text-lg max-w-md">
            {project.description}
          </p>
        </div>
        
        <div className="mt-8 md:mt-12">
          <button className="flex items-center gap-3 text-[#181818] font-semibold group">
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">View project</span>
              <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">View project</span>
            </span>
            <span className="w-10 h-10 rounded-full bg-[#181818] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
      
      {/* Image / Visual Area */}
      {/* Positioned bottom-right to look like a floating product mockup */}
      <div className="w-full md:w-[55%] relative h-[300px] md:h-full flex items-end justify-end pl-8 md:pl-0 pt-8 md:pt-14">
        <div className="w-full h-full relative rounded-tl-[2rem] shadow-2xl overflow-hidden border-t border-l border-white/20 bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.image} 
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </motion.div>
  );
}
