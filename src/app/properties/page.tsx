import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { PropertyGrid } from "@/components/property/property-grid";
import { PropertyGridSkeleton } from "@/components/property/property-grid-skeleton";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Properties",
  description: "Verified lands, buildings and investment properties for sale across Ghana.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={<>Verified <span className="italic text-gold-400">properties</span> for sale</>}
        body="Every listing below has passed a Lands Commission search and physical site verification. Filter by type, region and budget."
        compact
      />
      <section className="bg-cream-100 pb-24">
        <Container>
          <Suspense fallback={<PropertyGridSkeleton cards={9} withTypeToggle={true} />}>
            <PropertyGrid />
          </Suspense>
        </Container>
      </section>
      <Cta eyebrow="Not seeing it?" title={<>We source property <span className="italic text-gold-400">to order.</span></>} body="Tell us the area, size and budget. Many of our best plots are sold before they are listed publicly." />
    </>
  );
}
