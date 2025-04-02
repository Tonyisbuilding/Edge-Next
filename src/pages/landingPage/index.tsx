import Footer from "@/common/Footer";
import NavBar from "@/common/NavBar";
import TeamMemberCards from "@/common/TeamMemberCards";
import Contact from "@/component/landingPage/Contact";
import EdgeCapital from "@/component/landingPage/EdgeCapital";
import HeroSection from "@/component/landingPage/HeroSection";
import Marquee from "@/component/landingPage/Marquee";
import Presentation from "@/component/landingPage/Presentation";
// import TheTeamYouCanTrust from "@/component/landingPage/TheTeamYouCanTrust";
import WhyEdgeCapital from "@/component/landingPage/WhyEdgeCapital";
// import OurHistory from "@/component/About/OurHistory";
import { theTeamYouCanTrustData } from "@/constant/data";


const LandingPage = () => {
  return (
    <>
      <div>
        <div
          style={{
            maxWidth: "1550px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <NavBar />
          <HeroSection />
          <Marquee speed={15} />
          <EdgeCapital />
          <WhyEdgeCapital />
          <TeamMemberCards teamMembers={theTeamYouCanTrustData} />
          <Presentation />
          <Contact />
        <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
