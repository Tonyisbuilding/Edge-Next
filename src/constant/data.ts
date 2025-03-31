import images from "./images";
// import { ReactNode } from "react";

export interface whyEdgeCapitalType {
  icon: string;
  title: string;
  desc: string;
  id: number;
}

export interface theTeamYouCanTrustDataType {
  avatar: string;
  name: string;
  id: number;
}
export interface teamMemberCardstDataType {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
  image: string;
}
export interface timelineDataType {
  year: string;
  content: string;
}

export interface charitiesDataType {
  image: string;
  name: string;
  organization: string;
  organizationColor: string;
  description: string;
}

export const whyEdgeCapitalData: whyEdgeCapitalType[] = [
  {
    icon: images.landingPage.profit,
    title: "Stable and Profitable",
    desc: "We ensure stability through a market-neutral approach, minimizing volatility with advanced algorithms. Our goal is to provide above-average returns while maintaining acceptable risk. Your investments grow steadily with us.",
    id: 1,
  },
  {
    icon: images.landingPage.profit,
    title: "Diversified and Risk-Conscious",
    desc: "We employ a diversified strategy across multiple asset classes, ensuring risk-adjusted returns. By actively managing risk exposure, we create a balanced portfolio designed for steady, long-term growth.",
    id: 2,
  },
  {
    icon: images.landingPage.profit,
    title: "Personal and Accessible",
    desc: "Gain access to elite investment strategies typically reserved for institutions. Our approach combines arbitrage, delta-neutral investing, and cutting-edge technology to deliver precision and reliability. Invest with an edge.",
    id: 3,
  },
  {
    icon: images.landingPage.profit,
    title: "Reliability First",
    desc: "Trust is our priority. We uphold strict agreements and work with external advisors to refine our methods. This ensures accountability, transparency, and long-term relationships built on reliability.",
    id: 4,
  },
  {
    icon: images.landingPage.profit,
    title: "Technology-Driven Edge",
    desc: "Harnessing the power of data science and automation, we optimize trading decisions with precision. Our proprietary algorithms and AI-driven insights keep us ahead in dynamic market conditions.",
    id: 5,
  },
  {
    icon: images.landingPage.profit,
    title: "Professional and Exclusive",
    desc: "Gain access to top-tier investment strategies, typically reserved for institutions. Our arbitrage and delta-neutral approach combines precision, craftsmanship, and cutting-edge technology—giving you an exclusive edge in investing.",
    id: 6,
  },
];

export const theTeamYouCanTrustData: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner and Board of Directors",
    bio: `Teagan de Groot has been the director of Edge Capital since 2021.
Teagan has years of experience in investing, as an active trader he has been involved in developing successful trading strategies. In addition, Teagan has held various management positions, and his typical helicopter view makes him extremely suitable to take on the daily management of the company.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Founder and Board of Directors",
    bio: `Paul Lamain is the founder of Edge Capital.
Before founding Edge Capital, he worked at several renowned companies, including a large online broker with global operations and a European institutional asset manager, where he gained valuable knowledge and experience. Alongside Teagan, Paul is responsible for Edge Capital's policies and is closely involved in all aspects of the company.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];

export const timelineData: timelineDataType[] = [
  {
    year: "2015",
    content:
      "Paul Lamain establishes Algorithmic Services B.V., a company specializing in developing and optimizing algorithms for financial enterprises.",
  },
  {
    year: "2016",
    content:
      "Tradealot B.V. launched a low-cost trading platform and completed a fully subscribed bond issuance in 83 days, aiming to disrupt major brokerages.",
  },
  {
    year: "2019",
    content:
      "In partnership with JFD Bank, Tradealot becomes the first entity in the Netherlands to introduce free stock trading, allowing investors to trade physical shares without transaction costs.",
  },
  {
    year: "2022",
    content:
      "Tradealot expands its offerings by launching Tradealot EdgeFund, its first AFM-registered investment fund. Additionally, it initiates Tradealot Bond Issuance III, further strengthening its financial product lineup.",
  },
  {
    year: "2023",
    content:
      "Tradealot rebrands as Edge Capital, a name that better reflects its mission and vision. The new identity aligns with the company’s goal of empowering investors—true to its motto: Investing with an edge!",
  },
  {
    year: "Future",
    content:
      "Edge Capital remains committed to innovation and growth. In 2024, the company will focus on obtaining a full AFM license, enabling it to serve a broader audience and compete more effectively in the investment industry.",
  },
];

export const teamMembers: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner and Board of Directors",
    bio: `Teagan de Groot has been the director of Edge Capital since 2021.
Teagan has years of experience in investing, as an active trader he has been involved in developing successful trading strategies. In addition, Teagan has held various management positions, and his typical helicopter view makes him extremely suitable to take on the daily management of the company.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Founder and Board of Directors",
    bio:  `Paul Lamain is the founder of Edge Capital.
Before founding Edge Capital, he worked at several renowned companies, including a large online broker with global operations and a European institutional asset manager, where he gained valuable knowledge and experience. Alongside Teagan, Paul is responsible for Edge Capital's policies and is closely involved in all aspects of the company.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];
export const advisoryBoard: teamMemberCardstDataType[] = [
  {
    name: "Henk van der Heijden",
    position: "Advisor and Chairman of the Trust Bonds Foundation Edge Capital",
    bio: `Henk van der Heijden has over 30 years of experience in (project) management, with the last 14 years spent at ASML in Veldhoven. He holds a bachelor's degree in Computer Science from Fontys University of Applied Sciences and an Executive Master of Business Administration (MBA) in Strategic Change Management from Maastricht University.
His interests mainly lie in the crypto domain and investing in and mentoring startups. He has been an investor in the company since 2017, taking on the role of Chairman of the Trust Bonds Foundation Edge Capital since August 2022 and the role of advisor since March 2023.`,
    linkedin: "https://www.linkedin.com/in/mvandrunen/",
    image: images.landingPage.Henk,
  },
  {
    name: "Michiel van Drunen",
    position: "Member of the Advisory Board",
    bio: `Since 2024, Michiel van Drunen has been a member of the Advisory Board of Edge Capital.
He has been active in the financial (securities) world since 1988 and has extensive experience as an entrepreneur. He serves on the advisory boards of various companies across different industries and holds several executive positions. He is also involved in various charitable organizations, including serving as a fundraiser for the FoodBank.`,
    linkedin: "https://linkedin.com/in/paullamain",
    image: images.landingPage.Michiel,
  },
];
export const SupportAndCommercial: teamMemberCardstDataType[] = [
  {
    name: "Brahim Bouzerrade",
    position: "Business Development Manager",
    bio: `Brahim is responsible for identifying, developing, and realizing growth opportunities for the company. His focus is on expanding the customer base and developing strategic partnerships. With years of experience, Brahim is regarded as a seasoned sales professional within our team.`,
    linkedin: "https://linkedin.com/in/teagandegroot",
    image: images.landingPage.Brahim,
  },
];

export const charities: charitiesDataType[] = [
  {
    image: images.edgeConnect.panda,
    name: "Pascal",
    organization: "World Wildlife Fund",
    organizationColor: "text-yellow-500",
    description: "Protects nature and the environment worldwide.",
  },
  {
    image: images.edgeConnect.hartstiching,
    name: "Henk",
    organization: "Heart Foundation",
    organizationColor: "text-yellow-500",
    description: "Supports research and treatment of heart diseases.",
  },
  {
    image: images.edgeConnect.fork,
    name: "Michiel",
    organization: "Food Bank Netherlands",
    organizationColor: "text-yellow-500",
    description: "Provides food to people in need.",
  },
  {
    image: images.edgeConnect.jant,
    name: "Paul",
    organization: "Jantje Beton",
    organizationColor: "text-yellow-500",
    description: "Ensures that children play outside more.",
  },
  {
    image: images.edgeConnect.kika,
    name: "Teagan",
    organization: "KiKa Foundation",
    organizationColor: "text-yellow-500",
    description: "Supports research into childhood cancer.",
  },
  {
    image: images.edgeConnect.clini,
    name: "Brahim",
    organization: "CliniClowns",
    organizationColor: "text-yellow-500",
    description: "Brings joy to children in hospitals and care facilities.",
  },
];
