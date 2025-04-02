import React from "react";
import { motion } from "framer-motion";

const InvestmentPerformance = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -6, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      backgroundColor: "#185663",
      transition: { duration: 0.3 },
    },
  };

  const performanceData = [
    {
      participation: "€100,000",
      percentage: "+0.32%",
      metrics: [
        { label: "Net return 2024:", value: "+18.47%" },
        { label: "Net return since inception (2021):", value: "+116.99%" },
        { label: "Average annual return since inception:", value: "+22.62%" },
      ],
    },
    {
      participation: "€250,000",
      percentage: "+0.33%",
      metrics: [
        { label: "Net return 2024:", value: "+19.76%" },
        { label: "Net return since inception (2021):", value: "+130.22%" },
        { label: "Average annual return since inception:", value: "+24.44%" },
      ],
    },
    {
      participation: "€500,000",
      percentage: "+0.34%",
      metrics: [
        { label: "Net return 2024:", value: "+21.28%" },
        { label: "Net return since inception (2021):", value: "+144.80%" },
        { label: "Average annual return since inception:", value: "+26.37%" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        variants={cardVariants}
        className="text-3xl lg:text-[3rem] font-bold text-gray-900  mb-6 text-left underline"
      >
        Returns
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {performanceData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-[20px] shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="p-7 border-b border-gray-100 bg-gradient-to-r from-[rgba(32,106,124,0.08)] to-transparent flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm border border-gray-100">
                  <svg
                    className="w-9 h-6"
                    viewBox="0 0 36 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 22 L8 14 L14 16 L20 10 L26 6 L34 4"
                      stroke="#206A7C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M2 22 L8 14 L14 16 L20 10 L26 6 L34 4 L34 22 L2 22"
                      fill="rgba(32, 106, 124, 0.1)"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-[#206A7C]">
                  February
                </span>
              </div>
              <span className="text-base font-bold text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full">
                {card.percentage}
              </span>
            </div>
            <div className="p-7">
              <div className="inline-block bg-gray-100 text-gray-900 font-medium text-sm px-4 py-2 rounded-full mb-7">
                (participation from {card.participation})
              </div>
              <ul className="mb-7">
                {card.metrics.map((metric, i) => (
                  <li
                    key={i}
                    className={`flex justify-between items-center pb-3 ${
                      i === card.metrics.length - 1
                        ? ""
                        : "border-b border-gray-100"
                    }`}
                  >
                    <span className="text-gray-600 font-medium text-sm">
                      {metric.label}
                    </span>
                    <span className="text-emerald-600 font-bold text-base before:content-['↑'] before:mr-1">
                      {metric.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mb-7">
                Download our factsheet for a detailed overview.
              </p>
              <motion.button
              onClick={()=> window.open('https://docs.google.com/forms/d/e/1FAIpQLSfFL8uncgP8CUHx8fM-1VQrV-Dc8Q3eULrDpP7buGC7zDrInQ/viewform?usp=header','_blank')}
                variants={buttonVariants}
                whileHover="hover"
                className="w-full bg-[#206A7C] text-white px-6 py-3.5 rounded-full font-semibold 
                text-sm shadow-sm hover:cursor-pointer"
              >
                Request factsheet
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <motion.button
          whileHover={{ y: -2, backgroundColor: "#185663" }}
          transition={{ duration: 0.3 }}
          className="bg-[#206A7C] text-white px-9 py-4.5 rounded-[40px] font-semibold flex items-center gap-3 shadow-md max-w-md w-full justify-center"
        >
          {/* <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">ℹ</span> */}
          Receive the information memorandum
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#192227] text-white p-9 rounded-[20px] shadow-md relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-black/10" />
        <div className="flex items-center gap-3 mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9V13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-xl font-bold">General disclaimer on returns:</h3>
        </div>
        <p className="text-sm leading-relaxed">
          Bolder Funds Services B.V. (administrator) calculates the fund's
          results on a monthly basis. The above results are net of the 22.5%
          profit share and the 1.50% annual management fee. The returns from
          September 1, 2022, represent the actual results of the fund. Returns
          prior to September 1, 2022, are based on forward testing (live
          account) and not on backtesting. These returns should not be
          considered as an indication of future results.
        </p>
      </motion.div>
    </div>
  );
};

export default InvestmentPerformance;
