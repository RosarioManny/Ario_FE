// Filled container — SVG renders BEFORE children so fill sits behind content
import React from "react"

export interface RoughBoxProps {
  children: React.ReactNode
  className?: string
  fill?: string
  stroke?: string
  style?: React.CSSProperties
}

export const RoughBox = ({ children, className = "", fill = "none", stroke = "#0C1821" }: RoughBoxProps) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg
      className="absolute pointer-events-none"
      style={{ inset: '-12px', width: 'calc(100% + 24px)', height: 'calc(100% + 24px)' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-box" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="4" seed="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect x="14" y="14" width="calc(100% - 28px)" height="calc(100% - 28px)"
        fill={fill} stroke={stroke} strokeWidth="4" filter="url(#rough-box)" />
    </svg>
    <div className="relative z-10 flex items-center">{children}</div>
  </div>
)
