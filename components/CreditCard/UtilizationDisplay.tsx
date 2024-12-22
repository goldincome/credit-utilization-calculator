'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { UtilizationChart } from '@/components/Charts/UtilizationChart';
import { getUtilizationColor } from '@/lib/utilization';
import { CHART_DATA } from '@/lib/constants';

interface UtilizationDisplayProps {
  utilization: number;
}

export default function UtilizationDisplay({ utilization }: UtilizationDisplayProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Your Credit Utilization</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Utilization Rate:</span>
          <span className={`text-2xl font-bold ${getUtilizationColor(utilization)}`}>
            {utilization}%
          </span>
        </div>
        <Progress value={utilization} className="h-2" />
        <UtilizationChart data={CHART_DATA} />
      </div>
    </Card>
  );
}