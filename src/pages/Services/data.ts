import type { ReactSVGElement } from "react"
import { _Decorator_Paperball, _Decorator_PenNib, _Decorator_Samosa, _Decorator_Smoke_and_Fire } from "../../assets/SVGs/Decorator_svgs"

// ============================================
// TYPE DEFINITIONS
// ============================================

interface PackageDataProps {
  price: string,
  title: string,
  includes: string[],
  warranties: string[],
  decorator?: ReactSVGElement, 
  delivery: string,
  isCustomQuote?: boolean // For the "starts at" pricing
}

interface CarePlanPricePoints {
  price: number,
  title: string
}

interface CarePlanChart {
  pricePoint: CarePlanPricePoints[],
  prioritySupport: boolean,
  contentTweaks: string,
  uptimeMonitoring: boolean,
  quarterlyCalls: boolean,
  emergencyResponse: boolean,
  hostingSecurity: boolean,
  updateSEOandStats: boolean
}

// ============================================
// PACKAGE DATA (Adjusted to your skills)
// ============================================

export const PackageData: PackageDataProps[] = [
  {
    price: '$5,500+',
    title: 'Custom Web Application',
    includes: [
      'Unlimited pages',
      'Full custom Django + PostgreSQL build',
      'User accounts & JWT authentication',
      'Admin dashboard (Django admin + custom panels)',
      'Payment processing (Stripe integration)',
      'Booking systems, memberships, or data portals',
      'Custom API creation for frontend/mobile connectivity',
      'Advanced system design & database architecture',
      'Image management via Cloudinary',
      'Newsletter/email service integration'
    ],
    warranties: [
      '60-day security and bug warranty',
      '5 revision rounds',
      '2-hour training session + Full technical documentation',
      '6 months of critical updates',
      'Agile process with weekly check-ins'
    ],
    // decorator: _Decorator_PenNib,
    delivery: '6-10+ weeks (quote-based)',
    isCustomQuote: true
  },
  {
    price: '$2,800',
    title: 'Business Site + CMS Dashboard',
    includes: [
      'Up to 8 pages',
      'Custom Django admin dashboard (edit content yourself)',
      'Blog/news section',
      'SEO + Google Analytics setup',
      'Monthly analytics report (first month free)',
      'Image management via Cloudinary',
      'Newsletter/email service integration',
      'Contact form with email backend',
      'External linking (socials, delivery apps, payment links)'
    ],
    warranties: [
      '30-day security and bug warranty',
      '3 revision rounds',
      '1-hour training session + Documentation & guides',
      '3 months of minor edits included'
    ],
    // decorator: _Decorator_Smoke_and_Fire,
    delivery: '3-4 weeks',
  },
  {
    price: '$900',
    title: 'Brochure Site',
    includes: [
      'Up to 3 pages',
      'Static or Django-powered simple design',
      'Contact form with email backend',
      'SEO + Google Analytics setup',
      'External linking (socials, delivery apps, payment links)',
      'Mobile-optimized'
    ],
    warranties: [
      '15-day security and bug warranty',
      '2 revision rounds'
    ],
    // decorator: _Decorator_Paperball,
    delivery: '1-2 weeks',
  },
]

// ============================================
// CARE PLANS (Updated with your skills)
// ============================================

export const CarePlanData: CarePlanChart[] = [
  {
    pricePoint: [
      { price: 59, title: 'Basic' },
    ],
    prioritySupport: true,
    contentTweaks: '15 min',
    uptimeMonitoring: true,
    quarterlyCalls: false,
    emergencyResponse: false,
    hostingSecurity: true,
    updateSEOandStats: false
  },
  {
    pricePoint: [
      { price: 129, title: 'Growth' },
    ],
    prioritySupport: true,
    contentTweaks: '1 hr',
    uptimeMonitoring: true,
    quarterlyCalls: true,
    emergencyResponse: false,
    hostingSecurity: true,
    updateSEOandStats: true
  },
  {
    pricePoint: [
      { price: 249, title: 'Pro' },
    ],
    prioritySupport: true,
    contentTweaks: '2.5 hrs',
    uptimeMonitoring: true,
    quarterlyCalls: true,
    emergencyResponse: true,
    hostingSecurity: true,
    updateSEOandStats: true
  },
]

// ============================================
// E-COMMERCE DATA (Separate from packages)
// ============================================

export const EcommerceData: PackageDataProps[] = [
  {
    title: 'Storefront Essential',
    price: '$4,200',
    includes: [
      'Django-based custom store',
      'Up to 50 products',
      'Stripe payment gateway integration',
      'Shopping cart + checkout flow',
      'JWT-protected user accounts',
      'Order management dashboard',
      'Shipping logic + tax setup',
      'Mobile-optimized'
    ],
    warranties: [
      '30-day security and bug warranty',
      '2 revision rounds',
      '1-hour training + Documentation'
    ],
    delivery: '4-6 weeks',
  },
  {
    title: 'Storefront Pro',
    price: '$7,500+',
    includes: [
      'Everything in Essential +',
      'Custom membership/subscription logic',
      'Recurring billing via Stripe',
      'Multi-vendor or multi-currency support',
      'Advanced analytics dashboard',
      'API for mobile app integration',
      'Custom product configurators',
      'External linking to delivery partners'
    ],
    warranties: [
      '60-day security and bug warranty',
      '4 revision rounds',
      '2-hour training + Full technical documentation',
      '6 months of critical updates'
    ],
    delivery: '6-10+ weeks',
    isCustomQuote: true
  }
]

// ============================================
// ADD-ON / HOURLY DATA
// ============================================

export const AddOnData = [
  { service: 'Extra pages (static)', rate: '$150/page' },
  { service: 'Extra database tables/models', rate: '$300/table' },
  { service: 'Custom API endpoint', rate: '$200/endpoint' },
  { service: 'Emergency after-hours meeting', rate: '$150/hr (30-min min)' },
  { service: 'Migration of existing site', rate: 'Quote-based' },
  { service: 'Full code documentation (if not included)', rate: '$500 flat' },
  { service: 'Content edits beyond monthly allotment', rate: '$75/hr (15-min increments)' }
]

// ============================================
// TECH STACK BADGE DATA (For display)
// ============================================

export const TechStackData = [
  { name: 'Django', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Stripe', icon: '💳' },
  { name: 'JWT Authentication', icon: '🔐' },
  { name: 'Cloudinary', icon: '☁️' },
  { name: 'REST APIs', icon: '🔌' },
]