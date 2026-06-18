export const SVG_Rough_filter = () => (
    <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <filter id="rough-dot">
        <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="4" seed="5" />
        <feDisplacementMap in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="rough-arrow">
        <feTurbulence type="fractalNoise" baseFrequency="0.19" numOctaves="4" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
)