import NavBar from "@/common/NavBar";
import TeamMemberCards from "@/common/TeamMemberCards";
import CompanyTimeline from "@/component/About/CompanyTimeLine";
// import CompanyTimeline from '@/component/About/CompanyTimeline';
import EdgeCapitalHero from "@/component/About/EdgeCapitalHero";
import WhatSetsUsApart from "@/component/About/WhatSetUsApart";
import React from "react";
import Footer from "@/common/Footer";
import Contact from "@/component/landingPage/Contact";
// import EdgeCapitalFooter from "@/common/EgdeCapitalFooter";
import { teamMembers } from "@/constant/data";

const About = () => {
  return (
    <>
      <NavBar />
      <EdgeCapitalHero />
      <WhatSetsUsApart />
      <CompanyTimeline />
      <TeamMemberCards teamMembers={teamMembers} />
      <Contact />
      <Footer />
      {/* <EdgeCapitalFooter /> */}
    </>
  );
};

export default About;
