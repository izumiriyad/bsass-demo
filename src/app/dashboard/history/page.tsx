import type { Metadata } from "next";
import { TrendingUp, TrendingDown, Gift, Gamepad2 } from "lucide-react";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";

export const metadata: Metadata = { title: "Transaction History" };

const TRANSACTIONS = [
  { id: 1, type: "deposit", label: "Deposit via bKash", amount: 5000, date: new Date(Date.now() - 1000 * 60 * 30) },
  { id: 2, type: "win", label: "Won on Aviator", amount: 2300, date: new Date(Date.now() - 1000 * 60 * 90) },
  { id: 3, type: "loss", label: "Lost on Crazy Time", amount: -800, date: new Date(Date.now() - 1000 * 60 * 60 * 3) },
  { id: 4, type: "bonus", label: "Welcome bonus credited", amount: 500, date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
  { id: 5, type: "withdraw", label: "Withdrawal to Nagad", amount: -2000, date: new Date(Date.now() - 1000 * 60 * 60 * 48) },
  { id: 6, type: "deposit", label: "Deposit via Rocket", amount: 2000, date: new Date(Date.now() - 1000 * 60 * 60 * 72) },
  { id: 7, type: "win", label: "Won on Gates of Olympus", amount: 4500, date: new Date(Date.now() - 1000 * 60 * 60 * 96) },
  { id: 8, type: "loss", label: "Lost on Sweet Bonanza", amount: -1200, date: new Date(Date.now() - 1000 * 60 * 60 * 120) },
  { id: 9, type: "deposit", label: "Deposit via Nagad", amount: 10000, date: new Date(Date.now() - 1000 * 60 * 60 * 144) },
  { id: 10, type: "withdraw", label: "Withdrawal to bKash", amount: -5000, date: new Date(Date.now() - 1000 * 60 * 60 * 168) },
];

function getIcon(type: string) {
  switch (type) {
    case "deposit":
      return TrendingUp;
    case "withdraw":
      return TrendingDown;
    case "bonus":
      return Gift;
    default:
      return Gamepad2;
  }
}

function getColor(type: string) {
  switch (type) {
    case "deposit":
    case "win":
      return "#00a86d";
    case "withdraw":
    case "loss":
      return "#ef4444";
    case "bonus":
      return "#a855f7";
    default:
      return "#9ca3af";
  }
}

export default async function HistoryPage() {
  const user = await getSessionUser();
  if (!user) return null;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#f0f0f0] sm:text-2xl">Transaction History</h1>
        <p className="text-sm text-[#9ca3af]">Your recent deposits, withdrawals, and game activity</p>
      </div>

      <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4">
        <div className="space-y-2">
          {TRANSACTIONS.map((tx) => {
            const Icon = getIcon(tx.type);
            const color = getColor(tx.type);
            return (
              <div key={tx.id} className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${color}20` }}>
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#f0f0f0]">{tx.label}</p>
                    <p className="text-xs text-[#6b7280]">{timeAgo(tx.date)}</p>
                  </div>
                </div>
                <p className="text-sm font-bold" style={{ color }}>
                  {tx.amount > 0 ? "+" : ""}
                  {formatBDT(tx.amount)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
