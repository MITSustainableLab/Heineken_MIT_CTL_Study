export type LikelihoodScore = 1 | 2 | 3 | 4 | 5;

export interface DiscrepancyFigure {
  id: string;
  caption: string;
  kind: 'likelihood' | 'choice';
  brands?: string[];
}

export interface LikelihoodChart {
  figureId: string;
  brandLabel: string;
  distribution: { score: LikelihoodScore; pct: number }[];
}

export interface ChoiceChart {
  figureId: string;
  kind: 'headToHead' | 'multiBrand';
  shares: { label: string; pct: number }[];
}

export interface DiscrepancyCase {
  id: string;
  title: string;
  figures: DiscrepancyFigure[];
  narrative: string[];
  likelihoodCharts: LikelihoodChart[];
  choiceCharts: ChoiceChart[];
  takeaway: string;
}

export const introCopy = `
This section analyzes instances in which respondents’ stated purchase likelihood does not correspond with their observed selections in the simulated choice tasks. Identifying these discrepancies is analytically important because it distinguishes between attitudinal intent and revealed preference.

Self-reported likelihood captures reflective, stated evaluation, whereas discrete choice behavior reflects decision-making under comparative and contextual constraints. Divergences between the two provide insight into the stability of demand signals, the presence of social desirability or projection bias, and the extent to which expressed intentions translate into competitive behavior.

Including this analysis strengthens the validity of the findings by clarifying where survey-based indicators may overstate or understate actual substitution patterns, thereby improving the interpretation of brand positioning, portfolio strategy, and policy-relevant demand projections.
`;

export const discrepancyCases: DiscrepancyCase[] = [
  {
    id: 'discrepancy-1',
    title: 'Discrepancy 1: Budweiser Zero vs. Rescue Club N.A.',
    figures: [
      {
        id: 'figure-37',
        caption: 'Stated Purchase Likelihood: Budweiser Zero',
        kind: 'likelihood',
        brands: ['Budweiser Zero']
      },
      {
        id: 'figure-38',
        caption: 'Stated Purchase Likelihood: Rescue Club N.A.',
        kind: 'likelihood',
        brands: ['Rescue Club N.A.']
      },
      {
        id: 'figure-39',
        caption: 'Budweiser Zero vs. Rescue Club N.A.',
        kind: 'choice',
        brands: ['Budweiser Zero', 'Rescue Club N.A.']
      }
    ],
    narrative: [
      'Self-reported purchase likelihood for Budweiser Zero and Rescue Club N.A. clusters around the midpoint of the scale, with Budweiser Zero\n' +
      '  rated slightly higher on average.',
      'However, in forced-choice comparisons, Rescue Club N.A. is selected more frequently. This pattern indicates a measurable divergence between\n' +
      '  stated intention and observed preference when respondents evaluate trade-offs in a direct comparison.'
    ],
    likelihoodCharts: [
      {
        figureId: 'figure-37',
        brandLabel: 'Budweiser Zero',
        distribution: [
          { score: 1, pct: 22.0 },
          { score: 2, pct: 14.0 },
          { score: 3, pct: 23.2 },
          { score: 4, pct: 21.8 },
          { score: 5, pct: 18.9 }
        ]
      },
      {
        figureId: 'figure-38',
        brandLabel: 'Rescue Club N.A.',
        distribution: [
          { score: 1, pct: 25.7 },
          { score: 2, pct: 18.9 },
          { score: 3, pct: 26.4 },
          { score: 4, pct: 17.4 },
          { score: 5, pct: 11.6 }
        ]
      }
    ],
    choiceCharts: [
      {
        figureId: 'figure-39',
        kind: 'headToHead',
        shares: [
          { label: 'Rescue Club N.A.', pct: 60.5 },
          { label: 'Budweiser Zero', pct: 39.5 }
        ]
      }
    ],
    takeaway: ''
  },
  {
    id: 'discrepancy-2',
    title: "Discrepancy 2: Budweiser Zero vs. O’Doul’s N.A.",
    figures: [
      {
        id: 'figure-40',
        caption: "Stated Purchase Likelihood: O’Doul’s N.A.",
        kind: 'likelihood',
        brands: ["O’Doul’s N.A."]
      },
      {
        id: 'figure-41',
        caption: "Budweiser Zero vs. O’Doul’s N.A.",
        kind: 'choice',
        brands: ['Budweiser Zero', "O’Doul’s N.A."]
      }
    ],
    narrative: [
        "O’Doul’s N.A. shows relatively low stated purchase intent, with most responses concentrated between scores of 2 and 4 on the likelihood scale. In direct comparison tasks, however, Budweiser Zero achieves only a modest selection advantage over O’Doul’s N.A., despite the larger gap in reported intent between the two brands. This pattern suggests that self-reported purchase likelihood may not fully translate into observed choice behavior when consumers evaluate concrete alternatives."
       ],
    likelihoodCharts: [
      {
        figureId: 'figure-40',
        brandLabel: "O’Doul’s N.A.",
        distribution: [
          { score: 1, pct: 26.9 },
          { score: 2, pct: 19.1 },
          { score: 3, pct: 26.9 },
          { score: 4, pct: 16.0 },
          { score: 5, pct: 11.1 }
        ]
      }
    ],
    choiceCharts: [
      {
        figureId: 'figure-41',
        kind: 'headToHead',
        shares: [
          { label: 'Budweiser Zero', pct: 53.2 },
          { label: "O’Doul’s N.A.", pct: 46.8 }
        ]
      }
    ],
    takeaway: ''
  },
  {
    id: 'discrepancy-3',
    title: 'Discrepancy 3: Beck’s Blue — Stated Likelihood vs. Multi-Brand Choice Outcome',
    figures: [
      {
        id: 'figure-42',
        caption: "Stated Purchase Likelihood: Beck's Blue",
        kind: 'likelihood',
        brands: ["Beck’s Blue"]
      },
      {
        id: 'figure-43',
        caption: 'Multi-Brand Comparison: Mother Brands vs. Non-Mother Brands',
        kind: 'choice',
        brands: [
          'Heineken 0.0',
          'Budweiser Zero',
          'Kaliber N.A.',
          "O’Doul’s N.A.",
          'Clausthaler N.A.',
          "Beck’s Blue"
        ]
      }
    ],
    narrative: [
      'Beck’s Blue receives moderate stated purchase-likelihood ratings, with the highest concentration of responses at the midpoint of the scale.',
      'In the multi-brand forced-choice task, however, Heineken 0.0 captures the largest share of selections, while Beck’s Blue records the lowest share among the six available brands. This divergence indicates that the stated purchase likelihood for Beck’s Blue does not translate into equivalent selection behavior when respondents evaluate multiple competing alternatives.'
    ],
    likelihoodCharts: [
      {
        figureId: 'figure-42',
        brandLabel: "Beck’s Blue",
        distribution: [
          { score: 1, pct: 26.8 },
          { score: 2, pct: 20.0 },
          { score: 3, pct: 30.2 },
          { score: 4, pct: 15.6 },
          { score: 5, pct: 7.3 }
        ]
      }
    ],
    choiceCharts: [
      {
        figureId: 'figure-43',
        kind: 'multiBrand',
        shares: [
          { label: 'Heineken 0.0', pct: 47.5 },
          { label: 'Budweiser Zero', pct: 16.0 },
          { label: 'Kaliber N.A.', pct: 13.3 },
          { label: "O’Doul’s N.A.", pct: 9.9 },
          { label: 'Clausthaler N.A.', pct: 7.7 },
          { label: "Beck’s Blue", pct: 5.6 }
        ]
      }
    ],
    takeaway: 'Mid-scale likelihood ratings obscure market consolidation in forced-choice tasks.'
  }
];

export const metaInsights = [
  'Stated purchase-likelihood ratings do not consistently predict observed brand selection in competitive scenarios.',
  'Forced-choice tasks provide a more accurate representation of relative brand performance than self-reported purchase-likelihood measures.'
];
