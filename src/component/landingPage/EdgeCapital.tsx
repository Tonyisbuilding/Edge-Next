import "./component.css";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';

const EdgeCapital = () => {
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Original text content
    const originalText = "At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. Using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge.";

    // Split text into words
    const words = originalText.split(/\s+/);

    // Get all word spans after rendering
    const wordSpans = containerRef.current.querySelectorAll('.word-span');

    // Set up Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin: '-20% 0px -20% 0px', // Adjust trigger zone as needed
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When scrolling down - add active class when element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
        // When scrolling up - remove active class when element leaves viewport
        else {
          // Check if we're scrolling up
          if (entry.boundingClientRect.top > entry.rootBounds.top) {
            entry.target.classList.remove('active');
          }
        }
      });
    }, options);

    // Observe each word
    wordSpans.forEach(word => {
      observer.observe(word);
    });

    // Clean up observer when component unmounts
    return () => {
      wordSpans.forEach(word => {
        observer.unobserve(word);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Original text content
  const originalText = "At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. Using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge.";

  // Split text into words
  const words = originalText.split(/\s+/);

  return (
    <>
       <section className="about-txt">
      <div className="scroll-text-container" ref={containerRef}>
        {words.map((word, index) => (
          <span 
            key={index} 
            className="word-span"
          >
            {word}{index < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </div>
    </section>
    </>
  );
};

export default EdgeCapital;
