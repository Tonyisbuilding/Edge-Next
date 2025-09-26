import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import "../landingPage/component.css";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";


// Translations object
const translations = {
  en: {
    title: "About Correlation Arbitrage Fund",
    description:
      "The Correlation Arbitrage Fund is an advanced variation of the classic index arbitrage strategy. We have carefully selected over 30 currency combinations, consisting of strong and liquid currencies such as the Euro (EUR), uS Dollar (USD), Canadian Dollar (CAD), New Zealand Dollar (NZD), and Australian Dollar (AUD). Our strategy specifically targets currency pairs that share a common currency, such as EUR/CAD or USD/CAD. These pairs historically exhibit strong intercorrelations and predictable price patterns. The trading approach is based on the principle of mean reversion — the idea that exchange rates tend to revert to their average ratio. When our models detect a significant deviation from this historical pattern, a position is automatically taken to anticipate a correction toward the mean.",
    minimumInvestment: "Minimum participation: €100,000",
    participateButton: "Participate"
  },
  nl: {
    title: "Over Correlation Arbitrage Fund",
    description:
      "Het Correlation Arbitrage Fund is een geavanceerde variant op de klassieke index-arbitragestrategie. We hebben zorgvuldig meer dan 30 valutacombinaties geselecteerd, bestaande uit sterke en liquide valuta zoals de Euro (EUR), Amerikaanse dollar (USD), Canadese dollar (CAD), Nieuw-Zeelandse dollar (NZD) en Australische dollar (AUD). Onze strategie richt zich specifiek op valutaparen die een gemeenschappelijke munt delen, zoals EUR/CAD of USD/CAD. Deze paren vertonen historisch sterke onderlinge correlaties en voorspelbare prijspatronen. De handelsaanpak is gebaseerd op het principe van mean reversion – het idee dat wisselkoersen de neiging hebben terug te keren naar hun gemiddelde verhouding. Wanneer onze modellen een significante afwijking van dit historische patroon detecteren, wordt automatisch een positie ingenomen die inspeelt op een verwachte correctie richting het gemiddelde.",
    minimumInvestment: "Minimale investering: €100.000.",
    participateButton: "Deelnemen"
  }
};


const AboutEdgeFund = () => {
  const { language } = useChangeLanguageContext();
  const content = translations[language] || translations.en;

  return (
    <section className="w-full max-w-8xl mx-auto px-0 py-16 md:py-16 md:mt-[5rem] mt-[3rem]">
      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-3 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#EEF4F5] rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-black md:text-[35px] text-[20.86px] text-gray-900 mb-4 relative inline-block">
              {content.title}
              <img
                src={images.landingPage.Brush} 
                alt="Brush underline"
                className="absolute left-0 bottom-[-8px] w-auto h-[6px] pointer-events-none"
              />
            </h2>


            <p className="text-gray-800 mb-8 font-medium md:text-[16px] text-[13.91px]">
              {content.description}
            </p>

            <p className="font-bold text-gray-900 mb-8 inter md:text-[18px] text-[10.72px]">
              {content.minimumInvestment}
            </p>
            <Link to="/participate">
              <motion.button
                className="bg-[#008487] text-white px-8 py-3 rounded-full 
                shadow-[0_4px_10px_rgba(32,106,124,0.3)] hover:shadow-[0_8px_20px_rgba(32,106,124,0.45)] 
                hover:bg-[#008487] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.participateButton}
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-auto relative bottom-[1.5rem] md:bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="w-full h-full relative pt-[40px]">
            <img
              src={images.edgefund.edgehero}
              alt="Edge Capital team meeting"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutEdgeFund;