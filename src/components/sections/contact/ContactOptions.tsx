"use client";

import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const options = [
  {
    number: "01",
    title: "START A PROJECT",
    description: "Have an idea for a digital product or platform?",
    cta: "Tell us about your project"
  },
  {
    number: "02",
    title: "PARTNERSHIP",
    description: "Interested in working with WaltX or exploring a partnership?",
    cta: "Let's connect"
  },
  {
    number: "03",
    title: "GENERAL ENQUIRY",
    description: "Have a question or simply want to reach out?",
    cta: "Send us a message"
  }
];

export function ContactOptions() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F6F5F2] relative z-10 py-20 lg:py-32 overflow-hidden text-[#181818]">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          {/* Left: Label */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <span className="text-sm font-medium tracking-widest text-[#666664] uppercase">
              / HOW CAN WE HELP? /
            </span>
          </motion.div>

          {/* Right: Options List */}
          <motion.div variants={fadeUp} className="lg:col-span-8 lg:col-start-4 flex flex-col border-t border-[#DFDEDA]">
            {options.map((option, idx) => (
              <div 
                key={idx}
                onClick={scrollToForm}
                className="group flex flex-col md:flex-row md:items-center justify-between border-b border-[#DFDEDA] py-12 md:py-16 cursor-pointer hover:bg-white/40 transition-colors duration-500 px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 lg:gap-24">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-[#666664] w-6">{option.number}</span>
                    <h3 className="text-2xl lg:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-lg lg:text-xl text-[#666664] font-light max-w-md mt-2 md:mt-0 group-hover:text-[#181818] transition-colors duration-500">
                    {option.description}
                  </p>
                </div>
                <div className="mt-8 md:mt-0 flex items-center gap-3 text-lg font-medium group-hover:opacity-70 transition-opacity">
                  {option.cta}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
