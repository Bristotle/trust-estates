"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BadgeCheck, MapPin, Ruler, Video } from "lucide-react";
import { properties } from "@/data/properties";
import { formatPrice, useCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";

export function Flagship() {
  const p = properties.find((x) => x.slug === "east-legon-executive-villa")!;
  const { currency } = useCurrency();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-[90vh] overflow-hidden bg-forest-950 text-white">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image src={p.images[0]} alt={p.title} fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/70 to-forest-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/40" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-5 py-20 sm:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-gold-400">
            <span className="h-px w-8 bg-gold-400" /> Property of the month
          </p>
          <h2 className="serif-display mt-5 text-5xl sm:text-6xl lg:text-7xl">{p.title}</h2>
          <p className="mt-5 max-w-xl text-white/75">{p.summary}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2"><MapPin className="size-4 text-gold-400" /> {p.location}</span>
            <span className="flex items-center gap-2"><Ruler className="size-4 text-gold-400" /> {p.size}</span>
            <span className="flex items-center gap-2"><BadgeCheck className="size-4 text-gold-400" /> {p.titleStatus}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Asking price</p>
              <p className="serif-display mt-1 text-4xl text-gold-400 sm:text-5xl">{formatPrice(p.priceGhs, currency)}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`/properties/${p.slug}`} variant="gold">View property <ArrowRight className="size-4" /></Button>
              <Button href={waLink(`Hello Estates Trust, I'd like a video tour of ${p.title}.`)} variant="outlineLight"><Video className="size-4" /> Request video tour</Button>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {p.highlights.map((h) => (
            <div key={h} className="bg-forest-950/70 px-4 py-4 text-xs text-white/75 backdrop-blur">{h}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
