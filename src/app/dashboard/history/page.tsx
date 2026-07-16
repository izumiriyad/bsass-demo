import type { Metadata } from "next";
import { TrendingUp, TrendingDown, Gift, Gamepad2 } from "lucide-react";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";
import { headers } from "next/headers";

export const metadata: Metadata = { title: "Transaction History" };

interface Transaction {
  id: number;
  type: string;
  label: string;
  amount: number;
  date: string;
}

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

  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${protocol}://${host}`;

  let transactions: Transaction[] = [];
  try {
    const res = await fetch(`${baseUrl}/api/transactions`, {
      headers: { Cookie: h.get("cookie") ?? "" },
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      transactions = data.transactions ?? [];
    }
  } catch {
    // Fallback to empty
  }

  const deposited = transactions.filter((t) => t.type === "deposit").reduce((s, t) => s + t.amount, 0);
  const withdrawn = transactions.filter((t) => t.type === "withdraw").reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#f0f0f0] sm:text-2xl">Transaction History</h1>
        <p className="text-sm text-[#9ca3af]">Your recent deposits, withdrawals, and game activity</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-3">
          <p className="text-xs text-[#9ca3af]">Total Deposited</p>
          <p className="mt-1 text-sm font-bold text-[#00a86d]">{formatBDT(deposited)}</p>
        </div>
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-3">
          <p className="text-xs text-[#9ca3af]">Total Withdrawn</p>
          <p className="mt-1 text-sm font-bold text-[#ef4444]">{formatBDT(withdrawn)}</p>
        </div>
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-3">
          <p className="text-xs text-[#9ca3af]">Transactions</p>
          <p className="mt-1 text-sm font-bold text-[#f0f0f0]">{transactions.length}</p>
        </div>
      </div>

      {transactions.length > 0 ? (
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4">
          <div className="space-y-2">
            {transactions.map((tx) => {
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
                      <p className="text-xs text-[#6b7280]">{timeAgo(new Date(tx.date))}</p>
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
      ) : (
        <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-8 text-center">
          <p className="text-sm text-[#9ca3af]">No transactions yet.</p>
          <p className="mt-1 text-xs text-[#6b7280]">Make a deposit to start playing!</p>
        </div>
      )}
    </div>
  );
}
