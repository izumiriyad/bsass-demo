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
    default: "BSL Gaming Bangladesh — #1 Online Casino, Cricket Betting & Slots",
  },
  description: SITE.description,
  keywords: [
    "BSL Gaming", "Bangladesh casino", "online casino Bangladesh", "cricket betting Bangladesh",
    "BPL betting", "IPL betting", "slots Bangladesh", "bKash casino", "Nagad betting",
    "live casino Bangladesh", "cockfighting SV388", "betting exchange Bangladesh",
    "online gaming BD", "BDT casino", "Bangladesh sports betting",
  ],
  authors: [{ name: "BSL Gaming" }],
  creator: "BSL Gaming",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: SITE.url,
    siteName: "BSL Gaming Bangladesh",
    title: "BSL Gaming Bangladesh — #1 Online Casino, Cricket Betting & Slots",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "BSL Gaming Bangladesh",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121315",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineCasino",
  name: "BSL Gaming",
  description: SITE.description,
  url: SITE.url,
  currenciesAccepted: "BDT",
  priceRange: "৳500+",
  address: { "@type": "PostalAddress", addressCountry: "BD" },
  license: "Curaçao eGaming No. 365/JAZ",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialUser = await getSessionUser();

  return (
    <html lang="en" className="dark">
      <body style={{ backgroundColor: "#121315" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
