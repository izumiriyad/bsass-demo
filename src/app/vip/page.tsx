import { WinnersTicker } from "@/components/bj88/tickers";

export const metadata = { title: "VIP Club" };

const TIERS = [
  { name: "Bronze", emoji: "🥉", threshold: "0 pts", cashback: "5%", perks: ["Weekly bonus", "Email support", "Birthday bonus"] },
  { name: "Silver", emoji: "🥈", threshold: "10,000 pts", cashback: "8%", perks: ["Priority support", "Reload bonus", "Free spins"] },
  { name: "Gold", emoji: "🥇", threshold: "50,000 pts", cashback: "12%", perks: ["Faster withdrawals", "Personal manager", "Monthly cashback"] },
  { name: "Platinum", emoji: "💠", threshold: "200,000 pts", cashback: "15%", perks: ["Higher limits", "Exclusive events", "Custom bonuses"] },
  { name: "Diamond", emoji: "💎", threshold: "1,000,000 pts", cashback: "20%", perks: ["VIP host 24/7", "Luxury gifts", "Top-tier rewards"] },
];

export default function VipPage() {
  return (
    <div className="px-4 py-4 lg:px-6">
      <div className="mb-4">
        <WinnersTicker />
      </div>
      <h1 className="mb-6 flex items-center gap-2 text-xl font-black uppercase text-white">
        <span className="text-2xl">👑</span> VIP Club
      </h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {TIERS.map((t, i) => (
          <div
            key={t.name}
            className={`rounded-xl border p-5 ${i >= 3 ? "border-[#f0b429]/40 bg-gradient-to-b from-[#f0b429]/10 to-transparent" : "border-[#1a1a2e] bg-[#1a1a2e]"}`}
          >
            <div className="text-3xl">{t.emoji}</div>
            <h3 className="mt-2 text-lg font-bold text-white">{t.name}</h3>
            <div className="text-xs text-gray-400">{t.threshold}</div>
            <div className="mt-3 text-2xl font-black text-[#f0b429]">
              {t.cashback}<span className="text-xs font-normal text-gray-400"> cashback</span>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-400">
              {t.perks.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <span className="text-[#f0b429]">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
