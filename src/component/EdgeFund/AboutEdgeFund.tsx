import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import "../landingPage/component.css";

const AboutEdgeFund = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-0 py-16 md:py-24 md:mt-[5rem]">
      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-3  overflow-hidden"
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
            <h2 className="text-3xl font-semibold md:text-[30px] text-[17.86px] text-gray-900 mb-4">
              About Edge Fund
            </h2>
            <div className="w-24 h-[1.2px] bg-yellow-400 mb-6"></div>

            <p className="text-gray-800 mb-8 inter font-medium md:text-[20px] text-[11.91px]">
              EdgeFund uses an automated, volatility-driven strategy focused on
              selling options while minimizing risk through delta hedging.
              Futures are used for hedging, with the S&P 500 as the primary
              market due to its liquidity. Additionally, the fund employs
              interest rate and FX arbitrage to enhance returns.
            </p>

            <p className=" font-bold text-gray-900 mb-8 inter md:text-[18px] text-[10.72px]">
              Minimum investment: €100,000.
            </p>

            <motion.button
              className="bg-[#206A7C] text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Participate
            </motion.button>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="w-full h-full relative ">
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
