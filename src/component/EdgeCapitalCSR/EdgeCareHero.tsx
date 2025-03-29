import React from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";

const EdgeCareHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden md:mt-[5rem]">
      <div className="w-full h-full  bg-[#0000008e] absolute z-10" />
      {/* Background Image */}
      <div className="absolute inset-0 bg-green-800 bg-opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        <img
          src={images.edgeCare.edgecarehero}
          alt="Hands joining together symbolizing partnership and sustainability"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-4xl text-center">
          {/* Title with animation */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Committed To Building A Sustainable Future Together
          </motion.h1>

          {/* Subtitle with animation */}
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Edge Capital, Corporate Social Responsibility drives our mission
            to create lasting value for society, the environment, and our
            stakeholders.
          </motion.p>

          {/* CTA Button with animation and hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-teal-600 text-white rounded-md text-sm md:text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0d9488", // Tailwind teal-600 slightly brighter
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Partner with Edge Capital"
            >
              <a href="mailto:info@edge-capital.nl">Partner With Us</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdgeCareHero;
