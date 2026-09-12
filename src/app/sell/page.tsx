import type { Metadata } from "next";
import { Banknote, ClipboardCheck, Handshake, Scale } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SellForm } from "@/components/sell/sell-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Sell your land or building",
  description: "Get a free valuation and a fair, fast offer for your land or building anywhere in Ghana.",
};

const why = [
  { icon: Scale, t: "Fair, evidence-based valuation", b: "We benchmark against recent sales in your area, and we show you the comparables." },
  { icon: ClipboardCheck, t: "We handle the paperwork", b: "Missing documents? Our legal team helps regularise title as part of the sale." },
  { icon: Banknote, t: "Payment on the agreed date", b: "Documented bank transfer, no instalments unless you want them." },
  { icon: Handshake, t: "Offer within 7 working days", b: "From first message to written offer in a week for most properties." },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell to us"
        title={<>Sell your land or building, <span className="italic text-gold-400">without the stress.</span></>}
        body="Tell us about your property in four quick steps. We'll value it for free, verify the documents and make you a fair offer."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
        compact
      />
      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow text-gold-600">Why sell to Estates Trust</p>
              <h2 className="serif-display mt-4 text-4xl text-forest-950">A buyer you can actually rely on.</h2>
              <div className="mt-10 space-y-8">
                {why.map((w, i) => (
                  <Reveal key={w.t} delay={i * 0.06} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400"><w.icon className="size-5" /></span>
                    <div>
                      <h3 className="font-semibold text-forest-950">{w.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{w.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1}>
              <SellForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
