// src/constant/translations.ts
interface StrategyTranslations {
    ourStrategy: string;
    volatilityRiskPremiumTitle: string;
    volatilityRiskPremiumDescription: string;
    volatilityRiskPremiumPopupTitle: string;
    volatilityRiskPremiumPopupContent: string;
    interestRateArbitrageTitle: string;
    interestRateArbitrageDescription: string;
    marketNeutralSwapArbitragePopupTitle: string;
    marketNeutralSwapArbitragePopupContent: string;
    learnMore: string;
    close: string;
  }
  
  interface Translations {
    en: StrategyTranslations;
    nl: StrategyTranslations;
  }
  
  export const translations: Translations = {
    en: {
      ourStrategy: "Our strategy",
      volatilityRiskPremiumTitle: "Volatility Risk Premium",
      volatilityRiskPremiumDescription:
        "EdgeFund aims to exploit the volatility risk premium in globally developed equity and bond markets by writing call and put options to buyers seeking financial insurance in exchange for a premium. To implement this strategy, EdgeFund will sell put and call options with various strike prices and expiration dates on various equity and bond reference assets, including indices, in globally developed markets.",
      volatilityRiskPremiumPopupTitle: "Volatility Risk Premium",
      volatilityRiskPremiumPopupContent: `The Volatility Risk Premium (VRP) is the compensation that investors demand for providing protection against potential market downturns. 
  
  It exists because market participants are generally risk-averse and willing to pay a premium for protection against negative events. This premium manifests as an overpricing of options relative to their historical realized volatility.
  
  Our strategy systematically harvests this premium by:
  
  1. Selling options in a controlled manner
  2. Delta-hedging to maintain market neutrality
  3. Managing tail risk through diversification and position sizing
  4. Utilizing proprietary volatility forecasting models
  
  This approach generates consistent returns with low correlation to traditional asset classes, making it an excellent portfolio diversifier.`,
      interestRateArbitrageTitle: "Interest Rate Arbitrage",
      interestRateArbitrageDescription:
        "Market-neutral interest rate arbitrage is an investment strategy aimed at generating profit by exploiting price inefficiencies between interest rates, while simultaneously minimizing exposure to overall market movements. The goal is to create a position that is not overly influenced by broader market trends, hence the term “market-neutral.”",
      marketNeutralSwapArbitragePopupTitle: "Market-Neutral Swap Arbitrage",
      marketNeutralSwapArbitragePopupContent: `Our Market-Neutral Swap Arbitrage strategy exploits inefficiencies in the interest rate swap market by identifying and capitalizing on temporary mispricing between related instruments.
  
  Key components of this strategy include:
  
  1. Identifying basis spread anomalies between different tenor points on the swap curve
  2. Exploiting differences between swap rates and government bond yields
  3. Capitalizing on cross-currency basis swap opportunities
  4. Leveraging our proprietary term structure models to identify relative value opportunities
  
  This strategy is designed to be market-neutral, with returns driven by the convergence of pricing anomalies rather than by directional market movements. The strategy employs moderate leverage and sophisticated risk management techniques to ensure consistent performance across various market regimes.`,
      learnMore: "Learn More",
      close: "Close",
    },
    nl: {
      ourStrategy: "Onze strategie",
      volatilityRiskPremiumTitle: "Volatiliteitsrisicopremie",
      volatilityRiskPremiumDescription:
        "EdgeFund streeft ernaar de volatiliteitsrisicopremie in wereldwijd ontwikkelde aandelen- en obligatiemarkten te benutten door call- en putopties te schrijven aan kopers die financiële verzekering zoeken in ruil voor een premie. Om deze strategie te implementeren, zal EdgeFund put- en callopties verkopen met verschillende uitoefenprijzen en vervaldata op diverse aandelen- en obligatiereferentieactiva, inclusief indices, in wereldwijd ontwikkelde markten.",
      volatilityRiskPremiumPopupTitle: "Volatiliteitsrisicopremie",
      volatilityRiskPremiumPopupContent: `De Volatiliteitsrisicopremie (VRP) is de vergoeding die beleggers eisen voor het bieden van bescherming tegen mogelijke marktdalingen. 
  
  Deze premie bestaat omdat marktdeelnemers over het algemeen risicomijdend zijn en bereid zijn een premie te betalen voor bescherming tegen negatieve gebeurtenissen. Deze premie uit zich in een overwaardering van opties ten opzichte van hun historisch gerealiseerde volatiliteit.
  
  Onze strategie oogst deze premie systematisch door:
  
  1. Opties op een gecontroleerde manier te verkopen
  2. Delta-hedging om markneutraliteit te behouden
  3. Staart risico te beheren door diversificatie en positiegrootte
  4. Gebruik te maken van eigen volatiliteitsvoorspellingsmodellen
  
  Deze aanpak genereert consistente rendementen met lage correlatie met traditionele activaklassen, waardoor het een uitstekende portfoliodiversificator is.`,
      interestRateArbitrageTitle: "Rente-arbitrage",
      interestRateArbitrageDescription:
        "Marktneutrale rente-arbitrage is een beleggingsstrategie die gericht is op het behalen van winst door prijsinefficiënties tussen rentetarieven te benutten, terwijl tegelijkertijd de blootstelling aan algemene marktbewegingen wordt geminimaliseerd. Het doel is om een positie te creëren die niet overmatig wordt beïnvloed door bredere markttrends, vandaar de term 'marktneutraal'.",
      marketNeutralSwapArbitragePopupTitle: "Marktneutrale Swap Arbitrage",
      marketNeutralSwapArbitragePopupContent: `Onze Marktneutrale Swap Arbitrage-strategie maakt gebruik van inefficiënties in de rentemarkt door tijdelijke prijsverschillen tussen gerelateerde instrumenten te identificeren en te benutten.
  
  Belangrijke componenten van deze strategie zijn onder meer:
  
  1. Het identificeren van basisspread-anomalieën tussen verschillende looptijdpunten op de swapcurve
  2. Het benutten van verschillen tussen swaprentes en yields op staatsobligaties
  3. Het profiteren van kansen in cross-currency basis swaps
  4. Het inzetten van onze eigen termstructuurmodellen om relatieve waarde kansen te identificeren
  
  Deze strategie is ontworpen om marktneutraal te zijn, met rendementen die worden gedreven door de convergentie van prijsanomalieën in plaats van door directionele marktbewegingen. De strategie maakt gebruik van gematigde hefboomwerking en geavanceerde risicobeheertechnieken om consistente prestaties te garanderen in verschillende marktomstandigheden.`,
      learnMore: "Meer informatie",
      close: "Sluiten",
    },
  };





  