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
    volatilityRiskPremiumTitle: "Correlation Arbitrage",
    volatilityRiskPremiumDescription:
      "The EdgeNext Fund uses a fully automated trading strategy focused on over 30 carefully selected currency combinations. These pairs are primarily composed of strong currencies such as the Euro (EUR), US Dollar (USD), New Zealand Dollar (NZD), Australian Dollar (AUD), and Canadian Dollar (CAD). Our strategy specifically targets currency pairs that share a common base or quote currency, leading to historically strong correlations — for example, EUR/CAD and USD/CAD, both sharing CAD.",
    volatilityRiskPremiumPopupTitle: "Correlation Arbitrage",
    volatilityRiskPremiumPopupContent:
      "The EdgeNext Fund uses a fully automated trading strategy focused on over 30 carefully selected currency combinations. These pairs are primarily composed of strong currencies such as the Euro (EUR), US Dollar (USD), New Zealand Dollar (NZD), Australian Dollar (AUD), and Canadian Dollar (CAD). Our strategy specifically targets currency pairs that share a common currency, leading to historically strong correlations — for example, EUR/CAD and USD/CAD.\n\nThe trading method is based on the principle of 'mean reversion' — the idea that currency prices tend to stabilize around their historical average ratios. When a currency pair deviates significantly from its historical pattern, our models predict a correction toward the mean. Once such a deviation is detected by our quantitative models, we take simultaneous long and short positions in related currency pairs, a process known as hedging. This enables us to profit from both upward and downward market moves, depending on the direction of the correction. Profits are generated when the market reverts and currency pairs return to their expected relationship. This strategy typically carries lower-than-average market risk.\n\nThis market-neutral approach allows us to generate returns without relying on overall market direction while minimizing risk. If the market becomes unpredictable or volatility rises, positions are automatically adjusted, hedged, or closed to limit losses and optimize returns. This ensures a stable strategy, even in turbulent periods.\n\nAdditionally, the system is fully automated and optimized monthly using the latest market analysis methods and accurate data. This allows us to quickly adapt to changing market conditions and emerging trends. Thanks to this setup, the strategy is executed effectively — free from emotions or subjective decision-making.",
    interestRateArbitrageTitle: "Interest Rate Arbitrage",
    interestRateArbitrageDescription: "…", // keep existing or replace as needed
    marketNeutralSwapArbitragePopupTitle: "Market-Neutral Swap Arbitrage",
    marketNeutralSwapArbitragePopupContent: "…", // keep existing or replace as needed
    learnMore: "Learn More",
    close: "Close"
  },
  nl: {
    ourStrategy: "Onze strategie",
    volatilityRiskPremiumTitle: "Correlatie Arbitrage",
    volatilityRiskPremiumDescription:
      "Het EdgeNext Fund maakt gebruik van een volautomatische handelsstrategie die zich richt op meer dan 30 zorgvuldig geselecteerde valutacombinaties. Deze combinaties bestaan voornamelijk uit sterke valuta’s zoals de Euro (EUR), de Amerikaanse dollar (USD), Nieuw-Zeelandse dollar (NZD), Australische dollar (AUD) en de Canadese dollar (CAD). Onze strategie richt zich specifiek op valutaparen die een gemeenschappelijke valuta delen en daardoor historisch sterke correlaties vertonen. Denk hierbij aan paren als EUR/CAD en USD/CAD, waarbij de CAD als gemeenschappelijke valuta fungeert.",
    volatilityRiskPremiumPopupTitle: "Correlatie Arbitrage",
    volatilityRiskPremiumPopupContent:
      "Het EdgeNext Fund maakt gebruik van een volautomatische handelsstrategie die zich richt op meer dan 30 zorgvuldig geselecteerde valutacombinaties. Deze combinaties bestaan voornamelijk uit sterke valuta’s zoals de Euro (EUR), de Amerikaanse dollar (USD), Nieuw-Zeelandse dollar (NZD), Australische dollar (AUD) en de Canadese dollar (CAD). Onze strategie richt zich specifiek op valutaparen die een gemeenschappelijke valuta delen en daardoor historisch sterke correlaties vertonen. Denk hierbij aan paren als EUR/CAD en USD/CAD, waarbij de CAD als gemeenschappelijke valuta fungeert.\n\nDe handelsaanpak is gebaseerd op het principe van ‘mean reversion’ – het idee dat prijzen van valuta steeds weer stabiliseren rond hun ‘gemiddelde verhouding’. Wanneer een valutapaar aanzienlijk afwijkt van zijn historische prijspatroon, voorspellen onze modellen een correctie richting dat gemiddelde. Zodra onze kwantitatieve modellen zo’n afwijking detecteren, nemen we gelijktijdig long- en shortposities in op gerelateerde valutaparen, ook wel ‘hedging’. Dit stelt ons in staat om te profiteren van zowel stijgingen als dalingen in de markt, afhankelijk van de richting van de correctie. Winst wordt gegenereerd wanneer de markt zich herstelt en de valutaparen terugkeren naar hun verwachte verhouding. Dit type strategie wordt doorgaans gekenmerkt door een lager dan gemiddeld marktrisico.\n\nDeze marktneutrale benadering stelt ons in staat om winst te genereren zonder afhankelijk te zijn van de algemene richting van de markt, terwijl het risico tegelijkertijd wordt geminimaliseerd. Als de markt onvoorspelbaar wordt of als volatiliteit toeneemt, worden posities automatisch aangepast, afgedekt of gesloten om verliezen te beperken en het rendement te optimaliseren. Op deze manier behouden we een stabiele strategie, ook tijdens onrustige periodes.\n\nVerder opereert het systeem volledig geautomatiseerd en wordt het maandelijks geoptimaliseerd op basis van de laatste marktanalysemethoden en accurate data. Dit stelt ons in staat om snel in te spelen op veranderingen in de marktomstandigheden en ons aan te passen aan nieuwe trends. Dankzij deze aanpak kunnen we de strategie effectief uitvoeren zonder dat emoties of subjectieve overwegingen de handelsbeslissingen beïnvloeden.",
    interestRateArbitrageTitle: "Rente-arbitrage",
    interestRateArbitrageDescription: "…", // keep existing or replace as needed
    marketNeutralSwapArbitragePopupTitle: "Rentearbitrage",
    marketNeutralSwapArbitragePopupContent: "…", // keep existing or replace as needed
    learnMore: "Meer informatie",
    close: "Sluiten"
  }
};





  