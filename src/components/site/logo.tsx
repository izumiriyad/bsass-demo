import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-bold", className)}
      aria-label="Playverse — home"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg shadow-lg shadow-primary/30">
        🎮
      </span>
      {showText && (
        <span className="text-lg tracking-tight">
          Play<span className="text-gradient">verse</span>
        </span>
      )}
    </Link>
  );
}
