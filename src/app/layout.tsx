import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import { siteSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Grain from "@/components/Grain";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/assets/favicon.webp", apple: "/assets/favicon.webp" },
  openGraph: {
    type: "website",
    title: site.title,
    description: site.ogDescription,
    url: `${site.url}/`,
    siteName: site.name,
    locale: site.locale,
    // og:image is supplied by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: site.title,
    description: site.ogDescription,
    // twitter:image is supplied by app/twitter-image.tsx
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900,700,500,400&display=swap"
        />
      </head>
      <body>
        <JsonLd data={siteSchema} />
        <Grain />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
