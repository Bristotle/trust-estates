import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Process } from "@/components/home/process";
import { Diaspora } from "@/components/home/diaspora";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";
import { team } from "@/data/content";
import { Scale, ShieldCheck, Users, Clock, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Why trust us",
  description: "How Estates Trust verifies every property, and the team behind it.",
};

const values = [
  { icon: ShieldCheck, t: "Trusted & reliable", b: "Your trust is our greatest asset. We would rather lose a sale than list a property we can't stand behind." },
  { icon: Scale, t: "Legal security", b: "In-house conveyancing and a Lands Commission search on every listing — before it goes public." },
  { icon: Users, t: "Professional team", b: "Surveyors, lawyers and advisors who have handled hundreds of transactions across Ghana." },
  { icon: Clock, t: "Timely & efficient", b: "Clear timelines for searches, offers and registration. You always know what happens next." },
  { icon: Target, t: "Client focused", b: "Whether you're buying one plot or investing in a block, you get the same attention." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why trust us"
        title={<>Trust is earned <span className="italic text-gold-400">one title at a time.</span></>}
        body="Estates Trust was founded on a simple frustration: too many Ghanaians — at home and abroad — have lost money to land they didn't truly own. We exist to make that impossible for our clients."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05} className="rounded-2xl bg-white p-7 ring-1 ring-forest-900/10">
                <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-gold-400"><v.icon className="size-5" /></span>
                <h3 className="mt-5 text-lg font-semibold text-forest-950">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.b}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="flex flex-col justify-end rounded-2xl bg-forest-950 p-7 text-white grain relative overflow-hidden">
              <p className="serif-display relative text-3xl leading-tight">&ldquo;Your trust. Our commitment. <span className="italic text-gold-400">Your future.</span>&rdquo;</p>
              <p className="relative mt-4 text-sm text-white/60">— The promise every client receives in writing.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Process />

      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <p className="eyebrow text-gold-600">The team</p>
          <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">People you can put a face to.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.role} delay={i * 0.08} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={m.img} alt={m.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-semibold text-forest-950">{m.name}</h3>
                <p className="text-sm text-ink-muted">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Diaspora />
      <Faq />
      <Cta />
    </>
  );
}
