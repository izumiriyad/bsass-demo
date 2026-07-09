export const SITE = {
  name: "BJ88",
  tagline: "Bangladesh's #1 Online Gaming Platform",
  description: "BJ88 Bangladesh — Premier online casino, sports betting, slots, fishing games and more. Play with BDT. 24/7 support.",
  url: "https://bj88.com.bd",
  locale: "en-BD",
  currency: "BDT",
  currencySymbol: "৳",
  country: "Bangladesh",
  supportEmail: "support@bj88.com.bd",
};

export interface GameCategory {
  id: string;
  label: string;
  icon: string;
  emoji: string;
  color: string;
  gradient: [string, string];
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: "popular", label: "POPULAR", icon: "⭐", emoji: "⭐", color: "#f0b429", gradient: ["#f0b429", "#d4950a"] },
  { id: "sports", label: "SPORTS", icon: "⚽", emoji: "⚽", color: "#22c55e", gradient: ["#22c55e", "#15803d"] },
  { id: "cricket", label: "CRICKET", icon: "🏏", emoji: "🏏", color: "#3b82f6", gradient: ["#3b82f6", "#1d4ed8"] },
  { id: "slots", label: "SLOTS", icon: "🎰", emoji: "🎰", color: "#a855f7", gradient: ["#a855f7", "#7c3aed"] },
  { id: "casino", label: "CASINO", icon: "🃏", emoji: "🃏", color: "#ef4444", gradient: ["#ef4444", "#b91c1c"] },
  { id: "table", label: "TABLE", icon: "🎲", emoji: "🎲", color: "#06b6d4", gradient: ["#06b6d4", "#0891b2"] },
  { id: "fishing", label: "FISHING", icon: "🎣", emoji: "🎣", color: "#14b8a6", gradient: ["#14b8a6", "#0d9488"] },
  { id: "lottery", label: "LOTTERY", icon: "🎟️", emoji: "🎟️", color: "#f97316", gradient: ["#f97316", "#ea580c"] },
  { id: "arcade", label: "ARCADE", icon: "🕹️", emoji: "🕹️", color: "#8b5cf6", gradient: ["#8b5cf6", "#6d28d9"] },
  { id: "crash", label: "CRASH", icon: "🚀", emoji: "🚀", color: "#ec4899", gradient: ["#ec4899", "#be185d"] },
];

export interface BJ88Game {
  id: string;
  title: string;
  provider: string;
  category: string;
  subcategory?: string;
  image?: string;
  gradient: [string, string];
  emoji: string;
  isHot?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  badge?: string;
  rtp?: number;
  players?: number;
}

export const POPULAR_GAMES: BJ88Game[] = [
  {
    id: "pragmatic-slots",
    title: "PRAGMATIC PLAY",
    provider: "Pragmatic Play",
    category: "popular",
    subcategory: "SLOTS",
    image: "",
    gradient: ["#1a0533", "#3b0764"],
    emoji: "🏛️",
    badge: "SLOTS",
    players: 5200,
  },
  {
    id: "sportsbook",
    title: "SPORTSBOOK",
    provider: "Sports",
    category: "popular",
    subcategory: "SPORTS",
    image: "",
    gradient: ["#0a1628", "#1e3a5f"],
    emoji: "⚽",
    badge: "SPORTS",
    players: 8100,
    isHot: true,
  },
  {
    id: "sexy-gaming",
    title: "SEXY",
    provider: "AE Sexy",
    category: "popular",
    subcategory: "CASINO",
    image: "",
    gradient: ["#3b0011", "#6b0020"],
    emoji: "💃",
    badge: "CASINO",
    players: 3400,
  },
  {
    id: "lets-go-jungle",
    title: "LET'S GO JUNGLE",
    provider: "Pragmatic Play",
    category: "popular",
    subcategory: "SLOTS",
    image: "",
    gradient: ["#064e3b", "#065f46"],
    emoji: "🦁",
    badge: "LET'S GO",
    players: 2800,
    isNew: true,
  },
  {
    id: "aztec-gems",
    title: "AZTEC GEMS",
    provider: "Pragmatic Play",
    category: "popular",
    subcategory: "SLOTS",
    image: "",
    gradient: ["#7c2d12", "#9a3412"],
    emoji: "💎",
    badge: "PRAGMATIC PLAY",
    players: 4100,
    isHot: true,
  },
  {
    id: "mega-wheel",
    title: "MEGA WHEEL",
    provider: "Pragmatic Play",
    category: "popular",
    subcategory: "CASINO",
    image: "",
    gradient: ["#1e1b4b", "#312e81"],
    emoji: "🎡",
    badge: "PRAGMATIC PLAY",
    players: 6200,
    isFeatured: true,
  },
  {
    id: "high-flyer",
    title: "HIGH FLYER",
    provider: "Pragmatic Play",
    category: "popular",
    subcategory: "CRASH",
    image: "",
    gradient: ["#0c4a6e", "#075985"],
    emoji: "✈️",
    badge: "PRAGMATIC PLAY",
    players: 5500,
    isFeatured: true,
  },
  {
    id: "fortune-gems-3",
    title: "FORTUNE GEMS 3",
    provider: "JILI",
    category: "popular",
    subcategory: "SLOTS",
    image: "",
    gradient: ["#713f12", "#92400e"],
    emoji: "💍",
    badge: "JILI",
    players: 3900,
  },
  {
    id: "no-commission-baccarat",
    title: "NO COMMISSION BACCARAT",
    provider: "Evolution",
    category: "popular",
    subcategory: "CASINO",
    image: "",
    gradient: ["#1c1917", "#292524"],
    emoji: "🂡",
    badge: "EVOLUTION",
    players: 7200,
    isHot: true,
  },
  {
    id: "pusoy-go",
    title: "PUSOY GO",
    provider: "JILI",
    category: "popular",
    subcategory: "TABLE",
    image: "",
    gradient: ["#1e1b4b", "#2e1065"],
    emoji: "🃏",
    badge: "JILI",
    players: 2100,
  },
  {
    id: "crazy-time",
    title: "CRAZY TIME",
    provider: "Evolution",
    category: "popular",
    subcategory: "CASINO",
    image: "",
    gradient: ["#7c0000", "#991b1b"],
    emoji: "🎪",
    badge: "EVOLUTION",
    players: 9100,
    isFeatured: true,
    isHot: true,
  },
  {
    id: "super-ace",
    title: "SUPER ACE",
    provider: "JILI",
    category: "popular",
    subcategory: "SLOTS",
    image: "",
    gradient: ["#422006", "#713f12"],
    emoji: "♠️",
    badge: "JILI",
    players: 4800,
    isHot: true,
  },
];

export const FEATURED_GAMES: BJ88Game[] = [
  {
    id: "mega-wheel-feat",
    title: "Mega Wheel",
    provider: "Pragmatic Play",
    category: "casino",
    image: "",
    gradient: ["#1e1b4b", "#4c1d95"],
    emoji: "🎡",
    isFeatured: true,
  },
  {
    id: "high-flyer-feat",
    title: "High Flyer",
    provider: "Pragmatic Play",
    category: "crash",
    image: "",
    gradient: ["#0c4a6e", "#0369a1"],
    emoji: "✈️",
    isFeatured: true,
  },
  {
    id: "gates-olympus",
    title: "Gates of Olympus Roulette",
    provider: "Pragmatic Play",
    category: "casino",
    image: "",
    gradient: ["#2e1065", "#5b21b6"],
    emoji: "⚡",
    isFeatured: true,
  },
];

export const SLOTS_GAMES: BJ88Game[] = [
  { id: "s1", title: "Fortune Gems 3", provider: "JILI", category: "slots", gradient: ["#713f12", "#92400e"], emoji: "💍", isHot: true, players: 3900 },
  { id: "s2", title: "Aztec Gems", provider: "Pragmatic Play", category: "slots", gradient: ["#7c2d12", "#9a3412"], emoji: "💎", isHot: true, players: 4100 },
  { id: "s3", title: "Gates of Olympus", provider: "Pragmatic Play", category: "slots", gradient: ["#2e1065", "#5b21b6"], emoji: "⚡", isFeatured: true, players: 8200 },
  { id: "s4", title: "Sweet Bonanza", provider: "Pragmatic Play", category: "slots", gradient: ["#be185d", "#ec4899"], emoji: "🍭", players: 5100 },
  { id: "s5", title: "Wild West Gold", provider: "Pragmatic Play", category: "slots", gradient: ["#78350f", "#b45309"], emoji: "🤠", players: 3200 },
  { id: "s6", title: "The Dog House", provider: "Pragmatic Play", category: "slots", gradient: ["#1d4ed8", "#3b82f6"], emoji: "🐕", players: 2900 },
  { id: "s7", title: "Big Bass Bonanza", provider: "Pragmatic Play", category: "slots", gradient: ["#065f46", "#10b981"], emoji: "🎣", players: 3600 },
  { id: "s8", title: "Starlight Princess", provider: "Pragmatic Play", category: "slots", gradient: ["#4c1d95", "#8b5cf6"], emoji: "⭐", players: 6700, isNew: true },
];

export const CASINO_GAMES: BJ88Game[] = [
  { id: "c1", title: "Lightning Roulette", provider: "Evolution", category: "casino", gradient: ["#7c0000", "#991b1b"], emoji: "⚡", isHot: true, players: 8400 },
  { id: "c2", title: "Crazy Time", provider: "Evolution", category: "casino", gradient: ["#1e1b4b", "#312e81"], emoji: "🎪", isHot: true, players: 9100 },
  { id: "c3", title: "Baccarat", provider: "Evolution", category: "casino", gradient: ["#1c1917", "#292524"], emoji: "🃏", players: 5200 },
  { id: "c4", title: "Dream Catcher", provider: "Evolution", category: "casino", gradient: ["#0c4a6e", "#075985"], emoji: "🎯", players: 4100 },
  { id: "c5", title: "Dragon Tiger", provider: "Evolution", category: "casino", gradient: ["#7c2d12", "#9a3412"], emoji: "🐉", players: 6300, isNew: true },
  { id: "c6", title: "Monopoly Live", provider: "Evolution", category: "casino", gradient: ["#166534", "#15803d"], emoji: "🎩", players: 7800 },
  { id: "c7", title: "Andar Bahar", provider: "Evolution", category: "casino", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🀄", players: 3900 },
  { id: "c8", title: "Teen Patti", provider: "Ezugi", category: "casino", gradient: ["#831843", "#be185d"], emoji: "🃏", players: 4500, isHot: true },
];

export const SPORTS_EVENTS = [
  { id: "sp1", league: "Bangladesh Premier League", sport: "Cricket", team1: "Dhaka Dominators", team2: "Chattogram Challengers", odds: [1.85, 3.4, 2.1], status: "live", minute: "18.4 overs" },
  { id: "sp2", league: "BPL T20", sport: "Cricket", team1: "Sylhet Strikers", team2: "Khulna Tigers", odds: [2.1, 4.2, 1.75], status: "upcoming" },
  { id: "sp3", league: "Premier League", sport: "Football", team1: "Sheikh Jamal DC", team2: "Bashundhara Kings", odds: [2.4, 3.1, 2.9], status: "live", minute: "67'" },
  { id: "sp4", league: "IPL", sport: "Cricket", team1: "Mumbai Indians", team2: "Chennai Super Kings", odds: [1.95, 3.8, 1.9], status: "upcoming" },
];

export const PROMOTIONS = [
  {
    id: "welcome",
    title: "Welcome Bonus",
    subtitle: "100% Bonus up to ৳10,000",
    badge: "New Member",
    emoji: "🎁",
    gradient: ["#7c3aed", "#db2777"] as [string, string],
  },
  {
    id: "sports-cashback",
    title: "Sports Cashback",
    subtitle: "Up to 5% Daily Cashback on Sports",
    badge: "Sports",
    emoji: "⚽",
    gradient: ["#065f46", "#0d9488"] as [string, string],
  },
  {
    id: "slots-bonus",
    title: "Slots Bonus",
    subtitle: "Free Spins Every Day",
    badge: "Slots",
    emoji: "🎰",
    gradient: ["#1e1b4b", "#4c1d95"] as [string, string],
  },
  {
    id: "cricket-promo",
    title: "Cricket Special",
    subtitle: "50% Bonus on First Cricket Bet",
    badge: "Cricket",
    emoji: "🏏",
    gradient: ["#0c4a6e", "#0369a1"] as [string, string],
  },
  {
    id: "referral",
    title: "Refer & Earn",
    subtitle: "Get ৳500 for each friend referred",
    badge: "Referral",
    emoji: "🤝",
    gradient: ["#78350f", "#b45309"] as [string, string],
  },
  {
    id: "vip",
    title: "VIP Club",
    subtitle: "Exclusive rewards for VIP members",
    badge: "VIP",
    emoji: "👑",
    gradient: ["#713f12", "#d97706"] as [string, string],
  },
];
