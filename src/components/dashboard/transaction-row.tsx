import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Coins,
  Gift,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Transaction } from "@/lib/types";
import { cn, timeAgo } from "@/lib/utils";
import { formatBDT } from "@/lib/bj88-utils";

const META: Record<
  Transaction["type"],
  { icon: typeof Gift; label: string; positive: boolean }
> = {
  deposit: { icon: ArrowDownToLine, label: "Deposit", positive: true },
  withdraw: { icon: ArrowUpFromLine, label: "Withdrawal", positive: false },
  bet: { icon: Coins, label: "Bet placed", positive: false },
  win: { icon: Trophy, label: "Win", positive: true },
  bonus: { icon: Gift, label: "Bonus", positive: true },
};

export function TransactionRow({ tx }: { tx: Transaction }) {
  const meta = META[tx.type];
  const Icon = meta.icon;
  const sign = meta.positive ? "+" : "−";

  return (
    <div className="flex items-center gap-3 p-4">
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full",
          meta.positive
            ? "bg-emerald-500/15 text-emerald-400"
            : "bg-rose-500/15 text-rose-400",
        )}
      >
        <Icon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{meta.label}</div>
        <div className="truncate text-xs text-muted-foreground">
          {tx.method} · {tx.reference} · {timeAgo(tx.createdAt)}
        </div>
      </div>
      <div className="text-right">
        <div
          className={cn(
            "text-sm font-semibold",
            meta.positive ? "text-emerald-400" : "text-foreground",
          )}
        >
          {sign}
          {formatBDT(tx.amount * 110)}
        </div>
        <Badge
          variant={tx.status === "completed" ? "new" : "muted"}
          className="mt-0.5 capitalize"
        >
          {tx.status}
        </Badge>
      </div>
    </div>
  );
}
