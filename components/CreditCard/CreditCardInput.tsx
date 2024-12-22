'use client';

import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface CreditCardInputProps {
  id: number;
  limit: string;
  balance: string;
  onUpdate: (id: number, field: 'limit' | 'balance', value: string) => void;
}

export default function CreditCardInput({ id, limit, balance, onUpdate }: CreditCardInputProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Credit Limit
          </label>
          <Input
            type="number"
            value={limit}
            onChange={(e) => onUpdate(id, 'limit', e.target.value)}
            placeholder="Enter credit limit"
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Balance
          </label>
          <Input
            type="number"
            value={balance}
            onChange={(e) => onUpdate(id, 'balance', e.target.value)}
            placeholder="Enter current balance"
            className="w-full"
          />
        </div>
      </div>
    </Card>
  );
}