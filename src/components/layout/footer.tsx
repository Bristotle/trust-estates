import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { PHONE_PRIMARY, PHONE_SECONDARY, waLink } from "@/lib/utils";

const cols = [
  {
    title: "Explore",
    links: [
      { href: "/properties?type=land", label: "Lands" },
      { href: "/properties?type=building", label: "Buildings" },
      { href: "/properties?type=investment", label: "Investments" },
      { href: "/properties", label: "All properties" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "Why trust us" },
      { href: "/sell", label: "Sell to us" },
      { href: "/invest", label: "Invest with us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Buying from abroad",
    links: [
      { href: "/about#diaspora", label: "Diaspora buyers" },
      { href: "/about#process", label: "Our verification process" },
      { href: "/about#faq", label: "FAQs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-forest-950 text-white grain overflow-hidden">
      <div className="gold-rule" />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Genuine, titled lands, buildings and investment opportunities across Ghana, Africa and beyond. We verify before we sell.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-3 text-white/80 hover:text-gold-400 transition">
                <Phone className="size-4 text-gold-400" /> {PHONE_PRIMARY} <span className="text-white/40">·</span> {PHONE_SECONDARY}
              </a>
              <a href={waLink("Hello Estates Trust")} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-gold-400 transition">
                <MessageCircle className="size-4 text-gold-400" /> WhatsApp {PHONE_PRIMARY}
              </a>
              <a href="mailto:hello@estatestrust.com" className="flex items-center gap-3 text-white/80 hover:text-gold-400 transition">
                <Mail className="size-4 text-gold-400" /> hello@estatestrust.com
              </a>
              <p className="flex items-center gap-3 text-white/80">
                <MapPin className="size-4 text-gold-400" /> Accra, Ghana
              </p>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="eyebrow text-gold-400 mb-5">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/70 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="serif-display text-lg text-white/80">
            Your trust. <span className="text-gold-400 italic">Our commitment.</span> Your future.
          </p>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Estates Trust. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
