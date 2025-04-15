import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Settings, AlertTriangle } from 'lucide-react';
import "../landingPage/component.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

type RiskCardType ={ 
    title: string;
    description: string;
    measures: string;
    icon: ReactNode;
    index: number;
}

const RiskCard = ({ title, description, measures, icon, index }: RiskCardType) => {
  return (
    <motion.div 
      className="bg-[#DDE6E9] rounded-[11px] p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="bg-gray-900 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-5"
        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
      >
        {icon}
      </motion.div>
      
      <h3 className="font-bold mb-3 md:text-[21.89px] text-[#192227] text-[18.71px] inter">{title}</h3>
      
      <p className="font-normal mb-4 text-[14.92px] md:text-[17.45px] text-[#1A1A1A]">{description}</p>
      
      <div>
        <span className="font-normal mb-4 text-[14.92px] md:text-[17.45px] text-[#1A1A1A]">{measures.split(':')[0]}:</span>
        <span className="font-normal mb-4 text-[14.92px] md:text-[17.45px] text-[#1A1A1A]"> {measures.split(':')[1]}</span>
      </div>
    </motion.div>
  );
};

const WhatSetsUsApart = () => {
  const { language } = useChangeLanguageContext();

  const content = {
    en: {
      sectionTitle: "What sets us apart",
      riskItems: [
        {
          title: "Liquidity Risk",
          description: "The inability to easily exit a position due to the lack of liquidity of the investment instrument being used.",
          measures: "Measures: Trading in the most liquid markets (S&P 500). Trading across various exchanges and brokers.",
          icon: <BarChart size={24} className="text-white" />
        },
        {
          title: "Execution Risk",
          description: "The risk of your order not being fully or not executed at all due to a technical issue.",
          measures: "Measures: Automated risk management scenarios, 24/7 human monitoring, backups, testing periods.",
          icon: <Settings size={24} className="text-white" />
        },
        {
          title: "Counterparty Risk",
          description: "The probability that a particular exchange will not be able to make the required payments for their debt obligations.",
          measures: "Measures: Diversification across the largest and safest exchanges.",
          icon: <AlertTriangle size={24} className="text-white" />
        }
      ]
    },
    nl: {
      sectionTitle: "Wat ons onderscheidt",
      riskItems: [
        {
          title: "Liquiditeitsrisico",
          description: "Het onvermogen om gemakkelijk uit een positie te stappen vanwege het gebrek aan liquiditeit van het gebruikte beleggingsinstrument.",
          measures: "Maatregelen: Handelen in de meest liquide markten (S&P 500). Handelen via verschillende beurzen en brokers.",
          icon: <BarChart size={24} className="text-white" />
        },
        {
          title: "Uitvoeringsrisico",
          description: "Het risico dat uw order niet volledig of helemaal niet wordt uitgevoerd vanwege een technisch probleem.",
          measures: "Maatregelen: Geautomatiseerde risicobeheerscenario's, 24/7 menselijke monitoring, back-ups, testperiodes.",
          icon: <Settings size={24} className="text-white" />
        },
        {
          title: "Tegenpartijrisico",
          description: "De kans dat een bepaalde beurs niet in staat zal zijn om de vereiste betalingen voor hun schuldverplichtingen te doen.",
          measures: "Maatregelen: Diversificatie over de grootste en veiligste beurzen.",
          icon: <AlertTriangle size={24} className="text-white" />
        }
      ]
    }
  };

  // Use current language or fallback to English
  const currentContent = content[language] || content.en;

  return (
    <section className="bg-[#EEF4F5] py-16 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{currentContent.sectionTitle}</h2>
          <div className="w-24 h-1 bg-yellow-400"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentContent.riskItems.map((item, index) => (
            <RiskCard 
              key={index}
              title={item.title}
              description={item.description}
              measures={item.measures}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;