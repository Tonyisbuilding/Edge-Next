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

//  Bekend van:
const Marquee: React.FC<MarqueeProps> = ({ speed = 20 }) => {

  const { language } = useChangeLanguageContext();

  return (
    <section className="py-6 bg-[#EEF4F5] max-h-[150px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm md:text-base font-bold mb-10">
          {language === 'nl' ? 'Bekend van:' : 'Known from:'}
        </h2>

        <div className="overflow-hidden">
          <div className="marquee flex" style={{ animationDuration: `${speed}s` }}>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 sm:mx-4 md:mx-6 w-[9rem] md:w-[10rem] min-w-[120px] h-[40px] md:h-[55px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>

            ))}
            {logos.map((logo) => (
              <div
                key={`${logo.id}-duplicate`}
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 min-w-[120px] h-[40px] md:h-[55px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
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