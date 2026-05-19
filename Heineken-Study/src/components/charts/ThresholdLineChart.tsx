import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { chartPalette, axisTickStyle, gridStrokeColor, tooltipStyle } from './chartTheme';

interface SeriesDefinition {
  key: string;
  label: string;
}

interface ThresholdLineChartProps {
  data: Array<{ label: string; [key: string]: number | string }>;
  series: SeriesDefinition[];
  xAxisLabel: string;
  yAxisLabel: string;
  ariaLabel: string;
}

const ThresholdLineChart = ({
  data,
  series,
  xAxisLabel,
  yAxisLabel,
  ariaLabel
}: ThresholdLineChartProps) => (
  <div className="h-64" role="img" aria-label={ariaLabel}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 16, left: 8, bottom: 16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor} vertical={false} />
        <XAxis
          dataKey="label"
          tick={axisTickStyle}
          axisLine={false}
          tickLine={false}
          label={{ value: xAxisLabel, position: 'insideBottom', offset: -8, fill: '#94A3B8', fontSize: 11 }}
        />
        <YAxis
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tick={axisTickStyle}
          axisLine={false}
          tickLine={false}
          label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', fill: '#94A3B8', fontSize: 11 }}
        />
        <Tooltip {...tooltipStyle} formatter={(value) => `${value}%`} />
        <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '12px' }} />
        {series.map((item, index) => (
          <Line
            key={item.key}
            type="monotone"
            dataKey={item.key}
            name={item.label}
            stroke={chartPalette[index % chartPalette.length]}
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ThresholdLineChart;
