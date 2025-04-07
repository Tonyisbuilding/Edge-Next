import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";

const InstitutionalInvestmentSolutions = () => {
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
      <h2 className=" text-[1.8rem] md:text-4xl font-bold text-center mb-12 text-gray-800">
        Institutional Investment Solutions
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
            <div className="flex-shrink-0   flex items-center justify-center">
              <img
                src={images.institution.directFundIcon}
                alt="Research team analyzing market data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="direct-fund-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            Direct Fund Participation
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>
              Funds with a fund-of-funds structure can easily and directly
              participate in our fund. This enables you to fully leverage our
              market-neutral strategy.
            </p>
            <p>
              Designed for institutional clients with investments starting from
              €500,000.
            </p>
            <p>Management Fee: 1% per year</p>
            <p>Performance Fee: 12.5% per month (high watermark)</p>
          </div>
        </motion.div>

        {/* Card 2: API-Based SaaS Solutions */}
        <motion.div
          className="bg-[#DDE6E9] rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="api-saas-title"
        >
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0  flex items-center justify-center text-blue-500">
              <img
                src={images.institution.apiIcon}
                alt="Research team analyzing market data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="api-saas-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            API-Based SaaS Solutions
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>
              For funds without a fund-of-funds structure, we offer tailor-made
              solutions, allowing you to participate for your own account via an
              API.
            </p>
            <p>
              This is done through a SaaS agreement (Software as a Service),
              giving you the flexibility to integrate our strategies within your
              own fund environment.
            </p>
            <p>Customized fee structure based on requirements</p>
          </div>
        </motion.div>

        {/* Card 3: Performance-Based Fee Structure */}
        <motion.div
          className="bg-[#DDE6E9] rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="performance-fee-title"
        >
          <div className="flex justify-start mb-4">
            <div className="flex-shrink-0   flex items-center justify-center text-blue-500">
              <img
                src={images.institution.performance_basedIcon}
                alt="Research team analyzing market data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            id="performance-fee-title"
            className="text-xl font-bold mb-3 text-gray-800"
          >
            Performance-Based Fee Structure
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>
              Our fee structure is designed to align our interests with yours.
              We only succeed when you succeed.
            </p>
            <p>
              This ensures we remain focused on delivering consistent
              performance rather than simply accumulating assets under
              management.
            </p>
            <p>Reduced fees for larger allocations</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstitutionalInvestmentSolutions;
