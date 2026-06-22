// ============================================================
// LANDING PAGE DATA STRUCTURES
// ============================================================

type Service = {
  name: string
  description: string
}

type Testimonial = {
  quote: string
  author: string
  role?: string
  projectName?: string
}

type FeaturedProject = {
  title: string
  category: string
  image: string
  link: string
  description?: string
}

type ProcessStep = {
  number: number
  title: string
  description: string
}

// ============================================================
// SERVICES
// ============================================================

export const services: Service[] = [
  {
    name: "Landing Pages",
    description: "Convert visitors into customers with a high-impact single-page site"
  },
  {
    name: "Restaurant Websites",
    description: "Online menu, reservations, and digital presence for local eateries"
  },
  {
    name: "Ecommerce Stores",
    description: "Sell online with a custom, fully functional store"
  },
  {
    name: "Portfolio Sites",
    description: "Showcase your work with a clean, professional portfolio"
  },
]

// ============================================================
// TESTIMONIALS
// ============================================================

export const testimonials: Testimonial[] = [
  {
    quote: "We had barely had an online presence. He made sure our communications were constant and easy. Keeping us updated on every step and making sure we understood what was happening. Glad to have worked with him!",
    author: "Nomad Cafe & Eatery",
    role: "Owner",
    projectName: "Restaurant Website"
  },
  {
    quote: "Professional, creative, and genuinely cares about the final product. Delivered exactly what we needed and communicated throughout.",
    author: "Client Name",
    role: "Business Owner",
    projectName: "Project Name"
  },
]

// ============================================================
// FEATURED PROJECTS
// ============================================================

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Nomad Cafe & Eatery",
    category: "Restaurant & Cafe",
    image: "public/gallery/portfolio/nomadCafe/Nomad-logo-name-transparent-Black.webp",
    link: "https://nomadcafeandeatery.com",
    description: "Digital menu & online presence"
  },
  {
    title: "The Rugly Barnacle",
    category: "Ecommerce",
    image: "public/gallery/portfolio/theruglybarnacle/RuglyBarnacle_Logo.webp",
    link: "https://theruglybarnacle.com",
    description: "Custom store & Online presence"
  },
]

// ============================================================
// PROCESS
// ============================================================

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description: "We talk about your vision, goals, and audience. No jargon, just honest conversation."
  },
  {
    number: 2,
    title: "Design",
    description: "I create a design that matches your brand and converts visitors into customers."
  },
  {
    number: 3,
    title: "Build",
    description: "Custom code from scratch. No templates, no bloat. Just what you need."
  },
  {
    number: 4,
    title: "Launch",
    description: "We go live and I make sure everything runs smoothly. Your success is mine."
  },
]

// ============================================================
// CONSTANTS
// ============================================================

export const RESPONSE_TIME = "2–3 business days"
export const PROJECT_TIMELINE = "2-6 weeks"
export const VALUE_PROP = "Custom code, honest communication, personal attention"