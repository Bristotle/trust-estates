export type PropertyType = "land" | "building" | "investment";
export type TitleStatus = "Registered Title" | "Indenture + Site Plan" | "Allocation Note";

export type Property = {
  slug: string;
  title: string;
  type: PropertyType;
  location: string;
  region: string;
  priceGhs: number;
  pricePer?: string; // e.g. "per plot"
  size: string; // "2 plots", "4 bed", "1.5 acres"
  sizeNum: number; // for sorting
  titleStatus: TitleStatus;
  images: string[];
  featured?: boolean;
  tags: string[];
  summary: string;
  description: string;
  highlights: string[];
  documents: string[];
  coords: { lat: number; lng: number };
  roi?: string;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    slug: "oyarifa-hills-residential-plots",
    title: "Oyarifa Hills Residential Plots",
    type: "land",
    location: "Oyarifa, Accra",
    region: "Greater Accra",
    priceGhs: 185000,
    pricePer: "per plot",
    size: "70 × 100 ft plots",
    sizeNum: 1,
    titleStatus: "Registered Title",
    images: [u("1500382017468-9049fed747ef"), u("1472214103451-9374bd1c798e"), u("1470071459604-3b5ec3a7fe05")],
    featured: true,
    tags: ["Gated", "Tarred road", "Utilities on site"],
    summary: "Serviced plots in a gated, litigation-free estate 25 minutes from Accra Mall.",
    description:
      "A rare opportunity to secure fully serviced residential plots in one of Accra's fastest-appreciating corridors. Each plot comes with a registered title, demarcated boundaries, and access to tarred roads, electricity and water. Ideal for family homes or a build-to-let portfolio.",
    highlights: ["Registered land title with Lands Commission", "Gated estate with 24/7 security", "Electricity and water at plot boundary", "Flexible 6–12 month payment plans"],
    documents: ["Land Title Certificate", "Site Plan", "Indenture", "Lands Commission Search Report"],
    coords: { lat: 5.76, lng: -0.16 },
  },
  {
    slug: "east-legon-executive-villa",
    title: "East Legon Executive Villa",
    type: "building",
    location: "East Legon, Accra",
    region: "Greater Accra",
    priceGhs: 5200000,
    size: "5 bed · 6 bath",
    sizeNum: 5,
    titleStatus: "Registered Title",
    images: [u("1613490493576-7fde63acd811"), u("1600607687939-ce8a6c25118c"), u("1600566753086-00f18fb6b3ea")],
    featured: true,
    tags: ["Swimming pool", "Boys' quarters", "Solar backup"],
    summary: "Newly built five-bedroom villa on a quiet street in East Legon's diplomatic enclave.",
    description:
      "Architect-designed executive villa finished to international standards. Double-volume living area, fitted kitchen with granite worktops, en-suite bedrooms, private pool and a two-bedroom outhouse. Solar backup and borehole ensure uninterrupted power and water.",
    highlights: ["Private pool and landscaped garden", "10kVA solar with battery backup", "Fitted kitchen and walk-in closets", "5 minutes to A&C Mall"],
    documents: ["Land Title Certificate", "Building Permit", "Architectural Drawings"],
    coords: { lat: 5.64, lng: -0.15 },
  },
  {
    slug: "prampram-beachfront-acres",
    title: "Prampram Beachfront Acres",
    type: "land",
    location: "Prampram, Ningo-Prampram",
    region: "Greater Accra",
    priceGhs: 1450000,
    pricePer: "per acre",
    size: "1 – 10 acres",
    sizeNum: 10,
    titleStatus: "Registered Title",
    images: [u("1507525428034-b723cf961d3e"), u("1519046904884-53103b34b206"), u("1505142468610-359e7d316be0")],
    featured: true,
    tags: ["Beachfront", "Commercial", "Bulk discount"],
    summary: "Ocean-facing acreage beside the new Accra–Aflao highway. Ideal for resort or estate development.",
    description:
      "Large contiguous parcel with direct beach access, minutes from the Prampram roundabout. Fully registered and surveyed, with pegged corner beacons and a clean chain of title. Suitable for hospitality, mixed-use or a private estate.",
    highlights: ["Direct beach frontage", "Adjacent to Accra–Aflao dual carriageway", "Clean chain of title, no encumbrances", "Bulk pricing for 5+ acres"],
    documents: ["Land Title Certificate", "Cadastral Plan", "Lands Commission Search Report"],
    coords: { lat: 5.71, lng: 0.11 },
  },
  {
    slug: "kumasi-ahodwo-apartment-block",
    title: "Ahodwo 8-Unit Apartment Block",
    type: "investment",
    location: "Ahodwo, Kumasi",
    region: "Ashanti",
    priceGhs: 3800000,
    size: "8 × 2-bed units",
    sizeNum: 8,
    titleStatus: "Registered Title",
    images: [u("1494526585095-c41746248156"), u("1545324418-cc1a3fa10c00"), u("1501183638710-841dd1904471")],
    featured: true,
    roi: "14 – 18% p.a.",
    tags: ["Income producing", "Fully let", "Managed"],
    summary: "Fully tenanted apartment block in Kumasi's premium Ahodwo neighbourhood. Immediate rental income.",
    description:
      "Turn-key rental investment: eight two-bedroom apartments, all occupied under annual leases, with on-site management already in place. Buyers receive audited rent roll and tenancy agreements. Strong capital appreciation in the Ahodwo–Nhyiaeso corridor.",
    highlights: ["Gross yield 14–18% per annum", "All 8 units currently let", "Professional property management included", "Audited rent roll available on request"],
    documents: ["Land Title Certificate", "Tenancy Agreements", "Rent Roll (12 months)", "Building Permit"],
    coords: { lat: 6.67, lng: -1.63 },
  },
  {
    slug: "tema-community-25-townhouse",
    title: "Tema Community 25 Townhouse",
    type: "building",
    location: "Community 25, Tema",
    region: "Greater Accra",
    priceGhs: 1650000,
    size: "3 bed · 3 bath",
    sizeNum: 3,
    titleStatus: "Registered Title",
    images: [u("1600596542815-ffad4c1539a9"), u("1600585154340-be6161a56a0c"), u("1523217582562-09d0def993a6")],
    tags: ["Gated community", "Payment plan", "Near Devtraco"],
    summary: "Modern three-bedroom townhouse in a gated community with mortgage-ready paperwork.",
    description:
      "Contemporary townhouse within a secured community with clubhouse, playground and tarred internal roads. Complete title documentation makes this ideal for buyers using bank financing or purchasing from abroad.",
    highlights: ["Mortgage-ready documentation", "Community pool and gym", "20 minutes to Kotoka International Airport", "Up to 18-month payment plan"],
    documents: ["Land Title Certificate", "Building Permit", "Estate Rules"],
    coords: { lat: 5.72, lng: -0.05 },
  },
  {
    slug: "kwabenya-mixed-use-plots",
    title: "Kwabenya Mixed-Use Corner Plots",
    type: "land",
    location: "Kwabenya, Accra",
    region: "Greater Accra",
    priceGhs: 240000,
    pricePer: "per plot",
    size: "100 × 100 ft plots",
    sizeNum: 1,
    titleStatus: "Indenture + Site Plan",
    images: [u("1472214103451-9374bd1c798e"), u("1500382017468-9049fed747ef")],
    tags: ["Corner plot", "Commercial", "Main road"],
    summary: "Corner plots on the Kwabenya–Atomic main road, zoned for commercial or residential use.",
    description:
      "High-visibility corner plots suited to shops, clinics, or apartment blocks. Indenture and site plan in hand; registration at Lands Commission can be handled by our legal team as part of your purchase.",
    highlights: ["Main road frontage", "Mixed-use zoning", "Title registration handled by our lawyers", "Near University of Ghana"],
    documents: ["Indenture", "Site Plan", "Allocation Note"],
    coords: { lat: 5.69, lng: -0.22 },
  },
  {
    slug: "cape-coast-hospitality-site",
    title: "Cape Coast Hospitality Site",
    type: "investment",
    location: "Elmina Road, Cape Coast",
    region: "Central",
    priceGhs: 2900000,
    size: "3.2 acres",
    sizeNum: 3.2,
    titleStatus: "Registered Title",
    images: [u("1416331108676-a22ccb276e35"), u("1502672260266-1c1ef2d93688")],
    roi: "Development JV",
    tags: ["Tourism corridor", "Joint venture", "Sea view"],
    summary: "Prime sea-view parcel between Cape Coast and Elmina, open to joint-venture development.",
    description:
      "Positioned on Ghana's busiest tourism corridor, this parcel is suitable for a boutique hotel or serviced apartments. Available for outright purchase or as a joint-venture development with Estates Trust as your local partner.",
    highlights: ["Sea view, 400m from the shoreline", "Between two UNESCO heritage sites", "JV or outright purchase", "Feasibility study available"],
    documents: ["Land Title Certificate", "Cadastral Plan", "Feasibility Study"],
    coords: { lat: 5.1, lng: -1.3 },
  },
  {
    slug: "airport-residential-apartment",
    title: "Airport Residential 2-Bed Apartment",
    type: "building",
    location: "Airport Residential Area, Accra",
    region: "Greater Accra",
    priceGhs: 2350000,
    size: "2 bed · 2 bath",
    sizeNum: 2,
    titleStatus: "Registered Title",
    images: [u("1522708323590-d24dbb6b0267"), u("1502672260266-1c1ef2d93688"), u("1524758631624-e2822e304c36")],
    tags: ["Furnished", "Short-let ready", "Concierge"],
    summary: "Furnished apartment in a serviced tower; ideal for short-let income from diaspora and corporate guests.",
    description:
      "Fully furnished two-bedroom apartment with concierge, gym and rooftop pool, five minutes from the airport. Currently generating strong short-let income; management can continue post-sale.",
    highlights: ["Rooftop pool and gym", "24/7 concierge and security", "Short-let yield ~12% p.a.", "Walking distance to Marina Mall"],
    documents: ["Strata Title", "Service Charge Schedule", "Furniture Inventory"],
    coords: { lat: 5.62, lng: -0.18 },
  },
  {
    slug: "aburi-hills-estate-land",
    title: "Aburi Hills Estate Land",
    type: "land",
    location: "Aburi, Eastern Region",
    region: "Eastern",
    priceGhs: 95000,
    pricePer: "per plot",
    size: "70 × 100 ft plots",
    sizeNum: 1,
    titleStatus: "Indenture + Site Plan",
    images: [u("1470071459604-3b5ec3a7fe05"), u("1441974231531-c6227db76b6e")],
    tags: ["Cool climate", "Mountain view", "Weekend homes"],
    summary: "Affordable plots in the cool Akuapem hills, 45 minutes from Accra. Perfect for retreats and retirement homes.",
    description:
      "Elevated plots with panoramic views over the Accra plains. A growing community of weekend and retirement homes with good road access and a peaceful setting.",
    highlights: ["Panoramic views", "Cooler climate year-round", "45 minutes from Accra", "Entry-level pricing"],
    documents: ["Indenture", "Site Plan"],
    coords: { lat: 5.85, lng: -0.17 },
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const featuredProperties = properties.filter((p) => p.featured);
export const regions = Array.from(new Set(properties.map((p) => p.region)));

export const typeLabel: Record<PropertyType, string> = {
  land: "Land",
  building: "Building",
  investment: "Investment",
};
