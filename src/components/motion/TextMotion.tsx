"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function TextMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selector = [
      ".site-header nav a", ".hero-note", ".site-mark small",
      "main h1", "main h2", "main h3", "main p", "main .eyebrow",
      "main .site-domain", "main .contact-email",
      ".site-footer strong", ".site-footer p", ".site-footer nav a",
    ].join(", ");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("text-in-view");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -12px 0px" });

    for (const element of elements) {
      element.classList.add("text-reveal");
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
