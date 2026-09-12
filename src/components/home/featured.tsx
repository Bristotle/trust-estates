import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property/property-card";
import { featuredProperties } from "@/data/properties";

export function Featured() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured listings"
            title={<>Hand-picked, <span className="italic text-forest-700">verified</span> opportunities</>}
            body="A selection from our current portfolio. Every one has cleared our Lands Commission search and site verification."
          />
          <Button href="/properties" variant="outline">
            View all properties <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((p, i) => (
            <PropertyCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
