import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import Accordion from '../components/ui/Accordion';
import Tabs from '../components/ui/Tabs';
import MethodTimeline from '../components/content/MethodTimeline';
import GlossarySection from '../components/content/GlossarySection';
import ResultsExplorer from '../components/explorers/ResultsExplorer';
import DemographicsSection from '../components/explorers/DemographicsSection';
import StandardLogisticRegressionSection from '../components/explorers/StandardLogisticRegressionSection';
import SentimentSection from '../components/sentiment/SentimentSection';
import DiscrepanciesSection from '../components/results/DiscrepanciesSection';
import ConclusionSection from '../components/results/ConclusionSection';
import AppendixSection from '../components/results/AppendixSection';
import GroupedBarChart from '../components/charts/GroupedBarChart';
import ThresholdLineChart from '../components/charts/ThresholdLineChart';
import ChartCard from '../components/charts/ChartCard';
import reportMeta from '../data/reportMeta.json';
import narrative from '../data/narrative.json';
import studyDesign from '../data/studyDesign.json';
import motherBrandPickRate from '../data/motherBrandPickRate.json';
import heinekenPickRate from '../data/heinekenPickRate.json';
import {ExperimentFlowTimeline} from "../components/content/ExperimentFlowTimeLine";

export const reportSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'study-design', label: 'Study Design' },
  { id: 'experiment-flow', label: 'Experiment Flow' },
  { id: 'demographics', label: 'Demographics' },
  { id: 'results', label: 'Results' },
  { id: 'pick-rate-comparison', label: 'Selection Share Comparison' },
  { id: 'standard-logistic-regression', label: 'Standard Logistic Regression Analysis' },
  { id: 'sentiment', label: 'Sentiment' },
  { id: 'discrepancies', label: 'Discrepancies' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'appendix', label: 'Appendix' },
  { id: 'glossary', label: 'Glossary' }
];

const ReportPage = () => {
  const researchCards = [
    {
      id: 'context',
      title: 'Context',
      content: (
        <ul className="space-y-2 text-sm text-slate-600">
          {narrative.context.map((item) => (
            <li key={item} className={'text-justify'}>{item}</li>
          ))}
        </ul>
      )
    },
    {
      id: 'research-questions',
      title: 'Research questions',
      content: (
        <ul className="space-y-2 text-sm text-slate-600">
          {narrative.researchQuestions.map((question) => (
            <li key={question.id}>
              <span className="font-semibold text-slate-700">{question.id}:</span> {question.text}
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'hypotheses',
      title: 'Hypotheses',
      content: (
        <ul className="space-y-2 text-sm text-slate-600">
          {narrative.hypotheses.map((hypothesis) => (
            <li key={hypothesis.id}>
              <span className="font-semibold text-slate-700">{hypothesis.id}:</span> {hypothesis.text}
            </li>
          ))}
        </ul>
      )
    }
  ];
  const [motherBrandView, setMotherBrandView] = useState('gender');
  const [heinekenView, setHeinekenView] = useState('gender');
  const pickRateTabs = [
    { id: 'gender', label: 'Gender' },
    { id: 'age', label: 'Age group' },
    { id: 'income', label: 'Income level' },
    { id: 'activity', label: 'Activity level' }
  ];

  return (
    <>
      <Section id="overview" title={reportMeta.title} subtitle={`${reportMeta.subtitle} • ${reportMeta.date}`}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm text-slate-600 text-justify">{narrative.abstract}</p>

          </div>
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Sample Size" value="n = 412" note="" />
            <StatCard label="Completion time" value="6-8 min" note="Median estimate" />
            <StatCard label="Geography" value="US only" note="" />
            <StatCard label="Participants Recruited Via" value="Prolific" note="November 2025" />
          </div>
        </div>
      </Section>

      <Section id="study-design" title="Study Design" subtitle="Context, research questions, and hypotheses">
        <div className="space-y-6">
          <Accordion items={researchCards} />
          <Card className="w-full">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Five-step timeline</p>
            <div className="mt-4">
              <MethodTimeline stages={studyDesign.stages} />
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-500">Note: Please refer to the methodology page for more details on the online experiment platform.</p>
            </div>
          </Card>
        </div>
      </Section>

        <Section id="experiment-flow" title="Participant Journey">
            <p className="text-sm text-slate-600 text-justify leading-relaxed">
              Participants were recruited through Prolific, a widely used online research platform known for its high data quality and extensive use in peer-reviewed academic studies involving controlled experiments. The study followed a standardized sequence from informed consent through task completion and post-task survey, ensuring consistent exposure to experimental conditions and enhancing the internal validity and comparability of results.
            </p>
            <ExperimentFlowTimeline
                title={studyDesign.experimentFlow[0]?.title ?? 'Participant Journey'}
                bullets={studyDesign.experimentFlow[0]?.bullets ?? []}
            />
        </Section>



        <Section id="demographics" title="Demographics" subtitle="Participant distribution across key characteristics">
        <DemographicsSection />
    </Section>


      <Section
          id="results"
          title="Results"
          subtitle="Explore Preference Shares Across One-on-One and Multi-Brand Tasks"
      >
          <div className="space-y-4">
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                  The charts below report brand selection shares across experimental scenarios.
                  Reported p-values indicate whether observed differences in choice shares are
                  statistically significant under the specified test conditions.
              </p>
              <div className="flex justify-center">
                  <table className="w-auto text-sm border border-slate-200 rounded-xl overflow-hidden">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                          <th className="px-4 py-2 text-left whitespace-nowrap">p value</th>
                          <th className="px-4 py-2 text-left whitespace-nowrap">Significance</th>
                          <th className="px-4 py-2 text-center">Code</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="border-t border-slate-200">
                          <td className="px-4 py-2 text-slate-700 whitespace-nowrap">&lt; 0.001</td>
                          <td className="px-4 py-2 text-slate-600">Significant</td>
                          <td className="px-4 py-2 text-center"><span className="h-3 w-3 rounded-sm bg-blue-200 ring-1 ring-blue-400 inline-block" /></td>
                      </tr>
                      <tr className="border-t border-slate-200">
                          <td className="px-4 py-2 text-slate-700 whitespace-nowrap">&lt; 0.01</td>
                          <td className="px-4 py-2 text-slate-600">Significant</td>
                          <td className="px-4 py-2 text-center"><span className="h-3 w-3 rounded-sm bg-blue-50 ring-1 ring-blue-200 inline-block" /></td>
                      </tr>
                      <tr className="border-t border-slate-200">
                          <td className="px-4 py-2 text-slate-700 whitespace-nowrap">&lt; 0.1</td>
                          <td className="px-4 py-2 text-slate-600">Moderate Significance</td>
                          <td className="px-4 py-2 text-center"><span className="h-3 w-3 rounded-sm bg-amber-50 ring-1 ring-amber-200 inline-block" /></td>
                      </tr>
                      <tr className="border-t border-slate-200">
                          <td className="px-4 py-2 text-slate-700 whitespace-nowrap">&gt; 0.1</td>
                          <td className="px-4 py-2 text-slate-600">Not Significant</td>
                          <td className="px-4 py-2 text-center"><span className="h-3 w-3 rounded-sm bg-slate-50 ring-1 ring-slate-200 inline-block" /></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          <ResultsExplorer />
      </Section>

        <Section
            id="pick-rate-comparison"
            title="Brand Selection Share Comparison"
            subtitle="Threshold-Based Brand Selection Shares: Mother Brand and Heineken 0.0"
        >
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mother Brand</p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">Selection Share by Segment</h3>
                    </div>

                    <Tabs options={pickRateTabs} value={motherBrandView} onChange={setMotherBrandView} />

                    {motherBrandView === 'gender' && (
                        <ChartCard title="Selection Share by Gender">
                            <GroupedBarChart
                                data={motherBrandPickRate.gender}
                                series={motherBrandPickRate.thresholds}
                                ariaLabel="Mother Brand selection share by gender"
                                yAxisLabel="Selection Share (%)"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                // If your GroupedBarChart supports it, this prevents Y-axis label/ticks from being clipped:
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {motherBrandView === 'age' && (
                        <ChartCard title="Selection Share by Age Group">
                            <ThresholdLineChart
                                data={motherBrandPickRate.ageGroups}
                                series={motherBrandPickRate.thresholds}
                                xAxisLabel="Age Group"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Mother Brand selection share by age group"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {motherBrandView === 'income' && (
                        <ChartCard title="Selection Share by Income Bracket">
                            <ThresholdLineChart
                                data={motherBrandPickRate.incomeGroups}
                                series={motherBrandPickRate.thresholds}
                                xAxisLabel="Income Bracket (USD)"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Mother Brand selection share by income bracket"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {motherBrandView === 'activity' && (
                        <ChartCard title="Selection Share by Activity Level">
                            <ThresholdLineChart
                                data={motherBrandPickRate.activityLevels}
                                series={motherBrandPickRate.thresholds}
                                xAxisLabel="Activity Level"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Mother Brand selection share by activity level"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Heineken 0.0</p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">Selection Share by Segment</h3>
                    </div>

                    <Tabs options={pickRateTabs} value={heinekenView} onChange={setHeinekenView} />

                    {heinekenView === 'gender' && (
                        <ChartCard title="Selection Share by Gender">
                            <GroupedBarChart
                                data={heinekenPickRate.gender}
                                series={heinekenPickRate.thresholds}
                                ariaLabel="Heineken 0.0 selection share by gender"
                                yAxisLabel="Selection Share (%)"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {heinekenView === 'age' && (
                        <ChartCard title="Selection Share by Age Group">
                            <ThresholdLineChart
                                data={heinekenPickRate.ageGroups}
                                series={heinekenPickRate.thresholds}
                                xAxisLabel="Age Group"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Heineken 0.0 selection share by age group"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {heinekenView === 'income' && (
                        <ChartCard title="Selection Share by Income Bracket">
                            <ThresholdLineChart
                                data={heinekenPickRate.incomeGroups}
                                series={heinekenPickRate.thresholds}
                                xAxisLabel="Income Bracket (USD)"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Heineken 0.0 selection share by income bracket"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}

                    {heinekenView === 'activity' && (
                        <ChartCard title="Selection Share by Activity Level">
                            <ThresholdLineChart
                                data={heinekenPickRate.activityLevels}
                                series={heinekenPickRate.thresholds}
                                xAxisLabel="Activity Level"
                                yAxisLabel="Selection Share (%)"
                                ariaLabel="Heineken 0.0 selection share by activity level"
                                yAxisTickFormatter={(value: number) => `${value}%`}
                                yDomain={[0, 100]}
                                yAxisWidth={44}
                                margin={{ left: 56, right: 16, top: 8, bottom: 24 }}
                            />
                        </ChartCard>
                    )}
                </div>
            </div>
        </Section>


        <Section
        id="standard-logistic-regression"
        title="Standard Logistic Regression Analysis"
        subtitle="Predicted margins and coefficients from the standard model"
      >
        <StandardLogisticRegressionSection />
      </Section>

      <Section
        id="sentiment"
        title="Sentiment Analysis (Text Responses and Reasoning)"
        subtitle="Method, metrics, and brand sentiment insights"
        className="overflow-hidden"
      >
        <SentimentSection />
      </Section>

      <DiscrepanciesSection />
      <ConclusionSection />
      <AppendixSection />
      <GlossarySection />
    </>
  );
};

export default ReportPage;
