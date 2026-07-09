import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";
import { CtaBanner } from "@/components/site/cta-banner";
import { FAQS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about accounts, payments, bonuses, fairness, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Frequently asked questions"
        description="Everything you need to know about playing on Playverse."
      />
      <section className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        <FaqList items={FAQS} />
      </section>
      <div className="pb-4">
        <CtaBanner />
      </div>
    </>
  );
}
