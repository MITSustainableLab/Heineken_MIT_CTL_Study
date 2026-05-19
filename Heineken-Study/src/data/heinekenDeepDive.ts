export const heinekenDeepDive = {
  performance: {
    avgSentiment: 0.23,
    marketPosition:
      "Heineken’s sentiment score equals the competitors’ average (0.23). This suggests it is solid/reliable but not differentiating on excitement vs. the category baseline."
  },
  keywordThemes: {
    positiveDrivers: {
      title: 'Drivers of Positive Sentiment',
      bullets: [

      ],
      summary:
        'Positive sentiment is dominated by familiarity-related themes (e.g., “familiar,” “know”), suggesting that participants often select Heineken as a low-uncertainty option with predictable outcomes.\n\n ' +
          'Taste-related language (e.g., “taste,” “like”) is also prevalent and is commonly linked to expectations of resemblance to the alcoholic counterpart (“the real thing”), indicating functional validation rather than experiential novelty.\n\n' +
          'Additional positive expressions frequently include superlative framing (e.g., “most recognizable,” “most trusted”), reinforcing salience and perceived legitimacy. ' +
          'Collectively, these patterns indicate that Heineken is primarily chosen as a risk-minimizing default that assures a baseline taste standard, rather than as a vehicle for novelty or excitement.',
      chips: ['Familiar', 'Know', 'Taste', 'Like', 'Most']
    },
    barriers: {
      title: 'Barriers to Adoption (Drivers of Neutral and Negative Sentiment)',
      bullets: [

        ],
      summary: 'Neutral and negative sentiment is often explained by habitual choice processes and brand loyalty. Responses commonly reference routine behavior (e.g., “usually”) or comparative preference for alternatives, implying that the constraint is frequently competitive attachment rather than direct aversion to Heineken.\n\n' +
          'A second barrier is a polarizing flavor profile. Taste-related negativity is frequently attributable to explicit dislike of a specific signature flavor, suggesting heterogeneity in preference rather than perceptions of poor quality. This dynamic can simultaneously generate strong loyalty among aligned consumers while limiting uptake among those whose taste preferences diverge.\n',
      chips: ['Usually', 'Polarizing taste']
    }
  },
  quotes: [
    {
      id: 'safe-bet',
      title: 'Heineken: “Safe Bet” (Trust & Familiarity)',
      quotes: [
        "Because Heineken tastes the best!!! It's been around for ages and is the brand I trust.",
        "I chose it because it’s a brand I already know and trust. The taste is consistent, it’s easy to find, and it feels like a safe pick.",
        'Heineken is a brand that I know well and trust. Has great flavor.',
        "I chose Heineken because of the well known name brand. I know what I'm getting with Heineken."
      ]
    },
    {
      id: 'novelty',
      title: 'Competitors: “Novelty Factor” (Design & Curiosity)',
      quotes: [
        "The packaging and the fact that it's an IPA is perfect.",
        "Although I've never tried this beer, I LOVE the packaging! This drew me in!",
        'I like the design on the can. I think the layout of the words on the label looks best.',
        'I tried finding new brands and the one I chose had a very nice design on the can and color scheme.'
      ],
      sources: ['Rescue Club', 'Cobra Zero', "Penn's Best", 'General']
    },
    {
      id: 'barriers',
      title: 'Barriers to Heineken (Why some chose others)',
      quotes: [
        'I usually drink non-alcoholic beer with specific meals... I prefer a German-type taste along with it.',
        "I looked for a classic brand that could come off as making a grounded yet fun choice... O'Douls is a classic brand and checks all the boxes."
      ]
    }
  ]
};

export type HeinekenDeepDive = typeof heinekenDeepDive;
