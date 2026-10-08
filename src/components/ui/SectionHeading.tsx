import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-secondary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-primary max-w-[900px]">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-secondary max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
