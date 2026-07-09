import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";
import { getSessionUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your free Playverse account and claim your welcome bonus.",
};

export const dynamic = "force-dynamic";

export default async function RegisterPage() {
  const user = await getSessionUser();
  if (user) redirect("/dashboard");
  return <RegisterForm />;
}
