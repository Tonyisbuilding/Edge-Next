import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";

const JoinTheTeam = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 overflow-hidden bg-white mt-[5rem]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-[20%] lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left content */}
          <motion.div
            className="w-full lg:w-1/2 max-w-lg"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Join the team
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-700 mb-8"
              variants={itemVariants}
            >
              We integrate advanced financial modeling, quantitative research,
              and state-of-the-art technology to optimize market efficiency and
              drive liquidity. Our team of experts collaborates to develop
              innovative trading strategies that shape the financial landscape
              of tomorrow.
            </motion.p>
            <motion.a
              href="#positions"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open positions ↓
            </motion.a>
          </motion.div>

          {/* Right content with profile image and decorative circles */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
            variants={circleVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={images.form.career}
                alt="Research team analyzing market data"
                className="w-[50%] md:w-full h-full object-cover mt-[2rem] md:mt-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTheTeam;
