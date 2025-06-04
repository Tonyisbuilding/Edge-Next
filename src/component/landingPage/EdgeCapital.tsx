import "./component.css";
import React, { useEffect, useRef } from "react";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const EdgeCapital: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { language } = useChangeLanguageContext();

  useEffect(() => {
    if (!containerRef.current) return;

    const wordSpans =
      containerRef.current.querySelectorAll<HTMLSpanElement>(".word-span");
    if (!wordSpans.length) return;

    const options: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "-20% 0px -20% 0px", // Adjust trigger zone as needed
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else if (
          entry.boundingClientRect.top > (entry.rootBounds?.top || 0)
        ) {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    wordSpans.forEach((word) => observer.observe(word));

    return () => {
      wordSpans.forEach((word) => observer.unobserve(word));
    };
  }, []);

const originalText = `${
  language === "en"
    ? '"At EdgeNext, we take investing to the next level. In a world where markets move faster and volatility is the norm rather than the exception, we believe in a dynamic, innovative approach. There is no room for guesswork or gut feeling — we eliminate luck and base our decisions entirely on facts. Our strategies are built to adapt to constant market changes. By using proven quantitative models, we actively respond to increased volatility instead of avoiding it. We seize opportunities where others see risk and leave traditional investment methods behind. At EdgeNext, we don’t invest in expectations — we invest in certainties. That means structured decision-making, data-driven execution, and continuously optimizing our systems to turn market dynamics into returns."'
    : 'Bij EdgeNext tillen we beleggen naar het volgende niveau. In een wereld waarin markten steeds sneller bewegen en volatiliteit geen uitzondering maar de norm is, geloven wij in een dynamische, innovatieve aanpak. Geen ruimte voor giswerk of onderbuikgevoel – wij sluiten geluk uit en baseren ons volledig op feiten. Onze strategieën zijn ontworpen om zich aan te passen aan de constante veranderingen in de markt. Door gebruik te maken van bewezen kwantitatieve modellen spelen we actief in op verhoogde volatiliteit, in plaats van deze te vermijden. We benutten kansen waar anderen risico zien en laten traditionele beleggingsmethodes achter ons. Met EdgeNext investeren we niet in verwachtingen, maar in zekerheden. Dat betekent gestructureerde besluitvorming, data-gedreven handelen en het continu optimaliseren van onze systemen om marktdynamiek om te zetten in rendement.'
}`;



  const words = originalText.split(/\s+/);

  return (
    <section className={`about-txt bg-[#EEF4F5]  h-fit-content py-[3.5rem]  
      ${ language === 'en' ? 'lg:h-auto lg:py-[2rem] lg:max-h-none pb-[23rem] ' : 
        ' lg:h-auto lg:pb-[5rem] md:pb-[27rem] pb-[35rem]'}    
    relative `}>
<div 
  ref={containerRef}
  className="scroll-text-container h-auto w-full max-w-[90rem] mx-auto px-6"
>
        {words.map((word, index) => (
          <span key={index} className="word-span">
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </section>
  );
};

export default EdgeCapital;

// import "./component.css";
// import React, { useEffect, useRef } from "react";

// // Define props interface (even if empty) for better type consistency
// interface EdgeCapitalProps {}

// // use explicit typing for the component
// const EdgeCapital: React.FC<EdgeCapitalProps> = () => {
//   // Type the ref explicitly
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Type guard for ref
//     const container = containerRef.current;
//     if (!container) return;

//     // Type the NodeList with specific HTMLElement type
//     const wordSpans = container.querySelectorAll<HTMLSpanElement>(".word-span");
//     if (!wordSpans.length) return;

//     // Type the IntersectionObserver options explicitly
//     const options: IntersectionObserverInit = {
//       root: null,
//       rootMargin: "-20% 0px -20% 0px",
//       threshold: 0.5,
//     };

//     // Type the observer callback parameters
//     const observer = new IntersectionObserver(
//       (entries: IntersectionObserverEntry[]) => {
//         entries.forEach((entry: IntersectionObserverEntry) => {
//           // Type assertion for target as HTMLElement since we know these are span elements
//           const target = entry.target as HTMLElement;

//           if (entry.isIntersecting) {
//             target.classList.add("active");
//           } else if (entry.boundingClientRect.top > (entry.rootBounds?.top ?? 0)) {
//             target.classList.remove("active");
//           }
//         });
//       },
//       options
//     );

//     // Type the word spans for the observer
//     wordSpans.forEach((word: HTMLSpanElement) => observer.observe(word));

//     // Cleanup function
//     return () => {
//       wordSpans.forEach((word: HTMLSpanElement) => observer.unobserve(word));
//     };
//   }, []); // Empty dependency array is fine since we only need this effect once

//   const originalText: string =
//     "At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge.";

//   // Type the words array explicitly
//   const words: string[] = originalText.split(/\s+/);

//   return (
//     <section className="about-txt">
//       <div className="scroll-text-container" ref={containerRef}>
//         {words.map((word: string, index: number) => (
//           <span key={index} className="word-span">
//             {word}
//             {index < words.length - 1 ? " " : ""}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EdgeCapital;
