import { cn } from "@/lib/utils";

export function Marquee({ items, className, light = true }: { items: string[]; className?: string; light?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden py-5", className)}>
      <div className={cn("pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r", light ? "from-forest-950" : "from-cream-100")} />
      <div className={cn("pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l", light ? "from-forest-950" : "from-cream-100")} />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap ">
        {row.map((t, i) => (
          <span key={i} className={cn("flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.22em]", light ? "text-white/60" : "text-forest-900/60")}>
            {t}
            <span className="size-1.5 rounded-full bg-gold-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
