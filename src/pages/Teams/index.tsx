import TeamMemberCards from "@/common/TeamMemberCards";
import NavBar from "@/common/NavBar";
import {
  teamMembers,
  advisoryBoard,
  SupportAndCommercial,
} from "@/constant/data";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";

const Teams = () => {
  return (
    <>
      <div
        className="bg-[#EEF4F5] pt-[5rem]"
        style={{
          maxWidth: "1550px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <NavBar />
        <TeamMemberCards teamMembers={teamMembers} department={"Management"} />
        <TeamMemberCards
          teamMembers={advisoryBoard}
          department={"Advisory Board"}
        />
        <TeamMemberCards
          teamMembers={SupportAndCommercial}
          department={"Support and commercial"}
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Teams;
