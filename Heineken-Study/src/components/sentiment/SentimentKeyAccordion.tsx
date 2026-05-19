import Accordion from '../ui/Accordion';

const SentimentKeyAccordion = () => {
  const items = [
    {
      id: 'sentiment-table-key',
      title: 'Key to the Data Table',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-slate-700">Brand</p>
            <p>Merged brand names and abbreviations.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Average Sentiment</p>
            <p>Mean polarity score (−1 to +1); 1 being the most positive sentiment and -1 the least positive.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Total Count</p>
            <p>Number of text responses mentioning the brand; lower counts reduce reliability.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Sentiment thresholds</p>
            <ul className="mt-2 space-y-1">
              <li>• Positive (&gt; 0.05)</li>
              <li>• Neutral (between -0.05 and 0.05)</li>
              <li>• Negative (&lt; -0.05)</li>
            </ul>
          </div>
            <div>
                <p className="font-semibold text-slate-700">Note</p>
                <p>
                    ✱ indicates low number of responses
                </p>
            </div>
        </div>
      )
    }
  ];

  return <Accordion items={items} />;
};

export default SentimentKeyAccordion;
