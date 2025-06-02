import React from "react";
import { motion } from "framer-motion";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const OpenPositions = () => {
  const { language } = useChangeLanguageContext();

  // Define translations for English and Dutch
  const translations = {
    en: {
      heading: "Open Positions",
      jobs: [
        {
          id: 1,
          title: "Sales & Relationship Management",
          description: "We are looking for a proactive sales professional who thrives on building long-term relationships with clients and partners. You value collaboration and enjoy working closely with other teams.",
          remote: "Noordwijkerhout",
          type: "Full-time",
        },
        {
          id: 2,
          title: "Marketing Manager / Lead Generation Specialist",
          description: "Are you a strategically minded marketer who sees opportunities to generate leads and strengthen our brand presence in the market? Then this role is tailor-made for you.",
          remote: "Noordwijkerhout",
          type: "Full-time",
        },
        // {
        //   id: 3,
        //   title: "Lead Designer",
        //   description: "We're looking for a Senior Designer to join our team.",
        //   remote: "Noordwijkerhout",
        //   type: "Full-time",
        // },
        // {
        //   id: 4,
        //   title: "ML Engineer",
        //   description: "We're looking for a mid-level ML engineer to join our team.",
        //   remote: "Noordwijkerhout",
        //   type: "Full-time",
        // },
      ],
      applyLabel: "Apply",
      applyAriaLabel: (title: string) => `Apply for ${title} position`,
    },
    nl: {
      heading: "Openstaande Vacatures",
      jobs: [
        {
          id: 1,
          title: "Sales en Relatiebeheer",
          description: "Voor ons team zoeken we een proactieve sales professional die energie krijgt van het opbouwen van langdurige relaties met klanten en partners. Samenwerken met andere teams staat bij jou centraal.",
          remote: "Noordwijkerhout",
          type: "Voltijd",
        },
        {
          id: 2,
          title: "Marketing Manager / Lead Generation Specialist",
          description: "Ben jij een strategisch ingestelde marketeer die kansen ziet om leads te genereren en ons merk sterker in de markt te zetten? Dan is deze rol op jouw lijf geschreven.",
          remote: "Noordwijkerhout",
          type: "Voltijd",
        },
       
      ],
      applyLabel: "Solliciteren",
      applyAriaLabel: (title: string) => `Solliciteren voor de positie van ${title}`,
    },
  };

  // Select the appropriate content based on language, with fallback to English
  const content = translations[language] || translations.en;
  const jobs = content.jobs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 py-12"
      id="open"
      aria-labelledby="positions-heading"
    >
      <div className="mb-10 text-center">
        <h2
          id="positions-heading"
          className="text-4xl font-bold text-gray-900 mb-2 inline-block"
        >
          {content.heading.split(" ")[0]}{" "}
          <span className="relative">
            {content.heading.split(" ")[1]}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
          </span>
        </h2>
      </div>

      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            className="border border-gray-200 rounded-lg p-6 shadow-sm"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
              <a
                href="#"
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors inline-flex items-center mt-2 md:mt-0"
                aria-label={content.applyAriaLabel(job.title)}
              >
                {content.applyLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <p className="text-gray-600 mb-4">{job.description}</p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
                {job.remote}
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {job.type}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OpenPositions;