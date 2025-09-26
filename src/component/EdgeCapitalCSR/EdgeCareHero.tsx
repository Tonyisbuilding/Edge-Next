import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const EdgeCareHero = () => {
  const { language } = useChangeLanguageContext();

  return (
    <section className="relative w-full h-screen overflow-hidden md:mt-[5rem]">
      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 z-0">
        <video
          className="w-full h-screen md:h-full object-cover"
          src={images.csr.csrvid}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={images.edgeCare.edgecarehero}
        />
        {/* <div className="absolute  bg-black bg-opacity-50" />
        <div className="absolute  bg-gradient-to-b from-transparent to-black opacity-50" /> */}
      </div>

      {/* Content Layer */}
      <div
        className="relative z-10 flex flex-col items-center 
      justify-center h-full px-4 md:px-8 lg:px-16 bg-[#0000009d]"
      >
        <div className="max-w-4xl text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === "nl"
              ? "Toegewijd aan het gezamenlijk bouwen van een duurzame toekomst"
              : "Committed To Building A Sustainable Future Together"}
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {language === "nl"
              ? `Bij Edge Capital wordt onze missie om blijvende waarde te creëren voor de samenleving, het milieu en onze stakeholders gedreven door Maatschappelijk Verantwoord Ondernemen.`
              : `At Edge Capital, Corporate Social Responsibility drives our mission
            to create lasting value for society, the environment, and our
            stakeholders.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-teal-600 text-white rounded-4xl text-sm md:text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0E7490",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Partner with Edge Capital"
            >
              <a href="mailto:info@edgenext.nl">{ language === 'nl' ? 'Werk met ons samen' : 'Partner With us'}</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdgeCareHero;
