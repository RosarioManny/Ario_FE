import { useState, useEffect, useRef } from "react";
import { bookShelf } from "./bookShelfData";
import { BookCard } from "./components/BookShelfCard";

export const BookshelfCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = bookShelf.length;
  const handleNext = () => setCurrentIdx((prev) => (prev >= total - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIdx((prev) => (prev <= 0 ? total - 1 : prev - 1));

  useEffect(() => {
    if (hovered) return;
    autoScrollRef.current = setInterval(handleNext, 5000);
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [hovered, currentIdx]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? handleNext() : handlePrev();
    setTouchStart(null);
  };

  return (
    <div
      style={{ width: "100%", maxWidth: 320, margin: "0 auto", userSelect: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
        {[{ dir: "prev", fn: handlePrev }, { dir: "next", fn: handleNext }].map(({ dir, fn }) => (
          <button
            key={dir}
            onClick={fn}
            style={{
              width: 36, height: 36,
              background: "transparent", border: "none",
              cursor: "pointer", opacity: 0.6,
              transition: "opacity 300ms",
              display: "flex", alignItems: "center", justifyContent: "center",
              filter: "url(#rough-arrow)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            <svg width="45" height="45" viewBox="0 0 20 20">
              {dir === "prev"
                ? <polygon points="15,2 15,18 3,10" fill="#B23A48" />
                : <polygon points="5,2 5,18 17,10" fill="#B23A48" />
              }
            </svg>
          </button>
        ))}
      </div>

      {/* Card — center */}
      <BookCard book={bookShelf[currentIdx]} />

      {/* Dots — centered below card */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
        {bookShelf.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            style={{
              width: i === currentIdx ? 20 : 8,
              height: 6,
              borderRadius: 5,
              border: "none",
              background: i === currentIdx ? "#B23A48" : "#0C1821",
              cursor: "pointer",
              padding: 0,
              transition: "all 400ms ease",
              filter: "url(#rough-dot)",
            }}
          />
        ))}
      </div>
    </div>
  );
};