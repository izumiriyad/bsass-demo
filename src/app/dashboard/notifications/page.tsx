import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { timeAgo } from "@/lib/utils";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

interface Notification {
  id: string;
  title: string;
  body: string;
  emoji: string;
  date: Date;
  unread: boolean;
}

const NOTIFICATIONS: Notification[] = [
  { id: "n1", title: "Welcome Bonus Credited", body: "Your ৳500 welcome credit has been added to your balance. Enjoy!", emoji: "🎁", date: new Date(Date.now() - 1000 * 60 * 20), unread: true },
  { id: "n2", title: "Deposit Successful", body: "৳1,000 was deposited via bKash and is now available in your wallet.", emoji: "📥", date: new Date(Date.now() - 1000 * 60 * 60 * 2), unread: true },
  { id: "n3", title: "Big Win!", body: "Congratulations! You won ৳2,450 playing Crazy Time.", emoji: "🎉", date: new Date(Date.now() - 1000 * 60 * 60 * 5), unread: false },
  { id: "n4", title: "New Promotion", body: "Slots Bonus is live — claim your free spins every day this week.", emoji: "🎰", date: new Date(Date.now() - 1000 * 60 * 60 * 24), unread: false },
  { id: "n5", title: "Withdrawal Processed", body: "Your ৳3,000 withdrawal via Nagad has been completed.", emoji: "📤", date: new Date(Date.now() - 1000 * 60 * 60 * 30), unread: false },
  { id: "n6", title: "Daily Login Bonus", body: "You claimed your daily login bonus of ৳100.", emoji: "⭐", date: new Date(Date.now() - 1000 * 60 * 60 * 48), unread: false },
];

export default async function NotificationsPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <DashboardShell active="notifications">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Notifications</h1>
          <p className="mt-1 text-sm text-[#8a8aa0]">
            Stay up to date with your account activity.
          </p>
        </div>
        <span className="rounded-full bg-[#f5a623] px-2.5 py-1 text-xs font-bold text-black">
          {NOTIFICATIONS.filter((n) => n.unread).length} new
        </span>
      </div>

      <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
        <ul className="flex flex-col gap-2">
          {NOTIFICATIONS.map((n) => (
            <li
              key={n.id}
              className="flex items-start gap-3 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e1e2d] text-lg">
                {n.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">{n.title}</p>
                  {n.unread && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5a623]" />
                  )}
                </div>
                <p className="mt-0.5 text-xs text-[#c8c8d6]">{n.body}</p>
                <p className="mt-1 text-xs text-[#8a8aa0]">{timeAgo(n.date)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardShell>
  );
}
