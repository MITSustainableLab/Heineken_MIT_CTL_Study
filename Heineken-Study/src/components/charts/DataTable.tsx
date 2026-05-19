import { useMemo, useState } from 'react';
import clsx from 'clsx';

export interface TableRow {
  brand: string;
  avgSentiment: number;
  count: number;
  positivePct: number;
  neutralPct: number;
  negativePct: number;
}

const columns = [
  { key: 'brand', label: 'Brand', numeric: false },
  { key: 'avgSentiment', label: 'Avg sentiment', numeric: true },
  { key: 'count', label: 'Mentions', numeric: true },
  { key: 'positivePct', label: 'Positive %', numeric: true },
  { key: 'neutralPct', label: 'Neutral %', numeric: true },
  { key: 'negativePct', label: 'Negative %', numeric: true }
] as const;

interface DataTableProps {
  data: TableRow[];
}

const DataTable = ({ data }: DataTableProps) => {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<keyof TableRow>('avgSentiment');
  const [direction, setDirection] = useState<'asc' | 'desc'>('desc');

  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return data.filter((row) => row.brand.toLowerCase().includes(lower));
  }, [data, query]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      if (valueA === valueB) return 0;
      if (direction === 'asc') {
        return valueA > valueB ? 1 : -1;
      }
      return valueA < valueB ? 1 : -1;
    });
  }, [filtered, sortKey, direction]);

  const handleSort = (key: keyof TableRow) => {
    if (key === sortKey) {
      setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      return;
    }
    setSortKey(key);
    setDirection('desc');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">Search and sort sentiment metrics by brand.</p>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search brand"
          className="w-full max-w-xs rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
          aria-label="Search brand sentiment"
        />
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3">
                  <button
                    type="button"
                    className={clsx('flex items-center gap-2', column.numeric && 'justify-end')}
                    onClick={() => handleSort(column.key)}
                  >
                    <span>{column.label}</span>
                    {sortKey === column.key ? (
                      <span>{direction === 'asc' ? '↑' : '↓'}</span>
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.brand} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-900">{row.brand}</td>
                <td className="px-4 py-3 text-right">{row.avgSentiment.toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{row.count}</td>
                <td className="px-4 py-3 text-right">{row.positivePct}%</td>
                <td className="px-4 py-3 text-right">{row.neutralPct}%</td>
                <td className="px-4 py-3 text-right">{row.negativePct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
