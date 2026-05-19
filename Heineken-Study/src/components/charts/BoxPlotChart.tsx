import { useMemo } from 'react';
import { chartPalette } from './chartTheme';

interface BoxPlotDatum {
  label: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
}

interface BoxPlotChartProps {
  data: BoxPlotDatum[];
  ariaLabel: string;
  valueSuffix?: string;
}

const BoxPlotChart = ({ data, ariaLabel, valueSuffix = '' }: BoxPlotChartProps) => {
  const { minValue, maxValue } = useMemo(() => {
    const mins = data.map((item) => item.min);
    const maxes = data.map((item) => item.max);
    return {
      minValue: Math.min(...mins),
      maxValue: Math.max(...maxes)
    };
  }, [data]);

  const scale = (value: number) => {
    const span = maxValue - minValue || 1;
    return ((value - minValue) / span) * 100;
  };

  return (
    <div className="space-y-4" role="img" aria-label={ariaLabel}>
      {data.map((item) => {
        const minX = scale(item.min);
        const q1X = scale(item.q1);
        const medianX = scale(item.median);
        const q3X = scale(item.q3);
        const maxX = scale(item.max);

        return (
          <div key={item.label} className="grid items-center gap-4 md:grid-cols-[120px_minmax(0,1fr)]">
            <div className="text-sm font-medium text-slate-600">{item.label}</div>
            <svg viewBox="0 0 100 24" className="h-10 w-full">
              <line x1={minX} y1={12} x2={maxX} y2={12} stroke={chartPalette[3]} strokeWidth={2} />
              <rect x={q1X} y={6} width={Math.max(q3X - q1X, 1)} height={12} fill={chartPalette[1]} opacity={0.25} />
              <line x1={medianX} y1={6} x2={medianX} y2={18} stroke={chartPalette[0]} strokeWidth={2} />
              <circle cx={minX} cy={12} r={2} fill={chartPalette[2]} />
              <circle cx={maxX} cy={12} r={2} fill={chartPalette[2]} />
            </svg>
            <div className="md:col-span-2 text-xs text-slate-500">
              Min {item.min}
              {valueSuffix} · Q1 {item.q1}
              {valueSuffix} · Median {item.median}
              {valueSuffix} · Q3 {item.q3}
              {valueSuffix} · Max {item.max}
              {valueSuffix}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoxPlotChart;
