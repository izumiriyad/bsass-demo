import { ChevronDown } from "lucide-react";

export function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60 bg-card/40">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium transition-colors hover:bg-accent/40">
            {item.q}
            <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 text-sm text-muted-foreground">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
