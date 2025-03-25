import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartColumnIncreasing } from 'lucide-react';

const StrategySection = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const strategies = [
    {
      id: 'liquidity-risk',
      title: 'Liquidity Risk',
      description: 'The inability to easily exit a position due to the lack of liquidity of the investment instrument being used. Measures: Trading in the most liquid markets (S&P 500). Trading across various exchanges and brokers.',
      popupTitle: 'Volatility Risk Premium',
      popupContent: `The Volatility Risk Premium (VRP) is the compensation that investors demand for providing protection against potential market downturns. 

It exists because market participants are generally risk-averse and willing to pay a premium for protection against negative events. This premium manifests as an overpricing of options relative to their historical realized volatility.

Our strategy systematically harvests this premium by:

1. Selling options in a controlled manner
2. Delta-hedging to maintain market neutrality
3. Managing tail risk through diversification and position sizing
4. Utilizing proprietary volatility forecasting models

This approach generates consistent returns with low correlation to traditional asset classes, making it an excellent portfolio diversifier.`
    },
    {
      id: 'interest-rate-arbitrage',
      title: 'Interest Rate Arbitrage',
      description: 'Identifying interest rate differentials: We identify price differences or discrepancies between interest rates. These differences can arise due to factors such as changes in interest rates, market expectations, or credit conditions.',
      popupTitle: 'Market-Neutral Swap Arbitrage',
      popupContent: `Our Market-Neutral Swap Arbitrage strategy exploits inefficiencies in the interest rate swap market by identifying and capitalizing on temporary mispricing between related instruments.

Key components of this strategy include:

1. Identifying basis spread anomalies between different tenor points on the swap curve
2. Exploiting differences between swap rates and government bond yields
3. Capitalizing on cross-currency basis swap opportunities
4. Leveraging our proprietary term structure models to identify relative value opportunities

This strategy is designed to be market-neutral, with returns driven by the convergence of pricing anomalies rather than by directional market movements. The strategy employs moderate leverage and sophisticated risk management techniques to ensure consistent performance across various market regimes.`
    }
  ];

  const openPopup = (id:string) => {
    setActivePopup(id);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-[#EEF4F5C2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our strategy</h2>
        <div className="h-1 w-36 bg-yellow-400 mb-8"></div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2">
          {strategies.map((strategy, index) => (
            <div key={strategy.id} className={`bg-[#EEF4F5C2] ${ index === 0 ? 'rounded-l-lg' : 'rounded-r-lg'} 
             p-8 border-1 border-[#206A7C] flex flex-col justify-between`}>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-12"
                  >
                    <ChartColumnIncreasing size={38} className="text-black" />
                  </motion.div>
                </div>
                <p className="text-gray-600 mb-6">{strategy.description}</p>
              </div>
              <div className="text-right">
                <button 
                  onClick={() => openPopup(strategy.id)}
                  className="text-[#0E7490] hover:text-[#0e7490b7] font-medium 
                  hover:cursor-pointer underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col ">
          {strategies.map((strategy, index) => (
            <div key={strategy.id} className={`bg-[#EEF4F5C2]  p-6 border border-[#206A7C]
             ${ index === 0 ? 'rounded-t-lg' : 'rounded-b-lg'} `}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{strategy.title}</h3>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-10"
                >
                  <ChartColumnIncreasing size={38} className="text-black" />
                </motion.div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
              <div className="text-right">
                <button 
                  onClick={() => openPopup(strategy.id)}
                  className="text-[#0E7490] hover:text-[#0e7490b7] font-medium text-sm underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup */}
        <AnimatePresence>
          {activePopup && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#00000098] bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closePopup}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {strategies.filter(s => s.id === activePopup).map((strategy) => (
                  <div key={strategy.id} className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{strategy.popupTitle}</h3>
                      <button 
                        onClick={closePopup}
                        className="text-gray-400 hover:text-gray-600 p-2"
                        aria-label="Close popup"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="prose max-w-none">
                      {strategy.popupContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-600">{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 text-right">
                      <button
                        onClick={closePopup}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StrategySection;