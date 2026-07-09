import { NextResponse } from "next/server";
import { getSessionUser, getTransactions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const transactions = await getTransactions(user.id);
  return NextResponse.json({ transactions });
}
