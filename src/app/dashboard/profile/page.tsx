import { Crown, Shield } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { ProfileForm } from "@/components/dashboard/profile-form";
import { Badge } from "@/components/ui/badge";
import { formatBDT, timeAgo } from "@/lib/bj88-utils";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const user = await requireUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile & settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account details and preferences.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <Crown className="size-5 text-amber-400" />
          <div className="mt-2 text-sm text-muted-foreground">VIP tier</div>
          <div className="text-lg font-bold">Tier {user.vipLevel}</div>
          <Badge variant="gold" className="mt-1">
            {user.vipPoints.toLocaleString()} pts
          </Badge>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <span className="text-xl">💰</span>
          <div className="mt-2 text-sm text-muted-foreground">Balance</div>
          <div className="text-lg font-bold text-gold-gradient">
            {formatBDT(user.balance * 110)}
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <Shield className="size-5 text-emerald-400" />
          <div className="mt-2 text-sm text-muted-foreground">Member since</div>
          <div className="text-lg font-bold">{timeAgo(user.createdAt)}</div>
        </div>
      </div>

      <ProfileForm user={user} />
    </div>
  );
}
