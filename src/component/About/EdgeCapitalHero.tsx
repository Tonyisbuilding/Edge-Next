import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "@/constant/images";
import { Link } from "react-router-dom";

const EdgeCapitalHero = () => {
  const [headingInView, setHeadingInView] = useState(false);
  const [buttonInView, setButtonInView] = useState(false);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Custom intersection observer implementation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeadingInView(true);
          headingObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setButtonInView(true);
          buttonObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
      if (buttonRef.current) {
        buttonObserver.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-[5rem]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our name is more than just a nod to 'hedge funds.' 'Edge'
              represents the advantage we provide our clients—staying ahead with
              strategies based on market facts rather than predictions.
            </h1>

            <p className="text-lg text-gray-600">
              Our strategies are built on arbitrage methods and market-neutral
              investing, giving us an edge over traditional wealth management
              products.
            </p>
          </motion.div>

          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              buttonInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <button className="mt-4 px-6 py-3 bg-[#206A7C] text-white font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-colors">
              <Link to="/contact" className="block ">
                Get in Touch
              </Link>
            </button>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <motion.div className="rounded-lg overflow-hidden shadow-lg">
            <motion.img
              initial={{
                right: "-100",
              }}
              whileInView={{
                left: "0",
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              src={images.about.herosectionforabout}
              alt="Edge Capital Team"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EdgeCapitalHero;
