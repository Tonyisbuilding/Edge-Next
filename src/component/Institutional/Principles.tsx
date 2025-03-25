import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for principle data
interface Principle {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

type IconType = 'chart' | 'balance' | 'calculator' | 'handshake' | 'award';

// Principle data
const principles: Principle[] = [
  {
    id: 1,
    title: "Volatility Premium Strategy",
    description: "Our strategy based on ES (S&P 500) and NQ (Nasdaq) options utilizes a model focused on selling volatility and targets short-term systems. We sell options with 0 days to expiration (DTE) at deltas between 0.1 and 0.3 with an asymmetrical preference for the call side.",
    icon: "chart"
  },
  {
    id: 2,
    title: "Dynamic Delta-Hedging",
    description: "Delta-hedging adjusts dynamically based on market volatility, supported by parameters enhanced with machine learning. This allows us to maintain optimal risk management regardless of market conditions.",
    icon: "balance"
  },
  {
    id: 3,
    title: "Risk Management & Scalability",
    description: "By exclusively using 0DTE options on the S&P 500 and Nasdaq, we avoid overnight risks. Moreover, our model offers high scalability of up to €100 million without compromising efficiency or performance.",
    icon: "calculator"
  },
  {
    id: 4,
    title: "Institutional-Grade Collaboration",
    description: "We offer flexible collaboration options through direct fund participation or tailor-made SaaS solutions, allowing various types of investors to benefit from our strategies.",
    icon: "handshake"
  },
  {
    id: 5,
    title: "Proven Performance",
    description: "The strategy shows an average daily expected return of 0.18% gross (before commissions) and 0.12% net (after costs). The win ratio, calculated as the ratio of profitable days to losing days, is 1.82 net and 2.41 gross.",
    icon: "award"
  }
];

const PrinciplesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const principleRefs = useRef<Array<{ current: HTMLDivElement | null }>>([]);

  // Setup observer for scroll detection
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Initialize refs array
    principleRefs.current = Array(principles.length)
      .fill(null)
      .map((_, i) => principleRefs.current[i] || { current: null });
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which principle is currently in view
      for (let i = 0; i < principles.length; i++) {
        const element = principleRefs.current[i]?.current;
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveIndex(i);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render appropriate icon based on principle type
  const renderIcon = (iconType: IconType): JSX.Element | null => {
    switch (iconType) {
      case 'chart':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
            <path d="M18 10l2 -2l2 2"></path>
          </svg>
        );
      case 'balance':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 4.5v13L12 16l-8 4.5v-13L12 3z"></path>
          </svg>
        );
      case 'calculator':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="8" y1="10" x2="8" y2="10"></line>
            <line x1="12" y1="10" x2="12" y2="10"></line>
            <line x1="16" y1="10" x2="16" y2="10"></line>
            <line x1="8" y1="14" x2="8" y2="14"></line>
            <line x1="12" y1="14" x2="12" y2="14"></line>
            <line x1="16" y1="14" x2="16" y2="14"></line>
            <line x1="8" y1="18" x2="8" y2="18"></line>
            <line x1="12" y1="18" x2="12" y2="18"></line>
            <line x1="16" y1="18" x2="16" y2="18"></line>
          </svg>
        );
      case 'handshake':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16.5 5.5l-10 10"></path>
            <path d="M20 8l-8 -2l-6 6l-2 8l8 -2l6 -6z"></path>
          </svg>
        );
      case 'award':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6"></circle>
            <path d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-6 py-16 relative">
      <div className="text-center mb-16">
        <h3 className="text-teal-600 text-3xl font-medium mb-2">Edge Capital Principles</h3>
        <h2 className="text-4xl font-bold mb-2 text-[#192227]">6 Principles That</h2>
        <h2 className="text-4xl font-bold text-[#192227]">Drive Our Success</h2>
      </div>

      <div className="relative flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
            <motion.div 
              className="absolute w-1 bg-black" 
              initial={{ height: '20%', top: '0%' }}
              animate={{ 
                height: '20%', 
                top: `${activeIndex * 20}%` 
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Principles content */}
          <div className="pl-0 md:pl-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.id}
                ref={el => principleRefs.current[index] = { current: el }}
                className={`mb-16 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
              >
                <motion.div 
                  className="flex flex-col md:flex-row items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Principle number */}
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <span className="text-teal-600 text-sm font-mono">{`{${principle.id}}`}</span>
                  </div>
                  
                  {/* Principle content */}
                  <div className="flex-1 mb-6 md:mb-0">
                    <h3 className="text-2xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>

                  {/* Mobile only icon */}
                  <div className="md:hidden w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center text-white p-4">
                    {renderIcon(principle.icon)}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed icon card for desktop view */}
        <div className="hidden md:block md:w-1/3 sticky top-20">
          <motion.div 
            className="w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center text-white p-8"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                {renderIcon(principles[activeIndex].icon)}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;