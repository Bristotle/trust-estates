import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { regionsServed } from "@/data/content";

export function Regions() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 text-white grain lg:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[600px] rounded-full bg-gold-400/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Where we operate"
          title={<>Across Ghana, Africa <span className="italic text-gold-400">and beyond.</span></>}
          body="Headquartered in Accra with active portfolios in four regions, and a growing network of partners across West and East Africa."
          light
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regionsServed.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <SpotlightCard className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold-400/50 hover:bg-white/8">
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-gold-400/15 text-gold-400">
                    <MapPin className="size-4" />
                  </span>
                  {r.count > 0 ? (
                    <span className="rounded-full bg-gold-400 px-2.5 py-0.5 text-[11px] font-bold text-forest-950">
                      {r.count} active
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white/60">Coming soon</span>
                  )}
                </div>
                <div className="mt-8">
                  <h3 className="serif-display text-2xl">{r.name}</h3>
                  <p className="mt-2 text-sm text-white/55">{r.areas}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
