import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { getSessionUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to your Playverse account.",
};

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const user = await getSessionUser();
  if (user) redirect("/dashboard");
  return <LoginForm />;
}
