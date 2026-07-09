import * as React from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 [background:radial-gradient(40rem_24rem_at_85%_-40%,rgba(124,58,237,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <div className="mt-3 max-w-2xl text-muted-foreground">
            {description}
          </div>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
