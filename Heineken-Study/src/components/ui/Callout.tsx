import { ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'insight' | 'method' | 'note';

const variantStyles: Record<Variant, string> = {
  insight: 'border-l-[3px] border-brand bg-brand-pale',
  method:  'border-l-[3px] border-slate-400 bg-slate-50',
  note:    'border-l-[3px] border-slate-300 bg-slate-50',
};

const titleStyles: Record<Variant, string> = {
  insight: 'text-brand',
  method:  'text-slate-500',
  note:    'text-slate-400',
};

const contentStyles: Record<Variant, string> = {
  insight: 'text-slate-800',
  method:  'text-slate-700',
  note:    'text-slate-600',
};

interface CalloutProps {
  variant?: Variant;
  title: string;
  children: ReactNode;
}

const Callout = ({ variant = 'insight', title, children }: CalloutProps) => (
  <div className={clsx('rounded-r-xl px-5 py-4', variantStyles[variant])}>
    <p className={clsx('text-[10px] font-semibold uppercase tracking-widest', titleStyles[variant])}>
      {title}
    </p>
    <div className={clsx('mt-2 text-sm leading-relaxed', contentStyles[variant])}>
      {children}
    </div>
  </div>
);

export default Callout;
