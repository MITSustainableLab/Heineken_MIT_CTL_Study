import { ReactNode, useState } from 'react';
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
              type="button"
              className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? '' : item.id)}
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
