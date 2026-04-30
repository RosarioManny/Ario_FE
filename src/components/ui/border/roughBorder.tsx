interface RoughBorderProps {
  children: React.ReactNode;
  className?: string;
  fill?: string;
  stroke?: string;
  style?: React.CSSProperties;
}

export const RoughBorder = ({ children, className = "", fill = "transparent", stroke = "#0C1821" }: RoughBorderProps) => (
  <div className={`relative ${className}`}>
    
    <svg 
      className="absolute pointer-events-none z-10" 
      style={{ inset: '-12px', width: 'calc(100% + 24px)', height: 'calc(100% + 24px)' }}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="4" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      {/* Filled rough background */}
      <rect 
        x="14" y="14" 
        width="calc(100% - 28px)" height="calc(100% - 28px)"
        fill={fill}
        stroke={stroke}
        strokeWidth="4"
        filter="url(#rough)"
      />
    </svg>

    {/* Transparent content on top */}
    <div className="relative z-20">
      {children}
    </div>
  </div>
)