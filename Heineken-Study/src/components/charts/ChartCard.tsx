import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { StatPill } from '../content/PValue';

interface StatRow {
  label: string;
  valueText: string;
  comparisonOperator?: string;
}

interface ChartCardProps {
  title: string;
  caption?: string;
  footnote?: string;
  interpretation?: string;
  stats?: StatRow[];
  children: ReactNode;
  dataTable?: ReactNode;
}

const ChartCard = ({ title, caption, footnote, interpretation, stats, children, dataTable }: ChartCardProps) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="flex w-full min-w-0 flex-col gap-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{title}</h3>
          {caption && <p className="mt-1 text-xs leading-relaxed text-slate-400">{caption}</p>}
        </div>
        {dataTable && (
          <button
            type="button"
            className="flex-shrink-0 rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700"
            onClick={() => setShowData((prev) => !prev)}
          >
            {showData ? 'Hide data' : 'View data'}
          </button>
        )}
      </div>

      <div className="min-h-[180px]">{children}</div>

      {interpretation && (
        <p className="border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
          {interpretation}
        </p>
      )}

      {stats && stats.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {stats.map((stat) => (
            <StatPill
              key={stat.label}
              label={stat.label}
              comparisonOperator={stat.comparisonOperator}
              valueText={stat.valueText}
            />
          ))}
        </div>
      )}

      {footnote && (
        <p className="text-[11px] leading-relaxed text-slate-400">{footnote}</p>
      )}

      {dataTable && (
        <div
          className={clsx(
            'rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600',
            !showData && 'hidden'
          )}
        >
          {dataTable}
        </div>
      )}
    </div>
  );
};

export default ChartCard;
