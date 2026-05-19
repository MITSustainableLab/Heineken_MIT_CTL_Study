import Card from '../ui/Card';
import HeinekenKpiCards from './HeinekenKpiCards';
import HeinekenKeywordThemes from './HeinekenKeywordThemes';
import QuoteGroup from './QuoteGroup';
import { HeinekenDeepDive as HeinekenDeepDiveData } from '../../data/heinekenDeepDive';

interface HeinekenDeepDiveProps {
  data: HeinekenDeepDiveData;
}

const HeinekenDeepDive = ({ data }: HeinekenDeepDiveProps) => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Heineken deep dive</p>
    </div>

    <Card className="space-y-4">
      <p className="text-sm font-semibold text-slate-900">Performance Overview</p>
      <HeinekenKpiCards avgSentiment={data.performance.avgSentiment} marketPosition={data.performance.marketPosition} />
    </Card>

    <HeinekenKeywordThemes
      positiveDrivers={data.keywordThemes.positiveDrivers}
      barriers={data.keywordThemes.barriers}
    />

    <div className="grid gap-4 lg:grid-cols-3">
      {data.quotes.map((group) => (
        <QuoteGroup
            key={group.id}
            title={group.title}
            quotes={group.quotes}
            sources={group.sources}
        />
      ))}
    </div>
  </div>
);

export default HeinekenDeepDive;
