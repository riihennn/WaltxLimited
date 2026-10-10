"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk, MoveRight } from "lucide-react";

const TextContent = ({ active = false }: { active?: boolean }) => (
  <div className={`flex items-center gap-[4vw] px-[10vw] whitespace-nowrap ${active ? 'text-[#181818]' : 'text-[#E1E0DD]'}`}>
    
    {/* First Star Circle - Solid background with cutout star */}
    <div className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E1E0DD]'}`}>
      <Asterisk className="w-[6vw] h-[6vw] text-[#F6F5F2]" />
    </div>

    <span className="text-[16vw] font-bold tracking-tighter">We</span>
    
    <MoveRight className="w-[12vw] h-[12vw]" strokeWidth={1.5} />
    
    <span className="text-[16vw] font-bold tracking-tighter">are</span>
    
    {/* Second Star Circle - Solid background with cutout star */}
    <div className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E1E0DD]'}`}>
      <Asterisk className="w-[6vw] h-[6vw] text-[#F6F5F2]" />
    </div>
    
    <span className="text-[16vw] font-bold tracking-tighter">best:</span>
  </div>
);

export function WaltxTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["80vw", "-120%"]);



  return (
    <section ref={containerRef} className="h-[300vh] bg-[#F6F5F2] relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Subtle Label */}
        <div className="absolute bottom-12 left-6 sm:left-12 z-20">
          <span className="text-xs font-semibold tracking-widest text-[#666664] uppercase">
            WHAT WE BUILD
          </span>
        </div>

        {/* Text Container Base Layer (Light Gray) */}
        <motion.div 
          style={{ x }}
          className="absolute left-0 flex items-center"
        >
          <TextContent active={false} />
        </motion.div>

        {/* Text Container Active Layer (Dark Black) with fixed center mask */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            maskImage: "linear-gradient(to right, transparent 15%, black 40%, black 60%, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 15%, black 40%, black 60%, transparent 85%)"
          }}
        >
          <motion.div 
            style={{ x }}
            className="absolute left-0 h-full flex items-center"
          >
            <TextContent active={true} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
