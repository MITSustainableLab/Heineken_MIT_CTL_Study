import { useState } from 'react';
import Button from '../ui/Button';

interface Quote {
  id: string;
  text: string;
  tag: string;
}

interface QuoteCarouselProps {
  quotes: Quote[];
}

const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const [index, setIndex] = useState(0);
  const current = quotes[index] ?? quotes[0];

  const goNext = () => setIndex((prev) => (prev + 1) % quotes.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  if (!current) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-xs uppercase tracking-wide text-slate-500">Quote highlight</p>
      <p className="mt-3 text-base text-slate-800">“{current.text}”</p>
      <p className="mt-2 text-xs text-slate-500">Theme: {current.tag}</p>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" onClick={goPrev} disabled={quotes.length < 2}>
          Previous
        </Button>
        <Button onClick={goNext} disabled={quotes.length < 2}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuoteCarousel;
