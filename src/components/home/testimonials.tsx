"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Client stories"
              title={<>Trusted from Accra <span className="italic text-forest-700">to London.</span></>}
              body="Families, investors and land owners who chose transparency over risk."
            />
            <div className="mt-10 flex gap-3">
              <button onClick={() => go(-1)} className="grid size-12 place-items-center rounded-full border border-forest-900/20 text-forest-900 transition hover:bg-forest-900 hover:text-white" aria-label="Previous">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={() => go(1)} className="grid size-12 place-items-center rounded-full border border-forest-900/20 text-forest-900 transition hover:bg-forest-900 hover:text-white" aria-label="Next">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px] rounded-3xl bg-forest-950 p-8 text-white grain overflow-hidden lg:p-12">
            <Quote className="absolute right-8 top-8 size-16 text-gold-400/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col justify-between"
              >
                <p className="serif-display text-2xl leading-snug sm:text-3xl lg:text-[2.1rem]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-10 flex items-center gap-4">
                  <Image src={t.avatar} alt={t.name} width={52} height={52} className="size-13 rounded-full object-cover ring-2 ring-gold-400/60" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-white/60">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-8 right-8 flex gap-1.5">
              {testimonials.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-gold-400" : "w-1.5 bg-white/30"}`} aria-label={`Go to ${k + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
