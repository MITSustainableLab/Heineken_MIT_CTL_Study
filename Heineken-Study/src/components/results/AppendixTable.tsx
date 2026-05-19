interface AppendixTableColumn {
  key: string;
  label: string;
}

interface AppendixTableRow {
  key: string;
  values: string[];
}

interface AppendixTableProps {
  columns: AppendixTableColumn[];
  rows: AppendixTableRow[];
}

const AppendixTable = ({ columns, rows }: AppendixTableProps) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
    <table className="min-w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-3">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className="border-t border-slate-200">
            {row.values.map((value, index) => (
              <td
                key={`${row.key}-${columns[index]?.key ?? index}`}
                className={index === 0 ? 'px-4 py-3 font-medium text-slate-900' : 'px-4 py-3 text-slate-600'}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AppendixTable;
