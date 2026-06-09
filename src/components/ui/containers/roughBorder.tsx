import React from "react"
 
interface RoughBorderProps {
  children: React.ReactNode
  className?: string
  stroke?: string
  style?: React.CSSProperties
}
 
// Border only — SVG renders AFTER children so it sits on top of content
export const RoughBorder = ({ children, className = "", stroke = "#0C1821" }: RoughBorderProps) => (
  <div className={`relative ${className}`}>
    <div className="relative z-10">{children}</div>
    <svg
      className="absolute pointer-events-none z-20"
      style={{ inset: '-12px', width: 'calc(100% + 24px)', height: 'calc(100% + 24px)' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-border" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="4" seed="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect x="14" y="14" width="calc(100% - 28px)" height="calc(100% - 28px)"
        fill="none" stroke={stroke} strokeWidth="4" filter="url(#rough-border)" />
    </svg>
  </div>
)