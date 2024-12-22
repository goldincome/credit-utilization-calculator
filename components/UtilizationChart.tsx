'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UtilizationChartProps {
  data: Array<{
    utilization: number;
    impact: string;
  }>;
}

export default function UtilizationChart({ data }: UtilizationChartProps) {
  return (
    <div className="h-[200px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="utilization"
            label={{ value: 'Utilization %', position: 'bottom' }}
          />
          <YAxis 
            label={{ value: 'Impact', angle: -90, position: 'left' }}
          />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="utilization" 
            stroke="#9333ea" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}