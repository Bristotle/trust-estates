import type { Metadata } from "next";
import { Clock, FileCheck2, Globe2, Landmark, ScrollText, Video } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/home/cta";
import { waLink } from "@/lib/utils";

export const metadata: Metadata = { title: "Buying property in Ghana from abroad", description: "How diaspora clients in the UK, US, Canada and Europe buy verified land and homes in Ghana safely with Estates Trust." };

const steps = [
  { n: "01", icon: Video, t: "Discovery call in your time zone", b: "A 30-minute call to understand what you want: area, budget, purpose (home, rental, land banking) and timeline." },
  { n: "02", icon: FileCheck2, t: "Verified shortlist with documents", b: "We send 3 to 5 options with the Lands Commission search report, site plan and title documents for each, before any payment." },
  { n: "03", icon: Globe2, t: "Live video site tour", b: "Our surveyor walks the plot or home on a video call, shows the beacons, the access road and the neighbourhood." },
  { n: "04", icon: Landmark, t: "Documented payment", b: "Bank transfer to a company account with a signed agreement and receipt. Never cash, never to an individual." },
  { n: "05", icon: ScrollText, t: "Power of attorney and registration", b: "You sign a limited power of attorney so we can complete indenture and title registration in your name." },
  { n: "06", icon: Clock, t: "Certificate delivered", b: "Your registered documents are couriered to you, and we can manage or develop the property while you are away." },
];

const countries = [
  { flag: "🇬🇧", name: "United Kingdom" }, { flag: "🇺🇸", name: "United States" }, { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Germany" }, { flag: "🇳🇱", name: "Netherlands" }, { flag: "🇮🇹", name: "Italy" },
  { flag: "🇦🇪", name: "UAE" }, { flag: "🇿🇦", name: "South Africa" },
];

export default function DiasporaPage() {
  return (
    <>
      <PageHero
        eyebrow="Diaspora buyers"
        title={<>Buy in Ghana from anywhere, <span className="italic text-gold-400">with proof at every step.</span></>}
        body="More than half of our clients live outside Ghana. This is the exact process we use so you can buy without flying in, and without ever wiring money on trust alone."
        image="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-600">The remote purchase process</p>
            <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">Six steps, all documented.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05} className="rounded-2xl bg-white p-7 ring-1 ring-forest-900/10">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-gold-400"><s.icon className="size-5" /></span>
                  <span className="serif-display text-3xl text-gold-500">{s.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-forest-950">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-20 text-white grain lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-gold-400">Where our clients live</p>
              <h2 className="serif-display mt-4 text-4xl sm:text-5xl">Calls scheduled around <span className="italic text-gold-400">your</span> clock.</h2>
              <p className="mt-5 text-white/70">Our diaspora desk works UK, US East and West, and Central European hours. WhatsApp replies typically within the hour during those windows.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {countries.map((c) => (
                  <div key={c.name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-2xl">{c.flag}</span>
                    <p className="mt-1 text-xs text-white/70">{c.name}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="eyebrow text-gold-400">Common questions from abroad</p>
              <dl className="mt-6 space-y-6">
                {[
                  ["Do I need to travel to Ghana?", "No. Every step can be completed remotely. Many clients visit only after handover."],
                  ["What is a power of attorney?", "A limited legal authority that allows our lawyer to sign registration documents on your behalf for this transaction only."],
                  ["Can I pay in pounds or dollars?", "Yes. We invoice in GHS with the equivalent in your currency, and accept international transfers."],
                  ["Who looks after the property?", "Our management desk can secure, maintain, let or develop it while you are away."],
                ].map(([q, a]) => (
                  <div key={q}>
                    <dt className="font-semibold">{q}</dt>
                    <dd className="mt-1 text-sm text-white/65">{a}</dd>
                  </div>
                ))}
              </dl>
              <Button href={waLink("Hello Estates Trust, I live abroad and would like to book a diaspora consultation.")} variant="gold" className="mt-8 w-full">Book a diaspora consultation</Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <Cta eyebrow="Buying from abroad" title={<>Distance should not <span className="italic text-gold-400">cost you your land.</span></>} body="Book a call in your time zone. We will walk you through the process and send sample documents so you know exactly what you will receive." />
    </>
  );
}
