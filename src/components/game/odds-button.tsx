"use client";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function OddsButton({
  label,
  odd,
}: {
  label: string;
  odd: number;
}) {
  if (odd === 0) {
    return (
      <div className="flex flex-1 cursor-not-allowed flex-col items-center rounded-lg border border-dashed border-border/60 bg-muted/30 px-2 py-3 text-center text-xs text-muted-foreground">
        <span>—</span>
      </div>
    );
  }
  return (
    <button
      onClick={() =>
        toast.success(`Added “${label}” @ ${odd.toFixed(2)} to betslip (demo)`)
      }
      className={cn(
        "flex flex-1 cursor-pointer flex-col items-center rounded-lg border border-border/60 bg-card/60 px-2 py-3 transition-colors hover:border-primary hover:bg-accent",
      )}
    >
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span className="font-bold">{odd.toFixed(2)}</span>
    </button>
  );
}
