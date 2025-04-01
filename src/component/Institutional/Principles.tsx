import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/constant/images";

// Define types for principle data
interface Principle {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

type IconType = "chart" | "balance" | "calculator" | "handshake" | "award";

// Principle data
const principles: Principle[] = [
  {
    id: 1,
    title: "Volatility Premium Strategy",
    description:
      "Our strategy based on ES (S&P 500) and NQ (Nasdaq) options utilizes a model focused on selling volatility and targets short-term systems. We sell options with 0 days to expiration (DTE) at deltas between 0.1 and 0.3 with an asymmetrical preference for the call side.",
    icon: "chart",
  },
  {
    id: 2,
    title: "Dynamic Delta-Hedging",
    description:
      "Delta-hedging adjusts dynamically based on market volatility, supported by parameters enhanced with machine learning. This allows us to maintain optimal risk management regardless of market conditions.",
    icon: "balance",
  },
  {
    id: 3,
    title: "Risk Management & Scalability",
    description:
      "By exclusively using 0DTE options on the S&P 500 and Nasdaq, we avoid overnight risks. Moreover, our model offers high scalability of up to €100 million without compromising efficiency or performance.",
    icon: "calculator",
  },
  {
    id: 4,
    title: "Institutional-Grade Collaboration",
    description:
      "We offer flexible collaboration options through direct fund participation or tailor-made SaaS solutions, allowing various types of investors to benefit from our strategies.",
    icon: "handshake",
  },
  {
    id: 5,
    title: "Proven Performance",
    description:
      "The strategy shows an average daily expected return of 0.18% gross (before commissions) and 0.12% net (after costs). The win ratio, calculated as the ratio of profitable days to losing days, is 1.82 net and 2.41 gross.",
    icon: "award",
  },
];

const PrinciplesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);
  const principleRefs = useRef<Array<{ current: HTMLDivElement | null }>>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  // Setup observer for scroll detection and sticky behavior
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

    // IntersectionObserver to detect when section is in/out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -100% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Render appropriate icon based on principle type
  const renderIcon = (iconType: IconType): JSX.Element | null => {
    switch (iconType) {
      case "chart":
        return (
          <div className="flex-shrink-0   flex items-center justify-center">
            <img
              src={images.institution.market_analysis}
              alt="Research team analyzing market data"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case "balance":
        return (
          <div className="flex-shrink-0   flex items-center justify-center">
            <img
              src={images.institution.Clip_path}
              alt="Research team analyzing market data"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case "calculator":
        return (
          <div className="flex-shrink-0   flex items-center justify-center">
            <img
              src={images.institution.calculator}
              alt="Research team analyzing market data"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case "handshake":
        return (
          <div className="flex-shrink-0   flex items-center justify-center">
            <img
              src={images.institution.handshake_white}
              alt="Research team analyzing market data"
              className="w-full h-full object-cover"
            />
          </div>
        );
      case "award":
        return (
          <div className="flex-shrink-0   flex items-center justify-center">
            <img
              src={images.institution.medal_award_badge}
              alt="Research team analyzing market data"
              className="w-full h-full object-cover"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 
    h-auto relative overflow-hiddenmb-[2rem]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h3 className="text-teal-600 text-3xl font-medium mb-2">
          Edge Capital Principles
        </h3>
        <h2 className="text-4xl font-bold mb-2 text-gray-800">
          6 Principles That
        </h2>
        <h2 className="text-4xl font-bold text-gray-800">Drive Our Success</h2>
      </motion.div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row">
        {/* Left Column: Principles Content */}
        <div className="w-full md:w-1/2 relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
            <motion.div
              className="absolute w-1 bg-black"
              initial={{ height: "20%", top: "0%" }}
              animate={{ height: "20%", top: `${activeIndex * 20}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Principles List */}
          <div className="pl-0 md:pl-6">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                ref={(el) => (principleRefs.current[index] = { current: el })}
                className={`mb-16 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <motion.div
                  className="flex flex-col md:flex-row items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Principle Number */}
                  <div className="md:mr-6">
                    <span className="text-teal-600 text-sm font-mono">{`{${principle.id}}`}</span>
                  </div>

                  {/* Principle Content */}
                  <div className="flex-1 mb-6 md:mb-0">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>

                  {/* Mobile Only Icon */}
                  <div
                    className="md:hidden  bg-[#272727] rounded-lg mx-auto
                  flex items-center justify-center text-white p-4 w-full h-[18.09rem]"
                  >
                    {renderIcon(principle.icon)}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Icon Card */}
        <div
          ref={cardRef}
          className={`hidden md:block md:w-1/3 ${
            isSticky ? "fixed top-[10rem]" : "absolute bottom-0"
          } transition-all duration-300`}
          style={{ right: "calc((100% - 1280px) / 2)" }}
        >
          <motion.div
            className="w-full h-64 bg-[#272727] rounded-lg flex items-center justify-center text-white p-8"
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
