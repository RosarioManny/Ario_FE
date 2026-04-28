import { useState} from "react"
import { Link, useLocation} from "react-router-dom"
import { _Decorator_Line, _Decorator_PenNib } from "../../../assets/SVGs/Decorator_svgs"
import { BurgerLine } from "./components/m_nav_burgerLine"
import { RoseArioLogo } from "../../ui/logo/logo"
import { RoughBorder } from "../../ui/border/roughBorder"


export const MobileNavbar = () => {
  // TODO: Open menu on click, close on clikc outside
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const location = useLocation()
  // const isHomePage = location.pathname === "/"

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // TODO: Add menu links
  const menuLinks = [
    { name: "Home" , path: ""},
    { name: "contacts" , path: "contacts"},
    { name: "services" , path: "services"},
    { name: "about" , path: "about"},
    { name: "portfolio" , path: "portfolio"},
    { name: "labs" , path: "labs"},
  ]

  return (
  <section className="relative w-full flex pt-3 items-center justify-between ">

    {/* LOGO — left */}
    <RoseArioLogo />

    {/* BURGER — right, always above menu overlay */}
    <RoughBorder className="z-[60] relative" fill="white">
      <button 
        className="flex rotate-2 flex-col justify-center items-center size-[5rem] space-y-1 p-2  transition-all duration-1000 ease-in-out"
        onClick={handleMenuToggle}>
        <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={1} />
        <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={2} />
        <BurgerLine strokeWidth={20} isToggled={isMenuOpen} index={3} />
      </button>
    </RoughBorder>

    {/* OFF-SCREEN MENU — z-50, below burger */}
    <div className={`
      fixed top-0 left-0 w-full h-screen 
      bg-void text-white 
      flex flex-col items-center justify-center space-y-6
      transition-transform duration-700 ease-in-out z-50
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <img className="size-full object-cover opacity-5 absolute" src="src/assets/images/design/background/scratched_Texture_Transparent.png" alt="" />
      <ul className="flex flex-col items-center z-40 gap-4 text-mist">
        {menuLinks.map(({name, path}) => (
          <li key={path} className="comico-font text-2xl tracking-widest">
            <Link to={`/${path}`} onClick={() => setIsMenuOpen(false)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </section>
)
}