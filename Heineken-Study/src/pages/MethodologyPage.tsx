import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import BulletList from "../components/content/BulletList";
import ImageLightbox from '../components/ui/ImageLightbox';

export const methodologySections = [
    { id: 'methodology-experiment-design', label: 'Experiment Design' },
    { id: 'methodology-online-experiment', label: 'Online Experiment' }
];

const MethodologyPage = () => (
    <>
        <Section
            id="methodology-experiment-design"
            title="Experiment Design"
            subtitle="Design rationale, stimuli structure, and hypothesis framing"
        >
            <div className="space-y-6">
                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Design Narrative</p>

                    <div className="mt-4 space-y-6 text-sm text-slate-600 [&>p]:text-justify [&>p]:leading-relaxed">
                        <p>
                            The study uses a within-subject experimental design in which each participant completes a simulated e-commerce
                            shopping task featuring Heineken 0.0, a fictional non-branded 0.0 beer, and selected real-world 0.0 beer options.
                            Presenting branded and non-branded alternatives within the same decision environment enables within-person
                            comparison of choice behavior and perceived value, supporting identification of brand effects under controlled
                            conditions.
                        </p>

                        <p>
                            The inclusion of a fictional, non-branded 0.0 beer provides a zero-familiarity baseline and reduces confounding
                            from pre-existing brand perceptions. This approach enables tighter control over product attributes and isolates
                            the incremental impact of mother-brand equity on purchase decisions in the non-alcoholic category. The design
                            incorporates multiple brand and price scenarios to evaluate how brand equity interacts with economic tradeoffs in
                            a realistic shopping context.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Brand scenarios</p>
                            <div className="mt-3">
                                <BulletList
                                    items={[
                                        "Heineken versus a fictional non-mother brand",
                                        "Heineken versus a leading non-mother brand",
                                        "Heineken versus a lesser-known non-mother brand",
                                        "Budweiser (mother brand) versus a fictional non-mother brand",
                                        "Budweiser (mother brand) versus a leading non-mother brand",
                                        "Budweiser (mother brand) versus a lesser-known non-mother brand",
                                        "Heineken vs. fictional non-mother brand (single cans, both priced at $4.99)",
                                        "Heineken vs. fictional non-mother brand (single cans: $4.99 vs. $3.99)",
                                        "Heineken vs. fictional non-mother brand (single cans: $3.99 vs. $4.99)",
                                        "Heineken vs. fictional non-mother brand (12-packs, both priced at $17.99)",
                                        "Heineken vs. fictional non-mother brand (12-packs: $17.99 vs. $19.99)",
                                        "Heineken vs. fictional non-mother brand (12-packs: $17.99 vs. $14.99)",
                                        "Mother brands versus non-mother brands",
                                        "Heineken vs. non-mother brands",
                                        "Budweiser vs. non-mother brands",
                                        "Beck's Blue vs. non-mother brands"
                                    ]}
                                />
                            </div>
                        </div>

                        <p>
                            Participants were exposed to repeated brand-choice comparisons that juxtaposed mother brands (e.g., Heineken,
                            Budweiser, Beck’s Blue) with fictional, leading, and lesser-known non-mother brand alternatives. A subset of
                            Heineken comparisons included systematic price manipulations (equal, higher, or lower price relative to a fictional
                            alternative) to test whether brand equity persists under unfavorable price conditions. For 12-pack scenarios,
                            Heineken’s price was held constant across comparisons to improve interpretability of relative substitution patterns.
                        </p>

                        <p>
                            Following each selection, the shopping cart was automatically cleared to ensure that participants faced a
                            fresh comparison in every scenario, thereby eliminating potential carryover effects across decisions.
                            Comparison order and product placement were randomized to mitigate order effects and position-related bias.
                            Randomization reduces the likelihood that fatigue, learning, anchoring, or spatial preferences systematically
                            influence results, strengthening internal validity and improving attribution of observed behavioral differences to
                            the manipulated factors.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Participant flow</p>
                            <div className="mt-3">
                                <BulletList
                                    items={[
                                        "Demographics, lifestyle, and alcohol consumption module.",
                                        "Structured brand choice tasks across multiple 0.0 beer sets.",
                                        "Open-ended responses to capture decision rationale and attribute salience.",
                                        "Purchase likelihood, brand familiarity, and purchase consideration measures."
                                    ]}
                                />
                            </div>
                        </div>

                        <p>
                            The primary task was implemented as a simulated online storefront. Participants could browse products, inspect items,
                            and add selections to a shopping cart, enabling observation of revealed preference behavior rather than relying only
                            on self-reported attitudes.
                        </p>
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="space-y-4 text-sm text-slate-600">
                        <ImageLightbox
                            src="/images/experiment_design.png"
                            alt="Diagram of experiment layout"
                            caption="Diagram of experiment layout"
                            className="max-h-[420px] w-full object-contain"
                            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
                        />

                        <div className="space-y-6 text-sm text-slate-600 [&>p]:text-justify [&>p]:leading-relaxed">
                            <p>
                                This structure supports measurement of observed choice patterns under controlled exposure conditions, providing
                                a closer approximation to retail decision-making than survey-only designs.
                            </p>

                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Post-task measurement
                                </p>
                                <div className="mt-3">
                                    <p>
                                        After completing the shopping task, participants completed a post-task survey to quantify brand perceptions
                                        and identify the factors most associated with observed choices.
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <BulletList
                                        items={[
                                            "Perceived quality and overall brand impressions.",
                                            "Purchase likelihood for brands encountered during the task.",
                                            "Familiarity with mother brands and non-alcoholic alternatives.",
                                            "Open-ended interpretation to contextualize behavioral outcomes."
                                        ]}
                                    />
                                </div>
                            </div>

                            <p>
                                Approximately 400+ participants were recruited via Prolific, with eligibility restricted to U.S.-based
                                respondents. The sample includes variation in age, gender, and drinking patterns, supporting subgroup and
                                segmentation analyses relevant to both commercial strategy and public policy considerations.
                            </p>
                        </div>

                        <div className="mt-6 space-y-6 text-sm text-slate-600">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Choice of brands
                                </p>
                                <div className="mt-3">
                                    <BulletList
                                        items={[
                                            "Brand set developed in collaboration with Heineken to test mother-brand equity in the 0.0 category.",
                                            "Brands selected based on market relevance and alignment to predefined comparison scenarios.",
                                            "Mother brands included: Heineken, Budweiser, and Beck’s Blue.",
                                            "Non-mother competitors included: O’Doul’s, Rescue Club, Clausthaler, and Kaliber.",
                                            "Two fictional brands provided a zero-familiarity baseline to isolate brand equity effects.",
                                            "Athletic Brewing was excluded to reduce category heterogeneity and improve comparability across marketing and product positioning."
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <ImageLightbox
                                    src="/images/mother_brand_sales_volume.png"
                                    alt="Mother brand sales volume"
                                    caption="Mother brand sales volume"
                                    className="max-h-[320px] w-full object-contain"
                                    containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
                                />
                                <ImageLightbox
                                    src="/images/non_mother_brands_sales_volume.png"
                                    alt="Non-mother brand sales volume"
                                    caption="Non-mother brand sales volume"
                                    className="max-h-[320px] w-full object-contain"
                                    containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
                                />
                            </div>

                            <p>
                                The resulting brand set supports both competitive benchmarking for industry stakeholders and assessment of trust
                                transfer from established alcoholic brands into the non-alcoholic segment, with implications for market dynamics
                                and consumer protection considerations.
                            </p>

                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Fictional brands
                                </p>
                                <div className="mt-3">
                                    <BulletList
                                        items={[
                                            "Two fictional brands were created to support format comparisons: ClearHops 0.0 (can) and Star Brew Non-Alcoholic (bottle).",
                                            "Both were designed to appear market-credible while remaining unfamiliar to participants, eliminating prior associations.",
                                            "Fictional brands serve as neutral benchmarks for estimating mother-brand equity effects.",
                                            "Price manipulations enable estimation of willingness-to-pay and brand equity resilience under competitive pressure.",
                                            "Design supports analysis of substitution toward unfamiliar brands under economic incentives.",
                                            "Enables evaluation of whether perceived value of mother brands persists when relative prices shift."
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <ImageLightbox
                                    src="/images/ClearHops_0.0_can.jpg"
                                    alt="ClearHops 0.0"
                                    caption="ClearHops 0.0: fictional brand used as zero-familiarity baseline"
                                    className="max-h-[400px] max-w-full object-contain"
                                    containerClassName="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
                                />
                                <p className="text-center text-xs text-slate-500">ClearHops 0.0</p>
                            </div>

                            <div className="space-y-2">
                                <ImageLightbox
                                    src="/images/Starbrew.png"
                                    alt="Star Brew Non-Alcoholic"
                                    caption="Star Brew Non-Alcoholic: fictional brand used as zero-familiarity baseline"
                                    className="max-h-[400px] max-w-full object-contain"
                                    containerClassName="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white overflow-hidden"
                                />
                                <p className="text-center text-xs text-slate-500">Star Brew Non-Alcoholic</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>

        <Section
            id="methodology-online-experiment"
            title="Online Experiment"
        >
            <p className="text-sm text-slate-600 text-justify leading-relaxed">
                The online experiment was designed to quantify consumer preferences for non-alcoholic beer brands using demographic profiling, simulated shopping tasks (paired and multi-brand choice), and attitudinal measures. The questionnaire was deployed via Prolific for recruitment, eligibility screening, and participant tracking.
            </p>

            <div className="space-y-6">
                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Welcome Screen</p>

                    <div className="mt-4 space-y-4 text-sm text-slate-600">
                        <p className="text-justify leading-relaxed">
                            The welcome screen provides study context and a standardized overview of participant expectations prior to task initiation.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Includes</p>
                            <div className="mt-3">
                                <BulletList
                                    items={[
                                        <>A title: <span className="font-medium text-slate-800">“Welcome to the Consumer Preference Study”</span></>,
                                        "A brief description of study components (background questions, shopping task, and follow-up survey).",
                                        "A concise preview of the experiment flow."
                                    ]}
                                />
                            </div>
                        </div>

                        <ImageLightbox
                            src="/images/welcome_screen.png"
                            alt="Welcome screen"
                            caption="Welcome screen shown to participants before the study begins"
                            className="max-h-[480px] w-full object-contain"
                            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                    </div>
                </Card>

                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pre-Experiment Questionnaire</p>

                    <div className="mt-4 space-y-4 text-sm text-slate-600">
                        <p className="text-justify leading-relaxed">
                            Participants entered the study via a Prolific URL with embedded parameters. Prolific Participant ID, Study ID,
                            and Session ID were automatically captured to support traceability, reproducibility checks, and data integrity
                            validation.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Captured fields</p>
                            <div className="mt-3">
                                <BulletList
                                    items={[
                                        "Prolific Participant ID",
                                        "Study ID",
                                        "Session ID",
                                        "Location and age filters",
                                        "Alcohol consumption frequency"
                                    ]}
                                    className="text-slate-700"
                                />
                            </div>
                        </div>

                        <ImageLightbox
                            src="/images/questions.png"
                            alt="Pre-experiment questionnaire screening"
                            caption="Pre-experiment questionnaire and eligibility screening"
                            className="max-h-[480px] w-full object-contain"
                            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                    </div>
                </Card>

                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Demographics Module</p>

                    <div className="mt-4 space-y-4 text-sm text-slate-600">
                        <p className="text-justify leading-relaxed">
                            A standardized demographics module was used for segmentation and subgroup analysis relevant to market and policy
                            interpretation.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Measures</p>
                            <div className="mt-3">
                                <BulletList
                                    items={[
                                        "Age group",
                                        "Gender",
                                        "Ethnicity",
                                        "Highest completed education level",
                                        "Personal income (annual)",
                                        "Activity level (days per week)"
                                    ]}
                                />
                            </div>
                        </div>

                        <ImageLightbox
                            src="/images/demogrpahics_questions.png"
                            alt="Demographics questionnaire"
                            caption="Demographics module questions shown to participants"
                            className="max-h-[480px] w-full object-contain"
                            containerClassName="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                    </div>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">One-on-One Brand Comparison Task</p>

                    <p className="mt-4 text-sm text-slate-600 text-justify leading-relaxed">
                        Participants completed a paired-comparison shopping task in which two non-alcoholic beer products were displayed
                        side-by-side and respondents selected the item they would add to their cart. Each trial included standardized prompts,
                        product images, and brand identifiers.
                        <BulletList
                            className={'mt-4'}
                            items={[
                                'Preference prompt (e.g., "Which would you add to your cart?")',
                                'Two product images with brand names',
                                'Price tags (in price-enabled trials) to quantify price sensitivity',
                                'Shopping cart interaction (add/remove)',
                                'Continue control to advance to the next trial'
                            ]}
                        />
                    </p>

                    <p className="mt-4 text-sm text-slate-600 text-justify leading-relaxed">
                        The task includes 13 fixed comparison slots organized into:
                        <BulletList
                            className={'mt-4'}
                            items={[
                                'Regular comparisons: standard paired comparisons without price information',
                                'Price comparisons: paired comparisons with visible prices to estimate price sensitivity and willingness-to-pay'
                            ]}
                        />
                    </p>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <ImageLightbox
                            src="/images/bottle_v_bottle.png"
                            alt="One-on-one bottle comparison layout"
                            caption="One-on-one paired comparison: bottle format"
                            className="max-h-[500px] max-w-full object-contain"
                            containerClassName="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                        <ImageLightbox
                            src="/images/can_v_can_price.png"
                            alt="One-on-one can comparison with price"
                            caption="One-on-one paired comparison: can format with price tags"
                            className="max-h-[500px] max-w-full object-contain"
                            containerClassName="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                    </div>

                    <div className={'mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4'}>
                        <p className="text-xs uppercase tracking-wide text-slate-500">Expected insights</p>
                        <BulletList
                            className={'mt-4'}
                            items={[
                                'Relative brand preference: Head-to-head trials reveal preference ordering across competitors',
                                'Price sensitivity: Price-tagged trials estimate willingness-to-pay and price thresholds',
                                'Brand equity net of price: Contrast between priced and unpriced trials isolates brand-driven choice',
                                'Competitive benchmarking: Identifies brands that systematically win or lose specific matchups',
                                'Positioning inference: Aggregated win–loss patterns across all pairings provide an empirical basis for mapping relative competitive positioning within the category.'
                            ]}
                        />
                    </div>
                </Card>

                <Card>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Multibrand Comparisons</p>

                    <p className="mt-4 text-sm text-slate-600 text-justify leading-relaxed">
                        Participants also completed multi-option choice tasks in which six non-alcoholic beers were displayed simultaneously
                        and respondents selected a single preferred option. Up to four multi-brand sets were used, incorporating established
                        mother brands (including Heineken, Budweiser, and Beck’s Blue) alongside non-mother competitors. This format was
                        designed to approximate retail shelf and online assortment conditions, supporting inference on competitive dynamics
                        under choice complexity.
                    </p>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <ImageLightbox
                            src="/images/multirand_cans.png"
                            alt="Multi-brand can shelf layout"
                            caption="Multi-brand choice task: can format shelf display"
                            className="max-h-[480px] max-w-full object-contain"
                            containerClassName="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />
                        <ImageLightbox
                            src="/images/multibrand_bottles.png"
                            alt="Multi-brand bottle shelf layout"
                            caption="Multi-brand choice task: bottle format shelf display"
                            className="max-h-[480px] max-w-full object-contain"
                            containerClassName="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 overflow-hidden"
                        />

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 mt-4 col-span-2">
                            <p className="text-xs uppercase tracking-wide text-slate-500">Expected insights</p>
                            <BulletList
                                className={'mt-4'}
                                items={[
                                    'Assortment effects: Evaluates choice behavior under multiple simultaneous options',
                                    'Decision criteria: Open-ended rationales identify salient attributes (e.g., brand recognition, packaging, expected taste)',
                                    'Contextualization: Qualitative responses support interpretation of observed preferences',
                                    'Attribute salience: Thematic coding reveals which attributes dominate selection rationales',
                                    'Unaided articulation: Captures consumers’ own decision language without structured prompts, reducing attribute priming and revealing organically prioritized considerations.'
                                ]}
                            />
                        </div>
                    </div>
                </Card>
            </div>

            <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Post-Experiment Questionnaire (Final Questions)
                </p>

                <div className="mt-4 space-y-8 text-sm text-slate-600">
                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Decision factor (open-ended)</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “What was the biggest factor in your decision when choosing between the non-alcoholic beers?”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Unaided attribute salience: captures the factor most top-of-mind in decision-making.",
                                    "Decision hierarchy: distinguishes primary drivers from secondary considerations.",
                                    "Messaging relevance: consumer language can inform evidence-based communications."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Likelihood to switch / try</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “How likely are you to [switch to/try] non-alcoholic beer?”
                            </p>
                            <p className="text-slate-500">
                                Wording adapts based on prior responses (non-drinkers: “try”; current drinkers: “switch to”).
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList
                                items={[
                                    "1 = Very unlikely",
                                    "2 = Unlikely",
                                    "3 = Neutral",
                                    "4 = Likely",
                                    "5 = Very likely"
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Adoption potential: quantifies intent to enter or shift into the non-alcoholic category.",
                                    "Segment heterogeneity: supports comparison across consumer groups.",
                                    "Barrier signal: low intent motivates follow-on analysis of constraints and perceived tradeoffs."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Importance factors</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “How important would each of the following factors be in influencing your decision to [try/switch to]
                                non-alcoholic beer?”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Factors rated</p>
                            <BulletList
                                items={[
                                    "Health and wellness considerations",
                                    "Taste similarity to alcoholic beer",
                                    "Trusted brand",
                                    "Price",
                                    "Variety",
                                    "Availability"
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList items={["1 = Not at all important", "5 = Extremely important"]} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Driver prioritization: ranks perceived determinants of adoption.",
                                    "Segment differences: identifies heterogeneous preference structures across groups.",
                                    "Strategy alignment: informs communications and channel emphasis (e.g., price vs. trust vs. availability).",
                                    "R&D implications: indicates whether taste parity or other attributes should be prioritized."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Mother brand importance</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “When choosing a non-alcoholic beer, how important is it to you that it is produced by a well-known
                                established beer brand (the mother brand), rather than by a new or unfamiliar brand?”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList items={["1 = Not at all important", "5 = Extremely important"]} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Brand extension value: estimates reliance on established brands in the 0.0 category.",
                                    "Entry conditions: low importance suggests greater openness to new brands.",
                                    "Trust transfer: supports inference on whether alcoholic-brand reputation influences 0.0 choice."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Brand familiarity</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">“Before today, how familiar were you with each brand?”</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Brands rated</p>
                            <BulletList
                                items={[
                                    "Heineken 0.0",
                                    "Budweiser Zero",
                                    "O'Doul's Non-Alcoholic",
                                    "Clear Hops 0.0",
                                    "Rescue Club Non-Alcoholic",
                                    "Beck's Blue"
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList items={["1 = Not at all familiar", "5 = Extremely familiar"]} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Awareness benchmarking: quantifies baseline brand knowledge.",
                                    "Familiarity–choice linkage: supports tests of whether familiarity predicts selection.",
                                    "Market learning signal: indicates relative reach of incumbent versus newer entrants.",
                                    "Validity check: helps interpret fictional-brand comparisons as intended (low familiarity expected)."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Attention check 1</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “This question is intended for an attention check. Please select option 4.”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Format</p>
                            <p>1–5 scale (correct answer: 4)</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Data quality control: flags inattentive responding.",
                                    "Filtering basis: supports exclusion criteria for robustness checks."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Heineken ratings</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “Please rate Heineken on the following parameters on a scale from 1–5:”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Parameters</p>
                            <BulletList
                                items={[
                                    "Trustworthiness (1 = Not trustworthy at all, 5 = Very trustworthy)",
                                    "Perceived quality (1 = Low quality, 5 = High quality)",
                                    "Expected taste (1 = Very poor, 5 = Excellent)"
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Brand equity profiling: quantifies trust, quality, and taste expectations.",
                                    "Transfer assessment: supports inference on whether premium associations carry to 0.0.",
                                    "Benchmarking anchor: provides reference metrics for interpretation of competing brands."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">General attitudes (beer drinkers only)</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Statement</p>
                            <p className="italic text-slate-700">“Non-alcoholic beers can taste as good as regular beers.”</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Conditional display</p>
                            <p>Only shown to participants who indicated they drink beer.</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList items={["1 = Strongly disagree", "5 = Strongly agree"]} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Category belief: measures acceptance of taste parity in 0.0 beer.",
                                    "Barrier signal: low agreement suggests taste skepticism as a constraint to adoption.",
                                    "Segment comparison: enables analysis among current beer consumers."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Attention check 2</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “This question is intended for an attention check. Please select option 2.”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Format</p>
                            <p>1–5 scale (correct answer: 2)</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Sustained engagement check: evaluates attention late in the survey.",
                                    "Robust filtering: two checks improve confidence in retained responses."
                                ]}
                            />
                        </div>
                    </div>

                    <div className="border-t border-slate-200" />

                    <div className="space-y-3">
                        <p className="font-semibold text-slate-800">Purchase likelihood</p>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question</p>
                            <p className="italic text-slate-700">
                                “How likely are you to buy each of the following non-alcoholic beers if they were available for purchase?”
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Brands rated</p>
                            <BulletList
                                items={[
                                    "Heineken 0.0",
                                    "Budweiser Zero",
                                    "O'Doul's Non-Alcoholic",
                                    "Clear Hops 0.0",
                                    "Rescue Club Non-Alcoholic",
                                    "Beck's Blue"
                                ]}
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scale (1–5)</p>
                            <BulletList items={["1 = Very unlikely", "5 = Very likely"]} />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Insights</p>
                            <BulletList
                                items={[
                                    "Conversion proxy: estimates purchase propensity by brand.",
                                    "Choice validation: tests alignment between revealed preference and stated intent.",
                                    "Relative demand signal: supports inference on competitive demand under availability.",
                                    "Strategic ranking: generates a policy- and industry-relevant preference ordering."
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
    </>
);

export default MethodologyPage;
