"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk, MoveRight } from "lucide-react";

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "-100%"]);
  const clipWidth = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-background z-20">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div 
          style={{ x }} 
          className="flex items-center gap-8 sm:gap-16 whitespace-nowrap w-max px-[10vw]"
        >
          <span className="text-[20vw] sm:text-[18vw] font-bold text-secondary/20 tracking-tighter">We</span>
          <MoveRight className="w-[12vw] sm:w-[10vw] h-auto text-secondary/20" strokeWidth={1} />
          <span className="text-[20vw] sm:text-[18vw] font-bold text-secondary/20 tracking-tighter">are</span>
          <div className="w-[15vw] sm:w-[12vw] aspect-square rounded-full bg-secondary/10 flex items-center justify-center">
             <Asterisk className="w-[8vw] sm:w-[6vw] h-auto text-secondary/20" />
          </div>
          <span className="text-[20vw] sm:text-[18vw] font-bold text-secondary/20 tracking-tighter">best:</span>
        </motion.div>

        <motion.div 
          style={{ x, clipPath: `inset(0 var(--clip) 0 0)` }} 
          className="absolute flex items-center gap-8 sm:gap-16 whitespace-nowrap w-max px-[10vw] z-10"
        >
          <motion.div style={{ clipPath: useTransform(clipWidth, w => `inset(0 ${w} 0 0)`) }} className="absolute inset-0 w-full h-full flex items-center gap-8 sm:gap-16 whitespace-nowrap px-[10vw]">
            <span className="text-[20vw] sm:text-[18vw] font-bold text-primary tracking-tighter">We</span>
            <MoveRight className="w-[12vw] sm:w-[10vw] h-auto text-primary" strokeWidth={1} />
            <span className="text-[20vw] sm:text-[18vw] font-bold text-primary tracking-tighter">are</span>
            <div className="w-[15vw] sm:w-[12vw] aspect-square rounded-full bg-secondary/20 flex items-center justify-center">
               <Asterisk className="w-[8vw] sm:w-[6vw] h-auto text-primary" />
            </div>
            <span className="text-[20vw] sm:text-[18vw] font-bold text-primary tracking-tighter">best:</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
