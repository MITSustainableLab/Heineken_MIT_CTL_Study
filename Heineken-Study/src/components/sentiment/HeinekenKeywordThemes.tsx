import Card from '../ui/Card';

interface ThemeCard {
  title: string;
  bullets: string[];
  summary?: string;
  chips?: string[];
}

interface HeinekenKeywordThemesProps {
  positiveDrivers: ThemeCard;
  barriers: ThemeCard;
}

const ThemeChips = ({ chips }: { chips?: string[] }) => {
  if (!chips || chips.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
          {chip}
        </span>
      ))}
    </div>
  );
};

const HeinekenKeywordThemes = ({ positiveDrivers, barriers }: HeinekenKeywordThemesProps) => (
  <div className="grid gap-4 lg:grid-cols-2">
    {[positiveDrivers, barriers].map((theme) => (
      <Card key={theme.title} className="space-y-3 w-full max-w-full overflow-hidden">
        <div>
          <p className="text-sm font-semibold text-slate-900 text-left">{theme.title}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-600 text-left leading-relaxed">
          {theme.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
        {theme.summary ? <p className="text-sm text-slate-600 whitespace-pre-line leading-normal">{theme.summary}</p> : null}
        <ThemeChips chips={theme.chips} />
      </Card>
    ))}
  </div>
);

export default HeinekenKeywordThemes;
