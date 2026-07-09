export type CategoryId =
  | "slots"
  | "live-casino"
  | "sports"
  | "fishing"
  | "crash"
  | "arcade"
  | "poker";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  emoji: string;
  gradient: [string, string];
  accent: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  category: CategoryId;
  provider: string;
  tags: string[];
  emoji: string;
  gradient: [string, string];
  rtp: number; // %
  minBet: number;
  maxBet: number;
  rating: number; // 0-5
  players: number; // current players
  description: string;
  isHot?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  jackpot?: number;
}

export interface Promotion {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  badge: string;
  emoji: string;
  gradient: [string, string];
  reward: string;
  code?: string;
  terms: string[];
}

export interface SportEvent {
  id: string;
  league: string;
  sport: string;
  startTime: string; // ISO
  status: "upcoming" | "live";
  minute?: string;
  participants: { name: string; emoji: string }[];
  market: { label: string; odds: [number, number, number] };
}

export interface Provider {
  id: string;
  name: string;
  emoji: string;
  games: number;
}

export interface SafeUser {
  id: string;
  username: string;
  email: string;
  balance: number;
  vipLevel: number;
  vipPoints: number;
  createdAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: "deposit" | "withdraw" | "bet" | "win" | "bonus";
  amount: number;
  status: "pending" | "completed" | "failed";
  method: string;
  reference: string;
  createdAt: string;
}
