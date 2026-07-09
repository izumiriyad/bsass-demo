import Link from "next/link";
import { ArrowDownToLine, ArrowUpFromLine, Gift, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TransactionRow } from "@/components/dashboard/transaction-row";
import { getTransactions, requireUser } from "@/lib/auth";
import { formatPHP } from "@/lib/utils";
import type { Transaction } from "@/lib/types";

export const dynamic = "force-dynamic";

const VIP_TIERS = [
  { name: "Bronze", points: 0 },
  { name: "Silver", points: 10000 },
  { name: "Gold", points: 50000 },
  { name: "Platinum", points: 200000 },
  { name: "Diamond", points: 1000000 },
];

function vipProgress(points: number) {
  const current = [...VIP_TIERS].reverse().find((t) => points >= t.points)!;
  const next = VIP_TIERS.find((t) => t.points > points);
  const pct = next
    ? Math.min(100, Math.round(((points - current.points) / (next.points - current.points)) * 100))
    : 100;
  return { current, next, pct };
}

export default async function DashboardPage() {
  const user = await requireUser();
  const transactions = await getTransactions(user.id);
  const recent = transactions.slice(0, 6);

  const sum = (type: Transaction["type"]) =>
    transactions.filter((t) => t.type === type).reduce((s, t) => s + t.amount, 0);

  const deposits = sum("deposit");
  const withdrawals = sum("withdraw");
  const bonuses = sum("bonus") + sum("win");

  const vip = vipProgress(user.vipPoints);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back, {user.username} 👋
          </h1>
          <p className="text-sm text-muted-foreground">
            Here&apos;s a snapshot of your account.
          </p>
        </div>
        <Button asChild variant="gradient">
          <Link href="/dashboard/wallet">
            <ArrowDownToLine className="size-4" /> Add funds
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Current balance" value={formatPHP(user.balance)} accent />
        <StatCard label="Total deposited" value={formatPHP(deposits)} icon={<TrendingUp className="size-4 text-emerald-400" />} />
        <StatCard label="Total withdrawn" value={formatPHP(withdrawals)} icon={<ArrowUpFromLine className="size-4 text-rose-400" />} />
        <StatCard label="Bonuses & wins" value={formatPHP(bonuses)} icon={<Gift className="size-4 text-amber-400" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border/60 bg-card/50">
            <div className="flex items-center justify-between border-b border-border/60 p-4">
              <h2 className="font-semibold">Recent activity</h2>
              <Button asChild variant="ghost" size="sm">
                <Link href="/dashboard/history">View all</Link>
              </Button>
            </div>
            {recent.length === 0 ? (
              <div className="p-8 text-center text-sm text-muted-foreground">
                No transactions yet. Make your first deposit to get started!
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {recent.map((t) => (
                  <TransactionRow key={t.id} tx={t} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/50 p-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👑</span>
            <h2 className="font-semibold">VIP status</h2>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-lg font-bold">{vip.current.name}</span>
            <Badge variant="gold">{user.vipPoints.toLocaleString()} pts</Badge>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              style={{ width: `${vip.pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {vip.next
              ? `${(vip.next.points - user.vipPoints).toLocaleString()} pts to ${vip.next.name}`
              : "You've reached the highest tier! 🎉"}
          </p>
          <Button asChild variant="outline" size="sm" className="mt-4 w-full">
            <Link href="/vip">View VIP benefits</Link>
          </Button>
        </div>
      </div>

      <div>
        <h2 className="mb-3 font-semibold">Quick actions</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <QuickAction href="/dashboard/wallet" title="Deposit" desc="Add funds instantly" emoji="💸" />
          <QuickAction href="/games" title="Play games" desc="Browse the library" emoji="🎮" />
          <QuickAction href="/promotions" title="Promotions" desc="Claim bonuses" emoji="🎁" />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon} {label}
      </div>
      <div
        className={`mt-1 text-xl font-bold ${
          accent ? "text-gold-gradient" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function QuickAction({
  href,
  title,
  desc,
  emoji,
}: {
  href: string;
  title: string;
  desc: string;
  emoji: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/50"
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </Link>
  );
}
