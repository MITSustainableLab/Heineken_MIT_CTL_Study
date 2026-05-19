import { useMemo, useState } from 'react';
import Tabs from '../ui/Tabs';
import Chip from '../ui/Chip';
import ChartCard from '../charts/ChartCard';
import DonutChart from '../charts/DonutChart';
import resultsComparisons from '../../data/resultsComparisons.json';
import { formatPercent, toShareFromPercent, PARTICIPANT_SAMPLE_SIZE } from '../../utils/participantMetrics';

const categoryTabs = [
  { id: '1v1_nonpriced', label: 'One-on-One (No Price)' },
  { id: '1v1_priced', label: 'One-on-One (Price)' },
  { id: 'multi_brand', label: 'Multi-Brand' }
] as const;

const formatLabels: Record<string, string> = {
  can: ' Single can',
  '12-pack': '12-pack'
};

const scenarioLabels: Record<string, string> = {
  equal_price: 'Priced Equally',
  heineken_cheaper: 'Heineken Priced Lower',
  fictional_brand_cheaper: 'Fictional Brand Priced Lower'
};

const categoryFilters = {
  '1v1_nonpriced': {
    brands: ['Heineken 0.0', 'Budweiser Zero', 'Star Brew N.A.', 'Rescue Club N.A.', "O'Doul's N.A."],
    formats: [],
    scenarios: []
  },
  '1v1_priced': {
    brands: [],
    formats: ['12-pack', 'can'],
    scenarios: ['equal_price', 'heineken_cheaper', 'fictional_brand_cheaper']
  },
  'multi_brand': {
    brands: [],
    formats: [],
    scenarios: []
  }
} as const;

type CategoryId = typeof categoryTabs[number]['id'];
type BrandOption = typeof categoryFilters[keyof typeof categoryFilters]['brands'][number];
type FormatOption = typeof categoryFilters[keyof typeof categoryFilters]['formats'][number];
type ScenarioOption = typeof categoryFilters[keyof typeof categoryFilters]['scenarios'][number];
type BrandFilter = 'all' | BrandOption;
type FormatFilter = 'all' | FormatOption;
type ScenarioFilter = 'all' | ScenarioOption;
type Comparison = (typeof resultsComparisons.comparisons)[number];

const ResultsComparisons = () => {
  const [category, setCategory] = useState<CategoryId>('1v1_nonpriced');
  const [brandFilter, setBrandFilter] = useState<BrandFilter>('all');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');
  const [scenarioFilter, setScenarioFilter] = useState<ScenarioFilter>('all');
  const [showAll, setShowAll] = useState(false);

  const comparisons = resultsComparisons.comparisons as Comparison[];
  const brandOptions = useMemo(() => categoryFilters[category].brands, [category]);
  const formatOptions = useMemo(() => categoryFilters[category].formats, [category]);
  const scenarioOptions = useMemo(() => categoryFilters[category].scenarios, [category]);
  const hasFilters = [brandOptions.length, formatOptions.length, scenarioOptions.length].some((length) => length > 0);

  const filtered = comparisons.filter((item) => {
    if (item.category !== category) return false;
    if (brandOptions.length && brandFilter !== 'all' && !item.brandTags.includes(brandFilter)) return false;
    if (formatOptions.length && formatFilter !== 'all' && !item.formatTags.includes(formatFilter)) return false;
    return !(scenarioOptions.length && scenarioFilter !== 'all' && !item.scenarioTags.includes(scenarioFilter));
  });

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <div className="space-y-6">
      <Tabs options={categoryTabs} value={category} onChange={setCategory} />
      {hasFilters ? (
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-3">
          {brandOptions.length ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-slate-500">Brand set</p>
              <div className="flex flex-wrap gap-2">
                {(['all', ...brandOptions] as BrandFilter[]).map((brand) => (
                  <Chip
                    key={brand}
                    label={brand === 'all' ? 'All' : brand}
                    selected={brandFilter === brand}
                    onClick={() => setBrandFilter(brand)}
                  />
                ))}
              </div>
            </div>
          ) : null}
          {formatOptions.length ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-slate-500">Package format</p>
              <div className="flex flex-wrap gap-2">
                {(['all', ...formatOptions] as FormatFilter[]).map((format) => (
                  <Chip
                    key={format}
                    label={format === 'all' ? 'All' : formatLabels[format] ?? format}
                    selected={formatFilter === format}
                    onClick={() => setFormatFilter(format)}
                  />
                ))}
              </div>
            </div>
          ) : null}
          {scenarioOptions.length ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-slate-500">Scenario</p>
              <div className="flex flex-wrap gap-2">
                {(['all', ...scenarioOptions] as ScenarioFilter[]).map((scenario) => (
                  <Chip
                    key={scenario}
                    label={scenario === 'all' ? 'All' : scenarioLabels[scenario] ?? scenario}
                    selected={scenarioFilter === scenario}
                    onClick={() => setScenarioFilter(scenario)}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((item) => {
          const chartOptions = item.options.map((option) => {
            const share = toShareFromPercent(option.value, PARTICIPANT_SAMPLE_SIZE);
            return {
              label: option.label,
              share,
              percent: option.value,
              value: share
            };
          });
          const dataTable = (
            <table className="w-full">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-wide text-slate-500">
                  <th className="py-1 font-semibold">Option</th>
                  <th className="py-1 text-right font-semibold">Share</th>
                  <th className="py-1 text-right font-semibold">Percent</th>
                </tr>
              </thead>
              <tbody>
                {chartOptions.map((option) => (
                  <tr key={option.label} className="border-b border-slate-200 last:border-0">
                    <td className="py-1 text-left font-medium text-slate-700">{option.label}</td>
                    <td className="py-1 text-right text-slate-600">{option.share}</td>
                    <td className="py-1 text-right text-slate-600">{formatPercent(option.percent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );

          return (
            <ChartCard
              key={item.id}
              title={item.title}
              interpretation={item.interpretation}
              stats={item.stats}
              dataTable={dataTable}
            >
              <DonutChart data={chartOptions} ariaLabel={`${item.title} comparison chart`} />
            </ChartCard>
          );
        })}
      </div>
      {filtered.length > 6 ? (
        <button
          type="button"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-slate-400"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Show less' : 'Show all'}
        </button>
      ) : null}
    </div>
  );
};

export default ResultsComparisons;
