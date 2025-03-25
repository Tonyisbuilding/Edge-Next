import images from "@/constant/images";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero bg-[#EEF4F5] mt-[4rem] md:h-[100vh]">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Investing
              <br />
              With An Edge
            </h1>
            <p className="hero-subtitle">
              Using dynamic, data-driven strategy for superior returns with
              controlled risk
            </p>

            <ul className="hero-features">
              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.strategy} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">Advanced Strategies</span> -
                    Arbitrage and delta-neutral for high returns.
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.bolt} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">Fact-Based Expertise</span> -
                    Rely on certainties, not predictions.
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.management} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">Managed Risk</span> - Controlled
                    risk for large-scale investments.
                  </p>
                </div>
              </li>
            </ul>

            <div className="hero-buttons">
              <button className="btn btn-primary">Get in Touch</button>
              <button className="btn btn-secondary">Request Brochure</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={images.landingPage.heroSection}
              alt="Investment Illustration"
            />
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
