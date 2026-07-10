import type { Metadata } from "next";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${SITE.name} Bangladesh`,
  description: `The terms and conditions governing your use of ${SITE.name} Bangladesh.`,
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using ${SITE.name} ("we", "us", "our"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.`,
  },
  {
    title: "2. Eligibility",
    body: "You must be at least 18 years old and legally permitted to use online gaming services in your jurisdiction to register and play. We may request identity verification at any time.",
  },
  {
    title: "3. Account Registration",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You may not share, transfer or sell your account.",
  },
  {
    title: "4. Deposits & Withdrawals",
    body: "All transactions are processed in Bangladeshi Taka (BDT). The minimum deposit is ৳100 and the minimum withdrawal is ৳200. We reserve the right to verify your identity before processing withdrawals and to void any transactions involving suspected fraud.",
  },
  {
    title: "5. Bonuses & Promotions",
    body: "Bonuses are subject to specific wagering requirements and expiry dates stated in each promotion's terms. We reserve the right to modify, suspend or cancel any promotion at any time.",
  },
  {
    title: "6. Prohibited Conduct",
    body: "You may not use bots, automated scripts, exploit software bugs, collude, or engage in money laundering. Any abuse will result in account suspension and forfeiture of balances.",
  },
  {
    title: "7. Limitation of Liability",
    body: `${SITE.name} is provided "as is". To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from your use of the service.`,
  },
  {
    title: "8. Changes to Terms",
    body: "We may update these Terms & Conditions at any time. Continued use of the service after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "9. Governing Law",
    body: `These terms are governed by the laws of the jurisdiction in which ${SITE.name} is licensed. Disputes will be resolved in accordance with those laws.`,
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-3 py-4">
      <div className="mb-5">
        <h1 className="text-2xl font-black text-white">Terms &amp; Conditions</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Last updated: {new Date().toLocaleDateString("en-BD", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5"
          >
            <h2 className="mb-2 text-sm font-bold text-[#f5a623]">
              {section.title}
            </h2>
            <p className="text-sm leading-relaxed text-[#c8c8d6]">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
