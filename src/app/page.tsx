import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Services } from "@/components/home/services";
import { Featured } from "@/components/home/featured";
import { Flagship } from "@/components/home/flagship";
import { Manifesto } from "@/components/home/manifesto";
import { Process } from "@/components/home/process";
import { Compare } from "@/components/home/compare";
import { InvestTeaser } from "@/components/home/invest-teaser";
import { PaymentPlan } from "@/components/home/payment-plan";
import { MarketInsights } from "@/components/home/market-insights";
import { Regions } from "@/components/home/regions";
import { Testimonials } from "@/components/home/testimonials";
import { Diaspora } from "@/components/home/diaspora";
import { Faq } from "@/components/home/faq";
import { ReportSignup } from "@/components/home/report-signup";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Featured />
      <Flagship />
      <Manifesto />
      <Process />
      <Compare />
      <InvestTeaser />
      <PaymentPlan />
      <MarketInsights />
      <Regions />
      <Testimonials />
      <Diaspora />
      <Faq />
      <ReportSignup />
      <Cta />
    </>
  );
}
