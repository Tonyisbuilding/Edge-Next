import images from "@/constant/images";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    {/* bg-[#EEF4F5] */}
      <section className="hero bg-white  mt-[4rem] md:h-[100vh]">
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
              <button className="btn btn-primary">
                <Link
                  to="/contact"
                  className="block "
                  // onClick={toggleNav}
                >
                  Get in Touch
                </Link>
              </button>
              <button className="btn btn-secondary">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFL8uncgP8CUHx8fM-1VQrV-Dc8Q3eULrDpP7buGC7zDrInQ/viewform?usp=header"
                target='_blank'
                >
                  Request Brochure
                </a>
              </button>
            </div>
          </div>

          <div className="hero-image">
            {/* Replace the img tag with a video tag */}
            <video
              autoPlay
              loop
              muted
              playsInline
              src={images.landingPage.heroSectionVideo} // Use the imported video file
              // alt="Investment Illustration Video"
              className="w-full h-full  object-cover opacity-75" // Ensure the video fits the container
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
