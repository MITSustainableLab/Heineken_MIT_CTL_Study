import Card from '../ui/Card';

interface QuoteGroupProps {
  title: string;
  quotes: string[];
  sources?: string[];
}

const QuoteGroup = ({ title, quotes, sources }: QuoteGroupProps) => (
  <Card className="space-y-4">
    <div>
      <p className="text-sm font-semibold text-slate-900 text-left">{title}</p>
      {sources && sources.length > 0 ? (
        <p className="mt-1 text-xs text-slate-500">Sources: {sources.join(', ')}</p>
      ) : null}
    </div>
    <div className="space-y-3">
      {quotes.map((quote) => (
        <blockquote key={quote} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          “{quote}”
        </blockquote>
      ))}
    </div>
  </Card>
);

export default QuoteGroup;
