import { ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

const Accordion = ({ items, defaultOpenId }: AccordionProps) => {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleToggle = (id: string, isOpen: boolean) => {
    const nextId = isOpen ? '' : id;
    setOpenId(nextId);
    if (nextId) {
      // Collapsing another item can shift this button off-screen; re-anchor
      // the viewport on it once the new layout has settled.
      requestAnimationFrame(() => {
        buttonRefs.current[nextId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div
            key={item.id}
            className={clsx(
              'rounded-xl border bg-white transition-colors',
              isOpen ? 'border-brand-border' : 'border-slate-200'
            )}
          >
            <button
              ref={(el) => { buttonRefs.current[item.id] = el; }}
              type="button"
              className="flex w-full scroll-mt-24 items-center justify-between gap-3 px-5 py-3.5 text-left"
              aria-expanded={isOpen}
              onClick={() => handleToggle(item.id, isOpen)}
            >
              <span className={clsx(
                'text-sm font-semibold transition-colors',
                isOpen ? 'text-brand' : 'text-slate-800'
              )}>
                {item.title}
              </span>
              <span className={clsx(
                'flex-shrink-0 text-[10px] font-semibold uppercase tracking-widest transition-colors',
                isOpen ? 'text-brand' : 'text-slate-400'
              )}>
                {isOpen ? '▲ Close' : '▼ Open'}
              </span>
            </button>
            {isOpen && (
              <div className="min-w-0 border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
