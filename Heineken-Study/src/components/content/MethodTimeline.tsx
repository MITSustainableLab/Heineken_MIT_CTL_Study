import { useState } from 'react';
import clsx from 'clsx';

interface Stage {
  id: string;
  title: string;
  description: string;
  bullet_one: string;
  bullet_two: string;
  bullet_three: string;
}

interface MethodTimelineProps {
  stages: Stage[];
}

const MethodTimeline = ({ stages }: MethodTimelineProps) => {
  const [activeStageId, setActiveStageId] = useState<string | null>(null);

  const toggleStage = (stageId: string) => {
    setActiveStageId((prev) => (prev === stageId ? null : stageId));
  };

  const activeStage = stages.find((stage) => stage.id === activeStageId);

  return (
    <div className="grid gap-4 md:grid-cols-5">
      {stages.map((stage, index) => {
        const isOpen = activeStageId === stage.id;
        return (
          <div
            key={stage.id}
            className={clsx(
              'rounded-xl border bg-white p-4 transition-colors',
              isOpen ? 'border-brand-border bg-brand-pale' : 'border-slate-200 hover:border-slate-300'
            )}
          >
            <button
              type="button"
              onClick={() => toggleStage(stage.id)}
              aria-pressed={isOpen}
              className="flex w-full flex-col items-start text-left"
            >
              <p className={clsx(
                'text-[10px] font-semibold uppercase tracking-widest',
                isOpen ? 'text-brand' : 'text-slate-400'
              )}>
                Step {index + 1}
              </p>
              <h3 className={clsx(
                'mt-1.5 text-sm font-semibold leading-snug',
                isOpen ? 'text-brand' : 'text-slate-900'
              )}>
                {stage.title}
              </h3>
              <span className={clsx(
                'mt-3 text-xs font-medium',
                isOpen ? 'text-brand' : 'text-slate-400'
              )}>
                {isOpen ? '▲ Close' : '▼ Details'}
              </span>
            </button>
          </div>
        );
      })}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:col-span-5">
        {activeStage ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Step {stages.findIndex((s) => s.id === activeStage.id) + 1} — Details
            </p>
            <h4 className="mt-1.5 text-sm font-semibold text-slate-900">{activeStage.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{activeStage.description}</p>
            <ul className="mt-3 space-y-1.5">
              {[activeStage.bullet_one, activeStage.bullet_two, activeStage.bullet_three]
                .filter((b): b is string => typeof b === 'string' && b.trim().length > 0)
                .map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                    <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                    {b}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-slate-400">Select a step above to see detailed notes.</p>
        )}
      </div>
    </div>
  );
};

export default MethodTimeline;
