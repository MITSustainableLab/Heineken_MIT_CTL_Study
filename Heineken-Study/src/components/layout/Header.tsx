import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

interface HeaderProps {
  groups: NavGroup[];
  activePage: string;
  onPageChange: (pageId: string) => void;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={clsx('h-3 w-3 transition-transform duration-200', open && 'rotate-180')}
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
  >
    <path d="M2 3.5 5 6.5 8 3.5" />
  </svg>
);

const Header = ({ groups, activePage, onPageChange }: HeaderProps) => {
  const [openGroup, setOpenGroup]           = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close dropdown on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const isGroupActive  = (group: NavGroup) => group.items.some((item) => item.id === activePage);
  const activeSubLabel = (group: NavGroup) => group.items.find((item) => item.id === activePage)?.label ?? null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-1 lg:px-10">

        {/* Brand logos */}
        <div className="flex items-center gap-3">
          <img src="/images/MIT_CTL Logo.png" alt="MIT CTL" className="h-8 w-auto object-contain" />
          <span className="text-slate-300 text-lg font-light">×</span>
          <img src="/images/Heineken-Logo.png" alt="Heineken" className="h-20 w-auto max-w-[200px] object-contain -my-2" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center md:flex" aria-label="Main navigation">
          {groups.map((group) => {
            const groupActive = isGroupActive(group);
            const subLabel    = activeSubLabel(group);
            const isOpen      = openGroup === group.id;

            return (
              // Hover on the whole wrapper (button + panel) keeps the dropdown open
              <div
                key={group.id}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.id)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                {/* Clicking the label navigates directly to the group's default page (Report) */}
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => {
                    onPageChange(group.items[0].id);
                    setOpenGroup(null);
                  }}
                  className={clsx(
                    'relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-150 select-none',
                    groupActive ? 'text-brand' : 'text-slate-500 hover:text-slate-900'
                  )}
                >
                  <span>{group.label}</span>
                  {groupActive && subLabel && (
                    <span className="rounded-full bg-brand-pale px-2 py-0.5 text-[10px] font-semibold text-brand">
                      {subLabel}
                    </span>
                  )}
                  <ChevronIcon open={isOpen} />
                  {groupActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-brand" />
                  )}
                </button>

                {/* Dropdown panel — stays open while mouse is anywhere inside the wrapper */}
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full z-50 min-w-[168px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                  >
                    <div className="border-b border-slate-100 px-4 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        {group.label}
                      </p>
                    </div>
                    {group.items.map((item) => {
                      const isSelected = activePage === item.id;
                      return (
                        <button
                          key={item.id}
                          role="menuitem"
                          type="button"
                          onClick={() => {
                            onPageChange(item.id);
                            setOpenGroup(null);
                          }}
                          className={clsx(
                            'flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                            isSelected
                              ? 'bg-brand-pale font-medium text-brand'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          )}
                        >
                          <span className={clsx(
                            'h-1.5 w-1.5 flex-shrink-0 rounded-full',
                            isSelected ? 'bg-brand' : 'bg-slate-200'
                          )} />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 md:hidden"
          onClick={() => setMobileOpen((p) => !p)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {groups.map((group) => {
              const groupActive = isGroupActive(group);
              const isExpanded  = mobileExpanded === group.id;

              return (
                <div key={group.id}>
                  {/* Mobile: tap the label navigates to the default page */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        onPageChange(group.items[0].id);
                        setMobileOpen(false);
                        setMobileExpanded(null);
                      }}
                      className={clsx(
                        'flex-1 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors',
                        groupActive
                          ? 'bg-brand-pale text-brand'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      )}
                    >
                      {group.label}
                    </button>
                    {/* Separate chevron button expands sub-items */}
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : group.id)}
                      className={clsx(
                        'rounded-lg px-3 py-2.5 transition-colors',
                        groupActive ? 'text-brand' : 'text-slate-400 hover:text-slate-700'
                      )}
                      aria-label={`Expand ${group.label} menu`}
                    >
                      <ChevronIcon open={isExpanded} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-slate-100 pl-3">
                      {group.items.map((item) => {
                        const isSelected = activePage === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              onPageChange(item.id);
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            className={clsx(
                              'rounded-md px-3 py-2 text-left text-sm transition-colors',
                              isSelected
                                ? 'font-medium text-brand'
                                : 'text-slate-500 hover:text-slate-900'
                            )}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
