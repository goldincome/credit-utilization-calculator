'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  utilization: number;
  impact: string;
}

interface UtilizationChartProps {
  data: ChartData[];
}

const defaultProps = {
  margin: { top: 5, right: 20, bottom: 25, left: 40 },
  strokeWidth: 2,
  strokeColor: '#9333ea',
};

export function UtilizationChart({ 
  data, 
  margin = defaultProps.margin,
  strokeWidth = defaultProps.strokeWidth,
  strokeColor = defaultProps.strokeColor,
}: UtilizationChartProps & Partial<typeof defaultProps>) {
  return (
    <div className="h-[200px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="utilization"
            label={{ value: 'Utilization %', position: 'bottom', offset: 15 }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            label={{ value: 'Impact', angle: -90, position: 'left', offset: 25 }}
            dataKey="impact"
            type="category"
          />
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Utilization']}
            labelFormatter={(label) => `${label}% Utilization`}
          />
          <Line 
            type="monotone" 
            dataKey="utilization" 
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            dot={{ fill: strokeColor }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}