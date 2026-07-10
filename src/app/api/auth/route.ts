import { NextResponse } from "next/server";
import {
  createSession,
  destroySession,
  getSessionUser,
  type AuthUser,
} from "@/lib/auth";

export async function GET() {
  const user = await getSessionUser();
  return NextResponse.json({ user });
}

export async function POST(request: Request) {
  let body: { username?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { user: null, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { username, password } = body;
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    username.trim().length === 0 ||
    password.length === 0
  ) {
    return NextResponse.json(
      { user: null, error: "Username and password are required" },
      { status: 400 }
    );
  }

  const user: AuthUser | null = await createSession(
    username.trim(),
    password
  );

  if (!user) {
    return NextResponse.json(
      { user: null, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json({ user });
}

export async function DELETE() {
  await destroySession();
  return NextResponse.json({ success: true }, { status: 200 });
}
