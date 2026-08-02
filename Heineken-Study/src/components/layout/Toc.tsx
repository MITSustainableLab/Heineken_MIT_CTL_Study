import { useEffect, useState } from 'react';
import clsx from 'clsx';

// How far below the sticky header the "active section" reference line sits.
const ACTIVE_LINE_OFFSET = 110;

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

  useEffect(() => {
    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    // IntersectionObserver only reports entries whose state just changed,
    // which drops updates during fast/animated scrolls (e.g. jumping to an
    // anchor) — the active item can get stuck on whatever last fired.
    // Instead, directly read each heading's position against a fixed
    // reference line below the sticky header: the active section is the
    // last one whose top has scrolled up past that line. This is always
    // computed fresh from current layout, so it can't go stale.
    let ticking = false;

    const updateActiveId = () => {
      ticking = false;
      let currentId = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= ACTIVE_LINE_OFFSET) {
          currentId = heading.id;
        } else {
          break;
        }
      }
      setActiveId(currentId);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveId);
    };

    updateActiveId();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
