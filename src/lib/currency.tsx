"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Currency = "GHS" | "USD" | "GBP" | "EUR";

// Indicative mid-market rates (GHS per unit). Replace with a live feed in production.
const RATES: Record<Currency, number> = { GHS: 1, USD: 12.4, GBP: 15.9, EUR: 13.6 };
const SYMBOL: Record<Currency, string> = { GHS: "GH₵", USD: "$", GBP: "£", EUR: "€" };

type Ctx = { currency: Currency; setCurrency: (c: Currency) => void };
const CurrencyContext = createContext<Ctx>({ currency: "GHS", setCurrency: () => {} });

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("GHS");
  // Restore the saved preference after mount (localStorage isn't available during SSR).
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem("et-currency") as Currency | null;
        if (saved && RATES[saved]) setCurrency(saved);
      } catch {}
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const set = (c: Currency) => {
    setCurrency(c);
    try { localStorage.setItem("et-currency", c); } catch {}
  };
  return <CurrencyContext.Provider value={{ currency, setCurrency: set }}>{children}</CurrencyContext.Provider>;
}

export const useCurrency = () => useContext(CurrencyContext);

export function formatPrice(ghs: number, currency: Currency, opts?: { compact?: boolean }) {
  const value = ghs / RATES[currency];
  const formatted = new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
    notation: opts?.compact ? "compact" : "standard",
  }).format(value);
  return `${SYMBOL[currency]}${formatted}`;
}

export const CURRENCIES: Currency[] = ["GHS", "USD", "GBP", "EUR"];
