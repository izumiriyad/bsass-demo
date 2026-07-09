import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SidebarProvider } from "@/components/layout/sidebar-provider";
import { AppShell } from "@/components/layout/app-shell";
import { getSessionUser } from "@/lib/auth";
import { SITE } from "@/lib/bj88-catalog";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} Bangladesh — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "BJ88 Bangladesh",
    "online casino Bangladesh",
    "sports betting Bangladesh",
    "cricket betting BD",
    "slots Bangladesh",
    "BPL betting",
    "online gaming BD",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} Bangladesh — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-[#0d0d18] text-white">
        <Providers initialUser={user}>
          <SidebarProvider>
            <AppShell>{children}</AppShell>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
