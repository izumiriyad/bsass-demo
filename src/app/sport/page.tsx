import type { Metadata } from "next";
import { Radio } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { OddsButton } from "@/components/game/odds-button";
import { Badge } from "@/components/ui/badge";
import { SPORT_EVENTS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sports Betting",
  description:
    "Bet on football, basketball, tennis, and esports with competitive odds, live in-play markets, and instant settlements.",
};

const SPORTS = ["⚽ Football", "🏀 Basketball", "🎾 Tennis", "🎮 Esports", "🥊 Boxing"];

export default function SportPage() {
  const live = SPORT_EVENTS.filter((e) => e.status === "live");
  const upcoming = SPORT_EVENTS.filter((e) => e.status === "upcoming");

  return (
    <>
      <PageHero
        eyebrow="Live & upcoming"
        title="Sports Betting"
        description="Competitive odds across hundreds of local and international events, with live in-play betting and instant settlements."
      >
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {SPORTS.map((s) => (
            <span
              key={s}
              className="shrink-0 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Radio className="size-5 text-rose-500" /> Live now
        </h2>
        <div className="mt-4 space-y-3">
          {live.map((e) => (
            <EventRow key={e.id} event={e} />
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold">Upcoming</h2>
        <div className="mt-4 space-y-3">
          {upcoming.map((e) => (
            <EventRow key={e.id} event={e} />
          ))}
        </div>
      </section>
    </>
  );
}

function EventRow({
  event,
}: {
  event: (typeof SPORT_EVENTS)[number];
}) {
  const [home, away] = event.participants;
  const time = new Date(event.startTime).toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{event.league}</span>
          · {event.sport}
        </span>
        {event.status === "live" ? (
          <Badge variant="hot" className="animate-pulse">
            ● LIVE {event.minute}
          </Badge>
        ) : (
          <span>Starts {time}</span>
        )}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">{home.emoji}</span> {home.name}
          </div>
          <span className="text-xs text-muted-foreground">vs</span>
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">{away.emoji}</span> {away.name}
          </div>
        </div>
        <div className="flex w-full gap-2 sm:w-72">
          <OddsButton label="1" odd={event.market.odds[0]} />
          <OddsButton label="X" odd={event.market.odds[1]} />
          <OddsButton label="2" odd={event.market.odds[2]} />
        </div>
      </div>
    </div>
  );
}
