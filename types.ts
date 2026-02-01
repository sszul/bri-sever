
export interface Convention {
  id: string;
  name: string;
  category: 'Açış' | 'Cevap' | 'Defans' | 'Slam';
  shortDescription: string;
  fullDescription: string;
  exampleSequence: string[];
  pointsNeeded?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum CardSuit {
  SPADES = '♠',
  HEARTS = '♥',
  DIAMONDS = '♦',
  CLUBS = '♣'
}
