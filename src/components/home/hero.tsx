"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";
import { useRouter } from "next/navigation";

const words = ["Real estate", "you can", "trust."];

const slides = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-forest-950 text-white grain">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
            className="absolute inset-0"
          >
            <Image src={slides[slide]} alt="Premium property" fill priority={slide === 0} quality={55} sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/55 to-forest-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-6 flex items-center gap-3 text-gold-400"
        >
          <span className="h-px w-10 bg-gold-400" /> Ghana · Africa · Beyond
        </motion.p>

        <h1 className="serif-display max-w-4xl text-[3.2rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-1 pr-[0.25em] align-top">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${i === 2 ? "italic text-gold-400" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          We buy and sell genuine, titled lands and buildings, and help you grow your wealth through secure property investments. Every listing verified before it reaches you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button href="/properties" variant="gold" size="lg">
            Explore properties <ArrowRight className="size-4" />
          </Button>
          <Button href={waLink("Hello Estates Trust, I'd like to speak with an advisor.")} variant="outlineLight" size="lg">
            <MessageCircle className="size-4" /> Talk to an advisor
          </Button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const params = new URLSearchParams();
            for (const [k, v] of fd.entries()) if (v) params.set(k, String(v));
            router.push(`/properties?${params.toString()}`);
          }}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-2 rounded-2xl border border-white/15 bg-white/8 p-2 backdrop-blur-xl sm:grid-cols-[1fr_1fr_1fr_auto]"
        >
          {[
            { name: "type", label: "I'm looking for", opts: ["Any type", "land", "building", "investment"] },
            { name: "region", label: "Region", opts: ["Any region", "Greater Accra", "Ashanti", "Central", "Eastern"] },
            { name: "budget", label: "Budget", opts: ["Any budget", "Under GH₵250k", "GH₵250k to 1M", "GH₵1M to 3M", "GH₵3M+"] },
          ].map((f) => (
            <label key={f.name} className="flex flex-col rounded-xl px-4 py-2.5 hover:bg-white/8 transition">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">{f.label}</span>
              <select name={f.name} className="mt-0.5 bg-transparent text-sm font-medium text-white focus:outline-none [&>option]:text-forest-900">
                {f.opts.map((o, i) => (
                  <option key={o} value={i === 0 ? "" : o}>{o.charAt(0).toUpperCase() + o.slice(1)}</option>
                ))}
              </select>
            </label>
          ))}
          <button type="submit" className="flex h-full min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 text-sm font-semibold text-forest-950 transition hover:bg-gold-300">
            <Search className="size-4" /> Search
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-white/60"
        >
          <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-gold-400" /> Lands Commission verified</span>
          <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-gold-400" /> Zero litigation record</span>
          <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-gold-400" /> Diaspora-friendly purchase process</span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 right-8 hidden items-center gap-2 lg:flex">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className={`h-1 rounded-full transition-all duration-500 ${i === slide ? "w-8 bg-gold-400" : "w-3 bg-white/30"}`} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 lg:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="h-8 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
