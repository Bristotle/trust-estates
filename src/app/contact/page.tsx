import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PHONE_PRIMARY, PHONE_SECONDARY, waLink } from "@/lib/utils";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Speak to an Estates Trust advisor by phone, WhatsApp or email." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let&apos;s <span className="italic text-gold-400">talk.</span></>} body="An advisor responds within one working day, usually much faster on WhatsApp." compact />
      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div className="space-y-5">
              {[
                { icon: MessageCircle, t: "WhatsApp", v: PHONE_PRIMARY, href: waLink("Hello Estates Trust, I'd like to speak with an advisor."), note: "Fastest response" },
                { icon: Phone, t: "Call us", v: `${PHONE_PRIMARY} · ${PHONE_SECONDARY}`, href: `tel:${PHONE_PRIMARY}`, note: "Mon to Sat, 8am to 6pm GMT" },
                { icon: Mail, t: "Email", v: "hello@estatestrust.com", href: "mailto:hello@estatestrust.com", note: "For documents and formal enquiries" },
                { icon: MapPin, t: "Office", v: "Accra, Ghana", href: "#", note: "Visits by appointment" },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.05}>
                  <a href={c.href} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-forest-900/10 transition hover:ring-gold-500/60">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400"><c.icon className="size-5" /></span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">{c.t}</p>
                      <p className="mt-0.5 font-semibold text-forest-950">{c.v}</p>
                      <p className="text-xs text-ink-muted">{c.note}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={0.25} className="flex items-center gap-3 rounded-2xl bg-forest-950 p-5 text-white">
                <Clock className="size-5 text-gold-400" />
                <p className="text-sm">Abroad? <span className="text-white/60">We schedule calls across UK, US and EU time zones.</span></p>
              </Reveal>
            </div>
            <Reveal delay={0.1}><ContactForm /></Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
