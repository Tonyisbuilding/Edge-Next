import NavBar from "@/common/NavBar";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import EdgeCareHero from "@/component/EdgeCapitalCSR/EdgeCareHero";
import OurCoreValues from "@/component/EdgeCapitalCSR/OurCoreValue";
import RoadmapSection from "@/component/EdgeCapitalCSR/RoadMap";

const EdgeCapitalCSR = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1550px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <NavBar />
        <EdgeCareHero />
        <OurCoreValues />
        <RoadmapSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default EdgeCapitalCSR;
