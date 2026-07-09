import Link from "next/link";
import { Logo } from "./logo";
import {
  COMPANY_NAV,
  GAME_NAV,
  LEGAL_NAV,
  PAYMENT_METHODS,
} from "@/lib/nav";
import { SITE } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                We accept
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((p) => (
                  <span
                    key={p.name}
                    className="flex items-center gap-1.5 rounded-md border border-border/70 bg-background/60 px-2.5 py-1 text-xs"
                  >
                    <span>{p.emoji}</span>
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <FooterCol title="Games" items={GAME_NAV} />
          <FooterCol title="Company" items={COMPANY_NAV} />
          <FooterCol title="Legal" items={LEGAL_NAV} />
        </div>

        <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/80">
          ⚠️ Gambling can be addictive. Playverse is a fictional, demonstration
          platform built for educational purposes and uses play credits only —
          no real money is involved. Must be 18+ to play. If gambling is
          affecting you or someone you know, seek help.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex size-7 items-center justify-center rounded-full border border-border font-bold">
              18+
            </span>
            <span>Provably Fair</span>
            <span>SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
