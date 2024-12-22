export const CHART_DATA = [
  { utilization: 0, impact: 'Excellent' },
  { utilization: 10, impact: 'Excellent' },
  { utilization: 20, impact: 'Very Good' },
  { utilization: 30, impact: 'Good' },
  { utilization: 50, impact: 'Fair' },
  { utilization: 75, impact: 'Poor' },
  { utilization: 100, impact: 'Very Poor' },
] as const;

export type ChartDataPoint = typeof CHART_DATA[number];
export type UtilizationImpact = ChartDataPoint['impact'];