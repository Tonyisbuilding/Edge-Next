import images from "./images";




export 
interface whyEdgeCapitalType {
    icon: string;
    title: string;
    desc: string;
    id:number; 
}

export 
interface theTeamYouCanTrustDataType {
    avatar: string;
    name: string;
    id:number; 
}
export 
interface teamMemberCardstDataType {
    name: string;
    position: string;
    bio: string;
    linkedin: string;
    image: string;
}
export 
interface timelineDataType {
    year: string;
    content: string;
}


export const whyEdgeCapitalData: whyEdgeCapitalType[] = 
[
    {
        icon: images.landingPage.scale,
        title: "Stable and Profitable",
        desc: 'We ensure stability through a market-neutral approach, minimizing volatility with advanced algorithms. Our goal is to provide above-average returns while maintaining acceptable risk. Your investments grow steadily with us.',
        id: 1,
    },
    {
        icon: images.landingPage.scale,
        title: "Stable and Profitable",
        desc: 'We ensure stability through a market-neutral approach, minimizing volatility with advanced algorithms. Our goal is to provide above-average returns while maintaining acceptable risk. Your investments grow steadily with us.',
        id: 2,
    },
    {
        icon: images.landingPage.schedule,
        title: "Personal and Accessible",
        desc: 'Gain access to elite investment strategies typically reserved for institutions. Our approach combines arbitrage, delta-neutral investing, and cutting-edge technology to deliver precision and reliability. Invest with an edge.',
        id: 3,
    },
    {
        icon: images.landingPage.handshake,
        title: "Reliability First",
        desc: 'Trust is our priority. We uphold strict agreements and work with external advisors to refine our methods. This ensures accountability, transparency, and long-term relationships built on reliability.',
        id: 4,
    },
    {
        icon: images.landingPage.handshake,
        title: "Reliability First",
        desc: 'Trust is our priority. We uphold strict agreements and work with external advisors to refine our methods. This ensures accountability, transparency, and long-term relationships built on reliability.',
        id: 5,
    },
    {
        icon: images.landingPage.money_briefcase,
        title: "Professional and Exclusive",
        desc: 'Gain access to top-tier investment strategies, typically reserved for institutions. Our arbitrage and delta-neutral approach combines precision, craftsmanship, and cutting-edge technology—giving you an exclusive edge in investing.',
        id: 6,
    },
];

export const theTeamYouCanTrustData:  theTeamYouCanTrustDataType[] = [
    {
        id: 1,
        avatar: images.landingPage.teagan,
        name: "Teagan de Groot"
    },
    {
        id: 2,
        avatar: images.landingPage.paul,
        name: "Paul Lamain"
    },
];

export  const timelineData: timelineDataType[] = [
    {
      year: "2015",
      content: "Paul Lamain establishes Algorithmic Services B.V., a company specializing in developing and optimizing algorithms for financial enterprises."
    },
    {
      year: "2016",
      content: "The company expands its client base across Europe, introducing new algorithmic trading solutions that enhance market efficiency."
    },
    {
      year: "2019",
      content: "Launch of proprietary risk management platform, allowing institutional investors to optimize portfolios with quantitative methods."
    },
    {
      year: "2022",
      content: "Strategic partnership with major financial institutions to implement AI-driven market analysis tools across global markets."
    },
    {
      year: "2023",
      content: "Acquisition of DataTech Solutions, strengthening the company's position in data analytics and financial technology integration."
    },
    {
      year: "Future",
      content: "Planned global expansion with innovative blockchain-based solutions for decentralized finance and institutional cryptocurrency adoption."
    }
  ];

  export  const teamMembers: teamMemberCardstDataType[] = [
    {
      name: "Teagan de Groot",
      position: "Partner and Board of Directors",
      bio: "With over 10 years of experience in software development, Teagan leads our technical strategy and innovation initiatives.",
      linkedin: "https://linkedin.com/in/teagandegroot",
      image: images.landingPage.teagan
    },
    {
      name: "Paul Lamain",
      position: "Founder and Board of Directors",
      bio: "Paul brings creative vision to our projects with his expertise in UI/UX design and brand development.",
      linkedin: "https://linkedin.com/in/paullamain",
      image: images.landingPage.paul
    }
  ];
  export  const advisoryBoard: teamMemberCardstDataType[] = [
    {
      name: "Henk van der Heijden",
      position: "Partner and Board of Directors",
      bio: "With over 10 years of experience in software development, Teagan leads our technical strategy and innovation initiatives.",
      linkedin: "https://linkedin.com/in/teagandegroot",
      image: images.landingPage.Henk
    },
    {
      name: "Michiel van Drunen",
      position: "Partner and Board of Directors",
      bio: "Paul brings creative vision to our projects with his expertise in UI/UX design and brand development.",
      linkedin: "https://linkedin.com/in/paullamain",
      image: images.landingPage.Michiel
    }
  ];
  export  const SupportAndCommercial: teamMemberCardstDataType[] = [
    {
      name: "Brahim Bouzerrade",
      position: "Business Development Manager",
      bio: "With over 10 years of experience in software development, Teagan leads our technical strategy and innovation initiatives.",
      linkedin: "https://linkedin.com/in/teagandegroot",
      image: images.landingPage.Brahim
    },
  ];
