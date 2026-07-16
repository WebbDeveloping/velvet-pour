import About from "@/components/About";
import Faq from "@/components/Faq";
import FooterContact from "@/components/FooterContact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import OurClients from "@/components/OurClients";
import Packages from "@/components/Packages";
import PromoBand from "@/components/PromoBand";
import Reviews from "@/components/Reviews";
import SiteNav from "@/components/SiteNav";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <OurClients />
      <About />
      <WhatWeOffer />
      <HowItWorks />
      <OurBenefits />
      <Packages />
      <Reviews />
      <PromoBand />
      <Faq />
      <FooterContact />
    </main>
  );
}
