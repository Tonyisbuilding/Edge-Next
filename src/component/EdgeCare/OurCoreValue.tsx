import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, BookOpen, Users, Rocket, Shield } from 'lucide-react';

const OurCoreValues = () => {
  
const values = [
    {
      title: "Sustainability",
      icon: <Recycle size={32} className='text-black' />,
      description: "The inability to easily exit a position due to the lack of liquidity of the investment instrument being used.",
      measures: "Measures: Trading in the most liquid markets (S&P 500). Trading across various exchanges and brokers."
    },
    {
      title: "Transparency",
      icon: <BookOpen size={32} className='text-black' />,
      description: "The risk of your order not being fully or not executed at all due to a technical issue.",
      measures: "Measures: Automated risk management scenarios, 24/7 human monitoring, backups, testing periods."
    },
    {
      title: "Social Impact",
      icon: <Users size={32} className='text-black' />,
      description: "The probability that a particular exchange will not be able to make the required payments for their debt obligations.",
      measures: "Measures: Diversification across the largest and safest exchanges."
    },
    {
      title: "Innovation",
      icon: <Rocket size={32} className='text-black' />,
      description: "The probability that a particular exchange will not be able to make the required payments for their debt obligations.",
      measures: "Measures: Diversification across the largest and safest exchanges."
    },
    {
      title: "Ethical Practices",
      icon: <Shield size={32} className='text-black' />,
      description: "The probability that a particular exchange will not be able to make the required payments for their debt obligations.",
      measures: "Measures: Diversification across the largest and safest exchanges."
    }
  ];


  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-0 bg-white" aria-labelledby="core-values-title">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            id="core-values-title" 
            className="text-3xl md:text-4xl font-bold text-gray-800 inline-block relative"
          >
            Our Core Values
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 mt-1"></div>
          </h2>
        </div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg p-6 h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {value.description}
              </p>
              <p className="text-gray-600 text-sm">
                {value.measures}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCoreValues;