// import images from "@/constant/images";

// const Presentation = () => {
//   const Questions = [
//     {
//       id: 1,
//       Quest: "Live Q&A to address your key concerns.",
//     },
//     {
//       id: 2,
//       Quest: "Customized insights for your investment goals.",
//     },
//     {
//       id: 1,
//       Quest: "Customized insights for your investment goals.",
//     },
//   ];

//   return (
//     <>
//       <div
//         className=" bg-[#EEF4F5] lg:flex flex flex-col-reverse lg:flex-row  justify-center 
//        items-center lg:p-[5rem] md:p-[3rem] p-[1rem] relative"
//       >
//         <div>
//           <div>
//             <img
//               src={images.landingPage.dots_one}
//               alt=""
//               className="absolute right-0 top-0"
//             />
//           </div>
//         </div>
//         <div className="video-container lg:w-[50%] lg:mt-0 mt-[3rem]">
//           <video
//             // width="320"
//             // height="240"
//             className=" lg:w-[40vw] lg:h-[70vh] md:h-[50vh] h-[41.7vh]   rounded-3xl"
//             controls
//             // Add these optimizations
//             preload="metadata" // Reduces initial load
//             poster={images.landingPage.presentationPreview} // Shows a preview before video loads
//             aria-label="Presentation Video" // Accessibility
//             crossOrigin="anonymous" // If video is from different domain
//           >
//             <source src={images.landingPage.presentationVid} type="video/mp4" />
//             <source src="/path/to/fallback.webm" type="video/webm" />
//             {/* Accessibility text track */}
//             <track
//               kind="captions"
//               src="/path/to/captions.vtt"
//               srcLang="en"
//               label="English"
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className=" lg:w-[50%] ">
//           <h2 className=" text-left  text-[#192227] text-[30px] montserrat font-bold lg:w-[30rem]">
//             Secure Your Exclusive Presentation
//           </h2>
//           <p className=" font-normal text-[17.45px] text-[#1A1A1A] montserrat py-5 lg:w-[30rem]">
//             Starting a new investment is a significant step! Before you make
//             that decision, it’s important to get well-informed. Through an
//             online presentation (duration: approximately 30 minutes), we provide
//             you with a clear and comprehensive overview of our organization and
//             products.
//           </p>
//           <div className=" py-5">
//             {Questions.map((data) => {
//               return (
//                 <div key={data.id} className=" flex gap-5 p-2">
//                   <div>
//                     <img src={images.landingPage.check_circle} alt="" />
//                   </div>
//                   <div>
//                     <p className=" text-[16px] text-black font-normal">
//                       {data.Quest}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className=" flex  items-center mt-[.5rem] ">
//             <button className=" bg-black text-white py-2 px-5 rounded-3xl hover:cursor-pointer">
//               Schedule a presentation
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Presentation;


import React, { useRef, useState } from "react";
import images from "@/constant/images";
import { Play } from 'lucide-react';

const Presentation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const benefits = [
    "Live Q&A to address your key concerns.",
    "Customized insights for your investment goals.",
    "Expert advisors with over 15 years of experience.",
  ];

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="max-w-[1200px] w-[100%] md:w-full mx-auto px-[1rem] my-10 rounded-lg overflow-hidden shadow-lg pb-[1rem]">
      <div className="flex flex-col md:flex-row gap-[2rem]">
        {/* Video Section */}
        <div className="relative flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-full md:rounded-lg">
          <video
            ref={videoRef}
            className="w-full h-full object-cover block rounded-lg"
            controls
            preload="metadata"
            poster={'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'}
            aria-label="Presentation Video"
            crossOrigin="anonymous"
          >
            <source src={images.landingPage.presentationVid} type="video/mp4" />
            <source src="/path/to/fallback.webm" type="video/webm" />
            <track
              kind="captions"
              src="/path/to/captions.vtt"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Custom play button overlay - only shown when not playing */}
          {!isPlaying && (
            <div 
              className="absolute top-0 left-0 w-full h-full bg-black/10 flex justify-center items-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="bg-[#206A7C] w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full flex justify-center
                items-center shadow-lg shadow-[#206A7C]/30 transition-all duration-300 ease-in-out hover:scale-[1.08] 
                hover:shadow-xl hover:shadow-[#206A7C]/40"
              >
                <Play className="text-white" size={24} />
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-8 md:p-2">
          <h2 className="text-2xl sm:text-[26px] md:text-[28px] font-bold text-[#1e293b] mb-4 sm:mb-5 tracking-tight">Secure Your Exclusive Presentation</h2>
          <p className="text-[#64748b] mb-6 sm:mb-7 md:mb-8 text-[0.95rem] sm:text-base md:text-[1.05rem]">
            Starting a new investment is a significant step! Before you make that decision, it's important to
            get well-informed. Through an online presentation (duration: approximately 30 minutes), we provide
            you with a clear and comprehensive overview of our organization and products.
          </p>

          {/* Benefits List */}
          <div className="mb-6 md:mb-8">
            {benefits.map((benefit, index) => (
              <div className="flex items-start mb-4 md:mb-5 text-black" key={index}>
                <span className="text-[#206A7C] mr-3 flex-shrink-0 bg-[#206A7C]/10 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="bg-[#f8fafc] border-l-4 border-[#206A7C] p-4 sm:p-5 mb-6 sm:mb-7 md:mb-8 rounded-lg">
            <p className="italic text-[#475569] text-[0.95rem] sm:text-base">
              "The presentation was incredibly valuable. It helped me make informed decisions about my
              financial future."
            </p>
            <p className="mt-2 sm:mt-3 font-semibold normal-case text-[#206A7C] text-[0.9rem] sm:text-[0.95rem]">— Sarah M., Client since 2023</p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full">
            <button className="bg-[#206A7C] text-white border-none py-3 sm:py-3.5 md:py-3.5 px-6 sm:px-6.5 md:px-7 rounded-lg font-medium text-[0.95rem] sm:text-base cursor-pointer transition-all duration-300 ease-in-out shadow-md shadow-[#206A7C]/20 w-full sm:w-auto hover:bg-[#185a69] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#206A7C]/30">
              Schedule a presentation
            </button>
            <button className="bg-transparent text-[#206A7C]  border-[#206A7C] border-[1.5px] py-3 sm:py-3.5 md:py-3.5 px-6 sm:px-6.5 md:px-7 rounded-lg font-medium text-[0.95rem] sm:text-base cursor-pointer transition-all duration-300 ease-in-out w-full sm:w-auto hover:bg-[#206A7C]/5 hover:-translate-y-0.5">
              Download brochure
            </button>
          </div>

          {/* Urgency Text */}
          <p className="text-[0.85rem] sm:text-[0.9rem] text-[#64748b] mt-4 sm:mt-5 flex items-center gap-2">
            <span className="text-[#206A7C] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
            Limited spots available this month. Reserve your session today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;