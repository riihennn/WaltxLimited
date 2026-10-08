"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function ContactLocation() {
  return (
    <section className="bg-[#F9F1EC] relative z-10 pt-20 pb-20 lg:pb-32 text-[#181818] overflow-hidden">
      <Container>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-20 lg:gap-32 w-full max-w-5xl"
        >
          {/* Top: Label and Heading */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#666664] uppercase">
              Our Location
            </span>
            <h2 className="text-[clamp(36px,4vw,60px)] leading-[1.05] font-medium text-[#181818] tracking-tight">
              With WaltX you are<br/>
              bound to grow
            </h2>
          </motion.div>

          {/* Bottom: Country and Address */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* Country Label (Left) */}
            <div className="md:col-span-4 lg:col-span-6">
              <span className="text-2xl lg:text-3xl font-medium text-[#181818]">UAE</span>
            </div>
            
            {/* Address Details (Right) */}
            <div className="md:col-span-8 lg:col-span-6 flex flex-col gap-6 text-xl lg:text-[1.35rem] text-[#181818] font-light">
              <address className="not-italic leading-relaxed">
                FD &ndash; First Floor, Incubator Building,<br />
                Masdar City, Abu Dhabi<br />
                United Arab Emirates
              </address>
              <div className="flex flex-col gap-2">
                <a href="mailto:operations@waltx.ae" className="text-[#181818] hover:text-[#666664] transition-colors inline-block w-fit border-b border-[#181818] hover:border-[#666664] pb-0.5">
                  operations@waltx.ae
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
