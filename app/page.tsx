import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import ShowroomTeaser from "@/components/ShowroomTeaser";
import MeetingTableSection from "@/components/MeetingTableSection";
import ProjectsSection from "@/components/ProjectsSection";
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
        <ShowroomTeaser />
        <MeetingTableSection />
        <ProjectsSection />
        <ContactBand />
        <Footer />
      </main>
    </>
  );
}
