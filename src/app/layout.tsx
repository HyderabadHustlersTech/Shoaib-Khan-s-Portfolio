import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
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

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://beingashoaib.com/#website",
      url: "https://beingashoaib.com/",
      name: "Shoaib Khan",
      description: site.description,
      inLanguage: "en-IN",
      publisher: { "@id": "https://beingashoaib.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://beingashoaib.com/#person",
      name: "Shoaib Khan",
      alternateName: "Mohammed Shoaib Choudry",
      url: "https://beingashoaib.com",
      image: "https://beingashoaib.com/assets/skpic.webp",
      jobTitle: ["Content Creator", "Director", "Writer", "Video Editor", "Entrepreneur"],
      description:
        "Content Creator, Video Editor, Director & Entrepreneur from Hyderabad. Co-Founder of Hyderabad Hustlers (HH).",
      email: "shoaib@hyderabadhustlers.com",
      telephone: "+91-87906-87245",
      knowsAbout: [
        "Content Creation",
        "Video Editing",
        "Film Direction",
        "Storytelling",
        "Entrepreneurship",
        "Podcasting",
        "Startups",
      ],
      sameAs: [
        "https://www.instagram.com/beingashoaib",
        "https://www.linkedin.com/in/shoaibkhan",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: "Hyderabad Hustlers",
        url: "https://hyderabadhustlers.com",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://beingashoaib.com/#profilepage",
      url: "https://beingashoaib.com/",
      name: site.title,
      isPartOf: { "@id": "https://beingashoaib.com/#website" },
      about: { "@id": "https://beingashoaib.com/#person" },
      primaryImageOfPage: "https://beingashoaib.com/assets/skpic.webp",
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900,700,500,400&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Grain />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
