import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help from the Playverse support team via live chat, email, or our help center — available 24/7.",
};

const CHANNELS = [
  { icon: MessageCircle, title: "Live chat", value: "Available 24/7", desc: "Instant answers from real humans." },
  { icon: Mail, title: "Email", value: SITE.supportEmail, desc: "Replies within 24 hours." },
  { icon: Phone, title: "Hotline", value: "+63 (2) 8000 0000", desc: "For account & payment help." },
  { icon: Clock, title: "Hours", value: "Always open", desc: "Support never sleeps." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="Support"
        description="We're here for you around the clock. Reach out any way you like."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="bg-card/50">
                <CardContent className="p-5">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-3 font-semibold">{c.title}</h3>
                  <div className="text-sm font-medium">{c.value}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and we&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Popular questions</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Find quick answers in our FAQ.
            </p>
            <Card className="mt-4 bg-card/50">
              <CardContent className="p-5">
                <ul className="space-y-3 text-sm">
                  {[
                    "How fast are withdrawals?",
                    "What payment methods are supported?",
                    "Are the games fair?",
                    "How does the VIP program work?",
                  ].map((q) => (
                    <li key={q}>
                      <Link
                        href="/faq"
                        className="flex items-center justify-between text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {q} <span className="text-primary">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
