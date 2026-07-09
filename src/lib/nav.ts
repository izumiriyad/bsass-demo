export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Live Casino", href: "/live-casino" },
  { label: "Sports", href: "/sport" },
  { label: "Slots", href: "/slots" },
  { label: "Promotions", href: "/promotions" },
  { label: "VIP", href: "/vip" },
];

export const GAME_NAV: NavItem[] = [
  { label: "Slots", href: "/games?category=slots", description: "Spin the reels" },
  {
    label: "Live Casino",
    href: "/games?category=live-casino",
    description: "Real dealers",
  },
  { label: "Sports", href: "/sport", description: "Live betting" },
  {
    label: "Fishing",
    href: "/games?category=fishing",
    description: "Arcade shooters",
  },
  { label: "Crash", href: "/games?category=crash", description: "Cash out fast" },
  { label: "Arcade", href: "/games?category=arcade", description: "Instant wins" },
  { label: "Poker", href: "/games?category=poker", description: "Beat the table" },
];

export const COMPANY_NAV: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "VIP Club", href: "/vip" },
  { label: "Promotions", href: "/promotions" },
  { label: "Support", href: "/support" },
  { label: "FAQ", href: "/faq" },
];

export const LEGAL_NAV: NavItem[] = [
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const PAYMENT_METHODS = [
  { name: "GCash", emoji: "💚" },
  { name: "Maya", emoji: "🟣" },
  { name: "Visa", emoji: "💳" },
  { name: "Mastercard", emoji: "💳" },
  { name: "Bank Transfer", emoji: "🏦" },
  { name: "Bitcoin", emoji: "₿" },
  { name: "USDT", emoji: "🪙" },
];

export const PAYMENT_OPTIONS = [
  { id: "gcash", name: "GCash", emoji: "💚", fee: "Free", time: "Instant" },
  { id: "maya", name: "Maya", emoji: "🟣", fee: "Free", time: "Instant" },
  { id: "card", name: "Card", emoji: "💳", fee: "1.5%", time: "Instant" },
  { id: "bank", name: "Bank Transfer", emoji: "🏦", fee: "Free", time: "1–3 hrs" },
  { id: "crypto", name: "Crypto", emoji: "₿", fee: "Free", time: "Instant" },
];
