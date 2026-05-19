import { useMemo, useState } from 'react';
import Section from '../ui/Section';

const glossaryItems = [
  {
    term: 'Alternative hypothesis',
    definition:
        'Posits that an effect or association exists between the variables under study. Evidence inconsistent with the null hypothesis provides support for the alternative hypothesis.'
  },
  {
    term: 'Central tendency',
    definition:
        'A summary measure of the typical value of a distribution (e.g., the mean or median), used to compare location across groups.'
  },
  {
    term: 'Coefficient',
    definition:
        'An estimated parameter in a statistical model representing the direction and magnitude of association between a predictor and the outcome, conditional on other covariates.'
  },
  {
    term: 'Confidence interval (CI)',
    definition:
        'An interval estimate that quantifies uncertainty around a parameter or statistic (commonly 95%). Narrower intervals indicate greater precision.'
  },
  {
    term: 'Correlation',
    definition:
        'A measure of linear association between two variables. Positive values indicate that higher values of one variable tend to be associated with higher values of the other; negative values indicate the opposite.'
  },
  {
    term: 'Distribution',
    definition:
        'The pattern of values a variable takes, including its spread, shape, and central tendency.'
  },
  {
    term: 'Hypothesis',
    definition:
        'A testable statement about a relationship or difference between variables that is evaluated using data.'
  },
  {
    term: 'Logistic regression',
    definition:
        'A regression model for a binary outcome that estimates the probability of the outcome as a function of predictor variables; results are commonly summarized using coefficients and odds ratios.'
  },
  {
    term: 'Marginal means (predicted margins)',
    definition:
        'Model-based expected outcomes for specified groups or covariate values, typically averaged over (or standardized to) the distribution of other covariates.'
  },
  {
    term: 'Median',
    definition:
        'The 50th percentile of an ordered set of values; half the observations are above and half are below.'
  },
  {
    term: 'Null hypothesis',
    definition:
        'Posits no effect or association between variables. The p-value assesses the extent to which the observed data are compatible with this hypothesis.'
  },
  {
    term: 'Odds ratio',
    definition:
        'A ratio comparing the odds of an outcome under two conditions or groups. In logistic regression, it corresponds to the multiplicative change in odds associated with a one-unit increase in a predictor (or relative to a reference category), holding other variables constant.'
  },
  {
    term: 'P-value',
    definition:
        'The probability, under the null hypothesis, of observing results at least as extreme as those observed, according to the test statistic.'
  },
  {
    term: 'Predicted probability',
    definition:
        'A model-based estimate of the probability that an outcome occurs for a given set of predictor values.'
  },
  {
    term: 'Quartile',
    definition:
        'Cut points that divide an ordered distribution into four equal parts (25th, 50th, and 75th percentiles).'
  },
  {
    term: 'Sample size',
    definition:
        'The number of observations included in an analysis. Larger samples generally yield more precise estimates, all else equal.'
  },
  {
    term: 'Statistical significance',
    definition:
        'A decision criterion indicating that an effect is unlikely to be explained by sampling variability alone, given a pre-specified threshold (e.g., α = 0.05). Statistical significance does not imply practical importance.'
  },
  {
    term: 'Stratified sample',
    definition:
        'A probability sampling design in which the population is partitioned into non-overlapping strata based on shared characteristics, and samples are drawn within each stratum.'
  },
  {
    term: 'Variance',
    definition:
        'A measure of dispersion equal to the average squared deviation from the mean; larger values indicate greater spread.'
  }
];


const GlossarySection = () => {
  const [query, setQuery] = useState('');
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return glossaryItems;

    return glossaryItems.filter(({ term, definition }) =>
      `${term} ${definition}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <Section
      id="glossary"
      title="Glossary"
      subtitle="Statistical terms referenced across the report and methodology"
      actions={
        <div className="w-full max-w-sm">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="glossary-search">
            Search terms
          </label>
          <input
            id="glossary-search"
            type="search"
            placeholder="Search by term or meaning"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>
      }
    >
      <dl className="grid gap-4 sm:grid-cols-2">
        {filteredItems.map((item) => (
          <div key={item.term} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <dt className="text-sm font-semibold text-slate-900">{item.term}</dt>
            <dd className="mt-1 text-sm text-slate-600">{item.definition}</dd>
          </div>
        ))}
      </dl>
      {filteredItems.length === 0 ? (
        <p className="text-sm text-slate-500">No terms match that search. Try another keyword.</p>
      ) : null}
    </Section>
  );
};

export default GlossarySection;
