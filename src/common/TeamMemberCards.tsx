import React, { useState } from "react";
import { motion } from "framer-motion";
import { teamMembers, teamMemberCardstDataType } from "@/constant/data";
import images from "@/constant/images";

const TeamCard = ({
  name,
  position,
  bio,
  linkedin,
  image,
}: teamMemberCardstDataType) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full h-[22.211rem] md:h-[30.375rem] cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full rounded-lg overflow-hidden"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="w-full h-full bg-black">
          <img
            src={image || "/api/placeholder/400/500"}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white text-xl font-medium
          bg-[#26252521]  rounded-bl-3xl lg:w-[15vw] text-center rounded-tr-[.5rem]
                  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            {name}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-full h-full rounded-lg overflow-hidden bg-gray-800 text-white p-6"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-gray-300 mb-4">{position}</p>
            <p className="text-sm">{bio}</p>
          </div>
          <div>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TeamMemberCards = () => {
  return (
    <>
      <div className=" bg-[#EEF4F5] py-[2rem] relative">
        <div>
          <div>
            <img
              src={images.landingPage.dots_one}
              alt=""
              className="absolute left-0 top-[2rem]"
            />
          </div>
          <div>
            <img
              src={images.landingPage.dots_one}
              alt=""
              className="absolute left-0 top-[18rem] lg:block hidden"
            />
          </div>
          <div>
            <img
              src={images.landingPage.dots_one}
              alt=""
              className="absolute right-0 top-[2rem] lg:block hidden"
            />
          </div>
        </div>
        {/* ........ */}
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
            The Team you can Trust
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300">
              Meet our entire team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCards;
