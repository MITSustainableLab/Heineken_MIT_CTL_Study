import Section from '../components/ui/Section';
import ImageLightbox from '../components/ui/ImageLightbox';
import Card from '../components/ui/Card';
import BulletList from '../components/content/BulletList';

export const phase2MethodologySections = [
  { id: 'ph2m-recruitment', label: 'Recruitment & Screening' },
  { id: 'ph2m-measures',    label: 'Measures & Variables' },
  { id: 'ph2m-flow',        label: 'Experiment Flow' },
];

const Phase2MethodologyPage = () => (
  <>
    {/* ── RECRUITMENT & SCREENING ───────────────────────────────── */}
    <Section
      id="ph2m-recruitment"
      title="Participant Recruitment and Screening"
      subtitle="Prolific-based recruitment, eligibility criteria, and sample composition — April 2026"
    >
      <div className="space-y-6">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recruitment Platform</p>
          <div className="mt-4 space-y-4 text-sm text-slate-600 [&>p]:text-justify [&>p]:leading-relaxed">
            <p>
              Participants were recruited through Prolific, a validated online research platform that provides
              demographically diverse, verified participant pools. Recruitment was conducted in April 2026. Prolific
              IDs were automatically captured via URL parameters at platform entry, with full session timing recorded
              from first landing page load through final redirect.
            </p>
            <p>
              Two mandatory screening questions were administered at the start of each session with immediate
              auto-termination upon failure: (1) US residency, and (2) age 21 or older. All 614 participants
              analyzed in this report passed both screens.
            </p>
            <p>
              Prolific pre-screening was also used to target a roughly equal gender split (~1:1 male-to-female
              ratio) and a broad age range spanning 21 to 65+. Four US Census regions (North, South, East, West)
              were given equal preference (25% each). In terms of alcohol preference filters, roughly 40% were
              targeted as beer drinkers, 30% as non-alcoholic beverage consumers, and the remaining 30% were split
              among other alcoholic beverages (Rum, Gin, Vodka, Wine, and Ale drinkers). Participants were paid
              $2.00 for successful completion of their respective study variant.
            </p>
          </div>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
            Sample Sizes and Completion Metrics by Variant
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3 text-right">Variant A</th>
                  <th className="px-4 py-3 text-right">Variant B</th>
                  <th className="px-4 py-3 text-right">Variant C</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Total participants',           a: '203',  b: '210',  c: '201'  },
                  { metric: 'Median completion time',       a: '3.5 min (209s)', b: '3.2 min (192s)', c: '3.7 min (224s)' },
                  { metric: 'Mean completion time',         a: '3.9 min (232s)', b: '3.7 min (222s)', c: '4.3 min (255s)' },
                  { metric: 'Post-study survey completion', a: '100%', b: '100%', c: '100%' },
                ].map(row => (
                  <tr key={row.metric} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.metric}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{row.a}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{row.b}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            All 614 eligible participants passed US residency and age-21+ screening. No significant
            between-variant demographic differences (all chi-square p &gt; 0.08).
          </p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Screening criteria</p>
          <BulletList
            items={[
              'US residency (mandatory — auto-terminated upon failure)',
              'Age 21 or older (mandatory — auto-terminated upon failure)',
              'Target ~1:1 male-to-female gender split via Prolific pre-screening',
              'Broad age range: 21 to 65+ (not restricted beyond legal drinking age)',
              'Four US Census regions represented at ~25% each (North, South, East, West)',
              'Alcohol preference split: ~40% beer drinkers, ~30% non-alcoholic consumers, ~30% other',
              'Compensation: $2.00 per completed session',
            ]}
          />
        </Card>
      </div>
    </Section>

    {/* ── MEASURES & VARIABLES ──────────────────────────────────── */}
    <Section
      id="ph2m-measures"
      title="Measures and Variables"
      subtitle="Behavioral, attitudinal, and open-ended measures collected across all three variants"
    >
      <div className="space-y-6">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Behavioral Measures</p>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Primary behavioral measure</p>
              <p className="mt-2 text-justify leading-relaxed">
                Product selected (Variants A and B) or first-choice product (Variant C). Coded as brand name
                and classified as mother brand (Heineken, Corona, Budweiser) vs non-mother brand (O'Doul's,
                Clausthaler, Rescue Club IPA).
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Switching behavior — Variant C only</p>
              <p className="mt-2 text-justify leading-relaxed">
                Replacement product selected after the first-choice product was shown as out-of-stock,
                enabling computation of a 6×6 inter-brand switching matrix and net gain/loss figures
                per brand.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Attitudinal and Perceptual Measures</p>
          <div className="mt-4 space-y-4">
            {[
              {
                title: 'Brand familiarity',
                body: 'Five-level self-report scale ranging from "Never heard of it" (1) through "Drink regularly" (5). Administered for all six brands regardless of which was purchased, enabling comparison of familiarity effects across brand types.'
              },
              {
                title: 'Decision factor ranking',
                body: 'Drag-to-rank exercise placing five factors — Taste/Flavour, Brand Trust, Appearance, Price, Health — into ranked positions (1 = most influential). Options were presented in randomized order to prevent order bias.'
              },
              {
                title: 'Purchase / repurchase intent',
                body: 'Variants A/B measured five-point repurchase intent for the chosen product ("how likely would you be to repeatedly choose this brand?"). Variant C measured real-life purchase likelihood for the replacement product. Responses coded on a 1–5 scale; top-2 box = "Likely" or "Very Likely."'
              },
            ].map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.title}</p>
                <p className="mt-2 text-justify leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Qualitative Measure</p>
          <div className="mt-4 text-sm text-slate-600">
            <p className="mb-3 text-justify leading-relaxed">
              Open-ended choice reasoning: free-text responses collected after each product selection. Responses
              were coded thematically using keyword classification across six categories:
            </p>
            <BulletList
              items={[
                'Brand familiarity / trust',
                'Prior experience with the parent alcoholic brand',
                'Taste / flavour expectations',
                'Appearance / packaging',
                'Novelty / exploration',
                'Style / category preference (e.g., IPA vs lager)',
              ]}
            />
          </div>
        </Card>
      </div>
    </Section>

    {/* ── EXPERIMENT FLOW ───────────────────────────────────────── */}
    <Section
      id="ph2m-flow"
      title="Experiment Flow"
      subtitle="Step-by-step walkthrough of the custom web application used to conduct the study"
    >
      <div className="space-y-10">

        {/* Step 1 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 1 — Landing Page</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            A simple welcome screen explains the three-part process: answer questions → browse and shop
            → complete your purchase. A warning tells participants not to refresh or press back, as
            this will end their session.
          </p>
          <ImageLightbox
            src="/images/ph2_step1_landing.png"
            alt="Step 1 — Landing page"
            className="max-h-[600px] w-full object-contain"
            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
          />
        </div>

        {/* Step 2 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 2 — Pre-Study Questionnaire (Screening + Demographics)</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            All questions are required. Two screening questions immediately terminate the session if
            failed: (1) US residency and (2) age 21 or older. If either answer is "No," a termination
            screen appears with a 5-second auto-redirect back to Prolific.
          </p>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Beverage consumption questions</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-xs uppercase text-slate-500">
                  <tr>
                    <th className="py-1.5 text-left w-8">#</th>
                    <th className="py-1.5 text-left">Question</th>
                    <th className="py-1.5 text-left">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { q: 3, text: 'How often do you usually drink alcohol?', opts: 'Never / Less than once a month / 1–3 times per month / Once a week / 2–3 times per week or more' },
                    { q: '4 (conditional)', text: 'How often do you usually drink beer?', opts: 'Never / Less than once a month / 1–3 times per month / Once a week / 2–3 times per week or more' },
                    { q: 5, text: 'How often do you consume non-alcoholic (0.0%) beer?', opts: 'Never / Tried once / Occasionally (a few times a year) / Regularly (once a month or more)' },
                  ].map(row => (
                    <tr key={String(row.q)} className="border-t border-slate-100">
                      <td className="py-2 text-slate-500 align-top">{row.q}</td>
                      <td className="py-2 font-medium text-slate-800 align-top pr-4">{row.text}</td>
                      <td className="py-2 text-slate-600 text-xs">{row.opts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Conditional logic: Q4 (beer frequency) is only shown if Q3 (alcohol frequency) ≠ "Never."
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Demographics questions</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-xs uppercase text-slate-500">
                  <tr>
                    <th className="py-1.5 text-left w-8">#</th>
                    <th className="py-1.5 text-left">Question</th>
                    <th className="py-1.5 text-left">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { q: 6,  text: 'Age group',                    opts: '21–24 / 25–34 / 35–44 / 45–54 / 55–65 / 65+' },
                    { q: 7,  text: 'Gender',                       opts: 'Male / Female / Non-binary / Transgender / Prefer not to say' },
                    { q: 8,  text: 'Ethnicity',                    opts: 'White / Black or African American / Hispanic or Latino / Asian / American Indian or Alaska Native / Native Hawaiian or Other Pacific Islander / Two or more races / Other / Prefer not to say' },
                    { q: 9,  text: 'Highest completed education',  opts: 'High school or below / Associate\'s degree / Bachelor\'s degree / Graduate degree and above' },
                    { q: 10, text: 'Personal income (annual)',      opts: 'Under $25k / $25–49,999 / $50,000–74,999 / $75,000–99,999 / $100,000–149,999 / $150k+' },
                    { q: 11, text: 'Typical weekly physical activity', opts: 'Minimally Active / Lightly Active (~1–2 days/week) / Moderately Active (~3 days/week) / Active (~4–5 days/week) / Very Active (~6–7 days/week)' },
                  ].map(row => (
                    <tr key={row.q} className="border-t border-slate-100">
                      <td className="py-2 text-slate-500 align-top">{row.q}</td>
                      <td className="py-2 font-medium text-slate-800 align-top pr-4">{row.text}</td>
                      <td className="py-2 text-slate-600 text-xs">{row.opts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Step 3 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 3 — Welcome Modal and Shopping Task</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            A welcome modal appears first, explaining the rules: choose one product to purchase within
            a $15 budget. By completing the purchase the participant enters a lottery — winners receive
            their selected product plus any unspent budget as cash or gift card.
          </p>
          <ImageLightbox
            src="/images/ph2_step3_shopping.png"
            alt="Step 3 — Shopping task"
            className="max-h-[700px] w-full object-contain"
            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
          />
        </div>

        {/* Step 4 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 4 — Checkout Page</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            Checkout records the participant's NA beer selection to the database, then redirects to the
            post-study questionnaire.
          </p>
          <ImageLightbox
            src="/images/ph2_step4_checkout.png"
            alt="Step 4 — Checkout page"
            className="max-h-[500px] w-full object-contain"
            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
          />
        </div>

        {/* Step 5 */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-800">Step 5 — Post-Study Questionnaire</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            Shown immediately after checkout. The participant's purchased product name and image are
            displayed at the top of Q1 for context.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Q1 — Open-Ended Choice Reason</p>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                "Why did you choose this particular product?" Free-text response. In Variant C, two
                open-ended questions are asked: why was the first choice selected, and why was the
                replacement chosen.
              </p>
              <ImageLightbox
                src="/images/ph2_step5_q1_reason.png"
                alt="Q1 — Open-ended choice reason"
                className="max-h-[500px] w-full object-contain"
                containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Q2 — Factor Ranking (Drag-to-Rank)</p>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                Participants drag five factors — Health, Taste/Flavour, Brand Trust, Appearance, Price —
                into five ranked slots (1 = most influential). Factors are presented in a randomized order
                (Fisher-Yates shuffle) to prevent presentation bias.
              </p>
              <ImageLightbox
                src="/images/ph2_step5_q2_ranking.png"
                alt="Q2 — Factor ranking"
                className="max-h-[500px] w-full object-contain"
                containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Q3 — Brand Familiarity (Radio Grid)</p>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                "How familiar are you with each of these brands?" All 6 brands must be rated on a
                5-level scale from "Never heard of it" (1) to "Drink regularly" (5).
              </p>
              <ImageLightbox
                src="/images/ph2_step5_q3_familiarity.png"
                alt="Q3 — Brand familiarity"
                className="max-h-[500px] w-full object-contain"
                containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Q4 — Repurchase Intent</p>
              <p className="text-sm text-slate-600 text-justify leading-relaxed">
                Variants A/B: "If you were making similar purchases in the future, how likely is it
                that you would repeatedly choose this brand?" Variant C: "Would you purchase [replacement
                product] in real life?" Both use a 5-point scale; top-2 box = Likely or Very Likely.
              </p>
              <ImageLightbox
                src="/images/ph2_step5_q4_repurchase.png"
                alt="Q4 — Repurchase intent"
                className="max-h-[500px] w-full object-contain"
                containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 6 — Prize Choice</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            Participants choose between two lottery prize options: (1) receive the products they
            selected delivered, plus any unspent budget as cash/gift card, or (2) skip delivery and
            receive the full $15 budget as cash or gift card.
          </p>
          <ImageLightbox
            src="/images/ph2_step6_prize.png"
            alt="Step 6 — Prize choice"
            className="max-h-[500px] w-full object-contain"
            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
          />
        </div>

        {/* Step 7 */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">Step 7 — Prolific Completion Redirect</h3>
          <p className="text-sm text-slate-600 text-justify leading-relaxed">
            After the prize choice, participants are redirected back to Prolific with a successful
            completion code, confirming payment eligibility.
          </p>
          <ImageLightbox
            src="/images/ph2_step7_redirect.png"
            alt="Step 7 — Prolific redirect"
            className="max-h-[500px] w-full object-contain"
            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
          />
        </div>

      </div>
    </Section>
  </>
);

export default Phase2MethodologyPage;
