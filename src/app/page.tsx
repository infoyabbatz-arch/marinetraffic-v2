import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Tracking from "@/components/sections/Tracking";
import TrustedBy from "@/components/sections/TrustedBy";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Stats />

      <Services />
      <WhyChooseUs />

      <Industries />
      <Tracking />

      <TrustedBy />
      <Testimonials />

      <About />
      <CTA />

      <WhatsAppButton />
      <Footer />
    </>
  );
}
