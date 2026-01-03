// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Milestone {
  title: string
  type: 'video' | 'side-by-side' | 'image' | 'placeholder'
  videoUrl?: string
  leftVideoUrl?: string
  rightVideoUrl?: string
  imageUrl?: string
  placeholderText?: string
}

export interface YearData {
  year: string
  milestones: Milestone[]
}

// ============================================
// JOURNEY DATA
// ============================================

export const journeyData: YearData[] = [
  {
    year: '2017',
    milestones: [
      {
        title: 'My Journey – TBV',
        type: 'side-by-side',
        leftVideoUrl: 'https://www.youtube.com/watch?v=dFVN-VAesNM',
        rightVideoUrl: 'https://www.youtube.com/watch?v=Z9qalRZfCi0',
      },
    ],
  },
  {
    year: '2018',
    milestones: [
      {
        title: 'First Telugu Short Film',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=aQPRRoN5_nU',
      },
    ],
  },
  {
    year: '2020',
    milestones: [
      {
        title: 'One of the Craziest Videos',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=gYuMT0itw9g',
      },
    ],
  },
  {
    year: '2021 – 2022',
    milestones: [
      {
        title: 'Dedicated to Esports – Played on National Level',
        type: 'placeholder',
        placeholderText: 'Video coming soon...',
      },
    ],
  },
  {
    year: 'March 2023',
    milestones: [
      {
        title: 'Joined Edventure Park',
        type: 'image',
        imageUrl: undefined,
      },
      {
        title: 'Stand-Up Comedy Performance',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=3btEtcmv6GI',
      },
    ],
  },
  {
    year: 'Sept 2023',
    milestones: [
      {
        title: "Meeting with Hyderabad's Influencers",
        type: 'video',
        videoUrl: 'https://youtu.be/ou_aBdkTlI8',
      },
    ],
  },
  {
    year: '2023',
    milestones: [
      {
        title: 'EdTalk Panelist',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=YB8Jw19X5fY',
      },
    ],
  },
  {
    year: 'Later 2023',
    milestones: [
      {
        title: 'BioReform & Content Creation',
        type: 'image',
        imageUrl: undefined,
      },
      {
        title: 'Meeting SJ',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=5QiDSWN3T-w',
      },
    ],
  },
  {
    year: '2024',
    milestones: [
      {
        title: 'Formation of Hyderabad Hustlers',
        type: 'image',
        imageUrl: undefined,
      },
      {
        title: 'Joined Terminate Hunger – Volunteering & Service to Humanity',
        type: 'image',
        imageUrl: undefined,
      },
    ],
  },
]
