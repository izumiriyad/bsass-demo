import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

const TRANSACTIONS = new Map<
  string,
  Array<{
    id: string;
    type: "deposit" | "withdraw" | "bet" | "win";
    amount: number;
    status: "completed" | "pending" | "failed";
    createdAt: string;
  }>
>();

function seedTransactions(userId: string) {
  if (TRANSACTIONS.has(userId)) return;
  const now = Date.now();
  TRANSACTIONS.set(userId, [
    { id: crypto.randomUUID(), type: "deposit", amount: 5000, status: "completed", createdAt: new Date(now - 86_400_000).toISOString() },
    { id: crypto.randomUUID(), type: "win", amount: 3200, status: "completed", createdAt: new Date(now - 172_800_000).toISOString() },
    { id: crypto.randomUUID(), type: "bet", amount: -500, status: "completed", createdAt: new Date(now - 259_200_000).toISOString() },
    { id: crypto.randomUUID(), type: "withdraw", amount: -2000, status: "completed", createdAt: new Date(now - 345_600_000).toISOString() },
    { id: crypto.randomUUID(), type: "deposit", amount: 10000, status: "completed", createdAt: new Date(now - 432_000_000).toISOString() },
  ]);
}

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  seedTransactions(user.id);
  const transactions = TRANSACTIONS.get(user.id) ?? [];
  return NextResponse.json({ transactions });
}
