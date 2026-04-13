import { useState } from "react"
import { Link } from "react-router-dom"
import { _Decorator_Line, _Decorator_PenNib } from "../../../assets/SVGs/Decorator_svgs"
import { BurgerLine } from "./components/m_nav_burgerLine"


export const MobileNavbar = () => {
  // TODO: Open menu on click, close on clikc outside
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  // TODO: Add menu links
  return (
    <nav className="mobile-navbar">
      <button 
        className="z-40 relative flex flex-col justify-center items-center  overscroll-none size-[4rem] space-y-1 p-2"
        onClick={handleMenuToggle}>
        <BurgerLine className="" strokeWidth={20} isToggled={isMenuOpen} index={1} />
        <BurgerLine className="" strokeWidth={20} isToggled={isMenuOpen} index={2} />
        <BurgerLine className="" strokeWidth={20} isToggled={isMenuOpen} index={3} />
      </button>
    </nav>
  )
}