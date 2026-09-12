import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="Estates Trust home">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M6 22 20 9l14 13" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 20v12h18V20" stroke={light ? "#fff" : "#0b3b2c"} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="17" y="24" width="6" height="8" fill="#d4af37" />
        <path d="M26 12V8h4v8" stroke="#d4af37" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className="serif-display text-[1.55rem] leading-none tracking-tight">
        <span className={light ? "text-white" : "text-forest-900"}>Estates</span>{" "}
        <span className={light ? "text-gold-400 italic" : "text-gold-700 italic"}>Trust</span>
      </span>
    </Link>
  );
}
