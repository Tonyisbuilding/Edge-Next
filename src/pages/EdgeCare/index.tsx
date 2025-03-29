import NavBar from "@/common/NavBar";
import Footer from "@/common/Footer";
import Contact from "@/component/landingPage/Contact";
import EdgeCareSection from "@/component/EdgeCare/EdgeCareSection";

const EdgeCare = () => {
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
        <EdgeCareSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default EdgeCare;
