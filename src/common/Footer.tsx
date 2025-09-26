import "./common.css";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import images from "@/constant/images";

const Footer = () => {
  const { language } = useChangeLanguageContext();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand */}
        <div className="footer-brand">
          <div className="brand-content">
            <img
              src={images.landingPage.Edgenext_white}
              alt="Edge Capital"
              className="w-[202px] h-[auto]"
            />
            <p>

            </p>
          </div>

          <div className="footer-email">
            <a href="mailto:info@edgenext.nl">info@edgenext.nl</a>
            <span className="arrow">→</span>
          </div>
        </div>

        {/* Middle Section - Navigation */}
        <div className="middle-middle">
          <div className="footer-nav">
            <h3>{language === "nl" ? "Home" : "Home"}</h3>

            <ul>
              <li>
                <Link to="/about">
                  {language === "nl" ? "Over ons" : "About us"}
                </Link>
              </li>
              <li>
                <Link to="/edge-fund">
                  {language === "nl" ? "Correlation Arbitrage Fund" : "Correlation Arbitrage Fund"}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {language === "nl" ? "Contact" : "Contact"}
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  {language === "nl" ? "Privacybeleid" : "Privacy policy"}
                </Link>
              </li>
            </ul>

          </div>

          <div className="footer-nav">
            <h3>{language === "nl" ? "Helpcentrum" : "Help Center"}</h3>
            <ul>
              {/* <li>
                <a href="/media">
                  {language === "nl" ? "Kennisbank" : "Knowledge Base"}
                </a>
              </li> */}

              <li>
                <a href="/privacy">
                  {language === "nl" ? "Privacybeleid" : "Privacy policy"}
                </a>
              </li>
              {/* <li><a href="/404">404</a></li> */}
            </ul>
          </div>
        </div>

        {/* Right Section - Social */}
        <div className="footer-social">
          <h3>{language === "nl" ? "Sociaal" : "Social"}</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/edgenext-investing/"
              target="_blank"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="linkedin"
                className="w-6 h-6 fill-current text-white"
              >
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>

              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="footer-disclaimer">
        <h3>
          {language === "nl" ? "Algemene disclaimer – EdgeNext (handelsnaam van Edge Capital Management B.V.):" : "General disclaimer:"}
        </h3>
        <p>
  {language === "nl"
    ? `De informatie op deze website van EdgeNext, een handelsnaam van Edge Capital Management B.V., is uitsluitend bedoeld voor algemene informatieve doeleinden. Hoewel wij ernaar streven de informatie actueel, volledig en correct te houden, geven wij geen enkele garantie of verklaring van welke aard dan ook – expliciet of impliciet – over de volledigheid, juistheid, betrouwbaarheid, geschiktheid of beschikbaarheid met betrekking tot deze website of de informatie, producten, diensten of gerelateerde grafische weergaven op deze website, voor welk doel dan ook. Elk vertrouwen dat u stelt in dergelijke informatie is dan ook strikt op eigen risico. Edge Capital Management B.V. is geregistreerd bij de Autoriteit Financiële Markten (AFM) als een AIFM (Alternative Investment Fund Manager) onder het AIFMD-registratieregime van Artikel 2:66a Wft en is opgenomen in het register voor vrijgestelde beheerders van beleggingsinstellingen op de website van de AFM, zoals bedoeld in Artikel 1:107 Wft met registratienummer 50027774. Edge Capital Management B.V. is tevens ingeschreven bij de Kamer van Koophandel onder nummer 63941805.`
    : `The information on this website of EdgeNext, a trade name of Edge Capital Management B.V., is intended solely for general informational purposes. While we strive to keep the information current, complete, and accurate, we make no guarantees or representations of any kind — express or implied — about the completeness, accuracy, reliability, suitability, or availability of this website or the information, products, services, or related graphics contained on it, for any purpose whatsoever. Any reliance you place on such information is therefore strictly at your own risk. Edge Capital Management B.V. is registered with the Dutch Authority for the Financial Markets (AFM) as an AIFM (Alternative Investment Fund Manager) under the AIFMD registration regime of Article 2:66a Wft and is listed in the register for exempt managers of investment institutions on the AFM website, as referred to in Article 1:107 Wft with registration number 50027774. Edge Capital Management B.V. is also registered with the Dutch Chamber of Commerce under number 63941805.`
  }
</p>


      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          {language === "nl"
            ? "© 2025 EdgeNext. Alle rechten voorbehouden."
            : "© 2025 EdgeNext. All rights reserved."}
        </div>
        <a href="/privacy" className="footer-policy">
          {language === "nl" ? "Privacybeleid" : "Privacy policy"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
