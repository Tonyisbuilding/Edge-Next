import React from 'react';
import { motion } from 'framer-motion';

const ReachOut = () => {
  return (
    <section className="bg-teal-600 text-white py-16 md:py-24 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 gap-4 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          
          {/* Text content */}
          <motion.div 
            className="mb-10 md:mb-0 md:max-w-xl" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Please feel free to reach out to us!
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Looking to collaborate or have questions about our services? We'd love to 
              connect and explore how Edge Capital can help you achieve your financial goals.
            </motion.p>
          </motion.div>
          
          {/* Email icon/graphic */}
          <motion.div 
            className="w-32 md:w-64 lg:w-72 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            <svg 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <path 
                d="M150 50H50C41.716 50 35 56.716 35 65V135C35 143.284 41.716 150 50 150H150C158.284 150 165 143.284 165 135V65C165 56.716 158.284 50 150 50Z" 
                stroke="#A5D7DF" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M165 65L112.5 100C104.492 105.833 95.508 105.833 87.5 100L35 65" 
                stroke="#A5D7DF" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M70 125H40" 
                stroke="#A5D7DF" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M150 80H100" 
                stroke="#A5D7DF" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M120 100H100" 
                stroke="#A5D7DF" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;