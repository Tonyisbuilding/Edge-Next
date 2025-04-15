import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const ResearchDevelopmentSection = () => {
  const { language } = useChangeLanguageContext();

  // Define translations for English and Dutch
  const translations = {
    en: {
      title: "Research & Development – The Engine Behind Our Success",
      description: "Our research is primarily conducted in-house. Our research department focuses on testing a wide range of possibilities in the markets and our systems. By continuously testing and simulating various market situations, we are better prepared and can consistently upgrade our systems.",
      sections: [
        {
          title: "In-House Research for Continuous Adaptation",
          content: "Thorough research forms the basis for a successful and sustainable trading strategy. We continuously expand our platform based on input from our research department.",
        },
        {
          title: "Machine Learning Integration",
          content: "We adapt to new technologies, such as implementing machine learning to enhance our trading parameters and improve prediction accuracy.",
        },
        {
          title: "Proprietary Trading Engine",
          content: "We've developed hedgers that can operate on multiple exchanges, providing unparalleled flexibility and efficiency.",
        },
      ],
      contactUs: "Contact Us",
      imageAlt: "Research team analyzing market data",
    },
    nl: {
      title: "Onderzoek & Ontwikkeling – De Motor Achter Ons Succes",
      description: "Ons onderzoek wordt voornamelijk intern uitgevoerd. Onze onderzoeksafdeling richt zich op het testen van een breed scala aan mogelijkheden in de markten en onze systemen. Door continu verschillende marktsituaties te testen en te simuleren, zijn we beter voorbereid en kunnen we onze systemen consistent verbeteren.",
      sections: [
        {
          title: "Intern Onderzoek voor Continue Aanpassing",
          content: "Grondig onderzoek vormt de basis voor een succesvolle en duurzame handelsstrategie. We breiden ons platform continu uit op basis van input van onze onderzoeksafdeling.",
        },
        {
          title: "Integratie van Machine Learning",
          content: "We passen ons aan nieuwe technologieën aan, zoals het implementeren van machine learning om onze handelsparameters te verbeteren en de nauwkeurigheid van voorspellingen te vergroten.",
        },
        {
          title: "Eigen Handelsmotor",
          content: "We hebben hedgers ontwikkeld die op meerdere beurzen kunnen opereren, wat ongeëvenaarde flexibiliteit en efficiëntie biedt.",
        },
      ],
      contactUs: "Neem Contact Op",
      imageAlt: "Onderzoeksteam dat marktgegevens analyseert",
    },
  };

  // Select the appropriate content based on language, with fallback to English
  const content = translations[language] || translations.en;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-[#EEF4F5C2] lg:p-[58px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text content column */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl md:text-[22px] font-bold text-gray-800"
              variants={itemVariants}
            >
              {content.title}
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8 leading-relaxed md:text-[0.9rem]"
              variants={itemVariants}
            >
              {content.description}
            </motion.p>

            <motion.div className="space-y-2" variants={containerVariants}>
              {/* Section 1 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
                  <img
                    src={images.institution.researchIcon}
                    alt={content.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    {content.sections[0].title}
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    {content.sections[0].content}
                  </p>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
                  <img
                    src={images.institution.MLIcon}
                    alt={content.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    {content.sections[1].title}
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    {content.sections[1].content}
                  </p>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
                  <img
                    src={images.institution.tradingEngineIcon}
                    alt={content.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    {content.sections[2].title}
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    {content.sections[2].content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <Link to="/contact">
              <motion.div className="mt-8" variants={itemVariants}>
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded transition duration-300 hover:cursor-pointer">
                  {content.contactUs}
                </button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-full min-h-[100px] md:min-h-[400px] bg-gray-100 overflow-hidden">
              <img
                src={images.institution.researchdevelopment}
                alt={content.imageAlt}
                className="w-full md:h-[95%] object-cover rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopmentSection;