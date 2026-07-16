import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

const claimedPromos = new Set<string>();

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Please log in to claim promotions" }, { status: 401 });
  }

  try {
    const { promoId } = (await request.json()) as { promoId?: string };
    if (!promoId) {
      return NextResponse.json({ error: "Promotion ID is required" }, { status: 400 });
    }
    const key = `${user.id}:${promoId}`;
    if (claimedPromos.has(key)) {
      return NextResponse.json({ error: "You have already claimed this promotion" }, { status: 400 });
    }
    claimedPromos.add(key);
    return NextResponse.json({ message: "Promotion claimed! Bonus will be credited to your account." });
  } catch {
    return NextResponse.json({ error: "Failed to claim promotion" }, { status: 500 });
  }
}
