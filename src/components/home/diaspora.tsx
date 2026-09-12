import Image from "next/image";
import { Globe2, Video, FileCheck2, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";

const steps = [
  { icon: Video, t: "Live video site tours", b: "Walk the land with our team over video, on your schedule." },
  { icon: FileCheck2, t: "Documents before payment", b: "Search reports and title documents shared before a cedi moves." },
  { icon: Landmark, t: "Secure, traceable payments", b: "Documented bank channels — never cash to an individual." },
  { icon: Globe2, t: "Registration in your name", b: "We complete registration under power of attorney and courier your certificate." },
];

export function Diaspora() {
  return (
    <section id="diaspora" className="relative overflow-hidden bg-forest-950 py-24 text-white grain lg:py-32">
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=80"
                alt="Client reviewing property documents remotely"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/15 bg-forest-900/90 p-5 backdrop-blur-xl sm:right-8">
              <p className="eyebrow text-gold-400">Clients in</p>
              <p className="serif-display mt-1 text-2xl">🇬🇧 🇺🇸 🇨🇦 🇩🇪 🇳🇱 🇮🇹</p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Buying from abroad"
              title={<>Own property in Ghana <span className="italic text-gold-400">without the risk.</span></>}
              body="Over half our clients live outside Ghana. We built our process around one question: how would you buy safely if you couldn't be here?"
              light
            />
            <div className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.06} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold-400/40 text-gold-400">
                    <s.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.t}</h3>
                    <p className="mt-1 text-sm text-white/60">{s.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
              <Button href={waLink("Hello Estates Trust, I live abroad and would like to buy property in Ghana. How does the process work?")} variant="gold">
                Book a diaspora consultation
              </Button>
              <Button href="/about#faq" variant="outlineLight">Read the FAQs</Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
