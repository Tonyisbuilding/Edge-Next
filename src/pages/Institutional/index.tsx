import NavBar from "@/common/NavBar";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import HeroSection from "@/component/Institutional/HeroSection";
import ResearchDevelopmentSection from "@/component/Institutional/ResearchDevelopmentSection";
import PrinciplesSection from "@/component/Institutional/Principles";
import TradingApproachSection from "@/component/Institutional/TradingApproach";
import InstitutionalInvestmentSolutions from "@/component/Institutional/InstitutionalInvestmentSolutions";

const Institutional = () => {
  return (
    <>
    <div className="bg-white">

      <NavBar />
        <HeroSection />
        <ResearchDevelopmentSection />
        <PrinciplesSection />
        <TradingApproachSection />
        <InstitutionalInvestmentSolutions />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default Institutional;
