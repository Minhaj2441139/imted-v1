import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iMTED - AI Energy Assistant | Carbon Neutral Buildings",
  description:
    "Maximum efficiency with minimum effort. iMTED is an AI-powered energy management solution for carbon-neutral buildings. Real-time monitoring, anomaly detection, and cost reduction.",
  keywords: [
    "energy management",
    "AI energy",
    "carbon neutral",
    "building automation",
    "energy optimization",
    "smart buildings",
  ],
  authors: [{ name: "iMTED Team" }],
  creator: "iMTED",
  publisher: "iMTED",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://imted-ai.com"),
  alternates: {
    canonical: "https://imted-ai.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imted-ai.com",
    title: "iMTED - AI Energy Assistant",
    description:
      "Carbon Neutral Buildings through intelligent energy management",
    siteName: "iMTED",
  },
  twitter: {
    card: "summary_large_image",
    title: "iMTED - AI Energy Assistant",
    description:
      "Carbon Neutral Buildings through intelligent energy management",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00d9a3" />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
