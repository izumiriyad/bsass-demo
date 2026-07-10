import { type ReactNode } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "./auth-provider";
import type { AuthUser } from "@/lib/auth";

export function Providers({ initialUser, children }: { initialUser: AuthUser | null; children: ReactNode }) {
  return (
    <AuthProvider initialUser={initialUser}>
      {children}
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#1b1c1e",
            border: "1px solid #2a2c30",
            color: "#f0f0f0",
          },
        }}
      />
    </AuthProvider>
  );
}
