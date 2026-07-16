import type { Metadata } from "next";
import Link from "next/link";
import { VIP_TIERS } from "@/lib/catalog";

export const metadata: Metadata = { title: "VIP Club" };

export default function VipPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-xl">👑</span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
          VIP Club
        </h1>
      </div>
      <p className="max-w-2xl text-sm text-[#9ca3af]">
        Join the BSL Gaming VIP Club and unlock exclusive rewards, daily cashback up to 1.5%, instant rebates up to 1.21%, personal VIP hosts, and luxury gifts. The more you play, the higher you climb.
      </p>

      <div className="rounded-xl border border-[#ffdf19]/20 bg-gradient-to-r from-[#008d5b]/10 via-[#1b1c1e] to-[#1b1c1e] p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#ffdf19]">1.21%</p>
            <p className="text-xs text-[#9ca3af]">Max Daily Rebate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#00a86d]">1.5%</p>
            <p className="text-xs text-[#9ca3af]">Max Cashback</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#f0f0f0]">5</p>
            <p className="text-xs text-[#9ca3af]">VIP Tiers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#ffdf19]">24/7</p>
            <p className="text-xs text-[#9ca3af]">VIP Support</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {VIP_TIERS.map((tier, i) => (
          <div
            key={tier.tier}
            className={`relative overflow-hidden rounded-xl border p-5 transition hover:scale-[1.02] ${
              i === 4
                ? "border-[#ffdf19]/40 bg-gradient-to-b from-[#ffdf19]/[0.06] to-[#1b1c1e]"
                : "border-[#2a2c30] bg-[#1b1c1e]"
            }`}
          >
            {i === 4 && (
              <span className="absolute right-3 top-3 rounded-full bg-[#ffdf19] px-2 py-0.5 text-[10px] font-bold text-[#121315]">
                TOP TIER
              </span>
            )}
            <div className="flex items-center gap-3">
              <span className="text-4xl">{tier.emoji}</span>
              <div>
                <h2 className="text-xl font-bold text-[#f0f0f0]">{tier.tier}</h2>
                <p className="text-xs text-[#9ca3af]">Tier {i + 1}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-2">
                <span className="text-xs text-[#9ca3af]">Threshold</span>
                <span className="text-sm font-bold text-[#ffdf19]">{tier.threshold}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-2">
                <span className="text-xs text-[#9ca3af]">Daily Cashback</span>
                <span className="text-sm font-bold text-[#00a86d]">{tier.cashback}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-2">
                <span className="text-xs text-[#9ca3af]">Rebate</span>
                <span className="text-sm font-bold text-[#00a86d]">{tier.rebate}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#121315] px-3 py-2">
                <span className="text-xs text-[#9ca3af]">Withdrawal Limit</span>
                <span className="text-sm font-bold text-[#f0f0f0]">{tier.withdrawalLimit}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-1.5">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                  <span className="text-[#00a86d]">✓</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#ffdf19]/30 bg-gradient-to-r from-[#1b1c1e] via-[#242628] to-[#1b1c1e] p-6 text-center">
        <h2 className="text-lg font-bold text-[#ffdf19]">Ready to join the VIP Club?</h2>
        <p className="mt-2 text-sm text-[#9ca3af]">
          Start playing today and climb the ranks to unlock exclusive rewards, rebates, and luxury gifts.
        </p>
        <Link href="/register" className="btn-gold mt-4 inline-block px-8 py-3 text-sm">
          Join Now
        </Link>
      </div>
    </div>
  );
}
