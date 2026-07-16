import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = (await request.json()) as {
      name?: string; email?: string; subject?: string; message?: string;
    };
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }
    return NextResponse.json({ message: "Message received. We'll get back to you within 24 hours." });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
