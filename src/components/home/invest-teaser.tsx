import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { RoiCalculator } from "./roi-calculator";
import { BadgeCheck, FileSignature, PiggyBank, Shield } from "lucide-react";

const points = [
  { icon: FileSignature, t: "Contracted returns", b: "Every investment is backed by a signed agreement setting out returns, timelines and exit." },
  { icon: Shield, t: "Asset-backed", b: "Your capital is tied to real, titled property, not promises." },
  { icon: PiggyBank, t: "From GH₵50,000", b: "Accessible entry points, with quarterly statements and payouts." },
  { icon: BadgeCheck, t: "Managed for you", b: "We handle tenants, maintenance and paperwork. You receive the returns." },
];

export function InvestTeaser() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Invest with us"
              title={<>Secure today. <span className="italic text-forest-700">Profit tomorrow.</span></>}
              body="Put your money to work in Ghana's property market with a partner that manages everything on the ground, whether you're in Accra or abroad."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {points.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.06} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400">
                    <p.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest-950">{p.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <RoiCalculator />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
