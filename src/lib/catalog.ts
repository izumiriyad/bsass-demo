import type {
  Category,
  Game,
  Promotion,
  Provider,
  SportEvent,
} from "@/lib/types";

export const SITE = {
  name: "Playverse",
  tagline: "Where every game comes alive",
  description:
    "Playverse is a premier online gaming entertainment hub featuring thousands of slots, live dealer tables, sports markets, and arcade games — with fast payouts, fair play, and 24/7 support.",
  url: "https://playverse.example.com",
  locale: "en-PH",
  currency: "PHP",
  supportEmail: "support@playverse.example.com",
};

export const CATEGORIES: Category[] = [
  {
    id: "slots",
    name: "Slots",
    tagline: "Spin to win",
    emoji: "🎰",
    gradient: ["#7c3aed", "#db2777"],
    accent: "#db2777",
  },
  {
    id: "live-casino",
    name: "Live Casino",
    tagline: "Real dealers, real thrill",
    emoji: "🃏",
    gradient: ["#0ea5e9", "#7c3aed"],
    accent: "#0ea5e9",
  },
  {
    id: "sports",
    name: "Sports",
    tagline: "Bet on the action",
    emoji: "⚽",
    gradient: ["#22c55e", "#0ea5e9"],
    accent: "#22c55e",
  },
  {
    id: "fishing",
    name: "Fishing",
    tagline: "Catch the big one",
    emoji: "🎣",
    gradient: ["#06b6d4", "#3b82f6"],
    accent: "#06b6d4",
  },
  {
    id: "crash",
    name: "Crash",
    tagline: "Cash out in time",
    emoji: "🚀",
    gradient: ["#f97316", "#ef4444"],
    accent: "#f97316",
  },
  {
    id: "arcade",
    name: "Arcade",
    tagline: "Instant fun",
    emoji: "🕹️",
    gradient: ["#a855f7", "#6366f1"],
    accent: "#a855f7",
  },
  {
    id: "poker",
    name: "Poker",
    tagline: "Read the table",
    emoji: "♠️",
    gradient: ["#14b8a6", "#0ea5e9"],
    accent: "#14b8a6",
  },
];

export const PROVIDERS: Provider[] = [
  { id: "nova-star", name: "NovaStar", emoji: "✨", games: 480 },
  { id: "quantum-play", name: "QuantumPlay", emoji: "⚛️", games: 360 },
  { id: "lunar-games", name: "LunarGames", emoji: "🌙", games: 290 },
  { id: "prism-live", name: "PrismLive", emoji: "🔷", games: 210 },
  { id: "vertex-studios", name: "Vertex Studios", emoji: "🔺", games: 175 },
  { id: "aurora-networks", name: "Aurora Networks", emoji: "🌌", games: 140 },
  { id: "helix-interactive", name: "Helix Interactive", emoji: "🧬", games: 120 },
];

interface Seed {
  title: string;
  category: Game["category"];
  provider: string;
  emoji: string;
  gradient: [string, string];
  rtp: number;
  tags: string[];
  description: string;
  hot?: boolean;
  new?: boolean;
  featured?: boolean;
}

const SEEDS: Seed[] = [
  // Slots
  {
    title: "Galactic Gold",
    category: "slots",
    provider: "NovaStar",
    emoji: "🪐",
    gradient: ["#7c3aed", "#1e1b4b"],
    rtp: 96.5,
    tags: ["5-Reel", "Free Spins", "Megaways"],
    description:
      "Chart the cosmos and collect stardust multipliers across 117,649 ways to win in this deep-space slot adventure.",
    hot: true,
    featured: true,
  },
  {
    title: "Pharaoh's Vault",
    category: "slots",
    provider: "LunarGames",
    emoji: "🏺",
    gradient: ["#f59e0b", "#7c2d12"],
    rtp: 96.2,
    tags: ["Egyptian", "Bonus Buy", "Jackpot"],
    description:
      "Unlock the sealed tomb of the pharaoh and trigger expanding symbols for monumental treasure.",
    hot: true,
  },
  {
    title: "Neon Safari",
    category: "slots",
    provider: "QuantumPlay",
    emoji: "🦒",
    gradient: ["#22d3ee", "#0e7490"],
    rtp: 96.8,
    tags: ["Animals", "Cascading", "High Volatility"],
    description:
      "A vibrant savanna at midnight where cascading wins and neon wilds light up the reels.",
    new: true,
    featured: true,
  },
  {
    title: "Crystal Empress",
    category: "slots",
    provider: "Aurora Networks",
    emoji: "💎",
    gradient: ["#ec4899", "#7c3aed"],
    rtp: 97.1,
    tags: ["Jewels", "Sticky Wilds", "Free Spins"],
    description:
      "The Crystal Empress bestows sticky wilds and escalating multipliers across frozen reels.",
    featured: true,
  },
  {
    title: "Dragon Hoard",
    category: "slots",
    provider: "Vertex Studios",
    emoji: "🐉",
    gradient: ["#ef4444", "#7f1d1d"],
    rtp: 96.0,
    tags: ["Fantasy", "Megaways", "Jackpot"],
    description:
      "Face the ancient dragon and seize its golden hoard with random mega multipliers.",
    hot: true,
  },
  {
    title: "Sugar Sprint",
    category: "slots",
    provider: "NovaStar",
    emoji: "🍭",
    gradient: ["#f472b6", "#be185d"],
    rtp: 96.4,
    tags: ["Candy", "Cluster Pays", "Tumbling"],
    description:
      "A candy-coated wonderland of tumbling clusters and sugar-rush multipliers.",
    new: true,
  },
  {
    title: "Mystic Oasis",
    category: "slots",
    provider: "QuantumPlay",
    emoji: "🌴",
    gradient: ["#10b981", "#065f46"],
    rtp: 96.7,
    tags: ["Adventure", "Expanding Wilds"],
    description:
      "Discover the hidden oasis where wilds expand across the reels for refreshing wins.",
  },
  {
    title: "Cyber Heist",
    category: "slots",
    provider: "Helix Interactive",
    emoji: "💾",
    gradient: ["#6366f1", "#1e1b4b"],
    rtp: 96.9,
    tags: ["Cyberpunk", "Bonus Buy", "Multipliers"],
    description:
      "Hack the mainframe and escape with the loot in this high-voltage cyberpunk caper.",
    new: true,
    hot: true,
  },
  // Live Casino
  {
    title: "Velocity Roulette",
    category: "live-casino",
    provider: "PrismLive",
    emoji: "🎯",
    gradient: ["#0ea5e9", "#0c4a6e"],
    rtp: 97.3,
    tags: ["Roulette", "HD Stream", "Multi-Camera"],
    description:
      "A lightning-fast roulette experience streamed in HD with multi-angle cameras and instant payouts.",
    hot: true,
    featured: true,
  },
  {
    title: "Royal Baccarat",
    category: "live-casino",
    provider: "PrismLive",
    emoji: "👑",
    gradient: ["#a855f7", "#4c1d95"],
    rtp: 98.9,
    tags: ["Baccarat", "No Commission", "Side Bets"],
    description:
      "Experience the elegance of no-commission baccarat with professional live dealers and side-bet action.",
    featured: true,
  },
  {
    title: "Blackjack Royale",
    category: "live-casino",
    provider: "PrismLive",
    emoji: "🂡",
    gradient: ["#14b8a6", "#134e4a"],
    rtp: 99.3,
    tags: ["Blackjack", "VIP Tables", "Bet Behind"],
    description:
      "Classic 21 with VIP tables, bet-behind features, and the best RTP on the floor.",
    hot: true,
  },
  {
    title: "Mega Spin Wheel",
    category: "live-casino",
    provider: "Aurora Networks",
    emoji: "🎡",
    gradient: ["#f59e0b", "#b45309"],
    rtp: 96.9,
    tags: ["Game Show", "Multipliers", "Live"],
    description:
      "Spin the giant wheel with a live host for a chance at world-class multiplier segments.",
    new: true,
  },
  {
    title: "Sic Bo Supreme",
    category: "live-casino",
    provider: "PrismLive",
    emoji: "🎲",
    gradient: ["#ef4444", "#7f1d1d"],
    rtp: 97.2,
    tags: ["Dice", "Live", "Big/Small"],
    description:
      "The classic three-dice game streamed live with dozens of betting combinations.",
  },
  // Fishing
  {
    title: "Ocean Hunter",
    category: "fishing",
    provider: "Vertex Studios",
    emoji: "🦈",
    gradient: ["#06b6d4", "#0e7490"],
    rtp: 96.6,
    tags: ["Shooter", "Multiplayer", "Boss Fights"],
    description:
      "Team up to blast the deep-sea boss and split the jackpot bounty with your crew.",
    hot: true,
    featured: true,
  },
  {
    title: "Deep Sea Bounty",
    category: "fishing",
    provider: "Helix Interactive",
    emoji: "🐙",
    gradient: ["#3b82f6", "#1e3a8a"],
    rtp: 96.3,
    tags: ["Shooter", "Cannon Upgrades"],
    description:
      "Upgrade your cannon and reel in legendary sea creatures for escalating rewards.",
    new: true,
  },
  {
    title: "Golden Shoal",
    category: "fishing",
    provider: "NovaStar",
    emoji: "🐠",
    gradient: ["#f59e0b", "#92400e"],
    rtp: 96.8,
    tags: ["Casual", "Relaxed"],
    description:
      "A relaxed fishing experience perfect for casual sessions and steady returns.",
  },
  // Crash
  {
    title: "Rocket Crash",
    category: "crash",
    provider: "QuantumPlay",
    emoji: "🚀",
    gradient: ["#f97316", "#7c2d12"],
    rtp: 97.0,
    tags: ["Crash", "Auto Cashout", "Provably Fair"],
    description:
      "Watch the rocket climb and cash out before it crashes in this provably-fair multiplier game.",
    hot: true,
    featured: true,
  },
  {
    title: "Comet Climb",
    category: "crash",
    provider: "Helix Interactive",
    emoji: "☄️",
    gradient: ["#8b5cf6", "#4c1d95"],
    rtp: 96.9,
    tags: ["Crash", "In-Play"],
    description:
      "Race the comet to record altitudes and lock in your winnings with split cash-outs.",
    new: true,
  },
  {
    title: "Meteor Multiplier",
    category: "crash",
    provider: "QuantumPlay",
    emoji: "🌠",
    gradient: ["#ec4899", "#831843"],
    rtp: 96.7,
    tags: ["Crash", "Fast-Paced"],
    description:
      "A fast-paced crash variant with meteoric multipliers and rapid rounds.",
  },
  // Arcade
  {
    title: "Plinko Pro",
    category: "arcade",
    provider: "Vertex Studios",
    emoji: "🟣",
    gradient: ["#a855f7", "#581c87"],
    rtp: 97.2,
    tags: ["Arcade", "Provably Fair", "Instant"],
    description:
      "Drop the ball and watch it cascade through a forest of pegs toward high-multiplier slots.",
    hot: true,
    featured: true,
  },
  {
    title: "Minesweeper X",
    category: "arcade",
    provider: "Helix Interactive",
    emoji: "💣",
    gradient: ["#ef4444", "#450a0a"],
    rtp: 97.0,
    tags: ["Arcade", "Strategy", "Instant"],
    description:
      "Reveal tiles to grow your multiplier — but watch out for the hidden mines.",
    new: true,
  },
  {
    title: "Dice Duel",
    category: "arcade",
    provider: "QuantumPlay",
    emoji: "🎲",
    gradient: ["#22d3ee", "#0e7490"],
    rtp: 98.0,
    tags: ["Dice", "Custom Odds"],
    description:
      "Set your own odds and roll the dice in this flexible, player-controlled classic.",
  },
  {
    title: "Tower Climb",
    category: "arcade",
    provider: "Vertex Studios",
    emoji: "🗼",
    gradient: ["#10b981", "#064e3b"],
    rtp: 96.8,
    tags: ["Arcade", "Risk/Reward"],
    description:
      "Climb the tower one safe step at a time — each level raises your reward and the risk.",
  },
  // Poker
  {
    title: "Texas Hold'em",
    category: "poker",
    provider: "PrismLive",
    emoji: "♠️",
    gradient: ["#0ea5e9", "#0c4a6e"],
    rtp: 98.5,
    tags: ["Poker", "Ring Games", "Tournaments"],
    description:
      "The world's favorite poker variant with cash rings and multi-table tournaments around the clock.",
    hot: true,
    featured: true,
  },
  {
    title: "Omaha Tables",
    category: "poker",
    provider: "PrismLive",
    emoji: "♣️",
    gradient: ["#a855f7", "#4c1d95"],
    rtp: 98.2,
    tags: ["Poker", "Four-Card"],
    description:
      "Four hole cards, twice the action. Omaha brings explosive pots and big draws.",
    new: true,
  },
  {
    title: "Casino Hold'em",
    category: "poker",
    provider: "Aurora Networks",
    emoji: "♥️",
    gradient: ["#ef4444", "#7f1d1d"],
    rtp: 97.8,
    tags: ["Poker", "vs Dealer"],
    description:
      "Beat the dealer's hand in this house-banked poker favorite with a lucrative bonus side bet.",
  },
];

export const GAMES: Game[] = SEEDS.map((s, i) => {
  const slug =
    s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") +
    "-" +
    (i + 1);
  return {
    id: slug,
    slug,
    title: s.title,
    category: s.category,
    provider: s.provider,
    tags: s.tags,
    emoji: s.emoji,
    gradient: s.gradient,
    rtp: s.rtp,
    minBet: 1,
    maxBet: 50000,
    rating: Math.round((4 + ((i * 7) % 10) / 10) * 10) / 10,
    players: 120 + ((i * 137) % 4800),
    description: s.description,
    isHot: s.hot,
    isNew: s.new,
    isFeatured: s.featured,
    jackpot: s.tags.includes("Jackpot")
      ? 4_000_000 + ((i * 999983) % 6_000_000)
      : undefined,
  };
});

export const PROMOTIONS: Promotion[] = [
  {
    id: "welcome-100",
    slug: "welcome-bonus-100",
    title: "100% Welcome Bonus",
    summary: "Double your first deposit up to ₱20,000",
    description:
      "New to Playverse? We'll match your first deposit 100% up to ₱20,000 so you can explore our full library of games with twice the bankroll. Simply make your first deposit and the bonus is credited instantly.",
    badge: "New Player",
    emoji: "🎁",
    gradient: ["#7c3aed", "#db2777"],
    reward: "Up to ₱20,000",
    code: "WELCOME100",
    terms: [
      "Available to new verified accounts only.",
      "Minimum qualifying deposit of ₱500.",
      "Wagering requirement of 25x the bonus amount.",
      "Bonus expires 14 days after activation.",
      "Maximum bet while wagering is ₱500 per round.",
    ],
  },
  {
    id: "daily-cashback",
    slug: "daily-cashback-15",
    title: "15% Daily Cashback",
    summary: "Get up to 15% back every single day",
    description:
      "Turn unlucky streaks into a safety net. Playverse returns up to 15% of your daily net losses as real, withdrawable cash — credited automatically every morning with zero wagering requirements.",
    badge: "Recurring",
    emoji: "💸",
    gradient: ["#22c55e", "#0ea5e9"],
    reward: "Up to ₱50,000/day",
    code: "CASHBACK15",
    terms: [
      "Calculated on net losses between 00:00 and 23:59 (PHT).",
      "Cashback is credited by 10:00 the following day.",
      "No wagering requirement — instantly withdrawable.",
      "Maximum daily cashback is ₱50,000.",
    ],
  },
  {
    id: "free-spins",
    slug: "weekly-free-spins",
    title: "120 Weekly Free Spins",
    summary: "Claim free spins every week on top slots",
    description:
      "Active players earn free spins on a rotating selection of our hottest slots. Make three deposits during the week and unlock 120 free spins to use over the weekend.",
    badge: "Weekly",
    emoji: "🌀",
    gradient: ["#f59e0b", "#ef4444"],
    reward: "120 Free Spins",
    code: "SPINS120",
    terms: [
      "Requires a minimum of three deposits during the week.",
      "Free spins are valid on selected titles only.",
      "Winnings carry a 20x wagering requirement.",
      "Free spins expire 72 hours after being credited.",
    ],
  },
  {
    id: "referral",
    slug: "refer-a-friend",
    title: "Refer a Friend",
    summary: "Earn ₱1,000 for every friend who joins",
    description:
      "Share the fun and get rewarded. For every friend who registers with your referral link and makes their first deposit, you'll both receive ₱1,000 in bonus credit.",
    badge: "Social",
    emoji: "🤝",
    gradient: ["#06b6d4", "#3b82f6"],
    reward: "₱1,000 per friend",
    terms: [
      "Friend must verify their account and deposit a minimum of ₱500.",
      "Referral bonus carries a 15x wagering requirement.",
      "No limit on the number of friends you can refer.",
      "Self-referrals are not permitted.",
    ],
  },
  {
    id: "reload",
    slug: "weekend-reload-50",
    title: "50% Weekend Reload",
    summary: "Top up every Saturday and Sunday",
    description:
      "Weekends just got better. Claim a 50% reload bonus on your weekend deposits and keep the momentum going with extra credit on your favorite games.",
    badge: "Weekend",
    emoji: "🔥",
    gradient: ["#ec4899", "#7c3aed"],
    reward: "Up to ₱10,000",
    code: "WEEKEND50",
    terms: [
      "Available every Saturday and Sunday.",
      "Minimum deposit of ₱300.",
      "Wagering requirement of 20x the bonus amount.",
      "One reload bonus per day.",
    ],
  },
  {
    id: "tournament",
    slug: "monthly-slots-race",
    title: "Monthly Slots Race",
    summary: "Compete for a ₱1,000,000 prize pool",
    description:
      "Spin your way up the leaderboard in our monthly slots race. The top 500 players share a massive ₱1,000,000 prize pool based on their multiplier winnings.",
    badge: "Tournament",
    emoji: "🏆",
    gradient: ["#f6b73c", "#d97706"],
    reward: "₱1,000,000 pool",
    terms: [
      "Open to all verified players.",
      "Points awarded for every win multiplier achieved.",
      "Prizes distributed within 48 hours of the race ending.",
      "Leaderboard updates in real time.",
    ],
  },
];

const TEAMS = [
  { name: "Manila Mariners", emoji: "⛵" },
  { name: "Cebu Cobras", emoji: "🐍" },
  { name: "Davao Eagles", emoji: "🦅" },
  { name: "Quezon Knights", emoji: "🐎" },
  { name: "Makati Bulls", emoji: "🐂" },
  { name: "Pasig Sharks", emoji: "🦈" },
];

export const SPORT_EVENTS: SportEvent[] = [
  {
    id: "e1",
    league: "PBA Cup",
    sport: "Basketball",
    startTime: new Date(Date.now() + 1000 * 60 * 45).toISOString(),
    status: "live",
    minute: "Q2 06:43",
    participants: [TEAMS[0], TEAMS[1]],
    market: { label: "Match Winner", odds: [1.85, 4.2, 2.1] },
  },
  {
    id: "e2",
    league: "Premier Liga",
    sport: "Football",
    startTime: new Date(Date.now() + 1000 * 60 * 12).toISOString(),
    status: "live",
    minute: "67'",
    participants: [TEAMS[2], TEAMS[3]],
    market: { label: "Match Winner", odds: [2.4, 3.1, 2.9] },
  },
  {
    id: "e3",
    league: "World Tour",
    sport: "Tennis",
    startTime: new Date(Date.now() + 1000 * 60 * 90).toISOString(),
    status: "upcoming",
    participants: [TEAMS[4], TEAMS[5]],
    market: { label: "Match Winner", odds: [1.55, 0, 2.45] },
  },
  {
    id: "e4",
    league: "Esports Pro",
    sport: "Esports",
    startTime: new Date(Date.now() + 1000 * 60 * 150).toISOString(),
    status: "upcoming",
    participants: [TEAMS[1], TEAMS[4]],
    market: { label: "Match Winner", odds: [1.7, 0, 2.15] },
  },
  {
    id: "e5",
    league: "Premier Liga",
    sport: "Football",
    startTime: new Date(Date.now() + 1000 * 60 * 240).toISOString(),
    status: "upcoming",
    participants: [TEAMS[0], TEAMS[5]],
    market: { label: "Match Winner", odds: [2.0, 3.3, 3.6] },
  },
  {
    id: "e6",
    league: "PBA Cup",
    sport: "Basketball",
    startTime: new Date(Date.now() + 1000 * 60 * 320).toISOString(),
    status: "upcoming",
    participants: [TEAMS[2], TEAMS[5]],
    market: { label: "Match Winner", odds: [1.9, 4.5, 2.05] },
  },
];

export const JACKPOT_BASE = 18_452_119;

/** Recent big winners, deterministically generated for the live ticker. */
export function getRecentWinners(): {
  username: string;
  amount: number;
  game: string;
}[] {
  const names = [
    "Mark",
    "Andrea",
    "J***7",
    "Ram",
    "Selena",
    "K***2",
    "Diego",
    "Yuki",
    "Pablo",
    "Nina",
    "V***9",
    "Hassan",
  ];
  return names.map((name, i) => ({
    username: name.length > 3 ? `${name[0]}***${name.at(-1)}` : name,
    amount: 4_200 + ((i * 8731) % 96_000),
    game: GAMES[(i * 5) % GAMES.length].title,
  }));
}

export const STATS = [
  { label: "Games", value: "2,500+" },
  { label: "Active players", value: "180K+" },
  { label: "Paid out", value: "₱4.8B" },
  { label: "Avg. payout", value: "3 min" },
];

export const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Payouts",
    description:
      "Withdrawals processed in an average of three minutes, 24 hours a day.",
  },
  {
    icon: "🔒",
    title: "Bank-Grade Security",
    description:
      "256-bit encryption and rigorous fair-play auditing keep your account safe.",
  },
  {
    icon: "📱",
    title: "Play Anywhere",
    description:
      "A flawless experience across desktop, tablet, and mobile — no app required.",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    description:
      "Real humans on live chat and email, any time of day or night.",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up in under a minute with just an email and password. No documents needed to explore.",
  },
  {
    step: "02",
    title: "Claim your bonus",
    description:
      "Make your first deposit and instantly double your bankroll with our welcome offer.",
  },
  {
    step: "03",
    title: "Start playing",
    description:
      "Dive into 2,500+ games, place bets, and cash out your winnings whenever you like.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "Slots enthusiast",
    quote:
      "The withdrawals are genuinely instant. I cashed out at 2am and had the money before my coffee was cold.",
    rating: 5,
  },
  {
    name: "Bea T.",
    role: "Live casino regular",
    quote:
      "The live dealers are professional and the streaming is crystal clear. Royal Baccarat is my go-to.",
    rating: 5,
  },
  {
    name: "Jun R.",
    role: "Sports bettor",
    quote:
      "Best odds I've found locally and the live betting updates are lightning fast. Highly recommended.",
    rating: 4,
  },
];

export const FAQS = [
  {
    q: "Is Playverse free to join?",
    a: "Yes. Creating an account is completely free. You can browse the entire library, claim promotions, and even try demo play before ever making a deposit.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Most withdrawals are processed within three minutes. The exact time depends on your chosen payment method, but we process requests 24/7.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support major credit and debit cards, e-wallets such as GCash and Maya, bank transfers, and selected cryptocurrencies. All methods are encrypted end to end.",
  },
  {
    q: "Are the games fair?",
    a: "Absolutely. Every game uses a certified random number generator and is independently audited for fairness. RTP percentages are published on each game's detail page.",
  },
  {
    q: "Can I play on my phone?",
    a: "Yes. Playverse is fully responsive and works beautifully on any modern smartphone or tablet directly from your browser — no download required.",
  },
  {
    q: "How does the VIP program work?",
    a: "You earn VIP points with every wager. As you climb through five tiers, you unlock cashback, a personal account manager, faster withdrawals, and exclusive bonuses.",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: string): Game[] {
  return GAMES.filter((g) => g.category === category);
}
