"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const frames = [
  { src: "/images/ravedubai-home.png", label: "Rave Dubai" },
  { src: "/images/dubaibrunch-home.png", label: "Dubai Brunches" },
  { src: "/images/habibiguide-home.png", label: "Habibi Guide" },
  { src: "/images/yachtguide-home.png", label: "Yacht Guide UAE" },
];

export function HeroMedia() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % frames.length), 3800);
    return () => window.clearInterval(timer);
  }, [reduced]);

  return <div className="hero-media-wrap">
    <div className="hero-triangle" aria-label={`Featured website: ${frames[active].label}`} role="img">
      {frames.map((frame, index) => <Image key={frame.src} src={frame.src} alt="" fill sizes="(max-width: 700px) 85vw, 52vw" priority={index === 0} className={`hero-frame ${index === active ? "active" : ""}`} />)}
    </div>
    <div className="hero-media-controls" aria-label="Featured websites">{frames.map((frame, index) => <button key={frame.label} type="button" aria-label={`Show ${frame.label}`} aria-pressed={index === active} className={index === active ? "active" : ""} onClick={() => setActive(index)}>{String(index + 1).padStart(2, "0")}</button>)}</div>
  </div>;
}
