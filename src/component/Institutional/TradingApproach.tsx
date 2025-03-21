import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BarChart, Settings, DollarSign, Search, Laptop, PieChart } from 'lucide-react';

const TradingApproachSection = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Card data with proper icons and descriptions
  const cards = [
    {
      id: 1,
      icon: <BarChart className="text-white" />,
      title: "Market-Neutral Trading",
      description: ""
    },
    {
      id: 2,
      icon: <Settings className="text-white" />,
      title: "Automated Risk Management",
      description: ""
    },
    {
      id: 3,
      icon: <DollarSign className="text-white" />,
      title: "Scalability & No Overnight Risk",
      description: ""
    },
    {
      id: 4,
      icon: <Search className="text-white" />,
      title: "In-House Research & Development",
      description: ""
    },
    {
      id: 5,
      icon: <Laptop className="text-white" />,
      title: "Multi-Broker Integration",
      description: ""
    },
    {
      id: 6,
      icon: <PieChart className="text-white" />,
      title: "Proven Performance & Risk Metrics",
      description: ""
    }
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="bg-[#206A7C] text-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:px-16 rounded-[4rem] mx-[2rem]" 
      aria-labelledby="trading-approach-title"
    >
      <div className="max-w-6xl mx-auto md:flex">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="mb-10 sm:mb-16 md:w-1/2"
        >
          <h2 
            id="trading-approach-title"
            className="text-3xl sm:text-4xl md:text-[62.09px] font-normal"
          >
            Our Trading Approach
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:w-1/2"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="border border-teal-500/40 rounded-3xl overflow-hidden bg-[#99EBFF26]
               backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/30
                hover:bg-[#99ebffbb] py-[2rem]"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-3 sm:p-4 border-b border-teal-500/40 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium">{card.title}</h3>
                {card.description && <p className="mt-2 text-teal-100 text-sm sm:text-base">{card.description}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TradingApproachSection;