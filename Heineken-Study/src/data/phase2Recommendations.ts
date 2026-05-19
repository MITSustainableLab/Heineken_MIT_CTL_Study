export type Recommendation = {
  id: string;
  priority: 'HIGH' | 'MEDIUM–HIGH' | 'MEDIUM';
  title: string;
  evidence: string;
  recommendation: string;
};

export const phase2Recommendations: Recommendation[] = [
  {
    id: '1',
    priority: 'HIGH',
    title: 'Address the Pricing Headwind',
    evidence: "Heineken's market share rises from 13.3% to 20.5% when its $9.56 price is equalized with competitors at $10.99 (p=0.070). At $9.56, Heineken sits above cheaper alternatives ($8.32–$8.36), which diverts price-sensitive shoppers who would otherwise favor its brand equity.",
    recommendation: 'Conduct a price elasticity study at retail to determine the optimal price point. Consider promotional pricing during trial campaigns, multi-pack bundle offers, or loyalty-program integration to reduce the effective price gap without altering MSRP.'
  },
  {
    id: '2',
    priority: 'HIGH',
    title: 'Develop Stronger Packaging and Visual Differentiation',
    evidence: "Corona's share advantage over Heineken is partly attributable to appearance — 23% of Corona buyers cited packaging/design vs 4% of Heineken buyers. Corona's vitamin D visual messaging is a meaningful differentiator that Heineken currently lacks.",
    recommendation: 'Commission a packaging refresh or limited-edition series for Heineken 0.0 that amplifies visual distinctiveness on-shelf. Consider whether a nutritional or functional claim (analogous to Corona\'s vitamin D) is appropriate and feasible, as this creates an additional decision hook for health-aware consumers.'
  },
  {
    id: '3',
    priority: 'MEDIUM–HIGH',
    title: 'Invest in the Non-Drinker Segment',
    evidence: 'H3 failure reveals that the mother-brand advantage applies equally to non-drinkers and regular drinkers. Non-drinkers represent 12–14% of the Phase 2 sample and choose mother brands at 44–55% rates — only modestly below regular drinkers.',
    recommendation: "Develop marketing messaging specifically for non-alcohol lifestyle consumers that positions Heineken 0.0 as a premium social beverage for all occasions — not as a beer substitute. Emphasize brand heritage and quality signal rather than the '0.0%' alcohol angle."
  },
  {
    id: '4',
    priority: 'MEDIUM–HIGH',
    title: 'Exploit Heineken–Corona Competitive Proximity',
    evidence: '42% of Corona loyalists redirect to Heineken when Corona is OOS — the largest inter-brand switching flow in Phase 2. Heineken and Corona occupy virtually identical mental positions as "clean, light premium lager."',
    recommendation: 'Develop targeted competitive messaging and retail materials that draw direct taste comparisons or highlight Heineken 0.0\'s superior lager heritage vs Corona Sunbrew. Secure preferred shelf placement adjacent to Corona to capture cross-shopping attention. Consider head-to-head taste campaigns.'
  },
  {
    id: '5',
    priority: 'MEDIUM',
    title: 'Leverage the "Safe Fallback" Position in Distribution',
    evidence: 'Heineken gains net positive participants under OOS conditions and is the #1 replacement destination for Corona loyalists. Its universal acceptability makes it a distribution priority.',
    recommendation: 'Ensure Heineken 0.0 maintains maximum availability and shelf-fill across all retail channels. In accounts where only one premium NA beer can be stocked, Heineken\'s broad appeal as a fallback brand should be a key argument for shelf prioritization over Corona\'s more targeted appeal.'
  },
  {
    id: '6',
    priority: 'MEDIUM',
    title: 'Convert the Loyal Core into Brand Advocates',
    evidence: "Heineken's repurchase intent (78–84% top-2 box) substantially exceeds its first-choice share (13–20%), suggesting a loyal but narrow consumer base. These buyers are brand-trust driven and highly likely to repurchase.",
    recommendation: 'Implement a consumer loyalty and advocacy program — referral incentives, community content, or subscription pricing — to transform the high-commitment buyer base into a word-of-mouth acquisition channel. Focus acquisition efforts on the 25–54 age group and male demographic, where Heineken\'s per-capita share indexes highest.'
  }
];

export const discussionPoints = [
  {
    id: 'mother-brand',
    title: 'The Mother-Brand Effect is Real',
    body: 'The central finding of Phase 2 simultaneously validates and challenges Heineken. The mother-brand advantage documented in Phase 1 translates into a meaningful competitive advantage at the aggregate level. Mother brands collectively capture 58–63% of selections in a 50/50 field. However, Heineken is sharing this advantage with two equally powerful mother brands — Corona and Budweiser — while also competing against Rescue Club IPA, a category innovator that bypasses brand-trust logic entirely. Corona\'s dominance (30–37%) is the most commercially significant Phase 2 finding: its vitamin D differentiation, distinctive packaging, and social brand identity have translated more effectively into NA beer choice than Heineken\'s classic lager positioning.'
  },
  {
    id: 'price-headwind',
    title: 'Price is a Meaningful Headwind for Heineken',
    body: 'The A-versus-B price neutralization experiment provides a clean empirical estimate of how much Heineken\'s share is suppressed by its pricing. The +7.2 percentage point gain under flat pricing (13.3% → 20.5%, p=0.070) suggests that at current market prices, Heineken is losing consumers to cheaper alternatives who would otherwise prefer its brand. This is a structural disadvantage that can be addressed through retail strategy without requiring changes to the product itself.'
  },
  {
    id: 'loyal-core',
    title: 'The Loyal Core Dynamic',
    body: 'The combination of modest first-choice share and high repurchase intent (78–84%) reveals an important competitive dynamic: Heineken\'s NA beer buyer base is small but intensely loyal. These buyers are driven primarily by brand trust (63% cite it as their #1 factor), have above-average familiarity with the brand, and are very likely to repurchase. The strategic challenge is not retention — it is acquisition. Heineken must attract first-time triers who are currently drawn to Corona\'s taste/packaging story or Rescue Club\'s IPA novelty.'
  },
  {
    id: 'corona-axis',
    title: 'Competitive Proximity and the Heineken–Corona Axis',
    body: 'The switching matrix from Variant C reveals a finding with significant strategic implications: Heineken and Corona are each other\'s primary competitive substitute. The 42% of Corona loyalists who switch to Heineken when Corona is OOS — and the 46% of Heineken loyalists who switch to Corona — define a "clean lager" consumer segment that currently splits its preference between the two brands based on relatively minor cues. This tight competitive proximity means any marketing initiative that improves Heineken\'s packaging, flavor differentiation, or vitamin-equivalent health messaging could trigger meaningful share gains at Corona\'s expense.'
  },
  {
    id: 'non-drinker',
    title: 'The Non-Drinker Opportunity',
    body: "While H3 is supported at the pooled level, the finding that non-drinkers gravitate toward mother brands at nearly the same rate as regular drinkers (44–55% depending on variant) reveals that the NA beer category's brand dynamics extend well beyond the traditional beer audience. Heineken 0.0's growth potential is not limited to converting existing Heineken alcoholic beer drinkers — it extends to the entire population of consumers seeking a socially normalised, trusted non-alcoholic beverage. Marketing campaigns that focus purely on 'your favourite beer, now without alcohol' miss this non-drinker audience."
  }
];

export const phase2ConclusionParagraphs = [
  "Phase 2 of the MIT × Heineken (Sober Spirits) collaboration delivers a nuanced and commercially actionable set of findings that both validate and refine the Phase 1 conclusions. The fundamental thesis that strong mother brands hold an advantage in the non-alcoholic beer category is confirmed: when consumers face a competitive shelf of six brands, products backed by established alcoholic parent companies collectively capture 58–63% of purchases, significantly above what chance would predict. The mother-brand effect is real, durable, and extends across drinking segments — including non-drinkers.",
  "However, Heineken 0.0 is not the primary beneficiary of this advantage in the current competitive environment. Corona Sunbrew, with its distinctive vitamin D positioning, appealing packaging, and strong taste heritage, captures 2–3 times Heineken's market share across all experimental conditions. Heineken's competitive underperformance is not a brand equity deficit — its familiarity scores are the highest of any NA beer in the study — but a failure to convert that equity into first choices in the face of price competition and Corona's stronger visual/functional differentiation.",
  "Three findings in particular point toward clear commercial action. First, the price neutralization effect demonstrates that removing Heineken's pricing disadvantage raises its share by 7.2 percentage points. Second, the brand trust concentration (63% of Heineken buyers place brand trust as their #1 factor) indicates a highly loyal but narrow consumer base, suggesting the priority is trial generation rather than loyalty retention. Third, the safe fallback dynamic — where Heineken gains net share under OOS conditions and is the #1 destination for displaced Corona buyers — reveals a competitive proximity that could be exploited through targeted retail marketing."
];

export const phase2CoreConclusions = [
  "Mother brands collectively hold a significant competitive advantage on the NA beer shelf (58–63% of purchases, p<0.05 in Variants A and B).",
  "Corona Sunbrew is the dominant mother brand in the current competitive environment, capturing 2–3× Heineken's first-choice share.",
  "Heineken's share rises +7.2% when its price disadvantage is removed, suggesting a commercially addressable pricing headwind.",
  "Heineken buyers are brand-trust driven (63% cite brand trust as #1 factor) and show high repurchase intent (78–84%) — a loyal but narrow consumer base.",
  "Heineken functions as the 'safe fallback' brand under OOS conditions, gaining net share and absorbing the largest switching inflow from Corona loyalists.",
  "The mother-brand effect applies equally across all drinking segments, including non-drinkers — the NA beer brand opportunity is not limited to existing alcohol consumers."
];
