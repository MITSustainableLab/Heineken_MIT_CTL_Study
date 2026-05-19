type ExperimentFlowTimelineProps = {
    title: string
    bullets: string[]
}

export function ExperimentFlowTimeline({ title, bullets }: ExperimentFlowTimelineProps) {
    const items = (bullets ?? []).filter((b) => typeof b === 'string' && b.trim().length > 0)

    return (
        <div className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 [&_p]:text-left">
            <div className="flex flex-wrap items-end justify-between gap-2">
                <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Flow overview</p>
                    <h3 className="mt-1 truncate text-sm font-semibold text-slate-900">{title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {items.length} steps
        </span>
            </div>

            <div className="mt-4 w-full min-w-0 overflow-x-hidden">
                <div className="relative">
                    <div className="pointer-events-none absolute left-0 right-0 top-4 h-px bg-slate-200" />

                    <div className="flex w-full min-w-0 gap-3 overflow-x-auto pb-2 pr-1">
                        {items.map((label, idx) => (
                            <div
                                key={`${label}-${idx}`}
                                className="relative w-[260px] shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm"
                            >
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                        Step {idx + 1}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-slate-900">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-2 text-xs text-slate-600">
                    Steps are presented in the order participants completed them.
                </p>
            </div>
        </div>
    )
}
