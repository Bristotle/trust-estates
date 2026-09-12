"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";

export function ContactForm() {
  const [sent, setSent] = useState<string | null>(null);
  const input = "h-12 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 text-sm focus:border-forest-900 focus:outline-none";

  if (sent)
    return (
      <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-forest-900/10">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-forest-900 text-gold-400"><Check className="size-6" /></span>
        <h3 className="serif-display mt-6 text-3xl text-forest-950">Message ready.</h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-muted">Send it straight to our advisors on WhatsApp for the fastest reply.</p>
        <Button href={waLink(sent)} variant="whatsapp" size="lg" className="mt-8"><MessageCircle className="size-4" /> Open WhatsApp</Button>
      </div>
    );

  return (
    <form
      className="rounded-3xl bg-white p-6 ring-1 ring-forest-900/10 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        setSent(`Hello Estates Trust,\n\nI'm ${f.get("name")} (${f.get("location")}).\nInterested in: ${f.get("interest")}\n\n${f.get("message")}\n\nPhone: ${f.get("phone")}`);
      }}
    >
      <h2 className="serif-display text-3xl text-forest-950">Send us a message</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="text-sm font-semibold text-forest-950">Full name</span><input name="name" required className={`${input} mt-2`} /></label>
        <label className="block"><span className="text-sm font-semibold text-forest-950">Phone / WhatsApp</span><input name="phone" required placeholder="+233…" className={`${input} mt-2`} /></label>
        <label className="block"><span className="text-sm font-semibold text-forest-950">Where are you based?</span><input name="location" placeholder="e.g. Accra, London, Toronto" className={`${input} mt-2`} /></label>
        <label className="block">
          <span className="text-sm font-semibold text-forest-950">I&apos;m interested in</span>
          <select name="interest" className={`${input} mt-2`}>
            {["Buying land", "Buying a building", "Investing", "Selling my property", "Something else"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-forest-950">Message</span>
          <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 py-3 text-sm focus:border-forest-900 focus:outline-none" placeholder="Tell us what you're looking for, your budget and timeline." />
        </label>
      </div>
      <Button type="submit" variant="gold" size="lg" className="mt-6 w-full sm:w-auto">Send message</Button>
      <p className="mt-3 text-xs text-ink-muted">We&apos;ll never share your details. Response within one working day.</p>
    </form>
  );
}
