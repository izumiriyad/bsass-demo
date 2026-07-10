import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/catalog";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: `Support — ${SITE.name} Bangladesh`,
  description: `Get help with your ${SITE.name} account. Contact us via email, live chat or phone — available 24/7 for players in Bangladesh.`,
};

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: "Email Us",
    detail: SITE.supportEmail,
    note: "Replies within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    detail: "Available 24/7",
    note: "Instant help from our team",
  },
  {
    icon: Phone,
    title: "Phone Support",
    detail: "+880 1700-000000",
    note: "9 AM – 11 PM BST",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-3 py-4">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Support</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          We&apos;re here to help, 24/7. Reach out any time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {CONTACT_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <div
              key={opt.title}
              className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-black"
                style={{ background: "linear-gradient(135deg, #f5a623, #e8920f)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-3 text-sm font-bold text-white">{opt.title}</h2>
              <p className="mt-0.5 text-sm font-semibold text-[#f5a623]">
                {opt.detail}
              </p>
              <p className="text-xs text-[#8a8aa0]">{opt.note}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-5">
        <h2 className="mb-4 text-sm font-bold text-white">Send us a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}
