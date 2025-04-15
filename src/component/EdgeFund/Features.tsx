import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const Feature = () => {
  const { language } = useChangeLanguageContext();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Translations object
  const translations = {
    en: {
      features: 'Features',
      description: 'An open-end mutual fund offering sophisticated investment strategies with institutional-level management.',
      investmentStrategy: {
        title: 'Investment Strategy',
        description: 'Sophisticated approaches to maximize returns with managed risk',
        items: [
          {
            title: 'Volatility Premium',
            description: 'Delta-neutral positions on the S&P500 to capitalize on market volatility'
          },
          {
            title: 'Interest Rate Arbitrage',
            description: 'Taking advantage of interest rate differentials across markets'
          },
          {
            title: 'FX Arbitrage',
            description: 'Exploiting currency market inefficiencies for consistent returns'
          }
        ]
      },
      keyInformation: {
        title: 'Key Information',
        description: 'Institutional-grade structure and oversight',
        items: [
          {
            title: 'Professional Management',
            description: 'Managed by Edge Capital Management B.V.'
          },
          {
            title: 'Secure Custody',
            description: 'Edge Capital EdgeFund Custody Foundation ensures asset safety'
          },
          {
            title: 'Banking Partner',
            description: 'Northern Trust provides banking infrastructure'
          },
          {
            title: 'Administration',
            description: 'Bolder Fund Services B.V. handles fund administration'
          }
        ]
      },
      liquidityTerms: {
        title: 'Liquidity Terms',
        description: 'Flexible options with controlled risk management',
        items: [
          {
            title: 'Monthly Subscriptions',
            description: 'New investments accepted monthly'
          },
          {
            title: 'Redemption Notice Period',
            description: 'Redemptions must be notified by the 15th of the month'
          },
          {
            title: 'Position Management',
            description: 'Early notification allows for controlled position reduction'
          },
          {
            title: 'Monthly Reporting',
            description: 'Detailed statements provided monthly for all participants'
          }
        ]
      },
      participationRequirements: {
        title: 'Participation Requirements',
        description: 'Investment thresholds and guidelines',
        items: [
          {
            title: '€100,000 initial investment required',
            description: ''
          },
          {
            title: 'Minimum €10,000 for subsequent investments',
            description: ''
          },
          {
            title: 'Minimum €10,000 withdrawal with €100,000 remaining balance required',
            description: ''
          },
          {
            title: 'Subscription: Via these forms.',
            description: '',
            linkText: 'Click to show these forms'
          }
        ]
      }
    },
    nl: {
      features: 'Kenmerken',
      description: 'Een open-end beleggingsfonds dat geavanceerde beleggingsstrategieën biedt met beheer op institutioneel niveau.',
      investmentStrategy: {
        title: 'Beleggingsstrategie',
        description: 'Geavanceerde benaderingen om rendement te maximaliseren met beheerst risico',
        items: [
          {
            title: 'Volatiliteitspremie',
            description: 'Delta-neutrale posities op de S&P500 om te profiteren van marktvolatiliteit'
          },
          {
            title: 'Rente-arbitrage',
            description: 'Profiteren van renteverschillen tussen markten'
          },
          {
            title: 'FX-arbitrage',
            description: 'Gebruikmaken van inefficiënties in de valutamarkt voor consistente rendementen'
          }
        ]
      },
      keyInformation: {
        title: 'Belangrijke Informatie',
        description: 'Institutionele structuur en toezicht',
        items: [
          {
            title: 'Professioneel Beheer',
            description: 'Beheerd door Edge Capital Management B.V.'
          },
          {
            title: 'Veilige Bewaring',
            description: 'Edge Capital EdgeFund Custody Foundation zorgt voor activaveiligheid'
          },
          {
            title: 'Bankpartner',
            description: 'Northern Trust levert bankinfrastructuur'
          },
          {
            title: 'Administratie',
            description: 'Bolder Fund Services B.V. verzorgt de fondsadministratie'
          }
        ]
      },
      liquidityTerms: {
        title: 'Liquiditeitsvoorwaarden',
        description: 'Flexibele opties met gecontroleerd risicobeheer',
        items: [
          {
            title: 'Maandelijkse Inschrijvingen',
            description: 'Nieuwe investeringen maandelijks geaccepteerd'
          },
          {
            title: 'Opzegtermijn',
            description: 'Aflossingen moeten voor de 15e van de maand worden gemeld'
          },
          {
            title: 'Positiebeheer',
            description: 'Vroege kennisgeving maakt gecontroleerde positievermindering mogelijk'
          },
          {
            title: 'Maandelijkse Rapportage',
            description: 'Gedetailleerde overzichten maandelijks verstrekt aan alle deelnemers'
          }
        ]
      },
      participationRequirements: {
        title: 'Deelnamevereisten',
        description: 'Investeringsdrempels en richtlijnen',
        items: [
          {
            title: '€100.000 initiële investering vereist',
            description: ''
          },
          {
            title: 'Minimaal €10.000 voor vervolgbeleggingen',
            description: ''
          },
          {
            title: 'Minimaal €10.000 opname met €100.000 resterend saldo vereist',
            description: ''
          },
          {
            title: 'Inschrijving: Via deze formulieren.',
            description: '',
            linkText: 'Klik om deze formulieren te tonen'
          }
        ]
      }
    }
  };

  // Data structure for features with IDs
  const features = [
    {
      id: 'investment-strategy',
      translationKey: 'investmentStrategy',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#0E7490" strokeWidth="2"/>
          <path d="M12 6V18M18 12H6" stroke="#0E7490" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        { id: 'volatility-premium' },
        { id: 'interest-rate-arbitrage' },
        { id: 'fx-arbitrage' }
      ]
    },
    {
      id: 'key-information',
      translationKey: 'keyInformation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#0E7490" strokeWidth="2"/>
          <path d="M12 8V12M12 16H12.01" stroke="#0E7490" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        { id: 'professional-management' },
        { id: 'secure-custody' },
        { id: 'banking-partner' },
        { id: 'administration' }
      ]
    },
    {
      id: 'liquidity-terms',
      translationKey: 'liquidityTerms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#0E7490" strokeWidth="2"/>
          <path d="M8 12H16M12 8V16" stroke="#0E7490" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        { id: 'monthly-subscriptions' },
        { id: 'redemption-notice' },
        { id: 'position-management' },
        { id: 'monthly-reporting' }
      ]
    },
    {
      id: 'participation-requirements',
      translationKey: 'participationRequirements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#0E7490" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" stroke="#0E7490" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        { id: 'initial-investment' },
        { id: 'subsequent-investments' },
        { id: 'minimum-balance' },
        { id: 'subscription-process', hasLink: true }
      ]
    }
  ];

  // Get current language content - default to English if language selection is invalid
  const t = translations[language] || translations.en;

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900"
          >
            {t.features}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 mb-8"
          >
            {t.description}
          </motion.p>

          <div className="space-y-12">
            {features.map((feature) => {
              const featureTranslation = t[feature.translationKey as keyof typeof t] as {
                title: string;
                description: string;
                items: { title: string; description: string; linkText?: string }[];
              };
              
              return (
                <motion.div 
                  key={feature.id}
                  variants={itemVariants}
                  className="lg:grid lg:grid-cols-3 gap-6"
                >
                  <div className="col-span-1">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 text-primary-600 mr-3">
                        {feature.icon} 
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{featureTranslation.title}</h3>
                        <p className="text-gray-600 mt-1">{featureTranslation.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 mt-4 lg:mt-0">
                    <div className="space-y-4">
                      {feature.items.map((item, index) => {
                        const itemTranslation = featureTranslation.items[index] as { title: string; description: string; linkText?: string };
                        
                        return (
                          <motion.div 
                            key={item.id}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="flex-shrink-0 text-primary-500 mr-3">
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{itemTranslation.title}</h4>
                                {itemTranslation.description && (
                                  <p className="text-sm text-gray-500 mt-1">{itemTranslation.description}</p>
                                )}
                                {item.hasLink && (
                                  <button className="text-sm text-primary-600 font-medium hover:text-primary-800
                                  mt-1 underline focus:outline-none text-black hover:cursor-pointer">
                                    <Link to='/documents'>
                                      {itemTranslation.linkText}
                                    </Link>
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;