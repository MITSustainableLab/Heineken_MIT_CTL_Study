import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from 'recharts';
import { chartPalette, axisTickStyle, gridStrokeColor, tooltipStyle } from './chartTheme';

interface DistributionItem {
  label: string;
  values: Record<string, number>;
}

interface StackedBarChartProps {
  data: DistributionItem[];
  keys: string[];
  ariaLabel: string;
}

const StackedBarChart = ({ data, keys, ariaLabel }: StackedBarChartProps) => {
  const mapped = data.map((item) => ({ label: item.label, ...item.values }));

  return (
    <div className="h-56" role="img" aria-label={ariaLabel}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mapped} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor} horizontal={false} />
          <XAxis type="number" tick={axisTickStyle} axisLine={false} tickLine={false} />
          <YAxis dataKey="label" type="category" tick={axisTickStyle} axisLine={false} tickLine={false} width={110} />
          <Tooltip {...tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
          {keys.map((key, index) => (
            <Bar key={key} dataKey={key} stackId="a" fill={chartPalette[index % chartPalette.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
