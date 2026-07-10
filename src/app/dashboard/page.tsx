import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const STATS = [
  { id: "balance", label: "Current Balance", emoji: "💰", valueKey: "balance" },
  { id: "deposited", label: "Total Deposited", emoji: "📥", value: 25000 },
  { id: "withdrawn", label: "Total Withdrawn", emoji: "📤", value: 8000 },
  { id: "bonuses", label: "Bonuses Earned", emoji: "🎁", value: 500 },
] as const;

const ACTIVITY = [
  { id: "a1", text: "Deposited ৳1,000 via bKash", date: new Date(Date.now() - 1000 * 60 * 35) },
  { id: "a2", text: "Played Gates of Olympus", date: new Date(Date.now() - 1000 * 60 * 60 * 3) },
  { id: "a3", text: "Won ৳2,450 in Crazy Time", date: new Date(Date.now() - 1000 * 60 * 60 * 8) },
  { id: "a4", text: "Claimed daily login bonus", date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
  { id: "a5", text: "Withdrew ৳3,000 via Nagad", date: new Date(Date.now() - 1000 * 60 * 60 * 48) },
];

export default async function DashboardPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  const balanceBDT = user.balance * 110;

  const statValues: Record<string, number> = {
    balance: balanceBDT,
    deposited: 25000,
    withdrawn: 8000,
    bonuses: 500,
  };

  return (
    <DashboardShell active="overview">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Overview</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Welcome back, {user.username}. Here&apos;s your account summary.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{stat.emoji}</span>
            </div>
            <p className="mt-2 text-xs text-[#8a8aa0]">{stat.label}</p>
            <p className="mt-0.5 text-lg font-black text-[#f5a623]">
              {formatBDT(statValues[stat.id])}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
          <span className="h-4 w-1 rounded-full bg-[#f5a623]" />
          Recent Activity
        </h2>
        <ul className="flex flex-col gap-2">
          {ACTIVITY.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-2.5"
            >
              <span className="text-sm text-[#c8c8d6]">{item.text}</span>
              <span className="shrink-0 text-xs text-[#8a8aa0]">
                {timeAgo(item.date)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardShell>
  );
}
