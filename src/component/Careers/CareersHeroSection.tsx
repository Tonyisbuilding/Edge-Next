import React from 'react';
import { motion } from 'framer-motion';

const JoinTheTeam = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      } 
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left content */}
          <motion.div className="w-full lg:w-1/2 max-w-lg" variants={itemVariants}>
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
              We integrate advanced financial modeling, quantitative 
              research, and state-of-the-art technology to optimize 
              market efficiency and drive liquidity.
              Our team of experts collaborates to develop innovative 
              trading strategies that shape the financial landscape of 
              tomorrow.
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
            variants={itemVariants}
          >
            {/* Main profile image */}
            <motion.div 
              className="rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 border-4 border-white shadow-xl relative z-10"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src="/api/placeholder/400/400" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Red circle */}
              <motion.div 
                className="absolute top-1/4 right-0 h-4 w-4 bg-red-500 rounded-full"
                variants={circleVariants}
                custom={1}
              />
              
              {/* Green circle */}
              <motion.div 
                className="absolute top-0 right-1/3 h-3 w-3 bg-green-500 rounded-full"
                variants={circleVariants}
                custom={2}
              />
              
              {/* Blue circle */}
              <motion.div 
                className="absolute bottom-1/4 right-1/4 h-4 w-4 bg-blue-500 rounded-full"
                variants={circleVariants}
                custom={3}
              />
              
              {/* Light blue circle */}
              <motion.div 
                className="absolute right-10 bottom-10 h-6 w-6 bg-teal-300 rounded-full opacity-70"
                variants={circleVariants}
                custom={4}
              />
              
              {/* Purple dot */}
              <motion.div 
                className="absolute right-1/3 bottom-1/3 h-2 w-2 bg-purple-400 rounded-full"
                variants={circleVariants}
                custom={5}
              />

              {/* Team member small avatars */}
              <motion.div 
                className="absolute top-10 right-10 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-md"
                variants={circleVariants}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src="/api/placeholder/100/100" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 right-0 h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md"
                variants={circleVariants}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src="/api/placeholder/100/100" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 right-5 h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-md"
                variants={circleVariants}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src="/api/placeholder/100/100" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTheTeam;