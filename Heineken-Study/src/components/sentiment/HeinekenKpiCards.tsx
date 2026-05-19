import StatCard from '../ui/StatCard';

interface HeinekenKpiCardsProps {
  avgSentiment: number;
  marketPosition: string;
}

const HeinekenKpiCards = ({ avgSentiment, marketPosition }: HeinekenKpiCardsProps) => (
  <div className="grid gap-4 md:grid-cols-2">
    <StatCard label="Average Sentiment Score" value={avgSentiment.toFixed(2)} note="Polarity scale −1 to +1" />
    <StatCard label="Market Position" value="Equals Category Average" note={marketPosition} />
  </div>
);

export default HeinekenKpiCards;
