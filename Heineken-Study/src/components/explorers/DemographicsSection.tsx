import ChartCard from '../charts/ChartCard';
import HorizontalBarChart from '../charts/HorizontalBarChart';
import demographics from '../../data/demographics.json';
import { formatPercent, toPercentFromShare, PARTICIPANT_SAMPLE_SIZE } from '../../utils/participantMetrics';

const DemographicsSection = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    {demographics.sections.map((section) => {
      const chartItems = section.items.map((item) => {
        const percent = toPercentFromShare(item.value, PARTICIPANT_SAMPLE_SIZE);
        return {
          label: item.label,
          share: item.value,
          percent,
          value: percent
        };
      });
      const dataTable = (
        <table className="w-full">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-wide text-slate-500">
              <th className="py-1 font-semibold">Category</th>
              <th className="py-1 text-right font-semibold">Share</th>
              <th className="py-1 text-right font-semibold">Percent</th>
            </tr>
          </thead>
          <tbody>
            {chartItems.map((item) => (
              <tr key={item.label} className="border-b border-slate-200 last:border-0">
                <td className="py-1 text-left font-medium text-slate-700">{item.label}</td>
                <td className="py-1 text-right text-slate-600">{item.share}</td>
                <td className="py-1 text-right text-slate-600">{formatPercent(item.percent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

      return (
        <ChartCard key={section.id} title={section.title} dataTable={dataTable}>
          <HorizontalBarChart
            data={chartItems}
            ariaLabel={`${section.title} distribution`}
            valueLabel="Participants"
            xAxisTickFormatter={(value) => `${value}%`}
          />
        </ChartCard>
      );
    })}
  </div>
);

export default DemographicsSection;
