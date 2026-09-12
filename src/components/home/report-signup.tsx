"use client";

import { useState } from "react";
import { Check, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { waLink } from "@/lib/utils";

export function ReportSignup() {
  const [done, setDone] = useState(false);
  return (
    <section className="bg-cream-100 py-20 lg:py-24">
      <Container>
        <Reveal className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-forest-900/10 lg:grid-cols-[1.3fr_1fr] lg:p-12">
          <div>
            <p className="eyebrow flex items-center gap-2 text-gold-600"><FileText className="size-4" /> Quarterly market report</p>
            <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">Know the market before <span className="italic text-forest-700">you buy.</span></h2>
            <p className="mt-4 max-w-lg text-ink-muted">Plot prices by area, new road and utility projects, and the corridors we are watching. Written for buyers and investors, not for agents.</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-forest-900">
              {["Price movement by area", "Infrastructure watchlist", "Off-market opportunities"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="size-4 text-forest-700" /> {t}</li>
              ))}
            </ul>
          </div>
          {done ? (
            <div className="rounded-2xl bg-forest-950 p-8 text-center text-white">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold-400 text-forest-950"><Check className="size-5" /></span>
              <p className="serif-display mt-4 text-2xl">You are on the list.</p>
              <p className="mt-2 text-sm text-white/60">The next report lands in your inbox at the start of the quarter.</p>
            </div>
          ) : (
            <form
              className="rounded-2xl bg-cream-100 p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                window.open(waLink(`Hello Estates Trust, please add ${f.get("email")} to the quarterly market report.`), "_blank");
                setDone(true);
              }}
            >
              <label className="block text-sm font-semibold text-forest-950">Email address</label>
              <input name="email" type="email" required placeholder="you@example.com" className="mt-2 h-12 w-full rounded-xl border border-forest-900/15 bg-white px-4 text-sm focus:border-forest-900 focus:outline-none" />
              <label className="mt-4 block text-sm font-semibold text-forest-950">I am mainly interested in</label>
              <select name="interest" className="mt-2 h-12 w-full rounded-xl border border-forest-900/15 bg-white px-4 text-sm focus:outline-none">
                {["Buying land", "Buying a home", "Investing", "Selling"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <button type="submit" className="mt-5 h-12 w-full rounded-full bg-forest-900 text-sm font-semibold text-white transition hover:bg-forest-800">Send me the report</button>
              <p className="mt-3 text-center text-[11px] text-ink-muted">One email a quarter. Unsubscribe any time.</p>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
