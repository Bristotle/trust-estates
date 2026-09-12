import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { Reveal } from "@/components/ui/reveal";
import { PropertyCard } from "@/components/property/property-card";
import { properties } from "@/data/properties";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Invest with us",
  description: "Asset-backed property investments in Ghana with contracted returns, managed end-to-end.",
};

const products = [
  { name: "Rental income", rate: "12 – 18% p.a.", min: "GH₵250,000", term: "Open-ended", body: "Co-own tenanted apartments and short-lets. Quarterly payouts from rent, fully managed." },
  { name: "Land banking", rate: "18 – 25% p.a.", min: "GH₵50,000", term: "2 – 5 years", body: "Buy into serviced plots in growth corridors before infrastructure lands. Exit via resale or build." },
  { name: "Development JV", rate: "25 – 35% per cycle", min: "GH₵500,000", term: "12 – 24 months", body: "Fund build-and-sell projects with Estates Trust as developer. Profit share on completion." },
];

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Invest with us"
        title={<>Property returns, <span className="italic text-gold-400">managed for you.</span></>}
        body="Asset-backed, contract-secured investment products for individuals in Ghana and the diaspora. From GH₵50,000."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
      />
      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow text-gold-600">Investment products</p>
              <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">Three ways to grow.</h2>
              <div className="mt-10 space-y-4">
                {products.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.06} className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10 transition hover:ring-gold-500/60">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="serif-display text-2xl text-forest-950">{p.name}</h3>
                      <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-forest-950">{p.rate}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                    <dl className="mt-4 flex gap-8 text-sm">
                      <div><dt className="text-[11px] uppercase tracking-wider text-ink-muted">Minimum</dt><dd className="font-semibold text-forest-950">{p.min}</dd></div>
                      <div><dt className="text-[11px] uppercase tracking-wider text-ink-muted">Term</dt><dd className="font-semibold text-forest-950">{p.term}</dd></div>
                    </dl>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15}><RoiCalculator /></Reveal>
          </div>
        </Container>
      </section>
      <section className="bg-cream-200 py-20">
        <Container>
          <p className="eyebrow text-gold-600">Open now</p>
          <h2 className="serif-display mt-3 text-4xl text-forest-950">Current investment opportunities</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.filter((p) => p.type === "investment").map((p, i) => <PropertyCard key={p.slug} p={p} index={i} />)}
          </div>
        </Container>
      </section>
      <Faq />
      <Cta />
    </>
  );
}
