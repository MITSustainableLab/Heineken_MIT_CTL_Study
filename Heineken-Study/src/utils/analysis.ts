export type DrinkingHabit = 'non_drinker' | 'occasional' | 'regular';

export interface ExperimentResponse {
  id?: string;
  drinkingHabit?: DrinkingHabit;
  perception?: {
    trustworthiness?: number;
    quality?: number;
    taste?: number;
  };
  choice?: {
    heinekenSelected?: boolean;
  };
  intent?: {
    heinekenLikelihood?: number;
  };
}

export interface H2Metrics {
  available: boolean;
  sampleSize?: number;
  r_trust?: number;
  r_quality?: number;
  r_taste?: number;
  p_trust?: number | null;
  p_quality?: number | null;
  p_taste?: number | null;
  outcomeLabel?: string;
  modelSummary?: string;
}

export interface H3InteractionMetrics {
  available: boolean;
  sampleSize?: number;
  regularLift?: number;
  nonDrinkerLift?: number;
  interactionEffect?: number;
  p_value?: number | null;
  modelSummary?: string;
}

const pearsonCorrelation = (xValues: number[], yValues: number[]) => {
  const count = Math.min(xValues.length, yValues.length);
  if (count < 3) return null;
  const meanX = xValues.reduce((sum, value) => sum + value, 0) / count;
  const meanY = yValues.reduce((sum, value) => sum + value, 0) / count;
  let numerator = 0;
  let sumSquaresX = 0;
  let sumSquaresY = 0;
  for (let i = 0; i < count; i += 1) {
    const deltaX = xValues[i] - meanX;
    const deltaY = yValues[i] - meanY;
    numerator += deltaX * deltaY;
    sumSquaresX += deltaX * deltaX;
    sumSquaresY += deltaY * deltaY;
  }
  const denominator = Math.sqrt(sumSquaresX * sumSquaresY);
  if (denominator === 0) return null;
  return numerator / denominator;
};

const extractOutcome = (response: ExperimentResponse) => {
  if (typeof response.choice?.heinekenSelected === 'boolean') {
    return {
      value: response.choice.heinekenSelected ? 1 : 0,
      label: 'Heineken forced-choice selection'
    };
  }
  if (typeof response.intent?.heinekenLikelihood === 'number') {
    return {
      value: response.intent.heinekenLikelihood,
      label: 'Heineken purchase likelihood'
    };
  }
  return null;
};

export const computeH2Metrics = (data?: ExperimentResponse[] | null): H2Metrics => {
  if (!data || data.length === 0) {
    return { available: false };
  }

  const trust: number[] = [];
  const quality: number[] = [];
  const taste: number[] = [];
  const outcome: number[] = [];
  let outcomeLabel: string | undefined;

  data.forEach((response) => {
    const outcomeValue = extractOutcome(response);
    if (!outcomeValue) return;

    const { perception } = response;
    if (typeof perception?.trustworthiness === 'number') {
      trust.push(perception.trustworthiness);
    } else {
      trust.push(NaN);
    }
    if (typeof perception?.quality === 'number') {
      quality.push(perception.quality);
    } else {
      quality.push(NaN);
    }
    if (typeof perception?.taste === 'number') {
      taste.push(perception.taste);
    } else {
      taste.push(NaN);
    }
    outcome.push(outcomeValue.value);
    outcomeLabel = outcomeValue.label;
  });

  const filterPairs = (xValues: number[]) => {
    const filteredX: number[] = [];
    const filteredY: number[] = [];
    xValues.forEach((value, index) => {
      if (!Number.isNaN(value) && typeof outcome[index] === 'number') {
        filteredX.push(value);
        filteredY.push(outcome[index]);
      }
    });
    return { filteredX, filteredY };
  };

  const trustPairs = filterPairs(trust);
  const qualityPairs = filterPairs(quality);
  const tastePairs = filterPairs(taste);

  const r_trust = pearsonCorrelation(trustPairs.filteredX, trustPairs.filteredY);
  const r_quality = pearsonCorrelation(qualityPairs.filteredX, qualityPairs.filteredY);
  const r_taste = pearsonCorrelation(tastePairs.filteredX, tastePairs.filteredY);

  return {
    available: Boolean(r_trust ?? r_quality ?? r_taste),
    sampleSize: data.length,
    r_trust: r_trust ?? undefined,
    r_quality: r_quality ?? undefined,
    r_taste: r_taste ?? undefined,
    p_trust: null,
    p_quality: null,
    p_taste: null,
    outcomeLabel,
    modelSummary:
      'TODO: add p-values and regression output once the raw perception + choice dataset is wired.'
  };
};

export const segmentByDrinkingHabit = (data?: ExperimentResponse[] | null) => {
  const segments = {
    non_drinkers: [] as ExperimentResponse[],
    occasional: [] as ExperimentResponse[],
    regular: [] as ExperimentResponse[]
  };

  if (!data) return segments;

  data.forEach((response) => {
    if (response.drinkingHabit === 'regular') {
      segments.regular.push(response);
    } else if (response.drinkingHabit === 'occasional') {
      segments.occasional.push(response);
    } else if (response.drinkingHabit === 'non_drinker') {
      segments.non_drinkers.push(response);
    }
  });

  return segments;
};

export const computeH3Interaction = (data?: ExperimentResponse[] | null): H3InteractionMetrics => {
  if (!data || data.length === 0) {
    return { available: false };
  }

  // TODO: Replace this placeholder with a proper interaction model once task-level choice data is wired.
  return {
    available: false,
    sampleSize: data.length,
    modelSummary:
      'TODO: estimate interaction between mother-brand effect and drinking habit (regular vs. non-drinker).'
  };
};
