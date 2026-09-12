"use client";

import { useMemo, useState } from "react";
import { formatPrice, useCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const PLANS = [
  { key: "rental", label: "Rental income", rate: 0.14, desc: "Tenanted apartments & short-lets" },
  { key: "land", label: "Land banking", rate: 0.22, desc: "Appreciating plots in growth corridors" },
  { key: "dev", label: "Development JV", rate: 0.3, desc: "Joint-venture build & sell projects" },
];

export function RoiCalculator({ compact = false }: { compact?: boolean }) {
  const { currency } = useCurrency();
  const [amount, setAmount] = useState(250000);
  const [years, setYears] = useState(3);
  const [plan, setPlan] = useState(PLANS[1]);

  const { total, gain } = useMemo(() => {
    const t = amount * Math.pow(1 + plan.rate, years);
    return { total: t, gain: t - amount };
  }, [amount, years, plan]);

  return (
    <div className={`rounded-3xl bg-white p-6 text-forest-950 shadow-[0_30px_80px_-30px_rgba(6,34,26,0.5)] ring-1 ring-forest-900/10 ${compact ? "" : "lg:p-8"}`}>
      <p className="eyebrow text-gold-600">Return estimator</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {PLANS.map((p) => (
          <button
            key={p.key}
            onClick={() => setPlan(p)}
            className={`rounded-xl border px-3 py-2.5 text-left transition ${plan.key === p.key ? "border-forest-900 bg-forest-900 text-white" : "border-forest-900/15 hover:border-forest-900/40"}`}
          >
            <span className="block text-[12px] font-semibold leading-tight">{p.label}</span>
            <span className={`block text-[11px] ${plan.key === p.key ? "text-gold-300" : "text-ink-muted"}`}>~{Math.round(p.rate * 100)}% p.a.</span>
          </button>
        ))}
      </div>

      <label className="mt-7 block">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Investment amount</span>
          <span className="font-semibold">{formatPrice(amount, currency)}</span>
        </div>
        <input
          type="range" min={50000} max={5000000} step={10000} value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          className="mt-3 w-full accent-gold-500"
        />
      </label>
      <label className="mt-5 block">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Holding period</span>
          <span className="font-semibold">{years} {years === 1 ? "year" : "years"}</span>
        </div>
        <input type="range" min={1} max={10} value={years} onChange={(e) => setYears(+e.target.value)} className="mt-3 w-full accent-gold-500" />
      </label>

      <div className="mt-7 grid grid-cols-2 gap-3 rounded-2xl bg-cream-100 p-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Projected value</p>
          <p className="serif-display mt-1 text-3xl text-forest-950">{formatPrice(total, currency, { compact: true })}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Estimated gain</p>
          <p className="serif-display mt-1 text-3xl text-forest-700">+{formatPrice(gain, currency, { compact: true })}</p>
        </div>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-ink-muted">
        Illustrative only, based on historical performance of comparable {plan.desc.toLowerCase()}. Not a guarantee of returns. Actual terms are set out in your investment agreement.
      </p>
      <Button
        href={waLink(`Hello Estates Trust, I'm interested in investing ${formatPrice(amount, currency)} in ${plan.label.toLowerCase()} over ${years} years. Please send me the details.`)}
        variant="forest"
        className="mt-5 w-full"
      >
        Request investment details <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
