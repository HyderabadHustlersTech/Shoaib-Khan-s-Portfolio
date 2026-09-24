import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Opening from "@/components/story/Opening";
import Statement from "@/components/story/Statement";
import Timeline from "@/components/story/Timeline";
import ImpactStats from "@/components/journey/ImpactStats";
import { site, journeyPage } from "@/lib/content";
import { journeySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: journeyPage.metaTitle,
  description: journeyPage.metaDescription,
  alternates: { canonical: journeyPage.path },
  openGraph: {
    type: "profile",
    title: journeyPage.metaTitle,
    description: journeyPage.metaDescription,
    url: `${site.url}${journeyPage.path}`,
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: journeyPage.metaTitle,
    description: journeyPage.metaDescription,
  },
};

/**
 * "My Journey" — told like a film in four scenes:
 * the opening shot → the statement (About) → the reel (Journey) → "and ongoing…",
 * closing on Impact through HH + collaborations.
 */
export default function JourneyPage() {
  return (
    <>
      <JsonLd data={journeySchema} />
      <Navbar />
      <main>
        <Opening />
        <Statement />
        <Timeline />
        <div className="pb-16">
          <ImpactStats />
        </div>
      </main>
      <Footer />
    </>
  );
}
