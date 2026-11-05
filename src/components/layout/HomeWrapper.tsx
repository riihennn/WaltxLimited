"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HomeWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const custom = e as CustomEvent<{ isDark: boolean }>;
      const nextDark = !!custom.detail?.isDark;
      setIsDark(nextDark);

      if (typeof document !== "undefined") {
        document.body.style.transition = "background-color 850ms cubic-bezier(0.4, 0, 0.2, 1)";
        document.body.style.backgroundColor = nextDark ? "#0A0A0A" : "#F6F5F2";
      }
    };

    window.addEventListener("waltx-theme-change", handleThemeChange);
    return () => {
      window.removeEventListener("waltx-theme-change", handleThemeChange);
      if (typeof document !== "undefined") {
        document.body.style.backgroundColor = "";
      }
    };
  }, []);

  return (
    <div
      id="home-wrapper"
      data-theme={isDark ? "dark" : "light"}
      className={cn(
        "relative z-10 min-h-screen",
        isDark ? "bg-[#0A0A0A]" : "bg-[#F6F5F2]"
      )}
      style={{
        transition: "background-color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
