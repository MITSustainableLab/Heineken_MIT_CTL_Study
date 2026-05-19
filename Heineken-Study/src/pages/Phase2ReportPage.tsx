import { useState } from 'react';
import Section from '../components/ui/Section';
import ImageLightbox from '../components/ui/ImageLightbox';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import Accordion from '../components/ui/Accordion';
import Tabs from '../components/ui/Tabs';
import Callout from '../components/ui/Callout';
import GroupedBarChart from '../components/charts/GroupedBarChart';
import HorizontalBarChart from '../components/charts/HorizontalBarChart';
import ChartCard from '../components/charts/ChartCard';
import phase2Meta from '../data/phase2Meta.json';
import phase2Narrative from '../data/phase2Narrative.json';
import phase2BrandSelection from '../data/phase2BrandSelection.json';
import phase2FactorRanking from '../data/phase2FactorRanking.json';
import phase2OosSwitching from '../data/phase2OosSwitching.json';
import phase2Regional from '../data/phase2Regional.json';
import phase2Demographics from '../data/phase2Demographics.json';
import {
  phase2Hypotheses,
  phase2HypothesisSummaryParagraph
} from '../data/phase2Hypotheses';
import {
  phase2Recommendations,
  discussionPoints,
  phase2ConclusionParagraphs,
  phase2CoreConclusions
} from '../data/phase2Recommendations';

export const phase2Sections = [
  { id: 'ph2-overview',       label: 'Overview' },
  { id: 'ph2-background',     label: 'Study Background' },
  { id: 'ph2-design',         label: 'Experimental Design' },
  { id: 'ph2-demographics',   label: 'Demographics' },
  { id: 'ph2-results-group',  label: 'Results', isGroup: true },
  { id: 'ph2-results',        label: 'Brand Selection',          isSubItem: true },
  { id: 'ph2-demo-results',   label: 'Demographic Sub-Analyses', isSubItem: true },
  { id: 'ph2-drivers',        label: 'Decision Drivers',         isSubItem: true },
  { id: 'ph2-oos',            label: 'Out-of-Stock Analysis',    isSubItem: true },
  { id: 'ph2-repurchase',     label: 'Repurchase Intent',        isSubItem: true },
  { id: 'ph2-hypotheses',     label: 'Hypothesis Outcomes' },
  { id: 'ph2-regional',       label: 'Regional Analysis' },
  { id: 'ph2-regression',     label: 'Regression Insights' },
  { id: 'ph2-discussion',     label: 'Discussion' },
  { id: 'ph2-recommendations',label: 'Recommendations' },
  { id: 'ph2-conclusion',     label: 'Conclusion' }
];

const outcomeColors: Record<string, string> = {
  supported:     'bg-slate-700 text-white',
  partial:       'bg-slate-400 text-white',
  not_supported: 'bg-slate-100 text-slate-600'
};

const priorityColors: Record<string, string> = {
  'HIGH':        'bg-slate-800 text-white',
  'MEDIUM–HIGH': 'bg-slate-500 text-white',
  'MEDIUM':      'bg-slate-200 text-slate-700'
};

const brandImages: Record<string, string> = {
  'Heineken 0.0 6-Pack':         '/images/Heineken_Phase_2.png',
  'Budweiser Zero 6-Pack':       '/images/budweiser_Phase_2.png',
  'Corona Sunbrew 6-Pack':       '/images/Corona_Phase_2.png',
  "O'Doul's Golden 6-Pack":      '/images/odouls_phase_2.jpg',
  'Clausthaler Original 6-Pack': '/images/Claushthaler_Phase_2.jpg',
  'Rescue Club IPA 6-Pack':      '/images/rescue_club_phase_2.png',
  'Heineken 0.0':                '/images/Heineken_Phase_2.png',
  'Corona Sunbrew':              '/images/Corona_Phase_2.png',
  'Rescue Club IPA':             '/images/rescue_club_phase_2.png',
};

const Phase2ReportPage = () => {
  const [brandView, setBrandView] = useState<'byVariant' | 'aggregate'>('aggregate');
  const [demoView, setDemoView] = useState('gender');
  const [regionalView, setRegionalView] = useState('motherBrand');

  const backgroundCards = [
    {
      id: 'context',
      title: 'Context and Background',
      content: (
        <ul className="space-y-2 text-sm text-slate-600">
          {phase2Narrative.context.map((item) => (
            <li key={item} className="text-justify">{item}</li>
          ))}
        </ul>
      )
    },
    {
      id: 'rqs',
      title: 'Research Questions',
      content: (
        <ul className="space-y-3 text-sm text-slate-600">
          {phase2Narrative.researchQuestions.map((rq) => (
            <li key={rq.id} className="space-y-1">
              <p><span className="font-semibold text-slate-700">{rq.id}:</span>{' '}<strong className="text-slate-800">{rq.question}</strong></p>
              <p className="text-slate-500">{rq.explanation}</p>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'hypotheses',
      title: 'Hypotheses',
      content: (
        <ul className="space-y-3 text-sm text-slate-600">
          {phase2Narrative.hypotheses.map((h) => (
            <li key={h.id} className="space-y-1">
              <p><span className="font-semibold text-slate-700">{h.id}:</span>{' '}<strong className="text-slate-800">{h.statement}</strong></p>
              <p className="text-slate-500">{h.rationale}</p>
            </li>
          ))}
        </ul>
      )
    }
  ];

  const demoTabs = [
    { id: 'gender',   label: 'Gender' },
    { id: 'age',      label: 'Age Group' },
    { id: 'activity', label: 'Activity Level' },
    { id: 'alcohol',  label: 'Alcohol Frequency' },
    { id: 'nabeer',   label: 'NA Beer Frequency' }
  ];

  const regionalTabs = [
    { id: 'motherBrand', label: 'Mother Brand %' },
    { id: 'factors',     label: 'Purchase Factors' }
  ];

  return (
    <>
      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <Section id="ph2-overview" title={phase2Meta.title} subtitle={`${phase2Meta.subtitle} • ${phase2Meta.date}`}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-slate-900">{phase2Meta.fullTitle}</h1>
            <div className="space-y-4">
              {phase2Meta.abstract.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-slate-600 text-justify">{para}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <StatCard label="Sample Size"   value={phase2Meta.sampleSize}   note="" />
            <StatCard label="Study Variants" value={phase2Meta.variants}     note="Between-subjects design" />
            <StatCard label="Geography"     value={phase2Meta.geography}    note="" />
            <StatCard label="Participants Recruited Via" value={phase2Meta.platform} note="April 2026" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Callout variant="insight" title="Key Finding — Mother Brand">
            Mother brands (Heineken, Corona, Budweiser) captured <strong>58–63%</strong> of shelf
            selections across all three variants — significantly above the 50% null baseline.
          </Callout>
          <Callout variant="method" title="Key Finding — Price Effect">
            Heineken's share rose from <strong>13.3% → 20.5%</strong> (+7.2 pp) when price was
            equalized at $10.99, revealing a commercially addressable pricing headwind.
          </Callout>
          <Callout variant="note" title="Key Finding — Safe Fallback">
            When Corona was out of stock, <strong>42%</strong> of its loyalists switched to
            Heineken — the largest single inter-brand switching flow in the study.
          </Callout>
        </div>
      </Section>

      {/* ── BACKGROUND ────────────────────────────────────────────── */}
      <Section id="ph2-background" title="Study Background" subtitle="Context, research questions, and hypotheses">
        <Accordion items={backgroundCards} />
      </Section>

      {/* ── EXPERIMENTAL DESIGN ───────────────────────────────────── */}
      <Section id="ph2-design" title="Experimental Design">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">Phase 2 employed a three-variant between-subjects design, in which each participant was randomly assigned to one of three conditions: Variant A, Variant B, or Variant C. All three variants presented participants with the same catalog of six real non-alcoholic beer brands available in the US market, hosted on a custom-built simulated online store developed on Replit. Each participant was given a $15 shopping budget, sized so that they could purchase exactly one product, ensuring a single, forced-choice purchase decision. A lottery-based cash prize was offered as an incentive to encourage participants to shop as they would in real life. All participants completed the same post-shopping survey covering their reasons for purchase, brand familiarity, and likelihood to buy again.</p>
          <p className="text-sm text-slate-600 text-justify">The three variants differed in their pricing and shopping conditions, with each variant designed to shed light on a different aspect of consumer behavior: the effect of real-world market prices (Variant A), the effect of brand strength when price is removed as a factor (Variant B), and how consumers respond when their preferred brand is out of stock (Variant C). Together, the three variants allow for a structured comparison of what drives purchase decisions in the non-alcoholic beer category. The design and flow of each variant are described in detail below.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Variant A</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">Real-World Pricing</h3>
              <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed">
                Participants browsed six non-alcoholic 6-pack beers at prices sourced from Total Wine
                (Boston, MA). Display order was fully randomized. Budget: $15.
              </p>
              <p className="mt-3 text-xs text-slate-500">n = 203</p>
            </div>
            <ImageLightbox
              src="/images/Variant_A_Shelf.png"
              alt="Variant A — Real-world pricing shelf"
              caption="Variant A: shelf with real-world market prices"
              className="max-h-[220px] w-full object-contain"
              containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
            />
          </Card>
          <Card className="flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Variant B</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">Price-Neutralized Brand Purity Test</h3>
              <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed">
                All six products set to a uniform $10.99/6-pack. With price removed as a variable,
                only brand recognition and packaging design differentiated products.
              </p>
              <p className="mt-3 text-xs text-slate-500">n = 210</p>
            </div>
            <ImageLightbox
              src="/images/Variant_B_Shelf.png"
              alt="Variant B — Price-equalised shelf"
              caption="Variant B: all products priced at $10.99"
              className="max-h-[220px] w-full object-contain"
              containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
            />
          </Card>
          <Card className="flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Variant C</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">Out-of-Stock Switching Experiment</h3>
              <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed">
                Real-world pricing plus a behavioral manipulation: the participant's first-choice product
                was shown as "sold out," requiring a second replacement choice. Both choices were recorded.
              </p>
              <p className="mt-3 text-xs text-slate-500">n = 201</p>
            </div>
            <ImageLightbox
              src="/images/Variant_C_Shelf.png"
              alt="Variant C — Out-of-stock shelf"
              caption="Variant C: first-choice product shown as sold out"
              className="max-h-[220px] w-full object-contain"
              containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
            />
          </Card>
        </div>

        <Card className="mt-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Product Catalog (Variant A &amp; C Prices)</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2 text-right">Price</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">ABV</th>
                  <th className="px-4 py-2">Brand Type</th>
                </tr>
              </thead>
              <tbody>
                {phase2BrandSelection.productCatalog.map((row) => (
                  <tr key={row.product} className="border-t border-slate-200">
                    <td className="px-4 py-2 font-medium text-slate-900">
                      <div className="flex items-center gap-3">
                        {brandImages[row.product] && (
                          <ImageLightbox
                            src={brandImages[row.product]}
                            alt={row.product}
                            caption={row.product}
                            className="h-10 w-10 object-contain"
                            containerClassName="flex-shrink-0"
                          />
                        )}
                        <span>{row.product}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right text-slate-700">{row.price}</td>
                    <td className="px-4 py-2 text-slate-600">{row.category}</td>
                    <td className="px-4 py-2 text-slate-600">{row.abv}</td>
                    <td className="px-4 py-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row.type === 'Mother brand' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">Prices sourced from Total Wine, Boston MA. Variant B price: $10.99 for all products.</p>
        </Card>
      </Section>

      {/* ── DEMOGRAPHICS ──────────────────────────────────────────── */}
      <Section id="ph2-demographics" title="Participant Demographics">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">A total of 614 participants were recruited via Prolific in April 2026 and distributed across the three experimental variants, with approximately 200 participants assigned to each condition (Variant A: n=203, Variant B: n=210, Variant C: n=201). This even distribution was intentional, ensuring that each variant had sufficient statistical power to support meaningful comparisons both within and across conditions.</p>
          <p className="text-sm text-slate-600 text-justify">Participant recruitment followed a structured stratification strategy designed to reflect the demographics most relevant to the non-alcoholic beer category. Gender balance was maintained as closely as possible, with recruitment targets set to achieve a roughly equal split between male and female participants. Age stratification prioritized the 25 to 44 age group, which represents the core consumer segment for non-alcoholic beer in the US market, and this is reflected in the higher representation of the 25–34 and 35–44 cohorts in the final sample.</p>
          <p className="text-sm text-slate-600 text-justify">Alcohol consumption patterns were also used as a stratification criterion, given their relevance to the research question. The sample was structured to include approximately 44% regular beer drinkers, 32% non-drinkers, and the remaining proportion drawn from consumers of other alcoholic beverages. This mix was chosen deliberately to allow comparisons between consumers who are already familiar with alcoholic beer brands and those who are not, helping to isolate how mother-brand recognition affects purchase behavior across different drinking profiles.</p>
          <p className="text-sm text-slate-600 text-justify">Finally, geographic representation was balanced across the four major US census regions, with approximately 25% of participants drawn from each of the Midwest, Northeast, South, and West. This regional stratification ensures that the findings are not driven by localized brand preferences or distribution patterns, and that the results are broadly representative of the US consumer population.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Gender split"       value="~50 / 50"    note="306 F · 307 M" />
          <StatCard label="Modal age cohort"   value="25–44"       note="61.7% of sample" />
          <StatCard label="Regular drinkers"   value="40.2%"       note="≥1× per week" />
          <StatCard label="NA beer newcomers"  value="34.2%"       note="Never consumed NA beer" />
        </div>

        {/* Sample characteristics — chart default, table via "View data" */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Gender */}
          <ChartCard
            title="Gender"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.genderBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.genderBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="Gender distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>

          {/* Age Group */}
          <ChartCard
            title="Age Group"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.ageBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.ageBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="Age group distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>

          {/* Education */}
          <ChartCard
            title="Education Level"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.educationBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.educationBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="Education level distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>

          {/* Alcohol Frequency */}
          <ChartCard
            title="Alcohol Consumption Frequency"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.alcoholFrequencyBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.alcoholFrequencyBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="Alcohol consumption frequency distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>

          {/* NA Beer Experience */}
          <ChartCard
            title="NA Beer Experience"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.naBeerFrequencyBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.naBeerFrequencyBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="NA beer experience distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>

          {/* Physical Activity */}
          <ChartCard
            title="Physical Activity Level"
            dataTable={
              <table className="w-full text-xs">
                <thead><tr className="text-slate-400 uppercase"><th className="py-1 text-left">Category</th><th className="py-1 text-right">n</th><th className="py-1 text-right">%</th></tr></thead>
                <tbody>{phase2Demographics.activityBreakdown.map(r => (<tr key={r.label} className="border-t border-slate-200"><td className="py-1.5 text-slate-700">{r.label}</td><td className="py-1.5 text-right">{r.n}</td><td className="py-1.5 text-right">{(r.n/614*100).toFixed(1)}%</td></tr>))}</tbody>
              </table>
            }
          >
            <HorizontalBarChart
              data={phase2Demographics.activityBreakdown.map(r => ({ label: r.label, value: parseFloat((r.n/614*100).toFixed(1)) }))}
              ariaLabel="Physical activity level distribution"
              valueSuffix="%" valueLabel="% of sample"
              xAxisTickFormatter={(v) => `${v}%`}
            />
          </ChartCard>
        </div>
      </Section>

      {/* ── RESULTS GROUP HEADER ──────────────────────────────────── */}
      <div id="ph2-results-group" className="section-anchor flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-300" />
        <span className="text-lg font-bold uppercase tracking-widest text-slate-500">Results</span>
        <div className="h-px flex-1 bg-slate-300" />
      </div>

      {/* ── BRAND SELECTION RESULTS ───────────────────────────────── */}
      <Section
        id="ph2-results"
        title="Brand Selection Results"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">Across all three experimental variants, mother brands, defined as non-alcoholic products from established alcoholic parent companies (Heineken 0.0, Corona Sunbrew, and Budweiser Zero), consistently captured the majority of product selections. In Variant A, mother brands collectively accounted for 58.1% of selections. In Variant B, that share rose to 63.3%, and in Variant C it stood at 56.7%. In all three cases, mother brand share was significantly above the 50% threshold that would be expected if consumers were choosing purely at random across the six available products, confirming that the mother-brand advantage observed in Phase 1 holds in a fully competitive shelf setting.</p>
          <p className="text-sm text-slate-600 text-justify">Corona Sunbrew was the clear market leader in every variant, capturing 36.5% of selections in Variant A, 32.9% in Variant B, and 30.8% in Variant C. Its lead over all other brands was consistent and substantial, driven by strong consumer recognition of the Corona parent brand, distinctive packaging, and its unique vitamin D fortification positioning.</p>
          <p className="text-sm text-slate-600 text-justify">The most strategically important finding in this section is the price neutralization effect observed between Variant A and Variant B. When all six products were priced equally at $10.99, Heineken's selection share rose from 13.3% to 20.5%, a gain of 7.2 percentage points. This is the largest share shift of any brand between the two variants and it tells a clear story: Heineken 0.0 is underperforming in the real market not because consumers do not want it, but because its higher retail price is deterring purchase. When that price barrier is removed, Heineken's underlying brand equity expresses itself, and nearly one in five consumers chooses it. By contrast, O'Doul's, which benefits from its low real-world price point in Variant A, saw its share fall sharply from 11.3% to 5.2% when price was equalized, confirming that its appeal is largely price-driven rather than brand-driven.</p>
          <p className="text-sm text-slate-600 text-justify">Rescue Club IPA, a non-mother brand with no established alcoholic parent, performed notably well across all three variants, capturing between 20.0% and 26.9% of selections. This is discussed further in the context of purchase factor analysis, where Rescue Club's strong performance is linked to its craft positioning and taste-forward branding rather than any mother-brand recognition.</p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setBrandView('aggregate')}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${brandView === 'aggregate' ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}
          >
            Mother vs Non-Mother
          </button>
          <button
            type="button"
            onClick={() => setBrandView('byVariant')}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${brandView === 'byVariant' ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}
          >
            By Brand
          </button>
        </div>

        {brandView === 'byVariant' && (
          <div className="space-y-6">
            <div className="mx-auto w-full">
            <ChartCard title="Brand Selection Share by Experimental Variant (%)">
              <div className="h-80">
                <GroupedBarChart
                  data={phase2BrandSelection.brandsByVariant.map(b => ({
                    label: b.label,
                    varA: b.varA,
                    varB: b.varB,
                    varC: b.varC
                  }))}
                  series={phase2BrandSelection.variantSeries}
                  ariaLabel="Brand selection share by variant"
                  yAxisTickFormatter={(v) => `${v}%`}
                />
              </div>
            </ChartCard>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Brand</th>
                    <th className="px-4 py-3 text-center">Type</th>
                    <th className="px-4 py-3 text-right">Var A (Real Prices)</th>
                    <th className="px-4 py-3 text-right">Var B (Flat $10.99)</th>
                    <th className="px-4 py-3 text-right">Var C (1st Choice)</th>
                    <th className="px-4 py-3 text-right">A→B Change</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2BrandSelection.brandsByVariant.map((row) => (
                    <tr key={row.label} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">{row.label}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row.type === 'mother' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          {row.type === 'mother' ? 'Mother' : 'Non-mother'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-slate-700">{row.varA}%</td>
                      <td className="px-4 py-3 text-right text-slate-700">{row.varB}%</td>
                      <td className="px-4 py-3 text-right text-slate-700">{row.varC}%</td>
                      <td className={`px-4 py-3 text-right font-semibold ${(row.varB - row.varA) >= 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                        {(row.varB - row.varA) >= 0 ? '+' : ''}{(row.varB - row.varA).toFixed(1)}pp
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">Dashed baseline = 16.7% (uniform random expectation for 1 of 6 brands)</p>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Price Neutralization Effects (Variant A → B)</p>
              <ul className="space-y-2">
                {phase2BrandSelection.priceNeutralizationNotes.map((note) => (
                  <li key={note} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                    {note}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {brandView === 'aggregate' && (
          <div className="space-y-6">
            <div className="mx-auto w-full">
            <ChartCard title="Mother Brand vs Non-Mother Brand Aggregate (%)">
              <GroupedBarChart
                data={phase2BrandSelection.motherBrandAggregate}
                series={phase2BrandSelection.aggregateSeries}
                ariaLabel="Mother brand vs non-mother brand aggregate"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Condition</th>
                    <th className="px-4 py-3 text-right">Mother Brand %</th>
                    <th className="px-4 py-3 text-right">N</th>
                    <th className="px-4 py-3 text-right">p-value</th>
                    <th className="px-4 py-3 text-center">Sig.</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cond: 'Variant A (real prices)', mother: 58.1, n: 203, p: '0.024', sig: '*' },
                    { cond: 'Variant B (flat $10.99)', mother: 63.3, n: 210, p: '0.0001', sig: '***' },
                    { cond: 'Variant C first choice',  mother: 56.7, n: 201, p: '0.066',  sig: '†' },
                    { cond: 'Variant C replacement',   mother: 56.2, n: 201, p: '0.090',  sig: '†' }
                  ].map(row => (
                    <tr key={row.cond} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">{row.cond}</td>
                      <td className="px-4 py-3 text-right font-semibold text-slate-800">{row.mother}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{row.n}</td>
                      <td className="px-4 py-3 text-right text-slate-600">{row.p}</td>
                      <td className="px-4 py-3 text-center font-semibold text-slate-700">{row.sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">*** p&lt;0.001 &nbsp; * p&lt;0.05 &nbsp; † p&lt;0.10. Null hypothesis: 50% (equal numbers of brands in each category).</p>
          </div>
        )}
      </Section>

      {/* ── DEMOGRAPHIC SUB-ANALYSES ─────────────────────────────── */}
      <Section id="ph2-demo-results" title="Demographic Sub-Analyses" subtitle="Mother brand selection rates across key participant segments">
        <Tabs options={demoTabs} value={demoView} onChange={setDemoView} />

        {demoView === 'gender' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Mother Brand Selection by Gender">
              <GroupedBarChart
                data={phase2Demographics.genderBreakdown.map(r => ({ label: r.label, motherPct: r.motherPct }))}
                series={[{ key: 'motherPct', label: 'Mother Brand %' }]}
                ariaLabel="Mother brand selection by gender"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <div className="space-y-4">
              <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Gender Summary</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr>
                        <th className="py-1 text-left">Gender</th>
                        <th className="py-1 text-right">N</th>
                        <th className="py-1 text-right">Mother %</th>
                        <th className="py-1 text-right">Taste #1</th>
                        <th className="py-1 text-right">Brand Trust #1</th>
                        <th className="py-1 text-right">Price #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase2Demographics.genderBreakdown.map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.n}</td>
                          <td className="py-1.5 text-right text-slate-700 font-semibold">{r.motherPct}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.taste}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.brandTrust}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.price}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Callout variant="insight" title="Gender Insight">
                Gender is the strongest demographic predictor of mother-brand preference
                (chi-sq p=0.016). The 11.5 pp gap is driven by female participants' elevated
                preference for Corona Sunbrew — specifically its vitamin D positioning and packaging.
                Male participants show higher rates for Rescue Club IPA and rank Price as #1
                more frequently (11.4% vs 6.4%).
              </Callout>
            </div>
          </div>
        )}

        {demoView === 'age' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Mother Brand Selection by Age Group">
              <GroupedBarChart
                data={phase2Demographics.ageBreakdown.map(r => ({ label: r.label, motherPct: r.motherPct }))}
                series={[{ key: 'motherPct', label: 'Mother Brand %' }]}
                ariaLabel="Mother brand selection by age group"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <div className="space-y-4">
              <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Age Group Breakdown</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr>
                        <th className="py-1 text-left">Age</th>
                        <th className="py-1 text-right">N</th>
                        <th className="py-1 text-right">Mother %</th>
                        <th className="py-1 text-right">Brand Trust #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase2Demographics.ageBreakdown.map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.n}</td>
                          <td className="py-1.5 text-right text-slate-700 font-semibold">{r.motherPct}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.brandTrust}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Callout variant="insight" title="Age Insight">
                The 21–24 cohort shows the highest mother-brand preference at 75.0%, reflecting
                young consumers' reliance on globally recognised brand names in an unfamiliar
                category. Heineken 0.0 shows its highest selection rates among 45–54 (23.0%)
                and 65+ (22.2%) cohorts — consistent with its established brand history skewing
                toward older consumers.
              </Callout>
            </div>
          </div>
        )}

        {demoView === 'activity' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Mother Brand Selection by Activity Level">
              <GroupedBarChart
                data={phase2Demographics.activityBreakdown.map(r => ({ label: r.label, motherPct: r.motherPct }))}
                series={[{ key: 'motherPct', label: 'Mother Brand %' }]}
                ariaLabel="Mother brand selection by activity level"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <div className="space-y-4">
              <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Activity Level Breakdown</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr>
                        <th className="py-1 text-left">Activity</th>
                        <th className="py-1 text-right">N</th>
                        <th className="py-1 text-right">Mother %</th>
                        <th className="py-1 text-right">Appearance #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase2Demographics.activityBreakdown.map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.n}</td>
                          <td className="py-1.5 text-right text-slate-700 font-semibold">{r.motherPct}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.appearance}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Callout variant="insight" title="Activity Insight">
                Activity level is one of only two demographic variables reaching statistical
                significance (p=0.028). The relationship is <em>non-linear</em>: Active
                participants (4–5 days/week) show the highest preference at 66.7%, while
                Very Active participants (6–7 days/week) drop to 42.6% — the only segment
                below the 50% null. Very Active consumers also show the highest Appearance
                prioritisation (27.7%), consistent with wellness product literacy.
              </Callout>
            </div>
          </div>
        )}

        {demoView === 'alcohol' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Mother Brand Selection by Alcohol Frequency">
              <GroupedBarChart
                data={phase2Demographics.alcoholFrequencyBreakdown.map(r => ({ label: r.label, motherPct: r.motherPct }))}
                series={[{ key: 'motherPct', label: 'Mother Brand %' }]}
                ariaLabel="Mother brand selection by alcohol frequency"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <div className="space-y-4">
              <Card>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr>
                        <th className="py-1 text-left">Frequency</th>
                        <th className="py-1 text-right">N</th>
                        <th className="py-1 text-right">Mother %</th>
                        <th className="py-1 text-right">Brand Trust #1</th>
                        <th className="py-1 text-right">Taste #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase2Demographics.alcoholFrequencyBreakdown.map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.n}</td>
                          <td className="py-1.5 text-right text-slate-700 font-semibold">{r.motherPct}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.brandTrust}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.taste}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Callout variant="insight" title="Alcohol Frequency Insight">
                The &lt;once-a-month group shows the <em>highest</em> mother-brand preference
                (68.4%) — carrying high brand awareness without frequent consumption experience,
                making brand reputation their dominant heuristic. Non-drinkers show the only
                below-50% rate (49.4%). Taste prioritisation rises steeply with drinking
                frequency (37.3% → 56.6%), suggesting a shift from brand- to taste-led choice.
              </Callout>
            </div>
          </div>
        )}

        {demoView === 'nabeer' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Mother Brand Selection by NA Beer Experience">
              <GroupedBarChart
                data={phase2Demographics.naBeerFrequencyBreakdown.map(r => ({ label: r.label, motherPct: r.motherPct }))}
                series={[{ key: 'motherPct', label: 'Mother Brand %' }]}
                ariaLabel="Mother brand selection by NA beer frequency"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <div className="space-y-4">
              <Card>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs uppercase text-slate-500">
                      <tr>
                        <th className="py-1 text-left">NA Beer Experience</th>
                        <th className="py-1 text-right">N</th>
                        <th className="py-1 text-right">Mother %</th>
                        <th className="py-1 text-right">Brand Trust #1</th>
                        <th className="py-1 text-right">Appearance #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase2Demographics.naBeerFrequencyBreakdown.map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.n}</td>
                          <td className="py-1.5 text-right text-slate-700 font-semibold">{r.motherPct}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.brandTrust}%</td>
                          <td className="py-1.5 text-right text-slate-600">{r.appearance}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <Callout variant="insight" title="NA Beer Experience Insight">
                Each step increase in NA beer consumption frequency reduces mother-brand
                probability by 4.8 pp (p=0.029). This implies a two-stage communications
                funnel: <strong>trust-led acquisition</strong> for category-naive consumers,
                followed by <strong>taste-led retention messaging</strong> for experienced
                consumers.
              </Callout>
            </div>
          </div>
        )}

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Key Demographic Findings</p>
          <ul className="space-y-2">
            {phase2Demographics.keyDemographicFindings.map((finding) => (
              <li key={finding} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                {finding}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* ── DECISION DRIVERS ──────────────────────────────────────── */}
      <Section id="ph2-drivers" title="Decision Drivers">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">Across all three variants, two factors dominated consumer purchase decisions: taste and brand trust. Taste was ranked as the single most important factor by 45.3% of participants in Variant A, 41.4% in Variant B, and 52.7% in Variant C. Brand trust was ranked second in all three variants, cited as the top factor by 26.6%, 31.4%, and 22.4% of participants respectively. Together, these two drivers accounted for approximately 70% of all top-ranked motivations across the study, making price and health considerations clearly secondary in the non-alcoholic beer purchase decision.</p>
          <p className="text-sm text-slate-600 text-justify">One particularly telling pattern emerges when price is removed as a variable between Variant A and Variant B. In Variant A, where real-world prices were in play, price was cited as the top factor by 11.8% of participants. In Variant B, where all products were priced equally, that figure dropped to just 5.2%, while brand trust rose from 26.6% to 31.4% and appearance rose from 10.8% to 18.1%. This confirms that when price is no longer a differentiator, consumers fall back on brand identity and packaging as their primary decision cues, which is precisely the terrain on which mother brands hold the strongest advantage.</p>
          <p className="text-sm text-slate-600 text-justify">When brand trust rates are broken down by brand selected, Heineken 0.0 stands out clearly. In Variant A, 63.0% of Heineken buyers cited brand trust as their primary reason for selection, the highest rate of any brand in the study. This figure moderated to 44.2% in Variant B and 37.1% in Variant C, but Heineken consistently attracted a higher proportion of trust-driven buyers than Corona or Budweiser Zero across all three conditions. By contrast, Rescue Club IPA, the top-performing non-mother brand, recorded brand trust rates of just 4.8%, 4.8%, and 3.7% across the three variants, confirming that its appeal is rooted in taste and craft positioning rather than brand recognition.</p>
          <p className="text-sm text-slate-600 text-justify">The qualitative responses provided by participants reinforce these patterns. Heineken buyers frequently referenced familiarity with the parent brand and confidence in product quality as their reasons for selection. Corona buyers cited the brand's visual identity, its distinctive packaging, and the perceived refreshment credentials carried over from the alcoholic parent brand. Rescue Club buyers, on the other hand, described curiosity about the product, interest in the IPA style, and a desire to try something different, motivations that are more exploratory than trust-based. These thematic patterns align closely with the quantitative factor rankings and help explain why mother brands, despite competing on a shelf with newer and in some cases cheaper alternatives, continue to attract the majority of consumer selections.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ChartCard title="% Ranking Each Factor as #1, by Variant">
              <GroupedBarChart
                data={phase2FactorRanking.factorsByVariant}
                series={phase2FactorRanking.factorSeries}
                ariaLabel="Decision factor rankings by variant"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-xs uppercase text-slate-500">
                    <tr>
                      <th className="py-1.5 text-left">Factor</th>
                      <th className="py-1.5 text-right">Var A</th>
                      <th className="py-1.5 text-right">Var B</th>
                      <th className="py-1.5 text-right">Var C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase2FactorRanking.factorsByVariant.map(r => (
                      <tr key={r.label} className="border-t border-slate-100">
                        <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                        <td className="py-1.5 text-right text-slate-600">{r.varA}%</td>
                        <td className="py-1.5 text-right text-slate-600">{r.varB}%</td>
                        <td className="py-1.5 text-right text-slate-600">{r.varC}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <ChartCard title="% Citing Brand Trust as #1 Factor, by Brand">
              <GroupedBarChart
                data={phase2FactorRanking.brandTrustPctByBrand}
                series={phase2FactorRanking.brandTrustSeries}
                ariaLabel="Brand trust as top factor by brand"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Key Insights</p>
              <ul className="space-y-2">
                {phase2FactorRanking.keyInsights.map((insight) => (
                  <li key={insight} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                    {insight}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">Qualitative Thematic Analysis</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                brand: 'Heineken 0.0',
                profile: 'Brand trust and parent-brand experience dominate. 44% cite brand familiarity/recognition, 48% reference prior experience with the alcoholic parent brand.',
                quotes: [
                  '"Heineken is such a good company and I trust them."',
                  '"I like the alcohol version of this brand so I figured it would taste somewhat similar."'
                ]
              },
              {
                brand: 'Corona Sunbrew',
                profile: 'Multi-dimensional rationale: prior brand experience (50%), taste expectations (42%), and appearance/packaging (23%). Vitamin D positioning is a notable differentiator.',
                quotes: [
                  '"It said it has vitamin D in it and I\'m regularly deficient in that."',
                  '"I thought it was different from the others because of the vitamin D."'
                ]
              },
              {
                brand: 'Rescue Club IPA',
                profile: 'Entirely driven by category preference (55%) and aesthetics (45%). Confirms competitive moat is category differentiation, not brand equity.',
                quotes: [
                  '"I love IPAs — this was the only one on the shelf."',
                  '"The name Rescue Club appealed to me. I also really like the blue stripe on the can."'
                ]
              }
            ].map(item => (
              <Card key={item.brand} className="bg-slate-50/50">
                {brandImages[item.brand] && (
                  <ImageLightbox
                    src={brandImages[item.brand]}
                    alt={item.brand}
                    caption={item.brand}
                    className="h-20 w-auto object-contain"
                    containerClassName="mb-3 flex justify-center"
                  />
                )}
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.brand}</p>
                <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed">{item.profile}</p>
                <div className="mt-3 space-y-2">
                  {item.quotes.map(q => (
                    <blockquote key={q} className="border-l-2 border-slate-300 pl-3 text-xs italic text-slate-500">{q}</blockquote>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Section>

      {/* ── OOS SWITCHING ─────────────────────────────────────────── */}
      <Section id="ph2-oos" title="Out-of-Stock Switching Analysis">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">One of the most practically useful questions in brand strategy is what happens when a consumer cannot find their preferred product. Do they stay loyal to the broader brand family, switch to a direct competitor, or abandon the category entirely? Variant C was designed to answer exactly this question. Each participant first selected their preferred product from the full shelf, after which their chosen product was marked as out of stock, and they were asked to select an alternative. This two-stage design reveals not just what consumers want, but how strong that preference actually is when tested under pressure.</p>
          <p className="text-sm text-slate-600 text-justify">The results show a clear pattern of mother-brand loyalty under out-of-stock conditions. Among participants who initially chose a mother brand, Corona, Heineken, or Budweiser Zero, 58.8% switched to another mother brand rather than turning to a non-mother alternative. This is a meaningful finding: even when their first choice was unavailable, the majority of mother-brand consumers stayed within the mother-brand category, suggesting that their preference reflects a broader trust in established brand families rather than attachment to a single specific product.</p>
          <p className="text-sm text-slate-600 text-justify">The most striking individual switching flow in the entire study is the movement from Corona to Heineken. When Corona Sunbrew was out of stock, 41.9% of Corona loyalists, the single largest group, switched directly to Heineken 0.0. No other brand attracted nearly as large a share of displaced Corona buyers. This positions Heineken not merely as a competitor to Corona, but as its closest perceived substitute in the minds of consumers, a finding with significant implications for shelf placement, retail partnerships, and out-of-stock contingency planning.</p>
          <p className="text-sm text-slate-600 text-justify">The reverse flow is also notable. When Heineken was out of stock, 45.7% of Heineken loyalists switched to Corona, making Corona the primary destination for displaced Heineken buyers as well. This bidirectional relationship between the two brands confirms that they occupy adjacent positions in consumer perception and that together they form the dominant mother-brand pairing in the non-alcoholic beer category.</p>
          <p className="text-sm text-slate-600 text-justify">By contrast, Rescue Club IPA, despite its strong overall selection share, showed a more fragmented switching pattern. When out of stock, its buyers split fairly evenly between Clausthaler and Corona, with no single dominant switch destination, suggesting that Rescue Club buyers are more exploratory in nature and less anchored to a specific brand identity.</p>
        </div>

        {/* Switching matrix — full width */}
        <div className="space-y-1">
          <ImageLightbox
            src="/images/h4_switching_matrix.png"
            alt="Out-of-stock switching matrix"
            caption="Out-of-stock switching matrix (Variant C, n=201). Row percentages show where each brand's loyalists redirected."
            className="max-h-[420px] w-full object-contain"
            containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
          />
          <p className="text-xs text-slate-400 text-center">Out-of-stock switching matrix (Variant C, n=201). Row percentages show where each brand's loyalists redirected.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: net migration image + table */}
          <div className="space-y-4">
            <div className="space-y-1">
              <ImageLightbox
                src="/images/h4_net_migration.png"
                alt="Net brand migration under OOS conditions"
                caption="Net brand migration under OOS conditions — first-choice vs replacement selection counts."
                className="max-h-[260px] w-full object-contain"
                containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
              />
              <p className="text-xs text-slate-400 text-center">Net brand migration under OOS conditions — first-choice vs replacement selection counts.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Brand</th>
                    <th className="px-4 py-3 text-right">1st Choice %</th>
                    <th className="px-4 py-3 text-right">Replacement %</th>
                    <th className="px-4 py-3 text-right">Net Δ</th>
                    <th className="px-4 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2OosSwitching.netMigration.map((row) => (
                    <tr key={row.label} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">{row.label}</td>
                      <td className="px-4 py-3 text-right text-slate-600">{row.firstChoicePct}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{row.replacementPct}%</td>
                      <td className={`px-4 py-3 text-right font-semibold ${row.netDelta > 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                        {row.netDelta > 0 ? '+' : ''}{row.netDelta}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          row.direction === 'big_gainer' ? 'bg-slate-800 text-white' :
                          row.direction === 'gainer' ? 'bg-slate-200 text-slate-700' :
                          'bg-slate-50 text-slate-500'
                        }`}>
                          {row.direction === 'big_gainer' ? 'Big Gainer' : row.direction === 'gainer' ? 'Gainer' : 'Loser'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: flow image + loyalty stats + callout */}
          <div className="space-y-4">
            <div className="space-y-1">
              <ImageLightbox
                src="/images/h4_mother_nonmother_flow.png"
                alt="Switching flows between mother and non-mother brand categories"
                caption="Switching flows between mother and non-mother brand categories."
                className="max-h-[260px] w-full object-contain"
                containerClassName="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
              />
              <p className="text-xs text-slate-400 text-center">Switching flows between mother and non-mother brand categories.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(phase2OosSwitching.motherBrandLoyaltyUnderOOS).map(([, val]) => (
                <Card key={val.label} className="text-center">
                  <p className="text-2xl font-bold text-slate-800">{val.pct}%</p>
                  <p className="mt-1 text-xs text-slate-500">{val.label}</p>
                  <p className="mt-1 text-xs text-slate-400">n = {val.n}</p>
                </Card>
              ))}
            </div>
            <Callout variant="note" title="OOS Switching Insight">
              {phase2OosSwitching.switchingMatrixDescription}
            </Callout>
          </div>
        </div>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Switching Highlights</p>
          <ul className="space-y-2">
            {phase2OosSwitching.switchingHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                {highlight}
              </li>
            ))}
          </ul>
        </Card>

      </Section>

      {/* ── REPURCHASE INTENT ─────────────────────────────────────── */}
      <Section id="ph2-repurchase" title="Repurchase Intent">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">Repurchase intent measures whether a participant would buy their chosen product again in real life, making it one of the most direct indicators of genuine purchase conviction rather than in-experiment curiosity. Across Variants A and B, participants were asked how likely they would be to purchase their selected product again, rated on a five-point scale from Very Unlikely to Very Likely. The top-two box score, combining Somewhat Likely and Very Likely responses, is used here as the primary measure of positive purchase intent.</p>
          <p className="text-sm text-slate-600 text-justify">In Variant A, where participants shopped under real-world market prices, the overall top-two box score was 70.4%, indicating that roughly seven in ten participants felt positively about buying their chosen product again. Corona Sunbrew buyers recorded the highest repurchase intent of any brand at 83.8%, followed by Heineken at 77.8% and Budweiser Zero at 76.5%. All three mother brands outperformed the non-mother brands on this measure, with O'Doul's recording the lowest repurchase intent at just 43.5%, suggesting that its price-driven appeal does not translate into genuine brand loyalty.</p>
          <p className="text-sm text-slate-600 text-justify">In Variant B, where all products were priced equally at $10.99, the overall top-two box score rose to 77.1%, meaningfully higher than in Variant A. This increase is consistent with the broader finding that price is a source of friction in the real market: when price is removed, consumers are not only more likely to choose on the basis of brand preference, but they also feel more confident and positive about their choice after making it. Heineken's repurchase intent rose from 77.8% in Variant A to 83.7% in Variant B, and Budweiser Zero rose sharply from 76.5% to 90.5%, the highest of any brand in either variant. Rescue Club also saw a notable increase from 59.5% to 81.0%, suggesting that its real-world price point may be acting as a barrier to repeat purchase for some consumers.</p>
          <p className="text-sm text-slate-600 text-justify">Variant C presents a fundamentally different repurchase intent question. Because participants in this variant were shown that their first-choice product was out of stock and were required to select a replacement, the repurchase intent question captures something more nuanced: willingness to purchase the replacement product in real life, not just the original preference. This is a more demanding test of purchase conviction, as the participant is being asked to endorse a product they were effectively pushed into choosing rather than one they freely selected. The overall top-two box score in Variant C was accordingly lower at 52.7%, and the bottom-two box score, those who said they were Unlikely or Very Unlikely to purchase their replacement in real life, was 29.4%. This level of resistance is expected and informative: it confirms that a significant proportion of consumers who are forced to switch brands do not convert into genuine buyers of the replacement product.</p>
          <p className="text-sm text-slate-600 text-justify">At the brand level within Variant C, Heineken buyers recorded the highest repurchase intent among all mother-brand first choosers at 62.9%, meaning that nearly two thirds of participants who initially chose Heineken said they would likely buy it again even after being put through the out-of-stock exercise. Rescue Club followed at 61.1%, while Corona buyers, despite being the most numerous first-choice group, recorded a repurchase intent of only 43.5% for their replacement products, reflecting the difficulty of satisfying a strong primary preference when that brand is unavailable.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Variants A & B table */}
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Top-2 Box Repurchase Intent by Brand — Variants A &amp; B (%)</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-xs uppercase text-slate-500">
                  <tr>
                    <th className="py-1.5 text-left">Brand</th>
                    <th className="py-1.5 text-right">Variant A</th>
                    <th className="py-1.5 text-right">Variant B</th>
                    <th className="py-1.5 text-right">A→B Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2BrandSelection.repurchaseIntent.map(r => (
                    <tr key={r.label} className="border-t border-slate-100">
                      <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                      <td className="py-1.5 text-right text-slate-600">{r.varA}%</td>
                      <td className="py-1.5 text-right text-slate-600">{r.varB}%</td>
                      <td className={`py-1.5 text-right font-semibold text-xs ${(r.varB - r.varA) >= 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                        {(r.varB - r.varA) >= 0 ? '+' : ''}{(r.varB - r.varA).toFixed(1)}pp
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Variant C table */}
          <div className="space-y-4">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Variant C — Repurchase Intent for Replacement Product (%)</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="text-xl font-bold text-slate-800">{phase2BrandSelection.repurchaseIntentVarC.overallTop2}%</p>
                  <p className="mt-0.5 text-xs text-slate-500">Top-2 Box</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="text-xl font-bold text-slate-600">{phase2BrandSelection.repurchaseIntentVarC.neutral}%</p>
                  <p className="mt-0.5 text-xs text-slate-500">Neutral</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="text-xl font-bold text-slate-400">{phase2BrandSelection.repurchaseIntentVarC.overallBottom2}%</p>
                  <p className="mt-0.5 text-xs text-slate-500">Bottom-2 Box</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-xs uppercase text-slate-500">
                    <tr>
                      <th className="py-1.5 text-left">First Choice Brand</th>
                      <th className="py-1.5 text-right">Top-2 Box</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase2BrandSelection.repurchaseIntent
                      .slice()
                      .sort((a, b) => b.varC - a.varC)
                      .map(r => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="py-1.5 font-medium text-slate-800">{r.label}</td>
                          <td className="py-1.5 text-right text-slate-600">{r.varC}%</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-slate-400">Grouped by first-choice brand; intent is for the replacement product selected after OOS. n = 201.</p>
            </Card>
          </div>
        </div>

        <Callout variant="insight" title="Repurchase Intent Insight">
          Heineken achieves top-2 repurchase intent of <strong>77.8%</strong> (Var A) and <strong>83.7%</strong> (Var B)
          among those who chose it — indicating highly loyal, high-conviction buyers. The disconnect
          between modest first-choice share (13–20%) and high repurchase intent (78–84%) suggests
          Heineken has a loyal core that is smaller than its brand equity would suggest. The strategic
          challenge is to convert brand awareness and trust into a first trial.
        </Callout>
      </Section>

      {/* ── HYPOTHESIS OUTCOMES ───────────────────────────────────── */}
      <Section id="ph2-hypotheses" title="Hypothesis Outcomes" subtitle="Phase 2 verdict across all four pre-registered hypotheses">
        <p className="text-sm text-slate-600 text-justify leading-relaxed">{phase2HypothesisSummaryParagraph}</p>

        <div className="grid gap-10">
          {phase2Hypotheses.map((h) => {
            const images: Record<string, { src: string; caption: string }[]> = {
              H1: [
                { src: '/images/h1_mother_aggregate.png',  caption: 'Aggregate mother-brand vs non-mother-brand selection share by variant. Null = 50/50.' },
                { src: '/images/h1_brand_selection.png',   caption: 'Brand selection share by experimental variant. Dashed line = 16.7% uniform random baseline.' },
              ],
              H2: [
                { src: '/images/h2_familiarity_scores.png',          caption: 'Mean familiarity scores and brand unawareness rates across all six brands.' },
                { src: '/images/h2_selection_by_familiarity.png',     caption: 'Heineken 0.0 selection rate by self-reported familiarity level, across all three variants.' },
              ],
              H3: [
                { src: '/images/h3_drinking_segment.png',  caption: 'Mother-brand selection rate by drinking segment (regular, occasional, non-drinkers) across variants.' },
                { src: '/images/h3_segment_table.png',     caption: 'Mother-brand selection rate by drinking segment — summary table.' },
              ],
              H4: [
                { src: '/images/h4_heineken_fallback.png',       caption: 'Where Heineken loyalists switch when OOS, and where Heineken replacement-choosers came from.' },
              ],
            };
            const hImages = images[h.id] ?? [];
            return (
              <Card key={h.id} className="flex flex-col gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{h.id}</p>
                  <h3 className="text-base font-semibold text-slate-900">{h.title}</h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Statement</p>
                  <p className="mt-1 text-sm text-slate-600 text-justify leading-relaxed">{h.statement}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Evidence</p>
                  <p className="mt-1 text-sm text-slate-600 text-justify leading-relaxed">{h.evidence}</p>
                </div>
                {hImages.length > 0 && (
                  <div className={`grid gap-4 ${hImages.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                    {hImages.map((img) => (
                      <div key={img.src} className="space-y-1">
                        <ImageLightbox
                          src={img.src}
                          alt={img.caption}
                          caption={img.caption}
                          className="h-full w-full object-contain"
                          containerClassName="flex h-[300px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
                        />
                        <p className="text-xs text-slate-400 text-center">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-auto">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${outcomeColors[h.outcome]}`}>
                    {h.outcomeLabel}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full table-fixed text-left text-sm">
            <colgroup>
              <col className="w-24" />
              <col />
              <col className="w-44" />
            </colgroup>
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Hypothesis</th>
                <th className="px-4 py-3">Statement</th>
                <th className="px-4 py-3 text-center">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {phase2Hypotheses.map(h => (
                <tr key={h.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-700 align-top">{h.id}</td>
                  <td className="px-4 py-3 text-slate-600 align-top">{h.statement}</td>
                  <td className="px-4 py-3 text-center align-top">
                    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${outcomeColors[h.outcome]}`}>
                      {h.outcomeLabel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── REGIONAL ANALYSIS ─────────────────────────────────────── */}
      <Section id="ph2-regional" title="Regional Analysis">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 text-justify">Regional analysis draws on a subset of 548 participants for whom US census region data was available through Prolific, distributed evenly across the four major regions: Northeast (n=139), Midwest (n=139), West (n=136), and South (n=134). The even regional distribution reflects the stratified recruitment strategy described in the participant demographics section, and it allows for a meaningful comparison of brand preference patterns across geographically distinct consumer markets.</p>
          <p className="text-sm text-slate-600 text-justify">The headline finding is that mother brands commanded a majority of selections in every region without exception, but the size of that majority varied considerably. The South recorded the highest mother-brand share at 67.2%, driven by a particularly strong showing for Corona Sunbrew, which captured 40.3% of all selections in that region, the highest regional share for any brand across the entire study. The Midwest followed at 60.4%, again led by Corona at 35.3%. The Northeast and West showed more competitive dynamics, with mother-brand shares of 54.0% and 55.9% respectively, reflecting a stronger appetite in those regions for non-mother alternatives, particularly Rescue Club IPA.</p>
          <p className="text-sm text-slate-600 text-justify">Rescue Club's regional performance is one of the more interesting patterns in this analysis. In the South, it captured just 11.9% of selections, ranking fourth behind Corona, Heineken, and O'Doul's. In the Northeast, Midwest, and West, however, it ranked second in every region with shares of 26.6%, 25.2%, and 25.0% respectively. This geographic split suggests that Rescue Club's craft IPA positioning resonates more strongly in markets where craft beer culture is more established, while in the South, brand recognition and familiarity appear to carry greater weight in the purchase decision.</p>
          <p className="text-sm text-slate-600 text-justify">Heineken's regional performance is also worth noting. Its share was lowest in the South at 17.2% and highest in the West at 20.6%, where it ranked second among all brands. The West's cosmopolitan consumer profile and greater exposure to international brands likely contributes to Heineken's relatively stronger performance in that region. Across all four regions, Heineken consistently outperformed Budweiser Zero, reinforcing the view that Heineken's brand equity is broadly distributed across the US market rather than concentrated in specific geographies.</p>
          <p className="text-sm text-slate-600 text-justify">Taken together, the regional analysis confirms that the mother-brand advantage is a national phenomenon rather than a regional one, but it also highlights that the competitive dynamics between individual brands shift meaningfully depending on geography. For Heineken specifically, the data suggests that the West and South represent the strongest regional opportunities, while the Northeast presents the most competitive environment given the elevated appeal of craft-positioned alternatives.</p>
        </div>

        <Tabs options={regionalTabs} value={regionalView} onChange={setRegionalView} />

        {regionalView === 'motherBrand' && (
          <div className="space-y-6">
            <div className="mx-auto w-full">
            <ChartCard title="Mother Brand Selection Rate by Region and Variant (%)">
              <GroupedBarChart
                data={phase2Regional.motherBrandByRegion}
                series={phase2Regional.regionalSeries}
                ariaLabel="Mother brand selection by region"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Region</th>
                    <th className="px-4 py-3 text-right">Pooled Mother %</th>
                    <th className="px-4 py-3 text-right">Var A</th>
                    <th className="px-4 py-3 text-right">Var B</th>
                    <th className="px-4 py-3 text-right">Var C</th>
                    <th className="px-4 py-3 text-right">Price Effect (A→B)</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2Regional.motherBrandByRegion.map((row) => {
                    const priceEffect = row.varB - row.varA;
                    return (
                      <tr key={row.label} className="border-t border-slate-200">
                        <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                        <td className="px-4 py-3 text-right font-semibold text-slate-800">{row.pooled}%</td>
                        <td className="px-4 py-3 text-right text-slate-600">{row.varA}%</td>
                        <td className="px-4 py-3 text-right text-slate-600">{row.varB}%</td>
                        <td className="px-4 py-3 text-right text-slate-600">{row.varC}%</td>
                        <td className={`px-4 py-3 text-right font-semibold ${priceEffect >= 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                          {priceEffect >= 0 ? '+' : ''}{priceEffect.toFixed(1)}pp
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {phase2Regional.regionalInsights.map(item => (
                <Card key={item.region}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.region}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">{item.motherPct}%</p>
                  <p className="mt-1 text-xs text-slate-500">Mother brand share</p>
                  <p className="mt-3 text-xs text-slate-600">{item.profile}</p>
                </Card>
              ))}
            </div>

            <Callout variant="insight" title="South Anomaly: Price Effect Reversal">
              In three of four regions, equalizing prices (Var A → B) increases mother-brand
              preference by 9–10 pp. The South is the singular exception: mother-brand preference
              drops 7.1 pp from Variant A (73.8%) to Variant B (66.7%). Southern consumers choose
              Corona and Heineken by brand conviction, not price calculation. Strategic implication:
              price promotions are not the right lever for the South — brand-heritage messaging is.
            </Callout>
          </div>
        )}

        {regionalView === 'factors' && (
          <div className="space-y-6">
            <div className="mx-auto w-full">
            <ChartCard title="Top-Ranked Purchase Factor by Region (%)">
              <GroupedBarChart
                data={phase2Regional.purchaseFactorsByRegion.map(r => ({
                  label: r.label,
                  taste: r.taste,
                  brandTrust: r.brandTrust,
                  appearance: r.appearance,
                  price: r.price,
                  health: r.health
                }))}
                series={phase2Regional.factorByRegionSeries}
                ariaLabel="Purchase factor rankings by region"
                yAxisTickFormatter={(v) => `${v}%`}
              />
            </ChartCard>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Region</th>
                    <th className="px-4 py-3 text-right">Taste #1</th>
                    <th className="px-4 py-3 text-right">Brand Trust #1</th>
                    <th className="px-4 py-3 text-right">Appearance #1</th>
                    <th className="px-4 py-3 text-right">Price #1</th>
                    <th className="px-4 py-3 text-right">Health #1</th>
                  </tr>
                </thead>
                <tbody>
                  {phase2Regional.purchaseFactorsByRegion.map(r => (
                    <tr key={r.label} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-semibold text-slate-900">{r.label}</td>
                      <td className="px-4 py-3 text-right text-slate-600">{r.taste}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{r.brandTrust}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{r.appearance}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{r.price}%</td>
                      <td className="px-4 py-3 text-right text-slate-600">{r.health}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Section>

      {/* ── REGRESSION INSIGHTS ───────────────────────────────────── */}
      <Section id="ph2-regression" title="Regression Insights" subtitle="Multivariate predictors of mother-brand and brand-specific selection">
        <p className="text-sm text-slate-600 text-justify leading-relaxed">
          Logistic regression controlling for all demographics simultaneously (pooled, n=524).
          Female gender is the strongest and most significant predictor (OR=2.046, p=0.0003),
          associated with a +16.1 pp higher probability of choosing a mother brand. NA beer
          frequency is a significant negative predictor (OR=0.808, p=0.029). Physical activity
          is a significant positive predictor (OR=1.194, p=0.045).
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3" rowSpan={2}>Demographic Category</th>
                <th className="px-4 py-2 text-center border-b border-slate-200" colSpan={2}>Mother Brand Chosen</th>
                <th className="px-4 py-2 text-center border-b border-l border-slate-200" colSpan={2}>% Heineken Chosen</th>
              </tr>
              <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-2 text-right">Odds Ratio</th>
                <th className="px-4 py-2 text-right">SE</th>
                <th className="px-4 py-2 text-right border-l border-slate-200">Coef.</th>
                <th className="px-4 py-2 text-right">SE</th>
              </tr>
            </thead>
            <tbody>
              {([
                { type: 'header', category: 'GENDER', chiSq: 'p = 0.001' },
                { type: 'row', category: 'Male (reference)',              motherOR: '1.000', motherSE: '[0.028]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: 'Female',                        motherOR: '1.61**', motherSE: '[0.028]', heinCoef: '−7.837*',  heinSE: '[3.194]' },
                { type: 'header', category: 'AGE', chiSq: 'p = 0.000' },
                { type: 'row', category: '21–24',                         motherOR: '2.270', motherSE: '[0.066]', heinCoef: '−14.167*', heinSE: '[5.518]' },
                { type: 'row', category: '25–34 (reference)',             motherOR: '1.000', motherSE: '[0.036]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: '35–44',                         motherOR: '0.700', motherSE: '[0.036]', heinCoef: '−4.320',   heinSE: '[3.932]' },
                { type: 'row', category: '45–54',                         motherOR: '0.910', motherSE: '[0.045]', heinCoef: '3.347',    heinSE: '[5.012]' },
                { type: 'row', category: '55–65',                         motherOR: '1.180', motherSE: '[0.064]', heinCoef: '−4.089',   heinSE: '[5.701]' },
                { type: 'row', category: '65+',                           motherOR: '0.780', motherSE: '[0.117]', heinCoef: '4.036',    heinSE: '[11.404]' },
                { type: 'header', category: 'EDUCATION', chiSq: 'p = 0.002' },
                { type: 'row', category: 'High school or below',          motherOR: '1.450', motherSE: '[0.036]', heinCoef: '−1.138',   heinSE: '[4.209]' },
                { type: 'row', category: "Associate's degree",            motherOR: '0.900', motherSE: '[0.050]', heinCoef: '−2.330',   heinSE: '[4.879]' },
                { type: 'row', category: "Bachelor's degree (reference)", motherOR: '1.000', motherSE: '[0.032]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: 'Graduate degree and above',     motherOR: '0.850', motherSE: '[0.049]', heinCoef: '−6.232',   heinSE: '[4.139]' },
                { type: 'header', category: 'INCOME', chiSq: 'p = 0.008' },
                { type: 'row', category: 'Under $25k',                    motherOR: '1.170', motherSE: '[0.047]', heinCoef: '6.329',    heinSE: '[5.238]' },
                { type: 'row', category: '$25,000–$49,999',               motherOR: '1.000', motherSE: '[0.043]', heinCoef: '2.419',    heinSE: '[4.537]' },
                { type: 'row', category: '$50,000–$74,999 (reference)',   motherOR: '1.000', motherSE: '[0.041]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: '$75,000–$99,999',               motherOR: '0.840', motherSE: '[0.054]', heinCoef: '3.542',    heinSE: '[5.134]' },
                { type: 'row', category: '$100,000–$149,999',             motherOR: '1.070', motherSE: '[0.053]', heinCoef: '0.844',    heinSE: '[5.586]' },
                { type: 'row', category: '$150,000+',                     motherOR: '0.850', motherSE: '[0.068]', heinCoef: '4.795',    heinSE: '[6.612]' },
                { type: 'header', category: 'ACTIVITY LEVEL', chiSq: 'p = 0.000' },
                { type: 'row', category: 'Minimally Active',              motherOR: '0.770', motherSE: '[0.060]', heinCoef: '2.342',    heinSE: '[5.135]' },
                { type: 'row', category: 'Lightly Active',                motherOR: '0.810', motherSE: '[0.046]', heinCoef: '4.520',    heinSE: '[4.226]' },
                { type: 'row', category: 'Moderately Active (reference)', motherOR: '1.000', motherSE: '[0.035]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: 'Active (4–5 days/wk)',          motherOR: '1.320', motherSE: '[0.035]', heinCoef: '10.553*',  heinSE: '[4.195]' },
                { type: 'row', category: 'Very Active (6–7 days/wk)',     motherOR: '0.49*', motherSE: '[0.072]', heinCoef: '−9.55*',   heinSE: '[4.819]' },
                { type: 'header', category: 'ALCOHOL FREQUENCY', chiSq: 'p = 0.000' },
                { type: 'row', category: 'Never',                         motherOR: '0.610', motherSE: '[0.055]', heinCoef: '5.939',    heinSE: '[4.933]' },
                { type: 'row', category: 'Less than once a month',        motherOR: '1.400', motherSE: '[0.044]', heinCoef: '8.109',    heinSE: '[4.699]' },
                { type: 'row', category: '1–3 times per month (reference)', motherOR: '1.000', motherSE: '[0.038]', heinCoef: '1.000', heinSE: '—' },
                { type: 'row', category: 'Once a week',                   motherOR: '0.960', motherSE: '[0.048]', heinCoef: '5.265',    heinSE: '[4.594]' },
                { type: 'row', category: '2–3+ times per week',           motherOR: '0.810', motherSE: '[0.042]', heinCoef: '4.931',    heinSE: '[4.346]' },
                { type: 'header', category: 'NA BEER FREQUENCY', chiSq: 'p = 0.005' },
                { type: 'row', category: 'Never',                         motherOR: '1.290', motherSE: '[0.034]', heinCoef: '−4.876',   heinSE: '[3.850]' },
                { type: 'row', category: 'Tried once',                    motherOR: '1.410', motherSE: '[0.044]', heinCoef: '−1.865',   heinSE: '[4.513]' },
                { type: 'row', category: 'Occasionally (reference)',      motherOR: '1.000', motherSE: '[0.034]', heinCoef: '1.000',     heinSE: '—' },
                { type: 'row', category: 'Regularly (≥1x/month)',        motherOR: '0.910', motherSE: '[0.061]', heinCoef: '0.680',    heinSE: '[5.448]' },
              ] as Array<{ type: string; category: string; chiSq?: string; motherOR?: string; motherSE?: string; heinCoef?: string; heinSE?: string }>).map((row, i) =>
                row.type === 'header' ? (
                  <tr key={i} className="bg-slate-100">
                    <td colSpan={5} className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-600">
                      {row.category} <span className="font-normal normal-case text-slate-500">— overall chi-sq {row.chiSq}</span>
                    </td>
                  </tr>
                ) : (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-2 pl-8 text-slate-700">{row.category}</td>
                    <td className="px-4 py-2 text-right text-slate-700">{row.motherOR}</td>
                    <td className="px-4 py-2 text-right text-slate-500">{row.motherSE}</td>
                    <td className="px-4 py-2 text-right text-slate-700 border-l border-slate-100">{row.heinCoef}</td>
                    <td className="px-4 py-2 text-right text-slate-500">{row.heinSE}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">** p&lt;0.05 &nbsp; * p&lt;0.10. SE = standard error in brackets. Reference categories shown with OR / Coef. = 1.000.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Gender: Opposite Effects on Heineken and Corona', body: 'Females are significantly more likely to choose Corona (OR=3.158, p<0.001), while males directionally lean toward Heineken (female OR=0.629, p=0.071). The aggregate mother-brand gender effect is entirely a Corona effect — Heineken\'s natural demographic home is male consumers.' },
            { title: 'Age: Older → Heineken, Younger → Corona', body: 'Each age-group step is associated with +18.8% odds of choosing Heineken and −20.5% odds of choosing Corona. Heineken\'s natural consumer cohort is older adults (45+), consistent with decades-long advertising history.' },
            { title: 'Beer Frequency Specifically Predicts Heineken', body: 'Beer drinking frequency is the only variable that significantly predicts Heineken 0.0 selection (OR=1.498, p=0.033). Each step increase raises the odds of choosing Heineken by 49.8%. This signal does not carry for Corona.' },
            { title: 'NA Beer Experience Reduces Mother-Brand Reliance', body: 'Each step increase in NA beer consumption frequency reduces the probability of choosing any mother brand by 4.8 pp (p=0.029). A two-stage funnel applies: trust-led acquisition for the category-naive, taste-led retention for the experienced.' },
            { title: 'Physical Activity: Non-Linear Effect', body: 'Active consumers (4–5 days/week) peak at 66.7% mother-brand preference, but Very Active (6–7 days/week) drop to 42.6%. Very Active consumers are the most visible NA beer consumers in wellness contexts yet are least responsive to mother-brand positioning.' },
            { title: 'Price Suppression Is Partially Captured', body: 'The Variant B dummy (OR=1.404, Heineken) is positive but not significant. The pricing effect is partially absorbed by the brand-specific model, consistent with price being a moderator of the familiarity-to-selection pathway rather than an independent driver.' }
          ].map(item => (
            <Card key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── DISCUSSION ────────────────────────────────────────────── */}
      <Section id="ph2-discussion" title="Discussion" subtitle="Interpretation of Phase 2 findings and strategic implications">
        <div className="grid gap-6 lg:grid-cols-2">
          {discussionPoints.map((point) => (
            <Card key={point.id}>
              <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600 text-justify">{point.body}</p>
            </Card>
          ))}
        </div>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Limitations</p>
          <ul className="space-y-2">
            {[
              'Simulated environment and lottery incentive: Despite the realistic design, participants know they are in a research study. The lottery incentive creates consequential realism, but actual financial stakes differ from a real purchase.',
              'US-only sample: All participants are US-based Prolific respondents. Heineken\'s brand equity profile, consumer familiarity levels, and competitive dynamics differ substantially across international markets.',
              'Prolific panel characteristics: Prolific samples, while diverse, overrepresent technology-comfortable and survey-experienced participants. The 25–34 age skew (30.1%) and relatively high education level (50% bachelor\'s+) may not perfectly represent the mass NA beer market.'
            ].map(lim => (
              <li key={lim} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                {lim}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* ── RECOMMENDATIONS ───────────────────────────────────────── */}
      <Section id="ph2-recommendations" title="Recommendations for Heineken" subtitle="Six strategic and tactical recommendations for Heineken 0.0's US market strategy">
        <div className="grid gap-6 lg:grid-cols-2">
          {phase2Recommendations.map((rec) => (
            <Card key={rec.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-900">{rec.id}. {rec.title}</h3>
                <span className={`flex-none rounded-full px-2 py-0.5 text-xs font-semibold ${priorityColors[rec.priority]}`}>
                  {rec.priority}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Evidence</p>
                <p className="mt-1 text-sm text-slate-600 text-justify leading-relaxed">{rec.evidence}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recommendation</p>
                <p className="mt-1 text-sm text-slate-600 text-justify leading-relaxed">{rec.recommendation}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── CONCLUSION ────────────────────────────────────────────── */}
      <Section id="ph2-conclusion" title="Conclusion" subtitle="Phase 2 core conclusions and strategic summary">
        <div className="space-y-4">
          {phase2ConclusionParagraphs.map((para) => (
            <p key={para} className="text-sm text-slate-600 text-justify">{para}</p>
          ))}
        </div>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">Summary of Phase 2 Core Conclusions</p>
          <ol className="space-y-3">
            {phase2CoreConclusions.map((conclusion, i) => (
              <li key={conclusion} className="flex gap-3 text-sm text-slate-600">
                <span className="flex-none rounded-full bg-slate-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
                  {i + 1}
                </span>
                {conclusion}
              </li>
            ))}
          </ol>
        </Card>

        <Callout variant="insight" title="Overall Conclusion">
          Mother brand matters for a non-alcoholic beer to be successful. Heineken 0.0 is
          well-positioned to lead the non-alcoholic beer category — its brand trust, universal
          familiarity, and safe-fallback positioning create a durable competitive foundation.
          The primary challenge is converting that equity into first-choice selection through
          targeted pricing strategy, packaging differentiation, and expanded trial generation.
        </Callout>
      </Section>
    </>
  );
};

export default Phase2ReportPage;
