import { Shield, KeyRound, Smartphone, Monitor, TriangleAlert as AlertTriangle, LogOut } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PasswordChangeForm } from "@/components/ui/password-form";
import { timeAgo } from "@/lib/utils";

export const dynamic = "force-dynamic";

const MOCK_DEVICES = [
  {
    id: "1",
    name: "Chrome on Windows",
    location: "Manila, Philippines",
    lastActive: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    current: true,
  },
  {
    id: "2",
    name: "Safari on iPhone",
    location: "Manila, Philippines",
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    current: false,
  },
];

const MOCK_ACTIVITY = [
  { action: "Password changed", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(), ip: "192.168.1.xxx" },
  { action: "Two-factor authentication enabled", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), ip: "192.168.1.xxx" },
  { action: "Email address verified", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(), ip: "192.168.1.xxx" },
  { action: "Account created", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString(), ip: "192.168.1.xxx" },
];

export default async function SecurityPage() {
  const user = await requireUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Security & privacy</h1>
        <p className="text-sm text-muted-foreground">
          Manage your password, connected devices, and account security.
        </p>
      </div>

      {/* Security overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-emerald-400" />
            <span className="text-sm font-medium">Password</span>
          </div>
          <p className="mt-2 text-lg font-bold">Strong</p>
          <p className="text-xs text-muted-foreground">Last changed 14 days ago</p>
        </div>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center gap-2">
            <Smartphone className="size-5 text-emerald-400" />
            <span className="text-sm font-medium">Two-factor auth</span>
          </div>
          <p className="mt-2 text-lg font-bold">Enabled</p>
          <p className="text-xs text-muted-foreground">Via authenticator app</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <div className="flex items-center gap-2">
            <Monitor className="size-5 text-muted-foreground" />
            <span className="text-sm font-medium">Active sessions</span>
          </div>
          <p className="mt-2 text-lg font-bold">2 devices</p>
          <p className="text-xs text-muted-foreground">1 active now</p>
        </div>
      </div>

      {/* Password change */}
      <div className="rounded-xl border border-border/60 bg-card/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <KeyRound className="size-5" />
          <h2 className="font-semibold">Change password</h2>
        </div>
        <PasswordChangeForm />
      </div>

      {/* Two-factor auth */}
      <div className="rounded-xl border border-border/60 bg-card/50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="size-5" />
            <div>
              <h2 className="font-semibold">Two-factor authentication</h2>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account.
              </p>
            </div>
          </div>
          <Badge variant="new">Enabled</Badge>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-muted/50 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Authenticator app</p>
            <p className="text-xs text-muted-foreground">Last used 2 hours ago</p>
          </div>
          <Button variant="outline" size="sm">Manage</Button>
        </div>
      </div>

      {/* Active sessions */}
      <div className="rounded-xl border border-border/60 bg-card/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Monitor className="size-5" />
            <h2 className="font-semibold">Active sessions</h2>
          </div>
          <Button variant="outline" size="sm">
            Log out all other sessions
          </Button>
        </div>
        <div className="space-y-3">
          {MOCK_DEVICES.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between rounded-lg border border-border/60 p-4"
            >
              <div className="flex items-center gap-3">
                <Monitor className="size-5 text-muted-foreground" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{device.name}</p>
                    {device.current && (
                      <Badge variant="new" className="text-xs">Current</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {device.location} • Active {timeAgo(device.lastActive)}
                  </p>
                </div>
              </div>
              {!device.current && (
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <LogOut className="size-4" />
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Security activity */}
      <div className="rounded-xl border border-border/60 bg-card/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="size-5" />
          <h2 className="font-semibold">Security activity</h2>
        </div>
        <div className="divide-y divide-border/60">
          {MOCK_ACTIVITY.map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">
                  {timeAgo(activity.timestamp)} • IP: {activity.ip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="size-5 text-destructive" />
          <h2 className="font-semibold text-destructive">Danger zone</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          These actions are irreversible. Please proceed with caution.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="text-destructive border-destructive/50 hover:bg-destructive/10">
            Deactivate account
          </Button>
          <Button variant="outline" className="text-destructive border-destructive/50 hover:bg-destructive/10">
            Delete all data
          </Button>
        </div>
      </div>
    </div>
  );
}
