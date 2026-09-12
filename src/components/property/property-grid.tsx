"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { properties, regions, type PropertyType } from "@/data/properties";
import { PropertyCard } from "./property-card";
import { cn } from "@/lib/utils";

const TYPES: { v: PropertyType | ""; l: string }[] = [
  { v: "", l: "All" },
  { v: "land", l: "Lands" },
  { v: "building", l: "Buildings" },
  { v: "investment", l: "Investments" },
];

const BUDGETS = [
  { l: "Any budget", min: 0, max: Infinity },
  { l: "Under GH₵250k", min: 0, max: 250000 },
  { l: "GH₵250k to 1M", min: 250000, max: 1000000 },
  { l: "GH₵1M to 3M", min: 1000000, max: 3000000 },
  { l: "GH₵3M+", min: 3000000, max: Infinity },
];

const SORTS = [
  { v: "featured", l: "Featured" },
  { v: "price-asc", l: "Price: low to high" },
  { v: "price-desc", l: "Price: high to low" },
];

export function PropertyGrid({ fixedType }: { fixedType?: PropertyType } = {}) {
  const params = useSearchParams();
  const router = useRouter();
  const [type, setType] = useState<PropertyType | "">(fixedType || (params.get("type") as PropertyType) || "");
  const [region, setRegion] = useState(params.get("region") || "");
  const [budget, setBudget] = useState(BUDGETS.find((b) => b.l === params.get("budget"))?.l || BUDGETS[0].l);
  const [titled, setTitled] = useState(false);
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    const b = BUDGETS.find((x) => x.l === budget) ?? BUDGETS[0];
    let r = properties.filter(
      (p) =>
        (!type || p.type === type) &&
        (!region || p.region === region) &&
        p.priceGhs >= b.min && p.priceGhs < b.max &&
        (!titled || p.titleStatus === "Registered Title"),
    );
    if (sort === "price-asc") r = [...r].sort((a, b) => a.priceGhs - b.priceGhs);
    if (sort === "price-desc") r = [...r].sort((a, b) => b.priceGhs - a.priceGhs);
    if (sort === "featured") r = [...r].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return r;
  }, [type, region, budget, titled, sort]);

  const reset = () => {
    setType(fixedType || ""); setRegion(""); setBudget(BUDGETS[0].l); setTitled(false); setSort("featured");
    if (!fixedType) router.replace("/properties");
  };
  const active = (!fixedType && type) || region || budget !== BUDGETS[0].l || titled;

  return (
    <div>
      <div className="sticky top-[72px] z-30 -mx-5 border-b border-forest-900/10 bg-cream-100/90 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          {!fixedType && (
          <div className="flex rounded-full border border-forest-900/15 bg-white p-1">
            {TYPES.map((t) => (
              <button
                key={t.v}
                onClick={() => setType(t.v)}
                className={cn("rounded-full px-4 py-1.5 text-[13px] font-medium transition", type === t.v ? "bg-forest-900 text-white" : "text-forest-900/70 hover:text-forest-900")}
              >
                {t.l}
              </button>
            ))}
          </div>
          )}
          <select aria-label="Region" value={region} onChange={(e) => setRegion(e.target.value)} className="h-10 rounded-full border border-forest-900/15 bg-white px-4 text-[13px] font-medium text-forest-900">
            <option value="">All regions</option>
            {regions.map((r) => <option key={r}>{r}</option>)}
          </select>
          <select aria-label="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} className="h-10 rounded-full border border-forest-900/15 bg-white px-4 text-[13px] font-medium text-forest-900">
            {BUDGETS.map((b) => <option key={b.l}>{b.l}</option>)}
          </select>
          <label className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-forest-900/15 bg-white px-4 text-[13px] font-medium text-forest-900">
            <input type="checkbox" checked={titled} onChange={(e) => setTitled(e.target.checked)} className="accent-forest-900" /> Registered title only
          </label>
          <div className="ml-auto flex items-center gap-3">
            {active && (
              <button onClick={reset} className="flex items-center gap-1 text-[13px] font-medium text-ink-muted hover:text-forest-900">
                <X className="size-3.5" /> Clear
              </button>
            )}
            <label className="flex items-center gap-2 text-[13px] text-ink-muted">
              <SlidersHorizontal className="size-4" />
              <select aria-label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent font-medium text-forest-900">
                {SORTS.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
              </select>
            </label>
          </div>
        </div>
      </div>

      <h2 className="sr-only">Listings</h2>
      <p className="mt-8 text-sm text-ink-muted">
        Showing <span className="font-semibold text-forest-900">{list.length}</span> {list.length === 1 ? "property" : "properties"}
      </p>

      {list.length ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <PropertyCard key={p.slug} p={p} index={i} priority={i < 3} />)}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-forest-900/20 p-16 text-center">
          <p className="serif-display text-3xl text-forest-950">Nothing matches those filters yet.</p>
          <p className="mt-3 text-ink-muted">Tell us what you&apos;re looking for and we&apos;ll source it for you.</p>
          <button onClick={reset} className="mt-6 text-sm font-semibold text-forest-900 underline underline-offset-4">Clear filters</button>
        </div>
      )}
    </div>
  );
}
