import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Playverse collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    h: "1. Information we collect",
    p: "We collect information you provide directly, such as your username, email address, and password. We also collect limited technical data such as browser type and usage patterns to improve the platform.",
  },
  {
    h: "2. How we use your information",
    p: "Your information is used to create and manage your account, provide and improve our services, communicate with you, and ensure the security of the platform.",
  },
  {
    h: "3. Data security",
    p: "We protect your data with industry-standard measures including encryption in transit and at rest. Passwords are stored using one-way cryptographic hashing and are never stored in plain text.",
  },
  {
    h: "4. Cookies",
    p: "We use essential cookies to keep you signed in and remember your preferences. We do not sell your personal data to third parties.",
  },
  {
    h: "5. Your rights",
    p: "You may access, correct, or request deletion of your personal information at any time by contacting support. You can also manage communication preferences in your profile settings.",
  },
  {
    h: "6. Children's privacy",
    p: "Playverse is not directed at children and we do not knowingly collect information from anyone under 18. The platform is intended solely for adults.",
  },
  {
    h: "7. Changes to this policy",
    p: "We may update this privacy policy from time to time. We will notify you of significant changes through the platform or by email.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated January 2026." />
      <section className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        <div className="space-y-6">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-semibold">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
