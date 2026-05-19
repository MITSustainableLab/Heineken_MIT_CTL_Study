import Callout from '../ui/Callout';

interface InterpretationCalloutProps {
  takeaway: string;
}

const InterpretationCallout = ({ takeaway }: InterpretationCalloutProps) => (
  <Callout variant="insight" title="Interpretation">
    {takeaway}
  </Callout>
);

export default InterpretationCallout;
