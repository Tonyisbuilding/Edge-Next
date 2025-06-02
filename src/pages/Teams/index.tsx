import TeamMemberCards from "@/common/TeamMemberCards";
import NavBar from "@/common/NavBar";
import {
  teamMembers,
  teamMembersDutch,
  SupportAndCommercial,
  SupportAndCommercialDutch,
  //   edgeNextTeam,
  // edgeNextTeamDutch,
} from "@/constant/data";
import Contact from "@/component/landingPage/Contact";
import Footer from "@/common/Footer";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import { theTeamYouCanTrustData, theTeamYouCanTrustDataDutch } from "@/constant/data";


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
        {/* <TeamMemberCards
  teamMembers={language === 'nl' ? teamMembersDutch : teamMembers}
  department={language === 'nl' ? 'Management' : "Management"}
/> */}

        <TeamMemberCards
  teamMembers={language === 'nl' ? theTeamYouCanTrustDataDutch : theTeamYouCanTrustData}
  department={language === 'nl' ? 'Management' : "Management"}
/>

<TeamMemberCards
  teamMembers={language === 'nl' ? SupportAndCommercialDutch : SupportAndCommercial}
  department={language === 'nl' ? 'Support en Commercieel' : 'Support and Commercial'}
/>

<TeamMemberCards
  teamMembers={language === 'nl' ? teamMembersDutch : teamMembers}
  department={language === 'nl' ? 'Advies en Supervisie' : 'Advisory and Oversight'}
/>



{/* <TeamMemberCards
  teamMembers={language === 'nl' ? edgeNextTeamDutch : edgeNextTeam}
  department="EdgeNext"
/> */}

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Teams;
