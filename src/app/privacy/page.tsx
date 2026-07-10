import type { Metadata } from "next";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name} Bangladesh`,
  description: `How ${SITE.name} Bangladesh collects, uses and protects your personal information.`,
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide during registration (username, email), transaction details (deposits, withdrawals), and usage data such as device type and pages visited. We do not sell your personal data.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to operate and secure your account, process payments, prevent fraud, comply with legal obligations, and improve our services and game offerings.",
  },
  {
    title: "3. Data Security",
    body: "We protect your data with 256-bit SSL encryption in transit and at rest. Access to personal data is restricted to authorized personnel and is audited regularly.",
  },
  {
    title: "4. Cookies",
    body: "We use cookies to maintain your session, remember preferences and analyze traffic. You can disable cookies in your browser, but some features may not work correctly.",
  },
  {
    title: "5. Payment Processing",
    body: "Payment details are processed by licensed payment providers (bKash, Nagad, Rocket, banks and crypto processors). We do not store your full card or wallet credentials.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team. We will respond within 30 days.",
  },
  {
    title: "7. Data Retention",
    body: "We retain your account data for as long as your account is active and for a reasonable period thereafter to comply with legal and regulatory requirements.",
  },
  {
    title: "8. Children's Privacy",
    body: `${SITE.name} is strictly for users 18 and older. We do not knowingly collect data from minors. If you believe a minor has registered, please contact us immediately.`,
  },
  {
    title: "9. Contact Us",
    body: `For any privacy questions or requests, contact us at ${SITE.supportEmail}.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-3 py-4">
      <div className="mb-5">
        <h1 className="text-2xl font-black text-white">Privacy Policy</h1>
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
