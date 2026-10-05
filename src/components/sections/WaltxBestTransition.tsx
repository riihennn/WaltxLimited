"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Asterisk } from "lucide-react";

export function WaltxBestTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Height of 300vh speeds up the scroll and reduces blank space at the end
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Start with the text covering the screen
  // Ending at -70vw ensures 'best:' perfectly stops on the right side of the screen
  // We finish horizontal movement at 0.7 progress so it freezes in place
  const x = useTransform(scrollYProgress, [0, 0.7], ["0vw", "-70vw"]);
  
  // The black active layer fills up from left to right like a loading bar
  const maskWidth = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  // Cinematic exit transitions as the next section overlaps (0.7 to 1.0)
  const mainOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.2]);
  const blurValue = useTransform(scrollYProgress, [0.7, 1], [0, 12]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  
  // Secondary elements fade out faster than the main typography for depth
  const secondaryOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);

  const TextContent = ({ active = false }: { active?: boolean }) => (
    <div className={`flex items-center gap-[4vw] px-[10vw] whitespace-nowrap ${active ? 'text-[#181818]' : 'text-[#E2E1DF]'}`}>
      
      {/* First Star Circle - Solid background with cutout star */}
      <motion.div style={{ opacity: secondaryOpacity }} className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E2E1DF]'}`}>
        <Asterisk className="w-[6vw] h-[6vw] text-[#F7F6F3]" />
      </motion.div>

      <span 
        className="text-[17vw] font-semibold tracking-tighter" 
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        We
      </span>
      
      {/* Custom Abstract Curved Arrow */}
      <motion.svg style={{ opacity: secondaryOpacity }} width="18vw" height="10vw" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" preserveAspectRatio="xMidYMid meet">
        <path d="M10 50 L 50 50 C 70 50, 70 20, 90 20 C 110 20, 110 80, 130 80 C 150 80, 150 50, 170 50 L 190 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 170 30 L 190 50 L 170 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
      
      <span 
        className="text-[17vw] font-semibold tracking-tighter" 
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        are
      </span>
      
      {/* Second Star Circle - Solid background with cutout star */}
      <motion.div style={{ opacity: secondaryOpacity }} className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E2E1DF]'}`}>
        <Asterisk className="w-[6vw] h-[6vw] text-[#F7F6F3]" />
      </motion.div>
      
      <span 
        className="text-[17vw] font-semibold tracking-tighter" 
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        best:
      </span>
    </div>
  );

  return (
    <section ref={containerRef} className="h-[300vh] bg-[#F7F6F3] relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Text Container Base Layer (Light Gray) */}
        <motion.div 
          style={{ x, opacity: mainOpacity, filter }}
          className="absolute left-0 flex items-center w-max"
        >
          <TextContent active={false} />
        </motion.div>

        {/* Text Container Active Layer (Dark Black) filling from left to right like a loading bar */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 overflow-hidden z-10 pointer-events-none"
          style={{ width: maskWidth }}
        >
          <motion.div 
            style={{ x, opacity: mainOpacity, filter }}
            className="absolute left-0 h-full flex items-center w-max"
          >
            <TextContent active={true} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
