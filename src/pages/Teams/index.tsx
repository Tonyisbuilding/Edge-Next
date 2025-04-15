import TeamMemberCards from "@/common/TeamMemberCards";
import NavBar from "@/common/NavBar";
import {
  teamMembers,
  teamMembersDutch,
  advisoryBoard,
  advisoryBoardDutch,
  SupportAndCommercial,
  SupportAndCommercialDutch,
} from "@/constant/data";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const Teams = () => {

  const { language } = useChangeLanguageContext();
  
  return (
    <>
        <NavBar />
      <div
        className="bg-[#EEF4F5] pt-[5rem]"
        style={{
          maxWidth: "1550px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <TeamMemberCards teamMembers={language === 'nl' ? teamMembersDutch : teamMembers} department={language === 'nl' ? 'Beheer' : "Management"} />
        <TeamMemberCards
          teamMembers={language === 'nl' ? advisoryBoardDutch : advisoryBoard}
          department={language === 'nl' ? 'adviesraad' : 'Advisory Board'}
        />
        <TeamMemberCards
          teamMembers={language === 'nl' ? SupportAndCommercialDutch : SupportAndCommercial}
          department={language === 'nl' ? 'Ondersteunend en commercieel' : 'Support and commercial'}
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Teams;
