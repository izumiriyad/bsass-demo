import { NextResponse } from "next/server";
import { getSessionUser, updateBalance } from "@/lib/auth";

const MIN_DEPOSIT = 100;
const MIN_WITHDRAW = 200;

interface WalletRequestBody {
  action?: unknown;
  amount?: unknown;
  method?: unknown;
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  let body: WalletRequestBody;
  try {
    body = (await request.json()) as WalletRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const action = body.action;
  const amount = typeof body.amount === "string" ? Number(body.amount) : body.amount;
  const method =
    typeof body.method === "string" ? body.method.trim() : "";

  if (action !== "deposit" && action !== "withdraw") {
    return NextResponse.json(
      { error: "Action must be 'deposit' or 'withdraw'" },
      { status: 400 }
    );
  }

  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json(
      { error: "Amount must be a positive number" },
      { status: 400 }
    );
  }

  if (action === "deposit" && amount < MIN_DEPOSIT) {
    return NextResponse.json(
      { error: `Minimum deposit is ৳${MIN_DEPOSIT}` },
      { status: 400 }
    );
  }

  if (action === "withdraw" && amount < MIN_WITHDRAW) {
    return NextResponse.json(
      { error: `Minimum withdrawal is ৳${MIN_WITHDRAW}` },
      { status: 400 }
    );
  }

  if (action === "withdraw" && amount > user.balance) {
    return NextResponse.json(
      { error: "Insufficient balance for withdrawal" },
      { status: 400 }
    );
  }

  if (method.length === 0) {
    return NextResponse.json(
      { error: "Payment method is required" },
      { status: 400 }
    );
  }

  try {
    const signedAmount = action === "withdraw" ? -amount : amount;
    const newBalance = await updateBalance(user.id, signedAmount);
    return NextResponse.json({
      balance: newBalance,
      action,
      amount,
      method,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process transaction" },
      { status: 500 }
    );
  }
}
