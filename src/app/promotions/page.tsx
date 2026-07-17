import type { Metadata } from "next";
import { PromoTabs } from "@/components/bj88/promo-tabs";

export const metadata: Metadata = { title: "Promotions" };

export default function PromotionsPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-xl">🎁</span>
          <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
            Promotions
          </h1>
        </div>
        <p className="text-sm text-[#9ca3af]">
          Exclusive bonuses and rewards for BSL Gaming members. Claim your bonus now!
        </p>
      </div>
      <PromoTabs />
    </div>
  );
}
