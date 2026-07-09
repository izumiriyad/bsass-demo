import { NextResponse } from "next/server";
import { getFavoriteIds, getSessionUser, toggleFavorite } from "@/lib/auth";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const ids = await getFavoriteIds(user.id);
  return NextResponse.json({ ids });
}

export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const gameId = String(body.gameId ?? "");
  if (!gameId) {
    return NextResponse.json({ error: "gameId is required." }, { status: 400 });
  }
  const favorited = await toggleFavorite(user.id, gameId);
  return NextResponse.json({ favorited });
}
