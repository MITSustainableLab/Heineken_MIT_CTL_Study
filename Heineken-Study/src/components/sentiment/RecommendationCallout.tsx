import Callout from '../ui/Callout';

interface RecommendationCalloutProps {
  title: string;
  body: string;
}

const RecommendationCallout = ({ title, body }: RecommendationCalloutProps) => (
  <Callout variant="note" title={title}>
    {body}
  </Callout>
);

export default RecommendationCallout;
