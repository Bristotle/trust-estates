import type { Metadata } from "next";
import { Building2, KeyRound, Landmark, ShieldCheck } from "lucide-react";
import { CategoryPage } from "@/components/property/category-page";

export const metadata: Metadata = { title: "Houses and buildings for sale in Ghana", description: "Executive homes, townhouses, apartments and commercial buildings with complete, mortgage-ready documentation." };

export default function BuildingsPage() {
  return (
    <CategoryPage
      type="building"
      eyebrow="Buildings"
      title={<>Homes and buildings with <span className="italic text-gold-400">complete paperwork.</span></>}
      body="Executive villas, gated townhouses, serviced apartments and commercial property in Accra, Tema and Kumasi. Building permits, title and drawings verified before listing."
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
      points={[
        { icon: ShieldCheck, t: "Permit-verified", b: "We confirm building permits and structural drawings, not just the land title." },
        { icon: Landmark, t: "Mortgage-ready", b: "Documentation prepared for bank financing, in Ghana or abroad." },
        { icon: KeyRound, t: "Move-in or let", b: "Family homes and income-producing units, some with management in place." },
        { icon: Building2, t: "Prime addresses", b: "East Legon, Airport Residential, Tema Community 25, Ahodwo and more." },
      ]}
      guide={{
        title: "Buying a home in Ghana, without surprises.",
        items: [
          { q: "What documents should a finished house have?", a: "Land title or registered indenture, an approved building permit from the local assembly, and where possible the architectural drawings. We obtain and check all three." },
          { q: "Can I get a mortgage?", a: "Yes. Several Ghanaian banks lend to residents and diaspora buyers. Complete documentation is the main requirement, which is why our listings are prepared for it." },
          { q: "What about service charges in estates?", a: "Gated communities charge for security, roads and shared facilities. We disclose the current charge and estate rules before you commit." },
          { q: "Can you manage it if I let it out?", a: "Yes. Our management desk handles tenants, rent collection and maintenance, and sends you quarterly statements." },
        ],
      }}
      cta={{ eyebrow: "Find your home", title: <>Tell us how you want <span className="italic text-gold-400">to live.</span></>, body: "Bedrooms, area, budget and timeline. We will shortlist verified homes and arrange viewings, in person or by video." }}
    />
  );
}
