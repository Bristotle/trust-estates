import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Cta } from "@/components/home/cta";
import { team, milestones } from "@/data/content";
import { Briefcase, Scale, Compass, Handshake, BarChart3, Globe2, ShieldCheck, Users, Clock, Target } from "lucide-react";

export const metadata: Metadata = { title: "Why trust us", description: "The story, values and team behind Estates Trust, and the promise we make to every client." };

const icons = { briefcase: Briefcase, scale: Scale, compass: Compass, handshake: Handshake, chart: BarChart3, globe: Globe2 };

const values = [
  { icon: ShieldCheck, t: "Trusted and reliable", b: "Your trust is our greatest asset. We would rather lose a sale than list a property we cannot stand behind." },
  { icon: Scale, t: "Legal security", b: "In-house conveyancing and a Lands Commission search on every listing, before it goes public." },
  { icon: Users, t: "Professional team", b: "Surveyors, lawyers and advisors who have handled hundreds of transactions across Ghana." },
  { icon: Clock, t: "Timely and efficient", b: "Clear timelines for searches, offers and registration. You always know what happens next." },
  { icon: Target, t: "Client focused", b: "Whether you are buying one plot or investing in a block, you get the same attention." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why trust us"
        title={<>Trust is earned <span className="italic text-gold-400">one title at a time.</span></>}
        body="Estates Trust was founded on a simple frustration: too many Ghanaians, at home and abroad, have lost money to land they did not truly own. We exist to make that impossible for our clients."
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
            <Reveal delay={0.3} className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-forest-950 p-7 text-white grain">
              <p className="serif-display relative text-3xl leading-tight">&ldquo;Your trust. Our commitment. <span className="italic text-gold-400">Your future.</span>&rdquo;</p>
              <p className="relative mt-4 text-sm text-white/60">The promise every client receives in writing.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-200 py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-600">Our story</p>
            <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">Built on one principle, <span className="italic text-forest-700">kept on every deal.</span></h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-900/10 md:grid-cols-5">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06} className="bg-cream-100 p-7">
                <p className="eyebrow text-gold-600">{m.year}</p>
                <h3 className="mt-4 text-lg font-semibold text-forest-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-20 text-white grain lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-400">The team</p>
            <h2 className="serif-display mt-4 text-4xl sm:text-5xl">Six desks, <span className="italic text-gold-400">one standard.</span></h2>
            <p className="mt-5 text-white/70">Every transaction passes through legal, surveying and client relations. Nobody signs off alone.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => {
              const Icon = icons[m.icon as keyof typeof icons];
              return (
                <Reveal key={m.name} delay={i * 0.05} className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-gold-400/50">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-400 transition group-hover:bg-gold-400 group-hover:text-forest-950"><Icon className="size-6" /></span>
                  <h3 className="mt-6 text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm text-gold-300">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{m.body}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Cta eyebrow="Work with us" title={<>Meet the team behind <span className="italic text-gold-400">the promise.</span></>} body="Book a call or visit our Accra office by appointment. We will show you a completed verification pack so you can judge our standard for yourself." />
    </>
  );
}
