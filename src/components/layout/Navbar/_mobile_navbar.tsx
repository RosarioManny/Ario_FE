import { useState} from "react"
import { Link} from "react-router-dom"
import { _Decorator_Line, _Decorator_PenNib } from "../../../assets/SVGs/Decorator_svgs"
import { BurgerLine } from "./components/m_nav_burgerLine"
import { Animated_RoseArioLogo } from "../../ui/logo/animated_logo"
import { RoughBorder } from "../../ui/border/roughBorder"
import { useLogoSize } from "../../../hooks/Logo/useLogoSize"


export const MobileNavbar = () => {
  // TODO: Open menu on click, close on clikc outside
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { logoSize } = useLogoSize()
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
  <section 
  // style={{ height: logoSize + 20 }}
  className="relative w-full flex pt-4 items-center justify-between ">

    {/* LOGO — left */}
    <Animated_RoseArioLogo />

    {/* BURGER — right, always above menu overlay */}
    <RoughBorder className="z-[60] relative" fill="white">
      <button 
        className="
        flex flex-col justify-center items-center 
        size-[5rem] space-y-1 p-2  
        transition-all duration-1000 ease-in-out"
        onClick={handleMenuToggle}>
        <BurgerLine isToggled={isMenuOpen} index={1} />
        <BurgerLine isToggled={isMenuOpen} index={2} />
        <BurgerLine isToggled={isMenuOpen} index={3} />
      </button>
    </RoughBorder>

    {/* OFF-SCREEN MENU — z-50, below burger */}
    <div className={`
      fixed top-0 left-0 w-full h-screen 
      bg-void 
      flex flex-col items-center justify-center space-y-6
      transition-transform duration-800 ease-in-out z-50
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