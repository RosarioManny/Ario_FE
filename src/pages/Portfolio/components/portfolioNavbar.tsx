import { useRef, useEffect } from "react"
import { type PortfolioItem } from "../data"

type Props = {
  items: PortfolioItem[]
  activeIndex: number
  onSelect: (i: number) => void
}

export const PortfolioNav = ({ items, activeIndex, onSelect }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeIndex])

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto scrollbar-hide"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex items-center justify-center gap-6 w-max mx-auto px-4 whitespace-nowrap">
        {items.map((item, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={i}
              ref={isActive ? activeRef : null}
              onClick={() => onSelect(i)}
              style={{ scrollMarginInline: '40vw' }}
              className={`
                comico-font tracking-wider
                transition-all duration-200 flex items-center gap-1
                ${isActive
                  ? "text-rouge scale-110"
                  : "text-void opacity-50 hover:opacity-80"
                }
              `}
            >
              {item.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}