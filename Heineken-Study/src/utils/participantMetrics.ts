export const PARTICIPANT_SAMPLE_SIZE = 412;

export const toShareFromPercent = (percent: number, sampleSize = PARTICIPANT_SAMPLE_SIZE) =>
  Math.round((percent / 100) * sampleSize);

export const toPercentFromShare = (share: number, total: number) =>
  total === 0 ? 0 : (share / total) * 100;

export const formatPercent = (value: number, decimals = 1) => `${value.toFixed(decimals)}%`;
