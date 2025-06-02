import { useState } from "react";

interface historyDataType{
    year: string;
    front: string;
    back: string;
}
const historyData = [
  {
    year: "2015",
    front: "Paul Lamain establishes Algorithmic Services B.V., a company specializing in developing and optimizing algorithms for financial enterprises.",
    back: "Additional details or insights for 2015."
  },
  {
    year: "2016",
    front: "Tradeoitt B.V. launched a low-cost trading platform and completed a fully subscribed bond issuance in 83 days, aiming to disrupt major brokerages.",
    back: "Additional details or insights for 2016."
  },
  {
    year: "2019",
    front: "In partnership with JFD Bank, Tradeoitt becomes the first entity in the Netherlands to introduce free stock trading, allowing investors to trade physical shares without transaction costs.",
    back: "Additional details or insights for 2019."
  },
  {
    year: "2022",
    front: "Tradeoitt expands its offerings by launching Tradeoitt EdgeFund, its first regulated hedge fund. Additionally, it initiates Tradeoitt Bond Issuance II, further strengthening its financial product lineup.",
    back: "Additional details or insights for 2022."
  },
  {
    year: "2023",
    front: "Tradeoitt rebrands as Edge Capital, a name that better reflects its mission and vision. Edge Capital aligns fully with the company’s goal of empowering investors—true to its motto: Investing with an edge!",
    back: "Additional details or insights for 2023."
  },
  {
    year: "Future",
    front: "At EdgeNext, we have ambitious goals. Our aim is to grow into a leading multi-strategy fund within the next few years. We place high priority on further developing our systems and expanding our team. Together with Edge Capital, we have a clear growth objective: to reach €100 million in assets under management within five years.",
    back: "Additional details or insights for the future."
  }
];

const FlipCard = ({ year, front, back }: historyDataType) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full sm:w-1/3 p-4 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`w-full h-60 bg-blue-100 rounded-lg shadow-lg transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-4">
          <h2 className="text-3xl font-bold text-blue-500">{year}</h2>
          <p className="text-sm mt-2 text-center">{front}</p>
        </div>
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-4 rotate-y-180 bg-blue-200 rounded-lg">
          <p className="text-sm text-center">{back}</p>
        </div>
      </div>
    </div>
  );
};

export default function OurHistory() {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Our History</h2>
      <p className="text-gray-600 mb-6">We're building a platform that gives investors an edge.</p>
      <div className="flex flex-wrap justify-center">
        {historyData.map((item, index) => (
          <FlipCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
