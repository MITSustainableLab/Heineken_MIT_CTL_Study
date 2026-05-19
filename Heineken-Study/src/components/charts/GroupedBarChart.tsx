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

interface Series {
  key: string;
  label: string;
  color?: string;
}

interface GroupedBarChartProps {
  data: Array<{ label: string; [key: string]: number | string }>;
  series: Series[];
  ariaLabel: string;
  yAxisTickFormatter?: (value: number) => string;
}

const GroupedBarChart = ({ data, series, ariaLabel, yAxisTickFormatter }: GroupedBarChartProps) => (
  <div className="h-64" role="img" aria-label={ariaLabel}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor} vertical={false} />
        <XAxis dataKey="label" tick={axisTickStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisTickStyle} tickFormatter={yAxisTickFormatter} axisLine={false} tickLine={false} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
        {series.map((item, index) => (
          <Bar
            key={item.key}
            dataKey={item.key}
            name={item.label}
            fill={item.color ?? chartPalette[index % chartPalette.length]}
            radius={[0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default GroupedBarChart;
