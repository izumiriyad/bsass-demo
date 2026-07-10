import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SidebarProvider } from "@/components/layout/sidebar-provider";
import { AppShell } from "@/components/layout/app-shell";
import { ModalProvider } from "@/components/providers/modal-provider";
import { getSessionUser } from "@/lib/auth";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: {
    template: "%s | BSL Gaming Bangladesh",
    default: "BSL Gaming Bangladesh",
  },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#121315",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialUser = await getSessionUser();

  return (
    <html lang="en" className="dark">
      <body style={{ backgroundColor: "#121315" }}>
        <Providers initialUser={initialUser}>
          <ModalProvider>
            <SidebarProvider>
              <AppShell>{children}</AppShell>
            </SidebarProvider>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
