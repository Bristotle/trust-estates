"use client";

import { useState } from "react";
import { CalendarDays, MessageCircle, Phone, Video } from "lucide-react";
import { type Property } from "@/data/properties";
import { formatPrice, useCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import { PHONE_PRIMARY, waLink } from "@/lib/utils";

export function EnquiryCard({ p }: { p: Property }) {
  const { currency } = useCurrency();
  const [mode, setMode] = useState<"visit" | "video">("visit");
  const ref = p.slug.toUpperCase().slice(0, 6);
  return (
    <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgba(6,34,26,0.4)] ring-1 ring-forest-900/10">
      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Asking price</p>
      <p className="serif-display mt-1 text-4xl text-forest-950">
        {formatPrice(p.priceGhs, currency)}
        {p.pricePer && <span className="ml-2 font-sans text-sm text-ink-muted">{p.pricePer}</span>}
      </p>
      <p className="mt-1 text-xs text-ink-muted">≈ {formatPrice(p.priceGhs, currency === "GHS" ? "USD" : "GHS")} · Ref ET-{ref}</p>

      <div className="mt-6 flex rounded-full bg-cream-200 p-1">
        {[
          { k: "visit", l: "Site visit", i: CalendarDays },
          { k: "video", l: "Video tour", i: Video },
        ].map((m) => (
          <button key={m.k} onClick={() => setMode(m.k as typeof mode)} className={`flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-[13px] font-medium transition ${mode === m.k ? "bg-forest-900 text-white" : "text-forest-900/70"}`}>
            <m.i className="size-3.5" /> {m.l}
          </button>
        ))}
      </div>

      <form
        className="mt-4 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const msg = `Hello Estates Trust, I'm ${fd.get("name")} and I'd like to book a ${mode === "visit" ? "site visit" : "video tour"} for "${p.title}" (Ref ET-${ref}) on ${fd.get("date") || "a convenient date"}.`;
          window.open(waLink(msg), "_blank");
        }}
      >
        <input name="name" required placeholder="Your name" aria-label="Your name" className="h-11 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 text-sm focus:border-forest-900 focus:outline-none" />
        <input name="date" type="date" aria-label="Preferred date" className="h-11 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 text-sm text-forest-900 focus:border-forest-900 focus:outline-none" />
        <Button type="submit" variant="gold" className="w-full">
          {mode === "visit" ? "Book a site visit" : "Book a video tour"}
        </Button>
      </form>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <Button href={waLink(`Hello Estates Trust, is "${p.title}" (Ref ET-${ref}) still available?`)} variant="whatsapp" size="sm">
          <MessageCircle className="size-4" /> WhatsApp
        </Button>
        <Button href={`tel:${PHONE_PRIMARY}`} variant="outline" size="sm">
          <Phone className="size-4" /> Call
        </Button>
      </div>
      <p className="mt-4 text-center text-[11px] text-ink-muted">Advisor responds within one working day · No obligation</p>
    </div>
  );
}
