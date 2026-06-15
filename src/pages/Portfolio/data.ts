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
    title: "Nomad Cafe & Eatery",
    category: ["Restaurant"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe — bringing their menu and brand online for the first time.",
    logoCard: {
      src: "src/assets/images/portfolio/nomad/nomad_logo.png",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "src/assets/images/portfolio/nomad/nomad_website.png",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "src/assets/images/portfolio/nomad/nomad_menu.png", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "src/assets/images/portfolio/nomad/nomad_mobile.png", alt: "Nomad mobile view", description: "Mobile-first design" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
    ctaLabel: "Let's Chat",
  },
  {
    title: "1 Nomad Cafe & Eatery 1",
    category: ["Ecommerce"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe — bringing their menu and brand online for the first time.",
    logoCard: {
      src: "src/assets/images/portfolio/nomad/nomad_logo.png",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "src/assets/images/portfolio/nomad/nomad_website.png",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "src/assets/images/portfolio/nomad/nomad_menu.png", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "src/assets/images/portfolio/nomad/nomad_mobile.png", alt: "Nomad mobile view", description: "Mobile-first design" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
    ctaLabel: "Let's Chat",
  },
  {
    title: "2 Nomad Cafe & Eatery 2",
    category: ["SaaS"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe — bringing their menu and brand online for the first time.",
    logoCard: {
      src: "src/assets/images/portfolio/nomad/nomad_logo.png",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "src/assets/images/portfolio/nomad/nomad_website.png",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "src/assets/images/portfolio/nomad/nomad_menu.png", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "src/assets/images/portfolio/nomad/nomad_mobile.png", alt: "Nomad mobile view", description: "Mobile-first design" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
    ctaLabel: "Let's Chat",
  },
  {
    title: "4 Nomad Cafe & Eatery 4",
    category: ["Blog"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe — bringing their menu and brand online for the first time.",
    logoCard: {
      src: "src/assets/images/portfolio/nomad/nomad_logo.png",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "src/assets/images/portfolio/nomad/nomad_website.png",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "src/assets/images/portfolio/nomad/nomad_menu.png", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "src/assets/images/portfolio/nomad/nomad_mobile.png", alt: "Nomad mobile view", description: "Mobile-first design" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
    ctaLabel: "Let's Chat",
  },
  {
    title: "3 Nomad Cafe & Eatery 3",
    category: ["Poster"],
    purpose: ["Online Presence"],
    description: "A full digital presence build for a local cafe — bringing their menu and brand online for the first time.",
    logoCard: {
      src: "src/assets/images/portfolio/nomad/nomad_logo.png",
      alt: "Nomad Cafe & Eatery logo",
    },
    websiteUrl: "https://nomadcafeandeatery.com",
    websiteCard: {
      src: "src/assets/images/portfolio/nomad/nomad_website.png",
      alt: "Nomad Cafe website screenshot",
    },
    showcaseCards: [
      { src: "src/assets/images/portfolio/nomad/nomad_menu.png", alt: "Nomad digital menu", description: "Interactive digital menu" },
      { src: "src/assets/images/portfolio/nomad/nomad_mobile.png", alt: "Nomad mobile view", description: "Mobile-first design" },
    ],
    testimonial: {
      quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
      author: "Nomad Cafe",
      role: "Owner",
    },
    ctaLabel: "Let's Chat",
  },
]