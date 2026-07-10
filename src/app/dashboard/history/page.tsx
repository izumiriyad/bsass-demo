import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

interface Txn {
  id: string;
  type: "deposit" | "withdraw" | "bonus" | "bet" | "win";
  method: string;
  amount: number;
  date: Date;
}

const TRANSACTIONS: Txn[] = [
  { id: "t1", type: "deposit", method: "bKash", amount: 1000, date: new Date(Date.now() - 1000 * 60 * 35) },
  { id: "t2", type: "win", method: "Crazy Time", amount: 2450, date: new Date(Date.now() - 1000 * 60 * 60 * 3) },
  { id: "t3", type: "bet", method: "Gates of Olympus", amount: -500, date: new Date(Date.now() - 1000 * 60 * 60 * 5) },
  { id: "t4", type: "bonus", method: "Daily Login", amount: 100, date: new Date(Date.now() - 1000 * 60 * 60 * 8) },
  { id: "t5", type: "withdraw", method: "Nagad", amount: -3000, date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
  { id: "t6", type: "deposit", method: "Rocket", amount: 2000, date: new Date(Date.now() - 1000 * 60 * 60 * 26) },
  { id: "t7", type: "win", method: "Aviator", amount: 1800, date: new Date(Date.now() - 1000 * 60 * 60 * 30) },
  { id: "t8", type: "bet", method: "Mega Wheel", amount: -750, date: new Date(Date.now() - 1000 * 60 * 60 * 36) },
  { id: "t9", type: "bonus", method: "Welcome Credit", amount: 500, date: new Date(Date.now() - 1000 * 60 * 60 * 48) },
  { id: "t10", type: "deposit", method: "Crypto", amount: 5000, date: new Date(Date.now() - 1000 * 60 * 60 * 72) },
];

const TYPE_META: Record<Txn["type"], { label: string; emoji: string }> = {
  deposit: { label: "Deposit", emoji: "📥" },
  withdraw: { label: "Withdrawal", emoji: "📤" },
  bonus: { label: "Bonus", emoji: "🎁" },
  bet: { label: "Bet Placed", emoji: "🎯" },
  win: { label: "Win", emoji: "🎉" },
};

export default async function HistoryPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <DashboardShell active="history">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Transaction History</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Your recent deposits, withdrawals, bets and winnings.
        </p>
      </div>

      <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
        <ul className="flex flex-col gap-2">
          {TRANSACTIONS.map((txn) => {
            const meta = TYPE_META[txn.type];
            const positive = txn.amount >= 0;
            return (
              <li
                key={txn.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e1e2d] text-lg">
                    {meta.emoji}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {meta.label} · {txn.method}
                    </p>
                    <p className="text-xs text-[#8a8aa0]">{timeAgo(txn.date)}</p>
                  </div>
                </div>
                <span
                  className={
                    positive
                      ? "shrink-0 text-sm font-bold text-green-400"
                      : "shrink-0 text-sm font-bold text-red-400"
                  }
                >
                  {positive ? "+" : ""}
                  {formatBDT(Math.abs(txn.amount))}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </DashboardShell>
  );
}
