export const categoryAverageSentiment = 0.23;

export const sentimentByBrand = [
  { brand: "Penn's Best", avgSentiment: 0.32, totalCount: 27, positivePct: 66.7, neutralPct: 33.3, negativePct: 0.0 },
  { brand: 'Cobra', avgSentiment: 0.26, totalCount: 130, positivePct: 72.3, neutralPct: 21.5, negativePct: 6.2 },
  { brand: "Beck's", avgSentiment: 0.24, totalCount: 62, positivePct: 61.3, neutralPct: 33.9, negativePct: 4.8 },
  { brand: 'Budweiser', avgSentiment: 0.24, totalCount: 124, positivePct: 65.3, neutralPct: 25.0, negativePct: 9.7 },
  { brand: 'Rescue Club', avgSentiment: 0.23, totalCount: 202, positivePct: 65.4, neutralPct: 29.2, negativePct: 5.5 },
  { brand: 'Heineken', avgSentiment: 0.23, totalCount: 389, positivePct: 65.0, neutralPct: 27.8, negativePct: 7.2 },
  { brand: 'Kaliber', avgSentiment: 0.22, totalCount: 55, positivePct: 67.3, neutralPct: 27.3, negativePct: 5.5 },
  { brand: 'Clausthaler', avgSentiment: 0.20, totalCount: 32, positivePct: 59.4, neutralPct: 18.8, negativePct: 21.9 },
  { brand: 'Bavaria', avgSentiment: 0.20, totalCount: 69, positivePct: 58.0, neutralPct: 36.2, negativePct: 5.8 },
  { brand: "O'Doul's", avgSentiment: 0.19, totalCount: 146, positivePct: 56.2, neutralPct: 30.8, negativePct: 13.0 }
];

export type SentimentByBrand = (typeof sentimentByBrand)[number];
