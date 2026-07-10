import type { ReactNode } from "react";
import { Toaster } from "sonner";
import type { AuthUser } from "@/lib/auth";
import { AuthProvider } from "./auth-provider";

export function Providers({
  initialUser,
  children,
}: {
  initialUser: AuthUser | null;
  children: ReactNode;
}) {
  return (
    <AuthProvider initialUser={initialUser}>
      {children}
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#1e1e2d",
            border: "1px solid #2a2a3e",
            color: "#e5e5ef",
          },
        }}
      />
    </AuthProvider>
  );
}
