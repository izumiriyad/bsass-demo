import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { PAYMENT_OPTIONS } from "@/lib/catalog";
import { formatBDT } from "@/lib/utils";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

const QUICK_AMOUNTS = [500, 1000, 5000, 10000];

export default async function WalletPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return (
    <DashboardShell active="wallet">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Wallet</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Deposit and withdraw using your preferred payment method.
        </p>
      </div>

      <div
        className="mb-5 overflow-hidden rounded-xl border border-[#f5a623]/30 p-5"
        style={{ background: "linear-gradient(135deg, #1e1b4b, #4c1d95)" }}
      >
        <p className="text-xs text-white/70">Available Balance</p>
        <p className="mt-1 text-3xl font-black text-[#f5a623]">
          {formatBDT(user.balance * 110)}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
          <h2 className="mb-3 text-sm font-bold text-white">Deposit</h2>
          <form action="/api/wallet" method="post" className="flex flex-col gap-3">
            <input type="hidden" name="action" value="deposit" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#c8c8d6]">
                Payment Method
              </label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {PAYMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-2 py-2.5 text-[10px] font-semibold text-[#c8c8d6] transition-colors hover:border-[#f5a623] hover:text-white"
                  >
                    <span className="text-xl">{opt.emoji}</span>
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#c8c8d6]">
                Amount (৳)
              </label>
              <input
                type="number"
                name="amount"
                min={100}
                placeholder="Enter amount"
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className="rounded-full border border-[#2a2a3e] bg-[#0d0d18] px-3 py-1 text-xs font-semibold text-[#c8c8d6] transition-colors hover:border-[#f5a623] hover:text-white"
                >
                  {formatBDT(amt)}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="mt-1 rounded-lg px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
            >
              Deposit Now
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
          <h2 className="mb-3 text-sm font-bold text-white">Withdraw</h2>
          <form action="/api/wallet" method="post" className="flex flex-col gap-3">
            <input type="hidden" name="action" value="withdraw" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#c8c8d6]">
                Payment Method
              </label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {PAYMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-2 py-2.5 text-[10px] font-semibold text-[#c8c8d6] transition-colors hover:border-[#f5a623] hover:text-white"
                  >
                    <span className="text-xl">{opt.emoji}</span>
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#c8c8d6]">
                Amount (৳)
              </label>
              <input
                type="number"
                name="amount"
                min={200}
                placeholder="Enter amount"
                className="rounded-lg border border-[#2a2a3e] bg-[#0d0d18] px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#f5a623]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className="rounded-full border border-[#2a2a3e] bg-[#0d0d18] px-3 py-1 text-xs font-semibold text-[#c8c8d6] transition-colors hover:border-[#f5a623] hover:text-white"
                >
                  {formatBDT(amt)}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="mt-1 rounded-lg border border-[#f5a623] px-4 py-2.5 text-sm font-bold text-[#f5a623] transition-colors hover:bg-[#f5a623]/10"
            >
              Withdraw Now
            </button>
          </form>
        </div>
      </div>
    </DashboardShell>
  );
}
