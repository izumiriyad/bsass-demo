"use client";

import * as React from "react";
import { AuthProvider } from "@/components/providers/auth-provider";
import { Toaster } from "@/components/ui/sonner";
import type { SafeUser } from "@/lib/types";

/** Client-side root providers: auth context + toast notifications. */
export function Providers({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: SafeUser | null;
}) {
  return (
    <AuthProvider initialUser={initialUser}>
      {children}
      <Toaster />
    </AuthProvider>
  );
}
