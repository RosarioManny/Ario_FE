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

  // Center the active item on mount and on change
useEffect(() => {
  const container = scrollRef.current
  const activeBtn = activeRef.current
  if (!container || !activeBtn) return

  container.scrollTo({
    left: activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2,
    behavior: 'smooth'
  })
}, [activeIndex])

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto scrollbar-hide"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
<div className="flex items-center gap-6 min-w-full justify-right whitespace-nowrap" style={{ paddingInline: '50%' }}>
        {items.map((item, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={i}
              ref={isActive ? activeRef : null}
              onClick={() => onSelect(i)}
              className={`
                comico-font tracking-wider 
                transition-all duration-200 text-center flex justify-center items-center gap-1
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