import { ShieldCheck, Clock, Zap } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { WalletForm } from "@/components/dashboard/wallet-form";
import { Card, CardContent } from "@/components/ui/card";
import { formatPHP } from "@/lib/utils";

export const dynamic = "force-dynamic";

const INFO = [
  {
    icon: Zap,
    title: "Instant processing",
    text: "Most deposits and withdrawals are completed within minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & encrypted",
    text: "All transactions are protected with 256-bit SSL encryption.",
  },
  {
    icon: Clock,
    title: "24/7 availability",
    text: "Deposit and withdraw any time, day or night.",
  },
];

export default async function WalletPage() {
  const user = await requireUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Wallet</h1>
        <p className="text-sm text-muted-foreground">
          Deposit and withdraw using your preferred payment method.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <Card>
          <CardContent className="p-6">
            <WalletForm initialBalance={user.balance} />
          </CardContent>
        </Card>

        <aside className="space-y-4">
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <div className="text-xs text-muted-foreground">Available balance</div>
            <div className="mt-1 text-2xl font-bold text-gold-gradient">
              {formatPHP(user.balance)}
            </div>
          </div>
          <div className="space-y-3">
            {INFO.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.title}
                  className="rounded-xl border border-border/60 bg-card/50 p-4"
                >
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-2 text-sm font-semibold">{i.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{i.text}</p>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
