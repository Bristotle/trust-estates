"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Container } from "@/components/ui/container";

const text =
  "Too many Ghanaians, at home and abroad, have paid for land they never truly owned. We built Estates Trust so that never happens to you. Every plot searched. Every title verified. Every promise in writing.";

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const gold = /searched\.|verified\.|writing\./.test(children);
  return (
    <motion.span style={{ opacity }} className={gold ? "italic text-gold-400" : ""}>
      {children}{" "}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <section className="relative bg-forest-950 py-28 text-white grain lg:py-40">
      <Container>
        <p className="eyebrow mb-8 text-gold-400">Why we exist</p>
        <div ref={ref}>
          <p className="serif-display max-w-5xl text-[2rem] leading-[1.15] sm:text-5xl lg:text-[3.6rem]">
            {words.map((w, i) => (
              <Word key={i} range={[i / words.length, Math.min(1, (i + 1) / words.length + 0.05)]} progress={scrollYProgress}>
                {w}
              </Word>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
