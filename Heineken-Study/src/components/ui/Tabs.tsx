import clsx from 'clsx';

export interface TabOption {
  id: string;
  label: string;
}

interface TabsProps {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
}

const Tabs = ({ options, value, onChange }: TabsProps) => (
  <div role="tablist" className="flex flex-wrap gap-1.5">
    {options.map((option) => {
      const isActive = option.id === value;
      return (
        <button
          key={option.id}
          role="tab"
          type="button"
          aria-selected={isActive}
          className={clsx(
            'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150',
            isActive
              ? 'border-brand bg-brand text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-800'
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

export default Tabs;
