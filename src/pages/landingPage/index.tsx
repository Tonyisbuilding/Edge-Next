import Footer from '@/common/Footer';
import NavBar from '@/common/NavBar';
import Contact from '@/component/landingPage/Contact';
import EdgeCapital from '@/component/landingPage/EdgeCapital';
import HeroSection from '@/component/landingPage/HeroSection';
import Presentation from '@/component/landingPage/Presentation';
import TheTeamYouCanTrust from '@/component/landingPage/TheTeamYouCanTrust';
import WhyEdgeCapital from '@/component/landingPage/WhyEdgeCapital';
// import OurHistory from "@/component/About/OurHistory";



const LandingPage = () => {
  return (
    <>
        <div>
          <div className=" 
        ">

            <NavBar />
            <HeroSection />
          </div>
            <EdgeCapital />
            <WhyEdgeCapital />
            <TheTeamYouCanTrust />
            <Presentation />
            <Contact />
            <Footer />
            {/* <OurHistory /> */}
        </div>
    </>
  )
}

export default LandingPage;