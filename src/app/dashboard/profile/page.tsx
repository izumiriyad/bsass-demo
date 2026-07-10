import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { formatBDT, timeAgo } from "@/lib/utils";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const memberSince = new Date("2025-01-15");

export default async function ProfilePage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <DashboardShell active="profile">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Profile</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          View and update your account details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
          <div className="flex flex-col items-center text-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full text-3xl font-black text-black"
              style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
            >
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h2 className="mt-3 text-lg font-black text-white">{user.username}</h2>
            <p className="text-xs text-[#8a8aa0]">{user.email}</p>
          </div>

          <dl className="mt-5 flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-2.5">
              <dt className="text-xs text-[#8a8aa0]">Balance</dt>
              <dd className="text-sm font-bold text-[#f5a623]">
                {formatBDT(user.balance * 110)}
              </dd>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-2.5">
              <dt className="text-xs text-[#8a8aa0]">Member Since</dt>
              <dd className="text-sm font-medium text-white">
                {memberSince.toLocaleDateString("en-BD", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </dd>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-2.5">
              <dt className="text-xs text-[#8a8aa0]">Last Active</dt>
              <dd className="text-sm font-medium text-white">
                {timeAgo(new Date())}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5 lg:col-span-2">
          <h2 className="mb-4 text-sm font-bold text-white">Edit Profile</h2>
          <form action="/api/wallet" method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="profile-username"
                className="text-xs font-semibold text-[#c8c8d6]"
              >
                Username
              </label>
              <input
                id="profile-username"
                type="text"
                defaultValue={user.username}
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#f5a623]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="profile-email"
                className="text-xs font-semibold text-[#c8c8d6]"
              >
                Email
              </label>
              <input
                id="profile-email"
                type="email"
                defaultValue={user.email}
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#f5a623]"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-fit rounded-lg px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </DashboardShell>
  );
}
