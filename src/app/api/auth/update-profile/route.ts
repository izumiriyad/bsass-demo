import { NextResponse } from "next/server";
import { getSessionUser, updateUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { username, email } = (await request.json()) as { username?: string; email?: string };
    if (!username || !email) {
      return NextResponse.json({ error: "Username and email are required" }, { status: 400 });
    }
    const updated = await updateUser(user.id, { username, email });
    if (!updated) {
      return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
    return NextResponse.json({ user: updated });
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
