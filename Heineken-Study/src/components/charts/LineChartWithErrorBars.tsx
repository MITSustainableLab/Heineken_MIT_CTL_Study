interface SeriesPoint {
    value: number
    error: number
}

interface SeriesDefinition {
    label: string
    color: string
    points: SeriesPoint[]
}

interface LineChartWithErrorBarsProps {
    xLabels: string[]
    xAxisLabel: string
    yAxisLabel: string
    series: SeriesDefinition[]
    ariaLabel: string

    // optional axis config
    yMin?: number
    yMax?: number
    yTicks?: number

    // styling / presentation (corporate defaults)
    showGrid?: boolean
    showLegend?: boolean
    legendPosition?: 'top' | 'bottom'
    valueFormat?: (v: number) => string
}

const DEFAULT_VALUE_FORMAT = (v: number) => {
    // Clean formatting for probabilities
    if (v >= -1e-9 && v <= 1 + 1e-9) {
        // show 0, 0.1, 0.25, 1 etc without trailing zeros
        const s = v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')
        return s === '-0' ? '0' : s
    }
    return Number.isInteger(v) ? String(v) : v.toFixed(2)
}

const LineChartWithErrorBars = ({
                                    xLabels,
                                    xAxisLabel,
                                    yAxisLabel,
                                    series,
                                    ariaLabel,
                                    yMin = 0,
                                    yMax = 1,
                                    yTicks = 5,
                                    showGrid = true,
                                    showLegend = true,
                                    legendPosition = 'top',
                                    valueFormat = DEFAULT_VALUE_FORMAT
                                }: LineChartWithErrorBarsProps) => {
    // Slightly larger + cleaner aspect ratio for “report-ready” charts
    const width = 520
    const height = 260

    // More breathing room for labels
    const padding = { top: 18, right: 18, bottom: 46, left: 54 }
    const plotWidth = width - padding.left - padding.right
    const plotHeight = height - padding.top - padding.bottom

    const xPositions = xLabels.map(
        (_, index) => padding.left + (plotWidth / Math.max(1, xLabels.length - 1)) * index
    )

    const clamp = (v: number) => Math.min(yMax, Math.max(yMin, v))
    const tFromValue = (v: number) => (clamp(v) - yMin) / (yMax - yMin || 1) // 0..1
    const yScale = (value: number) => padding.top + (1 - tFromValue(value)) * plotHeight

    const buildPath = (points: SeriesPoint[]) =>
        points
            .map(
                (point, index) =>
                    `${index === 0 ? 'M' : 'L'} ${xPositions[index]} ${yScale(point.value)}`
            )
            .join(' ')

    // ticks
    const tickCount = Math.max(2, Math.floor(yTicks))
    const yTickValues = Array.from({ length: tickCount }, (_, i) => {
        const t = i / (tickCount - 1)
        return yMin + (yMax - yMin) * t
    })

    // Corporate styling tokens (neutral)
    const axisColor = '#334155' // slate-700
    const gridColor = '#E2E8F0' // slate-200
    const tickColor = '#475569' // slate-600
    const labelColor = '#334155' // slate-700
    const bg = 'transparent'

    // Visual weights (lighter than before)
    const axisWidth = 1.25
    const gridWidth = 1
    const seriesStroke = 2
    const markerRadius = 3
    const errorBarWidth = 1

    return (
        <div className="space-y-2">
            {/* Legend (simple, unboxed, aligned left) */}
            {showLegend && legendPosition === 'top' && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-600">
                    {series.map((entry) => (
                        <div key={entry.label} className="flex items-center gap-2">
              <span
                  className="h-[2px] w-6 rounded"
                  style={{ backgroundColor: entry.color }}
                  aria-hidden="true"
              />
                            <span>{entry.label}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="relative w-full">
                <svg
                    className="h-auto w-full"
                    viewBox={`0 0 ${width} ${height}`}
                    role="img"
                    aria-label={ariaLabel}
                    style={{ background: bg }}
                >
                    {/* grid: horizontal only by default; vertical is optional (corporate charts usually prefer fewer lines) */}
                    {showGrid && (
                        <g>
                            {yTickValues.map((v) => {
                                const y = yScale(v)
                                return (
                                    <line
                                        key={`ygrid-${v}`}
                                        x1={padding.left}
                                        y1={y}
                                        x2={width - padding.right}
                                        y2={y}
                                        stroke={gridColor}
                                        strokeWidth={gridWidth}
                                    />
                                )
                            })}
                        </g>
                    )}

                    {/* axes: left + bottom only */}
                    <line
                        x1={padding.left}
                        y1={padding.top}
                        x2={padding.left}
                        y2={height - padding.bottom}
                        stroke={axisColor}
                        strokeWidth={axisWidth}
                    />
                    <line
                        x1={padding.left}
                        y1={height - padding.bottom}
                        x2={width - padding.right}
                        y2={height - padding.bottom}
                        stroke={axisColor}
                        strokeWidth={axisWidth}
                    />

                    {/* y ticks */}
                    <g>
                        {yTickValues.map((v) => {
                            const y = yScale(v)
                            return (
                                <g key={`ytick-${v}`}>
                                    <line
                                        x1={padding.left - 4}
                                        y1={y}
                                        x2={padding.left}
                                        y2={y}
                                        stroke={axisColor}
                                        strokeWidth={1}
                                    />
                                    <text
                                        x={padding.left - 8}
                                        y={y + 3}
                                        textAnchor="end"
                                        fontSize="11"
                                        fill={tickColor}
                                    >
                                        {valueFormat(v)}
                                    </text>
                                </g>
                            )
                        })}
                    </g>

                    {/* series: line + differentiated error bars + markers */}
                    {series.map((entry, seriesIndex) => {
                        // small horizontal dodge so error bars don’t sit on top of each other
                        const dodgePx = 6
                        const xDodge =
                            series.length <= 1 ? 0 : (seriesIndex - (series.length - 1) / 2) * dodgePx

                        // distinguish error bars by series: subtle dash patterns
                        const dashPatterns = ['0', '4 2', '2 2', '6 2'] // extend if you ever add more series
                        const strokeDasharray = dashPatterns[seriesIndex % dashPatterns.length]

                        // use series color but muted, so it reads as “uncertainty” not a second data line
                        const errorStroke = entry.color
                        const errorOpacity = 0.55

                        return (
                            <g key={entry.label}>
                                <path
                                    d={buildPath(entry.points)}
                                    fill="none"
                                    stroke={entry.color}
                                    strokeWidth={seriesStroke}
                                />

                                {entry.points.map((point, pointIndex) => {
                                    const x = xPositions[pointIndex] + xDodge
                                    const y = yScale(point.value)
                                    const errorTop = yScale(point.value + point.error)
                                    const errorBottom = yScale(point.value - point.error)

                                    // --- FIX: clamp only FIRST point caps so they don't cross the y-axis ---
                                    const plotLeftX = padding.left
                                    const plotRightX = width - padding.right
                                    const capHalfWidth = 5

                                    let capLeft = x - capHalfWidth
                                    let capRight = x + capHalfWidth

                                    if (pointIndex === 0) {
                                        capLeft = Math.max(plotLeftX, capLeft)
                                        capRight = Math.min(plotRightX, capRight)
                                    }
                                    // ---------------------------------------------------------------------

                                    return (
                                        <g key={`${entry.label}-${pointIndex}`}>
                                            {/* vertical error line */}
                                            <line
                                                x1={x}
                                                y1={errorTop}
                                                x2={x}
                                                y2={errorBottom}
                                                stroke={errorStroke}
                                                strokeOpacity={errorOpacity}
                                                strokeWidth={errorBarWidth}
                                                strokeDasharray={strokeDasharray}
                                                strokeLinecap="round"
                                            />

                                            {/* caps */}
                                            <line
                                                x1={capLeft}
                                                y1={errorTop}
                                                x2={capRight}
                                                y2={errorTop}
                                                stroke={errorStroke}
                                                strokeOpacity={errorOpacity}
                                                strokeWidth={errorBarWidth}
                                                strokeDasharray={strokeDasharray}
                                                strokeLinecap="round"
                                            />
                                            <line
                                                x1={capLeft}
                                                y1={errorBottom}
                                                x2={capRight}
                                                y2={errorBottom}
                                                stroke={errorStroke}
                                                strokeOpacity={errorOpacity}
                                                strokeWidth={errorBarWidth}
                                                strokeDasharray={strokeDasharray}
                                                strokeLinecap="round"
                                            />

                                            {/* marker stays centered on the true x (no dodge) */}
                                            <circle
                                                cx={xPositions[pointIndex]}
                                                cy={y}
                                                r={markerRadius}
                                                fill={entry.color}
                                            />
                                        </g>
                                    )
                                })}
                            </g>
                        )
                    })}

                    {/* x tick labels */}
                    {xLabels.map((label, index) => (
                        <text
                            key={`${label}-${index}`}
                            x={xPositions[index]}
                            y={height - padding.bottom + 18}
                            textAnchor="middle"
                            fontSize="11"
                            fill={tickColor}
                        >
                            {label}
                        </text>
                    ))}

                    {/* axis labels */}
                    <text
                        x={padding.left + plotWidth / 2}
                        y={height - 12}
                        textAnchor="middle"
                        fontSize="12"
                        fill={labelColor}
                    >
                        {xAxisLabel}
                    </text>

                    {/* y-axis label (rotated) */}
                    <text
                        x={14}
                        y={padding.top + plotHeight / 2}
                        textAnchor="middle"
                        fontSize="12"
                        fill={labelColor}
                        transform={`rotate(-90 14 ${padding.top + plotHeight / 2})`}
                    >
                        {yAxisLabel}
                    </text>
                </svg>
            </div>

            {showLegend && legendPosition === 'bottom' && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-600">
                    {series.map((entry) => (
                        <div key={entry.label} className="flex items-center gap-2">
              <span
                  className="h-[2px] w-6 rounded"
                  style={{ backgroundColor: entry.color }}
                  aria-hidden="true"
              />
                            <span>{entry.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LineChartWithErrorBars
