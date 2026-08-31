export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'mithai' | 'cakes' | 'bakery' | 'savories' | 'fastfood' | 'wedding';
  description: string;
  price: string;
  priceNote?: string;
  isSpecialty?: boolean;
  image: string;
  badge?: string;
  weightOptions?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  urduSnippet?: string;
  source: 'Google Maps' | 'Facebook' | 'Verified Local Customer';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface OperatingHours {
  day: string;
  open: string;
  close: string;
  isOpenToday?: boolean;
  isToday?: boolean;
}

export interface BusinessInfo {
  name: string;
  urduName: string;
  tagline: string;
  subheadline: string;
  address: string;
  fullAddress: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  phonePrimary: string;
  phoneInternational: string;
  phoneSecondary: string;
  landline: string;
  whatsappNumber: string;
  whatsappDirectUrl: string;
  googleMapsUrl: string;
  rating: number;
  reviewCount: number;
  establishedYear: string;
  facebookUrl: string;
  hours: OperatingHours[];
  attributes: string[];
}
