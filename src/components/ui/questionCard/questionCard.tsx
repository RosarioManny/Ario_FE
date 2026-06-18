import { useState } from 'react'
import { RoughBox } from '../containers/roughBox'

interface FAQCardProps {
  question: string
  answer: string
  index: number
}

export const FAQCard = ({ question, answer, index }: FAQCardProps) => {
  const [isToggled, setIsToggled] = useState(false)
  const cardId = `faq-card-${index}`
  const contentId = `faq-content-${index}`

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsToggled(!isToggled)
    }
  }

  return (
    <RoughBox 
      fill="#EFECFF"
      className="w-full"
    >
      <div
        className="flex flex-col w-full"
        role="region"
        aria-labelledby={cardId}
      >
        {/* Question Header */}
        <div
          className="flex justify-between items-center cursor-pointer hover:opacity-50 transition-opacity p-4 gap-4"
          tabIndex={0}
          aria-expanded={isToggled}
          aria-controls={contentId}
          onClick={() => setIsToggled(!isToggled)}
          onKeyDown={handleKeyDown}
          id={cardId}
          role="button"
        >
          <h3 className="comico-font text-void font-semibold text-left flex-1">
            {question}
          </h3>

          
          {/* Toggle Chevron */}
          <button
            onClick={() => setIsToggled(!isToggled)}
            className={`flex items-center justify-center transition-all duration-300 ${
              isToggled ? 'text-rouge' : 'text-tide'
            }`}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: "url(#rough-arrow)",
              transform: isToggled ? 'rotate(90deg)' : 'rotate(270deg)',
            }}
            aria-label={isToggled ? "Collapse answer" : "Expand answer"}
          >
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <polygon points="15,2 15,18 3,10" />
            </svg>
          </button>
        </div>

        {/* Answer Content */}
        <div
          id={contentId}
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isToggled ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="region"
          aria-hidden={!isToggled}
        >
          <div className="epoch-font text-void opacity-70 p-4 border-t-2 border-void">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </RoughBox>
  )
}