interface ThemeListProps {
  title: string;
  items: string[];
}

const ThemeList = ({ title, items }: ThemeListProps) => (
  <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default ThemeList;
