import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

const twoFAStore = new Map<string, boolean>();

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { enable } = (await request.json()) as { enable?: boolean };
    twoFAStore.set(user.id, enable ?? false);
    return NextResponse.json({ enabled: enable ?? false });
  } catch {
    return NextResponse.json({ error: "Failed to update 2FA" }, { status: 500 });
  }
}
