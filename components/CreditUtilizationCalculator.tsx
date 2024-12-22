'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreditCardInput from './CreditCard/CreditCardInput';
import UtilizationDisplay from './CreditCard/UtilizationDisplay';
import { calculateUtilization } from '@/lib/utilization';

export default function CreditUtilizationCalculator() {
  const [cards, setCards] = useState([
    { id: 1, limit: '', balance: '' }
  ]);
  const [utilization, setUtilization] = useState<number | null>(null);

  const addCard = () => {
    setCards([...cards, { id: cards.length + 1, limit: '', balance: '' }]);
  };

  const updateCard = (id: number, field: 'limit' | 'balance', value: string) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, [field]: value } : card
    ));
  };

  const handleCalculate = () => {
    const result = calculateUtilization(cards);
    if (result !== null) {
      setUtilization(result);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {cards.map((card) => (
          <CreditCardInput
            key={card.id}
            id={card.id}
            limit={card.limit}
            balance={card.balance}
            onUpdate={updateCard}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <Button onClick={addCard} variant="outline" className="w-full">
          Add Another Card
        </Button>
        <Button onClick={handleCalculate} className="w-full bg-purple-600 hover:bg-purple-700">
          Calculate Utilization
        </Button>
      </div>

      {utilization !== null && <UtilizationDisplay utilization={utilization} />}
    </div>
  );
}