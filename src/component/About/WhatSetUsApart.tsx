import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, Shield, Castle } from "lucide-react";
import { ReactNode } from "react";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const FeatureCard = ({
  icon,
  title,
  backText,
  index,
}: {
  icon: ReactNode;
  title: string;
  backText: string;
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full md:h-[60vh] h-[45vh] perspective-1000"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px'}}
      key={index}
    >
      {/* Front Card */}
      <motion.div
        className="absolute w-full max-h-[400px]  bg-[#008487] rounded-lg p-8  flex flex-col
           text-white overflow-hidden"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-semibold text-left mt-[60%]   md:mt-[65%]">
          {title}
        </h3>
      </motion.div>

      {/* Back Card */}
     <motion.div
  className="absolute w-full h-[400px] max-h-[400px] bg-[#008487] rounded-lg p-8 
    text-white overflow-hidden"
  initial={false}
  animate={{ rotateY: isFlipped ? 0 : -180 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  style={{ backfaceVisibility: "hidden" }}
>
  <div className="flex flex-col justify-end items-center text-left h-full">
    <p className="text-base">{backText}</p>
  </div>
</motion.div>

    </div>
  );
};

const WhatSetsUsApart = () => {
  const { language } = useChangeLanguageContext();

  // Translation dictionary
  const translations = {
    en: {
      sectionTitle: "What sets us apart",
      features: [
        {
          icon: <Target className="w-12 h-12 text-white text-left" />,
          title: "Market Certainty",
          backText:
            "We don't rely on predictions—we use predefined parameters like interest rates and options premiums to drive our strategies.",
        },
        {
          icon: <Shield className="w-12 h-12 text-white" />,
          title: "Risk Management",
          backText:
            "Every position we take is fully hedged, ensuring minimized risk and stable returns.",
        },
        {
          icon: <Castle className="w-12 h-12 text-white" />,
          title: "Quantitative Trading",
          backText:
            "Our strategies leverage advanced trading systems across options and futures markets for precision and efficiency.",
        },
      ],
    },
    nl: {
      sectionTitle: "Wat ons onderscheidt",
      features: [
        {
          icon: <Target className="w-12 h-12 text-white text-left" />,
          title: "Resultaat ongeacht marktrichting",
          backText:
            "Door strategisch te handelen op basis van meetbare marktdata behalen we resultaten onafhankelijk van de richting van de markt. Niet de trend telt, maar het benutten van beweging.",
        },
        {
          icon: <Shield className="w-12 h-12 text-white" />,
          title: "Risicobeheer",
          backText:
            "Risico wordt beperkt door systematische hedging en dynamische position sizing. Onze systemen passen positiegroottes automatisch aan op basis van actuele marktdata en volatiliteit, met als doel stabiele prestaties onder alle omstandigheden.",
        },
        {
          icon: <Castle className="w-12 h-12 text-white" />,
          title: "Kwantitatieve systemen",
          backText:
            "Emotie heeft geen plaats in onze strategie. Onze kwantitatieve systemen volgen vooraf gedefinieerde regels en datagedreven logica, waardoor elke beslissing consistent, reproduceerbaar en vrij van subjectieve invloeden is.",
        },
      ],
    }
  };

  const currentLanguageData = translations[language];

  return (
    <section className="py-16 px-4 bg-[#EEF4F5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {currentLanguageData.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentLanguageData.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              index={index}
              backText={feature.backText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;