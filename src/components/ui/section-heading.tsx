import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", light ? "text-gold-400" : "text-gold-700")}>{eyebrow}</p>}
      <h2 className={cn("serif-display text-4xl sm:text-5xl lg:text-[3.4rem]", light ? "text-white" : "text-forest-950")}>{title}</h2>
      {body && <p className={cn("mt-5 text-base sm:text-lg leading-relaxed", light ? "text-white/70" : "text-ink-muted")}>{body}</p>}
    </Reveal>
  );
}
