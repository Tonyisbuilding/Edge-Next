import images from "@/constant/images";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

// Beleggen met een voorsprong!
const HeroSection = () => {
  const { language } = useChangeLanguageContext();
  return (
    <>
      {/* bg-[#EEF4F5] */}
      <section className="hero  bg-[#EEF4F5]  mt-[4rem] md:h-[100vh] md:max-h-[700px]">
        <div className="container hero-container pt-[44px] sm:pt-0">
          <div className="hero-content">
            
            <h1 className="hero-title">
              {language === "en" ? "EdgeNext takes your" : "EdgeNext brengt uw "}
              <br />
              {language === "en" ? "investment to the next level!" : "belegging naar een Next level!"}
            </h1>

            <p className="hero-subtitle">
              {language === "nl"
                ? "Gebruik van dynamische, datagestuurde strategieën voor superieure rendementen met een beheerst risico."
                : "Investing with certainty — we base our investments on facts, not forecasts."}
            </p>

            <ul className="hero-features">
              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.strategy} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Geavanceerde strategieën' : 'Advanced strategies'}</span> -
                    {language === 'nl' ? ' Correlatie arbitrage, een afgeleide van Index Arbitrage uitgevoerd op de meest liquide markt ter wereld (FX)' : 'Correlation arbitrage, a derivative of Index Arbitrage executed on the most liquid market in the world (FX).'}
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.bolt} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Op feiten gebaseerd' : 'Fact-based expertise'}</span> -
                    {language === 'nl' ? ' Een bewezen strategie die inspeelt op afwijkingen tussen verschillende gecorreleerde valutaparen.' : 'A proven strategy that capitalizes on deviations between various correlated currency pairs.'}
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.management} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Riskmanagement' : 'Managed risk'}</span>
                    { language === 'nl' ? ' -  Hoogste drawdown op maandniveau in de afgelopen 5 jaar van 5.05%' : '- Highest monthly drawdown in the past 5 years: 5.05%'}
                  </p>
                </div>
              </li>
            </ul>

            <div className="hero-buttons ">
              <button className="btn btn-primary">
                <Link
                  to="/contact"
                  className="block "
                  // onClick={toggleNav}
                >
                  { language === 'nl' ? 'Neem Contact op' : 'Get in touch'}
                </Link>
              </button>
              <button
                // onClick={()=> window.open('/requestinfo','_blank')}
                className="btn btn-secondary"
              >
                <Link to="/requestinfo">{ language === 'nl' ? 'Brochure aanvragen' : 'Request brochure'}</Link>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={images.landingPage.Edgenext_anim}
              className="w-full h-full  object-cover opacity-75"
            />
            {/* <img
              src={images.landingPage.heroSection}
              alt="Investment Illustration"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

//  {images.landingPage.strategy}
//  {images.landingPage.bolt}
//  {images.landingPage.management}
//  src={images.landingPage.heroSection}
