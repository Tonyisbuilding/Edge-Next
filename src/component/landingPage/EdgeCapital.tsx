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
      ? '"At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. Using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge."'
      : "Bij Edge Capital revolutioneren we beleggen met kwantitatieve, op feiten gebaseerde strategieën in plaats van traditionele voorspellingen.Door vooraf bepaalde parameters zoals rentetarieven en optiepremies te gebruiken, beperken we risico’s via hedging in de opties- en futuresmarkten.Onze diverse producten, afgestemd op zowel grote als kleine beleggers, bieden geoptimaliseerde risico-rendementsprofielen en verschaffen u een voorsprong op de markt."
  }`;

  const words = originalText.split(/\s+/);

  return (
    <section className={`about-txt bg-[#EEF4F5] h-auto py-[3.5rem] ${ language === 'en' ? 'lg:h-auto lg:py-[2rem] lg:max-h-[680px]' : ' lg:h-auto pb-[10rem]'}    
    relative `}>
      <div className="scroll-text-container h-auto" ref={containerRef}>
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

// // Use explicit typing for the component
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
//     "At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. Using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge.";

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
