type PValueTone = "auto" | "vhigh" | "high" | "moderate" | "ns";

type StatPillProps = {
    label: string;
    comparisonOperator?: "=" | ">" | "<" | ">=" | "<=" | string;
    valueText: string; // e.g. "0.03", "p=0.03", "<0.001", "P < 0.1"
    className?: string;

    // Thresholds per your metric
    veryHighAlpha?: number; // 0.001
    highAlpha?: number;     // 0.01
    moderateAlpha?: number; // 0.1

    tone?: PValueTone;
    formatValueText?: (valueText: string) => string;
};

function parsePValue(valueText: string): number | null {
    const cleaned = valueText
        .replace(/p\s*=?/gi, "")          // remove "p=" / "P="
        .replace(/[^0-9.eE+-]/g, " ")     // keep numeric-ish tokens
        .trim();

    const token = cleaned.split(/\s+/).find(Boolean);
    if (!token) return null;

    const p = Number.parseFloat(token);
    return Number.isFinite(p) ? p : null;
}

/**
 * IMPORTANT: use BOTH:
 * - the numeric value parsed from valueText
 * - the explicit comparisonOperator prop (e.g. "<")
 *
 * Your example:
 *   comparisonOperator: "<"
 *   valueText: "0.01"
 * means "p < 0.01" (High), even though the number equals 0.01.
 */
function pValueToneAuto(
    comparisonOperator: string | undefined,
    valueText: string,
    veryHighAlpha: number,
    highAlpha: number,
    moderateAlpha: number
): { tone: Exclude<PValueTone, "auto">; p: number | null } {
    const p = parsePValue(valueText);
    if (p === null) return { tone: "ns", p: null };

    const op = (comparisonOperator ?? "").trim();

    // If op is "<" or "<=", treat equality as satisfying the threshold (because the *statement* is "p < X")
    const leByStatement = op === "<" || op === "<=" || op === "≤";

    const isBelow = (threshold: number) => (leByStatement ? p <= threshold : p < threshold);

    // Metric:
    // < 0.001 -> Very High
    // < 0.01  -> High
    // < 0.1   -> Moderate
    // > 0.1   -> Not significant
    if (isBelow(veryHighAlpha)) return { tone: "vhigh", p };
    if (isBelow(highAlpha)) return { tone: "high", p };
    if (isBelow(moderateAlpha)) return { tone: "moderate", p };
    return { tone: "ns", p };
}

function toneClasses(tone: Exclude<PValueTone, "auto">) {
    switch (tone) {
        case "vhigh":
            return "text-blue-900 bg-blue-200 ring-1 ring-blue-400";
        case "high":
            return "text-blue-500 bg-blue-50 bg- ring-1 ring-blue-200";
        case "moderate":
            return "text-amber-800 bg-amber-50 ring-1 ring-amber-200";
        case "ns":
        default:
            return "text-slate-600 bg-slate-50 ring-1 ring-slate-200";
    }
}

export function StatPill({
                             label,
                             comparisonOperator,
                             valueText,
                             className = "",
                             veryHighAlpha = 0.001,
                             highAlpha = 0.01,
                             moderateAlpha = 0.1,
                             tone = "auto",
                             formatValueText = (v) => v,
                         }: StatPillProps) {
    const resolved =
        tone === "auto"
            ? pValueToneAuto(comparisonOperator, valueText, veryHighAlpha, highAlpha, moderateAlpha).tone
            : tone;

    return (
        <span
            className={[
                "inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full border px-3",
                "leading-none",
                className,
            ].join(" ")}
        >
      <span className="text-slate-600 leading-none">
        {label} {comparisonOperator}
      </span>

      <span className={["rounded px-2 py-0.5 text-sm", toneClasses(resolved)].join(" ")}>
        {formatValueText(valueText)}
      </span>
    </span>
    );
}
