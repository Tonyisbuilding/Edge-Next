import NavBar from "@/common/NavBar";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import AboutEdgeFund from "@/component/EdgeFund/AboutEdgeFund";
import Target from "@/component/EdgeFund/Target";
import WhatSetsUsApart from "@/component/EdgeFund/WhatSetUsApart";
import StrategySection from "@/component/EdgeFund/Strategy";

const EdgeFund = () => {
  return (
    <>
      <NavBar />
      <AboutEdgeFund />
      <Target />
      <WhatSetsUsApart />
      <StrategySection />
      <Contact />
      <Footer />
    </>
  );
};

export default EdgeFund;
