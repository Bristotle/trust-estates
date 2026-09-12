import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Cta } from "@/components/home/cta";
import { Check, X } from "lucide-react";

export const metadata: Metadata = { title: "Our verification process", description: "The four-stage verification every Estates Trust property passes before it is listed, and the documents you receive." };

const stages = [
  {
    n: "Stage 1", t: "Lands Commission search",
    b: "We file an official search on the parcel and receive a report showing the registered owner, any encumbrances, court actions or overlapping claims.",
    checks: ["Registered owner matches the seller", "No pending litigation", "No existing mortgage or caveat", "Parcel boundaries match the site plan"],
    time: "5 to 10 working days",
  },
  {
    n: "Stage 2", t: "Physical site verification",
    b: "A licensed surveyor visits the land, locates the corner beacons and confirms the coordinates against the cadastral plan. We speak to adjoining owners and the local traditional authority.",
    checks: ["Beacons present and matching", "No third party in occupation", "Access road confirmed", "Neighbours and chief consulted"],
    time: "1 to 3 days",
  },
  {
    n: "Stage 3", t: "Documentation review",
    b: "Our legal team traces the chain of title: allocation note, indenture, site plan, consent from the stool or family where required, and any prior transfers.",
    checks: ["Chain of title complete", "Signatures and witnesses valid", "Stamp duty and registration status", "Seller identity verified"],
    time: "3 to 5 days",
  },
  {
    n: "Stage 4", t: "Secure purchase and registration",
    b: "Payment is made to a company account against a signed sale agreement. We prepare the indenture in your name, pay stamp duty and lodge registration at the Lands Commission.",
    checks: ["Signed agreement and receipt", "Indenture executed in your name", "Stamp duty paid", "Registration lodged and tracked"],
    time: "Registration 3 to 9 months",
  },
];

const documents = [
  { d: "Lands Commission Search Report", when: "Before payment" },
  { d: "Site Plan (cadastral)", when: "Before payment" },
  { d: "Seller's title or indenture", when: "Before payment" },
  { d: "Sale agreement and receipt", when: "At payment" },
  { d: "Indenture in your name", when: "After payment" },
  { d: "Land Title Certificate", when: "After registration" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Verification process"
        title={<>Four stages. <span className="italic text-gold-400">No shortcuts.</span></>}
        body="Land fraud in Ghana almost always comes from skipping one of these stages. We do not list a property until all four are complete, and we show you the evidence."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="space-y-6">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.04} className="grid gap-8 rounded-3xl bg-white p-8 ring-1 ring-forest-900/10 lg:grid-cols-[220px_1fr_1fr] lg:p-10">
                <div>
                  <p className="eyebrow text-gold-700">{s.n}</p>
                  <h2 className="serif-display mt-3 text-3xl text-forest-950">{s.t}</h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">Typical time</p>
                  <p className="text-sm font-medium text-forest-900">{s.time}</p>
                </div>
                <p className="leading-relaxed text-ink-muted">{s.b}</p>
                <ul className="space-y-2.5">
                  {s.checks.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-forest-950"><Check className="mt-0.5 size-4 shrink-0 text-forest-700" /> {c}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-20 text-white grain lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-gold-400">What you receive</p>
              <h2 className="serif-display mt-4 text-4xl sm:text-5xl">Every document, <span className="italic text-gold-400">in your hands.</span></h2>
              <p className="mt-5 text-white/70">You will hold copies of everything we relied on, plus the documents that make the property yours.</p>
            </Reveal>
            <Reveal delay={0.1} className="divide-y divide-white/10 rounded-3xl border border-white/10">
              {documents.map((d) => (
                <div key={d.d} className="flex items-center justify-between px-6 py-4">
                  <span className="font-medium">{d.d}</span>
                  <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-300">{d.when}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16 rounded-3xl border border-gold-400/30 bg-gold-400/5 p-8">
            <p className="eyebrow text-gold-400">Red flags we walk away from</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Seller cannot produce a site plan", "Search report shows a caveat or court case", "Beacons missing or not matching", "Payment requested in cash or to a personal account", "Pressure to pay before documents are shared", "Multiple families claiming the same parcel"].map((r) => (
                <li key={r} className="flex gap-3 text-sm text-white/80"><X className="mt-0.5 size-4 shrink-0 text-gold-400" /> {r}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Cta eyebrow="See it for yourself" title={<>Ask for the search report <span className="italic text-gold-400">on any listing.</span></>} body="Pick a property and we will send its verification pack so you can see exactly what four stages of checking looks like." />
    </>
  );
}
