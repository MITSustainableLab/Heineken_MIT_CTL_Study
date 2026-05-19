import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, actions, children, className }: SectionProps) => (
  <section
    id={id}
    className={clsx(
      'section-anchor grid gap-8 rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8',
      className
    )}
  >
    {/* Section header */}
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
      <div className="space-y-2">
        {/* Accent bar + title */}
        <div className="flex items-center gap-3">
          <span className="inline-block h-5 w-[3px] flex-shrink-0 rounded-full bg-brand" />
          <h2 className="text-[1.375rem] font-bold leading-tight tracking-tight text-slate-900">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="max-w-2xl pl-[18px] text-sm leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>

    {children}
  </section>
);

export default Section;
