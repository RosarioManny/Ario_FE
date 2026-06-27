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

export type PortfolioItem = {
  // == HEADER ==
  title: string               // Business name
  category: Category[]
  purpose: Purpose[]
  brandColors?: string[]

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
}

// DATA 
export const PortfolioData: PortfolioItem[] = [
  {
    title: "Nomad Cafe & Eatery",
    brandColors: ['#FFF6E7', '#BA342C', '#EAA000'], 
    category: ["Restaurant"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe. Bringing their menu, coffee, and brand online for the first time. Allowing for ease of viewing their menu, hours, and story!",
    logoCard: {
      src: "/gallery/portfolio/nomadCafe/Nomad-logo-name-transparent-Black.webp",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "/gallery/portfolio/nomadCafe/Tathi_espresso.webp",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "public/gallery/portfolio/nomadCafe/nomad-café-&-eatery-logo-transparent-bg.webp", alt: "Nomad circle Logo", description: "Mobile-first design" },
    ],
    showcaseDescription: "Showcasing their unique energy and vibe the cafe. These help to display the brand image.",
    miscCards: [
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
  },
  {
    title: "The Rugly Barncalce",
    brandColors: ['#FFF6E7', '#BA342C', '#EAA000'], 
    category: ["Ecommerce"],
    purpose: ["Online Presence", "Brand Launch"],
    description: "A full online presence build for an ecommerce busisness. Customer can shop, view, and contact for custom rugs and premade items. ",
    logoCard: {
      src: "/gallery/portfolio/nomadCafe/Nomad-logo-name-transparent-Black.webp",
      alt: "The Rugly Barnacle logo",
    },
    websiteUrl: "https://theruglybarnacle.com",
    websiteCard: {
      src: "/gallery/portfolio/nomadCafe/Tathi_espresso.webp",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "public/gallery/portfolio/nomadCafe/nomad-café-&-eatery-logo-transparent-bg.webp", alt: "Nomad circle Logo", description: "Mobile-first design" },
    ],
    showcaseDescription: "Showcasing their unique energy and vibe the cafe. These help to display the brand image.",
    miscCards: [
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "/gallery/portfolio/nomadCafe/Shop_sign.webp", alt: "Nomad digital menu", description: "Interactive digital menu" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
  }
]