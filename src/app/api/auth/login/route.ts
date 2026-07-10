import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const username = String(body.username ?? body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 },
    );
  }

  const user = await createSession(username, password);
  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials." },
      { status: 401 },
    );
  }
  return NextResponse.json({ user });
}
