import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
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
  const pendingAnchorRef = useRef<{ id: string; top: number } | null>(null);

  const handleToggle = (id: string, isOpen: boolean) => {
    const button = buttonRefs.current[id];
    if (button) {
      // Record where the clicked header sits on screen so we can keep it
      // pinned there after the open/close reflow, instead of letting the
      // page jump when another (possibly off-screen) item collapses.
      pendingAnchorRef.current = { id, top: button.getBoundingClientRect().top };
    }
    setOpenId(isOpen ? '' : id);
  };

  useLayoutEffect(() => {
    const anchor = pendingAnchorRef.current;
    pendingAnchorRef.current = null;
    if (!anchor) return;

    const el = buttonRefs.current[anchor.id];
    if (!el) return;

    const newTop = el.getBoundingClientRect().top;
    const delta = newTop - anchor.top;
    if (delta !== 0) {
      // The page sets a global `scroll-behavior: smooth`, which would turn
      // this correction into a visible glide. Force it instant so the
      // clicked item simply stays put with no motion at all.
      window.scrollBy({ top: delta, behavior: 'instant' as ScrollBehavior });
    }
  }, [openId]);

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
              className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left"
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
