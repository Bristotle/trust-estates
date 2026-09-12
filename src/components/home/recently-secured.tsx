import { CheckCircle2 } from "lucide-react";
import { recentlySecured } from "@/data/content";

export function RecentlySecured() {
  const row = [...recentlySecured, ...recentlySecured];
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-forest-900/10 bg-white py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white" />
      <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-forest-900 px-3 py-1.5 text-[11px] font-semibold text-gold-300 lg:flex">
        <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-gold-400" /></span>
        Recently secured
      </div>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pl-40">
        {row.map((r, i) => (
          <span key={i} className="flex items-center gap-3 text-sm">
            <CheckCircle2 className="size-4 text-forest-700" />
            <span className="font-semibold text-forest-950">{r.what}</span>
            <span className="text-ink-muted">{r.where}</span>
            <span className="text-ink-muted/60">·</span>
            <span className="text-ink-muted">{r.who}</span>
            <span className="rounded-full bg-cream-200 px-2 py-0.5 text-[11px] text-ink-muted">{r.when}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
