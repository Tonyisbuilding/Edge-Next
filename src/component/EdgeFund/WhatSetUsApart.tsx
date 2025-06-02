import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Settings, AlertTriangle } from 'lucide-react';
import "../landingPage/component.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import images from "@/constant/images"; // Ensure brush image is in here

type RiskCardType = {
  title: string;
  description: string;
  measures: string | ReactNode;
  icon: ReactNode;
  index: number;
};

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

      <h3 className="font-bold mb-3 md:text-[21.89px] text-[#000C0C] text-[18.71px] inter">{title}</h3>

      <p className="font-normal mb-4 text-[14.92px] md:text-[15px] text-[#1A1A1A]">{description}</p>

      <div className="text-[14.92px] md:text-[15px] text-[#1A1A1A] font-normal">
        {measures}
      </div>
    </motion.div>
  );
};

const WhatSetsUsApart = () => {
  const { language } = useChangeLanguageContext();

  const content = {
    en: {
      sectionTitle: "Risk",
   riskItems: [
  {
    title: "Correlation Breakdown",
    description:
      "The strategy assumes that currency pairs sharing a common base tend to move according to historical patterns. In extreme market conditions (e.g., geopolitical shocks, central bank interventions), these correlations can temporarily break down.",
    measures: (
      <>
        <strong>Measures:</strong> Use of dynamic models that detect deviations and measure their intensity. When correlations structurally diverge, the system can reduce, neutralize, or switch to alternative currency pairs. Real-time monitoring also enables timely intervention.
      </>
    ),
    icon: <BarChart size={24} className="text-white" />,
  },
  {
    title: "Delayed Correlation",
    description:
      "Sometimes, the return to the mean takes longer than expected, leading to prolonged exposure to market fluctuations and increased risk of loss.",
    measures: (
      <>
        <strong>Measures:</strong> Time-based exit rules (time stops) and maximum drawdown limits are implemented. A position is closed if movement does not occur within a reasonable period or risk increases beyond acceptable thresholds. Most positions are actively hedged, partially offsetting potential negative outcomes. This helps lower portfolio volatility and keeps risks manageable even during unexpected market shifts.
      </>
    ),
    icon: <Settings size={24} className="text-white" />,
  },
  {
    title: "Technical Failure",
    description:
      "If the automated system fails or lags, it may not respond accurately to market fluctuations, leading to missed opportunities or uncontrolled losses.",
    measures: (
      <>
        <strong>Measures:</strong> Use of redundant VPS hosting with 99.99% uptime, automatic backups, and failover systems. Multiple alert levels are also in place to detect technical or market-related anomalies for immediate manual or automated response.
      </>
    ),
    icon: <AlertTriangle size={24} className="text-white" />,
  },
]

    },
    nl: {
      sectionTitle: "Risico",
   riskItems: [
  {
    title: "Correlatiebreuk",
    description:
      "De strategie gaat uit van de veronderstelling dat valutaparen met een gedeelde munt zich volgens een historisch patroon bewegen. Bij extreme marktomstandigheden (bijv. geopolitieke schokken, centrale bankinterventies) kunnen deze correlaties tijdelijk wegvallen.",
    measures: (
      <>
        <strong>Maatregelen:</strong> Gebruik van dynamische modellen die afwijkingen herkennen én de intensiteit ervan meten. Wanneer correlaties structureel afwijken, kan het systeem posities verlagen, neutraliseren of overschakelen naar andere valutaparen. Daarnaast helpt real-time monitoring om tijdig in te grijpen.
      </>
    ),
    icon: <BarChart size={24} className="text-white" />,
  },
  {
    title: "Late correlatie",
    description:
      "Soms kan het herstel naar het gemiddelde langer duren dan verwacht, wat leidt tot een langere blootstelling aan marktfluctuaties en verhoogde kans op verlies.",
    measures: (
      <>
        <strong>Maatregelen:</strong> Er zijn tijdsgebonden exitregels (time stops) en maximum drawdown-limieten geïmplementeerd. Zo wordt een positie gesloten wanneer de beweging niet binnen een redelijke termijn optreedt of het risico te hoog oploopt. Daarnaast worden posities voor een groot deel actief afgedekt (hedging), waardoor potentiële negatieve resultaten deels worden gecompenseerd. Dit helpt om de volatiliteit van de portefeuille te verlagen en risico’s beheersbaar te houden, zelfs bij onverwachte marktbewegingen.
      </>
    ),
    icon: <Settings size={24} className="text-white" />,
  },
  {
    title: "Technisch falen",
    description:
      "Als het geautomatiseerde systeem uitvalt of vertraagd is, kan het niet accuraat reageren op marktschommelingen. Dit kan leiden tot gemiste kansen of ongecontroleerde verliezen.",
    measures: (
      <>
        <strong>Maatregelen:</strong> Gebruik redundant VPS-hosting met 99,99% uptime, automatische backups en failover-systemen. Daarnaast zijn meerdere waarschuwingsniveaus geïmplementeerd om technische of markgerelateerde afwijkingen direct te signaleren en handmatig of automatisch in te kunnen grijpen.
      </>
    ),
    icon: <AlertTriangle size={24} className="text-white" />,
  },
]

    }
  };

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
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-bold text-black relative z-10">
              {currentContent.sectionTitle}
            </h2>
            <img
              src={images.landingPage.Brush}
              alt="Brush underline"
              className="absolute bottom-[-6px] left-0 w-auto h-[5px] z-0"
            />
          </div>
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
