import { Check, Minus, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { comparison } from "@/data/content";
import { Logo } from "@/components/ui/logo";

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <span className="inline-flex size-7 items-center justify-center rounded-full bg-forest-900 text-gold-400"><Check className="size-4" /></span>;
  if (v === false) return <span className="inline-flex size-7 items-center justify-center rounded-full bg-forest-900/8 text-ink-muted"><X className="size-4" /></span>;
  return <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted"><Minus className="size-3.5" /> {v}</span>;
}

export function Compare() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title={<>Why buyers switch to us after <span className="italic text-forest-700">one bad experience.</span></>}
          body="Most agents in Ghana sell first and verify never. Here is exactly what we do differently, so you can hold us to it."
          align="center"
        />
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl bg-white ring-1 ring-forest-900/10">
          <div className="grid grid-cols-[1fr_56px_72px] items-center gap-3 border-b border-forest-900/10 bg-cream-50 px-4 py-4 text-[13px] font-semibold sm:grid-cols-[1fr_160px_160px] sm:gap-4 sm:px-6 sm:py-5 sm:text-sm">
            <span className="text-ink-muted">What you get</span>
            <span className="hidden justify-center sm:flex"><Logo className="scale-90" /></span>
            <span className="text-center text-forest-900 sm:hidden">Us</span>
            <span className="text-center text-ink-muted">Typical<span className="hidden sm:inline"> agent</span><span className="sm:hidden"> agent</span></span>
          </div>
          {comparison.map((c, i) => (
            <div key={c.item} className={`grid grid-cols-[1fr_56px_72px] items-center gap-3 px-4 py-4 text-[13px] sm:grid-cols-[1fr_160px_160px] sm:gap-4 sm:px-6 sm:text-sm ${i % 2 ? "bg-cream-50/60" : ""}`}>
              <span className="text-forest-950">{c.item}</span>
              <span className="flex justify-center"><Cell v={c.us} /></span>
              <span className="flex justify-center"><Cell v={c.them} /></span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
