import SentimentSummary from './SentimentSummary';
import SentimentKeyAccordion from './SentimentKeyAccordion';
import SentimentCharts from './SentimentCharts';
import SentimentTable from './SentimentTable';
import HeinekenDeepDive from './HeinekenDeepDive';
import { sentimentByBrand, categoryAverageSentiment } from '../../data/sentimentByBrand';
import { heinekenDeepDive } from '../../data/heinekenDeepDive';

const SentimentSection = () => (
  <div className="space-y-10 w-full max-w-full overflow-hidden">
    <SentimentSummary />
    <SentimentCharts data={sentimentByBrand} categoryAverage={categoryAverageSentiment} />
    <HeinekenDeepDive data={heinekenDeepDive} />
    <div className="space-y-6">
      <SentimentKeyAccordion />
      <SentimentTable data={sentimentByBrand} />
    </div>
  </div>
);

export default SentimentSection;
