export type HypothesisOutcome = {
  id: 'H1' | 'H2' | 'H3';
  title: string;
  intent: string;
  outcome: 'supported' | 'not_supported';
  outcomeLabel: string;
  evidenceStrength: number;
  supportingText: string;
  figuresMentioned?: string[];
};

export const conclusionIntroParagraphs = [
    'The Heineken x MIT Report 2025 examines the transfer of brand trust in the emerging non-alcoholic beer category. The study is based on the premise that established brand equity can reduce consumer uncertainty in relatively unfamiliar product segments, functioning as a signal of quality, reliability, and expected experience.'
];

export const hypotheses: HypothesisOutcome[] = [
  {
    id: 'H1',
    title: 'Hypothesis 1',
    intent: 'To test whether Heineken 0.0 is selected more frequently than non-branded alternatives, providing a direct measure of the mother-brand preference effect.',
    outcome: 'supported',
    outcomeLabel: 'Supported',
    evidenceStrength: 95,
    supportingText: 'Across all tested scenarios, Heineken 0.0 was selected more frequently than both fictional comparators and other benchmark brands. The magnitude and consistency of these effects produced high statistical significance, indicating a robust mother-brand preference advantage.',
    figuresMentioned: ['44', '45']
  },
  {
    id: 'H2',
    title: 'Hypothesis 2',
    intent: 'To assess whether favorable perceptions of the Heineken parent brand are associated with higher purchase likelihood for Heineken 0.0.',
    outcome: 'supported',
    outcomeLabel: 'Supported',
    evidenceStrength: 92,
    supportingText:
    'Results show a consistent and interpretable relationship between mother-brand perceptions and purchase likelihood for Heineken 0.0. Higher expected taste, perceived quality, trust, and familiarity are all positively associated with increased selection probability, with strong statistical significance across measures.',
    figuresMentioned: ['46']
  },
  {
    id: 'H3',
    title: 'Hypothesis 3',
    intent:
      "To test whether the mother-brand effect is stronger among regular alcohol drinkers than among non-drinkers.",
    outcome: 'not_supported',
    outcomeLabel: 'Not supported',
    evidenceStrength: 10,
    supportingText:
      'Comparative analysis between regular and low- or non-drinking respondents reveals no statistically meaningful differences in mother-brand selection rates. This pattern is consistent across individual scenarios and aggregated results, indicating that the mother-brand effect operates similarly across consumption segments.'
  }
];

export const hypothesisOutcomeChartData = hypotheses.map((hypothesis) => ({
  label: hypothesis.id,
  value: hypothesis.evidenceStrength,
  outcome: hypothesis.outcome,
  outcomeLabel: hypothesis.outcomeLabel
}));

export const conclusionKeyTakeaway =
  'Mother-brand signals reliably drive preference and purchase likelihood, but the effect does not materially differ by drinking frequency.';

export const conclusionClosingParagraph = '';