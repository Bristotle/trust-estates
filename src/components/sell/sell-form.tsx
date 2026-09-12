"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, cn } from "@/lib/utils";

const steps = ["Property", "Location", "Documents", "Contact"];

type Data = {
  type: string; size: string; region: string; area: string; docs: string[]; expectation: string;
  name: string; phone: string; email: string;
};

const DOCS = ["Land Title Certificate", "Indenture", "Site Plan", "Allocation Note", "Building Permit", "None yet"];

export function SellForm() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Data>({ type: "Land", size: "", region: "Greater Accra", area: "", docs: [], expectation: "", name: "", phone: "", email: "" });
  const [done, setDone] = useState(false);
  const set = (k: keyof Data, v: string | string[]) => setD((x) => ({ ...x, [k]: v }));

  const canNext = [
    !!d.type && !!d.size,
    !!d.region && !!d.area,
    d.docs.length > 0,
    !!d.name && !!d.phone,
  ][step];

  const message = `Hello Estates Trust, I'd like to sell my property.\n\nType: ${d.type}\nSize: ${d.size}\nLocation: ${d.area}, ${d.region}\nDocuments: ${d.docs.join(", ")}\nExpected price: ${d.expectation || "Open to valuation"}\n\nName: ${d.name}\nPhone: ${d.phone}${d.email ? `\nEmail: ${d.email}` : ""}`;

  const input = "h-12 w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 text-sm focus:border-forest-900 focus:outline-none";
  const chip = (active: boolean) =>
    cn("rounded-full border px-4 py-2 text-sm font-medium transition", active ? "border-forest-900 bg-forest-900 text-white" : "border-forest-900/15 text-forest-900 hover:border-forest-900/40");

  if (done)
    return (
      <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-forest-900/10">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-forest-900 text-gold-400"><Check className="size-6" /></span>
        <h3 className="serif-display mt-6 text-3xl text-forest-950">Thank you, {d.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-muted">Your details are ready to send. Tap below to open WhatsApp with everything pre-filled — an advisor will confirm a free valuation within 7 working days.</p>
        <Button href={waLink(message)} variant="whatsapp" size="lg" className="mt-8"><MessageCircle className="size-4" /> Send via WhatsApp</Button>
      </div>
    );

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-forest-900/10 sm:p-10">
      <ol className="flex items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2">
            <span className={cn("grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition", i < step ? "bg-forest-900 text-gold-400" : i === step ? "bg-gold-400 text-forest-950" : "bg-cream-200 text-ink-muted")}>
              {i < step ? <Check className="size-3.5" /> : i + 1}
            </span>
            <span className={cn("hidden text-xs font-medium sm:block", i === step ? "text-forest-950" : "text-ink-muted")}>{s}</span>
            {i < steps.length - 1 && <span className={cn("h-px flex-1", i < step ? "bg-forest-900" : "bg-forest-900/10")} />}
          </li>
        ))}
      </ol>

      <div className="mt-10 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-forest-950">What are you selling?</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Land", "House", "Apartment block", "Commercial building", "Uncompleted building"].map((t) => (
                      <button key={t} onClick={() => set("type", t)} className={chip(d.type === t)}>{t}</button>
                    ))}
                  </div>
                </div>
                <label className="block">
                  <span className="font-semibold text-forest-950">Size</span>
                  <input value={d.size} onChange={(e) => set("size", e.target.value)} placeholder="e.g. 2 plots (70×100), 1.5 acres, 4-bedroom" className={cn(input, "mt-3")} />
                </label>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-forest-950">Region</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Greater Accra", "Ashanti", "Central", "Eastern", "Western", "Other"].map((r) => (
                      <button key={r} onClick={() => set("region", r)} className={chip(d.region === r)}>{r}</button>
                    ))}
                  </div>
                </div>
                <label className="block">
                  <span className="font-semibold text-forest-950">Town / area</span>
                  <input value={d.area} onChange={(e) => set("area", e.target.value)} placeholder="e.g. Oyarifa, near the Adenta–Dodowa road" className={cn(input, "mt-3")} />
                </label>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-forest-950">Which documents do you have?</p>
                  <p className="mt-1 text-sm text-ink-muted">Don&apos;t worry if it&apos;s incomplete — we can help you regularise.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DOCS.map((doc) => {
                      const on = d.docs.includes(doc);
                      return (
                        <button key={doc} onClick={() => set("docs", on ? d.docs.filter((x) => x !== doc) : [...d.docs.filter((x) => x !== "None yet"), doc])} className={chip(on)}>
                          {doc}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <label className="block">
                  <span className="font-semibold text-forest-950">Price expectation <span className="font-normal text-ink-muted">(optional)</span></span>
                  <input value={d.expectation} onChange={(e) => set("expectation", e.target.value)} placeholder="e.g. GH₵400,000 or open to valuation" className={cn(input, "mt-3")} />
                </label>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2"><span className="font-semibold text-forest-950">Full name</span><input value={d.name} onChange={(e) => set("name", e.target.value)} className={cn(input, "mt-2")} /></label>
                <label className="block"><span className="font-semibold text-forest-950">Phone / WhatsApp</span><input value={d.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+233…" className={cn(input, "mt-2")} /></label>
                <label className="block"><span className="font-semibold text-forest-950">Email <span className="font-normal text-ink-muted">(optional)</span></span><input value={d.email} onChange={(e) => set("email", e.target.value)} className={cn(input, "mt-2")} /></label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-forest-900/10 pt-6">
        <button onClick={() => setStep((s) => s - 1)} disabled={step === 0} className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-forest-900 disabled:opacity-30">
          <ArrowLeft className="size-4" /> Back
        </button>
        {step < steps.length - 1 ? (
          <Button onClick={() => setStep((s) => s + 1)} disabled={!canNext} variant="forest">Continue <ArrowRight className="size-4" /></Button>
        ) : (
          <Button onClick={() => setDone(true)} disabled={!canNext} variant="gold">Get my free valuation <ArrowRight className="size-4" /></Button>
        )}
      </div>
    </div>
  );
}
