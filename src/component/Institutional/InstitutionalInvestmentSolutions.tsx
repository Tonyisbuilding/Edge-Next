import React from 'react';
import { motion } from 'framer-motion';

const InstitutionalInvestmentSolutions = () => {
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
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
          className="bg-gray-100 rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="direct-fund-title"
        >
          <div className="flex justify-start mb-4">
            <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 id="direct-fund-title" className="text-xl font-bold mb-3 text-gray-800">Direct Fund Participation</h3>
          <div className="text-gray-700 space-y-2">
            <p>
              Funds with a fund-of-funds structure can easily and directly participate in our fund. This enables you to fully leverage our market-neutral strategy.
            </p>
            <p>
              Designed for institutional clients with investments starting from €500,000.
            </p>
            <p>
              Management Fee: 1% per year
            </p>
            <p>
              Performance Fee: 12.5% per month (high watermark)
            </p>
          </div>
        </motion.div>

        {/* Card 2: API-Based SaaS Solutions */}
        <motion.div 
          className="bg-gray-100 rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="api-saas-title"
        >
          <div className="flex justify-start mb-4">
            <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 id="api-saas-title" className="text-xl font-bold mb-3 text-gray-800">API-Based SaaS Solutions</h3>
          <div className="text-gray-700 space-y-2">
            <p>
              For funds without a fund-of-funds structure, we offer tailor-made solutions, allowing you to participate for your own account via an API.
            </p>
            <p>
              This is done through a SaaS agreement (Software as a Service), giving you the flexibility to integrate our strategies within your own fund environment.
            </p>
            <p>
              Customized fee structure based on requirements
            </p>
          </div>
        </motion.div>

        {/* Card 3: Performance-Based Fee Structure */}
        <motion.div 
          className="bg-gray-100 rounded-lg p-6 shadow-sm"
          variants={cardVariants}
          aria-labelledby="performance-fee-title"
        >
          <div className="flex justify-start mb-4">
            <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
          </div>
          <h3 id="performance-fee-title" className="text-xl font-bold mb-3 text-gray-800">Performance-Based Fee Structure</h3>
          <div className="text-gray-700 space-y-2">
            <p>
              Our fee structure is designed to align our interests with yours. We only succeed when you succeed.
            </p>
            <p>
              This ensures we remain focused on delivering consistent performance rather than simply accumulating assets under management.
            </p>
            <p>
              Reduced fees for larger allocations
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstitutionalInvestmentSolutions;