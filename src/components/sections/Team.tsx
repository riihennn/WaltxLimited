"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

// Team member data matching the reference layout & aesthetics
const teamMembers = [
  {
    id: "collaborations",
    name: "Collaborations",
    bio: "We have access to the best design talent worldwide. Based on your project goal, we strengthen our team with top-notch UX designers, researchers or web designers.",
    bg: "#E2E1EC", // Pastel lilac / purple
    image: "/team-collaboration.jpg",
    alt: "WaltX Creative Collaborations illustration",
    actions: null,
  },
  {
    id: "kristina",
    name: "Kristina Holysheva",
    bio: "Founder of a design recruitment agency, ex-Google Design Recruiter, experienced in building and managing design teams with 8+ years in tech. Based in Warsaw.",
    bg: "#E4E7DB", // Pastel sage green / olive
    image: "/team-kristina.jpg",
    alt: "Kristina Holysheva headshot",
    actions: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        isExternal: true,
      },
    ],
  },
  {
    id: "borys",
    name: "Borys Baklanov",
    bio: "Senior designer with 6 years of experience building world-renowned SaaS products, including Miro and Klarna. Educator, teaching design in a leading Ukrainian design school. Based in Berlin.",
    bg: "#EDE3E4", // Pastel warm blush / rose
    image: "/team-borys.jpg",
    alt: "Borys Baklanov headshot",
    actions: [
      {
        label: "Website",
        href: "https://waltx.com",
        isExternal: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        isExternal: true,
      },
    ],
  },
];

// Elbow / curved arrow icon matching the reference style
function CurvedArrow({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 9a4 4 0 0 0 4 4h10" />
      <path d="M14 9l4 4-4 4" />
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function Team() {
  return (
    <section className="bg-[#F6F5F2] sticky top-0 z-10 h-[100dvh] w-full flex flex-col justify-center pt-[100px] pb-[80px] lg:pt-[110px] lg:pb-[90px] text-[#181818] overflow-hidden">
      <Container className="max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ── Section Header ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-start mb-6 sm:mb-8 lg:mb-10">
            {/* Top Left Tag */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase text-[#666664] block pt-2">
                / WE ARE WALTX /
              </span>
            </motion.div>

            {/* Section Title */}
            <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4">
              <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                Team
              </h2>
            </motion.div>

            {/* Section Subtitle / Description */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-6 md:pl-4 lg:pl-6"
            >
              <p className="text-[clamp(17px,1.2vw,21px)] text-[#666664] font-medium leading-[1.6] max-w-[750px]">
                A full-cycle product design studio from Europe, made of colleagues
                turned friends who genuinely enjoy working together.
              </p>
            </motion.div>
          </div>

          {/* ── Team Cards Grid ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="flex flex-col group"
              >
                {/* Pastel Frame Container */}
                <div
                  className="w-full aspect-[4/3] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ backgroundColor: member.bg }}
                >
                  {/* Inner Image Frame */}
                  <div className="relative w-full h-full rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-xs">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={member.id === "collaborations"}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#181818] tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#666664] leading-relaxed mt-1.5 flex-1">
                    {member.bio}
                  </p>

                  {/* Action Pill Buttons */}
                  <div className="mt-4 flex justify-center min-h-[34px] items-center">
                    {member.actions && member.actions.length === 1 && (
                      <a
                        href={member.actions[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#181818] text-white hover:bg-black text-[12px] font-medium px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:scale-105"
                      >
                        <CurvedArrow className="w-3 h-3 text-white/80" />
                        <span>{member.actions[0].label}</span>
                      </a>
                    )}

                    {member.actions && member.actions.length > 1 && (
                      <div className="inline-flex items-center gap-2 bg-[#181818] text-white text-[12px] font-medium px-4 py-2 rounded-full shadow-sm">
                        <a
                          href={member.actions[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors"
                        >
                          <CurvedArrow className="w-3 h-3 text-white/80" />
                          <span>{member.actions[0].label}</span>
                        </a>
                        <span className="text-white/30 text-xs select-none">|</span>
                        <a
                          href={member.actions[1].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white/80 transition-colors"
                        >
                          {member.actions[1].label}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
