import { Suspense } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PropertyGrid } from "@/components/property/property-grid";
import { PropertyGridSkeleton } from "@/components/property/property-grid-skeleton";
import { Cta } from "@/components/home/cta";
import { type PropertyType } from "@/data/properties";
import type { LucideIcon } from "lucide-react";

type Point = { icon: LucideIcon; t: string; b: string };

export function CategoryPage({
  type, eyebrow, title, body, image, points, guide, cta,
}: {
  type: PropertyType;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  image: string;
  points: Point[];
  guide: { title: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: React.ReactNode; body: string };
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={body} image={image} />
      <section className="bg-cream-100 py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05} className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
                <span className="grid size-10 place-items-center rounded-full bg-forest-900 text-gold-400"><p.icon className="size-4" /></span>
                <h3 className="mt-4 font-semibold text-forest-950">{p.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream-100 pb-24">
        <Container>
          <Suspense fallback={<PropertyGridSkeleton cards={4} withTypeToggle={false} />}>
            <PropertyGrid fixedType={type} />
          </Suspense>
        </Container>
      </section>
      <section className="bg-cream-200 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-gold-600">Buyer&apos;s guide</p>
              <h2 className="serif-display mt-4 text-4xl text-forest-950 sm:text-5xl">{guide.title}</h2>
            </Reveal>
            <div className="space-y-8">
              {guide.items.map((g, i) => (
                <Reveal key={g.q} delay={i * 0.05} className="border-t border-forest-900/10 pt-6">
                  <h3 className="text-lg font-semibold text-forest-950">{g.q}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{g.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Cta {...cta} />
    </>
  );
}
