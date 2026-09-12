"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-forest-900">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={i} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
            <Image src={images[i]} alt={`${title} photo ${i + 1}`} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <span className="absolute bottom-4 right-4 rounded-full bg-forest-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {i + 1} / {images.length}
        </span>
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, k) => (
            <button key={src} onClick={() => setI(k)} aria-label={`Show photo ${k + 1}`} aria-pressed={k === i} className={cn("relative aspect-[4/3] overflow-hidden rounded-xl ring-2 ring-offset-2 ring-offset-cream-100 transition", k === i ? "ring-gold-500" : "ring-transparent opacity-70 hover:opacity-100")}>
              <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
