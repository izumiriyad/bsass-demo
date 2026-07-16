import type { Metadata } from "next";
import Link from "next/link";
import { Wallet, TrendingUp, TrendingDown, Gift, Activity } from "lucide-react";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";
import { headers } from "next/headers";

export const metadata: Metadata = { title: "Dashboard" };

interface Transaction {
  id: number;
  type: string;
  label: string;
  amount: number;
  date: string;
}

export default async function DashboardPage() {
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
  const bonuses = transactions.filter((t) => t.type === "bonus").reduce((s, t) => s + t.amount, 0);
  const recent = transactions.slice(0, 5);

  const stats = [
    { label: "Current Balance", value: formatBDT(user.balance), icon: Wallet, color: "#ffdf19" },
    { label: "Total Deposited", value: formatBDT(deposited), icon: TrendingUp, color: "#00a86d" },
    { label: "Total Withdrawn", value: formatBDT(withdrawn), icon: TrendingDown, color: "#ef4444" },
    { label: "Bonuses", value: formatBDT(bonuses), icon: Gift, color: "#a855f7" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#f0f0f0] sm:text-2xl">Dashboard</h1>
        <p className="text-sm text-[#9ca3af]">Welcome back, {user.username}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#9ca3af]">{stat.label}</p>
                <Icon className="h-4 w-4" style={{ color: stat.color }} />
              </div>
              <p className="mt-2 text-lg font-bold text-[#f0f0f0] sm:text-xl">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4">
        <div className="mb-3 flex items-center gap-2">
          <Activity className="h-4 w-4 text-[#00a86d]" />
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">Recent Activity</h2>
        </div>
        {recent.length > 0 ? (
          <div className="space-y-2">
            {recent.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-[#f0f0f0]">{item.label}</p>
                  <p className="text-xs text-[#6b7280]">{timeAgo(new Date(item.date))}</p>
                </div>
                <p
                  className={
                    item.amount > 0
                      ? "text-sm font-bold text-[#00a86d]"
                      : "text-sm font-bold text-[#ef4444]"
                  }
                >
                  {item.amount > 0 ? "+" : ""}
                  {formatBDT(item.amount)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-sm text-[#9ca3af]">No recent activity.</p>
            <p className="mt-1 text-xs text-[#6b7280]">Make your first deposit to get started!</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Link href="/dashboard/wallet" className="btn-primary rounded-lg px-4 py-3 text-center text-sm font-semibold">
          Deposit
        </Link>
        <Link href="/games" className="rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-4 py-3 text-center text-sm font-semibold text-[#f0f0f0] transition hover:border-[#383b3f]">
          Browse Games
        </Link>
        <Link href="/promotions" className="rounded-lg border border-[#ffdf19]/30 bg-[#1b1c1e] px-4 py-3 text-center text-sm font-semibold text-[#ffdf19] transition hover:border-[#ffdf19]/50">
          Promotions
        </Link>
      </div>
    </div>
  );
}
