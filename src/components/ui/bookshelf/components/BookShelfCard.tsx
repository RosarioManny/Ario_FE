import { useState } from "react"
import { RoughBorder } from "../../containers/roughBorder"
import { type Book } from "../bookShelfData"
import { StarIcon } from "./StarIcon"

export const BookCard = ({ book }: { book: Book }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <RoughBorder className="relative" stroke="#0C1821">
      <div
        style={{  width: "100%", paddingBottom: "100%", cursor: "pointer" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        {/* Inner clipping container — image + overlay stay inside */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>

          {/* Cover image */}
          <img
            src={book.cover}
            alt={book.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              zIndex: -1,
            }}
          />

          {/* Hover overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(30, 35, 25, 0.88)",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: hovered ? 1 : 0,
              transition: "opacity 250ms ease",
              zIndex: 1,
            }}
          >
            <div>
              <h3
                style={{ fontSize: 16, lineHeight: 1.2, marginBottom: 4, color: "#f0ece0" }}
                className="header-text"
              >
                {book.title}
              </h3>
              <p
                style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e63946", marginBottom: 10 }}
                className="epoch-font"
              >
                {book.author}
              </p>
              <p
                style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(240,236,224,0.85)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical" }}
                className="epoch-font"
              >
                {book.description}
              </p>
            </div>

            <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= book.rating} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </RoughBorder>
  )
}