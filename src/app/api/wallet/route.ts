import { NextRequest, NextResponse } from "next/server";
import { adjustBalance, AuthError, getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const action = body.action === "withdraw" ? "withdraw" : "deposit";
  const amount = Number(body.amount);
  const method = String(body.method ?? "wallet");

  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json(
      { error: "Please enter a valid amount." },
      { status: 400 },
    );
  }
  if (amount > 1_000_000) {
    return NextResponse.json(
      { error: "Amount exceeds the maximum limit." },
      { status: 400 },
    );
  }
  if (action === "deposit" && amount < 100) {
    return NextResponse.json(
      { error: "Minimum deposit is ₱100." },
      { status: 400 },
    );
  }
  if (action === "withdraw" && amount < 200) {
    return NextResponse.json(
      { error: "Minimum withdrawal is ₱200." },
      { status: 400 },
    );
  }

  try {
    const updated = await adjustBalance(user.id, amount, action, method);
    return NextResponse.json({ user: updated });
  } catch (e) {
    if (e instanceof AuthError) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }
    console.error("wallet error", e);
    return NextResponse.json(
      { error: "Transaction failed. Please try again." },
      { status: 500 },
    );
  }
}
