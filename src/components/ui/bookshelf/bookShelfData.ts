export interface Book {
  title: string;
  author: string;
  cover: string;
  rating: number;
  description: string;
}

export const bookShelf: Book[] = [
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    cover: "https://m.media-amazon.com/images/I/71f743sOPoL._SY425_.jpg",
    rating: 5,
    description: "Changed how I think about software craftsmanship. A must-read.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY425_.jpg",
    rating: 5,
    description: "Small changes, remarkable results. Applied this to my coding routine.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://m.media-amazon.com/images/I/71T7aD3EOTL._SY425_.jpg",
    rating: 4,
    description: "Opinionated but valuable. Made me obsessive about readable code.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SY425_.jpg",
    rating: 4,
    description: "Convinced me to protect long blocks of uninterrupted focus time.",
  },
]