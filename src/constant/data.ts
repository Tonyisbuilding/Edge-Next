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