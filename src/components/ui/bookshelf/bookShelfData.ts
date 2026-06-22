export interface Book {
  title: string;
  author: string;
  cover: string;
  rating: number;
  description: string;
}

export const bookShelf: Book[] = [
  {
    title: "Shark Heart",
    author: "James Clear",
    cover: "/gallery/bookShelf/SharkHeart_Cover.webp",
    rating: 5,
    description: "Small changes, remarkable results. Applied this to my coding routine.",
  },
  {
    title: "1984",
    author: "Robert C. Martin",
    cover: "/gallery/bookShelf/1984_Cover.webp",
    rating: 4,
    description: 
    `
    The power of resisting authority is what I hold highly. 
    Challenge the status quo and think for yourself. 
    By trying you are breaking through the values of the system. 
    Instilling the sense that their control is finite.
    `
  },
  {
    title: "Kite Runner",
    author: "Cal Newport",
    cover: "/gallery/bookShelf/TheKiteRunner_Cover.webp",
    rating: 4,
    description: "Convinced me to protect long blocks of uninterrupted focus time.",
  },
  {
    title: "American Gods",
    author: "Cal Newport",
    cover: "/gallery/bookShelf/AmericanGods_Original_Cover.webp",
    rating: 4,
    description: "Convinced me to protect long blocks of uninterrupted focus time.",
  },
  {
    title: "The Stranger",
    author: "Cal Newport",
    cover: "/gallery/bookShelf/TheStranger_Cover.webp",
    rating: 4,
    description: "Convinced me to protect long blocks of uninterrupted focus time.",
  },
  {
    title: "If Cats Disappeared From The World",
    author: "Cal Newport",
    cover: "/gallery/bookShelf/IfCatsDisappearedfromtheworld_Cover.webp",
    rating: 4,
    description: "Convinced me to protect long blocks of uninterrupted focus time.",
  },
]