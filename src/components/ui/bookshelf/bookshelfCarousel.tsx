import { useState, useEffect, useRef } from "react";
import { bookShelf } from "./bookShelfData";
import { BookCard,} from "./components/BookShelfCard";


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
      style={{ width: "100%", userSelect: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Single card view */}
      <div style={{ maxWidth: 320, margin: "0 auto" }}>
        <BookCard key={currentIdx} book={bookShelf[currentIdx]} />
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, maxWidth: 320, margin: "16px auto 0" }}>
        {/* Dots */}
        <div style={{ display: "flex", gap: 6 }}>
          {bookShelf.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              style={{
                width: i === currentIdx ? 20 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                background: i === currentIdx ? "#e63946" : "#ccc",
                cursor: "pointer",
                padding: 0,
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", gap: 8 }}>
          {[{ label: "←", fn: handlePrev }, { label: "→", fn: handleNext }].map(({ label, fn }) => (
            <button
              key={label}
              onClick={fn}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1.5px solid currentColor", background: "transparent",
                cursor: "pointer", fontSize: 16, opacity: 0.6,
                transition: "opacity 200ms", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
              className="text-void"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};