import type { Metadata } from "next";
import { Shield, Lock, Smartphone } from "lucide-react";
import { getSessionUser } from "@/lib/auth";
import { SecurityForm } from "./security-form";
import { TwoFactorToggle } from "./two-factor-toggle";

export const metadata: Metadata = { title: "Security" };

export default async function SecurityPage() {
  const user = await getSessionUser();
  if (!user) return null;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-[#00a86d]" />
        <h1 className="text-xl font-bold text-[#f0f0f0] sm:text-2xl">Security</h1>
      </div>

      <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5">
        <div className="mb-4 flex items-center gap-2">
          <Lock className="h-4 w-4 text-[#00a86d]" />
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">Change Password</h2>
        </div>
        <SecurityForm />
      </div>

      <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5">
        <div className="mb-4 flex items-center gap-2">
          <Smartphone className="h-4 w-4 text-[#a855f7]" />
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0]">Two-Factor Authentication</h2>
        </div>
        <TwoFactorToggle />
      </div>
    </div>
  );
}
