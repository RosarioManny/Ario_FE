import { _Decorator_Line } from "../../../../assets/SVGs/Decorator_svgs";

interface BurgerProps {
  isToggled: boolean;
  index: 1 | 2 | 3;
  strokeWidth?: number;
  className?: string;
}

export const BurgerLine = ({isToggled, index, strokeWidth = 20, className = ""}: BurgerProps) => {
  const baseClass = `${className} duration-300 ease-in-out transition-all ${isToggled ? 'text-rouge' : 'text-void'}`
  const transformClass = [
    isToggled ? "rotate-45 translate-y-3" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-3" : "",
  ]
  return (
    <_Decorator_Line 
      aria-label={`Burger line ${index}`} 
      strokeWidth={!isToggled ? strokeWidth : strokeWidth } 
      className={`${baseClass} ${transformClass[index - 1]}`}
    />
  )
}