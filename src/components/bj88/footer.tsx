import Link from "next/link";
import { SITE, TRUST_BADGES, SOCIAL_LINKS, GAME_CATEGORIES, PROVIDERS } from "@/lib/catalog";

const GAME_LINKS = [
  { label: "Popular", href: "/popular" },
  { label: "Sports", href: "/sports" },
  { label: "Cricket", href: "/cricket" },
  { label: "Slots", href: "/slots" },
  { label: "Casino", href: "/casino" },
  { label: "Cockfighting", href: "/cockfighting" },
  { label: "Fishing", href: "/fishing" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "VIP Club", href: "/vip" },
  { label: "Promotions", href: "/promotions" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "News", href: "/news" },
  { label: "App Download", href: "/app-download" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/support" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
];

const LEGAL_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const PAYMENTS = ["bKash", "Nagad", "Rocket", "USDT", "Bank Transfer"];

export function Footer() {
  return (
    <footer
      className="border-t border-[#2a2c30] bg-[#0d0f10]"
      style={{ marginTop: "2rem" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#008d5b]">
                BSL
              </span>
              <span className="text-xl font-extrabold text-[#ffdf19]">
                Gaming
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-[#9ca3af]">
              {SITE.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.platform}
                  href={s.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2c30] bg-[#1b1c1e] text-base transition hover:border-[#008d5b]/50 hover:bg-[#242628]"
                  aria-label={s.platform}
                  title={`${s.platform} — ${s.handle}`}
                >
                  {s.emoji}
                </Link>
              ))}
            </div>
          </div>

          <FooterCol title="Games" links={GAME_LINKS} />
          <FooterCol title="Company" links={COMPANY_LINKS} />
          <FooterCol title="Support" links={SUPPORT_LINKS} />
          <FooterCol title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-1.5 rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-3 py-1.5"
            >
              <span className="text-sm">{b.emoji}</span>
              <span className="text-[10px] font-semibold text-[#9ca3af]">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#2a2c30] pt-6">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
            We Accept:
          </span>
          {PAYMENTS.map((p) => (
            <span
              key={p}
              className="rounded border border-[#2a2c30] bg-[#1b1c1e] px-2.5 py-1 text-[10px] font-semibold text-[#9ca3af]"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#2a2c30] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-[#6b7280]">
            © 2025 BSL Gaming. All rights reserved. Licensed by Curaçao eGaming
            No. 365/JAZ
          </p>
          <p className="text-[11px] font-semibold text-[#ef4444]">
            18+ Please gamble responsibly
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#f0f0f0]">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-xs text-[#9ca3af] transition hover:text-[#22c55e]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
