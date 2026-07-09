import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions that govern your use of the Playverse platform.",
};

const SECTIONS = [
  {
    h: "1. Acceptance of terms",
    p: "By accessing or using Playverse, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    h: "2. Eligibility",
    p: "You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to use this platform. You are responsible for ensuring that your use complies with all applicable laws.",
  },
  {
    h: "3. Demo nature",
    p: "Playverse is a fictional demonstration platform created for educational purposes. It uses play credits only. No real money, gambling, or financial transactions take place at any time.",
  },
  {
    h: "4. Accounts",
    p: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use.",
  },
  {
    h: "5. Acceptable use",
    p: "You agree not to misuse the platform, attempt to disrupt its operation, reverse-engineer any part of it, or use automated systems to access it without authorization.",
  },
  {
    h: "6. Intellectual property",
    p: "All content on Playverse, including text, graphics, logos, and software, is the property of its respective owners and is protected by intellectual property laws. Game names and imagery are fictional.",
  },
  {
    h: "7. Limitation of liability",
    p: "Playverse is provided 'as is' without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
  },
  {
    h: "8. Changes to terms",
    p: "We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated January 2026." />
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
