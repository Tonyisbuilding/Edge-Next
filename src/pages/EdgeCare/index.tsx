import NavBar from "@/common/NavBar";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import EdgeCareHero from "@/component/EdgeCare/EdgeCareHero";
import OurCoreValues from "@/component/EdgeCare/OurCoreValue";
import RoadmapSection from "@/component/EdgeCare/RoadMap";


const EdgeCare = () => {
  return (
    <>
      <NavBar />
      <EdgeCareHero />
      <OurCoreValues />
      <RoadmapSection />
      <Contact />
      <Footer />
    </>
  );
};

export default EdgeCare;
