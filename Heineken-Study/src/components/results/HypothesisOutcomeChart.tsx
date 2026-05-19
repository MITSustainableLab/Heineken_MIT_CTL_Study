import Card from '../ui/Card';
import HorizontalBarChart from '../charts/HorizontalBarChart';
import { HypothesisOutcome } from '../../data/conclusion';

const outcomeChipStyles: Record<HypothesisOutcome['outcome'], string> = {
  supported:     'bg-brand-pale text-brand border border-brand-border',
  not_supported: 'bg-slate-100 text-slate-500 border border-slate-200',
};

interface HypothesisOutcomeChartProps {
  hypotheses: HypothesisOutcome[];
  keyTakeaway: string;
}

const HypothesisOutcomeChart = ({ hypotheses, keyTakeaway }: HypothesisOutcomeChartProps) => {
  const chartData = hypotheses.map((hypothesis) => ({
    label: hypothesis.id,
    value: hypothesis.evidenceStrength,
  }));

  return (
    <Card className="space-y-5">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          Hypothesis outcomes
        </p>
        <h3 className="mt-1.5 text-base font-semibold tracking-tight text-slate-900">
          Evidence strength by hypothesis
        </h3>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_200px]">
        <HorizontalBarChart
          data={chartData}
          ariaLabel="Evidence strength by hypothesis"
          valueSuffix=""
        />
        <div className="space-y-3 text-sm text-slate-600">
          {hypotheses.map((hypothesis) => (
            <div key={hypothesis.id} className="flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">{hypothesis.id}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${outcomeChipStyles[hypothesis.outcome]}`}>
                {hypothesis.outcomeLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs leading-relaxed text-slate-400">
        Evidence strength is a normalized summary based on reported statistical significance patterns (not raw p-values).
      </p>

      <div className="rounded-r-xl border-l-[3px] border-brand bg-brand-pale px-4 py-3 text-sm font-medium text-slate-800">
        Key takeaway: {keyTakeaway}
      </div>
    </Card>
  );
};

export default HypothesisOutcomeChart;
