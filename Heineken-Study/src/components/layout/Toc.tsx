import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface TocSection {
  id: string;
  label: string;
  isGroup?: boolean;
  isSubItem?: boolean;
}

interface TocProps {
  sections: TocSection[];
}

const Toc = ({ sections }: TocProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();

    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <aside className="sticky top-24 hidden h-fit min-w-[240px] rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:block">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        Contents
      </p>
      <ul className="mt-4 space-y-1">
        {sections.map((section) => {
          if (section.isGroup) {
            const isActive = activeId === section.id;
            return (
              <li key={section.id} className="mt-3 mb-1">
                <a
                  href={`#${section.id}`}
                  className={clsx(
                    'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors',
                    isActive ? 'text-brand' : 'text-slate-400 hover:text-slate-700'
                  )}
                >
                  {section.label}
                </a>
              </li>
            );
          }

          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex items-start gap-2.5 rounded-md py-2 text-sm transition-colors',
                  section.isSubItem ? 'pl-6 pr-3' : 'px-3',
                  isActive
                    ? 'bg-brand-pale font-semibold text-brand'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <span className={clsx(
                  'mt-[5px] flex-shrink-0 rounded-full',
                  section.isSubItem ? 'h-[3px] w-[3px]' : 'h-1 w-1',
                  isActive ? 'bg-brand' : 'bg-slate-300'
                )} />
                <span className="leading-snug">{section.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Toc;
