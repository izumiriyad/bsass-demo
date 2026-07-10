import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { POPULAR_GAMES } from "@/lib/catalog";
import { GameGrid } from "@/components/bj88/game-card";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default async function FavoritesPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  const favorites = POPULAR_GAMES.slice(0, 6);

  return (
    <DashboardShell active="favorites">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-white">Favorites</h1>
        <p className="mt-1 text-sm text-[#8a8aa0]">
          Your saved games, ready to play anytime.
        </p>
      </div>

      <div className="rounded-xl border border-[#2a2a3e] bg-[#1e1e2d] p-4">
        <GameGrid games={favorites} columns={5} />
      </div>
    </DashboardShell>
  );
}
