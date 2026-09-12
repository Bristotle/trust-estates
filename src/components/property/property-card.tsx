"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, MapPin, Ruler } from "lucide-react";
import { motion } from "motion/react";
import { type Property, typeLabel } from "@/data/properties";
import { formatPrice, useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function PropertyCard({ p, className, index = 0 }: { p: Property; className?: string; index?: number }) {
  const { currency } = useCurrency();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-forest-900/8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(11,59,44,0.35)]", className)}
    >
      <Link href={`/properties/${p.slug}`} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.images[0]}
          alt={p.title}
          fill
          quality={65}
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {p.images[1] && (
          <Image
            src={p.images[1]}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
            className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wide text-forest-900">
            {typeLabel[p.type]}
          </span>
          {p.titleStatus === "Registered Title" && (
            <span className="flex items-center gap-1 rounded-full bg-forest-900/90 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-300">
              <BadgeCheck className="size-3.5" /> Titled
            </span>
          )}
        </div>
        {p.roi && (
          <span className="absolute right-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold text-forest-950">
            {p.roi}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <p className="text-xl font-bold tracking-tight">
              {formatPrice(p.priceGhs, currency)}
              {p.pricePer && <span className="ml-1 text-xs font-medium text-white/70">{p.pricePer}</span>}
            </p>
          </div>
          <span className="grid size-9 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-gold-400 group-hover:text-forest-950">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold text-forest-950 leading-snug">
          <Link href={`/properties/${p.slug}`}>{p.title}</Link>
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin className="size-3.5 text-gold-600" /> {p.location}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-forest-900/8 pt-4 text-[13px] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Ruler className="size-3.5" /> {p.size}
          </span>
          <span className="text-forest-800 font-medium">{p.titleStatus}</span>
        </div>
      </div>
    </motion.article>
  );
}
