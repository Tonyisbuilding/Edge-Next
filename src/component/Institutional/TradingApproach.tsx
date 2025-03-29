import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ShieldCheck, 
  Monitor, 
  Search, 
  Laptop, 
  PieChart ,
  LucideIcon
} from 'lucide-react';

interface TradingApproachCardProps {
  icon: LucideIcon; // Use LucideIcon type for icon components
  title: string;
  description: string;
}

const TradingApproachCard: React.FC<TradingApproachCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      className="bg-[#327D90] p-6 rounded-lg shadow-lg lg:h-[26rem]"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-white w-6 h-6" />
      </div>
      <h3 className="text-[19.81px] lg:text-[23.1px] font-semibold text-white mb-3">{title}</h3>
      <p className="text-white text-opacity-80 font-normal text-[14.71px] lg:text-[17.45px]">{description}</p>
    </motion.div>
  );
};

const TradingApproachSection = () => {
  const tradingApproachData = [
    {
      icon: BarChart3,
      title: 'Market-Neutral Trading',
      description: 'Our strategy focuses on 0DTE options on the S&P 500 and Nasdaq, allowing us to capitalize on short-term market movements while minimizing overnight exposure. By maintaining a market-neutral approach, we generate returns in both rising and falling markets, ensuring consistent performance regardless of volatility shifts.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Risk Management',
      description: 'Risk is dynamically managed through delta-hedging, which adjusts positions in real-time based on market conditions. Our proprietary algorithms, enhanced by machine learning, analyze volatility and execute trades with precision, ensuring optimal risk-reward balance across all market environments.'
    },
    {
      icon: Monitor,
      title: 'Scalability & No Overnight Risk',
      description: 'With deep liquidity and institutional-grade execution, our model can scale seamlessly up to €100 million without performance degradation. By exclusively trading 0DTE options, we eliminate overnight risk, ensuring capital efficiency and reducing exposure to unpredictable after-hours market swings.'
    },
    {
      icon: Search,
      title: 'In-House Research & Development',
      description: 'We continuously refine our strategies through rigorous research and real-time market testing. Our in-house development team integrates the latest advancements in quantitative finance, volatility modeling, and machine learning, ensuring our trading systems remain adaptive and resilient in ever-changing market conditions.'
    },
    {
      icon: Laptop,
      title: 'Multi-Broker Integration',
      description: 'Our technology seamlessly connects with leading brokers, including Interactive Brokers, TastyTrade, Exante, and Swissquote, providing institutional clients with flexible execution solutions. Through API-based trading, our strategies can be integrated into existing fund structures, ensuring a smooth and efficient trading experience.'
    },
    {
      icon: PieChart,
      title: 'Proven Performance & Risk Metrics',
      description: 'Backed by real-world execution data, our strategy delivers an average daily return of 0.18% gross (0.12% net) with a win ratio of 1.82 net and 2.41 gross. Our systematic, research-backed approach ensures consistent returns while maintaining strict risk controls.'
    }
  ];

  return (
    <div className="bg-[#206A7C] min-h-screen py-12 px-4 sm:px-6 lg:px-8 rounded-[20px] relative">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[26.68px] sm:text-4xl lg:text-[62.09px] font-normal text-left text-white mb-12"
        >
          Our Trading Approach
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradingApproachData.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
            >
              <TradingApproachCard 
                icon={approach.icon}
                title={approach.title}
                description={approach.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingApproachSection;