import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { SentimentByBrand } from '../../data/sentimentByBrand';

const columns = [
  { key: 'brand', label: 'Brand', sortable: false },
  { key: 'avgSentiment', label: 'Average Sentiment', sortable: true },
  { key: 'totalCount', label: 'Total Count', sortable: true },
  { key: 'positivePct', label: 'Positive %', sortable: false },
  { key: 'neutralPct', label: 'Neutral %', sortable: false },
  { key: 'negativePct', label: 'Negative %', sortable: false }
] as const;

type ColumnKey = (typeof columns)[number]['key'];

type SortableKey = 'avgSentiment' | 'totalCount';

interface SentimentTableProps {
  data: SentimentByBrand[];
}

const SentimentTable = ({ data }: SentimentTableProps) => {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortableKey>('avgSentiment');
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

  const handleSort = (key: ColumnKey) => {
    if (key !== 'avgSentiment' && key !== 'totalCount') return;
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
                    className={clsx(
                      'flex items-center gap-2',
                      column.key !== 'brand' && 'justify-end',
                      !column.sortable && 'cursor-default'
                    )}
                    onClick={() => handleSort(column.key)}
                    disabled={!column.sortable}
                  >
                    <span>{column.label}</span>
                    {column.sortable && sortKey === column.key ? (
                      <span>{direction === 'asc' ? '↑' : '↓'}</span>
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => {
              const isHeineken = row.brand.toLowerCase() === 'heineken';
              const lowSample = row.totalCount < 50;
              return (
                <tr
                  key={row.brand}
                  className={clsx('border-t border-slate-200', isHeineken && 'bg-slate-100/70')}
                >
                  <td className="px-4 py-3 font-medium text-slate-900">{row.brand}</td>
                  <td className="px-4 py-3 text-right">{row.avgSentiment.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span>{row.totalCount}</span>
                      {lowSample ? (
                        <span
                          className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700"
                          title="Interpret with caution"
                        >
                          ✱
                        </span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">{row.positivePct.toFixed(1)}%</td>
                  <td className="px-4 py-3 text-right">{row.neutralPct.toFixed(1)}%</td>
                  <td className="px-4 py-3 text-right">{row.negativePct.toFixed(1)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default SentimentTable;
