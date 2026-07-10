import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SidebarProvider } from "@/components/layout/sidebar-provider";
import { AppShell } from "@/components/layout/app-shell";
import { getSessionUser } from "@/lib/auth";
import { SITE } from "@/lib/catalog";

export const metadata: Metadata = {
  title: `${SITE.name} Bangladesh — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [
    "BJ88",
    "BJ88 Bangladesh",
    "BJ88 BD",
    "online casino Bangladesh",
    "sports betting Bangladesh",
    "cricket betting BD",
    "slots Bangladesh",
    "live casino BD",
    "fishing games Bangladesh",
    "BJ88 login",
    "BJ88 register",
    "BDT betting",
    "bKash casino",
    "Nagad betting",
  ],
  openGraph: {
    title: `${SITE.name} Bangladesh — ${SITE.tagline}`,
    description: SITE.description,
    locale: "en_BD",
    siteName: `${SITE.name} Bangladesh`,
    url: SITE.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialUser = await getSessionUser();

  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0d18]">
        <Providers initialUser={initialUser}>
          <SidebarProvider>
            <AppShell>{children}</AppShell>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
