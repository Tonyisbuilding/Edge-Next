import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const EdgeCapitalHero = () => {
  const [headingInView, setHeadingInView] = useState(false);
  const [buttonInView, setButtonInView] = useState(false);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const { language } = useChangeLanguageContext();

  // Translation dictionary
  const translations = {
    en: {
      heading: "Next stands for progress. For innovation. For the next level in investing. EdgeNext combines advanced data analytics, real-time risk control, and adaptive systems to deliver optimal performance in markets that are moving faster and becoming more volatile than ever.",
      subheading: "EdgeNext is not an evolution of existing methods — it is a fundamentally different way of thinking about return, risk, and results.",
      getInTouch: "Get in touch",
      altText: "Edge Capital Team"
    },
    nl: {
      heading: "Next staat voor vooruitgang. Voor innovatie. Voor het volgende niveau in beleggen. EdgeNext combineert geavanceerde data-analyse, realtime risicobeheersing en adaptieve systemen om optimaal te presteren in markten die steeds sneller bewegen en steeds volatieler worden.",
      subheading: "EdgeNext is geen evolutie van bestaande methodes, het is een fundamenteel andere manier van denken over rendement, risico en resultaat.",
      getInTouch: "Neem Contact Op",
      altText: "Edge Capital Team"
    }
  };

  // Get translation based on current language
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key];
  };

  useEffect(() => {
    // Custom intersection observer implementation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeadingInView(true);
          headingObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setButtonInView(true);
          buttonObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
      if (buttonRef.current) {
        buttonObserver.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-[6rem]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {t("heading")}
            </h1>

            <p className="text-lg text-gray-600">
              {t("subheading")}
            </p>
          </motion.div>

          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              buttonInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
<button className="mt-4 px-6 py-3 bg-[#008487] text-white font-medium rounded-full 
shadow-[0_4px_10px_rgba(32,106,124,0.3)] hover:shadow-[0_8px_20px_rgba(32,106,124,0.45)] 
hover:bg-[#008487] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 
transition-all duration-300">
              <Link to="/contact" className="block ">
                {t("getInTouch")}
              </Link>
            </button>
          </motion.div>
        </div>

        <div className="lg:w-1/2 pt-[40px]">
          <motion.div className="rounded-lg overflow-hidden shadow-lg">
            <motion.img
              initial={{
                right: "-100",
              }}
              whileInView={{
                left: "0",
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              src={images.about.Heroforedgenextabout}
              alt={t("altText")}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EdgeCapitalHero;