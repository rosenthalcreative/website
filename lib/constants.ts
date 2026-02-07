// Brand constants for Rosenthal Creative
export const BRAND_COLORS = {
  pink: '#E89B9B',
  coral: '#F5A6A6',
  gold: '#D4AF37',
  cream: '#FAF7F2',
  darkGray: '#2C2C2C',
  lightGray: '#F8F8F8',
} as const;

export const COMPANY_INFO = {
  name: 'Rosenthal Creative',
  tagline: 'Design + Make',
  description: 'Events + Interiors + Florals + Things',
  established: '2012',
  email: 'info@rosenthalcreative.com',
  instagram: '@rosenthal_creative',
  instagramUrl: 'https://www.instagram.com/rosenthal_creative',
} as const;

export const SERVICES = [
  {
    id: 'events',
    title: 'Event Management',
    description: 'Creating unforgettable experiences for corporate events, mall activations, and themed parties',
    icon: '🎉',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Designing and styling beautiful weddings and birthday parties with attention to every detail',
    icon: '💐',
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Transforming spaces with thoughtful design and elegant styling solutions',
    icon: '🏠',
  },
  {
    id: 'custom-builds',
    title: 'Custom Builds',
    description: 'Crafting bespoke pieces and installations in our workshop for your unique events',
    icon: '🔨',
  },
] as const;

export const CATEGORIES = {
  all: 'All',
  events: 'Events',
  weddings: 'Weddings',
  interior: 'Interior Design',
  'custom-builds': 'Custom Builds',
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
