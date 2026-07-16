import About from "@/components/About";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <OurClients />
      <About />
    </main>
  );
}
