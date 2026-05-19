import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { chartPalette, axisTickStyle, gridStrokeColor, tooltipStyle } from './chartTheme';

interface HorizontalBarChartProps {
  data: { label: string; value: number; share?: number; percent?: number }[];
  ariaLabel: string;
  valueSuffix?: string;
  valueLabel?: string;
  xAxisTickFormatter?: (value: number) => string;
}

const HorizontalBarChart = ({
  data,
  ariaLabel,
  valueSuffix = '%',
  valueLabel = 'Share',
  xAxisTickFormatter
}: HorizontalBarChartProps) => (
  <div className="h-56" role="img" aria-label={ariaLabel}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor} horizontal={false} />
        <XAxis
          type="number"
          tick={axisTickStyle}
          axisLine={false}
          tickLine={false}
          tickFormatter={xAxisTickFormatter}
        />
        <YAxis
          dataKey="label"
          type="category"
          tick={axisTickStyle}
          axisLine={false}
          tickLine={false}
          width={110}
        />
        <Tooltip
          {...tooltipStyle}
          formatter={(value: number, _name, props) => {
            const payload = props.payload as { share?: number; percent?: number } | undefined;
            if (payload && typeof payload.share === 'number' && typeof payload.percent === 'number') {
              return [`${payload.share} (${payload.percent.toFixed(1)}%)`, valueLabel];
            }
            return [`${value}${valueSuffix}`, valueLabel];
          }}
        />
        <Bar dataKey="value" fill={chartPalette[0]} radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HorizontalBarChart;
