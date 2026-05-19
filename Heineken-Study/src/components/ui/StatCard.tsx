import clsx from 'clsx';

interface StatCardProps {
  label: string;
  value: string;
  note?: string;
  className?: string;
}

const StatCard = ({ label, value, note, className }: StatCardProps) => (
  <div className={clsx('relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm', className)}>
    {/* Top accent line */}
    <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-brand" />
    <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
      {label}
    </p>
    <p className="stat-value mt-2 text-xl font-bold text-slate-900">{value}</p>
    {note && <p className="mt-1 text-xs leading-relaxed text-slate-400">{note}</p>}
  </div>
);

export default StatCard;
