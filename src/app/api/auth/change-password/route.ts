import { NextResponse } from "next/server";
import { getSessionUser, updateUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { currentPassword, newPassword } = (await request.json()) as { currentPassword?: string; newPassword?: string };
    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Current and new password are required" }, { status: 400 });
    }
    if (currentPassword !== user.password) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: "New password must be at least 6 characters" }, { status: 400 });
    }
    const updated = await updateUser(user.id, { password: newPassword });
    if (!updated) {
      return NextResponse.json({ error: "Failed to change password" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to change password" }, { status: 500 });
  }
}
