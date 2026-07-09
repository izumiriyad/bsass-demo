import { Bell, Mail, Gamepad2, Gift, BellRing, MessageSquare } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "promo",
    title: "New bonus available!",
    message: "Claim your 50% weekend reload bonus before it expires.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    read: false,
  },
  {
    id: "2",
    type: "success",
    title: "Withdrawal processed",
    message: "Your withdrawal of ₱5,000 has been sent to GCash.",
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    read: false,
  },
  {
    id: "3",
    type: "game",
    title: "New game launched",
    message: "Try the new Cyber Heist slot — 97% RTP and explosive features!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: true,
  },
  {
    id: "4",
    type: "info",
    title: "VIP tier upgrade",
    message: "Congratulations! You've reached Gold VIP status.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    read: true,
  },
];

const TYPE_CONFIG = {
  info: { icon: Bell, color: "text-sky-400", bg: "bg-sky-500/20" },
  success: { icon: Gift, color: "text-emerald-400", bg: "bg-emerald-500/20" },
  warning: { icon: Bell, color: "text-amber-400", bg: "bg-amber-500/20" },
  promo: { icon: Gift, color: "text-fuchsia-400", bg: "bg-fuchsia-500/20" },
  game: { icon: Gamepad2, color: "text-cyan-400", bg: "bg-cyan-500/20" },
} as const;

const PREFERENCE_OPTIONS = [
  { id: "promos", label: "Promotions & bonuses", description: "New offers, reload bonuses, and free spins", icon: Gift },
  { id: "game_updates", label: "Game launches", description: "New games added to the library", icon: Gamepad2 },
  { id: "wins", label: "Activity alerts", description: "Deposits, withdrawals, and big wins", icon: Gift },
  { id: "newsletter", label: "Newsletter", description: "Weekly updates and tips", icon: Mail },
  { id: "support", label: "Support messages", description: "Replies to your tickets", icon: MessageSquare },
];

export default async function NotificationsPage() {
  const user = await requireUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-sm text-muted-foreground">
          View your alerts and manage what you get notified about.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Notification list */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent alerts</h2>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>

          <div className="space-y-3">
            {MOCK_NOTIFICATIONS.map((n) => {
              const config = TYPE_CONFIG[n.type as keyof typeof TYPE_CONFIG];
              const Icon = config.icon;
              return (
                <div
                  key={n.id}
                  className={cn(
                    "group relative flex gap-4 rounded-xl border p-4 transition-colors",
                    n.read ? "border-border/60 bg-card/30" : "border-primary/30 bg-card/50"
                  )}
                >
                  <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", config.bg)}>
                    <Icon className={cn("size-5", config.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium">{n.title}</p>
                      {!n.read && (
                        <Badge variant="hot" className="shrink-0">New</Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{n.message}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{timeAgo(n.timestamp)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notification preferences */}
        <div className="space-y-4">
          <h2 className="font-semibold">Preferences</h2>
          <div className="rounded-xl border border-border/60 bg-card/50 divide-y divide-border/60">
            {PREFERENCE_OPTIONS.map((pref) => {
              const Icon = pref.icon;
              return (
                <div key={pref.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{pref.label}</p>
                      <p className="text-xs text-muted-foreground">{pref.description}</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <BellRing className="size-5 text-muted-foreground" />
              <h3 className="font-medium">Quiet hours</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Pause push notifications between certain hours.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Configure quiet hours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
