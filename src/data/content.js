/*
  src/data/content.js
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    Separates DATA from PRESENTATION.  All text, dates, links, and
    structured content live here so you can update the site content
    without touching any component code.

    In a real PERN app this would come from an API call; for the
    single-page template we export plain JS objects / arrays.
*/

export const siteConfig = {
  name:    'Convocation 2026',
  college: 'BITS Pilani, Hyderabad Campus',
  email:   'convocation@hyderabad.bits-pilani.ac.in',
  phone:   '+91-40-66303820',
  address: 'Jawahar Nagar, Kapra (M), Medchal District, Hyderabad – 500078, Telangana, India',
  website: 'https://www.bits-pilani.ac.in/hyderabad/',
  universityWebsite: 'https://www.bits-pilani.ac.in/',
};

export const importantDates = [
  {
    id: 1,
    label: 'Registration Deadline',
    date:  'To be announced',
    icon:  '📋',
  },
  {
    id: 2,
    label: 'Convocation Rehearsal',
    date:  '25-July-2026',
    icon:  '🏛️',
  },
  {
    id: 3,
    label: 'Convocation Ceremony',
    date:  '26-July-2026',
    icon:  '🎓',
  },
];

export const livestreams = {
  current: {
    label: 'Convocation 2026 Live Stream',
    url:   null, // Will be live closer to date
  },
  previous: [
    { year: 2025, url: 'https://www.youtube.com/live/IPBNjL6YpF8?si=aEuR_cdMAFWzxwf_' },
    { year: 2024, url: 'https://www.youtube.com/live/s-uR0x6zhUE' },
    { year: 2023, url: 'https://www.youtube.com/live/puIoUt4MNZE?si=OGOsHINiqeCHW4UT' },
    { year: 2022, url: 'https://www.youtube.com/live/m50jvIpaDIY?si=wixH4aRhbGQCtScW' },
  ],
};

export const instructions = [
  {
    id:       1,
    category: 'Dress Code – Boys',
    icon:     '👔',
    items: [
      'Full-sleeve formal shirts with trousers',
      'Formal leather shoes',
      'Attire must be suitable for wearing a graduation gown',
    ],
    note: 'Adhering to the dress code is essential to maintain the dignity and decorum of the ceremony.',
  },
  {
    id:       2,
    category: 'Dress Code – Girls',
    icon:     '👗',
    items: [
      'Sarees, churidars, formal long gowns, or dresses',
      'Formal sandals or shoes',
      'Outfit should be comfortable and appropriate for wearing a graduation gown',
    ],
    note: 'Adhering to the dress code is essential to maintain the dignity and decorum of the ceremony.',
  },
  {
    id:       3,
    category: 'Travel Advisory',
    icon:     '✈️',
    items: [
      'Plan return travel after returning the gowns',
      'Preferably travel after 5:00 PM',
      'Ensure full participation in the ceremony without inconvenience',
    ],
    note: 'Graduands are requested to plan accordingly to avoid missing any part of the ceremony.',
  },
  {
    id:       4,
    category: 'General Guidelines',
    icon:     '📝',
    items: [
      'Carry your student identity card on the day of the ceremony',
      'Arrive at the venue at least 45 minutes before the ceremony',
      'Mobile phones must be kept on silent during the ceremony',
      'Photography is allowed only in designated areas',
    ],
    note: null,
  },
];

export const galleryImages = [
  { id: 1, src: '/images/Banners/2025/001.png', alt: 'Convocation 2025 – Ceremony Hall' },
  { id: 2, src: '/images/Banners/2025/002.png', alt: 'Convocation 2025 – Degree Distribution' },
  { id: 3, src: '/images/Banners/2025/003.png', alt: 'Convocation 2025 – Graduates' },
  { id: 4, src: '/images/Banners/2025/004.png', alt: 'Convocation 2025 – Faculty' },
  { id: 5, src: '/images/Banners/2025/005.png', alt: 'Convocation 2025 – Campus' },
  { id: 6, src: '/images/Banners/2025/007.png', alt: 'Convocation 2025 – Group Photo' },
];

export const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Important Dates', href: '#dates' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Live Stream',  href: '#livestream' },
  { label: 'Instructions', href: '#instructions' },
  { label: 'Contact',      href: '#contact' },
];
