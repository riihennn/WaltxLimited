"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track the entrance of the section (as it slides up from the bottom)
  const { scrollYProgress: enterProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "start 5%"],
  });

  // The title reveals while the card is sliding up (using enterProgress)
  const titleOpacity = useTransform(enterProgress, [0, 1], [0, 1]);
  const titleY = useTransform(enterProgress, [0, 1], [40, 0]);

  // The arrow draws from 0.2 to 0.7 of the main scroll progress
  const pathProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);

  // The bottom section reveals from 0.7 to 0.9 of the scroll progress
  const bottomOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const bottomY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);

  return (
    <section ref={sectionRef} className="relative z-20 w-full h-[200vh] bg-transparent pointer-events-none">
      {/* Sticky Container - fills the screen with minimal outer margin */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col p-2 sm:p-3 lg:p-4 pointer-events-auto">

        {/* Main Dark Card (Full Screen Width) */}
        <div className="w-full h-full bg-[#292929] rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden text-[#F4F3EF] shadow-2xl">

          <Container className="h-full flex flex-col pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-[140px] lg:pb-16 relative z-10">

            {/* Top Section: Title & SVG Animation */}
            <div className="w-full relative pt-2 md:pt-6">
              <motion.h2
                style={{ opacity: titleOpacity, y: titleY }}
                className="text-[3.5rem] md:text-7xl lg:text-[7rem] font-medium leading-[1] tracking-tight"
              >
                Let&apos;s Launch Your <br />
                <span className="relative inline-flex items-center">
                  Journey

                  {/* SVG Snake Animation (Desktop only) */}
                  <div className="hidden lg:block absolute left-full bottom-[-100px] ml-4 w-[600px] h-[350px]">

                    {/* Decorative Circles */}
                    <div className="absolute top-[-10px] left-[200px] flex gap-2 z-10">
                      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#B6C3CA] flex items-center justify-center shadow-inner">
                        <Asterisk className="w-10 h-10 text-[#181818]" strokeWidth={2.5} />
                      </div>
                      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#C2CDB6] flex items-center justify-center shadow-inner">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#181818]">
                          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                        </svg>
                      </div>
                    </div>

                    {/* Animated Winding SVG Line */}
                    <svg viewBox="0 0 600 350" className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" fill="none" stroke="#A69898" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="
                        M 60 20
                        Q 60 70, 100 70
                        L 350 70
                        A 30 30 0 0 1 350 130
                        L 60 130
                        A 30 30 0 0 0 60 190
                        L 450 190
                        A 30 30 0 0 1 480 220
                        L 480 280
                      "
                        style={{ pathLength: pathProgress }}
                      />
                      <motion.path
                        d="M 465 265 L 480 280 L 495 265"
                        style={{ pathLength: pathProgress, opacity: arrowOpacity }}
                      />
                    </svg>
                  </div>
                </span>
              </motion.h2>
            </div>

            {/* Bottom Section: Text & Form */}
            <motion.div
              style={{ opacity: bottomOpacity, y: bottomY }}
              className="mt-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-24 relative z-10 pb-[calc(env(safe-area-inset-bottom)+96px)] md:pb-[calc(env(safe-area-inset-bottom)+112px)] lg:pb-10"
            >

              <div className="w-full lg:w-5/12 flex flex-col gap-12">
                <p className="text-[#F4F3EF]/60 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-sm">
                  Share a link to your current website or a short description of your project.
                </p>

                <div className="flex flex-col gap-2">
                  <span className="text-[#F4F3EF]/40 text-xs font-semibold tracking-wider uppercase mb-1">Contact Us</span>
                  <a href="mailto:operations@waltx.ae" className="text-[#F4F3EF] text-base md:text-lg font-medium hover:opacity-80 transition-opacity">operations@waltx.ae</a>
                </div>
              </div>

              <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10 pb-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F3EF] leading-tight mb-4">
                  Tell us what you're working on.
                </h3>
                <Link href="/contact" className="mt-4 self-start bg-white text-[#181818] rounded-full px-8 py-3.5 flex items-center gap-3 text-sm font-semibold hover:bg-gray-100 transition-colors group">
                  Contact WaltX
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#181818]/30 group-hover:text-[#181818] transition-colors"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>

          </Container>
        </div>
      </div>
    </section>
  );
}
