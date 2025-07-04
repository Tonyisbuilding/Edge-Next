import React, { useState } from "react";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videoLinks = [
  "https://www.youtube.com/embed/mp56T2AXHnc?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/fjxBUhkP9FM?rel=0&modestbranding=1",
  "https://www.youtube.com/embed/9QzTeE02-Ps?rel=0&modestbranding=1",
];


// Video thumbnails
const videoThumbnails = [
  images.landingPage.EC_businessclassThumbnail,
  images.landingPage.EC_businessclassThumbnail,
];

const HomepageVideo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useChangeLanguageContext();

  const handleSwitch = (dir: "next" | "prev") => {
    const nextIndex =
      dir === "next"
        ? (activeIndex + 1) % videoLinks.length
        : (activeIndex - 1 + videoLinks.length) % videoLinks.length;

    setActiveIndex(nextIndex);
    setIsPlaying(false); // reset to thumbnail when switching
  };

  const translations = {
    en: {
      title: "EdgeCapital in the media",
      subtitle:
        "Discover how Edge Capital is making headlines — explore media coverage and events that highlight our innovation, strategy, and people.",
      next: "Next",
      previous: "Previous",
    },
    nl: {
      title: "EdgeCapital in de Media",
      subtitle:
        "Ontdek hoe Edge Capital in het nieuws komt — bekijk mediaberichtgeving en evenementen die onze innovatie, strategie en mensen belichten.",
      next: "Volgende",
      previous: "Vorige",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 text-left">
      <h2
        className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-0 inline-block"
        style={{
          backgroundImage: `url(${images.landingPage.Brush})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 100%",
          backgroundSize: "contain",
          paddingBottom: "0.5rem",
        }}
      >
        {t.title}
      </h2>

      <p className="relative text-gray-600 max-w-2xl mt-3 text-left mb-8">
        {t.subtitle}
      </p>

      {/* Video Container */}
      <div className="relative rounded-xl overflow-hidden max-w-7xl mx-auto pt-[56.25%] h-0">
        {isPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src={`${videoLinks[activeIndex]}&autoplay=1`}
            title="Edge Capital Media Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={videoThumbnails[activeIndex]}
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover rounded-xl blur-sm transition-all duration-300"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-Black/40 backdrop-blur-md border border-white/30 p-4 rounded-full shadow-xl transition hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => handleSwitch("prev")}
          className="bg-[#206A7C] text-white px-6 py-2 rounded-4xl hover:bg-[#42717C] transition flex items-center gap-2"
        >
          <ArrowLeft size={16} /> {t.previous}
        </button>
        <button
          onClick={() => handleSwitch("next")}
          className="bg-[#206A7C] text-white px-6 py-2 rounded-4xl hover:bg-[#42717C] transition flex items-center gap-2"
        >
          {t.next} <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default HomepageVideo;
