import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsList from "@/components/BrandsList";
import InteractiveSection from "@/components/InteractiveSection";
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
        <BrandsList />
        <InteractiveSection />
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
