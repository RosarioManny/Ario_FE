// DecoratorGallery.jsx - Uniform height version
import { decoratorListData } from './data'

interface DecoratorGalleryProps {
  className?: string;
  color?: string
}
export const DecoratorGallery = ({ 
  color = "#B23A48", 
  className = ""
}: DecoratorGalleryProps) => {
  return (
    <div className={`flex w-full gap-4 md:gap-8 md:justify-start justify-center items-center  ${className}`} 
    >
      {decoratorListData.map(({ component: DecoratorComponent, strokeWidth, optimalSize}, index) => (
        <div 
          key={index} 
          style={{ 
            color, 
            height: optimalSize, 
            width: 'auto',
            flexShrink: 0
          }}
        >
          <DecoratorComponent 
            strokeWidth={strokeWidth}
            className='size-full'
          />
        </div>
      ))}
    </div>
  )
}