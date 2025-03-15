import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Castle } from 'lucide-react';
import { ReactNode } from 'react';

const FeatureCard = ({ icon, title, index }:{icon: ReactNode; title: string, index:number;}) => {
  return (
    <motion.div
      className="bg-[#206A7C] rounded-lg p-8 flex flex-col  text-white md:h-[60vh] h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-left mt-[60%] md:mt-[70%]">{title}</h3>
    </motion.div>
  );
};

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-white text-left" />,
      title: "Market Certainty"
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Risk Management"
    },
    {
      icon: <Castle  className="w-12 h-12 text-white" />,
      title: "Quantitative Trading"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What sets us apart
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <motion.button
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet our entire team
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;