import type { Metadata } from "next";
import { BarChart3, FileSignature, Repeat, Users } from "lucide-react";
import { CategoryPage } from "@/components/property/category-page";

export const metadata: Metadata = { title: "Investment properties in Ghana", description: "Income-producing apartment blocks, development sites and joint-venture opportunities with contracted returns." };

export default function InvestmentsPage() {
  return (
    <CategoryPage
      type="investment"
      eyebrow="Investment properties"
      title={<>Assets that pay you <span className="italic text-gold-400">every quarter.</span></>}
      body="Tenanted apartment blocks, short-let units and development sites open to joint venture. Audited rent rolls and feasibility studies shared on request."
      image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2400&q=80"
      points={[
        { icon: BarChart3, t: "Proven income", b: "Rent rolls and tenancy agreements reviewed before we list an income property." },
        { icon: FileSignature, t: "Contracted terms", b: "Returns, timelines and exit set out in a signed agreement." },
        { icon: Users, t: "Managed for you", b: "Tenants, maintenance and statements handled by our management desk." },
        { icon: Repeat, t: "Clear exit", b: "Resale support or buy-back options on selected products." },
      ]}
      guide={{
        title: "How property investment works with us.",
        items: [
          { q: "Outright purchase or co-investment?", a: "Both. Buy a whole block outright, or take a share in a managed property from GH₵250,000 and receive proportional rental income." },
          { q: "What returns should I expect?", a: "Tenanted residential property in Accra and Kumasi typically yields 12 to 18 percent gross per year. Development joint ventures target 25 to 35 percent per cycle. Figures are illustrative and set out per project." },
          { q: "How do I receive returns abroad?", a: "Quarterly transfers to your Ghanaian or foreign bank account, with a statement showing rent collected, costs and your share." },
          { q: "What are the risks?", a: "Vacancy, maintenance and currency movement. We mitigate with verified tenants, reserve funds and transparent reporting, and we explain each risk in writing before you invest." },
        ],
      }}
      cta={{ eyebrow: "Start investing", title: <>Put your money <span className="italic text-gold-400">to work.</span></>, body: "Request the investment pack for any property above, or tell us your ticket size and we will match you to a product." }}
    />
  );
}
