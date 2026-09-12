import type { Metadata } from "next";
import { BadgeCheck, LandPlot, Ruler, Wallet } from "lucide-react";
import { CategoryPage } from "@/components/property/category-page";

export const metadata: Metadata = { title: "Lands for sale in Ghana", description: "Registered, litigation-free residential and commercial plots across Greater Accra, Ashanti, Central and Eastern regions." };

export default function LandsPage() {
  return (
    <CategoryPage
      type="land"
      eyebrow="Lands"
      title={<>Titled plots in Ghana&apos;s <span className="italic text-gold-400">growth corridors.</span></>}
      body="Serviced residential plots, commercial corner plots and beachfront acreage. Every parcel searched at the Lands Commission and walked by our surveyors before it is listed."
      image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
      points={[
        { icon: BadgeCheck, t: "Litigation-free", b: "Official search and site visit on every plot. No family disputes, no double sales." },
        { icon: Ruler, t: "Standard plot sizes", b: "70 by 100 ft and 100 by 100 ft plots, with pegged beacons matching the site plan." },
        { icon: Wallet, t: "Payment plans", b: "Selected estates on 6 to 18 month plans with documents released on completion." },
        { icon: LandPlot, t: "Build-ready", b: "Access roads, electricity and water at the boundary on our serviced estates." },
      ]}
      guide={{
        title: "What to know before you buy land in Ghana.",
        items: [
          { q: "What is a plot?", a: "In Ghana a standard residential plot is 70 by 100 feet (about 0.16 acres). Commercial and corner plots are often 100 by 100 feet. Larger parcels are sold by the acre." },
          { q: "Registered title vs indenture", a: "A Land Title Certificate is the strongest proof of ownership. An indenture with a site plan is the traditional conveyance and can be registered; we handle that registration as part of your purchase." },
          { q: "Why does location matter so much?", a: "Prices in corridors with new roads and utilities (Oyarifa, Prampram, Kwabenya) have moved 30 to 60 percent over three years. We show you the comparables before you decide." },
          { q: "How long does purchase take?", a: "From reservation to signed indenture is typically two weeks. Title registration in your name takes longer at the Lands Commission, and we follow it through for you." },
        ],
      }}
      cta={{ eyebrow: "Secure your plot", title: <>The best plots go <span className="italic text-gold-400">quietly.</span></>, body: "Tell us your budget and preferred area and we will send you verified options, including plots not yet listed publicly." }}
    />
  );
}
