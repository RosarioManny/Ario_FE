import { _Decorator_Line } from "../../../../assets/SVGs/Decorator_svgs";

interface BurgerProps {
  isToggled: boolean;
  index: 1 | 2 | 3;
  strokeWidth?: number;
  className?: string;
}

export const BurgerLine = ({isToggled, index, strokeWidth = 6, className = ""}: BurgerProps) => {
  const baseClass = `${className} duration-300 ease-in-out transition-all ${isToggled ? 'text-rouge' : 'text-void'}`
  const transformClass = [
    isToggled ? "rotate-45 translate-y-2" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-2" : "",
  ]
  return (
    <_Decorator_Line 
      aria-label={`Burger line ${index}`} 
      strokeWidth={strokeWidth} 
      className={`${baseClass} ${transformClass[index - 1]}`}
    />
  )
}