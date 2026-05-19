interface KeyTakeaway {
  id: string;
  text: string;
}

interface KeyTakeawaysProps {
  items: KeyTakeaway[];
}

const KeyTakeaways = ({ items }: KeyTakeawaysProps) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item.id} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
);

export default KeyTakeaways;
