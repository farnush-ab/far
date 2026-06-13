import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import MachineTypes from "@/components/MachineTypes";
import News from "@/components/News";
import BestSellers from "@/components/BestSellers";
import Brands from "@/components/Brands";
import WhyNoora from "@/components/WhyNoora";
import Vision from "@/components/Vision";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <MachineTypes />
      <Brands />
      <BestSellers />
      <Vision />
      <Stats />
      <WhyNoora />
      <News />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
