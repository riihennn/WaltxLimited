"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Asterisk } from "lucide-react";

const TextContent = ({ active = false, scrollYProgress }: { active?: boolean, scrollYProgress: MotionValue<number> }) => {
  const pathD = useTransform(scrollYProgress, [0, 0.25], [
    "M10 50 L 30 50 C 40 50, 40 40, 50 40 C 60 40, 60 60, 70 60 C 80 60, 80 50, 90 50 L 190 50",
    "M10 50 L 50 50 C 70 50, 70 20, 90 20 C 110 20, 110 80, 130 80 C 150 80, 150 50, 170 50 L 190 50"
  ]);

  return (
    <div className={`flex items-center justify-center gap-[4vw] w-[155vw] whitespace-nowrap ${active ? 'text-[#181818]' : 'text-[#E2E1DF]'}`}>

      {/* First Star Circle - Solid background with cutout star */}
      <div className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E2E1DF]'}`}>
        <Asterisk className="w-[6vw] h-[6vw] text-[#F7F6F3]" />
      </div>

      <span
        className="text-[17vw] font-semibold tracking-tighter"
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        We
      </span>

      {/* Custom Abstract Curved Arrow */}
      <motion.svg
        width="18vw"
        height="10vw"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path d={pathD} stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 170 30 L 190 50 L 170 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      <span
        className="text-[17vw] font-semibold tracking-tighter"
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        are
      </span>

      {/* Second Star Circle - Solid background with cutout star */}
      <div className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#181818]' : 'bg-[#E2E1DF]'}`}>
        <Asterisk className="w-[6vw] h-[6vw] text-[#F7F6F3]" />
      </div>

      <span
        className="text-[17vw] font-semibold tracking-tighter"
        style={{ letterSpacing: "-0.06em", lineHeight: 0.85 }}
      >
        best:
      </span>
    </div>
  );
};

export function WaltxBestTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Height of 300vh speeds up the scroll and reduces blank space at the end
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Start with the text covering the screen
  // Ending at -55vw combined with px-[2vw] perfectly frames the arrow on the left and 'best:' on the right
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-55vw"]);

  // The black active layer fills up faster than the scroll so it completes before the end
  const maskWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);



  return (
    <section ref={containerRef} className="h-[300vh] bg-[#F7F6F3] relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Text Container Base Layer (Light Gray) */}
        <motion.div
          style={{ x }}
          className="absolute left-0 flex items-center w-max"
        >
          <TextContent active={false} scrollYProgress={scrollYProgress} />
        </motion.div>

        {/* Text Container Active Layer (Dark Black) filling from left to right like a loading bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 overflow-hidden z-10 pointer-events-none"
          style={{ width: maskWidth }}
        >
          <motion.div
            style={{ x }}
            className="absolute left-0 h-full flex items-center w-max"
          >
            <TextContent active={true} scrollYProgress={scrollYProgress} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
