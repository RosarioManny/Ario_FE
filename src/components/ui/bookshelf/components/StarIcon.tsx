export const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="35" height="35" viewBox="0 0 24 24">
    <defs>
      <filter id="rough-star" x="-30%" y="-30%" width="200%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency=".1" numOctaves="5" seed="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <path
      d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
      fill={filled ? "#B23A48" : "#0C1821"}
      stroke={filled ? "#FFC107" : "#DBD5FC"}
      strokeWidth="1.5"
      opacity={filled ? 1 : 0.6}
      strokeLinejoin="round"
      filter="url(#rough-star)"
    />
  </svg>
)