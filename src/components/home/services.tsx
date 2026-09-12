import Image from "next/image";
import { ArrowUpRight, Building2, LandPlot, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const services = [
  {
    icon: LandPlot,
    title: "We buy lands & buildings",
    body: "Own property you want to sell? We value it fairly, verify the paperwork and pay on the agreed date. No stories.",
    href: "/sell",
    cta: "Sell to us",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Building2,
    title: "We sell lands & buildings",
    body: "Genuine, titled plots, homes and commercial property in prime locations across Ghana.",
    href: "/properties",
    cta: "Browse listings",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    icon: TrendingUp,
    title: "We accept investments",
    body: "Partner with us on income-producing property and development projects with attractive, contracted returns.",
    href: "/invest",
    cta: "Invest with us",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
];

export function Services() {
  return (
    <section className="bg-forest-950 pb-24 pt-20 text-white lg:pb-32 lg:pt-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="What we do" title={<>Buy. Sell. <span className="italic text-gold-400">Invest.</span></>} light />
          <Reveal delay={0.1} className="max-w-md text-white/60">
            Three ways to build wealth through property, all backed by the same verification standard.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={s.span}>
              <SpotlightCard className="h-full rounded-3xl">
              <Link
                href={s.href}
                className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl p-7 ring-1 ring-white/10 lg:min-h-[320px]"
              >
                <Image src={s.img} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/10" />
                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-full border border-gold-400/40 bg-forest-950/40 text-gold-400 backdrop-blur">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="serif-display mt-5 text-3xl lg:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{s.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                    {s.cta} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
