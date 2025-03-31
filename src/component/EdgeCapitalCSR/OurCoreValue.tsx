import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, BookOpen, Users, Rocket, Shield } from 'lucide-react';

const OurCoreValues = () => {
  
const values = [
    {
      title: "Sustainability",
      icon: <Recycle size={32} className='text-[#192227]' />,
      description: "We integrate sustainable practices into all our processes and strive to minimize our ecological footprint. We invest in projects and initiatives that contribute to a greener future.",
      measures: "Measures: Trading in the most liquid markets (S&P 500). Trading across various exchanges and brokers."
    },
    {
      title: "Transparency",
      icon: <BookOpen size={32} className='text-[#192227]' />,
      description: "We believe in open communication about our activities and impact. We regularly report on our progress and the outcomes of our CSR initiatives to keep our stakeholders well-informed.",
      measures: "Measures: Automated risk management scenarios, 24/7 human monitoring, backups, testing periods."
    },
    {
      title: "Social Impact",
      icon: <Users size={32} className='text-[#192227]' />,
      description: "We are determined to make a positive contribution to the communities in which we operate. Through our Edge Impact label and initiatives, such as Edge Cares (mid-2025) and the Edge Horizon Foundation (2026), we support charities and projects that create impact both locally and globally.",
      measures: "Measures: Diversification across the largest and safest exchanges."
    },
    {
      title: "Innovation",
      icon: <Rocket size={32} className='text-[#192227]' />,
      description: "We embrace innovation as a means to develop sustainable solutions and enhance our impact. By utilizing advanced technologies and methods, we improve our processes and the services we provide to our clients.",
      measures: "Measures: Diversification across the largest and safest exchanges."
    },
    {
      title: "Ethical Practices",
      icon: <Shield size={32} className='text-[#192227]' />,
      description: "We conduct our operations with integrity and respect the rights of everyone affected by our activities. We promote fair working conditions and diversity within our organization and in our business relationships",
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
              className="bg-[#DDE6E9] rounded-lg p-6 h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#192227] mb-3">
                {value.title}
              </h3>
              <p className="text-[#1A1A1A] mb-4">
                {value.description}
              </p>
              <p className="text-[#1A1A1A] text-sm hidden">
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