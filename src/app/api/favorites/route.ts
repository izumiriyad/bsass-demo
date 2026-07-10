import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

const FAVORITES = new Map<string, Set<string>>();

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const ids = Array.from(FAVORITES.get(user.id) ?? []);
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
    return NextResponse.json(
      { error: "gameId is required." },
      { status: 400 },
    );
  }

  let set = FAVORITES.get(user.id);
  if (!set) {
    set = new Set();
    FAVORITES.set(user.id, set);
  }
  let favorited: boolean;
  if (set.has(gameId)) {
    set.delete(gameId);
    favorited = false;
  } else {
    set.add(gameId);
    favorited = true;
  }
  return NextResponse.json({ favorited });
}
