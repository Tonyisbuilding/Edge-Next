import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Feature = () => {
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

  // Data structure for features
  const features = [
    {
      id: 'investment-strategy',
      title: 'Investment Strategy',
      description: 'Sophisticated approaches to maximize returns with managed risk',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
          <path d="M12 6V18M18 12H6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        {
          id: 'volatility-premium',
          title: 'Volatility Premium',
          description: 'Delta-neutral positions on the S&P500 to capitalize on market volatility'
        },
        {
          id: 'interest-rate-arbitrage',
          title: 'Interest Rate Arbitrage',
          description: 'Taking advantage of interest rate differentials across markets'
        },
        {
          id: 'fx-arbitrage',
          title: 'FX Arbitrage',
          description: 'Exploiting currency market inefficiencies for consistent returns'
        }
      ]
    },
    {
      id: 'key-information',
      title: 'Key Information',
      description: 'Institutional-grade structure and oversight',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
          <path d="M12 8V12M12 16H12.01" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        {
          id: 'professional-management',
          title: 'Professional Management',
          description: 'Managed by Edge Capital Management B.V.'
        },
        {
          id: 'secure-custody',
          title: 'Secure Custody',
          description: 'Edge Capital EdgeFund Custody Foundation ensures asset safety'
        },
        {
          id: 'banking-partner',
          title: 'Banking Partner',
          description: 'Northern Trust provides banking infrastructure'
        },
        {
          id: 'administration',
          title: 'Administration',
          description: 'Bolder Fund Services B.V. handles fund administration'
        }
      ]
    },
    {
      id: 'liquidity-terms',
      title: 'Liquidity Terms',
      description: 'Flexible options with controlled risk management',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
          <path d="M8 12H16M12 8V16" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      items: [
        {
          id: 'monthly-subscriptions',
          title: 'Monthly Subscriptions',
          description: 'New investments accepted monthly'
        },
        {
          id: 'redemption-notice',
          title: 'Redemption Notice Period',
          description: 'Redemptions must be notified by the 15th of the month'
        },
        {
          id: 'position-management',
          title: 'Position Management',
          description: 'Early notification allows for controlled position reduction'
        },
        {
          id: 'monthly-reporting',
          title: 'Monthly Reporting',
          description: 'Detailed statements provided monthly for all participants'
        }
      ]
    },
    {
      id: 'participation-requirements',
      title: 'Participation Requirements',
      description: 'Investment thresholds and guidelines',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        {
          id: 'initial-investment',
          title: '€100,000 initial investment required',
          description: ''
        },
        {
          id: 'subsequent-investments',
          title: 'Minimum €10,000 for subsequent investments',
          description: ''
        },
        {
          id: 'minimum-balance',
          title: 'Minimum €10,000 withdrawal with €100,000 remaining balance required',
          description: ''
        },
        {
          id: 'subscription-process',
          title: 'Subscription: Via these forms.',
          description: '',
          hasLink: true
        }
      ]
    }
  ];

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
            Features
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 mb-8"
          >
            An open-end mutual fund offering sophisticated investment strategies with institutional-level management.
          </motion.p>

          <div className="space-y-12">
            {features.map((feature) => (
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
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2 mt-4 lg:mt-0">
                  <div className="space-y-4">
                    {feature.items.map((item) => (
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
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            {item.description && (
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            )}
                            {item.hasLink && (
                              <button className="text-sm text-primary-600 font-medium hover:text-primary-800
                               mt-1 underline focus:outline-none text-black hover:cursor-pointer">
                                <Link to='/documents'>
                                Click to show these forms
                                </Link>
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;