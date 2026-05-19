import Card from '../ui/Card';

const narrativePoints = [
  'We analyzed open-ended participant responses describing brand choice rationales and overall decision criteria. Sentiment was quantified using a polarity score ranging from −1 (negative) to +1 (positive). Overall sentiment toward the non-alcoholic beer category is moderately positive (mean ≈ 0.23).',
  'Across the corpus, established brands (e.g., Heineken) are frequently associated with constructs consistent with affective reassurance, including trust, familiarity, and perceived reliability. In contrast, smaller or niche brands can attain higher sentiment scores, plausibly reflecting novelty-related value (e.g., perceived distinctiveness or “pleasant surprise”). “Penn’s Best” displays the highest observed sentiment score; however, interpretation is limited by its comparatively small sample size. Among the major brands, sentiment scores are closely clustered around the midpoint of the distribution, suggesting minimal differentiation based solely on affective response.',
  'For analytic consistency, brand mentions were canonicalized by grouping brand names and their derivatives into a single entity (e.g., “Penn’s Best” and “Penns” were treated as the same brand).',

];

const SentimentSummary = () => (
  <div className="w-full">
    <Card className="w-full max-w-full overflow-hidden">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sentiment analysis overview</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed text-justify">
        {narrativePoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Card>
  </div>
);

export default SentimentSummary;
