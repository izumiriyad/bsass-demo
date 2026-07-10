import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default async function SecurityPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <DashboardShell active="security">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Security</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Manage your password and account security settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
          <h2 className="mb-4 text-sm font-bold text-white">Change Password</h2>
          <form action="/api/wallet" method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sec-current"
                className="text-xs font-semibold text-[#c8c8d6]"
              >
                Current Password
              </label>
              <input
                id="sec-current"
                type="password"
                autoComplete="current-password"
                placeholder="Enter current password"
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sec-new"
                className="text-xs font-semibold text-[#c8c8d6]"
              >
                New Password
              </label>
              <input
                id="sec-new"
                type="password"
                autoComplete="new-password"
                placeholder="At least 6 characters"
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sec-confirm"
                className="text-xs font-semibold text-[#c8c8d6]"
              >
                Confirm New Password
              </label>
              <input
                id="sec-confirm"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter new password"
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-fit rounded-lg px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
            >
              Update Password
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
            <h2 className="mb-1 text-sm font-bold text-white">
              Two-Factor Authentication
            </h2>
            <p className="mb-4 text-xs text-[#8a8aa0]">
              Add an extra layer of security to your account with 2FA.
            </p>
            <div className="flex items-center justify-between rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Authenticator App</p>
                <p className="text-xs text-[#8a8aa0]">Disabled</p>
              </div>
              <button
                type="button"
                className="relative h-6 w-11 rounded-full border border-[#2a2a3e] bg-[#2a2a3e] transition-colors"
                aria-label="Toggle 2FA"
              >
                <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-[#8a8aa0] transition-transform" />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
            <h2 className="mb-3 text-sm font-bold text-white">Account Info</h2>
            <dl className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-[#8a8aa0]">Account ID</dt>
                <dd className="font-mono text-xs text-white">{user.id}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-[#8a8aa0]">Username</dt>
                <dd className="font-semibold text-white">{user.username}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-[#8a8aa0]">Email</dt>
                <dd className="font-semibold text-white">{user.email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
