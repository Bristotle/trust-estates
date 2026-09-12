"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { stats } from "@/data/content";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";

function Counter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {display && inView ? display : n.toLocaleString()}
      {!display && suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-px bg-forest-950 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-forest-950 px-6 py-10 lg:px-10">
              <p className="serif-display text-5xl text-gold-400 lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} display={s.display} />
              </p>
              <p className="mt-3 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
      <Marquee
        className="mt-10 border-y border-white/10"
        items={["Registered titles", "Lands Commission searches", "Physical site verification", "Diaspora purchases", "Flexible payment plans", "Managed investments", "Ghana · Africa · Beyond"]}
      />
    </section>
  );
}
