"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { marketInsights } from "@/data/content";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";

const sorted = [...marketInsights].sort((a, b) => b.growth - a.growth);
const max = sorted[0].growth;

export function MarketInsights() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="bg-forest-950 py-24 text-white grain lg:py-32">
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Market insight"
              title={<>Where prices are <span className="italic text-gold-400">moving.</span></>}
              body="Three-year movement in serviced residential plot prices across the corridors we operate in. We share this data so you buy where growth is, not where the billboards are."
              light
            />
            <Reveal delay={0.1} className="mt-10 space-y-4">
              {marketInsights.slice(0, 3).map((m) => (
                <div key={m.area} className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-semibold">{m.area}</p>
                    <p className="text-xs text-white/55">{m.note}</p>
                  </div>
                  <p className="text-sm text-white/70">from <span className="font-semibold text-white">{m.price}</span></p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Button href={waLink("Hello Estates Trust, please send me the latest market report.")} variant="gold">Get the full market report</Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="self-start rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm font-semibold"><TrendingUp className="size-4 text-gold-400" /> Plot price growth, 3 years</p>
              <p className="text-xs text-white/50">Indicative, percent</p>
            </div>
            <ul className="mt-8 space-y-5" role="list">
              {sorted.map((m, i) => (
                <li
                  key={m.area}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative grid grid-cols-[130px_1fr_48px] items-center gap-4 sm:grid-cols-[160px_1fr_56px]"
                >
                  <span className="truncate text-sm text-white/80">{m.area}</span>
                  <div className="relative h-3 rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(m.growth / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${active === i ? "bg-gold-300" : "bg-gold-400"} transition-colors`}
                    />
                    {active === i && (
                      <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs text-forest-950 shadow-lg">
                        <span className="font-semibold">{m.area}</span> · +{m.growth}% · from {m.price}
                      </div>
                    )}
                  </div>
                  <span className="text-right text-sm font-semibold tabular-nums text-white">+{m.growth}%</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] leading-relaxed text-white/45">Source: Estates Trust transaction records and comparable sales. Past movement does not guarantee future growth. Prices are per standard 70 by 100 ft plot.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
