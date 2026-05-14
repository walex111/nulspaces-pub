import "./globals.css";
import React from "react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://next-mdx-blog.vercel.app"),
  alternates: {
    canonical: "/",
  },

  title: {
    default: "NULSPACES",
    template: "%s | NULSPACES by --LUN.",
  },

  description: "A spatial archive for intentional thought.",

  icons: {
    icon: [{ url: "/N_.svg", type: "image/svg+xml" }],
    apple: [{ url: "/N_.svg" }],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NULSPACES",
  },

  openGraph: {
    type: "website",
    siteName: "NULSPACES",
    title: "NULSPACES",
    description: "A spatial archive for intentional thought.",
    url: "https://next-mdx-blog.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "NULSPACES",
    description: "A spatial archive for intentional thought.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
       antialiased 
        ${ibmPlexMono.variable} 
        ${cormorantGaramond.variable} 
        ${inter.variable}
      `}
      suppressHydrationWarning
    >
      <body className="antialiased tracking-tight">
        <div className="w-full min-h-screen flex flex-col px-5 md:px-10 lg:px-20 font-serif">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
