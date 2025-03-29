import NavBar from "@/common/NavBar";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import AboutEdgeFund from "@/component/EdgeFund/AboutEdgeFund";
import Target from "@/component/EdgeFund/Target";
import WhatSetsUsApart from "@/component/EdgeFund/WhatSetUsApart";
import StrategySection from "@/component/EdgeFund/Strategy";
import Feature from "@/component/EdgeFund/Features";
import FundCostStructure from "@/component/EdgeFund/FundCostStructure";
import InvestmentPerformance from "@/component/EdgeFund/InvestmentPerformance";

const EdgeFund = () => {
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
        <AboutEdgeFund />
        <Target />
        <WhatSetsUsApart />
        <StrategySection />
        <Feature />
        <FundCostStructure />
        <InvestmentPerformance />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default EdgeFund;
