import clsx from 'clsx';

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const Chip = ({ label, selected = false, onClick }: ChipProps) => (
  <button
    type="button"
    className={clsx(
      'rounded-md border px-3 py-1 text-xs font-medium transition-all duration-150',
      selected
        ? 'border-brand bg-brand text-white'
        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-800'
    )}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Chip;
