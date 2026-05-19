import Card from '../ui/Card';
import { HypothesisOutcome } from '../../data/conclusion';

const outcomeStyles: Record<HypothesisOutcome['outcome'], string> = {
  supported:     'bg-brand-pale text-brand border border-brand-border',
  not_supported: 'bg-slate-100 text-slate-500 border border-slate-200',
};

interface HypothesisCardProps {
  hypothesis: HypothesisOutcome;
}

const HypothesisCard = ({ hypothesis }: HypothesisCardProps) => (
  <Card className="flex h-full flex-col gap-4 text-left">
    <div className="space-y-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
        {hypothesis.id}
      </p>
      <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">
        {hypothesis.title}
      </h3>
    </div>

    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Intent</p>
      <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{hypothesis.intent}</p>
    </div>

    <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${outcomeStyles[hypothesis.outcome]}`}>
        {hypothesis.outcomeLabel}
      </span>
      <p className="text-left text-sm leading-relaxed text-slate-600">{hypothesis.supportingText}</p>
    </div>
  </Card>
);

export default HypothesisCard;
