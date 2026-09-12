"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { formatPrice, useCurrency } from "@/lib/currency";
import { waLink } from "@/lib/utils";

const eligible = properties.filter((p) => p.type !== "investment");

export function PaymentPlan() {
  const { currency } = useCurrency();
  const [slug, setSlug] = useState(eligible[0].slug);
  const [deposit, setDeposit] = useState(30);
  const [months, setMonths] = useState(12);
  const p = eligible.find((x) => x.slug === slug)!;

  const { dep, monthly } = useMemo(() => {
    const dep = p.priceGhs * (deposit / 100);
    return { dep, monthly: (p.priceGhs - dep) / months };
  }, [p, deposit, months]);

  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Payment plans"
              title={<>Own it in <span className="italic text-forest-700">instalments.</span></>}
              body="You do not need the full amount today. Reserve with a deposit, spread the balance over up to 18 months, and receive your documents on completion."
            />
            <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
              {[["30%", "minimum deposit"], ["18", "months maximum"], ["0%", "interest on plans"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white p-5 ring-1 ring-forest-900/10">
                  <p className="serif-display text-4xl text-forest-950">{v}</p>
                  <p className="mt-1 text-sm text-ink-muted">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="rounded-3xl bg-forest-950 p-6 text-white grain lg:p-8">
            <p className="eyebrow relative text-gold-400">Plan estimator</p>
            <label className="relative mt-5 block">
              <span className="text-sm font-medium">Property</span>
              <select value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white focus:outline-none [&>option]:text-forest-900">
                {eligible.map((x) => <option key={x.slug} value={x.slug}>{x.title}</option>)}
              </select>
            </label>
            <label className="relative mt-5 block">
              <div className="flex justify-between text-sm"><span className="font-medium">Deposit</span><span className="font-semibold text-gold-300">{deposit}% · {formatPrice(dep, currency)}</span></div>
              <input type="range" min={30} max={80} step={5} value={deposit} onChange={(e) => setDeposit(+e.target.value)} className="mt-3 w-full accent-gold-400" />
            </label>
            <label className="relative mt-5 block">
              <div className="flex justify-between text-sm"><span className="font-medium">Spread over</span><span className="font-semibold text-gold-300">{months} months</span></div>
              <input type="range" min={3} max={18} step={3} value={months} onChange={(e) => setMonths(+e.target.value)} className="mt-3 w-full accent-gold-400" />
            </label>

            <div className="relative mt-7 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-5">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gold-300"><CalendarClock className="size-3.5" /> Monthly instalment</p>
              <p className="serif-display mt-1 text-5xl text-white">{formatPrice(monthly, currency)}</p>
              <p className="mt-2 text-xs text-white/60">Total {formatPrice(p.priceGhs, currency)}{p.pricePer ? ` ${p.pricePer}` : ""}. Illustrative; final plan confirmed in your agreement.</p>
            </div>
            <Button href={waLink(`Hello Estates Trust, I'd like a payment plan for ${p.title}: ${deposit}% deposit over ${months} months.`)} variant="gold" className="relative mt-5 w-full">
              Request this plan <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
