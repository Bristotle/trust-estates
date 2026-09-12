import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FaqList } from "@/components/faq-list";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = { title: "Frequently asked questions", description: "Answers on buying land and homes in Ghana, verification, payment plans, investing and selling to Estates Trust." };

const groups = [
  {
    title: "Buying land and homes",
    items: [
      { q: "How do I know a property is genuine?", a: "Every listing has a Lands Commission search report and a surveyor's site verification. We share both with you before you pay anything. If a property fails either check, we do not list it." },
      { q: "What is the difference between a plot and an acre?", a: "A standard plot is 70 by 100 feet, roughly 0.16 acres. Six plots make about one acre. Larger parcels for farming or development are priced per acre." },
      { q: "Can I reserve a property?", a: "Yes. A refundable reservation deposit holds a property for 14 days while you review the documents or complete a video tour." },
      { q: "Do prices include registration?", a: "Land prices include the indenture in your name. Stamp duty and Lands Commission registration fees are charged at cost and quoted upfront." },
    ],
  },
  {
    title: "Payment and financing",
    items: [
      { q: "Do you offer payment plans?", a: "Selected estates and homes are available on 6 to 18 month plans with a minimum deposit of 30 percent. Documents are released on completion of payment." },
      { q: "How do I pay safely?", a: "Only by bank transfer to the Estates Trust company account, against a signed agreement and official receipt. We never accept cash or transfers to personal accounts." },
      { q: "Can I pay in foreign currency?", a: "We invoice in Ghana cedis and show the equivalent in USD, GBP or EUR at the day's rate. International transfers are accepted." },
    ],
  },
  {
    title: "Buying from abroad",
    items: [
      { q: "Do I need to be in Ghana?", a: "No. Video tours, document sharing, payment and registration under power of attorney can all be completed remotely. See our Diaspora page for the full process." },
      { q: "Who can act for me in Ghana?", a: "Our in-house lawyer, under a limited power of attorney for this transaction only, or a relative or lawyer of your choice." },
    ],
  },
  {
    title: "Investing",
    items: [
      { q: "What is the minimum investment?", a: "Land banking from GH₵50,000, co-investment in rental property from GH₵250,000 and development joint ventures from GH₵500,000." },
      { q: "How and when are returns paid?", a: "Rental income quarterly; land banking and JV returns on exit or project completion. All terms are set out in your signed agreement." },
      { q: "Are returns guaranteed?", a: "No investment is without risk. Returns are projected, not guaranteed, and we explain the risks and mitigations in writing before you commit." },
    ],
  },
  {
    title: "Selling to us",
    items: [
      { q: "How fast can you buy my property?", a: "Valuation within 7 working days of receiving your documents, and payment on the agreed completion date, usually within 30 days if the title is clean." },
      { q: "My documents are incomplete. Can you still buy?", a: "Often, yes. Our legal team can help regularise indentures and site plans as part of the sale, with costs agreed upfront." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title={<>Everything people ask us, <span className="italic text-gold-400">answered plainly.</span></>} body="If your question is not here, WhatsApp us. A real advisor replies, not a bot." compact />
      <section className="bg-cream-100 py-20 lg:py-28">
        <Container>
          <div className="space-y-20">
            {groups.map((g, i) => (
              <div key={g.title} className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
                <Reveal delay={i * 0.03}>
                  <p className="eyebrow text-gold-700">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="serif-display mt-3 text-4xl text-forest-950">{g.title}</h2>
                </Reveal>
                <FaqList items={g.items} defaultOpen={i === 0 ? 0 : null} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Cta eyebrow="Still have a question?" title={<>Ask a person, <span className="italic text-gold-400">not a page.</span></>} body="Our advisors answer on WhatsApp within the hour during business hours, and within one working day otherwise." />
    </>
  );
}
