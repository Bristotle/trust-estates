const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const stats = [
  { value: 1200, suffix: "+", label: "Plots & properties sold" },
  { value: 9, suffix: "", label: "Regions across Ghana" },
  { value: 14, suffix: "%", label: "Average investor return" },
  { value: 0, suffix: "", label: "Litigation cases on our land", display: "Zero" },
];

export const testimonials = [
  {
    name: "Nana Akua Mensah",
    role: "Bought 2 plots · Oyarifa",
    location: "London, UK",
    quote:
      "I bought from London without stepping foot in Ghana until handover. They sent me the Lands Commission search before I paid a cedi. That's the kind of transparency I needed.",
    avatar: u("1573497491765-dccce02b29df", 200),
  },
  {
    name: "Kwame Boateng",
    role: "Investor · Ahodwo apartments",
    location: "Kumasi, Ghana",
    quote:
      "My returns have come in every quarter as promised. The team manages the tenants and I just receive the statements. It's the most hands-off investment I own.",
    avatar: u("1531384441138-2736e62e0919", 200),
  },
  {
    name: "Efua & Daniel Asante",
    role: "Family home · Tema C25",
    location: "Toronto, Canada",
    quote:
      "We had been burned before by an agent who sold us disputed land. Estates Trust walked us through every document. Our home is registered in our names, and we finally sleep well.",
    avatar: u("1611432579699-484f7990b127", 200),
  },
  {
    name: "Ibrahim Sulley",
    role: "Sold family land · Kwabenya",
    location: "Accra, Ghana",
    quote:
      "They valued our land fairly, handled the paperwork and paid on the agreed date. No stories, no delays.",
    avatar: u("1506277886164-e25aa3f4ef7f", 200),
  },
];

export const team = [
  { name: "Managing Director", role: "Founder & Managing Director", icon: "briefcase", body: "Sets the standard: no listing goes public without passing verification." },
  { name: "Head of Legal", role: "Title & Conveyancing", icon: "scale", body: "Runs every Lands Commission search and registers titles in clients' names." },
  { name: "Head of Surveying", role: "Site Verification", icon: "compass", body: "Walks every plot, confirms beacons and speaks with adjoining owners." },
  { name: "Head of Sales", role: "Client Relations", icon: "handshake", body: "Your single point of contact from first enquiry to handover." },
  { name: "Investment Desk", role: "Portfolio & Returns", icon: "chart", body: "Structures rental, land-banking and JV products and issues quarterly statements." },
  { name: "Diaspora Desk", role: "International Clients", icon: "globe", body: "Video tours, power of attorney and payment support across UK, US and EU time zones." },
];

export const recentlySecured = [
  { what: "2 plots", where: "Oyarifa, Accra", who: "Client in London", when: "3 days ago" },
  { what: "4-bed home", where: "Tema Community 25", who: "Family in Accra", when: "1 week ago" },
  { what: "GH₵400k investment", where: "Ahodwo apartments", who: "Investor in Kumasi", when: "1 week ago" },
  { what: "1.5 acres", where: "Prampram", who: "Developer in Toronto", when: "2 weeks ago" },
  { what: "1 plot", where: "Aburi Hills", who: "Client in Hamburg", when: "2 weeks ago" },
  { what: "Corner plot", where: "Kwabenya", who: "Business owner in Accra", when: "3 weeks ago" },
];

export const comparison = [
  { item: "Lands Commission search before listing", us: true, them: false },
  { item: "Physical site verification with surveyor", us: true, them: false },
  { item: "Documents shared before any payment", us: true, them: false },
  { item: "Payment through documented bank channels only", us: true, them: "Sometimes" },
  { item: "Title registered in your name, certificate delivered", us: true, them: "Extra cost" },
  { item: "Written agreement with timelines", us: true, them: "Rarely" },
  { item: "Video tours and remote purchase support", us: true, them: false },
  { item: "Ongoing management for investment property", us: true, them: false },
];

// Indicative 3-year price movement for serviced residential plots. Placeholder figures for the demo.
export const marketInsights = [
  { area: "East Legon Hills", growth: 41, price: "GH₵320k", note: "Established, low supply" },
  { area: "Oyarifa", growth: 58, price: "GH₵185k", note: "Fastest-growing corridor" },
  { area: "Prampram", growth: 64, price: "GH₵95k", note: "New highway, beach access" },
  { area: "Kwabenya", growth: 37, price: "GH₵240k", note: "University and main road" },
  { area: "Aburi", growth: 29, price: "GH₵95k", note: "Weekend and retirement homes" },
  { area: "Ahodwo, Kumasi", growth: 33, price: "GH₵210k", note: "Kumasi's premium address" },
];

export const milestones = [
  { year: "Founding", title: "Started with one principle", body: "Verify first, sell second. Our first ten sales were all plots we had personally searched and walked." },
  { year: "Growth", title: "Expanded beyond Accra", body: "Opened portfolios in the Ashanti, Central and Eastern regions with local surveyors on the ground." },
  { year: "Diaspora", title: "Built the remote purchase process", body: "Video tours, power of attorney and documented payments so clients abroad could buy safely." },
  { year: "Investments", title: "Launched managed products", body: "Rental income, land banking and development joint ventures with contracted returns." },
  { year: "Today", title: "Ghana, Africa and beyond", body: "A growing network of partners across West and East Africa, and a record we protect on every deal." },
];

export const process = [
  {
    step: "01",
    title: "Lands Commission search",
    body: "Before any property is listed, we run an official search to confirm ownership and check for encumbrances or disputes.",
  },
  {
    step: "02",
    title: "Physical site verification",
    body: "Our surveyors visit the site, confirm beacons match the site plan, and speak with adjoining owners and traditional authorities.",
  },
  {
    step: "03",
    title: "Documentation review",
    body: "Our legal team examines the chain of title (indentures, site plans, allocation notes) before we put our name on it.",
  },
  {
    step: "04",
    title: "Secure purchase & registration",
    body: "Payments go through documented channels. We handle title registration in your name and deliver your certificate.",
  },
];

export const regionsServed = [
  { name: "Greater Accra", areas: "East Legon · Oyarifa · Tema · Prampram · Kwabenya", count: 6 },
  { name: "Ashanti", areas: "Ahodwo · Nhyiaeso · Ejisu", count: 1 },
  { name: "Central", areas: "Cape Coast · Elmina · Kasoa", count: 1 },
  { name: "Eastern", areas: "Aburi · Koforidua · Akosombo", count: 1 },
  { name: "Western", areas: "Takoradi · Sekondi", count: 0 },
  { name: "Beyond Ghana", areas: "Nigeria · Côte d'Ivoire · Kenya", count: 0 },
];

export const faqs = [
  {
    q: "How do I know the land is genuine and not in dispute?",
    a: "Every property we list has passed a Lands Commission search and a physical site verification. We share the search report and documents with you before you pay. If we cannot verify it, we do not sell it.",
  },
  {
    q: "Can I buy from outside Ghana?",
    a: "Yes. Most of our clients buy from the UK, US, Canada and Europe. We provide video site tours, secure documented payment channels, and can act under a power of attorney to complete registration on your behalf.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Selected lands and buildings are available on 6 to 18-month plans with a minimum deposit. Documents are released on completion of payment.",
  },
  {
    q: "How do your investment products work?",
    a: "You invest in income-producing property or development projects we manage. Returns are paid quarterly or on project exit, with signed agreements setting out the terms. Minimum tickets start from GH₵50,000.",
  },
  {
    q: "I want to sell my land or building. What happens next?",
    a: "Submit the property through our Sell page or WhatsApp. We do a free valuation, verify your documents, and make you an offer, typically within 7 working days. Payment is made on the agreed date, through documented channels.",
  },
];
