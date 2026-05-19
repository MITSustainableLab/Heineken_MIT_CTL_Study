import { useState } from 'react';
import Card from '../ui/Card';
import Callout from '../ui/Callout';
import ChartCard from '../charts/ChartCard';
import GroupedBarChart from '../charts/GroupedBarChart';
import DonutChart from '../charts/DonutChart';
import { chartPalette } from '../charts/chartTheme';
import type { DiscrepancyCase, LikelihoodChart, ChoiceChart } from '../../data/discrepancies';
import { PARTICIPANT_SAMPLE_SIZE, toShareFromPercent } from '../../utils/participantMetrics';

interface DiscrepancyCaseCardProps {
  caseItem: DiscrepancyCase;
}

const likelihoodFootnote = '1 = Very unlikely · 5 = Very likely';

const getLikelihoodData = (chart: LikelihoodChart) =>
  chart.distribution.map((entry) => {
    const share = toShareFromPercent(entry.pct, PARTICIPANT_SAMPLE_SIZE);
    return { label: String(entry.score), share, percent: entry.pct };
  });

const getChoiceData = (chart: ChoiceChart) =>
  chart.shares.map((entry) => {
    const share = toShareFromPercent(entry.pct, PARTICIPANT_SAMPLE_SIZE);
    return { label: entry.label, share, percent: entry.pct, value: share };
  });

const gridColsClass = (count: number) => {
  if (count >= 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
  return 'grid-cols-1';
};

const DiscrepancyCaseCard = ({ caseItem }: DiscrepancyCaseCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const likelihoodLookup = Object.fromEntries(
    caseItem.likelihoodCharts.map((c) => [c.figureId, c])
  ) as Record<string, LikelihoodChart>;

  const choiceLookup = Object.fromEntries(
    caseItem.choiceCharts.map((c) => [c.figureId, c])
  ) as Record<string, ChoiceChart>;

  return (
    <Card className="space-y-5">
      {/* Header */}
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">
          {caseItem.title}
        </h3>
        <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          {isOpen ? '▲ Hide' : '▼ View'}
        </span>
      </button>

      {isOpen && (
        <div className="space-y-6">
          {/* Narrative — full width, no whitespace waste */}
          <div className="space-y-3">
            {caseItem.narrative.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Charts — horizontal grid */}
          <div className={`grid gap-4 ${gridColsClass(caseItem.figures.length)}`}>
            {caseItem.figures.map((figure) => {
              if (figure.kind === 'likelihood') {
                const chart = likelihoodLookup[figure.id];
                if (!chart) return null;
                return (
                  <ChartCard key={figure.id} title={figure.caption} footnote={likelihoodFootnote}>
                    <GroupedBarChart
                      data={getLikelihoodData(chart)}
                      series={[{
                        key: 'share',
                        label: chart.brandLabel,
                        color: chartPalette[1],
                      }]}
                      ariaLabel={`${chart.brandLabel} purchase likelihood distribution`}
                    />
                  </ChartCard>
                );
              }

              const chart = choiceLookup[figure.id];
              if (!chart) return null;
              return (
                <ChartCard key={figure.id} title={figure.caption}>
                  <DonutChart
                    data={getChoiceData(chart)}
                    ariaLabel={`${figure.caption} donut chart`}
                  />
                </ChartCard>
              );
            })}
          </div>

          {/* Takeaway */}
          {caseItem.takeaway && (
            <Callout variant="insight" title="Key takeaway">
              {caseItem.takeaway}
            </Callout>
          )}
        </div>
      )}
    </Card>
  );
};

export default DiscrepancyCaseCard;
