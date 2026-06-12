// DecoratorGallery.jsx - Uniform height version
import { decoratorListData } from './data'

export const DecoratorGallery = ({ 
  color = "#B23A48", 
  size = 45, // uniform height for all
  className = ""
}) => {
  return (
    <div className={className} style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
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