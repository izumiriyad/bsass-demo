"use client";

import * as React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/providers/auth-provider";

export function FavoriteButton({
  gameId,
  initial = false,
  className,
}: {
  gameId: string;
  initial?: boolean;
  className?: string;
}) {
  const { user } = useAuth();
  const [active, setActive] = React.useState(initial);
  const [pending, setPending] = React.useState(false);

  async function handleToggle() {
    if (!user) {
      window.location.href = "/login?redirect=/dashboard/favorites";
      return;
    }
    setPending(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameId }),
      });
      if (res.ok) {
        const data = await res.json();
        setActive(data.favorited);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={pending}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={cn(
        "flex size-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 disabled:opacity-50",
        className,
      )}
    >
      <Heart className={cn("size-4", active && "fill-rose-500 text-rose-500")} />
    </button>
  );
}
