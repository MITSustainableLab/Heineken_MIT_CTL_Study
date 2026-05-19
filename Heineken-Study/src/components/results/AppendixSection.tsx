import Section from '../ui/Section';
import Card from '../ui/Card';
import AppendixTable from './AppendixTable';

const AppendixSection = () => {
  const appendixAColumns = [
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' }
  ];

  const appendixARows = [
    {
      key: 'system-metadata',
      values: ['System/Metadata', 'ID, session ID, timestamps, completion time']
    },
    {
      key: 'prolific-integration',
      values: ['Prolific Integration', 'Participant ID, Study ID, Session ID']
    },
    {
      key: 'pre-survey-screening',
      values: ['Pre-Survey Screening', 'Residency, age eligibility, consumption frequencies']
    },
    {
      key: 'demographics',
      values: ['Demographics', 'Age, gender, ethnicity, education, income, activity level']
    },
    {
      key: 'regular-comparisons',
      values: ['Regular Comparisons', 'Brand pairs and selections for standard one-on-one comparisons']
    },
    {
      key: 'price-comparisons',
      values: [
        'Price Comparisons',
        'Brand pairs, selections, and price-higher indicators (Equal price, Fictional brand priced higher, Fictional brand priced Lower)'
      ]
    },
    {
      key: 'multiple-choice',
      values: ['Multiple Choice', 'Brand selection and open-ended reasoning for each set']
    },
    {
      key: 'brand-perception',
      values: ['Brand Perception', 'Familiarity, importance factors, Heineken ratings, general attitudes']
    },
    {
      key: 'post-survey',
      values: ['Post-Survey', 'Attention checks, decision factor (open-ended), purchase likelihood']
    }
  ];

  const appendixBColumns = [
    { key: 'category', label: 'Category' },
    { key: 'brands', label: 'Brands' },
    { key: 'purpose', label: 'Purpose' }
  ];

  const appendixBRows = [
    {
      key: 'mother-brands',
      values: [
        'Mother Brands',
        "Heineken 0.0, Budweiser Zero, Beck's Blue",
        'To evaluate the weight of mother brand influence on consumer perceptions and purchase intent.'
      ]
    },
    {
      key: 'established-competitors',
      values: ["Established Competitors", "O'Doul's Non-Alcoholic", 'To benchmark against existing non-alcoholic non-mother brand leaders.']
    },
    {
      key: 'independent-brand',
      values: ['Independent Brand', 'Rescue Club Non-Alcoholic', 'To measure the influence of lesser known non-mother brands.']
    },
    {
      key: 'fictional-brands',
      values: [
        'Fictional Brands',
        'ClearHops 0.0, Star Brew Non-Alcoholic',
        'To establish a zero-familiarity baseline and isolate the impact of established brand name alone.'
      ]
    }
  ];

  return (
    <Section id="appendix" title="Appendix" subtitle="Data coverage and scenario definitions">
      <div className="grid gap-6">
        <Card className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Appendix A</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Data Export</h3>
          </div>
          <AppendixTable columns={appendixAColumns} rows={appendixARows} />
        </Card>
        <Card className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Appendix B</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Brands</h3>
          </div>
          <AppendixTable columns={appendixBColumns} rows={appendixBRows} />
        </Card>
      </div>
    </Section>
  );
};

export default AppendixSection;
