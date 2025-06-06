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
  descriptionNL?: string;
}

export const whyEdgeCapitalData: whyEdgeCapitalType[] = [
  {
    icon: images.landingPage.profit,
    title: "Why did you choose these specific currencies?",
    desc: "We ensure stability through a market-neutral approach, minimizing volatility with advanced algorithms. Our goal is to provide above-average returns while maintaining acceptable risk. Your investments grow steadily with us.",
    id: 1,
  },

  {
    icon: images.landingPage.access,
    title: "What happens if the correlation breaks down? Is that possible?",
    desc: "Yes, it's possible for correlations to temporarily deviate, usually due to unexpected external factors such as geopolitical tensions, financial crises, or natural disasters. Such disruptions typically have a short-term impact on currency equilibrium. Our systems are prepared for this and adapt dynamically. As soon as markets return to being driven by structural and technical factors, historical correlations tend to restore quickly—allowing us to generate returns for our investors.",
    id: 3,
  },
  {
    icon: images.landingPage.handshake,
    title: "What is the most important part of the strategy?",
    desc: "Our strategy is built on a fully integrated system where every step is crucial. From data analysis to determining Entry and exit points—everything works in sync. What truly sets us apart is the continuous optimization of our parameters. This keeps us agile in fast-changing markets and ensures both performance and long-term stability.",
    id: 4,
  },

  {
    icon: images.landingPage.server,
    title: "How is the system monitored and managed securely?",
    desc: "Our system is actively monitored 24/7. We use a multi-layered alert system that immediately flags technical anomalies or market disruptions. This enables us to respond quickly and manage risks effectively. The platform runs on powerful VPS servers with a guaranteed uptime of 99.99%. In addition, we work with multiple independent service providers. In the event of any issues, we can switch instantly, ensuring a stable and secure trading environment—even under",
    id: 6,
  },
];
export const whyEdgeCapitalDataDutch: whyEdgeCapitalType[] = [
  {
    icon: images.landingPage.profit,
    title: "Waarom hebben jullie juist deze valuta gekozen?",
    desc: "We kiezen bewust voor de meest liquide en actief verhandelde valuta ter wereld. Deze markten bieden constante handelsactiviteit, nauwe onderlinge correlaties en voorspelbare prijsbewegingen op basis van economische feiten. Dat maakt ze perfect geschikt voor onze data-gedreven strategieën die geen ruimte laten voor toeval.",
    id: 1,
  },

  {
    icon: images.landingPage.access,
    title: "Wat gebeurt er als de correlatie wegvalt? Is dat mogelijk?",
    desc: "Ja, het is mogelijk dat correlaties tijdelijk afwijken, meestal door onverwachte externe factoren zoals geopolitieke spanningen, financiële crisissen of natuurrampen. Dergelijke verstoringen beïnvloeden doorgaans kortstondig het evenwicht tussen valuta. Onze systemen zijn hierop voorbereid en passen zich dynamisch aan. Zodra markten weer gedreven worden door structurele en technische factoren, herstellen de historische correlaties zich meestal snel en maken wij rendement voor onze beleggers.",
    id: 3,
  },
  {
    icon: images.landingPage.handshake,
    title: "Wat is het belangrijkste onderdeel van de strategie?",
    desc: "Onze strategie bestaat uit een volledig geïntegreerd systeem waarin elke stap cruciaal is. Van data-analyse tot het bepalen van instap- en uitstapmomenten – alles werkt samen. Wat écht het verschil maakt, is de continue optimalisatie van parameters. Hierdoor blijven we wendbaar in snel veranderende markten en behouden we prestaties en stabiliteit op de lange termijn.",
    id: 4,
  },
  
  {
    icon: images.landingPage.server,
    title: "Hoe wordt het systeem gemonitord? Hoe wordt het veilig beheerd?",
    desc: "Ons systeem wordt 24/7 actief gemonitord. We maken gebruik van een meerlaags waarschuwingssysteem dat direct signaleert bij technische afwijkingen of marktverstoringen. Dit stelt ons in staat om snel te reageren en risico’s effectief te beheersen.",
    id: 6,
  },
];

export const theTeamYouCanTrustData: teamMemberCardstDataType[] = [
     {
    name: "Aron Broeken",
    position: "General manager EdgeNext",
    bio: "Aron Broeken combines vision, leadership, and execution power in his role as General Manager. With years of experience in asset management and trading, he guides the organization toward sustainable growth and scalable operations with strategic insight, decisiveness, and accountability.",
    linkedin: "https://www.linkedin.com/in/aron-broeken-52b876171",
    image: images.landingPage.Aron,
  },
   {
    name: "Pepijn van den Hurk",
    position: "Head of finance and technology EdgeNext",
    bio: "Pepijn van den Hurk plays a central role in shaping the fund’s financial and technological strategy. He oversees financial operations including capital allocation, risk management, and reporting, while also driving the long-term shift toward scalable, tech-driven processes.",
    linkedin: "https://www.linkedin.com/in/pepijn-van-den-hurk-ba457a20a/",
    image: images.landingPage.Pepijn,
  },

{
    name: "Tom Meulemans",
    position: "Head of relationships and sales EdgeNext",
    bio: "Tom Meulemans manages relationships and sales for the fund. With a strong commercial background and clear insight into investor needs, he helps grow and support the fund’s network. As the main contact for (potential) investors, Tom is known for explaining complex financial topics clearly and building long-term, trusted partnerships.",
    linkedin: "https://www.linkedin.com/in/label10/",
    image: images.landingPage.Tom,
  },
];

export const theTeamYouCanTrustDataDutch: teamMemberCardstDataType[] = [
     {
    name: "Aron Broeken",
    position: "General manager",
    bio: "Aron Broeken combineert visie, leiderschap en executiekracht in zijn rol als General Manager. Met jarenlange ervaring in asset management en trading, stuurt hij met strategisch inzicht, besluitvaardigheid en verantwoordelijkheid de organisatie richting duurzame groei en schaalbare bedrijfsvoering.",
    linkedin: "https://www.linkedin.com/in/aron-broeken-52b876171",
    image: images.landingPage.Aron,
  },
  {
    name: "Pepijn van den Hurk",
    position: "Hoofd financiën en technologie EdgeNext",
    bio: "Pepijn van den Hurk speelt een centrale rol in zowel de financiële als technologische strategie van het fonds. Hij is verantwoordelijk voor de financiële operatie, waaronder kapitaalallocatie, risicobeheer en rapportage, en stuurt tegelijkertijd de langetermijnontwikkeling aan richting schaalbare, technologiegedreven processen.",
    linkedin: "https://www.linkedin.com/in/pepijn-van-den-hurk-ba457a20a/",
    image: images.landingPage.Pepijn,
  },
  {
    name: "Tom Meulemans",
    position: "Hoofd relaties en sales EdgeNext",
    bio: "Tom Meulemans is verantwoordelijk voor relatiebeheer en verkoop van het fonds. Met een sterke commerciële achtergrond en scherp inzicht in de behoeften van investeerders helpt hij bij het opbouwen en onderhouden van het netwerk. Als hoofdcontact voor (potentiële) investeerders staat Tom bekend om zijn vermogen om complexe financiële onderwerpen helder uit te leggen en duurzame, vertrouwensvolle relaties op te bouwen.",
    linkedin: "https://www.linkedin.com/in/label10/",
    image: images.landingPage.Tom,
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
      "Paul Lamain changes the company's name to Tradealot B.V. and introduces a bond issuance. Tradealot focuses on launching a trading platform where investors can trade shares for a fixed low monthly fee. With this, Tradealot aims to compete with the established players in the brokerage industry and disrupt the traditional revenue model. The bond issuance is a great success and is fully subscribed within 83 days.",
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
      "At EdgeNext, we have ambitious goals. Our aim is to grow into a leading multi-strategy fund within the next few years. We place high priority on further developing our systems and expanding our team. Together with Edge Capital, we have a clear growth objective: to reach €100 million in assets under management within five years.",
  },
];
export const timelineDataDutch: timelineDataType[] = [
  {
    year: "2015",
    content:
      "Paul Lamain richt Algorithmic Services B.V. op,  een bedrijf dat gespecialiseerd is in het ontwikkelen en optimaliseren van algoritmes voor financiële ondernemingen.",
  },
  {
    year: "2016",
    content:
      "Paul Lamain verandert de naam van de onderneming naar Tradealot B.V. en introduceert een obligatie-uitgifte. Tradealot richt zich op het opzetten van een handelsplatform waarop beleggers aandelen kunnen verhandelen tegen vaste lage kosten per maand. Tradealot wil hiermee de concurrentie aangaan met de gevestigde orde in het brokerlandschap en het traditionele verdienmodel doorbreken. De obligatie-uitgifte is een groot succes en binnen 83 dagen volgeschreven.",
  },
  {
    year: "2019",
    content:
      "In samenwerking met JFD Bank wordt Tradealot de eerste partij in Nederland die gratis aandelenhandel introduceert, waardoor beleggers fysieke aandelen kunnen verhandelen zonder transactiekosten.",
  },
  {
    year: "2022",
    content:
      "Tradealot breidt zijn aanbod uit met de lancering van Tradealot EdgeFund, het eerste bij de AFM geregistreerde beleggingsfonds. Daarnaast start het met Tradealot Obligatie-uitgifte III, waarmee het zijn reeks financiële producten verder vergroot.",
  },
  {
    year: "2023",
    content:
      "Tradealot veranderd haar naam in Edge Capital. De nieuwe naam sluit perfect aan bij de bedrijfsactiviteiten en weerspiegelt ons motto; Beleggen met een voorsprong!",
  },
  {
    year: "Future",
    content:
      "Met EdgeNext hebben we vooruitstrevende doelstellingen. We streven ernaar om binnen enkele jaren uit te groeien tot een toonaangevend multi-strategie fonds. De verdere ontwikkeling van onze systemen en de uitbreiding van ons team hebben daarbij hoge prioriteit. Gezamenlijk met Edge Capital hebben we een duidelijk groeidoel: binnen vijf jaar willen we €100 miljoen aan vermogen onder beheer realiseren.",
  },
];


//team section

export const teamMembers: teamMemberCardstDataType[] = [
 {
  name: "Teagan de Groot",
  position: "Partner and board of directors",
  bio: `Teagan is the director of Edge Capital and plays a valuable role as an advisor to the EdgeNext team — both solicited and unsolicited. With his experience and strategic insight, he supports the further development of the label. In addition, Teagan ensures that the support and commercial departments operate within the established protocols and quality standards of Edge Capital.`,
  linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
  image: images.landingPage.teagan,
},
{
  name: "Paul Lamain",
  position: "Founder and board of directors",
  bio: `Paul Lamain, founder of Edge Capital, brings over 20 years of experience in leading teams and building organizations. In his strategic role, he provides valuable guidance to EdgeNext to support further growth. Paul also ensures that all EdgeNext activities remain compliant with applicable laws and regulations.`,
  linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
  image: images.landingPage.paul,
},

];


export const SupportAndCommercial: teamMemberCardstDataType[] = [
  {
    name: "Bernard Beerding",
    position: "Manager business development",
    bio: "Bernard Beerding brings years of experience in building and leading sales teams. At EdgeNext, he is responsible for developing our commercial team — a role that perfectly aligns with his expertise, drive, and attention to detail.",
    linkedin: "https://www.linkedin.com/in/bernard-beerding-599a0a247/",
    image: images.landingPage.Bernard,
  },
];

export const SupportAndCommercialDutch: teamMemberCardstDataType[] = [
  {
    name: "Bernard Beerding",
    position: "Manager bedrijfsontwikkeling",
    bio: "Bernard Beerding heeft jarenlange ervaring in het bouwen en leiden van verkoopteams. Bij EdgeNext is hij verantwoordelijk voor het ontwikkelen van ons commerciële team – een rol die perfect aansluit bij zijn expertise, gedrevenheid en aandacht voor detail.",
    linkedin: "https://www.linkedin.com/in/bernard-beerding-599a0a247/",
    image: images.landingPage.Bernard,
  },
];



export const teamMembersDutch: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner en Raad van Bestuur",
    bio: `⁠Teagan is directeur van Edge Capital en speelt een waardevolle rol als adviseur voor het team van EdgeNext – zowel gevraagd als ongevraagd. Met zijn ervaring en strategisch inzicht ondersteunt hij de verdere ontwikkeling van het label. Daarnaast ziet Teagan erop toe dat de support- en commerciële afdelingen opereren binnen de vastgestelde protocollen en kwaliteitsstandaarden van Edge Capital.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Oprichter en Raad van Bestuur",
    bio: `Paul Lamain, oprichter van Edge Capital, brengt meer dan 20 jaar ervaring mee in het aansturen van teams en het bouwen van organisaties. Vanuit zijn strategische rol voorziet hij EdgeNext van waardevol advies om verdere groei te realiseren. Daarnaast ziet Paul erop toe dat alle activiteiten van EdgeNext in lijn blijven met de geldende wet- en regelgeving.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];






export const edgeNextTeam: teamMemberCardstDataType[] = [
  {
    name: "Aron Broeken",
    position: "General manager EdgeNext",
    bio: "Aron Broeken combines vision, leadership, and execution power in his role as General Manager. With years of experience in asset management and trading, he guides the organization toward sustainable growth and scalable operations with strategic insight, decisiveness, and accountability.",
    linkedin: "https://www.linkedin.com/in/aron-broeken-52b876171",
    image: images.landingPage.Aron,
  },
  {
    name: "Pepijn van den Hurk",
    position: "Head of finance and technology EdgeNext",
    bio: "Pepijn van den Hurk plays a central role in shaping the fund’s financial and technological strategy. He oversees financial operations including capital allocation, risk management, and reporting, while also driving the long-term shift toward scalable, tech-driven processes.",
    linkedin: "https://www.linkedin.com/in/pepijn-van-den-hurk-ba457a20a/",
    image: images.landingPage.Pepijn,
  },
  {
    name: "Tom Meulemans",
    position: "Head of relationships and sales EdgeNext",
    bio: "Tom Meulemans manages relationships and sales for the fund. With a strong commercial background and clear insight into investor needs, he helps grow and support the fund’s network. As the main contact for (potential) investors, Tom is known for explaining complex financial topics clearly and building long-term, trusted partnerships.",
    linkedin: "",
    image: images.landingPage.Tom,
  },

    {
    name: "Bernard Beerding",
    position: "Manager business development",
    bio: "Bernard Beerding brings years of experience in building and leading sales teams. At EdgeNext, he is responsible for developing our commercial team — a role that perfectly aligns with his expertise, drive, and attention to detail.",
    linkedin: "https://www.linkedin.com/in/bernard-beerding-599a0a247/",
    image: images.landingPage.Bernard,
  },
];


export const edgeNextTeamDutch: teamMemberCardstDataType[] = [
  {
    name: "Aron Broeken",
    position: "General manager",
    bio: "Aron Broeken combineert visie, leiderschap en executiekracht in zijn rol als General Manager. Met jarenlange ervaring in asset management en trading, stuurt hij met strategisch inzicht, besluitvaardigheid en verantwoordelijkheid de organisatie richting duurzame groei en schaalbare bedrijfsvoering.",
    linkedin: "https://www.linkedin.com/in/aron-broeken-52b876171",
    image: images.landingPage.Aron,
  },
  {
    name: "Pepijn van den Hurk",
    position: "Hoofd financiën en technologie EdgeNext",
    bio: "Pepijn van den Hurk speelt een centrale rol in zowel de financiële als technologische strategie van het fonds. Hij is verantwoordelijk voor de financiële operatie, waaronder kapitaalallocatie, risicobeheer en rapportage, en stuurt tegelijkertijd de langetermijnontwikkeling aan richting schaalbare, technologiegedreven processen.",
    linkedin: "https://www.linkedin.com/in/pepijn-van-den-hurk-ba457a20a/",
    image: images.landingPage.Pepijn,
  },
  {
    name: "Tom Meulemans",
    position: "Hoofd relaties en sales EdgeNext",
    bio: "Tom Meulemans is verantwoordelijk voor relatiebeheer en verkoop van het fonds. Met een sterke commerciële achtergrond en scherp inzicht in de behoeften van investeerders helpt hij bij het opbouwen en onderhouden van het netwerk. Als hoofdcontact voor (potentiële) investeerders staat Tom bekend om zijn vermogen om complexe financiële onderwerpen helder uit te leggen en duurzame, vertrouwensvolle relaties op te bouwen.",
    linkedin: "",
    image: images.landingPage.Tom,
  },
    {
    name: "Bernard Beerding",
    position: "AManager business development",
    bio: "Bernard Beerding brengt jarenlange ervaring mee in het opzetten en aansturen van salesteams. Binnen EdgeNext is hij verantwoordelijk voor de opbouw van ons commerciële team — een rol die perfect aansluit bij zijn expertise, gedrevenheid en oog voor detail.",
    linkedin: "https://www.linkedin.com/in/bernard-beerding-599a0a247/",
    image: images.landingPage.Bernard,
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

export const charitiesDutch: charitiesDataType[] = [
  {
    image: images.edgeConnect.panda,
    name: "Pascal",
    organization: "Wereld Natuur Fonds",
    organizationColor: "text-yellow-500",
    description: "Beschermt de natuur en het milieu wereldwijd.",
  },
  {
    image: images.edgeConnect.hartstiching,
    name: "Henk",
    organization: "Hartstichting",
    organizationColor: "text-yellow-500",
    description: "Ondersteunt onderzoek en behandeling van hartziekten.",
  },
  {
    image: images.edgeConnect.fork,
    name: "Michiel",
    organization: "Voedselbank Nederland",
    organizationColor: "text-yellow-500",
    description: "Voorziet mensen in nood van voedsel.",
  },
  {
    image: images.edgeConnect.jant,
    name: "Paul",
    organization: "Jantje Beton",
    organizationColor: "text-yellow-500",
    description: "Zorgt ervoor dat kinderen meer buiten spelen.",
  },
  {
    image: images.edgeConnect.kika,
    name: "Teagan",
    organization: "KiKa Stichting",
    organizationColor: "text-yellow-500",
    description: "Ondersteunt onderzoek naar kinderkanker.",
  },
  {
    image: images.edgeConnect.clini,
    name: "Brahim",
    organization: "CliniClowns",
    organizationColor: "text-yellow-500",
    description: "Brengt plezier aan zieke kinderen in ziekenhuizen en zorginstellingen.",
  },
];
