export function getUtilizationColor(value: number): string {
  if (value <= 10) return 'text-green-600';
  if (value <= 30) return 'text-yellow-600';
  return 'text-red-600';
}

export function calculateUtilization(cards: Array<{ limit: string; balance: string }>): number | null {
  const totalLimit = cards.reduce((sum, card) => sum + (Number(card.limit) || 0), 0);
  const totalBalance = cards.reduce((sum, card) => sum + (Number(card.balance) || 0), 0);
  
  if (totalLimit === 0) return null;
  
  return Number((totalBalance / totalLimit * 100).toFixed(2));
}