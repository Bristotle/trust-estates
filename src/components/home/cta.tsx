import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PHONE_PRIMARY, waLink } from "@/lib/utils";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-28 text-white lg:py-40">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-400">Let&apos;s build wealth together</p>
          <h2 className="serif-display mt-6 text-5xl sm:text-6xl lg:text-7xl">
            Real opportunities. Real value. <span className="italic text-gold-400">Real trust.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Tell us what you&apos;re looking for — a plot, a home, a rental investment or a buyer for your land — and an advisor will respond within one working day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={waLink("Hello Estates Trust, I'd like to speak with an advisor.")} variant="whatsapp" size="lg">
              <MessageCircle className="size-4" /> WhatsApp us
            </Button>
            <Button href={`tel:${PHONE_PRIMARY}`} variant="outlineLight" size="lg">
              <Phone className="size-4" /> Call {PHONE_PRIMARY}
            </Button>
            <Button href="/properties" variant="gold" size="lg">
              Browse properties <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
