import type { Metadata } from "next";
import { TournamentSection } from "@/components/bj88/tournament-cards";
import { EventLeaderboard } from "@/components/bj88/event-leaderboard";
import { PromoCalendar } from "@/components/bj88/promo-calendar";

export const metadata: Metadata = { title: "Tournaments & Events" };

export default function TournamentsPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <div className="flex items-center gap-2">
        <span className="section-title-bar" />
        <span className="text-xl">🏆</span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-2xl">
          Tournaments &amp; Events
        </h1>
      </div>
      <p className="max-w-2xl text-sm text-[#9ca3af]">
        Compete in BSL Gaming's biggest tournaments and events. Climb the
        leaderboard, win massive prize pools, and claim your rewards.
      </p>

      <TournamentSection />

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">🏅</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Event Leaderboard
          </h2>
        </div>
        <EventLeaderboard title="Full Leaderboard" limit={10} />
      </section>

      <PromoCalendar />
    </div>
  );
}
