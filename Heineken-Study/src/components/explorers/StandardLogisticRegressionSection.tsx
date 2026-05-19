import Card from '../ui/Card';
import ChartCard from '../charts/ChartCard';
import LineChartWithErrorBars from '../charts/LineChartWithErrorBars';

const seriesPalette = [
  { label: 'Male', color: '#2f5d62' },
  { label: 'Female', color: '#c08457' }
];

const toTitleCase = (labels: string[]) =>
    labels.map((l) =>
        l
            .split(' ')
            .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
            .join(' ')
    )

const chartConfigs = [
    {
        id: 'activity-50',
        title: 'Probability of Choosing the Mother Brand (>50% of Choices) by Activity Level',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Activity Level',
        yAxisLabel: 'Predicted Probability',
        xLabels: toTitleCase(['minimal', 'basic', 'active', 'moderately active', 'highly active'])
    },
    {
        id: 'activity-75',
        title: 'Probability of Choosing the Mother Brand (>75% of Choices) by Activity Level',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Activity Level',
        yAxisLabel: 'Predicted Probability',
        xLabels: toTitleCase(['minimal', 'basic', 'active', 'moderately active', 'highly active'])
    },
    {
        id: 'income-50-a',
        title: 'Probability of Choosing the Mother Brand (>50% of Choices) by Income',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Income Bracket (USD)',
        yAxisLabel: 'Predicted Probability',
        xLabels: ['<$25k', '$50–74k', '$75–99k', '$100–149k', '$150k+']
    },
    {
        id: 'income-75-a',
        title: 'Probability of Choosing the Mother Brand (>75% of Choices) by Income',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Income Bracket (USD)',
        yAxisLabel: 'Predicted Probability',
        xLabels: ['<$25k', '$50–74k', '$75–99k', '$100–149k', '$150k+']
    },
    {
        id: 'agegroup-50-b',
        title: 'Probability of Choosing the Mother Brand (>50% of Choices) by Age Group',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Age Group',
        yAxisLabel: 'Predicted Probability',
        xLabels: ['21–24', '25–34', '35–44', '45–54', '55–65', '65+']
    },
    {
        id: 'agegroup-75-b',
        title: 'Probability of Choosing the Mother Brand (>75% of Choices) by Age Group',
        subtitle: 'Model-predicted probabilities with 95% confidence intervals',
        xAxisLabel: 'Age Group',
        yAxisLabel: 'Predicted Probability',
        xLabels: ['21–24', '25–34', '35–44', '45–54', '55–65', '65+']
    }
]

// Point estimates + estimated 95% CI half-widths (error) read from the plots.

export const seriesByChartId: Record<
    string,
    Array<{
        label: string;
        color: string;
        points: Array<{ value: number; error: number }>;
    }>
> = {
    'activity-50': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.40, error: 0.18 }, // minimal
                { value: 0.50, error: 0.12 }, // basic
                { value: 0.61, error: 0.09 }, // active
                { value: 0.57, error: 0.10 }, // moderately active
                { value: 0.33, error: 0.20 }  // highly active
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.33, error: 0.18 }, // minimal
                { value: 0.43, error: 0.12 }, // basic
                { value: 0.54, error: 0.10 }, // active
                { value: 0.49, error: 0.11 }, // moderately active
                { value: 0.27, error: 0.20 }  // highly active
            ]
        }
    ],

    'activity-75': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.08, error: 0.14 }, // minimal
                { value: 0.12, error: 0.06 }, // basic
                { value: 0.12, error: 0.06 }, // active
                { value: 0.14, error: 0.08 }, // moderately active
                { value: 0.11, error: 0.18 }  // highly active
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.10, error: 0.17 }, // minimal
                { value: 0.15, error: 0.11 }, // basic
                { value: 0.15, error: 0.09 }, // active
                { value: 0.18, error: 0.10 }, // moderately active
                { value: 0.13, error: 0.22 }  // highly active
            ]
        }
    ],

    'income-50-a': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.46, error: 0.12 }, // <$25k
                { value: 0.51, error: 0.13 }, // $50–74k
                { value: 0.58, error: 0.13 }, // $75–99k
                { value: 0.53, error: 0.14 }, // $100–149k
                { value: 0.34, error: 0.22 }  // $150k+
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.39, error: 0.11 }, // <$25k
                { value: 0.44, error: 0.12 }, // $50–74k
                { value: 0.50, error: 0.14 }, // $75–99k
                { value: 0.46, error: 0.15 }, // $100–149k
                { value: 0.28, error: 0.23 }  // $150k+
            ]
        }
    ],

    'income-75-a': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.11, error: 0.09 }, // <$25k
                { value: 0.09, error: 0.06 }, // $50–74k
                { value: 0.14, error: 0.12 }, // $75–99k
                { value: 0.13, error: 0.12 }, // $100–149k
                { value: 0.10, error: 0.22 }  // $150k+
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.13, error: 0.10 }, // <$25k
                { value: 0.12, error: 0.09 }, // $50–74k
                { value: 0.17, error: 0.15 }, // $75–99k
                { value: 0.16, error: 0.16 }, // $100–149k
                { value: 0.12, error: 0.27 }  // $150k+
            ]
        }
    ],

    'agegroup-50-b': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.48, error: 0.13 }, // 21-24
                { value: 0.52, error: 0.10 }, // 25-34
                { value: 0.59, error: 0.10 }, // 35-44
                { value: 0.48, error: 0.11 }, // 45-54
                { value: 0.69, error: 0.18 }, // 55-65
                { value: 0.68, error: 0.27 }  // 65+
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.41, error: 0.13 }, // 21-24
                { value: 0.44, error: 0.11 }, // 25-34
                { value: 0.52, error: 0.11 }, // 35-44
                { value: 0.40, error: 0.13 }, // 45-54
                { value: 0.62, error: 0.18 }, // 55-65
                { value: 0.61, error: 0.27 }  // 65+
            ]
        }
    ],

    'agegroup-75-b': [
        {
            label: seriesPalette[0].label,
            color: seriesPalette[0].color,
            points: [
                { value: 0.07, error: 0.09 }, // 21-24
                { value: 0.09, error: 0.07 }, // 25-34
                { value: 0.13, error: 0.09 }, // 35-44
                { value: 0.14, error: 0.10 }, // 45-54
                { value: 0.22, error: 0.17 }, // 55-65
                { value: 0.26, error: 0.28 }  // 65+
            ]
        },
        {
            label: seriesPalette[1].label,
            color: seriesPalette[1].color,
            points: [
                { value: 0.09, error: 0.11 }, // 21-24
                { value: 0.11, error: 0.09 }, // 25-34
                { value: 0.16, error: 0.10 }, // 35-44
                { value: 0.17, error: 0.12 }, // 45-54
                { value: 0.27, error: 0.18 }, // 55-65
                { value: 0.31, error: 0.29 }  // 65+
            ]
        }
    ]
};



const coefficientRows = [
  { variable: 'Brand Importance Rating', coefficient: '0.66', oddsRatio: '1.93', pValue: '0.000 ***' },
  { variable: 'Importance of Availability', coefficient: '0.58', oddsRatio: '1.78', pValue: '0.012 **' },
  { variable: 'Importance of Variety', coefficient: '-0.39', oddsRatio: '0.67', pValue: '0.044 **' },
  { variable: "Famliarity with O'Doul's", coefficient: '-0.25', oddsRatio: '0.77', pValue: '0.056 *' },
  { variable: 'Familiarity with Budweiser', coefficient: '0.5', oddsRatio: '1.65', pValue: '0.072 *' },
];

const StandardLogisticRegressionSection = () => (
  <div className="space-y-8">
    <Card>
      <p className="text-xs uppercase tracking-wide text-slate-500">Standard logistic regression analysis</p>
      <div className="mt-4 grid gap-4 text-sm text-slate-600">
        <p className="text-justify">
            This section presents the predictive margins derived from the regression models used
            to examine how key demographic factors shape the likelihood of participants
            choosing mother brands above the two established thresholds (50% and 75%) across the entirety of the study.
            The figures report predicted probabilities
            with 95% confidence intervals, disaggregated by gender, allowing direct visual
            comparison across activity level, age group, and income. Together, these results
            provide a structured view of how decision-making tendencies vary across subpopulations
            and where gender differences are most pronounced or minimal. The aim is to clarify not only
            the central tendencies but also the dispersion of the estimates, as captured by the 95%
            confidence intervals, allowing for a more precise evaluation of demographic differences in
            strategic choice behavior.

        </p>
      </div>
    </Card>




    <Card>
          <div className="flex flex-col gap-3">
              <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Variable selection and model specification</p>
                  <p className="mt-1 text-sm text-slate-600 text-justify">
                      The logistic regression model was specified using a parsimonious set of explanatory variables. Candidate predictors were drawn
                      from study measures including demographics (e.g., age, income, activity level), alcohol consumption frequency, brand familiarity,
                      and attitudinal and preference measures. Variables that did not contribute meaningful explanatory power were excluded to improve
                      interpretability and reduce overfitting risk.
                  </p>
              </div>

              <div>
                  <p className="mt-1 text-sm text-slate-600 text-justify">
                      A key predictor in the final specification is the respondent’s stated importance of consuming beer produced by a recognized brand
                      (rated 1 = not important to 5 = very important). This construct is strongly associated with mother-brand choice, with a highly
                      significant effect (p &lt; 0.001).
                  </p>
              </div>

              <div>
                  <p className="mt-1 text-sm text-slate-600 text-justify">
                      Most remaining candidate variables were not statistically significant at conventional thresholds (α = 0.05) and did not materially
                      improve model fit; these variables were therefore not emphasized in the final interpretation. The resulting model prioritizes
                      clarity for decision-making while retaining the strongest observed predictors of mother-brand selection.
                  </p>
              </div>

              <div className="overflow-x-auto">
                  <p className="text-sm text-slate-700">The logistic regression model includes the following variables:</p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Dependent variables</p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
                      <li>
                          Binary indicator equal to 1 if the respondent selected the mother brand in more than 50% of scenarios, and 0 otherwise.
                      </li>
                      <li>
                          Binary indicator equal to 1 if the respondent selected the mother brand in more than 75% of scenarios, and 0 otherwise.
                      </li>
                  </ol>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Independent variables</p>
                  <p className="mt-2 text-sm text-slate-700">Explanatory variables include:</p>

                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      <li>Alcohol Consumption Frequency</li>
                      <li>Brand Importance Rating</li>
                      <li>Likelihood to Switch to Non-Alcoholic</li>
                      <li>Belief that 0.0 Beer Tastes as Good as Regular Beer</li>
                      <li>Expected Taste of Heineken 0.0</li>
                      <li>Perceived Trustworthiness of Heineken</li>
                      <li>Perceived Quality of Heineken</li>
                      <li>Importance of Availability</li>
                      <li>Importance of Variety</li>
                      <li>Importance of Health Consideration</li>
                      <li>Importance of Taste</li>
                      <li>Importance of Price</li>
                      <li>Importance of Purchasing from Trusted Brands</li>
                      <li>Familiarity with O’Doul’s</li>
                      <li>Familiarity with Clear Hops</li>
                      <li>Familiarity with Budweiser</li>
                      <li>Familiarity with Rescue Club</li>
                      <li>Familiarity with Heineken</li>
                  </ul>
              </div>
          </div>
    </Card>


      <Card>
          <div className="flex flex-col gap-3">
              <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Model coefficients</p>
                  <p className="mt-1 text-sm text-slate-600">
                      The table reports coefficient estimates for predictors that are statistically significant in the logistic regression model.
                      Coefficients are presented alongside odds ratios to support interpretation in decision contexts.
                  </p>
              </div>

              <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                          <th className="px-3 py-2 text-left">Variable</th>
                          <th className="px-3 py-2 text-center">Coefficient</th>
                          <th className="px-3 py-2 text-center">Odds Ratio</th>
                          <th className="px-3 py-2 text-center">p-value</th>
                      </tr>
                      </thead>

                      <tbody>
                      {coefficientRows.map((row) => (
                          <tr key={row.variable} className="border-t border-slate-200">
                              <td className="px-3 py-2 text-left text-slate-700">{row.variable}</td>
                              <td className="px-3 py-2 text-center text-slate-600">{row.coefficient}</td>
                              <td className="px-3 py-2 text-center text-slate-600">{row.oddsRatio}</td>
                              <td className="px-3 py-2 text-center text-slate-600">{row.pValue}</td>
                          </tr>
                      ))}
                      </tbody>
                  </table>

                  <p className="mt-2 text-sm text-slate-600">
                      Odds ratios (OR) summarize effect size: OR &gt; 1 indicates higher odds of the outcome, OR &lt; 1 indicates lower odds, and OR ≈ 1
                      indicates limited association, holding other variables constant.
                  </p>

                  <div className="mt-2 text-sm text-slate-600 text-justify">
                      <p>
                          Brand-related factors show the strongest positive associations with mother-brand selection.
                          Higher importance placed on brand and product availability is linked to increased likelihood
                          of choosing a mother-brand option. In contrast, greater emphasis on product variety is
                          associated with lower mother-brand selection. Familiarity effects are mixed: familiarity
                          with Budweiser is positively associated with mother-brand choice, while familiarity with
                          O’Doul’s shows a negative association.
                      </p>
                  </div>
              </div>
          </div>
      </Card>

      <Card>
          <p className="text-xs uppercase tracking-wide text-slate-500">Statistical note</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
              <p>
                  Statistical significance is reported using standard thresholds. Smaller p-values indicate stronger evidence that the estimated effect
                  differs from zero, conditional on the model specification.
              </p>
              <p className="text-sm text-slate-600">
                  *** <em>p</em> &lt; 0.01, ** <em>p</em> &lt; 0.05, * <em>p</em> &lt; 0.10
              </p>
          </div>
      </Card>

      <Card>
          <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">Interpretation of predicted probabilities</p>
              <p className="mt-1 text-sm text-slate-600 text-justify">
                  The figures below present model-implied predicted probabilities for the two dependent outcomes: selecting the mother brand in more than
                  50% of scenarios and selecting the mother brand in more than 75% of scenarios. Estimates are stratified by activity level, income,
                  age group, and gender to summarize variation in model-predicted outcomes across respondent segments.
              </p>
              <p className="mt-1 text-sm text-slate-600 text-justify">
                  Points denote predicted probabilities (0 to 1), and vertical bars denote 95% confidence intervals. Wider intervals reflect greater variability in the estimates. Segment differences should be assessed in conjunction with confidence interval overlap and the underlying
                  sample sizes, and interpreted as model-based associations rather than causal effects.
              </p>
          </div>
      </Card>


      <div className="grid gap-6 lg:grid-cols-2">
          {chartConfigs.map((chart) => (
              <ChartCard
                  key={chart.id}
                  title={chart.title}
              >
                  <LineChartWithErrorBars
                      xLabels={chart.xLabels}
                      xAxisLabel={chart.xAxisLabel}
                      yAxisLabel={chart.yAxisLabel}
                      series={seriesByChartId[chart.id]}
                      ariaLabel={`${chart.title} line chart with 95% confidence intervals`}
                  />
              </ChartCard>
          ))}
      </div>
  </div>
);

export default StandardLogisticRegressionSection;
