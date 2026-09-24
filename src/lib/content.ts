/* ============================================================
   CONTENT — every string, link and asset is copied verbatim
   from the original Shoaib Khan portfolio. Design changes;
   words do not.
   ============================================================ */

export const site = {
  name: "Shoaib Khan",
  fullName: "Mohammed Shoaib Choudry",
  title: "Shoaib Khan - Content Creator & Entrepreneur",
  description:
    "Shoaib Khan is a content creator, director and video editor from Hyderabad, and Co-Founder of Hyderabad Hustlers. A decade of storytelling in film and startups.",
  ogDescription:
    "Content Creator, Director & Video Editor from Hyderabad, and Co-Founder of Hyderabad Hustlers. A decade of storytelling across film, viral content & startups.",
  keywords:
    "Shoaib Khan, Mohammed Shoaib Choudry, Content Creator, Director, Writer, Video Editor, Filmmaker, Hyderabad, Hyderabad Hustlers, HH, Entrepreneur, Podcast, beingashoaib",
  url: "https://beingashoaib.com",
  ogImage: "/assets/skpic.webp",
  locale: "en_IN",
  twitter: "@beingashoaib",
} as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/beingashoaib/",
  instagram: "https://www.instagram.com/beingashoaib",
  x: "https://x.com/beingashoaib",
} as const;

/** `/#id` = a section on the landing page (smooth-scrolled when already there); `/path` = a page. */
export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export const navItems: NavItem[] = [
  { href: "/journey", label: "My Journey", index: "01" },
  { href: "/#experience", label: "Experience", index: "02" },
  { href: "/#contact", label: "Contact", index: "03" },
];

/** Separate page blending About + the Journey reel. */
export const journeyPage = {
  path: "/journey",
  title: "My Journey",
  intro: "The story behind the lens, from first takes in 2017 to Hyderabad Hustlers.",
  metaTitle: "My Journey - Shoaib Khan",
  metaDescription:
    "The story of Shoaib Khan, from viral sketches and short films in 2017 to co-founding Hyderabad Hustlers. A timeline of growth, creativity, and milestones.",
} as const;

export const hero = {
  name: "SHOAIB KHAN",
  roles: ["Content Creator", "Director", "Writer", "Video Editor"],
  cofounderOf: "Hyderabad Hustlers",
  portrait: "/assets/skpic.webp",
  connectLabel: "Let's Connect",
  journeyLabel: "Explore My Journey",
} as const;

/** Splash/intro word cycle ("Contentpreneur" replaces the original's "Content Creator" + "Entrepreneur"). */
export const introWords = ["Contentpreneur", "Co-Founder of"] as const;
export const hhLogo = "/assets/hhlogo.webp";
export const signature = "/assets/Shoaib Khan Signature.webp";

/* ---------------------------------- ABOUT --------------------------------- */

export const about = {
  portrait: "/assets/skback.webp", // 2400w
  portraitSmall: "/assets/skback-1200.webp", // 1200w, for phones
  paragraphs: [
    "I’m a content creator, director, writer, video editor, and entrepreneur from Hyderabad, and I have spent the last decade experimenting with storytelling in every form - from viral YouTube videos and short films to stand-up comedy and startup-focused podcasts.",
    "I started my journey in 2017 with one thought: \"If The Baigan Vines can do such things in Hyderabad content creation, why not me?\" That spark had me creating sketches and short films that quickly went viral and gave me early recognition for my creativity. Over time, my love for video editing and content creation evolved into a mission-driven journey, experimenting with formats like short films, viral clips, and even stand-up comedy, all while consistently sharpening my editing craft.",
    "In 2023, I stepped into entrepreneurship, joining Edventure Park and later BioReform, where I gained hands on exposure to startups and innovation. That phase eventually led me to start Hyderabad Hustlers (HH) in December 2023 - a podcast platform built to tell raw, authentic stories of entrepreneurs. What started as a simple experiment soon grew into a full-fledged movement: direct incubation, 50+ entrepreneur stories, a 1M+ audience, brand collaborations, and even partnering with August Fest.",
    "Today, I continue to balance my creative storytelling and entrepreneurial drive, working with a clear purpose:",
  ],
  mission:
    "to inspire the youth of Hyderabad to build something of their own and follow their passions fearlessly.",
  highlightTerms: [
    "Shoaib Khan",
    "content creator",
    "director",
    "writer",
    "video editor",
    "entrepreneurial",
    "entrepreneur",
    "2017",
    "video editing",
    "content creation",
    "entrepreneurship",
    "Edventure Park",
    "BioReform",
    "Hyderabad Hustlers",
    "50+",
    "entrepreneurs",
    "1M+",
    "audiences",
    "The Baigan Vines",
  ],
} as const;

/* --------------------------------- JOURNEY -------------------------------- */

export interface VideoMilestone {
  type: "video";
  title: string;
  description?: string;
  videoUrl: string;
  startTime?: string;
  endTime?: string;
  openInYouTube?: boolean;
}
export interface SideBySideVideoMilestone {
  type: "side-by-side";
  title: string;
  description?: string;
  leftVideoUrl: string;
  rightVideoUrl: string;
  leftStartTime?: string;
  leftEndTime?: string;
  rightStartTime?: string;
  rightEndTime?: string;
  leftThumbnail?: string;
  rightThumbnail?: string;
}
export interface ImageMilestone {
  type: "image";
  title: string;
  description?: string;
  imageUrl?: string;
}
export interface PlaceholderMilestone {
  type: "placeholder";
  title: string;
  description?: string;
  placeholderText?: string;
}
export interface VideoFileMilestone {
  type: "video-file";
  title: string;
  description?: string;
  videoFile: string;
  /** still frame shown until the clip scrolls near (keeps the mp4 off the initial load) */
  poster?: string;
}
export type Milestone =
  | VideoMilestone
  | SideBySideVideoMilestone
  | ImageMilestone
  | PlaceholderMilestone
  | VideoFileMilestone;

export interface YearData {
  year: string;
  milestones: Milestone[];
}

export const journeyData: YearData[] = [
  {
    year: "2017",
    milestones: [
      {
        type: "side-by-side",
        title: "Early Creative Journey",
        description:
          "Inspired by The Baigan Vines (TBV), created early YouTube sketches and short films.",
        leftVideoUrl: "https://www.youtube.com/watch?v=dFVN-VAesNM",
        rightVideoUrl: "https://www.youtube.com/watch?v=Z9qalRZfCi0",
        rightThumbnail: "/assets/thumbnail1.webp",
      },
    ],
  },
  {
    year: "2018",
    milestones: [
      {
        type: "video",
        title: "First Telugu Short Film",
        description: "Directed my first Telugu short film.",
        videoUrl: "https://www.youtube.com/watch?v=aQPRRoN5_nU",
        startTime: "1:20",
        endTime: "2:13",
      },
    ],
  },
  {
    year: "2020",
    milestones: [
      {
        type: "video",
        title: "My Most Cinematic Video",
        description: "Produced my most cinematic video yet.",
        videoUrl: "https://www.youtube.com/watch?v=gYuMT0itw9g",
      },
    ],
  },
  {
    year: "2021–2022",
    milestones: [
      {
        type: "video-file",
        title: "E-Sports Phase",
        description: "Dedicated time towards E-Sports.",
        videoFile: "/assets/esportsphase.mp4",
        poster: "/assets/esportsphase-poster.webp",
      },
    ],
  },
  {
    year: "2023",
    milestones: [
      {
        type: "image",
        title: "Joined Edventure Park",
        description:
          "Joined Edventure Park (India's 1st/largest student-focused startup incubator).",
        imageUrl: "/assets/JoinedEdventurePark.webp",
      },
      {
        type: "video",
        title: "Meeting with Hyderabad's Influencers",
        description: "",
        videoUrl: "https://youtu.be/ou_aBdkTlI8?si=ttPPPvYA8o1_VPFD",
        startTime: "7:53",
        endTime: "9:02",
        openInYouTube: true,
      },
      {
        type: "image",
        title: "Joined BioReform",
        description:
          "Joined BioReform as a content and media creator (My Startup journey started + Met Azhar Mohiuddin).",
        imageUrl: "/assets/bioreform-content-creation.webp",
      },
      {
        type: "video",
        title: "EdTalk Panelist",
        description: 'Became a panelist for a EdTalk topic called "Influencer Influenza.',
        videoUrl: "https://youtu.be/YB8Jw19X5fY",
      },
      {
        type: "video",
        title: "Meeting Sayeeda Jabri",
        description:
          "Met Sayeeda Jabri, after that a vision sparked - she wanted to bring entrepreneurial talks to media, and Shoaib wanted to cover authentic startup stories, thus started Hyderabad Hustlers.",
        videoUrl: "https://www.youtube.com/watch?v=5QiDSWN3T-w",
        startTime: "2:30",
        endTime: "3:30",
        openInYouTube: true,
      },
      {
        type: "video",
        title: "Stand-Up Comedy Performance",
        description: "",
        videoUrl: "https://youtu.be/3btEtcmv6GI?si=Vz4GABEHCeKSw4w8",
      },
    ],
  },
  {
    year: "2024",
    milestones: [
      {
        type: "image",
        title: "Formation of Hyderabad Hustlers",
        description:
          "Hyderabad Hustlers was formed. Initially ran podcasts while still working with BioReform. Later chose to fully dedicate myself to Hyderabad Hustlers, leaving BioReform. Unlike other startups that go through long pre-incubation phases at EdVenture Park, Hyderabad Hustlers got directly incubated due to the rapid traction.",
        imageUrl: "/assets/Formation of HH.webp",
      },
      {
        type: "image",
        title: "Joined Terminate Hunger",
        description:
          "Met Imad ali at Founders’ Fest and recorded his vision - Loved his vision nd mission and joined his team to terminate the hunger,",
        imageUrl: "/assets/Joined Terminate Hunger.webp",
      },
    ],
  },
];

export const journeyIntro =
  "A timeline of growth, creativity, and milestones that shaped who I am today.";
export const ongoing = { headline: "and ongoing...", sub: "The journey continues" };

/* ------------------------------- IMPACT / STATS --------------------------- */

export interface ImpactStat {
  value: string;
  label: string;
}
export const impactStats: ImpactStat[] = [
  { value: "50+", label: "Videos Created" },
  { value: "1M+", label: "Audience Reached" },
  { value: "15+", label: "Brands Collaborated" },
];

export interface CollaborationBrand {
  name: string;
  logo: string;
}
export const collaboratedBrands: CollaborationBrand[] = [
  { name: "Edventure Park", logo: "/assets/collab logos/evp.webp" },
  { name: "BioReform", logo: "/assets/collab logos/bioreform.webp" },
  { name: "TEDx MJCET", logo: "/assets/collab logos/tedxmjcet.webp" },
  { name: "Startup Hyderabad", logo: "/assets/collab logos/startuphyd.webp" },
  { name: "Terminate Hunger", logo: "/assets/collab logos/Terminate Hunger White.webp" },
  { name: "The August Fest", logo: "/assets/collab logos/The August Fest.webp" },
];

/* ------------------------------- EXPERIENCE ------------------------------- */

export interface Experience {
  company: string;
  role: string;
  logo?: string;
}
export const experiences: Experience[] = [
  { company: "Hyderabad Hustlers", role: "CEO & Co-Founder", logo: "/assets/hhlogo.webp" },
  { company: "Terminate Hunger", role: "Terminator", logo: "/assets/terminatehunger.webp" },
  {
    company: "EdVenture Park",
    role: "Campus Lead, Founders' Friday Lead, Founders' Fest Lead",
    logo: "/assets/evp.webp",
  },
  { company: "BioReform", role: "Former Content & Media Creator", logo: "/assets/bioreform.webp" },
];

/* -------------------------------- CONTACT --------------------------------- */

export type ContactMethod = {
  kind: "phone" | "email" | "instagram";
  label: string;
  value: string;
  href: string;
};
export const contactMethods: ContactMethod[] = [
  { kind: "phone", label: "Call Me", value: "+91 87906 87245", href: "tel:+918790687245" },
  {
    kind: "email",
    label: "Email Me",
    value: "shoaib@hyderabadhustlers.com",
    href: "mailto:shoaib@hyderabadhustlers.com",
  },
  {
    kind: "instagram",
    label: "Follow Me",
    value: "@beingashoaib",
    href: "https://www.instagram.com/beingashoaib",
  },
];

export const contactCta = {
  prefix: "Prefer a quick chat?",
  linkText: "I typically respond within 24 hours",
  href: "https://wa.me/918790687245",
};

/* ---------------------------------- FAQ ----------------------------------- */
/* Rendered visibly (sections/FAQ.tsx) AND as FAQPage JSON-LD (layout.tsx) —
   answer engines quote this format. Answers are drawn from the copy above. */

export interface FaqItem {
  question: string;
  answer: string;
}
export const faqs: FaqItem[] = [
  {
    question: "Who is Shoaib Khan?",
    answer:
      "Shoaib Khan (Mohammed Shoaib Choudry) is a content creator, director, writer, video editor, and entrepreneur from Hyderabad, and the CEO & Co-Founder of Hyderabad Hustlers. He has spent the last decade experimenting with storytelling in every form - from viral YouTube videos and short films to stand-up comedy and startup-focused podcasts.",
  },
  {
    question: "What is Hyderabad Hustlers?",
    answer:
      "Hyderabad Hustlers (HH) is a podcast platform built to tell raw, authentic stories of entrepreneurs, started by Shoaib Khan in December 2023. What started as a simple experiment soon grew into a full-fledged movement: direct incubation, 50+ entrepreneur stories, a 1M+ audience, brand collaborations, and even partnering with August Fest.",
  },
  {
    question: "When did Shoaib Khan start creating content?",
    answer:
      "Shoaib Khan started his journey in 2017 with one thought: \"If The Baigan Vines can do such things in Hyderabad content creation, why not me?\" He began creating sketches and short films that quickly went viral. In 2018 he directed his first Telugu short film.",
  },
  {
    question: "Which organisations has Shoaib Khan worked with?",
    answer:
      "Hyderabad Hustlers (CEO & Co-Founder), Terminate Hunger (Terminator), EdVenture Park (Campus Lead, Founders' Friday Lead, Founders' Fest Lead) and BioReform (Former Content & Media Creator). He has collaborated with 15+ brands including TEDx MJCET, Startup Hyderabad and The August Fest.",
  },
  {
    question: "What is Shoaib Khan's mission?",
    answer:
      "To inspire the youth of Hyderabad to build something of their own and follow their passions fearlessly.",
  },
  {
    question: "How can I contact Shoaib Khan?",
    answer:
      "Email shoaib@hyderabadhustlers.com, call or WhatsApp +91 87906 87245, or message @beingashoaib on Instagram. He typically responds within 24 hours.",
  },
];

export const developerCredit = {
  prefix: "Designed & Developed by",
  name: "Mohammed Shoaib Choudry",
  href: "https://shoaibchoudry.com",
};
