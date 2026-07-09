export const SITE = {
  name: "BJ88",
  tagline: "Bangladesh's #1 Online Gaming Platform",
  description:
    "BJ88 Bangladesh — Premier online casino, sports betting, slots, fishing games and more. Play with BDT. 24/7 support.",
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
  emoji: string;
  gradient: [string, string];
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: "popular", label: "POPULAR", emoji: "⭐", gradient: ["#f5a623", "#e8920f"] },
  { id: "sports", label: "SPORTS", emoji: "⚽", gradient: ["#22c55e", "#15803d"] },
  { id: "cricket", label: "CRICKET", emoji: "🏏", gradient: ["#3b82f6", "#1d4ed8"] },
  { id: "slots", label: "SLOTS", emoji: "🎰", gradient: ["#a855f7", "#7c3aed"] },
  { id: "casino", label: "CASINO", emoji: "🃏", gradient: ["#ef4444", "#b91c1c"] },
  { id: "table", label: "TABLE", emoji: "🎲", gradient: ["#06b6d4", "#0891b2"] },
  { id: "fishing", label: "FISHING", emoji: "🎣", gradient: ["#14b8a6", "#0d9488"] },
  { id: "lottery", label: "LOTTERY", emoji: "🎟️", gradient: ["#f97316", "#ea580c"] },
  { id: "arcade", label: "ARCADE", emoji: "🕹️", gradient: ["#8b5cf6", "#6d28d9"] },
  { id: "crash", label: "CRASH", emoji: "🚀", gradient: ["#ec4899", "#be185d"] },
];

export interface BJ88Game {
  id: string;
  title: string;
  provider: string;
  category: string;
  subcategory?: string;
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
  { id: "pp-slots", title: "PRAGMATIC PLAY", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#1a0533", "#3b0764"], emoji: "🏛️", badge: "SLOTS", players: 5200 },
  { id: "sportsbook", title: "SPORTSBOOK", provider: "Sports", category: "popular", subcategory: "SPORTS", gradient: ["#0a1628", "#1e3a5f"], emoji: "⚽", badge: "SPORTS", players: 8100, isHot: true },
  { id: "sexy-gaming", title: "SEXY", provider: "AE Sexy", category: "popular", subcategory: "CASINO", gradient: ["#3b0011", "#6b0020"], emoji: "💃", badge: "CASINO", players: 3400 },
  { id: "jungle", title: "LET'S GO JUNGLE", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#064e3b", "#065f46"], emoji: "🦁", badge: "LET'S GO", players: 2800, isNew: true },
  { id: "aztec-gems", title: "AZTEC GEMS", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#7c2d12", "#9a3412"], emoji: "💎", badge: "PRAGMATIC", players: 4100, isHot: true },
  { id: "mega-wheel", title: "MEGA WHEEL", provider: "Pragmatic Play", category: "popular", subcategory: "CASINO", gradient: ["#1e1b4b", "#312e81"], emoji: "🎡", badge: "PRAGMATIC", players: 6200, isFeatured: true },
  { id: "high-flyer", title: "HIGH FLYER", provider: "Pragmatic Play", category: "popular", subcategory: "CRASH", gradient: ["#0c4a6e", "#075985"], emoji: "✈️", badge: "PRAGMATIC", players: 5500, isFeatured: true },
  { id: "fortune-gems-3", title: "FORTUNE GEMS 3", provider: "JILI", category: "popular", subcategory: "SLOTS", gradient: ["#713f12", "#92400e"], emoji: "💍", badge: "JILI", players: 3900 },
  { id: "no-comm-baccarat", title: "NO COMM. BACCARAT", provider: "Evolution", category: "popular", subcategory: "CASINO", gradient: ["#1c1917", "#292524"], emoji: "🂡", badge: "EVOLUTION", players: 7200, isHot: true },
  { id: "pusoy-go", title: "PUSOY GO", provider: "JILI", category: "popular", subcategory: "TABLE", gradient: ["#1e1b4b", "#2e1065"], emoji: "🃏", badge: "JILI", players: 2100 },
  { id: "crazy-time", title: "CRAZY TIME", provider: "Evolution", category: "popular", subcategory: "CASINO", gradient: ["#7c0000", "#991b1b"], emoji: "🎪", badge: "EVOLUTION", players: 9100, isFeatured: true, isHot: true },
  { id: "super-ace", title: "SUPER ACE", provider: "JILI", category: "popular", subcategory: "SLOTS", gradient: ["#422006", "#713f12"], emoji: "♠️", badge: "JILI", players: 4800, isHot: true },
  { id: "gates-olympus", title: "GATES OF OLYMPUS", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#2e1065", "#5b21b6"], emoji: "⚡", badge: "PRAGMATIC", players: 8200, isFeatured: true },
  { id: "sweet-bonanza", title: "SWEET BONANZA", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#be185d", "#ec4899"], emoji: "🍭", badge: "PRAGMATIC", players: 5100 },
  { id: "wild-west-gold", title: "WILD WEST GOLD", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#78350f", "#b45309"], emoji: "🤠", badge: "PRAGMATIC", players: 3200 },
  { id: "dog-house", title: "THE DOG HOUSE", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#1d4ed8", "#3b82f6"], emoji: "🐕", badge: "PRAGMATIC", players: 2900 },
  { id: "big-bass", title: "BIG BASS BONANZA", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#065f46", "#10b981"], emoji: "🐟", badge: "PRAGMATIC", players: 3600 },
  { id: "starlight-princess", title: "STARLIGHT PRINCESS", provider: "Pragmatic Play", category: "popular", subcategory: "SLOTS", gradient: ["#4c1d95", "#8b5cf6"], emoji: "⭐", badge: "PRAGMATIC", players: 6700, isNew: true },
  { id: "aviator", title: "AVIATOR", provider: "Spribe", category: "popular", subcategory: "CRASH", gradient: ["#7c2d12", "#ea580c"], emoji: "✈️", badge: "SPRIBE", players: 9200, isHot: true },
  { id: "lightning-roulette", title: "LIGHTNING ROULETTE", provider: "Evolution", category: "popular", subcategory: "CASINO", gradient: ["#7c0000", "#991b1b"], emoji: "⚡", badge: "EVOLUTION", players: 8400, isHot: true },
];

export const SLOTS_GAMES: BJ88Game[] = [
  { id: "s1", title: "Fortune Gems 3", provider: "JILI", category: "slots", gradient: ["#713f12", "#92400e"], emoji: "💍", isHot: true, players: 3900 },
  { id: "s2", title: "Aztec Gems", provider: "Pragmatic Play", category: "slots", gradient: ["#7c2d12", "#9a3412"], emoji: "💎", isHot: true, players: 4100 },
  { id: "s3", title: "Gates of Olympus", provider: "Pragmatic Play", category: "slots", gradient: ["#2e1065", "#5b21b6"], emoji: "⚡", isFeatured: true, players: 8200 },
  { id: "s4", title: "Sweet Bonanza", provider: "Pragmatic Play", category: "slots", gradient: ["#be185d", "#ec4899"], emoji: "🍭", players: 5100 },
  { id: "s5", title: "Wild West Gold", provider: "Pragmatic Play", category: "slots", gradient: ["#78350f", "#b45309"], emoji: "🤠", players: 3200 },
  { id: "s6", title: "The Dog House", provider: "Pragmatic Play", category: "slots", gradient: ["#1d4ed8", "#3b82f6"], emoji: "🐕", players: 2900 },
  { id: "s7", title: "Big Bass Bonanza", provider: "Pragmatic Play", category: "slots", gradient: ["#065f46", "#10b981"], emoji: "🐟", players: 3600 },
  { id: "s8", title: "Starlight Princess", provider: "Pragmatic Play", category: "slots", gradient: ["#4c1d95", "#8b5cf6"], emoji: "⭐", players: 6700, isNew: true },
  { id: "s9", title: "Super Ace", provider: "JILI", category: "slots", gradient: ["#422006", "#713f12"], emoji: "♠️", isHot: true, players: 4800 },
  { id: "s10", title: "Boxing King", provider: "JILI", category: "slots", gradient: ["#7c0000", "#991b1b"], emoji: "🥊", players: 2600 },
  { id: "s11", title: "Golden Empire", provider: "JILI", category: "slots", gradient: ["#713f12", "#d97706"], emoji: "👑", players: 3400, isNew: true },
  { id: "s12", title: "Money Coming", provider: "JILI", category: "slots", gradient: ["#065f46", "#10b981"], emoji: "💰", players: 2200 },
  { id: "s13", title: "Crazy Hunter", provider: "JILI", category: "slots", gradient: ["#7c2d12", "#ea580c"], emoji: "🎯", players: 1800 },
  { id: "s14", title: "Lucky Neko", provider: "PG Soft", category: "slots", gradient: ["#be185d", "#9d174d"], emoji: "🐱", players: 3100, isHot: true },
  { id: "s15", title: "Mahjong Ways", provider: "PG Soft", category: "slots", gradient: ["#1e1b4b", "#312e81"], emoji: "🀄", players: 4200 },
  { id: "s16", title: "Treasure of Aztec", provider: "PG Soft", category: "slots", gradient: ["#7c2d12", "#9a3412"], emoji: "🗿", players: 2800 },
  { id: "s17", title: "Wild Fireworks", provider: "PG Soft", category: "slots", gradient: ["#be185d", "#ec4899"], emoji: "🎆", players: 2400, isNew: true },
  { id: "s18", title: "Leprechaun Riches", provider: "PG Soft", category: "slots", gradient: ["#166534", "#15803d"], emoji: "🌈", players: 1900 },
  { id: "s19", title: "Pirate Gold", provider: "Pragmatic Play", category: "slots", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🏴‍☠️", players: 2700 },
  { id: "s20", title: "Fruit Party", provider: "Pragmatic Play", category: "slots", gradient: ["#be185d", "#f472b6"], emoji: "🍓", players: 2100 },
];

export const CASINO_GAMES: BJ88Game[] = [
  { id: "c1", title: "Lightning Roulette", provider: "Evolution", category: "casino", gradient: ["#7c0000", "#991b1b"], emoji: "⚡", isHot: true, players: 8400 },
  { id: "c2", title: "Crazy Time", provider: "Evolution", category: "casino", gradient: ["#1e1b4b", "#312e81"], emoji: "🎪", isHot: true, players: 9100 },
  { id: "c3", title: "Baccarat", provider: "Evolution", category: "casino", gradient: ["#1c1917", "#292524"], emoji: "🃏", players: 5200 },
  { id: "c4", title: "Dream Catcher", provider: "Evolution", category: "casino", gradient: ["#0c4a6e", "#075985"], emoji: "🎯", players: 4100 },
  { id: "c5", title: "Dragon Tiger", provider: "Evolution", category: "casino", gradient: ["#7c2d12", "#9a3412"], emoji: "🐉", players: 6300, isNew: true },
  { id: "c6", title: "Monopoly Live", provider: "Evolution", category: "casino", gradient: ["#166534", "#15803d"], emoji: "🎩", players: 7800 },
  { id: "c7", title: "Andar Bahar", provider: "Ezugi", category: "casino", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🀄", players: 3900 },
  { id: "c8", title: "Teen Patti", provider: "Ezugi", category: "casino", gradient: ["#831843", "#be185d"], emoji: "🃏", players: 4500, isHot: true },
  { id: "c9", title: "Sic Bo", provider: "Evolution", category: "casino", gradient: ["#713f12", "#b45309"], emoji: "🎲", players: 2300 },
  { id: "c10", title: "Mega Ball", provider: "Evolution", category: "casino", gradient: ["#2e1065", "#5b21b6"], emoji: "🎱", players: 3400, isNew: true },
  { id: "c11", title: "Speed Roulette", provider: "Evolution", category: "casino", gradient: ["#7c0000", "#b91c1c"], emoji: "🎯", players: 5100 },
  { id: "c12", title: "Blackjack Party", provider: "Evolution", category: "casino", gradient: ["#1c1917", "#57534e"], emoji: "🂡", players: 3800 },
  { id: "c13", title: "Sexy Baccarat A", provider: "AE Sexy", category: "casino", gradient: ["#3b0011", "#6b0020"], emoji: "💃", players: 6200, isHot: true },
  { id: "c14", title: "Sexy Baccarat B", provider: "AE Sexy", category: "casino", gradient: ["#3b0011", "#8b0033"], emoji: "💃", players: 4800 },
  { id: "c15", title: "Sexy Roulette", provider: "AE Sexy", category: "casino", gradient: ["#4a0019", "#7a0030"], emoji: "💃", players: 4100 },
  { id: "c16", title: "Mega Wheel", provider: "Pragmatic Play", category: "casino", gradient: ["#1e1b4b", "#4c1d95"], emoji: "🎡", isFeatured: true, players: 6200 },
];

export const FISHING_GAMES: BJ88Game[] = [
  { id: "f1", title: "Ocean King", provider: "JILI", category: "fishing", gradient: ["#065f46", "#0d9488"], emoji: "🦈", isHot: true, players: 3100 },
  { id: "f2", title: "Fish Hunter", provider: "JILI", category: "fishing", gradient: ["#0c4a6e", "#0369a1"], emoji: "🐙", players: 2200 },
  { id: "f3", title: "Golden Toad", provider: "Fa Chai", category: "fishing", gradient: ["#713f12", "#b45309"], emoji: "🐸", players: 1800 },
  { id: "f4", title: "Deep Sea Bounty", provider: "JILI", category: "fishing", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🐠", isNew: true, players: 2500 },
  { id: "f5", title: "Dragon Fishing", provider: "JILI", category: "fishing", gradient: ["#7c0000", "#991b1b"], emoji: "🐉", isHot: true, players: 3400 },
  { id: "f6", title: "Cai Shen Fishing", provider: "Fa Chai", category: "fishing", gradient: ["#713f12", "#d97706"], emoji: "🎣", players: 1900 },
  { id: "f7", title: "Star Fish", provider: "JDB", category: "fishing", gradient: ["#2e1065", "#5b21b6"], emoji: "⭐", players: 1200 },
  { id: "f8", title: "Fishing Master", provider: "Spade Gaming", category: "fishing", gradient: ["#064e3b", "#10b981"], emoji: "🐟", players: 2700 },
];

export const ARCADE_GAMES: BJ88Game[] = [
  { id: "a1", title: "Plinko", provider: "Spribe", category: "arcade", gradient: ["#4c1d95", "#8b5cf6"], emoji: "🟣", isHot: true, players: 5400 },
  { id: "a2", title: "Mines", provider: "Spribe", category: "arcade", gradient: ["#7c0000", "#991b1b"], emoji: "💣", players: 4200 },
  { id: "a3", title: "Dice", provider: "Spribe", category: "arcade", gradient: ["#0c4a6e", "#0369a1"], emoji: "🎲", players: 3800 },
  { id: "a4", title: "Tower", provider: "Spribe", category: "arcade", gradient: ["#065f46", "#10b981"], emoji: "🗼", players: 2100 },
  { id: "a5", title: "Crash", provider: "Spribe", category: "arcade", gradient: ["#7c2d12", "#ea580c"], emoji: "🚀", isHot: true, players: 6100 },
  { id: "a6", title: "Mini Roulette", provider: "Spribe", category: "arcade", gradient: ["#1c1917", "#57534e"], emoji: "🎯", players: 1700 },
  { id: "a7", title: "Goal", provider: "Spribe", category: "arcade", gradient: ["#166534", "#15803d"], emoji: "⚽", players: 2300 },
  { id: "a8", title: "HiLo", provider: "Spribe", category: "arcade", gradient: ["#831843", "#be185d"], emoji: "🎴", players: 1500 },
];

export const LOTTERY_GAMES: BJ88Game[] = [
  { id: "l1", title: "Keno", provider: "JILI", category: "lottery", gradient: ["#713f12", "#d97706"], emoji: "🔢", players: 2100 },
  { id: "l2", title: "Bingo", provider: "JILI", category: "lottery", gradient: ["#0c4a6e", "#0369a1"], emoji: "🎟️", players: 1800 },
  { id: "l3", title: "Lucky 5", provider: "JILI", category: "lottery", gradient: ["#7c0000", "#991b1b"], emoji: "🍀", players: 1400 },
  { id: "l4", title: "Power Ball", provider: "JILI", category: "lottery", gradient: ["#1e1b4b", "#4c1d95"], emoji: "🔮", players: 1100 },
];

export const CRASH_GAMES: BJ88Game[] = [
  { id: "cr1", title: "Aviator", provider: "Spribe", category: "crash", gradient: ["#7c2d12", "#ea580c"], emoji: "✈️", isHot: true, players: 9200 },
  { id: "cr2", title: "JetX", provider: "SmartSoft", category: "crash", gradient: ["#1e3a5f", "#1d4ed8"], emoji: "🚀", isHot: true, players: 6800 },
  { id: "cr3", title: "High Flyer", provider: "Pragmatic", category: "crash", gradient: ["#0c4a6e", "#0369a1"], emoji: "🛩️", isFeatured: true, players: 5500 },
  { id: "cr4", title: "Space XY", provider: "BGaming", category: "crash", gradient: ["#2e1065", "#5b21b6"], emoji: "🌌", players: 3200 },
  { id: "cr5", title: "Lucky Jet", provider: "1Win", category: "crash", gradient: ["#713f12", "#b45309"], emoji: "🚀", players: 4100, isNew: true },
  { id: "cr6", title: "Rocketman", provider: "Elbet", category: "crash", gradient: ["#7c0000", "#991b1b"], emoji: "👨‍🚀", players: 2800 },
];

export const TABLE_GAMES: BJ88Game[] = [
  { id: "t1", title: "Texas Hold'em", provider: "Evolution", category: "table", gradient: ["#0c4a6e", "#0369a1"], emoji: "♠️", players: 3400 },
  { id: "t2", title: "Blackjack VIP", provider: "Evolution", category: "table", gradient: ["#1c1917", "#292524"], emoji: "🂡", players: 5200, isHot: true },
  { id: "t3", title: "Baccarat Squeeze", provider: "Evolution", category: "table", gradient: ["#7c0000", "#991b1b"], emoji: "🃏", players: 4100 },
  { id: "t4", title: "Sic Bo", provider: "Evolution", category: "table", gradient: ["#713f12", "#b45309"], emoji: "🎲", players: 2300 },
  { id: "t5", title: "Casino Hold'em", provider: "Evolution", category: "table", gradient: ["#065f46", "#10b981"], emoji: "♥️", players: 1900 },
  { id: "t6", title: "Dragon Tiger", provider: "Evolution", category: "table", gradient: ["#7c2d12", "#9a3412"], emoji: "🐉", players: 2700, isNew: true },
];

export const SPORTS_GAMES_LIST: BJ88Game[] = [
  { id: "sp1", title: "Football", provider: "Sportsbook", category: "sports", gradient: ["#065f46", "#10b981"], emoji: "⚽", isHot: true, players: 8100 },
  { id: "sp2", title: "Cricket", provider: "Sportsbook", category: "sports", gradient: ["#0c4a6e", "#1d4ed8"], emoji: "🏏", isHot: true, players: 7500 },
  { id: "sp3", title: "Basketball", provider: "Sportsbook", category: "sports", gradient: ["#7c2d12", "#ea580c"], emoji: "🏀", players: 3200 },
  { id: "sp4", title: "Tennis", provider: "Sportsbook", category: "sports", gradient: ["#166534", "#22c55e"], emoji: "🎾", players: 2400 },
  { id: "sp5", title: "Kabaddi", provider: "Sportsbook", category: "sports", gradient: ["#7c0000", "#991b1b"], emoji: "🤼", players: 1800 },
  { id: "sp6", title: "Esports", provider: "Sportsbook", category: "sports", gradient: ["#2e1065", "#5b21b6"], emoji: "🎮", players: 4100, isNew: true },
  { id: "sp7", title: "Horse Racing", provider: "Sportsbook", category: "sports", gradient: ["#713f12", "#b45309"], emoji: "🏇", players: 1500 },
  { id: "sp8", title: "Boxing", provider: "Sportsbook", category: "sports", gradient: ["#1c1917", "#57534e"], emoji: "🥊", players: 1200 },
];

export const CRICKET_GAMES_LIST: BJ88Game[] = [
  { id: "cr1", title: "BPL T20", provider: "Cricket", category: "cricket", gradient: ["#065f46", "#10b981"], emoji: "🏏", isHot: true, players: 5500 },
  { id: "cr2", title: "IPL", provider: "Cricket", category: "cricket", gradient: ["#7c0000", "#991b1b"], emoji: "🏏", isHot: true, players: 8200 },
  { id: "cr3", title: "ICC World Cup", provider: "Cricket", category: "cricket", gradient: ["#0c4a6e", "#1d4ed8"], emoji: "🏆", players: 6700 },
  { id: "cr4", title: "Bangladesh vs India", provider: "Cricket", category: "cricket", gradient: ["#166534", "#15803d"], emoji: "🇧🇩", players: 4200, isNew: true },
  { id: "cr5", title: "T20 World Cup", provider: "Cricket", category: "cricket", gradient: ["#713f12", "#d97706"], emoji: "🏆", players: 5800 },
  { id: "cr6", title: "Asia Cup", provider: "Cricket", category: "cricket", gradient: ["#2e1065", "#5b21b6"], emoji: "🏆", players: 3900 },
];

export const FEATURED_GAMES: BJ88Game[] = [
  { id: "feat-mega-wheel", title: "Mega Wheel", provider: "Pragmatic Play", category: "casino", gradient: ["#1e1b4b", "#4c1d95"], emoji: "🎡", isFeatured: true },
  { id: "feat-high-flyer", title: "High Flyer", provider: "Pragmatic Play", category: "crash", gradient: ["#0c4a6e", "#0369a1"], emoji: "✈️", isFeatured: true },
  { id: "feat-gates", title: "Gates of Olympus Roulette", provider: "Pragmatic Play", category: "casino", gradient: ["#2e1065", "#5b21b6"], emoji: "⚡", isFeatured: true },
];

export const TOURNAMENTS: BJ88Game[] = [
  { id: "tour-slots", title: "Slots Tournament", provider: "Weekly", category: "popular", gradient: ["#6d28d9", "#a855f7"], emoji: "🏆", isFeatured: true },
  { id: "tour-crash", title: "Crash Championship", provider: "Monthly", category: "crash", gradient: ["#7c2d12", "#ea580c"], emoji: "🚀", isFeatured: true },
  { id: "tour-fishing", title: "Fishing Master Cup", provider: "Daily", category: "fishing", gradient: ["#065f46", "#0d9488"], emoji: "🎣", isFeatured: true },
];

export const SPORTS_EVENTS = [
  { id: "se1", league: "Bangladesh Premier League", sport: "Cricket", team1: "Dhaka Dominators", team2: "Chattogram Challengers", odds: [1.85, 3.4, 2.1], status: "live", minute: "18.4 overs" },
  { id: "se2", league: "BPL T20", sport: "Cricket", team1: "Sylhet Strikers", team2: "Khulna Tigers", odds: [2.1, 4.2, 1.75], status: "upcoming" },
  { id: "se3", league: "Premier League", sport: "Football", team1: "Sheikh Jamal DC", team2: "Bashundhara Kings", odds: [2.4, 3.1, 2.9], status: "live", minute: "67'" },
  { id: "se4", league: "IPL", sport: "Cricket", team1: "Mumbai Indians", team2: "Chennai Super Kings", odds: [1.95, 3.8, 1.9], status: "upcoming" },
];

export const PROMOTIONS = [
  { id: "welcome", title: "Welcome Bonus", subtitle: "100% Bonus up to ৳10,000", badge: "New Member", emoji: "🎁", gradient: ["#6d28d9", "#be185d"] as [string, string] },
  { id: "sports-cashback", title: "Sports Cashback", subtitle: "Up to 5% Daily Cashback", badge: "Sports", emoji: "⚽", gradient: ["#065f46", "#0d9488"] as [string, string] },
  { id: "slots-bonus", title: "Slots Bonus", subtitle: "Free Spins Every Day", badge: "Slots", emoji: "🎰", gradient: ["#1e1b4b", "#4c1d95"] as [string, string] },
  { id: "cricket-promo", title: "Cricket Special", subtitle: "50% Bonus on First Cricket Bet", badge: "Cricket", emoji: "🏏", gradient: ["#0c4a6e", "#0369a1"] as [string, string] },
  { id: "referral", title: "Refer & Earn", subtitle: "Get ৳500 for each friend referred", badge: "Referral", emoji: "🤝", gradient: ["#78350f", "#b45309"] as [string, string] },
  { id: "vip", title: "VIP Club", subtitle: "Exclusive rewards for VIP members", badge: "VIP", emoji: "👑", gradient: ["#713f12", "#d97706"] as [string, string] },
];

export const PROVIDERS = [
  { name: "PRAGMATIC PLAY", emoji: "🎯" },
  { name: "JILI", emoji: "🎰" },
  { name: "EVOLUTION", emoji: "🃏" },
  { name: "AE SEXY", emoji: "💃" },
  { name: "HABANERO", emoji: "🌶️" },
  { name: "PG SOFT", emoji: "🎮" },
  { name: "SPADE GAMING", emoji: "♠️" },
  { name: "JDB", emoji: "🎲" },
];


export { SITE }