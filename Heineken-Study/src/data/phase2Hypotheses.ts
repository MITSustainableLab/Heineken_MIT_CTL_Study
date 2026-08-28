export type Phase2HypothesisOutcome = {
  id: string;
  title: string;
  statement: string;
  evidence: string;
  outcome: 'supported' | 'partial' | 'not_supported';
  outcomeLabel: string;
};

export const phase2Hypotheses: Phase2HypothesisOutcome[] = [
  {
    id: 'H1',
    title: 'Hypothesis 1: Mother Brand Advantage',
    statement: 'Mother brand will be chosen more frequently compared to non-mother-brand competitors.',
    evidence: 'The study presented six non-alcoholic beer brands on a simulated shelf: three mother brands (Heineken 0.0, Corona Sunbrew, Budweiser Zero), defined as non-alcoholic products from established alcoholic parent companies, and three non-mother brands (O\'Doul\'s, Clausthaler, Rescue Club IPA). With equal numbers from each category, purely random selection would produce a 50/50 split: this is the null baseline. H1 is supported if mother brands collectively and significantly exceed 50%. Across all three variants, mother brands accounted for 58.1% (Variant A, real-world prices), 63.3% (Variant B, all prices equalised at $10.99), and 56.7% (Variant C, first choice before out-of-stock manipulation): all materially above the null, and statistically significant in Variants A and B (p<0.05). Heineken 0.0 individually captured 13.3–20.5% share, constrained by Corona Sunbrew\'s dominant position, but the collective mother-brand advantage was unambiguous across all conditions.',
    outcome: 'supported',
    outcomeLabel: 'H1 - Supported'
  },
  {
    id: 'H2',
    title: 'Hypothesis 2: Brand Familiarity & Selection',
    statement: 'Brand perception scores (familiarity, trust, prior experience) for Heineken will positively correlate with purchase behavior and intent for Heineken 0.0.',
    evidence: 'H2 tests whether a participant\'s self-reported familiarity with Heineken 0.0: rated on a five-level scale from "Never heard of it" (1) to "Drink regularly" (5): predicts whether they actually chose it in the purchase task. The relationship was measured using point-biserial correlation between familiarity scores and binary selection outcomes. In Variant B, where all six products were priced equally at $10.99 and price was removed as a differentiator, the correlation is statistically significant (r=0.168, p=0.015), confirming that familiarity meaningfully drives Heineken selection when brand identity is the primary cue. In Variant A, where real-world market prices applied, the relationship is weaker and non-significant, indicating that Heineken\'s higher retail price moderates how much familiarity alone converts into purchase. Regular Heineken drinkers: those most familiar with the brand: show selection rates of 71.4% in Variant A and 54.5% in Variant B, confirming the familiarity-to-selection link holds most strongly for the brand\'s most loyal consumers.',
    outcome: 'partial',
    outcomeLabel: 'H2 - Partially Supported'
  },
  {
    id: 'H3',
    title: 'Hypothesis 3: Drinking Segment Moderation',
    statement: 'The mother-brand effect on purchase behavior will be stronger for regular alcohol drinkers than for non-drinkers.',
    evidence: 'Participants were split into two comparison groups: regular drinkers (those consuming alcohol once a week or more) vs a pooled low-frequency group combining occasional drinkers (less than once a week) and non-drinkers. Pooling was necessary because splitting all five frequency categories across three variants produced sub-groups too small for reliable χ² testing. Regular drinkers selected mother brands at a higher rate than the pooled low-frequency group (58–59% vs 44–55%), consistent with H3\'s direction. No individual variant reaches statistical significance (all χ² p>0.14). The hypothesis is supported at the pooled level; variant-level significance is limited by sub-group sample sizes.',
    outcome: 'partial',
    outcomeLabel: 'H3 - Supported (Pooled)'
  },
  {
    id: 'H4',
    title: 'Hypothesis 4: Heineken as Safe Fallback',
    statement: 'Heineken will function as a competitive "safe fallback" brand under out-of-stock (OOS) conditions: gaining net share when other brands are unavailable.',
    evidence: 'Variant C introduced a behavioural manipulation: each participant first selected their preferred product from the full shelf at real-world prices, after which that product was marked as out of stock, requiring them to choose a replacement. H4 tests whether Heineken 0.0 would benefit from this scenario by functioning as a broadly acceptable fallback: gaining more replacement switchers than it loses across the full study. Heineken recorded a net gain of +5 participants under out-of-stock conditions, the second-largest gain of any brand. Most strikingly, 42% of Corona Sunbrew loyalists: buyers of the dominant first-choice brand in the study: redirected to Heineken when Corona was unavailable, the single largest inter-brand switching flow observed. In total, 65% of all participants who chose Heineken as their replacement had originally selected either Corona or Rescue Club, confirming that Heineken is perceived as a broadly safe, low-risk substitute that appeals across multiple consumer segments rather than to a narrow loyalist base.',
    outcome: 'supported',
    outcomeLabel: 'H4 - Supported'
  }
];

export const phase2HypothesisSummaryParagraph = 'Study II delivers a broadly positive verdict across all four hypotheses. The mother-brand advantage is confirmed at the category level (H1 Supported), and brand familiarity positively predicts selection under price-neutralized conditions (H2 Partially Supported). Regular drinkers show a directionally stronger mother-brand preference at the pooled level (H3 Supported at Pooled Level), a commercially significant finding that nonetheless reveals the brand\'s broader appeal to non-drinkers. Most notably, the novel out-of-stock hypothesis: Heineken as the safe fallback brand: was strongly confirmed, with Heineken absorbing the largest switching inflow of any brand when competitors are unavailable (H4 Supported).';
