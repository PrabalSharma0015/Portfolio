import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import AppShell from "@/components/layout/AppShell";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Prabal Sharma — XR Developer",
    template: "%s | Prabal Sharma",
  },
  description: siteConfig.description,
  keywords: [
    "Prabal Sharma",
    "XR Developer",
    "AR Developer",
    "VR Developer",
    "Unity",
    "Unreal Engine 5",
    "Photogrammetry",
    "3D Geospatial Visualization",
  ],
  authors: [{ name: "Prabal Sharma" }],
  creator: "Prabal Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Prabal Sharma — XR Developer",
    description: siteConfig.description,
    siteName: "Prabal Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabal Sharma — XR Developer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:font-mono focus:text-xs focus:font-bold focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
