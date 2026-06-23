import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import FeaturedBrand from "@/components/FeaturedBrand";
import ShowroomTeaser from "@/components/ShowroomTeaser";
import MeetingTableSection from "@/components/MeetingTableSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyDesignStation from "@/components/WhyDesignStation";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <CategoriesSection />
        <BrandsMarquee />
        <FeaturedBrand />
        <ShowroomTeaser />
        <MeetingTableSection />
        <ProjectsSection />
        <WhyDesignStation />
        <ContactBand />
        <Footer />
      </main>
    </>
  );
}
