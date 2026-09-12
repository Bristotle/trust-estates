"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn, waLink } from "@/lib/utils";
import { CURRENCIES, useCurrency } from "@/lib/currency";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/sell", label: "Sell to us" },
  { href: "/invest", label: "Invest" },
  { href: "/about", label: "Why trust us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();
  const onDark = pathname === "/" || pathname === "/invest" || pathname === "/about";
  const solid = scrolled || open || !onDark;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-cream-100/85 backdrop-blur-xl border-b border-forest-900/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light={!solid} />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-[13.5px] font-medium tracking-wide transition-colors",
                solid ? "text-forest-900/80 hover:text-forest-900" : "text-white/80 hover:text-white",
                pathname.startsWith(l.href) && (solid ? "text-forest-900" : "text-white"),
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <label className={cn("relative text-[12px] font-semibold", solid ? "text-forest-900" : "text-white")}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as typeof currency)}
              className="appearance-none bg-transparent pr-5 pl-2 py-1 cursor-pointer focus:outline-none"
              aria-label="Currency"
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c} className="text-forest-900">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 size-3.5 opacity-70" />
          </label>
          <Button href={waLink("Hello Estates Trust, I'd like to enquire about your properties.")} variant={solid ? "outline" : "outlineLight"} size="sm">
            <MessageCircle className="size-4" /> WhatsApp
          </Button>
          <Button href="/properties" variant="gold" size="sm">
            Explore properties
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn("lg:hidden p-2 -mr-2", solid ? "text-forest-900" : "text-white")}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-forest-900/10 bg-cream-100"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="py-3 text-lg font-medium text-forest-900 border-b border-forest-900/8">
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-forest-900">
                Currency
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as typeof currency)}
                  className="rounded-full border border-forest-900/20 bg-transparent px-3 py-1.5"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Button href="/properties" variant="gold">Explore properties</Button>
                <Button href={waLink("Hello Estates Trust, I'd like to enquire about your properties.")} variant="whatsapp">
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
