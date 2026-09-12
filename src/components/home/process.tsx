import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/data/content";
import { Button } from "@/components/ui/button";

export function Process() {
  return (
    <section id="process" className="bg-cream-200 py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How we protect you"
              title={<>Nothing is listed until it is <span className="italic text-forest-700">verified.</span></>}
              body="Land disputes are the biggest fear for anyone buying property in Ghana. Our four-step verification is why our clients have never faced litigation on land bought through us."
            />
            <div className="mt-12 space-y-0">
              {process.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08} className="group flex gap-6 border-t border-forest-900/10 py-7 last:border-b">
                  <span className="serif-display text-3xl text-gold-500">{s.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-950">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/about" variant="forest">Read our full process</Button>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="sticky top-28 overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                  alt="Signing a property agreement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="eyebrow text-gold-400">Documents you receive</p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {["Land Title Certificate", "Site plan", "Indenture", "Search report", "Receipt & agreement", "Registration in your name"].map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-gold-400" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
