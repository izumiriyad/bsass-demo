import { getTransactions, requireUser } from "@/lib/auth";
import { TransactionRow } from "@/components/dashboard/transaction-row";

export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  const user = await requireUser();
  const transactions = await getTransactions(user.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Transaction history</h1>
        <p className="text-sm text-muted-foreground">
          A complete record of your deposits, withdrawals, bets, and bonuses.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/50">
        {transactions.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted-foreground">
            You don&apos;t have any transactions yet.
          </div>
        ) : (
          <div className="divide-y divide-border/60">
            {transactions.map((t) => (
              <TransactionRow key={t.id} tx={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
