import React from "react";
import { motion } from "framer-motion";

const FundCostStructure = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const starContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  // Fund class data
  const fundClasses = [
    {
      id: "class-i",
      title: "Participation Class I",
      stars: 1,
      description: "Perfect for individual investors and small family offices.",
      investment: "€100K-€250K",
      buttonText: "Request Information",
      buttonClass: "bg-gray-900 hover:bg-gray-800",
      features: [
        "1.5% Management Fee (per year)",
        "22.5% Profit Sharing (per month) High",
        "High Watermark Protection",
        "Monthly Performance Reports",
      ],
    },
    {
      id: "class-ii",
      title: "Participation Class II",
      stars: 2,
      description:
        "Ideal for established investors and medium-sized institutions.",
      investment: "€250K-€500K",
      buttonText: "Book a consultation",
      buttonClass: "bg-gradient-to-r from-[#5A7B8D] to-[#192227] hover:bg-slate-700",
      features: [
        "Everything in Class I +",
        "1.25% Management Fee (per year)",
        "17.5% Profit Sharing (per month)",
        "Dedicated Account Manager",
        "Priority Support Channel",
      ],
    },
    {
      id: "class-iii",
      title: "Participation Class III",
      stars: 3,
      description:
        "Built for institutional investors and large family offices.",
      investment: "€500K+",
      buttonText: "Request Information",
      buttonClass: "bg-gray-900 hover:bg-gray-800",
      features: [
        "Everything in Class II +",
        "1% Management Fee (per year)",
        "12.5% Profit Sharing (per month)",
        "Custom Investment Strategy",
        "Quarterly Strategy Reviews",
      ],
    },
  ];

  // Star component
  const StarRating = ({ count }:{count: number}) => (
    <motion.div className="flex gap-1" variants={starContainerVariants}>
      {[...Array(count)].map((_, i) => (
        <motion.div key={i} variants={starVariants}>
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );

  // Check icon
  const CheckIcon = () => (
    <div className="flex-shrink-0 w-5 h-5 text-green-500">
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl font-bold text-gray-900 border-b border-gray-300 pb-2"
          >
            Fund Cost Structure
          </motion.h2>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 hover:cursor-pointer">
            {fundClasses.map((fundClass) => (
              <motion.div
                key={fundClass.id}
                initial="hidden"
                whileInView={"visible"}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <StarRating count={fundClass.stars} />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {fundClass.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {fundClass.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-gray-900">
                    {fundClass.investment}
                  </p>
                  <p className="text-sm text-gray-500">minimum investment</p>

                  <button
                    className={`mt-4 w-full py-3 px-4 rounded-md text-white font-medium ${fundClass.buttonClass} transition-colors duration-300`}
                  >
                    {fundClass.buttonText}
                  </button>

                  <div className="mt-6 space-y-3">
                    {fundClass.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={featureVariants}
                        className="flex items-center space-x-3"
                      >
                        <CheckIcon />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {fundClasses.map((fundClass) => (
              <motion.div
                key={fundClass.id}
                variants={cardVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <StarRating count={fundClass.stars} />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {fundClass.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {fundClass.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-gray-900">
                    {fundClass.investment}
                  </p>
                  <p className="text-sm text-gray-500">minimum investment</p>

                  <button
                    className={`mt-4 w-full py-3 px-4 rounded-md text-white font-medium ${fundClass.buttonClass} transition-colors duration-300`}
                  >
                    {fundClass.buttonText}
                  </button>

                  <div className="mt-6 space-y-3">
                    {fundClass.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={featureVariants}
                        className="flex items-center space-x-3"
                      >
                        <CheckIcon />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Watermark Explanation Note */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={noteVariants}
            className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4 mt-8"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-teal-50 rounded-full flex 
            items-center justify-center relative top-[5rem] md:top-[.5rem]">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="flex-1 items-center justify-center">
              <h4 className="text-lg font-semibold text-gray-900">
                High Watermark Principle Explained
              </h4>
              <p className="mt-1 text-gray-600">
                Our commission structure protects your investments with the High
                Watermark principle
              </p>
            </div>
            <button className="text-[#002731] hover:text-[#002731c0] font-medium transition-colors
             duration-300 shadow-sm rounded-md p-3 flex items-center justify-center relative top-[5rem] 
             md:top-[.4rem]">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FundCostStructure;
