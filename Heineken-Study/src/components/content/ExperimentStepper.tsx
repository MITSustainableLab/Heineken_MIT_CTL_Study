interface Step {
  title: string;
  bullets: string[];
}

interface ExperimentStepperProps {
  steps: Step[];
}

const ExperimentStepper = ({ steps }: ExperimentStepperProps) => (
  <div className="space-y-3">
    {steps.map((step, index) => (
      <div key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
          {index + 1}
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-snug text-slate-900">{step.title}</h3>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-500">
            {step.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-1.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default ExperimentStepper;
