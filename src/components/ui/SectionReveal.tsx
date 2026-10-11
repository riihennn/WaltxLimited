"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { ReactNode } from "react";

const smoothEase = [0.21, 0.47, 0.32, 0.98] as const;

export function SectionReveal({
  children,
  delay = 0,
  y = 36,
  duration = 0.8,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-40px" }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delayChildren?: number; staggerChildren?: number } = {}) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayChildren ?? 0,
      staggerChildren: custom.staggerChildren ?? 0.14,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.14,
  delay = 0,
  ...props
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={containerVariants}
      custom={{ delayChildren: delay, staggerChildren: stagger }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-40px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
