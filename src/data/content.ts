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
    avatar: u("1494790108377-be9c29b29330", 200),
  },
  {
    name: "Kwame Boateng",
    role: "Investor · Ahodwo apartments",
    location: "Kumasi, Ghana",
    quote:
      "My returns have come in every quarter as promised. The team manages the tenants and I just receive the statements. It's the most hands-off investment I own.",
    avatar: u("1507003211169-0a1dd7228f2d", 200),
  },
  {
    name: "Efua & Daniel Asante",
    role: "Family home · Tema C25",
    location: "Toronto, Canada",
    quote:
      "We had been burned before by an agent who sold us disputed land. Estates Trust walked us through every document. Our home is registered in our names — we finally sleep well.",
    avatar: u("1438761681033-6461ffad8d80", 200),
  },
  {
    name: "Ibrahim Sulley",
    role: "Sold family land · Kwabenya",
    location: "Accra, Ghana",
    quote:
      "They valued our land fairly, handled the paperwork and paid on the agreed date. No stories, no delays.",
    avatar: u("1500648767791-00dcc994a43e", 200),
  },
];

export const team = [
  { name: "Managing Director", role: "Founder & Managing Director", img: u("1560250097-0b93528c311a", 600) },
  { name: "Head of Legal", role: "Title & Conveyancing", img: u("1573497019940-1c28c88b4f3e", 600) },
  { name: "Head of Sales", role: "Client Relations", img: u("1519389950473-47ba0277781c", 600) },
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
    body: "Our legal team examines the chain of title — indentures, site plans, allocation notes — before we put our name on it.",
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
    a: "Submit the property through our Sell page or WhatsApp. We do a free valuation, verify your documents, and make you an offer — typically within 7 working days. Payment is made on the agreed date, through documented channels.",
  },
];
