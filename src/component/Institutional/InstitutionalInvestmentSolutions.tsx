import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const InstitutionalInvestmentSolutions = () => {
  const { language } = useChangeLanguageContext();

  // Define translations for English and Dutch
  const translations = {
    en: {
      title: "Institutional Investment Solutions",
      cards: [
        {
          title: "Direct Fund Participation",
          content: [
            "Funds with a fund-of-funds structure can easily and directly participate in our fund. This enables you to fully leverage our market-neutral strategy.",
            "Designed for institutional clients with investments starting from €500,000.",
            "Management Fee: 1% per year",
            "Performance Fee: 12.5% per month (high watermark)",
          ],
        },
        {
          title: "API-Based SaaS Solutions",
          content: [
            "For funds without a fund-of-funds structure, we offer tailor-made solutions, allowing you to participate for your own account via an API.",
            "This is done through a SaaS agreement (Software as a Service), giving you the flexibility to integrate our strategies within your own fund environment.",
            "Customized fee structure based on requirements",
          ],
        },
        {
          title: "Performance-Based Fee Structure",
          content: [
            "Our fee structure is designed to align our interests with yours. We only succeed when you succeed.",
            "This ensures we remain focused on delivering consistent performance rather than simply accumulating assets under management.",
            "Reduced fees for larger allocations",
          ],
        },
      ],
      imageAlt: "Research team analyzing market data",
    },
    nl: {
      title: "Institutionele Investeringsoplossingen",
      cards: [
        {
          title: "Directe Fondsdeelname",
          content: [
            "Fondsen met een fonds-van-fondsenstructuur kunnen eenvoudig en direct deelnemen aan ons fonds. Dit stelt u in staat om volledig gebruik te maken van onze marktneutrale strategie.",
            "Ontworpen voor institutionele klanten met investeringen vanaf €500.000.",
            "Beheervergoeding: 1% per jaar",
            "Prestatievergoeding: 12,5% per maand (hoogwatermerk)",
          ],
        },
        {
          title: "API-Gebaseerde SaaS-Oplossingen",
          content: [
            "Voor fondsen zonder een fonds-van-fondsenstructuur bieden we oplossingen op maat, waardoor u via een API voor eigen rekening kunt deelnemen.",
            "Dit gebeurt via een SaaS-overeenkomst (Software as a Service), waardoor u de flexibiliteit krijgt om onze strategieën binnen uw eigen fondsstructuur te integreren.",
            "Aangepaste vergoedingsstructuur op basis van vereisten",
          ],
        },
        {
          title: "Prestatiegebaseerde Vergoedingsstructuur",
          content: [
            "Onze vergoedingsstructuur is ontworpen om onze belangen met de uwe af te stemmen. Wij slagen alleen als u slaagt.",
            "Dit zorgt ervoor dat we ons blijven richten op het leveren van consistente prestaties in plaats van alleen activa onder beheer te accumuleren.",
            "Lagere vergoedingen voor grotere toewijzingen",
          ],
        },
      ],
      imageAlt: "Onderzoeksteam dat marktgegevens analyseert",
    },
  };

  // Select the appropriate content based on language, with fallback to English
  const content = translations[language] || translations.en;

  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-[1.8rem] md:text-4xl font-bold text-center mb-12 text-gray-800">
        {content.title}
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1: Direct Fund Participation */}
        <motion.div
          className="bg-[#DDE6E9] rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="direct-fund-title"
        >
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={images.institution.directFundIcon}
                alt={content.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="direct-fund-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            {content.cards[0].title}
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>{content.cards[0].content[0]}</p>
            <p>{content.cards[0].content[1]}</p>
            <p>{content.cards[0].content[2]}</p>
            <p>{content.cards[0].content[3]}</p>
          </div>
        </motion.div>

        {/* Card 2: API-Based SaaS Solutions */}
        <motion.div
          className="bg-[#DDE6E9] rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="api-saas-title"
        >
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
              <img
                src={images.institution.apiIcon}
                alt={content.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="api-saas-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            {content.cards[1].title}
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>{content.cards[1].content[0]}</p>
            <p>{content.cards[1].content[1]}</p>
            <p>{content.cards[1].content[2]}</p>
          </div>
        </motion.div>

        {/* Card 3: Performance-Based Fee Structure */}
        <motion.div
          className="bg-[#DDE6E9] rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="performance-fee-title"
        >
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0 flex items-center justify-center text-blue-500">
              <img
                src={images.institution.performance_basedIcon}
                alt={content.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="performance-fee-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            {content.cards[2].title}
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>{content.cards[2].content[0]}</p>
            <p>{content.cards[2].content[1]}</p>
            <p>{content.cards[2].content[2]}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstitutionalInvestmentSolutions;