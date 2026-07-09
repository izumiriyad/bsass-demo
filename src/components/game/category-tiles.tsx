import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog";

export function CategoryTiles() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {CATEGORIES.map((c) => (
        <Link
          key={c.id}
          href={`/games?category=${c.id}`}
          className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border/60 bg-card/60 px-3 py-5 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
        >
          <div
            className="absolute inset-x-0 top-0 h-1 opacity-80"
            style={{
              backgroundImage: `linear-gradient(90deg, ${c.gradient[0]}, ${c.gradient[1]})`,
            }}
          />
          <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
            {c.emoji}
          </span>
          <span className="text-sm font-semibold">{c.name}</span>
          <span className="text-[11px] text-muted-foreground">{c.tagline}</span>
        </Link>
      ))}
    </div>
  );
}
