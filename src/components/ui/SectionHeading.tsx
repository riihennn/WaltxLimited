import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
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
        <span className="text-sm font-semibold tracking-wider text-secondary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-3xl">
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
