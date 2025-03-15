import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineData } from "@/constant/data";



const CompanyTimeline = () => {
  

  const [activeYear, setActiveYear] = useState(0);

  const handlePrevYear = () => {
    setActiveYear((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNextYear = () => {
    setActiveYear((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  const handleYearClick = (index:number) => {
    setActiveYear(index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          For Over 8 Years
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We're building a platform that gives investors an edge. By focusing on innovation and growth, we're transforming the financial landscape.
        </motion.p>
        
        {/* Timeline Navigation */}
        <div className="relative flex items-center mb-16">
          <button 
            onClick={handlePrevYear}
            className="absolute left-0 bg-teal-700 text-white p-2 rounded-md hover:bg-teal-800 transition-colors z-10"
            aria-label="Previous year"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="w-full overflow-hidden mx-10">
            <div className="relative">
              {/* Timeline Bar */}
              <div className="h-1 bg-teal-700 w-full absolute top-1/2 -translate-y-1/2"></div>
              
              {/* Year Markers */}
              <div className="flex justify-between relative  mb-[1rem]">
                {timelineData.map((item, index) => (
                  <div key={item.year} className="flex flex-col items-center">
                    <button
                      onClick={() => handleYearClick(index)}
                      className={`relative z-10 transition-all duration-300 ${
                        index === activeYear 
                          ? "text-teal-700 font-bold" 
                          : "text-gray-500 hover:text-teal-600"
                      }`}
                    >
                      <div className={` h-10 w-10 flex items-center justify-center mb-2 transition-colors duration-300 `}>
                        {index === activeYear && (
                          <motion.div
                            layoutId="activeYearIndicator"
                            className="absolute inset-[-1]   top-[2.2rem] rounded-full border-2 border-teal-700 w-[3rem] h-[3rem]"
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </div>
                      <span className="block text-sm md:text-base">{item.year}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleNextYear}
            className="absolute right-0 bg-teal-700 text-white p-2 rounded-md hover:bg-teal-800 transition-colors z-10"
            aria-label="Next year"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Content Display */}
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={`year-${activeYear}`}
              className="text-3xl font-bold text-teal-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {timelineData[activeYear].year}
            </motion.h3>
            
            <motion.p
              key={`content-${activeYear}`}
              className="text-lg text-gray-800 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {timelineData[activeYear].content}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;