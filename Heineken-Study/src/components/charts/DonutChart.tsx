import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { chartPalette } from './chartTheme';

interface DonutChartProps {
  data: { label: string; value: number; share?: number; percent?: number }[];
  ariaLabel: string;
}

const renderOuterLabel = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    value,
    payload
  } = props;

  // push label outside the ring
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 14;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);

  const anchor = x > cx ? 'start' : 'end';

  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="central"
      fontSize={11}
      fill="#64748B"
    >
      {payload.label} {payload.share ?? value}
      {typeof payload.percent === 'number' ? ` (${payload.percent.toFixed(1)}%)` : null}
    </text>
  );
};

const DonutChart = ({ data, ariaLabel }: DonutChartProps) => (
  <div className="h-52" role="img" aria-label={ariaLabel}>
    <ResponsiveContainer>
      <PieChart>
        <Tooltip
          formatter={(value: number, _name, props) => {
            const payload = props.payload as { share?: number; percent?: number } | undefined;
            if (payload && typeof payload.share === 'number' && typeof payload.percent === 'number') {
              return [`${payload.share} (${payload.percent.toFixed(1)}%)`, 'Share'];
            }
            return [value.toString(), 'Share'];
          }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={2}
          stroke="transparent"
          labelLine
          label={renderOuterLabel}
        >
          {data.map((entry, index) => (
            <Cell key={entry.label} fill={chartPalette[index % chartPalette.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default DonutChart;
