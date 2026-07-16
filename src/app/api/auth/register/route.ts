import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, email, password, promoCode } = (await request.json()) as {
      username?: string;
      email?: string;
      password?: string;
      promoCode?: string;
    };

    if (!username || !email || !password) {
      return NextResponse.json({ error: "Username, email, and password are required" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    const user = await createSession(username, password, email);
    if (!user) {
      return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }

    return NextResponse.json({ user, promoCode: promoCode ?? null });
  } catch {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
