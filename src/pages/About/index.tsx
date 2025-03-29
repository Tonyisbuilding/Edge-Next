import NavBar from "@/common/NavBar";
import TeamMemberCards from "@/common/TeamMemberCards";
import CompanyTimeline from "@/component/About/CompanyTimeLine";
import EdgeCapitalHero from "@/component/About/EdgeCapitalHero";
import WhatSetsUsApart from "@/component/About/WhatSetUsApart";
import React from "react";
import Footer from "@/common/Footer";
import Contact from "@/component/landingPage/Contact";
import { teamMembers } from "@/constant/data";

const About = () => {
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
        <EdgeCapitalHero />
        <WhatSetsUsApart />
        <CompanyTimeline />
        <TeamMemberCards teamMembers={teamMembers} />
        <Contact />
      <Footer />
      </div>
      {/* <EdgeCapitalFooter /> */}
    </>
  );
};

export default About;
