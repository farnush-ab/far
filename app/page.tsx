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
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <MachineTypes />
      <Stats />
      <News />
      <BestSellers />
      <Brands />
      <WhyNoora />
      <Vision />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
