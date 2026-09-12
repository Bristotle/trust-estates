import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Services } from "@/components/home/services";
import { Featured } from "@/components/home/featured";
import { Manifesto } from "@/components/home/manifesto";
import { Process } from "@/components/home/process";
import { InvestTeaser } from "@/components/home/invest-teaser";
import { Regions } from "@/components/home/regions";
import { Testimonials } from "@/components/home/testimonials";
import { Diaspora } from "@/components/home/diaspora";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Featured />
      <Manifesto />
      <Process />
      <InvestTeaser />
      <Regions />
      <Testimonials />
      <Diaspora />
      <Faq />
      <Cta />
    </>
  );
}
