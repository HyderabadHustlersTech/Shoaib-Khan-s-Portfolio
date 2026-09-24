import { site, socials, hero, hhLogo, faqs, about, journeyPage } from "@/lib/content";

/* JSON-LD for search + answer engines. The site-wide entities (website, person,
   organisation) ship on every page from layout.tsx; each page adds the node(s)
   describing itself — FAQPage only where the FAQ is actually visible. */

const id = (frag: string) => `${site.url}/#${frag}`;

const hyderabad = {
  "@type": "Place",
  name: "Hyderabad, Telangana, India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": id("website"),
      url: `${site.url}/`,
      name: site.name,
      description: site.description,
      inLanguage: "en-IN",
      publisher: { "@id": id("person") },
    },
    {
      "@type": "Person",
      "@id": id("person"),
      name: site.name,
      alternateName: [site.fullName, "beingashoaib"],
      url: site.url,
      image: `${site.url}${hero.portrait}`,
      jobTitle: ["Content Creator", "Director", "Writer", "Video Editor", "Entrepreneur"],
      description: site.description,
      email: "shoaib@hyderabadhustlers.com",
      telephone: "+91-87906-87245",
      knowsAbout: [
        "Content Creation",
        "Video Editing",
        "Film Direction",
        "Screenwriting",
        "Short Films",
        "Storytelling",
        "Stand-up Comedy",
        "Entrepreneurship",
        "Podcasting",
        "Startups",
      ],
      sameAs: [socials.instagram, socials.linkedin, socials.x],
      address: hyderabad.address,
      homeLocation: hyderabad,
      worksFor: [
        { "@id": id("hyderabad-hustlers") },
        { "@type": "Organization", name: "Terminate Hunger" },
      ],
      affiliation: [
        {
          "@type": "Organization",
          name: "EdVenture Park",
          description: "India's 1st/largest student-focused startup incubator.",
        },
        { "@type": "Organization", name: "BioReform" },
      ],
    },
    {
      "@type": "Organization",
      "@id": id("hyderabad-hustlers"),
      name: "Hyderabad Hustlers",
      alternateName: "HH",
      url: "https://hyderabadhustlers.com",
      logo: `${site.url}${hhLogo}`,
      description: "A podcast platform built to tell raw, authentic stories of entrepreneurs.",
      foundingDate: "2023-12",
      foundingLocation: hyderabad,
      founder: { "@id": id("person") },
    },
  ],
};

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": id("profilepage"),
      url: `${site.url}/`,
      name: site.title,
      isPartOf: { "@id": id("website") },
      about: { "@id": id("person") },
      mainEntity: { "@id": id("person") },
      primaryImageOfPage: `${site.url}${hero.portrait}`,
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": id("faq"),
      url: `${site.url}/#faq`,
      isPartOf: { "@id": id("website") },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const journeyUrl = `${site.url}${journeyPage.path}`;

export const journeySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${journeyUrl}#page`,
      url: journeyUrl,
      name: journeyPage.metaTitle,
      description: journeyPage.metaDescription,
      isPartOf: { "@id": id("website") },
      about: { "@id": id("person") },
      mainEntity: { "@id": id("person") },
      primaryImageOfPage: `${site.url}${about.portrait}`,
      breadcrumb: { "@id": `${journeyUrl}#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${journeyUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: journeyPage.title, item: journeyUrl },
      ],
    },
  ],
};
