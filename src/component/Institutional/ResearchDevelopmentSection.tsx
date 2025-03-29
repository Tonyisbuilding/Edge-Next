import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";

const ResearchDevelopmentSection = () => {
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
              Research & Development – The Engine Behind Our Success
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8 leading-relaxed md:text-[0.9rem]"
              variants={itemVariants}
            >
              Our research is primarily conducted in-house. Our research
              department focuses on testing a wide range of possibilities in the
              markets and our systems. By continuously testing and simulating
              various market situations, we are better prepared and can
              consistently upgrade our systems.
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
                    alt="Research team analyzing market data"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    In-House Research for Continuous Adaptation
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    Thorough research forms the basis for a successful and
                    sustainable trading strategy. We continuously expand our
                    platform based on input from our research department.
                  </p>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0  flex items-center justify-center text-blue-500">
                  <img
                    src={images.institution.MLIcon}
                    alt="Research team analyzing market data"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    Machine Learning Integration
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    We adapt to new technologies, such as implementing machine
                    learning to enhance our trading parameters and improve
                    prediction accuracy.
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
                    alt="Research team analyzing market data"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    Proprietary Trading Engine
                  </h3>
                  <p className="text-gray-600 md:text-[0.9rem]">
                    We've developed hedgers that can operate on multiple
                    exchanges, providing unparalleled flexibility and
                    efficiency.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="mt-8" variants={itemVariants}>
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 
              rounded transition duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-full min-h-[100px] md:min-h-[400px] bg-gray-100 
            overflow-hidden">
              <img
                src={images.institution.researchdevelopment}
                alt="Research team analyzing market data"
                className="w-full md:h-[95%]  object-cover rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopmentSection;
