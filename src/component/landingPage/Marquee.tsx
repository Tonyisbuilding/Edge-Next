import images from "@/constant/images";
import "./marquee.css";

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
  { id: 'logo1', src: images.landingPage.B_class, alt: 'Logo 1' },
  { id: 'logo2', src: images.landingPage.IEX_nl, alt: 'Logo 2' },
  { id: 'logo3', src: images.landingPage.rtlz, alt: 'Logo 3' },
  { id: 'logo4', src: images.landingPage.IEX, alt: 'Logo 4' },
  { id: 'logo5', src: images.landingPage.BELEGGERSFAIR_LOGO_HEADER, alt: 'Logo 5' },
];

const Marquee: React.FC<MarqueeProps> = ({ speed = 20 }) => {
  return (
    <section className="py-6 bg-[#EEF4F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm md:text-base font-normal mb-10">
          Trusted by Industry Leaders
        </h2>

        <div className="overflow-hidden">
          <div className="marquee flex" style={{ animationDuration: `${speed}s` }}>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 sm:mx-4 md:mx-6 w-[9rem] md:w-[10rem]"
                style={{ minWidth: '120px', height: '40px' }}
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
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6"
                style={{ minWidth: '120px', height: '40px' }}
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