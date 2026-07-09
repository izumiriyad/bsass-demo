import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-700/40 via-fuchsia-700/30 to-cyan-700/30 p-8 sm:p-12">
        <div className="absolute -right-10 -top-10 text-[12rem] opacity-10">
          🎉
        </div>
        <div className="relative max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
            <Gift className="size-4" /> Get ₱500 free + 100% bonus
          </div>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Ready to start your Playverse journey?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join over 180,000 players. Create your free account in under a
            minute, claim your welcome bonus, and dive into 2,500+ games.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="gold">
              <Link href="/register">
                Create free account <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/games">Browse games</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
