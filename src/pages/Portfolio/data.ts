// TYPES

type Category = 
  | 'Restaurant'
  | 'Ecommerce'
  | 'Poster'
  | 'Landing Page'
  | 'Portfolio'
  | 'Blog'
  | 'SaaS'

type Purpose =
  | 'Online Presence'
  | 'Redesign'
  | 'Cleaner Look'
  | 'Data Dashboard'
  | 'Brand Launch'

type ImageCard = {
  src: string
  alt: string
  description?: string  // optional caption
}

type Testimonial = {
  quote: string
  author: string
  role?: string  // e.g. "Owner", "CEO"
}

type PortfolioItem = {
  // == HEADER ==
  title: string               // Business name
  category: Category[]
  purpose: Purpose[]

  // == INTRO ==
  description: string         // Initial description of the service

  // == LOGO SECTION ==
  logoCard: ImageCard

  // == WEBSITE ==
  websiteUrl: string
  websiteCard: ImageCard      // Screenshot / preview of their site

  // == PRODUCT / SERVICE SHOWCASE ==
  showcaseCards: ImageCard[]  // 1–2 images showing product or service
  showcaseDescription?: string

  // == MISC ==
  miscCards?: ImageCard[]     // Extra 1–2 images

  // == TESTIMONIAL ==
  testimonial: Testimonial

  // == CTA ==
  ctaLabel?: string         
}

// DATA 
export const PortfolioData: PortfolioItem[] = [
  {
    title: "",
    category: [],
    purpose: [],
    description: "",
    logoCard: {
      src: "",
      alt: "",
      description: "",
    },
    websiteUrl: "",
    websiteCard: {
      src: "",
      alt: "",
      description: "",
    },
    showcaseCards: [
      { src: "", alt: "", description: "" },
      { src: "", alt: "", description: "" },
    ],
    showcaseDescription: "",
    miscCards: [
      { src: "", alt: "" },
    ],
    testimonial: {
      quote: "",
      author: "",
      role: "",
    },
    ctaLabel: "Let's Chat",
  },
]