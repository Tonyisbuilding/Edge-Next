import NavBar from "@/common/NavBar";
import TeamMemberCards from "@/common/TeamMemberCards";
import CompanyTimeline from "@/component/About/CompanyTimeLine";
import EdgeCapitalHero from "@/component/About/EdgeCapitalHero";
import WhatSetsusApart from "@/component/About/WhatSetUsApart";
import React from "react";
import Footer from "@/common/Footer";
import Contact from "@/component/landingPage/Contact";
import { teamMembers, teamMembersDutch } from "@/constant/data";
import { theTeamYouCanTrustData, theTeamYouCanTrustDataDutch } from "@/constant/data";

import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const About = () => {

  const { language } = useChangeLanguageContext();
  return (
    <>
      <NavBar />
      <div
        style={{
          maxWidth: "1550px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <EdgeCapitalHero />
        <WhatSetsusApart />
        <CompanyTimeline />
        <TeamMemberCards
          teamMembers={language === 'nl' ? theTeamYouCanTrustDataDutch : theTeamYouCanTrustData} />
        <Contact />
        <Footer />
      </div>
      {/* <EdgeCapitalFooter /> */}
    </>
  );
};

export default About;
