"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "AWS",
  "Tailwind CSS",
];

export function Technology() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-16">
          <SectionHeading
            eyebrow="Our Technology"
            title={
              <>
                Built with modern<br />
                technology.
              </>
            }
          />
          <div className="hidden md:block max-w-sm">
            <p className="text-secondary text-lg">
              We leverage the latest frameworks and robust infrastructure to ensure every product we build is fast, secure, and scalable.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-4 rounded-2xl bg-white border border-border flex items-center justify-center hover:border-primary/20 transition-colors"
            >
              <span className="text-lg font-medium text-primary">{tech}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
