import images from "@/constant/images";
import "./marquee.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

interface Logo {
  id: string;
  src: string;
  alt: string;
  url?: string;
}

interface MarqueeProps {
  speed?: number;
}

const logos: Logo[] = [
  { id: 'logo1', src: images.landingPage.Citibank, alt: 'Logo 1' },
  { id: 'logo2', src: images.landingPage.Bolderlogo, alt: 'Logo 2' },
  { id: 'logo3', src: images.landingPage.GBEBroker, alt: 'Logo 3' },
  { id: 'logo4', src: images.landingPage.NewEC, alt: 'Logo 4' },
];

const Marquee: React.FC<MarqueeProps> = ({ speed = 30 }) => {
  const { language } = useChangeLanguageContext();

  // Create multiple copies to ensure smooth endless scrolling
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-6 bg-[#EEF4F5] max-h-[150px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm md:text-base font-bold mb-10">
          {language === 'nl' ? 'Betrouwbare partners:' : 'Known from:'}
        </h2>

        <div className="marquee-container">
          <div 
            className="marquee-content"
            style={{ 
              animationDuration: `${speed}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationName: 'scroll'
            }}
          >
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="marquee-item"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;