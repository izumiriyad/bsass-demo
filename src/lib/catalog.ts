export const SITE = {
  name: "BSL Gaming",
  shortName: "BSL",
  tagline: "Bangladesh's #1 Online Gaming Platform",
  description:
    "BSL Gaming — Premier online casino, sports betting, cricket, cockfighting, slots, fishing games and more. Play with BDT. 24/7 support.",
  url: "https://bslgaming.com.bd",
  locale: "en-BD",
  currency: "BDT",
  currencySymbol: "৳",
  country: "Bangladesh",
  supportEmail: "support@bslgaming.com.bd",
};

export interface GameCategory {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: "popular", label: "POPULAR", emoji: "⭐", color: "#ffdf19" },
  { id: "sports", label: "SPORTS", emoji: "⚽", color: "#22c55e" },
  { id: "cricket", label: "CRICKET", emoji: "🏏", color: "#3b82f6" },
  { id: "cockfighting", label: "COCKFIGHTING", emoji: "🐓", color: "#ef4444" },
  { id: "slots", label: "SLOTS", emoji: "🎰", color: "#a855f7" },
  { id: "casino", label: "CASINO", emoji: "🃏", color: "#f43f5e" },
  { id: "table", label: "TABLE", emoji: "🎲", color: "#06b6d4" },
  { id: "fishing", label: "FISHING", emoji: "🎣", color: "#14b8a6" },
  { id: "lottery", label: "LOTTERY", emoji: "🎟️", color: "#f97316" },
  { id: "arcade", label: "ARCADE", emoji: "🕹️", color: "#8b5cf6" },
  { id: "crash", label: "CRASH", emoji: "🚀", color: "#ec4899" },
];

export interface BSLGame {
  id: string;
  title: string;
  provider: string;
  category: string;
  gradient: [string, string];
  emoji: string;
  isHot?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  players?: number;
}

function g(id: string, title: string, provider: string, category: string, c1: string, c2: string, emoji: string, flags: Partial<BSLGame> = {}): BSLGame {
  return { id, title, provider, category, gradient: [c1, c2], emoji, ...flags };
}

export const POPULAR_GAMES: BSLGame[] = [
  g("sportsbook", "SPORTSBOOK", "BSL Sports", "popular", "#064e3b", "#065f46", "⚽", { isHot: true, players: 8100 }),
  g("pp-slots", "PRAGMATIC PLAY", "Pragmatic Play", "popular", "#1a0533", "#3b0764", "🎰", { players: 5200 }),
  g("sexy-baccarat", "SEXY BACCARAT", "AE Sexy", "popular", "#3b0011", "#6b0020", "💃", { isHot: true, players: 6200 }),
  g("aviator", "AVIATOR", "Spribe", "popular", "#7c2d12", "#ea580c", "✈️", { isHot: true, players: 9200 }),
  g("crazy-time", "CRAZY TIME", "Evolution", "popular", "#7c0000", "#991b1b", "🎪", { isFeatured: true, isHot: true, players: 9100 }),
  g("gates-olympus", "GATES OF OLYMPUS", "Pragmatic Play", "popular", "#2e1065", "#5b21b6", "⚡", { isFeatured: true, players: 8200 }),
  g("mega-wheel", "MEGA WHEEL", "Pragmatic Play", "popular", "#1e1b4b", "#4c1d95", "🎡", { isFeatured: true, players: 6200 }),
  g("high-flyer", "HIGH FLYER", "Pragmatic Play", "popular", "#0c4a6e", "#0369a1", "🛩️", { players: 5500 }),
  g("fortune-gems-3", "FORTUNE GEMS 3", "JILI", "popular", "#713f12", "#92400e", "💍", { players: 3900 }),
  g("aztec-gems", "AZTEC GEMS", "Pragmatic Play", "popular", "#7c2d12", "#9a3412", "💎", { isHot: true, players: 4100 }),
  g("super-ace", "SUPER ACE", "JILI", "popular", "#422006", "#713f12", "♠️", { isHot: true, players: 4800 }),
  g("sweet-bonanza", "SWEET BONANZA", "Pragmatic Play", "popular", "#be185d", "#ec4899", "🍭", { players: 5100 }),
  g("lightning-roulette", "LIGHTNING ROULETTE", "Evolution", "popular", "#7c0000", "#b91c1c", "⚡", { isHot: true, players: 8400 }),
  g("starlight-princess", "STARLIGHT PRINCESS", "Pragmatic Play", "popular", "#4c1d95", "#8b5cf6", "⭐", { isNew: true, players: 6700 }),
  g("cockfight-derby", "COCKFIGHT DERBY", "SV388", "popular", "#7c0000", "#991b1b", "🐓", { isHot: true, players: 3400 }),
  g("wild-west-gold", "WILD WEST GOLD", "Pragmatic Play", "popular", "#78350f", "#b45309", "🤠", { players: 3200 }),
  g("big-bass", "BIG BASS BONANZA", "Pragmatic Play", "popular", "#065f46", "#10b981", "🐟", { players: 3600 }),
  g("dog-house", "THE DOG HOUSE", "Pragmatic Play", "popular", "#1d4ed8", "#3b82f6", "🐕", { players: 2900 }),
  g("no-comm-baccarat", "NO COMM. BACCARAT", "Evolution", "popular", "#1c1917", "#292524", "🂡", { players: 7200 }),
  g("spaceman", "SPACEMAN", "Pragmatic Play", "popular", "#1e1b4b", "#312e81", "🚀", { isNew: true, players: 4500 }),
];

export const SLOTS_GAMES: BSLGame[] = [
  g("s1", "Fortune Gems 3", "JILI", "slots", "#713f12", "#92400e", "💍", { isHot: true, players: 3900 }),
  g("s2", "Aztec Gems", "Pragmatic Play", "slots", "#7c2d12", "#9a3412", "💎", { isHot: true, players: 4100 }),
  g("s3", "Gates of Olympus", "Pragmatic Play", "slots", "#2e1065", "#5b21b6", "⚡", { isFeatured: true, players: 8200 }),
  g("s4", "Sweet Bonanza", "Pragmatic Play", "slots", "#be185d", "#ec4899", "🍭", { players: 5100 }),
  g("s5", "Wild West Gold", "Pragmatic Play", "slots", "#78350f", "#b45309", "🤠", { players: 3200 }),
  g("s6", "The Dog House", "Pragmatic Play", "slots", "#1d4ed8", "#3b82f6", "🐕", { players: 2900 }),
  g("s7", "Big Bass Bonanza", "Pragmatic Play", "slots", "#065f46", "#10b981", "🐟", { players: 3600 }),
  g("s8", "Starlight Princess", "Pragmatic Play", "slots", "#4c1d95", "#8b5cf6", "⭐", { isNew: true, players: 6700 }),
  g("s9", "Super Ace", "JILI", "slots", "#422006", "#713f12", "♠️", { isHot: true, players: 4800 }),
  g("s10", "Boxing King", "JILI", "slots", "#7c0000", "#991b1b", "🥊", { players: 2600 }),
  g("s11", "Golden Empire", "JILI", "slots", "#713f12", "#d97706", "👑", { isNew: true, players: 3400 }),
  g("s12", "Money Coming", "JILI", "slots", "#065f46", "#10b981", "💰", { players: 2200 }),
  g("s13", "Crazy Hunter", "JILI", "slots", "#7c2d12", "#ea580c", "🎯", { players: 1800 }),
  g("s14", "Lucky Neko", "PG Soft", "slots", "#be185d", "#9d174d", "🐱", { isHot: true, players: 3100 }),
  g("s15", "Mahjong Ways", "PG Soft", "slots", "#1e1b4b", "#312e81", "🀄", { players: 4200 }),
  g("s16", "Treasure of Aztec", "PG Soft", "slots", "#7c2d12", "#9a3412", "🗿", { players: 2800 }),
  g("s17", "Wild Fireworks", "PG Soft", "slots", "#be185d", "#ec4899", "🎆", { isNew: true, players: 2400 }),
  g("s18", "Leprechaun Riches", "PG Soft", "slots", "#166534", "#15803d", "🌈", { players: 1900 }),
  g("s19", "Pirate Gold", "Pragmatic Play", "slots", "#1e3a5f", "#1d4ed8", "🏴‍☠️", { players: 2700 }),
  g("s20", "Fruit Party", "Pragmatic Play", "slots", "#be185d", "#f472b6", "🍓", { players: 2100 }),
];

export const CASINO_GAMES: BSLGame[] = [
  g("c1", "Lightning Roulette", "Evolution", "casino", "#7c0000", "#991b1b", "⚡", { isHot: true, players: 8400 }),
  g("c2", "Crazy Time", "Evolution", "casino", "#1e1b4b", "#312e81", "🎪", { isHot: true, players: 9100 }),
  g("c3", "Baccarat", "Evolution", "casino", "#1c1917", "#292524", "🃏", { players: 5200 }),
  g("c4", "Dream Catcher", "Evolution", "casino", "#0c4a6e", "#075985", "🎯", { players: 4100 }),
  g("c5", "Dragon Tiger", "Evolution", "casino", "#7c2d12", "#9a3412", "🐉", { isNew: true, players: 6300 }),
  g("c6", "Monopoly Live", "Evolution", "casino", "#166534", "#15803d", "🎩", { players: 7800 }),
  g("c7", "Andar Bahar", "Ezugi", "casino", "#1e3a5f", "#1d4ed8", "🀄", { players: 3900 }),
  g("c8", "Teen Patti", "Ezugi", "casino", "#831843", "#be185d", "🃏", { isHot: true, players: 4500 }),
  g("c9", "Sic Bo", "Evolution", "casino", "#713f12", "#b45309", "🎲", { players: 2300 }),
  g("c10", "Mega Ball", "Evolution", "casino", "#2e1065", "#5b21b6", "🎱", { isNew: true, players: 3400 }),
  g("c11", "Speed Roulette", "Evolution", "casino", "#7c0000", "#b91c1c", "🎯", { players: 5100 }),
  g("c12", "Blackjack Party", "Evolution", "casino", "#1c1917", "#57534e", "🂡", { players: 3800 }),
  g("c13", "Sexy Baccarat A", "AE Sexy", "casino", "#3b0011", "#6b0020", "💃", { isHot: true, players: 6200 }),
  g("c14", "Sexy Baccarat B", "AE Sexy", "casino", "#3b0011", "#8b0033", "💃", { players: 4800 }),
  g("c15", "Sexy Roulette", "AE Sexy", "casino", "#4a0019", "#7a0030", "💃", { players: 4100 }),
  g("c16", "Mega Wheel", "Pragmatic Play", "casino", "#1e1b4b", "#4c1d95", "🎡", { isFeatured: true, players: 6200 }),
];

export const FISHING_GAMES: BSLGame[] = [
  g("f1", "Ocean King", "JILI", "fishing", "#065f46", "#0d9488", "🦈", { isHot: true, players: 3100 }),
  g("f2", "Fish Hunter", "JILI", "fishing", "#0c4a6e", "#0369a1", "🐙", { players: 2200 }),
  g("f3", "Golden Toad", "Fa Chai", "fishing", "#713f12", "#b45309", "🐸", { players: 1800 }),
  g("f4", "Deep Sea Bounty", "JILI", "fishing", "#1e3a5f", "#1d4ed8", "🐠", { isNew: true, players: 2500 }),
  g("f5", "Dragon Fishing", "JILI", "fishing", "#7c0000", "#991b1b", "🐉", { isHot: true, players: 3400 }),
  g("f6", "Cai Shen Fishing", "Fa Chai", "fishing", "#713f12", "#d97706", "🎣", { players: 1900 }),
  g("f7", "Star Fish", "JDB", "fishing", "#2e1065", "#5b21b6", "⭐", { players: 1200 }),
  g("f8", "Fishing Master", "Spade Gaming", "fishing", "#064e3b", "#10b981", "🐟", { players: 2700 }),
];

export const ARCADE_GAMES: BSLGame[] = [
  g("a1", "Plinko", "Spribe", "arcade", "#4c1d95", "#8b5cf6", "🟣", { isHot: true, players: 5400 }),
  g("a2", "Mines", "Spribe", "arcade", "#7c0000", "#991b1b", "💣", { players: 4200 }),
  g("a3", "Dice", "Spribe", "arcade", "#0c4a6e", "#0369a1", "🎲", { players: 3800 }),
  g("a4", "Tower", "Spribe", "arcade", "#065f46", "#10b981", "🗼", { players: 2100 }),
  g("a5", "Crash", "Spribe", "arcade", "#7c2d12", "#ea580c", "🚀", { isHot: true, players: 6100 }),
  g("a6", "Mini Roulette", "Spribe", "arcade", "#1c1917", "#57534e", "🎯", { players: 1700 }),
  g("a7", "Goal", "Spribe", "arcade", "#166534", "#15803d", "⚽", { players: 2300 }),
  g("a8", "HiLo", "Spribe", "arcade", "#831843", "#be185d", "🎴", { players: 1500 }),
];

export const LOTTERY_GAMES: BSLGame[] = [
  g("l1", "Keno", "JILI", "lottery", "#713f12", "#d97706", "🔢", { players: 2100 }),
  g("l2", "Bingo", "JILI", "lottery", "#0c4a6e", "#0369a1", "🎟️", { players: 1800 }),
  g("l3", "Lucky 5", "JILI", "lottery", "#7c0000", "#991b1b", "🍀", { players: 1400 }),
  g("l4", "Power Ball", "JILI", "lottery", "#1e1b4b", "#4c1d95", "🔮", { players: 1100 }),
];

export const CRASH_GAMES: BSLGame[] = [
  g("cr1", "Aviator", "Spribe", "crash", "#7c2d12", "#ea580c", "✈️", { isHot: true, players: 9200 }),
  g("cr2", "JetX", "SmartSoft", "crash", "#1e3a5f", "#1d4ed8", "🚀", { isHot: true, players: 6800 }),
  g("cr3", "High Flyer", "Pragmatic", "crash", "#0c4a6e", "#0369a1", "🛩️", { isFeatured: true, players: 5500 }),
  g("cr4", "Space XY", "BGaming", "crash", "#2e1065", "#5b21b6", "🌌", { players: 3200 }),
  g("cr5", "Lucky Jet", "1Win", "crash", "#713f12", "#b45309", "🚀", { isNew: true, players: 4100 }),
  g("cr6", "Spaceman", "Pragmatic Play", "crash", "#1e1b4b", "#312e81", "🚀", { players: 4500 }),
  g("cr7", "Rocketman", "Elbet", "crash", "#7c0000", "#991b1b", "👨‍🚀", { players: 2800 }),
];

export const TABLE_GAMES: BSLGame[] = [
  g("t1", "Texas Hold'em", "Evolution", "table", "#0c4a6e", "#0369a1", "♠️", { players: 3400 }),
  g("t2", "Blackjack VIP", "Evolution", "table", "#1c1917", "#292524", "🂡", { isHot: true, players: 5200 }),
  g("t3", "Baccarat Squeeze", "Evolution", "table", "#7c0000", "#991b1b", "🃏", { players: 4100 }),
  g("t4", "Sic Bo", "Evolution", "table", "#713f12", "#b45309", "🎲", { players: 2300 }),
  g("t5", "Casino Hold'em", "Evolution", "table", "#065f46", "#10b981", "♥️", { players: 1900 }),
  g("t6", "Dragon Tiger", "Evolution", "table", "#7c2d12", "#9a3412", "🐉", { isNew: true, players: 2700 }),
];

export const SPORTS_GAMES_LIST: BSLGame[] = [
  g("sp1", "Football", "BSL Sports", "sports", "#065f46", "#10b981", "⚽", { isHot: true, players: 8100 }),
  g("sp2", "Cricket", "BSL Sports", "sports", "#0c4a6e", "#1d4ed8", "🏏", { isHot: true, players: 7500 }),
  g("sp3", "Basketball", "BSL Sports", "sports", "#7c2d12", "#ea580c", "🏀", { players: 3200 }),
  g("sp4", "Tennis", "BSL Sports", "sports", "#166534", "#22c55e", "🎾", { players: 2400 }),
  g("sp5", "Kabaddi", "BSL Sports", "sports", "#7c0000", "#991b1b", "🤼", { players: 1800 }),
  g("sp6", "Esports", "BSL Sports", "sports", "#2e1065", "#5b21b6", "🎮", { isNew: true, players: 4100 }),
  g("sp7", "Horse Racing", "BSL Sports", "sports", "#713f12", "#b45309", "🏇", { players: 1500 }),
  g("sp8", "Boxing", "BSL Sports", "sports", "#1c1917", "#57534e", "🥊", { players: 1200 }),
];

export const CRICKET_GAMES_LIST: BSLGame[] = [
  g("cr1", "BPL T20", "BSL Cricket", "cricket", "#065f46", "#10b981", "🏏", { isHot: true, players: 5500 }),
  g("cr2", "IPL", "BSL Cricket", "cricket", "#7c0000", "#991b1b", "🏏", { isHot: true, players: 8200 }),
  g("cr3", "ICC World Cup", "BSL Cricket", "cricket", "#0c4a6e", "#1d4ed8", "🏆", { players: 6700 }),
  g("cr4", "Bangladesh vs India", "BSL Cricket", "cricket", "#166534", "#15803d", "🇧🇩", { isNew: true, players: 4200 }),
  g("cr5", "T20 World Cup", "BSL Cricket", "cricket", "#713f12", "#d97706", "🏆", { players: 5800 }),
  g("cr6", "Asia Cup", "BSL Cricket", "cricket", "#2e1065", "#5b21b6", "🏆", { players: 3900 }),
];

export const COCKFIGHTING_GAMES: BSLGame[] = [
  g("cf1", "Cockfight Derby", "SV388", "cockfighting", "#7c0000", "#991b1b", "🐓", { isHot: true, players: 3400 }),
  g("cf2", "Live Cockfight A", "SV388", "cockfighting", "#3b0011", "#6b0020", "🐓", { isHot: true, players: 2800 }),
  g("cf3", "Live Cockfight B", "SV388", "cockfighting", "#4a0019", "#7a0030", "🐓", { players: 2100 }),
  g("cf4", "Cockfight Arena", "SV388", "cockfighting", "#7c2d12", "#9a3412", "🐓", { isNew: true, players: 1900 }),
  g("cf5", "Champion Cockfight", "SV388", "cockfighting", "#713f12", "#b45309", "🐓", { players: 1600 }),
  g("cf6", "Golden Cockfight", "SV388", "cockfighting", "#713f12", "#d97706", "🐓", { players: 1200 }),
];

export const FEATURED_GAMES: BSLGame[] = [
  g("feat-1", "Mega Wheel", "Pragmatic Play", "casino", "#1e1b4b", "#4c1d95", "🎡", { isFeatured: true }),
  g("feat-2", "High Flyer", "Pragmatic Play", "crash", "#0c4a6e", "#0369a1", "🛩️", { isFeatured: true }),
  g("feat-3", "Gates of Olympus", "Pragmatic Play", "slots", "#2e1065", "#5b21b6", "⚡", { isFeatured: true }),
  g("feat-4", "Crazy Time", "Evolution", "casino", "#7c0000", "#991b1b", "🎪", { isFeatured: true }),
];

export const SPORTS_EVENTS = [
  { id: "se1", league: "Bangladesh Premier League", sport: "Cricket", team1: "Dhaka Dominators", team2: "Chattogram Challengers", odds: [1.85, 3.4, 2.1] as number[], status: "live" as const, minute: "18.4 overs" },
  { id: "se2", league: "BPL T20", sport: "Cricket", team1: "Sylhet Strikers", team2: "Khulna Tigers", odds: [2.1, 4.2, 1.75] as number[], status: "upcoming" as const },
  { id: "se3", league: "Premier League", sport: "Football", team1: "Sheikh Jamal DC", team2: "Bashundhara Kings", odds: [2.4, 3.1, 2.9] as number[], status: "live" as const, minute: "67'" },
  { id: "se4", league: "IPL", sport: "Cricket", team1: "Mumbai Indians", team2: "Chennai Super Kings", odds: [1.95, 3.8, 1.9] as number[], status: "upcoming" as const },
];

export const PROMOTIONS = [
  { id: "welcome", title: "Welcome Bonus", subtitle: "100% Bonus up to ৳10,000", badge: "New Member", emoji: "🎁", gradient: ["#008d5b", "#006640"] as [string, string] },
  { id: "sports-cashback", title: "Sports Cashback", subtitle: "Up to 5% Daily Cashback", badge: "Sports", emoji: "⚽", gradient: ["#065f46", "#0d9488"] as [string, string] },
  { id: "slots-bonus", title: "Slots Bonus", subtitle: "Free Spins Every Day", badge: "Slots", emoji: "🎰", gradient: ["#1e1b4b", "#4c1d95"] as [string, string] },
  { id: "cricket-promo", title: "Cricket Special", subtitle: "50% Bonus on First Cricket Bet", badge: "Cricket", emoji: "🏏", gradient: ["#0c4a6e", "#0369a1"] as [string, string] },
  { id: "referral", title: "Refer & Earn", subtitle: "Get ৳500 for each friend referred", badge: "Referral", emoji: "🤝", gradient: ["#78350f", "#b45309"] as [string, string] },
  { id: "vip", title: "VIP Club", subtitle: "Exclusive rewards for VIP members", badge: "VIP", emoji: "👑", gradient: ["#713f12", "#d97706"] as [string, string] },
  { id: "daily-sports-rebate", title: "Daily Sports Rebate", subtitle: "1.21% Daily Rebate on All Sports Bets", badge: "Daily", emoji: "⚽", gradient: ["#065f46", "#0d9488"] as [string, string] },
  { id: "slots-cashback", title: "Slots Cashback", subtitle: "Up to 5% Cashback on Slots Losses", badge: "Slots", emoji: "🎰", gradient: ["#1e1b4b", "#4c1d95"] as [string, string] },
  { id: "cricket-first-bet", title: "Cricket First Bet", subtitle: "50% Bonus on Your First Cricket Bet", badge: "Cricket", emoji: "🏏", gradient: ["#0c4a6e", "#0369a1"] as [string, string] },
  { id: "birthday-bonus", title: "Birthday Bonus", subtitle: "Special Bonus on Your Birthday", badge: "VIP", emoji: "🎂", gradient: ["#831843", "#be185d"] as [string, string] },
  { id: "unlimited-deposit", title: "Unlimited Deposit Bonus", subtitle: "4.50% Bonus on Every Deposit", badge: "Unlimited", emoji: "💰", gradient: ["#713f12", "#d97706"] as [string, string] },
  { id: "weekly-reload", title: "Weekly Reload", subtitle: "Reload Bonus Every Monday", badge: "Weekly", emoji: "🔄", gradient: ["#166534", "#15803d"] as [string, string] },
  { id: "loss-refund", title: "Loss Refund", subtitle: "100% Refund on Net Weekly Losses", badge: "Safety Net", emoji: "🛡️", gradient: ["#1c1917", "#57534e"] as [string, string] },
  { id: "vip-exclusive", title: "VIP Exclusive", subtitle: "Custom Bonuses for VIP Members", badge: "VIP Only", emoji: "👑", gradient: ["#4c1d95", "#8b5cf6"] as [string, string] },
];

export const PROVIDERS = [
  { name: "PRAGMATIC PLAY", emoji: "🎯" },
  { name: "JILI", emoji: "🎰" },
  { name: "EVOLUTION", emoji: "🃏" },
  { name: "AE SEXY", emoji: "💃" },
  { name: "PG SOFT", emoji: "🎮" },
  { name: "SPADE GAMING", emoji: "♠️" },
  { name: "JDB", emoji: "🎲" },
  { name: "SV388", emoji: "🐓" },
];

export const PAYMENT_OPTIONS = [
  { id: "bkash", name: "bKash", emoji: "💗", fee: "Free", time: "Instant" },
  { id: "nagad", name: "Nagad", emoji: "🟠", fee: "Free", time: "Instant" },
  { id: "rocket", name: "Rocket", emoji: "🚀", fee: "Free", time: "Instant" },
  { id: "bank", name: "Bank Transfer", emoji: "🏦", fee: "Free", time: "1–3 hrs" },
  { id: "crypto", name: "Crypto", emoji: "₿", fee: "Free", time: "Instant" },
];

export const ALL_GAMES: BSLGame[] = [
  ...POPULAR_GAMES,
  ...SLOTS_GAMES,
  ...CASINO_GAMES,
  ...FISHING_GAMES,
  ...ARCADE_GAMES,
  ...CRASH_GAMES,
  ...TABLE_GAMES,
  ...COCKFIGHTING_GAMES,
];

// === UPGRADED SECTIONS FROM COMPETITOR RESEARCH ===

// Sportsbook providers (BetJili-style multi-provider aggregation)
export const SPORTSBOOK_PROVIDERS = [
  { id: "saba", name: "SABA", emoji: "🎯", events: "500+ daily" },
  { id: "bti", name: "BTi", emoji: "📊", events: "800+ daily" },
  { id: "sbo", name: "SBOBET", emoji: "⚽", events: "600+ daily" },
  { id: "cmd", name: "CMD368", emoji: "🎮", events: "700+ daily" },
  { id: "pinnacle", name: "PINNACLE", emoji: "🏔️", events: "400+ daily" },
];

// Cricket events with live streaming + scores
export const CRICKET_LIVE_MATCHES = [
  { id: "clm1", league: "Bangladesh Premier League", team1: "Dhaka Dominators", team2: "Chattogram Challengers", score1: "178/4", overs1: "18.4", score2: "—", overs2: "—", status: "live", odds: { back1: 1.85, lay1: 1.87, back2: 2.10, lay2: 2.12, draw: 3.40 } as Record<string, number>, inning: "1st Innings" },
  { id: "clm2", league: "IPL 2025", team1: "Mumbai Indians", team2: "Chennai Super Kings", score1: "—", overs1: "—", score2: "—", overs2: "—", status: "upcoming", odds: { back1: 1.95, lay1: 1.97, back2: 1.90, lay2: 1.92 } as Record<string, number>, startTime: "Today 7:30 PM" },
  { id: "clm3", league: "Asia Cup", team1: "Bangladesh", team2: "India", score1: "—", overs1: "—", score2: "—", overs2: "—", status: "upcoming", odds: { back1: 2.40, lay1: 2.42, back2: 1.60, lay2: 1.62 } as Record<string, number>, startTime: "Tomorrow 2:00 PM" },
  { id: "clm4", league: "BPL T20", team1: "Sylhet Strikers", team2: "Khulna Tigers", score1: "145/6", overs1: "20", score2: "120/3", overs2: "15.2", status: "live", odds: { back1: 1.75, lay1: 1.77, back2: 2.25, lay2: 2.27 } as Record<string, number>, inning: "2nd Innings" },
];

// Tournament/Event system (HeyVIP-style cross-brand events)
export const TOURNAMENTS = [
  { id: "evt-fifa", title: "FIFA Grand Challenge", emoji: "⚽", prizePool: "৳10,000,000", participants: 5200, status: "active", endDate: "Aug 31", gradient: ["#065f46", "#0d9488"] as [string, string], category: "Sports" },
  { id: "evt-cricket-crown", title: "Cricket Crown Challenge", emoji: "🏏", prizePool: "৳5,000,000", participants: 3800, status: "active", endDate: "Sep 15", gradient: ["#0c4a6e", "#1d4ed8"] as [string, string], category: "Cricket" },
  { id: "evt-crazy-time", title: "Crazy Time Event Battle", emoji: "🎪", prizePool: "৳3,000,000", participants: 2400, status: "active", endDate: "Jul 31", gradient: ["#7c0000", "#991b1b"] as [string, string], category: "Casino" },
  { id: "evt-jili-macaw", title: "JILI Macaw Contest", emoji: "🦜", prizePool: "৳2,000,000", participants: 1800, status: "active", endDate: "Aug 10", gradient: ["#713f12", "#d97706"] as [string, string], category: "Slots" },
  { id: "evt-cash-hunt", title: "New Year Cash Hunt", emoji: "💰", prizePool: "৳8,000,000", participants: 6100, status: "upcoming", endDate: "Dec 31", gradient: ["#1e1b4b", "#4c1d95"] as [string, string], category: "Special" },
  { id: "evt-sv388", title: "SV388 Cockfight Campaign", emoji: "🐓", prizePool: "৳1,500,000", participants: 900, status: "active", endDate: "Aug 20", gradient: ["#7c0000", "#b91c1c"] as [string, string], category: "Cockfighting" },
];

// Event leaderboard data
export const EVENT_LEADERBOARD = [
  { rank: 1, username: "TigerBD", points: 158200, prize: "৳500,000" },
  { rank: 2, username: "DhakaKing", points: 142100, prize: "৳300,000" },
  { rank: 3, username: "CricketMaster", points: 135800, prize: "৳200,000" },
  { rank: 4, username: "LuckyBettor", points: 98700, prize: "৳100,000" },
  { rank: 5, username: "BPL_Fan", points: 87600, prize: "৳50,000" },
  { rank: 6, username: "SlotQueen", points: 76200, prize: "৳30,000" },
  { rank: 7, username: "NagadBoss", points: 65100, prize: "৳20,000" },
  { rank: 8, username: "ChaseRun", points: 54200, prize: "৳10,000" },
  { rank: 9, username: "SixMachine", points: 43800, prize: "৳5,000" },
  { rank: 10, username: "BoundaryKing", points: 32900, prize: "৳5,000" },
];

// RAF Leaderboard (JeetBuzz-style gamified referral)
export const RAF_LEADERBOARD = [
  { rank: 1, username: "SuperReferrer", referrals: 285, earned: "৳145,000" },
  { rank: 2, username: "NetworkKing", referrals: 231, earned: "৳118,000" },
  { rank: 3, username: "InviteMaster", referrals: 198, earned: "৳101,000" },
  { rank: 4, username: "ShareQueen", referrals: 167, earned: "৳85,000" },
  { rank: 5, username: "BDFriend", referrals: 143, earned: "৳73,000" },
  { rank: 6, username: "ConnectorBD", referrals: 121, earned: "৳62,000" },
  { rank: 7, username: "CrowdPuller", referrals: 98, earned: "৳50,000" },
  { rank: 8, username: "LinkMaster", referrals: 87, earned: "৳44,000" },
  { rank: 9, username: "ReferPro", referrals: 76, earned: "৳39,000" },
  { rank: 10, username: "GrowTogether", referrals: 65, earned: "৳33,000" },
];

// Cricket team sponsorships (Baji-style)
export const SPONSORS = [
  { name: "Dhaka Titans", league: "BPL 2025", role: "Title Sponsor", emoji: "🏏" },
  { name: "Chattogram Warriors", league: "BPL 2025", role: "Principal Sponsor", emoji: "🏏" },
  { name: "Rajshahi Royals", league: "BPL 2025", role: "Jersey Sponsor", emoji: "🏏" },
  { name: "Sylhet Lions", league: "BPL 2025", role: "Back Sponsor", emoji: "🏏" },
];

// Celebrity ambassadors (Baji-style)
export const AMBASSADORS = [
  { name: "Shakib Al Hasan", role: "Brand Ambassador", sport: "Cricket", emoji: "🏏", period: "2025-2027" },
  { name: "Tamim Iqbal", role: "Sports Ambassador", sport: "Cricket", emoji: "🏏", period: "2025-2026" },
  { name: "Mashrafe Mortaza", role: "Cricket Legend", sport: "Cricket", emoji: "🏏", period: "2025" },
  { name: "Sabina Khatun", role: "Football Ambassador", sport: "Football", emoji: "⚽", period: "2025-2026" },
];

// Local casual games (Baji-style LUDO, So De)
export const LOCAL_GAMES: BSLGame[] = [
  g("lg1", "LUDO Classic", "BSL Originals", "popular", "#065f46", "#0d9488", "🎲", { isNew: true, players: 1200 }),
  g("lg2", "So De", "BSL Originals", "popular", "#7c0000", "#991b1b", "🔢", { isNew: true, players: 800 }),
  g("lg3", "LUDO Express", "BSL Originals", "popular", "#1e3a5f", "#1d4ed8", "🎲", { players: 600 }),
  g("lg4", "Number Matka", "BSL Originals", "popular", "#713f12", "#b45309", "🎰", { players: 500 }),
];

// News & Updates (HeyVIP-style)
export const NEWS_ARTICLES = [
  { id: "news1", title: "BSL Gaming Becomes Title Sponsor of Dhaka Titans in BPL 2025", excerpt: "BSL Gaming announces major sponsorship deal with Dhaka Titans for the upcoming Bangladesh Premier League season.", date: "2025-07-10", category: "Sponsorship", emoji: "🏏" },
  { id: "news2", title: "New JILI Games Added: Over 50 New Slots Now Available", excerpt: "We've expanded our slots collection with 50+ new titles from JILI, including exclusive BSL Gaming releases.", date: "2025-07-08", category: "Games", emoji: "🎰" },
  { id: "news3", title: "Cricket Crown Challenge: ৳5 Million Prize Pool Live Now", excerpt: "Join our biggest cricket betting tournament with a massive ৳5,000,000 prize pool. Compete and win big.", date: "2025-07-05", category: "Tournament", emoji: "🏆" },
  { id: "news4", title: "bKash Instant Withdrawals Now Available 24/7", excerpt: "We're proud to announce 24/7 instant bKash withdrawals. Cash out your winnings anytime, anywhere in Bangladesh.", date: "2025-07-01", category: "Payment", emoji: "💗" },
  { id: "news5", title: "Welcome Bonus Increased to ৳10,000 for New Members", excerpt: "New players can now claim a 100% welcome bonus up to ৳10,000 BDT on their first deposit. Terms apply.", date: "2025-06-28", category: "Promotion", emoji: "🎁" },
  { id: "news6", title: "RAF Leaderboard: ৳3 Lakh Monthly Prize Pool Launches", excerpt: "Our gamified Refer-A-Friend leaderboard is live. Refer friends, climb ranks, and share a ৳3,00,000 monthly pool.", date: "2025-06-25", category: "Referral", emoji: "🤝" },
];

// Trust/License badges
export const TRUST_BADGES = [
  { label: "Curaçao License", sub: "No. 365/JAZ", emoji: "📜" },
  { label: "RNG Certified", sub: "Fair Play", emoji: "✅" },
  { label: "SSL Encrypted", sub: "256-bit", emoji: "🔒" },
  { label: "18+ Responsible Gaming", sub: "BeGambleAware", emoji: "🛡️" },
];

// Social media links
export const SOCIAL_LINKS = [
  { platform: "Telegram", handle: "@BSLGamingOfficial", href: "https://t.me/BSLGamingOfficial", emoji: "📨" },
  { platform: "WhatsApp", handle: "+880 1700-000000", href: "https://wa.me/8801700000000", emoji: "💬" },
  { platform: "Facebook", handle: "BSL Gaming BD", href: "https://facebook.com/bslgamingbd", emoji: "📘" },
  { platform: "YouTube", handle: "BSL Gaming", href: "https://youtube.com/@bslgaming", emoji: "📺" },
  { platform: "Instagram", handle: "@bslgaming", href: "https://instagram.com/bslgaming", emoji: "📸" },
];

// VIP tiers with rebate structure (Crickex/BetJili-style)
export const VIP_TIERS = [
  { tier: "Bronze", emoji: "🥉", threshold: "৳0", cashback: "0.5%", rebate: "0.3%", withdrawalLimit: "৳50,000/day", perks: ["Standard support", "Birthday bonus ৳500"] },
  { tier: "Silver", emoji: "🥈", threshold: "৳50,000", cashback: "0.8%", rebate: "0.5%", withdrawalLimit: "৳1,00,000/day", perks: ["Priority support", "Birthday bonus ৳1,000", "Monthly cashback ৳2,000"] },
  { tier: "Gold", emoji: "🥇", threshold: "৳2,00,000", cashback: "1.0%", rebate: "0.8%", withdrawalLimit: "৳3,00,000/day", perks: ["VIP support line", "Birthday bonus ৳3,000", "Weekly cashback ৳5,000", "Exclusive promos"] },
  { tier: "Platinum", emoji: "💎", threshold: "৳5,00,000", cashback: "1.2%", rebate: "1.0%", withdrawalLimit: "৳5,00,000/day", perks: ["Dedicated manager", "Birthday bonus ৳5,000", "Daily cashback ৳3,000", "Festival bonuses", "Event invitations"] },
  { tier: "Diamond", emoji: "👑", threshold: "৳10,00,000", cashback: "1.5%", rebate: "1.21%", withdrawalLimit: "Unlimited", perks: ["Personal VIP host", "Birthday bonus ৳10,000", "Daily cashback ৳10,000", "Custom limits", "Luxury gifts", "Exclusive tournament access"] },
];

// Affiliate commission tiers
export const AFFILIATE_TIERS = [
  { tier: "Starter", commission: "25%", requirement: "1-10 active players", monthlyBonus: "৳5,000" },
  { tier: "Silver", commission: "30%", requirement: "11-50 active players", monthlyBonus: "৳15,000" },
  { tier: "Gold", commission: "35%", requirement: "51-200 active players", monthlyBonus: "৳50,000" },
  { tier: "Platinum", commission: "40%", requirement: "201-500 active players", monthlyBonus: "৳1,50,000" },
  { tier: "Diamond", commission: "45%", requirement: "500+ active players", monthlyBonus: "৳5,00,000" },
];

// Additional providers (expanded from research)
export const EXTRA_PROVIDERS = [
  { name: "MICROGAMING", emoji: "🎰" },
  { name: "PLAY'N GO", emoji: "🎮" },
  { name: "RED TIGER", emoji: "🐯" },
  { name: "PLAYTECH", emoji: "🅿️" },
  { name: "NETENT", emoji: "💎" },
  { name: "CQ9", emoji: "🎲" },
  { name: "RICH88", emoji: "💰" },
  { name: "FASTSPIN", emoji: "⚡" },
  { name: "KING MAKER", emoji: "👑" },
  { name: "SPRIBE", emoji: "🚀" },
  { name: "AE SEXY", emoji: "💃" },
  { name: "BIG GAMING", emoji: "🎮" },
  { name: "SABA SPORTS", emoji: "📊" },
  { name: "SBOBET", emoji: "⚽" },
];

// Promo calendar (JeetBuzz-style category-specific promo calendars)
export const PROMO_CALENDAR = [
  { category: "Slots", title: "JILI Slots Festival", prize: "৳9,00,000", dateRange: "Jul 1 - Jul 31", emoji: "🎰", status: "active" },
  { category: "Sports", title: "Sports Cashback Festival", prize: "৳12,00,000", dateRange: "Jul 1 - Jul 31", emoji: "⚽", status: "active" },
  { category: "Live Casino", title: "Crazy Time Battle", prize: "৳6,00,000", dateRange: "Jul 15 - Aug 15", emoji: "🎪", status: "active" },
  { category: "Crash", title: "Aviator Cash Hunt", prize: "৳4,00,000", dateRange: "Jul 1 - Jul 31", emoji: "✈️", status: "active" },
  { category: "Fishing", title: "Deep Sea Bounty", prize: "৳3,00,000", dateRange: "Aug 1 - Aug 31", emoji: "🎣", status: "upcoming" },
  { category: "Cockfighting", title: "SV388 Derby Cup", prize: "৳2,00,000", dateRange: "Aug 1 - Aug 31", emoji: "🐓", status: "upcoming" },
];
